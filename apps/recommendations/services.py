"""
DesiChef Core Recommendation and Semantic Ingredient Matching Engine.
Powers 100% deterministic, explainable, authentic Indian culinary recommendations.
Supports regional ingredient synonyms across Telugu, Hindi, Tamil, and Punjabi.
"""

import re
from typing import List, Dict, Any, Set, Tuple

# Multi-lingual Indian Homestyle Synonyms Dictionary
# Keys are normalized staple concepts. Values encompass Hindi, Telugu, Tamil, Punjabi, and English variants.
SYNONYM_DICTIONARY = {
    'egg': [
        'eggs', 'anda', 'ande', 'boiled egg', 'egg white', 'egg whites',
        # Telugu:
        'guddu', 'gudlu', 'kodi guddu',
        # Tamil:
        'muttai', 'koli muttai',
        # Punjabi:
        'aanda', 'ande'
    ],
    'rice': [
        'chawal', 'basmati', 'basmati rice', 'cooked rice', 'leftover rice', 'raw rice', 'sona masoori', 'boiled rice',
        # Telugu:
        'biyyam', 'annam', 'biyyapu',
        # Tamil:
        'arisi', 'sadam', 'pacharisi', 'puzhungal arisi',
        # Punjabi:
        'chawal', 'totapuri chawal'
    ],
    'chicken': [
        'murgh', 'murg', 'koli', 'chicken breast', 'boneless chicken', 'chicken pieces', 'chicken keema',
        # Telugu:
        'kodi', 'kodi kura', 'kodi mamsam',
        # Tamil:
        'kozhi', 'kozhi iraichi',
        # Punjabi:
        'kukkar', 'murga'
    ],
    'paneer': [
        'chhena', 'cottage cheese', 'fresh paneer', 'paneer cubes',
        # Telugu:
        'paneer',
        # Tamil:
        'paneer',
        # Punjabi:
        'paneer'
    ],
    'potato': [
        'potatoes', 'aloo', 'alu', 'batata',
        # Telugu:
        'bangaladumpa', 'alugadda', 'urula gadda',
        # Tamil:
        'urulaikizhangu', 'urulai kizhangu',
        # Punjabi:
        'aloo', 'alu'
    ],
    'potatoes': [
        'potato', 'aloo', 'alu', 'batata',
        'bangaladumpa', 'alugadda', 'urula gadda',
        'urulaikizhangu', 'urulai kizhangu'
    ],
    'tomato': [
        'tomatoes', 'tamatar',
        # Telugu:
        'tamata', 'ramamulaga kaya',
        # Tamil:
        'thakkali',
        # Punjabi:
        'tamatar'
    ],
    'tomatoes': [
        'tomato', 'tamatar', 'thakkali', 'tamata'
    ],
    'onion': [
        'onions', 'pyaz', 'shallot', 'shallots', 'kanda',
        # Telugu:
        'ullipaya', 'ullipayalu', 'erra gaddalu',
        # Tamil:
        'vengayam', 'chinna vengayam', 'periya vengayam',
        # Punjabi:
        'pyaz', 'gandha'
    ],
    'onions': [
        'onion', 'pyaz', 'shallot', 'shallots', 'kanda',
        'ullipaya', 'ullipayalu', 'erra gaddalu', 'vengayam', 'gandha'
    ],
    'toor dal': [
        'toor', 'arhar', 'arhar dal', 'tuvar dal', 'split pigeon peas',
        # Telugu:
        'kandi pappu',
        # Tamil:
        'thuvaram paruppu', 'thuvarai', 'sambar dal',
        # Punjabi:
        'arhar dal', 'toor dal'
    ],
    'moong dal': [
        'yellow moong dal', 'split moong', 'mung dal', 'split yellow gram',
        # Telugu:
        'pesara pappu', 'pesarlu',
        # Tamil:
        'paasi paruppu', 'pasi paruppu',
        # Punjabi:
        'moongi dal', 'peeli moong'
    ],
    'chana dal': [
        'bengal gram dal', 'split chickpea lentils',
        # Telugu:
        'senaga pappu',
        # Tamil:
        'kadalai paruppu',
        # Punjabi:
        'chane di dal'
    ],
    'urad dal': [
        'black gram', 'split black lentils', 'white urad dal',
        # Telugu:
        'minappappu', 'minamulu',
        # Tamil:
        'ulutham paruppu', 'ulundhu',
        # Punjabi:
        'maash dal', 'kali dal'
    ],
    'ghee': [
        'pure ghee', 'desi ghee', 'cow ghee', 'clarified butter',
        # Telugu:
        'neyyi', 'aavu neyyi',
        # Tamil:
        'nei', 'pasu nei',
        # Punjabi:
        'desi ghee'
    ],
    'ginger': [
        'adrak', 'fresh ginger',
        # Telugu:
        'allam',
        # Tamil:
        'inji',
        # Punjabi:
        'adrak'
    ],
    'garlic': [
        'lahsun', 'fresh garlic',
        # Telugu:
        'vellulli', 'vellulli payalu',
        # Tamil:
        'poondu',
        # Punjabi:
        'lassan', 'lahsun'
    ],
    'curry leaves': [
        'curry leaf', 'kadi patta', 'meetha neem',
        # Telugu:
        'karivepaku',
        # Tamil:
        'karuveppilai', 'kariveppilai',
        # Punjabi:
        'kadi patta'
    ],
    'coriander': [
        'coriander leaves', 'cilantro', 'dhania', 'dhania patta', 'fresh coriander',
        # Telugu:
        'kothimera', 'kothmir', 'dhaniyalu',
        # Tamil:
        'kothamalli', 'kothumalli',
        # Punjabi:
        'dhania'
    ],
    'mint': [
        'mint leaves', 'fresh pudina',
        # Telugu:
        'pudina',
        # Tamil:
        'pudhina',
        # Punjabi:
        'pudina'
    ],
    'green chillies': [
        'green chilli', 'green chili', 'hari mirch',
        # Telugu:
        'pachi mirchi', 'pachi mirapakayalu',
        # Tamil:
        'pachai milagai', 'pacha milagai',
        # Punjabi:
        'hari mirch'
    ],
    'mustard seeds': [
        'rai', 'sarson', 'mustard',
        # Telugu:
        'avalu',
        # Tamil:
        'kadugu',
        # Punjabi:
        'sarson ke daane', 'rai'
    ],
    'cumin': [
        'cumin seeds', 'jeera',
        # Telugu:
        'jeelakarra',
        # Tamil:
        'seeragam', 'jeeragam',
        # Punjabi:
        'jeera'
    ],
    'turmeric': [
        'turmeric powder', 'haldi',
        # Telugu:
        'pasupu',
        # Tamil:
        'manjal', 'manjal podi',
        # Punjabi:
        'haldi'
    ],
    'red chilli powder': [
        'lal mirch powder', 'kashmiri chilli powder', 'deggi mirch', 'red chili powder',
        # Telugu:
        'karam', 'karappodi', 'mirapakaya podi',
        # Tamil:
        'milagai thool', 'vatral milagai thool',
        # Punjabi:
        'lal mirch'
    ],
    'tamarind': [
        'imli', 'tamarind pulp', 'tamarind paste',
        # Telugu:
        'chintapandu',
        # Tamil:
        'puli',
        # Punjabi:
        'imli'
    ],
    'jaggery': [
        'gud', 'cane jaggery',
        # Telugu:
        'bellam',
        # Tamil:
        'vellam',
        # Punjabi:
        'gur', 'gud'
    ],
    'coconut': [
        'fresh grated coconut', 'nariyal', 'dry coconut', 'coconut pieces',
        # Telugu:
        'kobbari', 'kobbari thurumu', 'tenkaya',
        # Tamil:
        'thengai', 'thengai thuruval',
        # Punjabi:
        'nariyal', 'giri'
    ],
    'peanuts': [
        'groundnuts', 'moongphali',
        # Telugu:
        'pallilu', 'verusenaga',
        # Tamil:
        'verkadalai', 'kadalai',
        # Punjabi:
        'moongphali'
    ],
    'cashews': [
        'cashew nuts', 'kaju',
        # Telugu:
        'jeedipappu',
        # Tamil:
        'munthiri', 'mundhiri',
        # Punjabi:
        'kaju'
    ],
    'fenugreek': [
        'methi', 'methi seeds', 'fenugreek leaves', 'kasoori methi',
        # Telugu:
        'menthulu', 'menthi kura',
        # Tamil:
        'vendhayam', 'venthaiyam',
        # Punjabi:
        'methi'
    ],
    'fenugreek seeds': [
        'methi seeds', 'menthulu', 'vendhayam', 'methi'
    ],
    'asafoetida': [
        'hing',
        # Telugu:
        'inguva',
        # Tamil:
        'perungayam',
        # Punjabi:
        'hing'
    ],
    'cardamom': [
        'elaichi', 'green cardamom', 'cardamom pods', 'cardamom powder',
        # Telugu:
        'yalakulu', 'elakulu',
        # Tamil:
        'elakkai',
        # Punjabi:
        'elaichi'
    ],
    'cloves': [
        'laung',
        # Telugu:
        'lavangam', 'lavangalu',
        # Tamil:
        'kirambu', 'krambu',
        # Punjabi:
        'laung'
    ],
    'cinnamon': [
        'dalchini', 'cinnamon stick',
        # Telugu:
        'dalchina chekka',
        # Tamil:
        'pattai',
        # Punjabi:
        'dalchini'
    ],
    'black pepper': [
        'kali mirch', 'black peppercorns', 'pepper powder',
        # Telugu:
        'miriyalu',
        # Tamil:
        'milagu',
        # Punjabi:
        'kali mirch'
    ],
    'poha': [
        'flattened rice', 'chivda',
        # Telugu:
        'atukulu',
        # Tamil:
        'aval',
        # Punjabi:
        'poha'
    ],
    'rice flour': [
        'chawal ka atta',
        # Telugu:
        'biyyapu pindi',
        # Tamil:
        'arisi maavu',
        # Punjabi:
        'chawal da atta'
    ],
    'wheat flour': [
        'atta', 'whole wheat atta', 'gehun ka atta',
        # Telugu:
        'godhuma pindi',
        # Tamil:
        'godhumai maavu',
        # Punjabi:
        'kanak da atta', 'atta'
    ],
    'besan': [
        'gram flour', 'chickpea flour',
        # Telugu:
        'senaga pindi',
        # Tamil:
        'kadalai maavu',
        # Punjabi:
        'besan'
    ],
    'rava': [
        'sooji', 'semolina', 'bombay rava', 'upma rava',
        # Telugu:
        'upma rava', 'suji',
        # Tamil:
        'rava', 'sooji',
        # Punjabi:
        'sooji'
    ],
    'curd': [
        'yogurt', 'dahi', 'plain yogurt',
        # Telugu:
        'perugu',
        # Tamil:
        'thayir',
        # Punjabi:
        'dahi'
    ],
    'milk': [
        'doodh', 'cow milk', 'whole milk',
        # Telugu:
        'paalu',
        # Tamil:
        'paal',
        # Punjabi:
        'doodh'
    ],
    'brinjal': [
        'eggplant', 'aubergine', 'baingan',
        # Telugu:
        'vankaya',
        # Tamil:
        'kathirikai',
        # Punjabi:
        'baingan'
    ],
    'cauliflower': [
        'phool gobhi', 'gobi', 'cauliflower florets',
        # Telugu:
        'gobi', 'cauliflower',
        # Tamil:
        'cauliflower',
        # Punjabi:
        'gobhi'
    ],
    'capsicum': [
        'shimla mirch', 'bell pepper', 'green bell pepper',
        # Telugu:
        'benguluru mirapa', 'capsicum',
        # Tamil:
        'kuda milagai',
        # Punjabi:
        'shimla mirch'
    ],
    'okra': [
        'lady finger', 'bhindi', 'bhendi',
        # Telugu:
        'bendakaya',
        # Tamil:
        'vendakkai',
        # Punjabi:
        'bhindi'
    ],
}

