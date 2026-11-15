"""
Ingredient URL routing.
"""

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.ingredients.views import IngredientViewSet, IngredientSubstitutionViewSet

router = DefaultRouter()
router.register(r'substitutions', IngredientSubstitutionViewSet, basename='substitution')
router.register(r'', IngredientViewSet, basename='ingredient')

urlpatterns = [
    path('', include(router.urls)),
]
