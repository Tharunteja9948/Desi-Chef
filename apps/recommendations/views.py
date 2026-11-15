"""
Recommendation API View.
Calculates high-precision recipe recommendations from pantry ingredients with explainable breakdown.
"""

from rest_framework import views, status, permissions
from rest_framework.response import Response
from django.db.models import Prefetch
from apps.recipes.models import Recipe
from apps.ingredients.models import RecipeIngredient
from apps.recommendations.services import calculate_recipe_match, rank_recipes_by_pantry
from apps.recommendations.models import RecommendationQueryLog

class RecommendationAPIView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        """
        Calculates ingredient-based Indian recipe recommendations.
        Payload:
        {
            "ingredients": ["Rice", "Chicken", "Onions"],
            "category": "rice",       # Optional category filter
            "veg": true,              # Optional veg boolean
            "max_time": 30,           # Optional max prep time in minutes
            "limit": 24               # Max results returned
        }
        """
        pantry_items = request.data.get('ingredients', [])
        if not isinstance(pantry_items, list):
            return Response({'error': 'ingredients must be a list of ingredient names.'}, status=status.HTTP_400_BAD_REQUEST)

        # Clean pantry strings
        pantry_cleaned = [str(item).strip() for item in pantry_items if str(item).strip()]

        if not pantry_cleaned:
            return Response({
                'total_found': 0,
                'pantry_ingredients_used': [],
                'ready_dishes_count': 0,
                'results': [],
                'message': 'Select ingredients available in your kitchen to view instant recipe matches.'
            }, status=status.HTTP_200_OK)

        # Base Recipe Queryset with optimized eager loading
        qs = Recipe.objects.select_related('category').prefetch_related(
            Prefetch('recipe_ingredients', queryset=RecipeIngredient.objects.select_related('ingredient'))
        )

        # Optional Filters
        cat_slug = request.data.get('category')
        if cat_slug and cat_slug != 'all':
            qs = qs.filter(category__slug=cat_slug)

        veg = request.data.get('veg')
        if veg is not None:
            if isinstance(veg, bool):
                qs = qs.filter(veg=veg)
            elif str(veg).lower() in ('true', '1'):
                qs = qs.filter(veg=True)
            elif str(veg).lower() in ('false', '0'):
                qs = qs.filter(veg=False)

        max_time = request.data.get('max_time')
        if max_time:
            try:
                qs = qs.filter(prep_time__lte=int(max_time))
            except (ValueError, TypeError):
                pass

        # Serialize candidates for matching engine
        candidates = []
        for r in qs:
            ingredients_list = []
            for ri in r.recipe_ingredients.all():
                ingredients_list.append({
                    'id': ri.ingredient.id,
                    'name': ri.ingredient.name,
                    'raw_name': ri.raw_name,
                    'amount': ri.amount,
                    'is_optional': ri.is_optional
                })

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
                'image': r.image,
                'description': r.description,
                'ingredients': ingredients_list
            })

        # Run Recommendation Engine
        ranked = rank_recipes_by_pantry(candidates, pantry_cleaned)

        ready_count = sum(1 for r in ranked if r['match_info']['is_ready'])

        limit = request.data.get('limit', 50)
        try:
            limit = int(limit)
        except (ValueError, TypeError):
            limit = 50

        # Log query analytics
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
            'results': ranked[:limit]
        }, status=status.HTTP_200_OK)

    def get(self, request):
        """Convenience GET endpoint supporting query string: ?ingredients=Rice,Eggs"""
        ing_str = request.query_params.get('ingredients', '')
        items = [i.strip() for i in ing_str.split(',') if i.strip()]
        data = {
            'ingredients': items,
            'category': request.query_params.get('category'),
            'veg': request.query_params.get('veg'),
            'max_time': request.query_params.get('max_time')
        }
        request._full_data = data
        return self.post(request)
