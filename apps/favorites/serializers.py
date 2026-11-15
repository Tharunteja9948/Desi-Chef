"""
Serializers for Favorite Recipes.
"""

from rest_framework import serializers
from apps.favorites.models import FavoriteRecipe
from apps.recipes.serializers import RecipeListSerializer
from apps.recipes.models import Recipe

class FavoriteRecipeSerializer(serializers.ModelSerializer):
    recipe_details = RecipeListSerializer(source='recipe', read_only=True)
    recipe_id = serializers.PrimaryKeyRelatedField(queryset=Recipe.objects.all(), source='recipe', write_only=True)

    class Meta:
        model = FavoriteRecipe
        fields = ['id', 'recipe', 'recipe_id', 'recipe_details', 'notes', 'created_at']
        read_only_fields = ['id', 'recipe', 'created_at']

    def create(self, validated_data):
        user = self.context['request'].user
        recipe = validated_data['recipe']
        fav, _ = FavoriteRecipe.objects.get_or_create(user=user, recipe=recipe, defaults={'notes': validated_data.get('notes', '')})
        return fav
