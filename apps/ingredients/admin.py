"""
Admin configuration for Ingredients.
"""

from django.contrib import admin
from apps.ingredients.models import Ingredient, IngredientSynonym, IngredientSubstitution

class IngredientSynonymInline(admin.TabularInline):
    model = IngredientSynonym
    extra = 1

@admin.register(Ingredient)
class IngredientAdmin(admin.ModelAdmin):
    list_display = ('name', 'normalized_name', 'category', 'is_staple')
    list_filter = ('is_staple', 'category')
    search_fields = ('name', 'normalized_name')
    inlines = [IngredientSynonymInline]

@admin.register(IngredientSubstitution)
class IngredientSubstitutionAdmin(admin.ModelAdmin):
    list_display = ('original_ingredient', 'substitute_ingredient', 'ratio', 'equivalence_type')
    list_filter = ('equivalence_type',)
    search_fields = ('original_ingredient__name', 'substitute_ingredient__name')
