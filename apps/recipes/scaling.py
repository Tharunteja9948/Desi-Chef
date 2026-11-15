"""
AI Chef Serving Calculator and Measurement Conversion Engine.
Calculates dynamic ingredient scaling without cumulative rounding errors.
"""

import re
from typing import Dict, Any, List

def format_scaled_number(num: float) -> str:
    """Format floating point numbers into clean fractions or friendly decimals."""
    eps = 0.05
    whole = int(num)
    frac = num - whole

    if abs(frac) < eps:
        return str(whole)
    if abs(frac - 0.25) < eps:
        return f"{whole} 1/4" if whole > 0 else "1/4"
    if abs(frac - 0.333) < eps or abs(frac - 0.33) < eps:
        return f"{whole} 1/3" if whole > 0 else "1/3"
    if abs(frac - 0.5) < eps:
        return f"{whole} 1/2" if whole > 0 else "1/2"
    if abs(frac - 0.666) < eps or abs(frac - 0.67) < eps:
        return f"{whole} 2/3" if whole > 0 else "2/3"
    if abs(frac - 0.75) < eps:
        return f"{whole} 3/4" if whole > 0 else "3/4"

    # Return clean float up to 2 decimal places
    val = round(num, 2)
    return str(int(val)) if val.is_integer() else f"{val:.2f}".rstrip('0').rstrip('.')

def scale_ingredient_amount(amount_str: str, factor: float) -> str:
    """
    Scales an amount string (e.g. '1/2 tsp', '2 cups', '500g', '1.5 tbsp') by multiplier factor.
    Guarantees zero cumulative drift by computing directly from original base string using a single-pass regex.
    """
    if not amount_str or factor <= 0 or factor == 1.0:
        return amount_str or ''

    # Separate parenthetical cooking notes to avoid scaling descriptive numbers
    paren_idx = amount_str.find('(')
    main_part = amount_str
    note_part = ''
    if paren_idx != -1:
        main_part = amount_str[:paren_idx].strip()
        note_part = ' ' + amount_str[paren_idx:].strip()

    # Single-pass regex to match:
    # 1. Mixed fraction: '1 1/2'
    # 2. Simple fraction: '1/2' or '3/4'
    # 3. Decimal or integer: '1.5', '2', '500' (even before units like 'g' or 'ml')
    combined_regex = re.compile(r'(\d+\s+\d+/\d+)|(\d+/\d+)|(\d+(?:\.\d+)?)')

    def replace_number(match):
        text = match.group(0)
        val = 0.0
        if ' ' in text and '/' in text:
            whole, frac = text.split(' ')
            n, d = frac.split('/')
            val = float(whole) + float(n) / float(d)
        elif '/' in text:
            n, d = text.split('/')
            val = float(n) / float(d)
        else:
            val = float(text)
        return format_scaled_number(val * factor)

    scaled_main = combined_regex.sub(replace_number, main_part)
    return (scaled_main + note_part).strip()

def scale_recipe_ingredients(ingredients: List[Dict[str, Any]], base_servings: int, target_servings: int) -> List[Dict[str, Any]]:
    """
    Scales a list of recipe ingredient dicts from base_servings to target_servings.
    Validates boundary conditions: clamps minimum servings to 1 and maximum to 100.
    """
    if not base_servings or base_servings <= 0:
        base_servings = 2
    if not target_servings or target_servings <= 0:
        target_servings = base_servings

    target_servings = max(1, min(100, target_servings))
    factor = target_servings / base_servings

    scaled = []
    for ing in ingredients:
        raw_amt = ing.get('amount') or ''
        scaled.append({
            **ing,
            'original_amount': raw_amt,
            'scaled_amount': scale_ingredient_amount(raw_amt, factor),
            'servings_factor': factor,
            'target_servings': target_servings
        })
    return scaled
