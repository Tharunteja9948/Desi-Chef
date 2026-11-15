"""
AI Chef Comprehensive Automated Test Suite.
Tests all 14 phases across Models, Matching Intelligence, Recommendations, Scaling, Auth, DRF APIs, and Security.
"""

from django.test import TestCase, Client
from django.contrib.auth.models import User
from apps.recipes.models import Category, Recipe, RecipeInstruction
from apps.ingredients.models import Ingredient, RecipeIngredient, IngredientSynonym
from apps.pantry.models import UserPantryItem
from apps.favorites.models import FavoriteRecipe
from apps.shopping.models import ShoppingList, ShoppingListItem
from apps.recommendations.services import (
    ingredient_matches,
    calculate_recipe_match,
    rank_recipes_by_pantry,
    clean_token
)
from apps.recipes.scaling import scale_ingredient_amount, scale_recipe_ingredients, format_scaled_number
import json

class DatabaseAndModelTests(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name='Biryani & Rice Dishes', slug='rice')
        self.recipe = Recipe.objects.create(
            recipe_uid='test-biryani',
            name='Hyderabadi Dum Biryani',
            slug='test-biryani',
            category=self.category,
            subcategory='biryani',
            veg=False,
            prep_time=30,
            cook_time=40,
            servings=4,
            image='images/dishes/biryani.jpg'
        )
        self.ing_rice = Ingredient.objects.create(name='Basmati Rice', normalized_name='basmati rice')
        self.ing_chicken = Ingredient.objects.create(name='Chicken', normalized_name='chicken')
        RecipeIngredient.objects.create(recipe=self.recipe, ingredient=self.ing_rice, raw_name='Basmati Rice', amount='2 cups')
        RecipeIngredient.objects.create(recipe=self.recipe, ingredient=self.ing_chicken, raw_name='Chicken', amount='500g')
        RecipeInstruction.objects.create(recipe=self.recipe, step_number=1, instruction='Marinate chicken.')

    def test_recipe_model_fields(self):
        self.assertEqual(self.recipe.total_time, 70)
        self.assertEqual(self.recipe.recipe_ingredients.count(), 2)
        self.assertEqual(self.recipe.instructions.count(), 1)
        self.assertFalse(self.recipe.veg)

    def test_category_relationship(self):
        self.assertEqual(self.category.recipes.count(), 1)
        self.assertEqual(str(self.category), 'Biryani & Rice Dishes')

class IngredientMatchingEngineTests(TestCase):
    def test_exact_and_plural_matching(self):
        self.assertTrue(ingredient_matches('Raw Eggs', 'Eggs'))
        self.assertTrue(ingredient_matches('Boiled Eggs', 'Egg'))
        self.assertTrue(ingredient_matches('Aged Basmati Rice', 'Rice'))

    def test_false_positive_elimination(self):
        # Rice must not match Rice Flour, Rice Bran Oil or Poha
        self.assertFalse(ingredient_matches('Rice Flour', 'Rice'))
        self.assertFalse(ingredient_matches('Brown Rice Flour', 'Rice'))
        self.assertFalse(ingredient_matches('Rice Bran Oil', 'Rice'))
        self.assertFalse(ingredient_matches('Poha (Flattened Rice)', 'Rice'))

        # Eggs must not match Eggplant or Deggi Mirch
        self.assertFalse(ingredient_matches('Eggplant (Baingan)', 'Eggs'))
        self.assertFalse(ingredient_matches('Deggi Mirch', 'Eggs'))

        # Potatoes must not match Sweet Potato
        self.assertFalse(ingredient_matches('Sweet Potato (Shakarkandi)', 'Potatoes'))

    def test_multilingual_synonyms(self):
        self.assertTrue(ingredient_matches('Murgh Masala', 'Chicken'))
        self.assertTrue(ingredient_matches('Fresh Chhena', 'Paneer'))
        self.assertTrue(ingredient_matches('Kandi Pappu (Toor Dal)', 'Toor Dal'))
        self.assertTrue(ingredient_matches('Desi Neyyi', 'Ghee'))
        self.assertTrue(ingredient_matches('Kadi Patta', 'Curry Leaves'))
        self.assertTrue(ingredient_matches('Adrak', 'Ginger'))
        self.assertTrue(ingredient_matches('Lahsun', 'Garlic'))
        self.assertTrue(ingredient_matches('Country Tamatar', 'Tomatoes'))
        self.assertTrue(ingredient_matches('Shallots (Pyaz / Vengayam)', 'Onions'))

