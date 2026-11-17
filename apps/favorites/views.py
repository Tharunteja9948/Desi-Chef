"""
Favorite Recipes ViewSet for DesiChef.
Guarantees strict user isolation.
"""

from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from apps.favorites.models import FavoriteRecipe
from apps.favorites.serializers import FavoriteRecipeSerializer
from apps.recipes.models import Recipe


class FavoriteRecipeViewSet(viewsets.ModelViewSet):
    serializer_class = FavoriteRecipeSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        # Strict user isolation
        return FavoriteRecipe.objects.filter(user=self.request.user).select_related('recipe__category')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=['post'])
    def toggle(self, request):
        """
        Convenience endpoint to toggle favorite status by recipe_uid, slug, or ID.
        Payload: {"recipe_uid": "classic-idli"}
        """
        uid = request.data.get('recipe_uid')
        if not uid:
            return Response({'error': 'recipe_uid is required.'}, status=status.HTTP_400_BAD_REQUEST)

        recipe = Recipe.objects.filter(recipe_uid=uid).first()
        if not recipe:
            recipe = Recipe.objects.filter(slug=uid).first()
        if not recipe and str(uid).isdigit():
            recipe = Recipe.objects.filter(id=int(uid)).first()

        if not recipe:
            return Response({'error': 'Recipe not found.'}, status=status.HTTP_404_NOT_FOUND)

        fav = FavoriteRecipe.objects.filter(user=request.user, recipe=recipe).first()
        if fav:
            fav.delete()
            return Response({'is_favorited': False, 'message': f'Removed {recipe.name} from favorites.'})
        else:
            FavoriteRecipe.objects.create(user=request.user, recipe=recipe)
            return Response({'is_favorited': True, 'message': f'Added {recipe.name} to favorites.'})
