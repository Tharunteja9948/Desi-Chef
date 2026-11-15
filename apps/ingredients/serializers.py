"""
Serializers for Ingredients, Synonyms and Substitutions.
"""

from rest_framework import serializers
from apps.ingredients.models import Ingredient, IngredientSynonym, IngredientSubstitution

class IngredientSynonymSerializer(serializers.ModelSerializer):
    class Meta:
        model = IngredientSynonym
        fields = ['synonym', 'language']

class IngredientSerializer(serializers.ModelSerializer):
    synonyms = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Ingredient
        fields = ['id', 'name', 'normalized_name', 'category', 'is_staple', 'synonyms']

class IngredientSubstitutionSerializer(serializers.ModelSerializer):
    original_name = serializers.CharField(source='original_ingredient.name', read_only=True)
    substitute_name = serializers.CharField(source='substitute_ingredient.name', read_only=True)

    class Meta:
        model = IngredientSubstitution
        fields = ['id', 'original_ingredient', 'original_name', 'substitute_ingredient', 'substitute_name', 'ratio', 'notes', 'equivalence_type']
