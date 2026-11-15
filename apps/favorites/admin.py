"""
Admin configuration for Favorites.
"""

from django.contrib import admin
from apps.favorites.models import FavoriteRecipe

@admin.register(FavoriteRecipe)
class FavoriteRecipeAdmin(admin.ModelAdmin):
    list_display = ('user', 'recipe', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('user__username', 'recipe__name')
