"""
Recipe models for AI Chef Indian Recipe Discovery & Cooking Platform.
"""

from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Categories'
        ordering = ['name']

    def __str__(self):
        return self.name

class Region(models.Model):
    name = models.CharField(max_length=100, unique=True)
    state = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class Cuisine(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(blank=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class Recipe(models.Model):
    DIETARY_CHOICES = [
        ('Vegetarian', 'Vegetarian'),
        ('Non-Vegetarian', 'Non-Vegetarian'),
        ('Vegan', 'Vegan'),
    ]

    DIFFICULTY_CHOICES = [
        ('Easy', 'Easy'),
        ('Medium', 'Medium'),
        ('Advanced', 'Advanced'),
    ]

    recipe_uid = models.CharField(max_length=100, unique=True, db_index=True)
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=220, unique=True, db_index=True)
    description = models.TextField(blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='recipes')
    subcategory = models.CharField(max_length=100, db_index=True)
    cuisine = models.CharField(max_length=100, default='Homestyle', db_index=True)
    region = models.CharField(max_length=100, default='Pan-Indian', db_index=True)
    dietary_type = models.CharField(max_length=30, choices=DIETARY_CHOICES, default='Vegetarian', db_index=True)
    veg = models.BooleanField(default=True, db_index=True)
    prep_time = models.PositiveIntegerField(help_text='Prep time in minutes', default=15)
    cook_time = models.PositiveIntegerField(help_text='Cooking time in minutes', default=15)
    total_time = models.PositiveIntegerField(help_text='Total time in minutes', default=0)
    servings = models.PositiveIntegerField(default=2)
    difficulty = models.CharField(max_length=20, choices=DIFFICULTY_CHOICES, default='Easy')
    image = models.CharField(max_length=300, default='images/dishes/traditional-rice.jpg')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']
        indexes = [
            models.Index(fields=['name', 'veg']),
            models.Index(fields=['category', 'subcategory']),
            models.Index(fields=['prep_time']),
        ]

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.total_time:
            self.total_time = self.prep_time + self.cook_time
        super().save(*args, **kwargs)

class RecipeInstruction(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='instructions')
    step_number = models.PositiveIntegerField()
    instruction = models.TextField()
    duration_mins = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['step_number']
        unique_together = ('recipe', 'step_number')

    def __str__(self):
        return f"{self.recipe.name} - Step {self.step_number}"
