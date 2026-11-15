"""
User pantry models for AI Chef.
Supports user-isolated pantry persistence.
"""

from django.db import models
from django.contrib.auth.models import User
from apps.ingredients.models import Ingredient

class UserPantryItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='pantry_items')
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, null=True, blank=True, related_name='pantry_holders')
    custom_name = models.CharField(max_length=150, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ('user', 'ingredient')

    def __str__(self):
        name = self.ingredient.name if self.ingredient else self.custom_name
        return f"{self.user.username}'s Pantry: {name}"

    @property
    def display_name(self):
        return self.ingredient.name if self.ingredient else self.custom_name
