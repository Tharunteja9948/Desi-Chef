"""
Recipe URL routing.
"""

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.recipes.views import CategoryViewSet, RecipeViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'', RecipeViewSet, basename='recipe')

urlpatterns = [
    path('', include(router.urls)),
]