class RecommendationEngineTests(TestCase):
    def test_match_calculation(self):
        ingredients = [
            {'name': 'Basmati Rice', 'amount': '2 cups', 'is_optional': False},
            {'name': 'Chicken', 'amount': '500g', 'is_optional': False},
            {'name': 'Garam Masala', 'amount': '1 tsp', 'is_optional': False},
        ]
        pantry = ['Rice', 'Chicken']
        match_info = calculate_recipe_match(ingredients, pantry)
        
        self.assertEqual(match_info['user_matched_count'], 2)
        self.assertEqual(len(match_info['matched_ingredients']), 2)
        self.assertEqual(len(match_info['missing_ingredients']), 1)
        self.assertEqual(match_info['match_percent'], 67)
        self.assertFalse(match_info['is_ready'])

    def test_ready_dish_match_percent(self):
        ingredients = [
            {'name': 'Basmati Rice', 'amount': '2 cups', 'is_optional': False},
            {'name': 'Chicken', 'amount': '500g', 'is_optional': False},
        ]
        pantry = ['Rice', 'Chicken']
        match_info = calculate_recipe_match(ingredients, pantry)
        self.assertEqual(match_info['match_percent'], 100)
        self.assertTrue(match_info['is_ready'])

    def test_deterministic_ranking(self):
        recipes = [
            {
                'name': 'Dish A (1 match)',
                'prep_time': 20,
                'ingredients': [{'name': 'Rice'}, {'name': 'Toor Dal'}, {'name': 'Tomatoes'}]
            },
            {
                'name': 'Dish B (2 matches, 100% ready)',
                'prep_time': 25,
                'ingredients': [{'name': 'Rice'}, {'name': 'Chicken'}]
            },
            {
                'name': 'Dish C (2 matches, 67%)',
                'prep_time': 15,
                'ingredients': [{'name': 'Rice'}, {'name': 'Chicken'}, {'name': 'Saffron'}]
            }
        ]
        pantry = ['Rice', 'Chicken']
        ranked = rank_recipes_by_pantry(recipes, pantry)
        self.assertEqual(len(ranked), 3)
        # Dish B has 2 matches and 100% completeness -> ranks 1st
        self.assertEqual(ranked[0]['name'], 'Dish B (2 matches, 100% ready)')
        # Dish C has 2 matches and 67% completeness -> ranks 2nd
        self.assertEqual(ranked[1]['name'], 'Dish C (2 matches, 67%)')
        # Dish A has 1 match -> ranks 3rd
        self.assertEqual(ranked[2]['name'], 'Dish A (1 match)')

class ServingCalculatorTests(TestCase):
    def test_integer_scaling(self):
        self.assertEqual(scale_ingredient_amount('2 cups', 2.0), '4 cups')
        self.assertEqual(scale_ingredient_amount('2 cups', 4.0), '8 cups')
        self.assertEqual(scale_ingredient_amount('2 cups', 1.0), '2 cups')

    def test_fraction_scaling(self):
        self.assertEqual(scale_ingredient_amount('1/2 tsp', 2.0), '1 tsp')
        self.assertEqual(scale_ingredient_amount('1/2 tsp', 4.0), '2 tsp')
        self.assertEqual(scale_ingredient_amount('1/4 tsp', 2.0), '1/2 tsp')
        self.assertEqual(scale_ingredient_amount('1 1/2 tsp', 2.0), '3 tsp')
        self.assertEqual(scale_ingredient_amount('1 1/2 tsp', 4.0), '6 tsp')

    def test_decimal_and_metric_scaling(self):
        self.assertEqual(scale_ingredient_amount('1.5 cups', 2.0), '3 cups')
        self.assertEqual(scale_ingredient_amount('500g (cut into steaks)', 2.0), '1000g (cut into steaks)')
        self.assertEqual(scale_ingredient_amount('500g (cut into steaks)', 4.0), '2000g (cut into steaks)')

    def test_reversion_accuracy(self):
        base = '1/2 tsp'
        scaled = scale_ingredient_amount(base, 2.0)
        self.assertEqual(scaled, '1 tsp')
        reverted = scale_ingredient_amount(base, 1.0)
        self.assertEqual(reverted, base)

