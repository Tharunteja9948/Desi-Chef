"""
Recommendation logs and caching models for AI Chef.
"""

from django.db import models
from django.contrib.auth.models import User

class RecommendationQueryLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='query_logs')
    query_ingredients = models.TextField(help_text='Comma-separated pantry ingredients queried')
    results_count = models.PositiveIntegerField(default=0)
    top_dish_name = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Query on {self.created_at.strftime('%Y-%m-%d %H:%M')}: {self.results_count} results"
