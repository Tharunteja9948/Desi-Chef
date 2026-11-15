"""
AI Chef Core Recommendation and Semantic Ingredient Matching Engine.
Powers 100% deterministic, explainable, authentic Indian culinary recommendations.
"""

import re
from typing import List, Dict, Any, Set, Tuple

# Multi-lingual Indian Homestyle Synonyms Dictionary
SYNONYM_DICTIONARY = {
    'egg': ['eggs', 'anda', 'ande', 'boiled egg', 'egg white', 'egg whites'],
    'rice': ['chawal', 'basmati', 'basmati rice', 'cooked rice', 'leftover rice', 'raw rice', 'sona masoori'],
    'chicken': ['murgh', 'murg', 'koli', 'chicken breast', 'boneless chicken', 'chicken pieces', 'chicken keema'],
    'paneer': ['chhena', 'cottage cheese', 'fresh paneer', 'paneer cubes'],
    'potato': ['potatoes', 'aloo', 'alu', 'batata', 'urulaikizhangu', 'bangaladumpa'],
    'tomato': ['tomatoes', 'tamatar', 'thakkali', 'tamata'],
    'onion': ['onions', 'pyaz', 'shallot', 'shallots', 'vengayam', 'ullipaya', 'ullipayalu', 'kanda'],
    'toor dal': ['toor', 'arhar', 'arhar dal', 'kandi pappu', 'sambar dal', 'tuvar dal'],
    'moong dal': ['yellow moong dal', 'split moong', 'pesara pappu', 'paasi paruppu', 'mung dal'],
    'chana dal': ['bengal gram dal', 'senaga pappu', 'kadalai paruppu'],
    'urad dal': ['black gram', 'minappappu', 'ulutham paruppu', 'split urad dal'],
    'ghee': ['pure ghee', 'desi ghee', 'cow ghee', 'neyyi', 'nei'],
    'ginger': ['adrak', 'allam', 'inji', 'fresh ginger'],
    'garlic': ['lahsun', 'vellulli', 'poondu', 'fresh garlic'],
    'curry leaves': ['curry leaf', 'kadi patta', 'karivepaku', 'karuveppilai', 'meetha neem'],
    'coriander': ['coriander leaves', 'cilantro', 'dhania', 'dhania patta', 'kothmir', 'kothamalli'],
    'mint': ['mint leaves', 'pudina', 'fresh pudina'],
    'green chillies': ['green chilli', 'hari mirch', 'pachi mirchi', 'pachai milagai'],
    'mustard seeds': ['rai', 'sarson', 'avalu', 'kadugu'],
    'cumin': ['cumin seeds', 'jeera', 'jeelakarra', 'seeragam'],
    'turmeric': ['turmeric powder', 'haldi', 'pasupu', 'manjal'],
    'red chilli powder': ['lal mirch powder', 'mirapakaya podi', 'milagai thool', 'kashmiri chilli powder', 'deggi mirch'],
    'tamarind': ['imli', 'chintapandu', 'puli', 'tamarind pulp', 'tamarind paste'],
    'jaggery': ['gud', 'bellam', 'vellam', 'cane jaggery'],
    'coconut': ['fresh grated coconut', 'nariyal', 'kobbari', 'thengai', 'dry coconut'],
    'peanuts': ['groundnuts', 'moongphali', 'pallilu', 'verkadala'],
    'cashews': ['cashew nuts', 'kaju', 'jeedipappu', 'munthiri'],
    'fenugreek': ['methi', 'methi seeds', 'menthulu', 'vendhayam'],
    'asafoetida': ['hing', 'inguva', 'perungayam'],
    'cardamom': ['elaichi', 'yalakulu', 'elakkai', 'green cardamom'],
    'cloves': ['laung', 'lavangam', 'kirambu'],
    'cinnamon': ['dalchini', 'dalchina chekka', 'pattai'],
    'black pepper': ['kali mirch', 'miriyalu', 'milagu', 'black peppercorns'],
    'poha': ['flattened rice', 'aval', 'atukulu', 'chivda'],
    'rice flour': ['chawal ka atta', 'arisi maavu', 'biyyapu pindi'],
    'wheat flour': ['atta', 'whole wheat atta', 'godhumai maavu'],
    'besan': ['gram flour', 'chickpea flour', 'senaga pindi', 'kadalai maavu'],
    'rava': ['sooji', 'semolina', 'bombay rava', 'upma rava'],
}

