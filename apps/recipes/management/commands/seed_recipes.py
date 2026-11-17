"""
Django management command to seed all 512 validated Indian recipes into the database.
Usage: python manage.py seed_recipes
Idempotent and safe to run repeatedly across SQLite, MySQL, and PostgreSQL.
"""

import json
from pathlib import Path
from django.core.management.base import BaseCommand
from django.db import transaction
from django.conf import settings
from apps.recipes.models import Category, Recipe, RecipeInstruction
from apps.ingredients.models import Ingredient, RecipeIngredient, IngredientSynonym
from apps.recommendations.services import SYNONYM_DICTIONARY


class Command(BaseCommand):
    help = 'Seeds all 512 authentic Indian homestyle recipes, categories, ingredients and steps.'

    def handle(self, *args, **options):
        base_dir = settings.BASE_DIR
        data_dir = base_dir / 'data' / 'validated'

        recipes_file = data_dir / 'recipes_512.json'
        categories_file = data_dir / 'categories.json'

        if not recipes_file.exists():
            self.stderr.write(self.style.ERROR(f"Recipes file not found at: {recipes_file}"))
            return

        with open(categories_file, 'r', encoding='utf-8') as f:
            categories_data = json.load(f)

        with open(recipes_file, 'r', encoding='utf-8') as f:
            recipes_data = json.load(f)

        self.stdout.write(self.style.NOTICE(f"Seeding {len(recipes_data)} recipes across {len(categories_data)} categories..."))

        with transaction.atomic():
            # 1. Seed Categories
            category_objs = {}
            for cat in categories_data:
                obj, _ = Category.objects.update_or_create(
                    slug=cat['slug'],
                    defaults={
                        'name': cat['name'],
                        'description': cat.get('description', '')
                    }
                )
                category_objs[cat['slug']] = obj

            self.stdout.write(self.style.SUCCESS(f"Seeded {len(category_objs)} categories."))

            # 2. Cache existing ingredients
            ingredient_cache = {}
            for ing in Ingredient.objects.all():
                ingredient_cache[ing.normalized_name] = ing

            # 3. Seed Recipes, RecipeIngredients, and RecipeInstructions
            created_recipes = 0
            updated_recipes = 0
            created_ingredients = 0
            created_recipe_ingredients = 0
            created_instructions = 0

            for r_data in recipes_data:
                cat_slug = r_data['category_slug']
                category = category_objs.get(cat_slug)

                recipe_obj, was_created = Recipe.objects.update_or_create(
                    recipe_uid=r_data['id'],
                    defaults={
                        'name': r_data['name'],
                        'slug': r_data['slug'],
                        'category': category,
                        'subcategory': r_data['subcategory'],
                        'cuisine': r_data.get('cuisine', 'Homestyle'),
                        'region': r_data.get('region', 'Pan-Indian'),
                        'dietary_type': r_data.get('dietary_type', 'Vegetarian'),
                        'veg': r_data['veg'],
                        'prep_time': r_data['prep_time'],
                        'cook_time': r_data['cook_time'],
                        'total_time': r_data['prep_time'] + r_data['cook_time'],
                        'servings': r_data['servings'],
                        'image': r_data['image'],
                        'description': r_data.get('description', '')
                    }
                )

                if was_created:
                    created_recipes += 1
                else:
                    updated_recipes += 1

                # Clean existing instructions and ingredients for idempotent re-runs
                recipe_obj.recipe_ingredients.all().delete()
                recipe_obj.instructions.all().delete()

                # Seed Ingredients for this recipe
                for ing_item in r_data['ingredients']:
                    norm_name = ing_item['normalized_name']
                    ing_obj = ingredient_cache.get(norm_name)
                    if not ing_obj:
                        ing_obj = Ingredient.objects.filter(normalized_name=norm_name).first()
                        if not ing_obj:
                            # Try finding by clean name to avoid duplicate name constraint
                            ing_obj = Ingredient.objects.filter(name__iexact=ing_item['clean_name']).first()
                        if not ing_obj:
                            ing_obj = Ingredient.objects.create(
                                normalized_name=norm_name,
                                name=ing_item['clean_name'],
                                category='Pantry Staple'
                            )
                            created_ingredients += 1
                        ingredient_cache[norm_name] = ing_obj

                    RecipeIngredient.objects.create(
                        recipe=recipe_obj,
                        ingredient=ing_obj,
                        raw_name=ing_item['name'],
                        amount=ing_item['amount']
                    )
                    created_recipe_ingredients += 1

                # Seed Steps for this recipe
                for idx, step_text in enumerate(r_data['steps'], start=1):
                    RecipeInstruction.objects.create(
                        recipe=recipe_obj,
                        step_number=idx,
                        instruction=step_text
                    )
                    created_instructions += 1

            # 4. Seed Multi-Lingual Indian Synonyms
            created_synonyms = 0
            for staple_key, synonyms in SYNONYM_DICTIONARY.items():
                target_ing = ingredient_cache.get(staple_key)
                if not target_ing:
                    target_ing = Ingredient.objects.filter(normalized_name__iexact=staple_key).first()
                if not target_ing:
                    target_ing = Ingredient.objects.filter(name__iexact=staple_key).first()
                if not target_ing:
                    target_ing = Ingredient.objects.filter(normalized_name__istartswith=staple_key).first()
                if not target_ing:
                    target_ing = Ingredient.objects.filter(name__icontains=staple_key).first()

                if target_ing:
                    for syn in synonyms:
                        _, syn_created = IngredientSynonym.objects.get_or_create(
                            ingredient=target_ing,
                            synonym=syn,
                            defaults={'language': 'Regional Indian'}
                        )
                        if syn_created:
                            created_synonyms += 1

        self.stdout.write(self.style.SUCCESS(
            f"\nSUCCESSFULLY SEEDED DATABASE:\n"
            f"  - Categories: {len(category_objs)}\n"
            f"  - Recipes: {created_recipes + updated_recipes} (Created: {created_recipes}, Updated: {updated_recipes})\n"
            f"  - Master Ingredients: {Ingredient.objects.count()}\n"
            f"  - Recipe-Ingredient Links: {created_recipe_ingredients}\n"
            f"  - Step Instructions: {created_instructions}\n"
            f"  - New Regional Synonyms: {created_synonyms}\n"
            f"  - Total Database Synonyms: {IngredientSynonym.objects.count()}"
        ))