# Dairy and animal derivative keywords for strict vegan ingredient verification
NON_VEGAN_INGREDIENTS = {
    'ghee', 'butter', 'milk', 'paneer', 'curd', 'yogurt', 'cream', 'malai',
    'cheese', 'honey', 'khoya', 'mawa', 'egg', 'eggs', 'anda', 'meat',
    'chicken', 'fish', 'prawn', 'prawns', 'mutton', 'crab', 'pork', 'beef'
}


def is_recipe_vegan(recipe_obj_or_ingredients) -> bool:
    """
    Verifies if a recipe consists entirely of verified vegan ingredients.
    A dish is vegan ONLY if:
    1. It is vegetarian (veg == True).
    2. None of its ingredients contain dairy, honey, egg, or animal derivatives.
    """
    if hasattr(recipe_obj_or_ingredients, 'veg') and not recipe_obj_or_ingredients.veg:
        return False

    ingredients = []
    if hasattr(recipe_obj_or_ingredients, 'recipe_ingredients'):
        for ri in recipe_obj_or_ingredients.recipe_ingredients.all():
            name = (ri.ingredient.name if ri.ingredient else '') + ' ' + ri.raw_name
            ingredients.append(name.lower())
    elif isinstance(recipe_obj_or_ingredients, list):
        for ing in recipe_obj_or_ingredients:
            if isinstance(ing, dict):
                name = (ing.get('name') or '') + ' ' + (ing.get('raw_name') or '')
                ingredients.append(name.lower())
            elif isinstance(ing, str):
                ingredients.append(ing.lower())

    for ing_text in ingredients:
        tokens = [clean_token(w) for w in re.split(r'[\s,()\/&+-]+', ing_text)]
        for token in tokens:
            if token in NON_VEGAN_INGREDIENTS:
                return False
        # Also check substring for multi-word non-vegan items
        for nv in ('ghee', 'butter', 'milk', 'paneer', 'curd', 'yogurt', 'cream', 'cheese', 'honey', 'khoya', 'mawa'):
            if re.search(r'\b' + nv + r'\b', ing_text):
                # Guard against coconut milk, almond milk, peanut butter (vegan)
                if nv == 'milk' and any(v in ing_text for v in ('coconut', 'almond', 'soy', 'oat')):
                    continue
                if nv == 'butter' and any(v in ing_text for v in ('peanut', 'almond', 'apple', 'cocoa')):
                    continue
                return False

    return True