def clean_token(token: str) -> str:
    """Normalize a single word token (lemmatize plural endings and strip punctuation)."""
    t = re.sub(r'[^a-z0-9]', '', token.lower())
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
    - Rice != Rice Flour
    - Rice != Poha
    - Eggs != Eggplant (Baingan)
    - Potatoes != Sweet Potato (Shakarkandi)
    """
    if not recipe_ing_str or not pantry_item_str:
        return False

    r_norm = recipe_ing_str.lower().strip()
    p_norm = pantry_item_str.lower().strip()

    # 1. Eggs vs Eggplant / Deggi Mirch
    if p_norm in ('egg', 'eggs', 'anda', 'ande'):
        r_tokens = [clean_token(w) for w in re.split(r'[\s,()\/&+-]+', r_norm)]
        has_egg = any(w in ('egg', 'anda') for w in r_tokens)
        is_eggplant = any(w in ('eggplant', 'baingan', 'brinjal', 'aubergine') for w in r_tokens)
        if is_eggplant and not has_egg:
            return False
        return has_egg

    # 2. Whole Rice vs Rice Flour, Rice Rava, Rice Bran Oil, Poha
    if p_norm in ('rice', 'basmati rice', 'cooked rice', 'leftover cooked rice', 'raw rice', 'chawal'):
        # Negative exclusions: flours, batters, oils, and flattened flakes require distinct processing
        if any(ex in r_norm for ex in ('flour', 'maavu', 'atta', 'rava', 'oil', 'poha', 'flakes', 'batter')):
            return False
        r_tokens = [clean_token(w) for w in re.split(r'[\s,()\/&+-]+', r_norm)]
        return any(w in ('rice', 'chawal', 'basmati') for w in r_tokens)

    # 3. Rice Flour
    if p_norm in ('rice flour', 'chawal ka atta', 'arisi maavu', 'biyyapu pindi'):
        return any(term in r_norm for term in ('rice flour', 'arisi maavu', 'chawal ka atta', 'biyyapu pindi'))

    # 4. Poha (Flattened Rice)
    if p_norm in ('poha', 'flattened rice', 'aval', 'atukulu'):
        return any(term in r_norm for term in ('poha', 'flattened rice', 'aval', 'atukulu'))

    # 5. Potato vs Sweet Potato
    if p_norm in ('potato', 'potatoes', 'aloo', 'batata'):
        if 'sweet potato' in r_norm or 'shakarkand' in r_norm:
            return False
        r_tokens = [clean_token(w) for w in re.split(r'[\s,()\/&+-]+', r_norm)]
        return any(w in ('potato', 'aloo', 'batata') for w in r_tokens)

    # 6. Check Controlled Synonym Dictionary
    for staple, synonyms in SYNONYM_DICTIONARY.items():
        if p_norm == staple or p_norm in synonyms:
            # Check if recipe string matches the staple or any of its synonyms
            all_forms = [staple] + synonyms
            for form in all_forms:
                if re.search(r'\b' + re.escape(form) + r'\b', r_norm):
                    # Guard: verify no accidental flour/whole grain mismatch
                    if ('flour' in form or 'atta' in form) != ('flour' in r_norm or 'atta' in r_norm):
                        if not any(f in form for f in ('flour', 'atta', 'besan', 'maida')):
                            if any(f in r_norm for f in ('flour', 'atta', 'rava')):
                                return False
                    return True

    # 7. Fallback Token Matching with Stopwords Stripped
    stop_words = {'fresh', 'pure', 'cooked', 'leftover', 'raw', 'cow', 'desi', 'warm', 'cold',
                  'hot', 'dry', 'fine', 'chopped', 'boiled', 'cut', 'pieces', 'powder', 'seeds', 'paste'}
    p_tokens = [clean_token(w) for w in re.split(r'[\s,()\/&+-]+', p_norm) if clean_token(w) not in stop_words and len(clean_token(w)) > 2]
    r_tokens = [clean_token(w) for w in re.split(r'[\s,()\/&+-]+', r_norm) if clean_token(w) not in stop_words and len(clean_token(w)) > 2]

    if not p_tokens:
        p_raw = [clean_token(w) for w in p_norm.split() if len(clean_token(w)) > 1]
        return any(pw in r_tokens for pw in p_raw)

    return any(pw in r_tokens for pw in p_tokens)

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
            'user_matched_count': 0,
            'matched_pantry_items': [],
            'matched_ingredients': [],
            'missing_ingredients': recipe_ingredients,
            'optional_ingredients': [],
            'total_required': len(recipe_ingredients),
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
        'user_matched_count': len(matched_pantry_set),
        'matched_pantry_items': sorted(list(matched_pantry_set)),
        'matched_ingredients': matched_ingredients,
        'missing_ingredients': missing_ingredients,
        'optional_ingredients': optional_ingredients,
        'total_required': total_required,
        'is_ready': percent == 100
    }

def rank_recipes_by_pantry(recipes: List[Dict[str, Any]], pantry_items: List[str]) -> List[Dict[str, Any]]:
    """
    Ranks recipes deterministically according to user requirements:
    1. Highest user_matched_count (matches most items in kitchen).
    2. Highest match_percent (recipe completeness).
    3. Total matched recipe ingredients count.
    4. Fastest prep time.
    """
    scored = []
    for r in recipes:
        ingredients = r.get('ingredients', [])
        match_info = calculate_recipe_match(ingredients, pantry_items)
        if match_info['user_matched_count'] > 0:
            scored.append({
                **r,
                'match_info': match_info
            })

    def sort_key(item):
        m = item['match_info']
        return (
            -m['user_matched_count'],
            -m['match_percent'],
            -len(m['matched_ingredients']),
            item.get('prep_time', 999)
        )

    scored.sort(key=sort_key)
    return scored
