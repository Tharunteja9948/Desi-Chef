"""
Serializers for Shopping List and Grocery Items.
"""

from rest_framework import serializers
from apps.shopping.models import ShoppingList, ShoppingListItem

class ShoppingListItemSerializer(serializers.ModelSerializer):
    recipe_name = serializers.CharField(source='recipe.name', read_only=True)

    class Meta:
        model = ShoppingListItem
        fields = ['id', 'shopping_list', 'recipe', 'recipe_name', 'ingredient_name', 'amount', 'is_purchased', 'created_at']
        read_only_fields = ['id', 'created_at']

class ShoppingListSerializer(serializers.ModelSerializer):
    items = ShoppingListItemSerializer(many=True, read_only=True)
    items_count = serializers.IntegerField(source='items.count', read_only=True)
    pending_count = serializers.SerializerMethodField()

    class Meta:
        model = ShoppingList
        fields = ['id', 'title', 'is_active', 'items_count', 'pending_count', 'items', 'created_at', 'updated_at']

    def get_pending_count(self, obj):
        return obj.items.filter(is_purchased=False).count()
