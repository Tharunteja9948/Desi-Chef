"""
Views and API endpoints for Ingredients and Substitutions.
"""

from rest_framework import viewsets, filters
from apps.ingredients.models import Ingredient, IngredientSubstitution
from apps.ingredients.serializers import IngredientSerializer, IngredientSubstitutionSerializer

class IngredientViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Ingredient.objects.all().prefetch_related('synonyms')
    serializer_class = IngredientSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'normalized_name', 'synonyms__synonym']
    ordering_fields = ['name', 'is_staple']
    ordering = ['name']

class IngredientSubstitutionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IngredientSubstitution.objects.select_related('original_ingredient', 'substitute_ingredient')
    serializer_class = IngredientSubstitutionSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        ing_id = self.request.query_params.get('ingredient_id')
        if ing_id and ing_id.isdigit():
            qs = qs.filter(original_ingredient_id=int(ing_id))
        return qs
