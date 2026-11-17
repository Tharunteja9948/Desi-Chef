"""
Recommendation API View for DesiChef.
Calculates high-precision recipe recommendations from pantry ingredients with explainable breakdown.
Supports dietary filtering including verified vegan recipes.
"""

from rest_framework import views, status, permissions
from rest_framework.response import Response
from django.db.models import Prefetch
from apps.recipes.models import Recipe
from apps.ingredients.models import RecipeIngredient
from apps.recommendations.services import (
    calculate_recipe_match,
    rank_recipes_by_pantry,
    is_recipe_vegan
)
from apps.recommendations.models import RecommendationQueryLog


class RecommendationAPIView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def _process_recommendations(self, request, params):
        pantry_items = params.get('ingredients', [])
        if isinstance(pantry_items, str):
            pantry_items = [i.strip() for i in pantry_items.split(',') if i.strip()]
        elif not isinstance(pantry_items, list):
            return Response({'error': 'ingredients must be a list or comma-separated string of ingredient names.'}, status=status.HTTP_400_BAD_REQUEST)

        # Clean pantry strings
        pantry_cleaned = [str(item).strip() for item in pantry_items if str(item).strip()]

        if not pantry_cleaned:
            return Response({
                'total_found': 0,
                'pantry_ingredients_used': [],
                'ready_dishes_count': 0,
                'results': [],
                'recommendations': [],
                'message': 'Select ingredients available in your kitchen to view instant recipe matches.'
            }, status=status.HTTP_200_OK)

        # Base Recipe Queryset with optimized eager loading
        qs = Recipe.objects.select_related('category').prefetch_related(
            Prefetch('recipe_ingredients', queryset=RecipeIngredient.objects.select_related('ingredient'))
        )

        # Category Filter
        cat_slug = params.get('category')
        if cat_slug and cat_slug != 'all':
            qs = qs.filter(category__slug=cat_slug)

        # Dietary Filter (handles 'dietary', 'veg', 'vegan')
        dietary = str(params.get('dietary', '')).lower()
        veg_val = params.get('veg')
        vegan_val = params.get('vegan')

        is_vegan_requested = (
            dietary == 'vegan' or
            vegan_val is True or
            str(vegan_val).lower() in ('true', '1')
        )
        is_veg_requested = (
            dietary == 'veg' or
            veg_val is True or
            str(veg_val).lower() in ('true', '1')
        )
        is_nonveg_requested = (
            dietary == 'nonveg' or
            veg_val is False or
            str(veg_val).lower() in ('false', '0')
        )

        if is_vegan_requested:
            qs = qs.filter(veg=True)
        elif is_veg_requested:
            qs = qs.filter(veg=True)
        elif is_nonveg_requested:
            qs = qs.filter(veg=False)

        # Max cooking time filter
        max_time = params.get('max_time')
        if max_time:
            try:
                qs = qs.filter(prep_time__lte=int(max_time))
            except (ValueError, TypeError):
                pass

        # Serialize candidates for matching engine
        candidates = []
        for r in qs:
            # If vegan is requested, verify all ingredients are vegan
            if is_vegan_requested and not is_recipe_vegan(r):
                continue

            ingredients_list = []
            for ri in r.recipe_ingredients.all():
                ingredients_list.append({
                    'id': ri.ingredient.id if ri.ingredient else None,
                    'name': ri.ingredient.name if ri.ingredient else ri.raw_name,
                    'raw_name': ri.raw_name,
                    'amount': ri.amount,
                    'is_optional': ri.is_optional
                })

            img = r.image or 'images/dishes/traditional-rice.jpg'
            if not img.startswith('/') and not img.startswith('http'):
                img = f"/static/{img}"

            candidates.append({
                'id': r.id,
                'recipe_uid': r.recipe_uid,
                'name': r.name,
                'slug': r.slug,
                'category_name': r.category.name,
                'category_slug': r.category.slug,
                'subcategory': r.subcategory,
                'cuisine': r.cuisine,
                'region': r.region,
                'dietary_type': r.dietary_type,
                'veg': r.veg,
                'prep_time': r.prep_time,
                'cook_time': r.cook_time,
                'total_time': r.total_time,
                'servings': r.servings,
                'image': img,
                'description': r.description,
                'ingredients': ingredients_list
            })

        # Run Recommendation Engine
        ranked = rank_recipes_by_pantry(candidates, pantry_cleaned)
        ready_count = sum(1 for r in ranked if r['match_info']['is_ready'])

        limit = params.get('limit', 50)
        try:
            limit = int(limit)
        except (ValueError, TypeError):
            limit = 50

        results = ranked[:limit]

        # Log query analytics safely
        try:
            RecommendationQueryLog.objects.create(
                user=request.user if request.user.is_authenticated else None,
                query_ingredients=", ".join(pantry_cleaned[:10]),
                results_count=len(ranked),
                top_dish_name=ranked[0]['name'] if ranked else ''
            )
        except Exception:
            pass

        return Response({
            'total_found': len(ranked),
            'pantry_ingredients_used': pantry_cleaned,
            'ready_dishes_count': ready_count,
            'results': results,
            'recommendations': results,
        }, status=status.HTTP_200_OK)

    def post(self, request):
        return self._process_recommendations(request, request.data)

    def get(self, request):
        params = {
            'ingredients': request.query_params.get('ingredients', ''),
            'category': request.query_params.get('category'),
            'veg': request.query_params.get('veg'),
            'vegan': request.query_params.get('vegan'),
            'dietary': request.query_params.get('dietary'),
            'max_time': request.query_params.get('max_time'),
            'limit': request.query_params.get('limit', 50)
        }
        return self._process_recommendations(request, params)