def clean_token(token: str) -> str:
    """Normalize a single word token (lemmatize plural endings and strip punctuation)."""
    t = re.sub(r'[^a-z0-9]', '', str(token).lower())
    if t.endswith('ies'):
        return t[:-3] + 'y'
    if t.endswith('es') and not t.endswith(('ses', 'zes', 'ches', 'shes')) and len(t) > 3:
        return t[:-2]
    if t.endswith('s') and not t.endswith('ss') and len(t) > 3:
        return t[:-1]
    return t


def ingredient_matches(recipe_ing_str: str, pantry_item_str: str) -> bool:
    """
    Determines whether a recipe ingredient matches a user-selected pantry staple.
    Enforces strict culinary boundaries to eliminate false positives:
    - Rice != Rice Flour != Poha != Rice Bran Oil
    - Eggs != Eggplant (Baingan / Vankaya) != Deggi Mirch
    - Potatoes != Sweet Potato (Shakarkandi / Chilagada dumpa)
    - Mustard Seeds != Mustard Oil
    - Coconut != Coconut Oil
    """
    if not recipe_ing_str or not pantry_item_str:
        return False

    r_norm = recipe_ing_str.lower().strip()
    p_norm = pantry_item_str.lower().strip()

    # Direct match
    if r_norm == p_norm:
        return True

    # 1. Eggs vs Eggplant (Baingan/Brinjal) / Deggi Mirch
    if p_norm in ('egg', 'eggs', 'anda', 'ande', 'guddu', 'muttai'):
        r_tokens = [clean_token(w) for w in re.split(r'[\s,()\/&+-]+', r_norm)]
        has_egg = any(w in ('egg', 'anda', 'guddu', 'muttai') for w in r_tokens)
        is_eggplant = any(w in ('eggplant', 'baingan', 'brinjal', 'aubergine', 'vankaya', 'kathirikai') for w in r_tokens)
        if is_eggplant and not has_egg:
            return False
        return has_egg

    # 2. Whole Rice vs Rice Flour, Rice Rava, Rice Bran Oil, Poha
    if p_norm in ('rice', 'basmati rice', 'cooked rice', 'leftover cooked rice', 'raw rice', 'chawal', 'biyyam', 'arisi'):
        if any(ex in r_norm for ex in ('flour', 'maavu', 'atta', 'rava', 'oil', 'poha', 'flakes', 'batter', 'pindi')):
            return False
        r_tokens = [clean_token(w) for w in re.split(r'[\s,()\/&+-]+', r_norm)]
        return any(w in ('rice', 'chawal', 'basmati', 'biyyam', 'arisi') for w in r_tokens)

    # 3. Rice Flour
    if p_norm in ('rice flour', 'chawal ka atta', 'arisi maavu', 'biyyapu pindi'):
        return any(term in r_norm for term in ('rice flour', 'arisi maavu', 'chawal ka atta', 'biyyapu pindi'))

    # 4. Poha (Flattened Rice)
    if p_norm in ('poha', 'flattened rice', 'aval', 'atukulu'):
        return any(term in r_norm for term in ('poha', 'flattened rice', 'aval', 'atukulu', 'chivda'))

    # 5. Potato vs Sweet Potato
    if p_norm in ('potato', 'potatoes', 'aloo', 'batata', 'bangaladumpa', 'urulaikizhangu'):
        if 'sweet potato' in r_norm or 'shakarkand' in r_norm or 'chilagada' in r_norm:
            return False
        r_tokens = [clean_token(w) for w in re.split(r'[\s,()\/&+-]+', r_norm)]
        return any(w in ('potato', 'aloo', 'batata', 'bangaladumpa', 'urulaikizhangu') for w in r_tokens)

    # 6. Mustard Seeds vs Mustard Oil
    if p_norm in ('mustard seeds', 'rai', 'sarson', 'avalu', 'kadugu'):
        if 'oil' in r_norm and 'seed' not in r_norm:
            return False
        r_tokens = [clean_token(w) for w in re.split(r'[\s,()\/&+-]+', r_norm)]
        return any(w in ('mustard', 'rai', 'sarson', 'avalu', 'kadugu') for w in r_tokens)

    # 7. Controlled Synonym Dictionary Check
    p_clean = clean_token(p_norm)
    for staple, synonyms in SYNONYM_DICTIONARY.items():
        all_forms = [staple] + synonyms
        form_cleans = [clean_token(f) for f in all_forms]
        if p_norm == staple or p_norm in synonyms or p_clean in form_cleans:
            for form in all_forms:
                if re.search(r'\b' + re.escape(form) + r'\b', r_norm):
                    # Guard: verify no accidental flour/grain or oil mismatch
                    if ('flour' in form or 'atta' in form or 'maavu' in form or 'pindi' in form) != \
                       ('flour' in r_norm or 'atta' in r_norm or 'maavu' in r_norm or 'pindi' in r_norm):
                        if not any(f in form for f in ('flour', 'atta', 'besan', 'maida', 'pindi', 'maavu')):
                            if any(f in r_norm for f in ('flour', 'atta', 'rava', 'pindi', 'maavu')):
                                return False
                    if 'oil' in r_norm and 'oil' not in form and form not in ('ghee', 'butter'):
                        return False
                    return True

    # 8. Token Matching with Culinary Stopwords Stripped
    stop_words = {
        'fresh', 'pure', 'cooked', 'leftover', 'raw', 'cow', 'desi', 'warm', 'cold',
        'hot', 'dry', 'fine', 'chopped', 'boiled', 'cut', 'pieces', 'powder', 'seeds',
        'paste', 'leaves', 'leaf', 'oil', 'grated', 'large', 'small', 'medium', 'split'
    }
    p_tokens = [clean_token(w) for w in re.split(r'[\s,()\/&+-]+', p_norm) if clean_token(w) not in stop_words and len(clean_token(w)) > 2]
    r_tokens = [clean_token(w) for w in re.split(r'[\s,()\/&+-]+', r_norm) if clean_token(w) not in stop_words and len(clean_token(w)) > 2]

    if not p_tokens or not r_tokens:
        return False

    # Exact token equality after lemmatization
    return any(pt in r_tokens for pt in p_tokens)


