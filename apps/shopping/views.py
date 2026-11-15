"""
Views for Grocery Shopping Lists.
"""

from rest_framework import viewsets, permissions, status, views
from rest_framework.decorators import action
from rest_framework.response import Response
from apps.shopping.models import ShoppingList, ShoppingListItem
from apps.shopping.serializers import ShoppingListSerializer, ShoppingListItemSerializer
from apps.recipes.models import Recipe
from apps.recommendations.services import ingredient_matches

class ShoppingListViewSet(viewsets.ModelViewSet):
    serializer_class = ShoppingListSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        # Strict user isolation
        return ShoppingList.objects.filter(user=self.request.user).prefetch_related('items__recipe')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=True, methods=['post'])
    def add_item(self, request, pk=None):
        """Add a single item to this shopping list."""
        shopping_list = self.get_object()
        ing_name = request.data.get('ingredient_name', '').strip()
        amount = request.data.get('amount', '').strip()
        if not ing_name:
            return Response({'error': 'ingredient_name is required.'}, status=status.HTTP_400_BAD_REQUEST)

        item = ShoppingListItem.objects.create(
            shopping_list=shopping_list,
            ingredient_name=ing_name,
            amount=amount
        )
        return Response(ShoppingListItemSerializer(item).data, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['post'], url_path='items/(?P<item_id>[^/.]+)/toggle')
    def toggle_item(self, request, pk=None, item_id=None):
        """Toggle purchased status for an item in this list."""
        shopping_list = self.get_object()
        item = shopping_list.items.filter(id=item_id).first()
        if not item:
            return Response({'error': 'Item not found in this shopping list.'}, status=status.HTTP_404_NOT_FOUND)

        item.is_purchased = not item.is_purchased
        item.save()
        return Response(ShoppingListItemSerializer(item).data)

    @action(detail=False, methods=['post'])
    def generate_from_recipes(self, request):
        """
        Generate or append to an active shopping list from one or more selected recipes.
        Optionally filters out ingredients the user already has in their pantry.
        Payload:
        {
            "recipe_uids": ["classic-idli", "biryani"],
            "list_title": "Weekend Dinner Shopping",
            "exclude_pantry": true
        }
        """
        uids = request.data.get('recipe_uids', [])
        title = request.data.get('list_title', 'My AI Chef Grocery List')
        exclude_pantry = request.data.get('exclude_pantry', True)

        if not uids or not isinstance(uids, list):
            return Response({'error': 'recipe_uids must be a non-empty list of recipe IDs.'}, status=status.HTTP_400_BAD_REQUEST)

        # Get pantry items to exclude
        pantry_items = []
        if exclude_pantry:
            user_pantry = request.user.pantry_items.all()
            pantry_items = [p.display_name for p in user_pantry]

        # Get or create active shopping list
        shopping_list, _ = ShoppingList.objects.get_or_create(
            user=request.user,
            title=title,
            is_active=True
        )

        recipes = Recipe.objects.filter(recipe_uid__in=uids).prefetch_related('recipe_ingredients__ingredient')
        added_count = 0

        for r in recipes:
            for ri in r.recipe_ingredients.all():
                ing_name = ri.ingredient.name
                
                # Check if user already has it
                if exclude_pantry and any(ingredient_matches(ing_name, p) for p in pantry_items):
                    continue

                # Avoid duplicate entries in list
                existing = shopping_list.items.filter(ingredient_name__iexact=ing_name).first()
                if not existing:
                    ShoppingListItem.objects.create(
                        shopping_list=shopping_list,
                        recipe=r,
                        ingredient_name=ing_name,
                        amount=ri.amount
                    )
                    added_count += 1

        serializer = ShoppingListSerializer(shopping_list)
        return Response({
            'message': f"Added {added_count} missing ingredients to {shopping_list.title}.",
            'shopping_list': serializer.data
        }, status=status.HTTP_201_CREATED)