class UserAuthAndPersonalizationAPITests(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(username='testcook', password='password123', email='cook@test.com')
        self.category = Category.objects.create(name='Curries', slug='curries')
        self.recipe = Recipe.objects.create(
            recipe_uid='butter-chicken',
            name='Butter Chicken',
            slug='butter-chicken',
            category=self.category,
            subcategory='chicken-curry',
            prep_time=25,
            veg=False
        )
        self.ing = Ingredient.objects.create(name='Paneer', normalized_name='paneer')

    def test_user_registration(self):
        res = self.client.post('/api/v1/auth/register/', data={
            'username': 'newchef',
            'password': 'securepassword',
            'email': 'new@chef.com',
            'dietary_preference': 'veg'
        }, content_type='application/json')
        self.assertEqual(res.status_code, 201)
        self.assertTrue(User.objects.filter(username='newchef').exists())

    def test_user_login_and_me(self):
        res = self.client.post('/api/v1/auth/login/', data={
            'username': 'testcook',
            'password': 'password123'
        }, content_type='application/json')
        self.assertEqual(res.status_code, 200)

        me_res = self.client.get('/api/v1/auth/me/')
        self.assertEqual(me_res.status_code, 200)
        self.assertTrue(me_res.json()['is_authenticated'])
        self.assertEqual(me_res.json()['user']['username'], 'testcook')

    def test_pantry_isolation_and_sync(self):
        self.client.login(username='testcook', password='password123')
        sync_res = self.client.post('/api/v1/pantry/sync_session_pantry/', data={
            'items': ['Paneer', 'Onions', 'Ghee']
        }, content_type='application/json')
        self.assertEqual(sync_res.status_code, 200)
        self.assertEqual(UserPantryItem.objects.filter(user=self.user).count(), 3)

        # Another user cannot see testcook's pantry
        user2 = User.objects.create_user(username='otherchef', password='password123')
        client2 = Client()
        client2.login(username='otherchef', password='password123')
        pantry2_res = client2.get('/api/v1/pantry/')
        self.assertEqual(pantry2_res.status_code, 200)
        self.assertEqual(len(pantry2_res.json()), 0)

    def test_favorites_toggle(self):
        self.client.login(username='testcook', password='password123')
        toggle_res = self.client.post('/api/v1/favorites/toggle/', data={
            'recipe_uid': 'butter-chicken'
        }, content_type='application/json')
        self.assertEqual(toggle_res.status_code, 200)
        self.assertTrue(toggle_res.json()['is_favorited'])
        self.assertEqual(FavoriteRecipe.objects.filter(user=self.user).count(), 1)

        # Toggle again removes
        toggle_res2 = self.client.post('/api/v1/favorites/toggle/', data={
            'recipe_uid': 'butter-chicken'
        }, content_type='application/json')
        self.assertEqual(toggle_res2.status_code, 200)
        self.assertFalse(toggle_res2.json()['is_favorited'])
        self.assertEqual(FavoriteRecipe.objects.filter(user=self.user).count(), 0)

    def test_shopping_list_generation(self):
        self.client.login(username='testcook', password='password123')
        res = self.client.post('/api/v1/shopping/generate_from_recipes/', data={
            'recipe_uids': ['butter-chicken'],
            'exclude_pantry': False
        }, content_type='application/json')
        self.assertEqual(res.status_code, 201)
        self.assertTrue(ShoppingList.objects.filter(user=self.user).exists())

class HomepageAndSearchAPITests(TestCase):
    def setUp(self):
        self.client = Client()
        self.cat_rice = Category.objects.create(name='Biryani & Rice Dishes', slug='rice')
        self.cat_curry = Category.objects.create(name='Curries & Gravies', slug='curries')
        self.cat_chutney = Category.objects.create(name='Pachallu & Pickles', slug='chutneys')

        self.r1 = Recipe.objects.create(
            recipe_uid='hyderabadi-biryani',
            name='Hyderabadi Dum Biryani',
            slug='hyderabadi-biryani',
            category=self.cat_rice,
            subcategory='biryani',
            prep_time=30,
            cook_time=45,
            veg=False,
            image='images/dishes/biryani.jpg'
        )
        self.r2 = Recipe.objects.create(
            recipe_uid='butter-chicken',
            name='Butter Chicken',
            slug='butter-chicken',
            category=self.cat_curry,
            subcategory='chicken-curry',
            prep_time=20,
            cook_time=25,
            veg=False,
            image='images/dishes/butter-chicken.jpg'
        )
        self.r3 = Recipe.objects.create(
            recipe_uid='paneer-butter-masala',
            name='Paneer Butter Masala',
            slug='paneer-butter-masala',
            category=self.cat_curry,
            subcategory='veg-paneer-curry',
            prep_time=15,
            cook_time=20,
            veg=True,
            image='images/dishes/paneer-butter-masala.jpg'
        )
        self.r4 = Recipe.objects.create(
            recipe_uid='gongura-pachadi',
            name='Traditional Gongura Pachadi',
            slug='gongura-pachadi',
            category=self.cat_chutney,
            subcategory='pachadi',
            prep_time=10,
            cook_time=15,
            veg=True,
            image='images/dishes/gongura-pachadi.jpg'
        )

        ing_chicken = Ingredient.objects.create(name='Chicken', normalized_name='chicken')
        ing_rice = Ingredient.objects.create(name='Basmati Rice', normalized_name='basmati rice')
        RecipeIngredient.objects.create(recipe=self.r1, ingredient=ing_rice, raw_name='Basmati Rice', amount='2 cups')
        RecipeIngredient.objects.create(recipe=self.r1, ingredient=ing_chicken, raw_name='Chicken', amount='500g')
        RecipeInstruction.objects.create(recipe=self.r1, step_number=1, instruction='Layer rice and cooked meat.')

    def test_homepage_view_renders(self):
        res = self.client.get('/')
        self.assertEqual(res.status_code, 200)
        self.assertIn(b'DESI CHEF', res.content)
        self.assertIn(b'Your Personal Chef', res.content)
        self.assertIn(b'searchAutocompleteDropdown', res.content)

    def test_recipe_detail_view_renders(self):
        res = self.client.get('/recipes/hyderabadi-biryani/')
        self.assertEqual(res.status_code, 200)
        self.assertIn(b'Hyderabadi Dum Biryani', res.content)
        self.assertIn(b'Layer rice and cooked meat.', res.content)

    def test_autocomplete_single_character(self):
        res = self.client.get('/api/v1/recipes/autocomplete/?q=b')
        self.assertEqual(res.status_code, 200)
        names = [x['name'] for x in res.json()]
        self.assertTrue(any('Butter' in n or 'Biryani' in n for n in names))

    def test_autocomplete_regional_dish(self):
        res = self.client.get('/api/v1/recipes/autocomplete/?q=gongura')
        self.assertEqual(res.status_code, 200)
        names = [x['name'] for x in res.json()]
        self.assertIn('Traditional Gongura Pachadi', names)

    def test_autocomplete_empty_query(self):
        res = self.client.get('/api/v1/recipes/autocomplete/?q=')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.json(), [])

    def test_autocomplete_no_match(self):
        res = self.client.get('/api/v1/recipes/autocomplete/?q=nonexistentdishxyz')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.json(), [])

    def test_recipe_list_filtering(self):
        # Category filter
        res = self.client.get('/api/v1/recipes/?category=rice')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.json()['count'], 1)

        # Veg filter
        res_veg = self.client.get('/api/v1/recipes/?veg=true')
        self.assertEqual(res_veg.status_code, 200)
        self.assertEqual(res_veg.json()['count'], 2)

        # Search query
        res_search = self.client.get('/api/v1/recipes/?search=biryani')
        self.assertEqual(res_search.status_code, 200)
        self.assertEqual(res_search.json()['count'], 1)