def calculate_recipe_match(recipe_ingredients: List[Dict[str, Any]], pantry_items: List[str]) -> Dict[str, Any]:
    """
    Computes deterministic match metrics for a recipe against user pantry items:
    - total_required: count of required ingredients
    - matched_ingredients: list of matched recipe ingredients
    - missing_ingredients: list of unfulfilled recipe ingredients
    - matched_pantry_items: distinct pantry items matched by this dish
    - match_percent: (matched_required / total_required) * 100
    - is_ready: True if match_percent == 100
    """
    if not pantry_items or not recipe_ingredients:
        return {
            'match_percent': 0,
            'match_percentage': 0,
            'user_matched_count': 0,
            'matched_count': 0,
            'matched_pantry_items': [],
            'matched_ingredients': [],
            'missing_ingredients': recipe_ingredients or [],
            'optional_ingredients': [],
            'total_required': len(recipe_ingredients) if recipe_ingredients else 0,
            'is_ready': False
        }

    matched_pantry_set = set()
    matched_ingredients = []
    missing_ingredients = []
    optional_ingredients = []

    for ing in recipe_ingredients:
        is_opt = ing.get('is_optional', False)
        ing_name = ing.get('name') or ing.get('raw_name') or ''

        if is_opt:
            optional_ingredients.append(ing)
            continue

        matched_pantry = None
        for p in pantry_items:
            if ingredient_matches(ing_name, p):
                matched_pantry = p
                break

        if matched_pantry:
            matched_ingredients.append(ing)
            matched_pantry_set.add(matched_pantry)
        else:
            missing_ingredients.append(ing)

    total_required = len(matched_ingredients) + len(missing_ingredients)
    percent = round((len(matched_ingredients) / total_required * 100)) if total_required > 0 else 0

    return {
        'match_percent': percent,
        'match_percentage': percent,
        'user_matched_count': len(matched_pantry_set),
        'matched_count': len(matched_ingredients),
        'matched_pantry_items': sorted(list(matched_pantry_set)),
        'matched_ingredients': matched_ingredients,
        'missing_ingredients': missing_ingredients,
        'optional_ingredients': optional_ingredients,
        'total_required': total_required,
        'is_ready': percent == 100
    }


