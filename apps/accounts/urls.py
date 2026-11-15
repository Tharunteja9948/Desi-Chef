"""
Accounts URL routing.
"""

from django.urls import path
from apps.accounts.views import (
    RegisterAPIView,
    LoginAPIView,
    LogoutAPIView,
    CurrentUserAPIView,
    ProfileAPIView
)

urlpatterns = [
    path('register/', RegisterAPIView.as_view(), name='auth_register'),
    path('login/', LoginAPIView.as_view(), name='auth_login'),
    path('logout/', LogoutAPIView.as_view(), name='auth_logout'),
    path('me/', CurrentUserAPIView.as_view(), name='auth_current_user'),
    path('profile/', ProfileAPIView.as_view(), name='auth_profile'),
]
