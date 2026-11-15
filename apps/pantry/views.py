"""
User Pantry Views and API ViewSets.
Guarantees strict user isolation and provides bulk toggle endpoints.
"""

from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from apps.pantry.models import UserPantryItem
from apps.pantry.serializers import UserPantryItemSerializer
from apps.ingredients.models import Ingredient

class UserPantryViewSet(viewsets.ModelViewSet):
    serializer_class = UserPantryItemSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        # Strict user isolation: users can NEVER see or modify another user's pantry
        return UserPantryItem.objects.filter(user=self.request.user).select_related('ingredient')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=['post'])
    def sync_session_pantry(self, request):
        """
        Syncs an array of ingredient names (e.g. from frontend local pantry) into the user's permanent pantry.
        Payload: {"items": ["Rice", "Eggs", "Chicken"]}
        """
        items = request.data.get('items', [])
        if not isinstance(items, list):
            return Response({'error': 'items must be an array of ingredient names.'}, status=status.HTTP_400_BAD_REQUEST)

        created_items = []
        for name in items:
            name_str = str(name).strip()
            if not name_str:
                continue

            # Look up normalized ingredient
            ing = Ingredient.objects.filter(name__iexact=name_str).first()
            if not ing:
                ing = Ingredient.objects.filter(normalized_name=name_str.lower()).first()

            if ing:
                obj, _ = UserPantryItem.objects.get_or_create(user=request.user, ingredient=ing)
                created_items.append(obj)
            else:
                obj, _ = UserPantryItem.objects.get_or_create(user=request.user, custom_name=name_str)
                created_items.append(obj)

        serializer = self.get_serializer(created_items, many=True)
        return Response({
            'message': f"Synchronized {len(created_items)} pantry items.",
            'pantry': serializer.data
        }, status=status.HTTP_200_OK)

    @action(detail=False, methods=['delete'])
    def clear_all(self, request):
        """Clears all pantry items for the authenticated user."""
        count, _ = self.get_queryset().delete()
        return Response({'message': f'Cleared {count} pantry items.'}, status=status.HTTP_200_OK)