def rank_recipes_by_pantry(recipes: List[Dict[str, Any]], pantry_items: List[str]) -> List[Dict[str, Any]]:
    """
    Ranks recipes deterministically according to requirements:
    1. Highest user_matched_count (matches most items in kitchen).
    2. Highest match_percent (recipe completeness).
    3. Total matched recipe ingredients count.
    4. Fastest prep time.
    Deduplicates by recipe_uid to guarantee no duplicate recommendations.
    """
    seen_uids = set()
    scored = []

    for r in recipes:
        uid = r.get('recipe_uid') or r.get('id')
        if uid in seen_uids:
            continue
        seen_uids.add(uid)

        ingredients = r.get('ingredients', [])
        match_info = calculate_recipe_match(ingredients, pantry_items)
        if match_info['user_matched_count'] > 0:
            scored.append({
                **r,
                'match_info': match_info,
                # Top-level fields for direct client access
                'match_percent': match_info['match_percent'],
                'match_percentage': match_info['match_percent'],
                'matched_count': match_info['user_matched_count'],
                'matched_ingredients': match_info['matched_ingredients'],
                'missing_ingredients': match_info['missing_ingredients']
            })

    def sort_key(item):
        m = item['match_info']
        return (
            -m['user_matched_count'],
            -m['match_percent'],
            -len(m['matched_ingredients']),
            item.get('prep_time', 999),
            item.get('name', '')
        )

    scored.sort(key=sort_key)
    return scored
