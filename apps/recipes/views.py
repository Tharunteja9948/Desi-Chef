"""
Views and API ViewSets for Recipes and Categories.
"""

from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q
from apps.recipes.models import Category, Recipe
from apps.recipes.serializers import (
    CategorySerializer,
    RecipeListSerializer,
    RecipeDetailSerializer
)
from apps.recipes.scaling import scale_ingredient_amount

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all().prefetch_related('recipes')
    serializer_class = CategorySerializer
    lookup_field = 'slug'

class RecipeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Recipe.objects.select_related('category').prefetch_related('recipe_ingredients__ingredient', 'instructions')
    lookup_field = 'recipe_uid'

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return RecipeDetailSerializer
        return RecipeListSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        params = self.request.query_params

        # Category / Subcategory Filter
        cat = params.get('category')
        if cat and cat != 'all':
            qs = qs.filter(category__slug=cat)

        subcat = params.get('subcategory')
        if subcat and subcat != 'all':
            qs = qs.filter(subcategory=subcat)

        # Dietary Filter (veg / nonveg)
        veg = params.get('veg')
        if veg is not None:
            if veg.lower() in ('true', '1'):
                qs = qs.filter(veg=True)
            elif veg.lower() in ('false', '0'):
                qs = qs.filter(veg=False)

        # Max Cooking Time Filter (e.g. max_time=20)
        max_time = params.get('max_time')
        if max_time and max_time.isdigit():
            qs = qs.filter(prep_time__lte=int(max_time))

        # Search Query (Title, Description, or Ingredients)
        q = params.get('search')
        if q:
            q_clean = q.strip()
            qs = qs.filter(
                Q(name__icontains=q_clean) |
                Q(description__icontains=q_clean) |
                Q(recipe_ingredients__ingredient__name__icontains=q_clean) |
                Q(recipe_ingredients__raw_name__icontains=q_clean)
            ).distinct()

        # Sorting
        sort = params.get('sort', 'name')
        if sort == 'time':
            qs = qs.order_by('prep_time', 'name')
        elif sort == 'name':
            qs = qs.order_by('name')

        return qs

    @action(detail=True, methods=['get'])
    def scale(self, request, recipe_uid=None):
        """
        Dynamically scale recipe ingredients for custom target servings.
        Query param: ?servings=4
        """
        recipe = self.get_object()
        target_servings = request.query_params.get('servings')
        try:
            target_servings = int(target_servings)
            if target_servings <= 0:
                target_servings = recipe.servings
        except (TypeError, ValueError):
            target_servings = recipe.servings

        factor = target_servings / recipe.servings if recipe.servings > 0 else 1.0

        scaled_ingredients = []
        for ri in recipe.recipe_ingredients.all():
            scaled_ingredients.append({
                'ingredient_id': ri.ingredient.id,
                'name': ri.ingredient.name,
                'raw_name': ri.raw_name,
                'base_amount': ri.amount,
                'scaled_amount': scale_ingredient_amount(ri.amount, factor),
                'is_optional': ri.is_optional
            })

        return Response({
            'recipe_id': recipe.recipe_uid,
            'name': recipe.name,
            'base_servings': recipe.servings,
            'target_servings': target_servings,
            'multiplier': factor,
            'scaled_ingredients': scaled_ingredients
        })
