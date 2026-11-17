"""
DesiChef Comprehensive Automated Test Suite.
Verifies Models, Matching Intelligence, Regional Synonyms (Telugu, Tamil, Hindi, Punjabi),
Recommendation Ranking, Vegan Verification, Serving Scaling, Auth & Permissions,
Pantry Synchronization & Deselection, Favorites, Shopping Lists, Health Checks, and Security.
"""

from django.test import TestCase, Client
from django.core.management import call_command
from django.contrib.auth.models import User
from apps.recipes.models import Category, Recipe, RecipeInstruction
from apps.ingredients.models import Ingredient, RecipeIngredient, IngredientSynonym
from apps.pantry.models import UserPantryItem
from apps.favorites.models import FavoriteRecipe
from apps.shopping.models import ShoppingList, ShoppingListItem
from apps.accounts.models import UserProfile
from apps.recommendations.services import (
    ingredient_matches,
    calculate_recipe_match,
    rank_recipes_by_pantry,
    is_recipe_vegan,
    clean_token
)
from apps.recipes.scaling import scale_ingredient_amount, scale_recipe_ingredients, format_scaled_number


class SystemCheckAndModelTests(TestCase):
    def test_django_system_check(self):
        """Ensures zero Django system check errors or broken configurations."""
        call_command('check')

    def test_models_and_relationships(self):
        category = Category.objects.create(name='Traditional Breakfast', slug='breakfast')
        recipe = Recipe.objects.create(
            recipe_uid='classic-idli',
            name='Classic Steamed Idli',
            slug='classic-idli',
            category=category,
            subcategory='idli',
            veg=True,
            dietary_type='Vegetarian',
            prep_time=15,
            cook_time=15,
            servings=4
        )
        ing_rice = Ingredient.objects.create(name='Parboiled Rice', normalized_name='parboiled rice')
        ing_urad = Ingredient.objects.create(name='Urad Dal', normalized_name='urad dal')

        ri1 = RecipeIngredient.objects.create(recipe=recipe, ingredient=ing_rice, raw_name='Parboiled Rice', amount='2 cups')
        ri2 = RecipeIngredient.objects.create(recipe=recipe, ingredient=ing_urad, raw_name='Urad Dal', amount='1 cup')
        step1 = RecipeInstruction.objects.create(recipe=recipe, step_number=1, instruction='Soak rice and dal.')

        self.assertEqual(recipe.total_time, 30)
        self.assertEqual(str(category), 'Traditional Breakfast')
        self.assertIn('Classic Steamed Idli', str(ri1))
        self.assertEqual(recipe.recipe_ingredients.count(), 2)
        self.assertEqual(recipe.instructions.count(), 1)


