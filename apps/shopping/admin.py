"""
Admin configuration for Shopping Lists.
"""

from django.contrib import admin
from apps.shopping.models import ShoppingList, ShoppingListItem

class ShoppingListItemInline(admin.TabularInline):
    model = ShoppingListItem
    extra = 1

@admin.register(ShoppingList)
class ShoppingListAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'is_active', 'created_at')
    list_filter = ('is_active', 'created_at')
    search_fields = ('title', 'user__username')
    inlines = [ShoppingListItemInline]
