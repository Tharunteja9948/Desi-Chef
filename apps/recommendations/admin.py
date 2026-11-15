"""
Admin configuration for Recommendations.
"""

from django.contrib import admin
from apps.recommendations.models import RecommendationQueryLog

@admin.register(RecommendationQueryLog)
class RecommendationQueryLogAdmin(admin.ModelAdmin):
    list_display = ('created_at', 'user', 'query_ingredients', 'results_count', 'top_dish_name')
    list_filter = ('created_at',)
    search_fields = ('query_ingredients', 'top_dish_name')