class RegionalIngredientMatchingIntelligenceTests(TestCase):
    def test_singular_plural_lemmatization(self):
        self.assertEqual(clean_token('potatoes'), 'potato')
        self.assertEqual(clean_token('tomatoes'), 'tomato')
        self.assertEqual(clean_token('onions'), 'onion')
        self.assertEqual(clean_token('eggs'), 'egg')
        self.assertTrue(ingredient_matches('Fresh Boiled Potatoes', 'Potato'))
        self.assertTrue(ingredient_matches('Potato', 'Potatoes'))
        self.assertTrue(ingredient_matches('Eggs', 'Egg'))
        self.assertTrue(ingredient_matches('Egg', 'Eggs'))
        self.assertTrue(ingredient_matches('Country Tomatoes', 'Tomato'))

    def test_telugu_synonyms(self):
        self.assertTrue(ingredient_matches('Fresh Bangaladumpa', 'Potato'))
        self.assertTrue(ingredient_matches('Erra Gaddalu (Ullipaya)', 'Onion'))
        self.assertTrue(ingredient_matches('Kandi Pappu', 'Toor Dal'))
        self.assertTrue(ingredient_matches('Pesara Pappu', 'Moong Dal'))
        self.assertTrue(ingredient_matches('Allam', 'Ginger'))
        self.assertTrue(ingredient_matches('Vellulli Payalu', 'Garlic'))
        self.assertTrue(ingredient_matches('Karivepaku', 'Curry Leaves'))
        self.assertTrue(ingredient_matches('Pasupu Podi', 'Turmeric'))
        self.assertTrue(ingredient_matches('Neyyi', 'Ghee'))
        self.assertTrue(ingredient_matches('Biyyam', 'Rice'))

    def test_tamil_synonyms(self):
        self.assertTrue(ingredient_matches('Urulaikizhangu', 'Potato'))
        self.assertTrue(ingredient_matches('Chinna Vengayam', 'Onion'))
        self.assertTrue(ingredient_matches('Thuvaram Paruppu', 'Toor Dal'))
        self.assertTrue(ingredient_matches('Paasi Paruppu', 'Moong Dal'))
        self.assertTrue(ingredient_matches('Inji', 'Ginger'))
        self.assertTrue(ingredient_matches('Poondu', 'Garlic'))
        self.assertTrue(ingredient_matches('Karuveppilai', 'Curry Leaves'))
        self.assertTrue(ingredient_matches('Manjal Podi', 'Turmeric'))
        self.assertTrue(ingredient_matches('Nei', 'Ghee'))
        self.assertTrue(ingredient_matches('Arisi', 'Rice'))

    def test_hindi_and_punjabi_synonyms(self):
        self.assertTrue(ingredient_matches('Aloo', 'Potato'))
        self.assertTrue(ingredient_matches('Pyaz', 'Onion'))
        self.assertTrue(ingredient_matches('Adrak', 'Ginger'))
        self.assertTrue(ingredient_matches('Lahsun', 'Garlic'))
        self.assertTrue(ingredient_matches('Lassan', 'Garlic'))
        self.assertTrue(ingredient_matches('Arhar Dal', 'Toor Dal'))
        self.assertTrue(ingredient_matches('Haldi', 'Turmeric'))
        self.assertTrue(ingredient_matches('Chawal', 'Rice'))
        self.assertTrue(ingredient_matches('Kadi Patta', 'Curry Leaves'))
        self.assertTrue(ingredient_matches('Desi Ghee', 'Ghee'))

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
        self.assertFalse(ingredient_matches('Chilagada Dumpa', 'Potatoes'))

        # Mustard seeds vs Mustard oil
        self.assertFalse(ingredient_matches('Mustard Oil', 'Mustard Seeds'))


class RecommendationAndVeganVerificationTests(TestCase):
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

    def test_ready_dish_match(self):
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
                'recipe_uid': 'dish-a',
                'name': 'Dish A (1 match)',
                'prep_time': 20,
                'ingredients': [{'name': 'Rice'}, {'name': 'Toor Dal'}, {'name': 'Tomatoes'}]
            },
            {
                'recipe_uid': 'dish-b',
                'name': 'Dish B (2 matches, 100% ready)',
                'prep_time': 25,
                'ingredients': [{'name': 'Rice'}, {'name': 'Chicken'}]
            },
            {
                'recipe_uid': 'dish-c',
                'name': 'Dish C (2 matches, 67%)',
                'prep_time': 15,
                'ingredients': [{'name': 'Rice'}, {'name': 'Chicken'}, {'name': 'Saffron'}]
            }
        ]
        pantry = ['Rice', 'Chicken']
        ranked = rank_recipes_by_pantry(recipes, pantry)
        self.assertEqual(len(ranked), 3)
        self.assertEqual(ranked[0]['name'], 'Dish B (2 matches, 100% ready)')
        self.assertEqual(ranked[1]['name'], 'Dish C (2 matches, 67%)')
        self.assertEqual(ranked[2]['name'], 'Dish A (1 match)')

    def test_vegan_verification(self):
        # Vegan dish: purely plant-based
        vegan_ingredients = [
            {'name': 'Basmati Rice'},
            {'name': 'Cumin Seeds'},
            {'name': 'Sunflower Oil'},
            {'name': 'Salt'}
        ]
        self.assertTrue(is_recipe_vegan(vegan_ingredients))

        # Non-vegan dishes (containing dairy or animal products)
        dish_with_ghee = [{'name': 'Basmati Rice'}, {'name': 'Desi Ghee'}]
        dish_with_paneer = [{'name': 'Paneer Cubes'}, {'name': 'Tomatoes'}]
        dish_with_milk = [{'name': 'Rice'}, {'name': 'Cow Milk'}]
        dish_with_curd = [{'name': 'Rice'}, {'name': 'Plain Curd'}]
        dish_with_chicken = [{'name': 'Chicken'}, {'name': 'Onions'}]

        self.assertFalse(is_recipe_vegan(dish_with_ghee))
        self.assertFalse(is_recipe_vegan(dish_with_paneer))
        self.assertFalse(is_recipe_vegan(dish_with_milk))
        self.assertFalse(is_recipe_vegan(dish_with_curd))
        self.assertFalse(is_recipe_vegan(dish_with_chicken))


