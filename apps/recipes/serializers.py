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
    ingredients = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()

    class Meta:
        model = Recipe
        fields = [
            'id', 'recipe_uid', 'name', 'slug', 'category', 'category_name', 'category_slug',
            'subcategory', 'cuisine', 'region', 'dietary_type', 'veg',
            'prep_time', 'cook_time', 'total_time', 'servings', 'difficulty',
            'image', 'description', 'ingredients_count', 'ingredients'
        ]

    def get_image(self, obj):
        if not obj.image:
            return '/static/images/dishes/traditional-rice.jpg'
        if obj.image.startswith('/') or obj.image.startswith('http'):
            return obj.image
        return f"/static/{obj.image}"

    def get_ingredients(self, obj):
        # Lightweight ingredient objects for fast client-side match calculation
        return [
            {
                'name': ri.ingredient.name if ri.ingredient else ri.raw_name,
                'raw_name': ri.raw_name,
                'amount': ri.amount,
                'is_optional': ri.is_optional
            }
            for ri in obj.recipe_ingredients.all()
        ]

class RecipeDetailSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    category_slug = serializers.CharField(source='category.slug', read_only=True)
    ingredients = RecipeIngredientSerializer(source='recipe_ingredients', many=True, read_only=True)
    instructions = RecipeInstructionSerializer(many=True, read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Recipe
        fields = [
            'id', 'recipe_uid', 'name', 'slug', 'category', 'category_name', 'category_slug',
            'subcategory', 'cuisine', 'region', 'dietary_type', 'veg',
            'prep_time', 'cook_time', 'total_time', 'servings', 'difficulty',
            'image', 'description', 'ingredients', 'instructions', 'created_at', 'updated_at'
        ]

    def get_image(self, obj):
        if not obj.image:
            return '/static/images/dishes/traditional-rice.jpg'
        if obj.image.startswith('/') or obj.image.startswith('http'):
            return obj.image
        return f"/static/{obj.image}"
