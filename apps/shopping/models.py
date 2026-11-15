"""
Shopping List models for AI Chef.
Supports combining missing ingredients across multiple dishes.
"""

from django.db import models
from django.contrib.auth.models import User
from apps.recipes.models import Recipe

class ShoppingList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='shopping_lists')
    title = models.CharField(max_length=150, default='My Grocery List')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-updated_at']

    def __str__(self):
        return f"{self.user.username} - {self.title}"

class ShoppingListItem(models.Model):
    shopping_list = models.ForeignKey(ShoppingList, on_delete=models.CASCADE, related_name='items')
    recipe = models.ForeignKey(Recipe, on_delete=models.SET_NULL, null=True, blank=True, related_name='shopping_origins')
    ingredient_name = models.CharField(max_length=150)
    amount = models.CharField(max_length=100, blank=True)
    is_purchased = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['is_purchased', 'ingredient_name']

    def __str__(self):
        return f"{self.ingredient_name} ({self.amount})"