class ServingCalculatorTests(TestCase):
    def test_scaling_fractions_and_decimals(self):
        self.assertEqual(scale_ingredient_amount('1/2 tsp', 2.0), '1 tsp')
        self.assertEqual(scale_ingredient_amount('1/2 tsp', 4.0), '2 tsp')
        self.assertEqual(scale_ingredient_amount('1/4 tsp', 2.0), '1/2 tsp')
        self.assertEqual(scale_ingredient_amount('1 1/2 tsp', 2.0), '3 tsp')
        self.assertEqual(scale_ingredient_amount('2 cups', 2.0), '4 cups')
        self.assertEqual(scale_ingredient_amount('500g (diced)', 2.0), '1000g (diced)')

    def test_reversion_accuracy(self):
        base = '1/2 tsp'
        self.assertEqual(scale_ingredient_amount(base, 1.0), base)


class UserAuthenticationAndAuthorizationAPITests(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(username='testcook', password='password123', email='cook@test.com')

    def test_user_registration_success(self):
        res = self.client.post('/api/v1/auth/register/', data={
            'username': 'newchef',
            'password': 'securepassword123',
            'email': 'new@chef.com',
            'dietary_preference': 'veg'
        }, content_type='application/json')
        self.assertEqual(res.status_code, 201)
        self.assertTrue(User.objects.filter(username='newchef').exists())
        user = User.objects.get(username='newchef')
        self.assertEqual(user.profile.dietary_preference, 'veg')

    def test_user_registration_duplicate_username(self):
        res = self.client.post('/api/v1/auth/register/', data={
            'username': 'testcook',
            'password': 'password123'
        }, content_type='application/json')
        self.assertEqual(res.status_code, 400)

    def test_user_login_and_logout(self):
        # Invalid credentials
        bad_res = self.client.post('/api/v1/auth/login/', data={
            'username': 'testcook',
            'password': 'wrongpassword'
        }, content_type='application/json')
        self.assertEqual(bad_res.status_code, 400)

        # Valid credentials
        res = self.client.post('/api/v1/auth/login/', data={
            'username': 'testcook',
            'password': 'password123'
        }, content_type='application/json')
        self.assertEqual(res.status_code, 200)

        # Check me
        me_res = self.client.get('/api/v1/auth/me/')
        self.assertEqual(me_res.status_code, 200)
        self.assertTrue(me_res.json()['is_authenticated'])

        # Logout
        logout_res = self.client.post('/api/v1/auth/logout/')
        self.assertEqual(logout_res.status_code, 200)

        # Check me after logout
        me_res2 = self.client.get('/api/v1/auth/me/')
        self.assertFalse(me_res2.json()['is_authenticated'])

    def test_unauthorized_access_protection(self):
        unauth_client = Client()
        # Protected endpoints must reject unauthenticated requests
        self.assertIn(unauth_client.get('/api/v1/pantry/').status_code, (401, 403))
        self.assertIn(unauth_client.get('/api/v1/favorites/').status_code, (401, 403))
        self.assertIn(unauth_client.get('/api/v1/shopping/').status_code, (401, 403))


class PersonalPantryAndDataIsolationTests(TestCase):
    def setUp(self):
        self.user1 = User.objects.create_user(username='user1', password='password123')
        self.user2 = User.objects.create_user(username='user2', password='password123')
        self.client1 = Client()
        self.client1.login(username='user1', password='password123')
        self.client2 = Client()
        self.client2.login(username='user2', password='password123')

    def test_pantry_sync_and_deselection_reconciliation(self):
        # 1. Sync 3 items
        res = self.client1.post('/api/v1/pantry/sync_session_pantry/', data={
            'items': ['Rice', 'Eggs', 'Chicken']
        }, content_type='application/json')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(UserPantryItem.objects.filter(user=self.user1).count(), 3)

        # 2. Deselect 'Chicken' and sync with 2 items -> 'Chicken' must be removed from DB
        res2 = self.client1.post('/api/v1/pantry/sync_session_pantry/', data={
            'items': ['Rice', 'Eggs'],
            'replace': True
        }, content_type='application/json')
        self.assertEqual(res2.status_code, 200)
        self.assertEqual(UserPantryItem.objects.filter(user=self.user1).count(), 2)
        pantry_names = [p.display_name for p in UserPantryItem.objects.filter(user=self.user1)]
        self.assertNotIn('Chicken', pantry_names)

    def test_pantry_user_isolation(self):
        self.client1.post('/api/v1/pantry/sync_session_pantry/', data={'items': ['Ghee']}, content_type='application/json')
        # User 2 cannot see User 1's pantry
        res = self.client2.get('/api/v1/pantry/')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(len(res.json()), 0)


class FavoritesAndShoppingListAPITests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='shopper', password='password123')
        self.client = Client()
        self.client.login(username='shopper', password='password123')
        self.cat = Category.objects.create(name='Curries', slug='curries')
        self.recipe = Recipe.objects.create(
            recipe_uid='dal-tadka',
            name='Dal Tadka',
            slug='dal-tadka',
            category=self.cat,
            subcategory='dal',
            veg=True
        )
        ing = Ingredient.objects.create(name='Toor Dal', normalized_name='toor dal')
        RecipeIngredient.objects.create(recipe=self.recipe, ingredient=ing, raw_name='Toor Dal', amount='1 cup')

    def test_favorites_toggle(self):
        # Toggle on
        res1 = self.client.post('/api/v1/favorites/toggle/', data={'recipe_uid': 'dal-tadka'}, content_type='application/json')
        self.assertEqual(res1.status_code, 200)
        self.assertTrue(res1.json()['is_favorited'])
        self.assertEqual(FavoriteRecipe.objects.filter(user=self.user).count(), 1)

        # Toggle off
        res2 = self.client.post('/api/v1/favorites/toggle/', data={'recipe_uid': 'dal-tadka'}, content_type='application/json')
        self.assertEqual(res2.status_code, 200)
        self.assertFalse(res2.json()['is_favorited'])
        self.assertEqual(FavoriteRecipe.objects.filter(user=self.user).count(), 0)

    def test_shopping_list_generation_and_custom_item(self):
        # Generate from recipe
        res = self.client.post('/api/v1/shopping/generate_from_recipes/', data={
            'recipe_uids': ['dal-tadka'],
            'exclude_pantry': False
        }, content_type='application/json')
        self.assertEqual(res.status_code, 201)
        active_list = ShoppingList.objects.filter(user=self.user).first()
        self.assertIsNotNone(active_list)
        self.assertTrue(active_list.items.filter(ingredient_name='Toor Dal').exists())

        # Add custom item via API
        res_custom = self.client.post('/api/v1/shopping/add_custom_item/', data={
            'ingredient_name': 'Kashmiri Chili 100g'
        }, content_type='application/json')
        self.assertEqual(res_custom.status_code, 201)
        self.assertTrue(active_list.items.filter(ingredient_name='Kashmiri Chili 100g').exists())


class RecommendationEndpointsAndHealthCheckTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.cat = Category.objects.create(name='Rice Dishes', slug='rice')
        self.r_veg = Recipe.objects.create(
            recipe_uid='jeera-rice',
            name='Jeera Rice',
            slug='jeera-rice',
            category=self.cat,
            subcategory='flavoured-rice',
            veg=True,
            dietary_type='Vegetarian',
            prep_time=15
        )
        self.r_nonveg = Recipe.objects.create(
            recipe_uid='chicken-biryani',
            name='Chicken Biryani',
            slug='chicken-biryani',
            category=self.cat,
            subcategory='biryani',
            veg=False,
            dietary_type='Non-Vegetarian',
            prep_time=30
        )
        ing_rice = Ingredient.objects.create(name='Basmati Rice', normalized_name='basmati rice')
        ing_cumin = Ingredient.objects.create(name='Cumin Seeds', normalized_name='cumin seeds')
        ing_chicken = Ingredient.objects.create(name='Chicken', normalized_name='chicken')

        RecipeIngredient.objects.create(recipe=self.r_veg, ingredient=ing_rice, raw_name='Basmati Rice', amount='2 cups')
        RecipeIngredient.objects.create(recipe=self.r_veg, ingredient=ing_cumin, raw_name='Cumin Seeds', amount='1 tsp')
        RecipeIngredient.objects.create(recipe=self.r_nonveg, ingredient=ing_rice, raw_name='Basmati Rice', amount='2 cups')
        RecipeIngredient.objects.create(recipe=self.r_nonveg, ingredient=ing_chicken, raw_name='Chicken', amount='500g')

    def test_health_check_endpoint(self):
        res = self.client.get('/health/')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.json()['status'], 'ok')
        self.assertEqual(res.json()['database'], 'connected')

    def test_recommendation_post_endpoints(self):
        # Test /api/v1/recommendations/
        res1 = self.client.post('/api/v1/recommendations/', data={
            'ingredients': ['Rice', 'Chicken']
        }, content_type='application/json')
        self.assertEqual(res1.status_code, 200)
        self.assertGreaterEqual(res1.json()['total_found'], 1)

        # Test /api/v1/recommendations/recommend/ (action endpoint called by frontend app.js)
        res2 = self.client.post('/api/v1/recommendations/recommend/', data={
            'ingredients': ['Rice', 'Chicken']
        }, content_type='application/json')
        self.assertEqual(res2.status_code, 200)
        self.assertGreaterEqual(res2.json()['total_found'], 1)

    def test_recommendation_dietary_filtering(self):
        # Veg filter
        res_veg = self.client.post('/api/v1/recommendations/', data={
            'ingredients': ['Rice'],
            'dietary': 'veg'
        }, content_type='application/json')
        self.assertEqual(res_veg.status_code, 200)
        uids = [r['recipe_uid'] for r in res_veg.json()['results']]
        self.assertIn('jeera-rice', uids)
        self.assertNotIn('chicken-biryani', uids)

        # Non-veg filter
        res_nonveg = self.client.post('/api/v1/recommendations/', data={
            'ingredients': ['Rice'],
            'dietary': 'nonveg'
        }, content_type='application/json')
        self.assertEqual(res_nonveg.status_code, 200)
        uids_nonveg = [r['recipe_uid'] for r in res_nonveg.json()['results']]
        self.assertIn('chicken-biryani', uids_nonveg)
        self.assertNotIn('jeera-rice', uids_nonveg)

    def test_recipe_scale_endpoint(self):
        res = self.client.get(f'/api/v1/recipes/{self.r_veg.recipe_uid}/scale/?servings=4')
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.json()['target_servings'], 4)
        scaled_amounts = [si['scaled_amount'] for si in res.json()['scaled_ingredients']]
        self.assertTrue(any('4 cups' in a for a in scaled_amounts))


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

