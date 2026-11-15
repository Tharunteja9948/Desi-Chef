"""
Serializers for User Pantry.
"""

from rest_framework import serializers
from apps.pantry.models import UserPantryItem
from apps.ingredients.models import Ingredient

class UserPantryItemSerializer(serializers.ModelSerializer):
    ingredient_name = serializers.CharField(source='display_name', read_only=True)
    ingredient_id = serializers.PrimaryKeyRelatedField(
        queryset=Ingredient.objects.all(),
        source='ingredient',
        required=False,
        allow_null=True
    )

    class Meta:
        model = UserPantryItem
        fields = ['id', 'ingredient_id', 'ingredient_name', 'custom_name', 'created_at']

    def validate(self, data):
        ingredient = data.get('ingredient')
        custom_name = data.get('custom_name', '').strip()
        if not ingredient and not custom_name:
            raise serializers.ValidationError("Either an ingredient ID or a custom ingredient name must be provided.")
        return data

    def create(self, validated_data):
        user = self.context['request'].user
        ingredient = validated_data.get('ingredient')
        custom_name = validated_data.get('custom_name', '').strip()

        # Duplicate prevention per user
        if ingredient:
            existing = UserPantryItem.objects.filter(user=user, ingredient=ingredient).first()
            if existing:
                return existing
        elif custom_name:
            existing = UserPantryItem.objects.filter(user=user, custom_name__iexact=custom_name).first()
            if existing:
                return existing

        return UserPantryItem.objects.create(user=user, **validated_data)
