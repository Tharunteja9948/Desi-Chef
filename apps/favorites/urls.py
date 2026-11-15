"""
Favorites URL routing.
"""

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.favorites.views import FavoriteRecipeViewSet

router = DefaultRouter()
router.register(r'', FavoriteRecipeViewSet, basename='favorite')

urlpatterns = [
    path('', include(router.urls)),
]
