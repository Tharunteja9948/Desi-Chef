"""
Pantry URL routing.
"""

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.pantry.views import UserPantryViewSet

router = DefaultRouter()
router.register(r'', UserPantryViewSet, basename='pantry')

urlpatterns = [
    path('', include(router.urls)),
]
