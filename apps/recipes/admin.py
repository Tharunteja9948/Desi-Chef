"""
Django admin configuration for Recipes.
"""

from django.contrib import admin
from apps.recipes.models import Category, Region, Cuisine, Recipe, RecipeInstruction
from apps.ingredients.models import RecipeIngredient

class RecipeIngredientInline(admin.TabularInline):
    model = RecipeIngredient
    extra = 1

class RecipeInstructionInline(admin.TabularInline):
    model = RecipeInstruction
    extra = 1

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'subcategory', 'veg', 'prep_time', 'servings')
    list_filter = ('veg', 'category', 'subcategory', 'region')
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}
    inlines = [RecipeIngredientInline, RecipeInstructionInline]

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'description')
    prepopulated_fields = {'slug': ('name',)}

admin.site.register(Region)
admin.site.register(Cuisine)
