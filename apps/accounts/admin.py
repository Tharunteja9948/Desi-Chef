"""
Admin configuration for Accounts.
"""

from django.contrib import admin
from apps.accounts.models import UserProfile

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'dietary_preference', 'favorite_cuisine', 'created_at')
    list_filter = ('dietary_preference',)
    search_fields = ('user__username', 'user__email')
