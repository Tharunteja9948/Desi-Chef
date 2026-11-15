"""
Admin configuration for Pantry.
"""

from django.contrib import admin
from apps.pantry.models import UserPantryItem

@admin.register(UserPantryItem)
class UserPantryItemAdmin(admin.ModelAdmin):
    list_display = ('user', 'display_name', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('user__username', 'ingredient__name', 'custom_name')
