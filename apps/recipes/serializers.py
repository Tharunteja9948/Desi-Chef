"""
Django REST Framework serializers for Recipes and Categories.
"""

from rest_framework import serializers
from apps.recipes.models import Category, Recipe, RecipeInstruction
from apps.ingredients.models import RecipeIngredient

class CategorySerializer(serializers.ModelSerializer):
    recipe_count = serializers.IntegerField(source='recipes.count', read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'recipe_count']

class RecipeInstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeInstruction
        fields = ['step_number', 'instruction', 'duration_mins']

class RecipeIngredientSerializer(serializers.ModelSerializer):
    ingredient_name = serializers.CharField(source='ingredient.name', read_only=True)

    class Meta:
        model = RecipeIngredient
        fields = ['id', 'ingredient', 'ingredient_name', 'raw_name', 'amount', 'is_optional', 'preparation_note']

class RecipeListSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    category_slug = serializers.CharField(source='category.slug', read_only=True)
    ingredients_count = serializers.IntegerField(source='recipe_ingredients.count', read_only=True)

    class Meta:
        model = Recipe
        fields = [
            'id', 'recipe_uid', 'name', 'slug', 'category', 'category_name', 'category_slug',
            'subcategory', 'cuisine', 'region', 'dietary_type', 'veg',
            'prep_time', 'cook_time', 'total_time', 'servings', 'difficulty',
            'image', 'description', 'ingredients_count'
        ]

class RecipeDetailSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    category_slug = serializers.CharField(source='category.slug', read_only=True)
    ingredients = RecipeIngredientSerializer(source='recipe_ingredients', many=True, read_only=True)
    instructions = RecipeInstructionSerializer(many=True, read_only=True)

    class Meta:
        model = Recipe
        fields = [
            'id', 'recipe_uid', 'name', 'slug', 'category', 'category_name', 'category_slug',
            'subcategory', 'cuisine', 'region', 'dietary_type', 'veg',
            'prep_time', 'cook_time', 'total_time', 'servings', 'difficulty',
            'image', 'description', 'ingredients', 'instructions', 'created_at', 'updated_at'
        ]
