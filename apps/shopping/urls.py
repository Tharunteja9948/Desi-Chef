"""
Shopping URL routing.
"""

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.shopping.views import ShoppingListViewSet

router = DefaultRouter()
router.register(r'', ShoppingListViewSet, basename='shopping_list')

urlpatterns = [
    path('', include(router.urls)),
]
