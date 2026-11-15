"""
Ingredient models for AI Chef.
"""

from django.db import models
from apps.recipes.models import Recipe

class Ingredient(models.Model):
    name = models.CharField(max_length=150, unique=True, db_index=True)
    normalized_name = models.CharField(max_length=150, unique=True, db_index=True)
    category = models.CharField(max_length=80, default='Pantry Staple', db_index=True)
    is_staple = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class RecipeIngredient(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='recipe_ingredients')
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='recipe_usages')
    raw_name = models.CharField(max_length=200)
    amount = models.CharField(max_length=100)
    parsed_quantity = models.FloatField(null=True, blank=True)
    parsed_unit = models.CharField(max_length=50, blank=True)
    is_optional = models.BooleanField(default=False)
    preparation_note = models.CharField(max_length=200, blank=True)

    class Meta:
        ordering = ['id']
        indexes = [
            models.Index(fields=['recipe', 'ingredient']),
        ]

    def __str__(self):
        return f"{self.raw_name} ({self.amount}) for {self.recipe.name}"

class IngredientSynonym(models.Model):
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='synonyms')
    synonym = models.CharField(max_length=150, db_index=True)
    language = models.CharField(max_length=50, default='English')

    class Meta:
        unique_together = ('ingredient', 'synonym')

    def __str__(self):
        return f"{self.synonym} -> {self.ingredient.name} ({self.language})"

class IngredientSubstitution(models.Model):
    EQUIVALENCE_CHOICES = [
        ('Equivalent', 'Equivalent (1:1 direct drop-in)'),
        ('Approximate', 'Approximate (Slight flavor or texture shift)'),
        ('Dietary Alternative', 'Dietary Alternative (Vegan, Jain or Low-Calorie)'),
    ]

    original_ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='substitutes_for')
    substitute_ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='alternative_to')
    ratio = models.CharField(max_length=50, default='1:1')
    notes = models.TextField(blank=True)
    equivalence_type = models.CharField(max_length=30, choices=EQUIVALENCE_CHOICES, default='Equivalent')

    class Meta:
        unique_together = ('original_ingredient', 'substitute_ingredient')

    def __str__(self):
        return f"Substitute for {self.original_ingredient.name}: {self.substitute_ingredient.name} ({self.ratio})"
