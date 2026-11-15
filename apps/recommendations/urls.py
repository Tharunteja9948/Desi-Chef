"""
Recommendations URL routing.
"""

from django.urls import path
from apps.recommendations.views import RecommendationAPIView

urlpatterns = [
    path('', RecommendationAPIView.as_view(), name='recommendation_engine'),
]
