// ==========================================================================
// DESI CHEF — Your Personal Chef
// Production Django Full-Stack Application Controller (512 Authentic Recipes)
// ==========================================================================

// Everyday Indian home pantry staples & leftovers (Immutable Default Set)
const DEFAULT_PANTRY_ITEMS = Object.freeze([
  "Rice",
  "Eggs",
  "Chicken",
  "Onions",
  "Tomatoes",
  "Potatoes",
  "Paneer",
  "Toor Dal",
  "Ghee"
]);

// Runtime custom ingredients added by user (strictly preserves DEFAULT_PANTRY_ITEMS)
let customPantryItems = new Set();

// Active pantry staples working collection
function getPantryStaples() {
  return [...DEFAULT_PANTRY_ITEMS, ...customPantryItems];
}

// App State
let selectedPantry = new Set();
let isPantryFilterActive = false;
let currentMainSection = "breakfast"; // "breakfast", "rice", "streetfood", "curries", "snacks", "breads", "sweets", "chutneys", "soups_drinks", "sides_eggs_seafood", "all"
let currentSubCategory = "all";
let currentSort = "match";
let searchQuery = "";
let quickFilterFast = false;
let quickFilterReady = false;
let quickFilterVegOnly = false;
let quickFilterNonVegOnly = false;

let currentPage = 1;
let totalRecipeCount = 0;
let loadedRecipes = [];
let activeRecipe = null;
let currentServingsFactor = 1;

// Drift-free Timestamp-based Kitchen Timer State
let timerTargetTimestamp = null;
let timerRemainingMs = 900 * 1000;
let timerInterval = null;
let timerRunning = false;
let timerSeconds = 900;

// Centralized HTML sanitizer to prevent XSS across all user-rendered strings
function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Serving Calculator: Precision Multiplier & Fraction Formatter
function formatScaledNumber(num) {
  const eps = 0.05;
  const whole = Math.floor(num);
  const frac = num - whole;
  if (Math.abs(frac) < eps) return whole.toString();
  if (Math.abs(frac - 0.25) < eps) return whole > 0 ? `${whole} 1/4` : '1/4';
  if (Math.abs(frac - 0.333) < eps || Math.abs(frac - 0.33) < eps) return whole > 0 ? `${whole} 1/3` : '1/3';
  if (Math.abs(frac - 0.5) < eps) return whole > 0 ? `${whole} 1/2` : '1/2';
  if (Math.abs(frac - 0.666) < eps || Math.abs(frac - 0.67) < eps) return whole > 0 ? `${whole} 2/3` : '2/3';
  if (Math.abs(frac - 0.75) < eps) return whole > 0 ? `${whole} 3/4` : '3/4';
  return Number(num.toFixed(2)).toString();
}

function scaleAmount(str, factor) {
  if (!str || factor === 1) return str;
  const parenIdx = str.indexOf('(');
  let main = str;
  let note = '';
  if (parenIdx !== -1) {
    main = str.substring(0, parenIdx).trim();
    note = ' ' + str.substring(parenIdx).trim();
  }

  // Combined single-pass regex to completely avoid repeated multiplication:
  // 1. Mixed fraction: '1 1/2'
  // 2. Simple fraction: '1/2' or '3/4'
  // 3. Decimal or integer: '1.5', '2', '500g'
  const combinedRegex = /(\d+\s+\d+\/\d+)|(\d+\/\d+)|(\d+(?:\.\d+)?)/g;

  const scaledMain = main.replace(combinedRegex, (match) => {
    let val = 0;
    if (match.includes(' ') && match.includes('/')) {
      const parts = match.split(' ');
      const frac = parts[1].split('/');
      val = parseInt(parts[0], 10) + parseInt(frac[0], 10) / parseInt(frac[1], 10);
    } else if (match.includes('/')) {
      const frac = match.split('/');
      val = parseInt(frac[0], 10) / parseInt(frac[1], 10);
    } else {
      val = parseFloat(match);
    }
    return formatScaledNumber(val * factor);
  });

  return (scaledMain + note).trim();
}

// Expose state accessors on window for test verification
if (typeof window !== "undefined") {
  window.DEFAULT_PANTRY_ITEMS = DEFAULT_PANTRY_ITEMS;
  window.getCustomPantryItems = () => customPantryItems;
  window.getSelectedPantry = () => selectedPantry;
  window.scaleAmount = scaleAmount;
  window.escapeHtml = escapeHtml;
  window.ingredientMatches = ingredientMatches;
  window.calculateMatch = calculateMatch;
  window.getAllRecipes = getAllRecipes;
  window.getPantryMatchedRecipes = getPantryMatchedRecipes;
  window.getTimerState = () => ({
    timerSeconds,
    timerRemainingMs,
    timerRunning,
    timerTargetTimestamp
  });
}

function getAllRecipes() {
  if (typeof BREAKFAST_RECIPES !== "undefined") {
    return [
      ...BREAKFAST_RECIPES,
      ...RICE_RECIPES,
      ...STREETFOOD_RECIPES,
      ...CURRY_RECIPES,
      ...SNACK_RECIPES,
      ...BREAD_RECIPES,
      ...SWEET_RECIPES,
      ...CHUTNEY_RECIPES,
      ...SOUPS_DRINKS_RECIPES,
      ...SIDES_EGGS_SEAFOOD_RECIPES
    ];
  }
  return loadedRecipes;
}

// DOM Elements
const pantryChipsContainer = document.getElementById("pantryChipsContainer");
const dishesGrid = document.getElementById("dishesGrid");
const recipeCounterNotice = document.getElementById("recipeCounterNotice");
const navCountEl = document.getElementById("navCount");
const recipeModal = document.getElementById("recipeModal");
const filtersBar = document.getElementById("filtersBar");
const recipesPagination = document.getElementById("recipesPagination");

// ==========================================================================
// PANTRY CHIPS & INGREDIENT MATCHING (IN MY KITCHEN)
// ==========================================================================
let pantrySearchQuery = "";

// Master ingredients list
const FALLBACK_MASTER_INGREDIENTS = [
  "Rice", "Basmati Rice", "Cooked Rice", "Eggs", "Chicken", "Onions", "Tomatoes",
  "Potatoes", "Paneer", "Toor Dal", "Moong Dal", "Chana Dal", "Urad Dal", "Ghee",
  "Mustard Seeds", "Cumin Seeds", "Curry Leaves", "Ginger", "Garlic", "Green Chillies",
  "Turmeric Powder", "Red Chilli Powder", "Coriander Leaves", "Garam Masala", "Coriander Powder",
  "Cumin Powder", "Fennel Seeds", "Cardamom", "Cloves", "Cinnamon", "Bay Leaf",
  "Black Pepper", "Hing (Asafoetida)", "Fenugreek Seeds", "Kasuri Methi", "Mint Leaves",
  "Lemon Juice", "Tamarind", "Coconut", "Grated Coconut", "Cashews", "Raisins",
  "Almonds", "Milk", "Curd (Yogurt)", "Butter", "Besan (Gram Flour)", "Maida",
  "Atta (Wheat Flour)", "Rava (Semolina)", "Poha (Flattened Rice)", "Fish", "Prawns",
  "Mutton", "Capsicum", "Green Peas", "Carrots", "Beans", "Cauliflower", "Spinach (Palak)",
  "Methi Leaves", "Cabbage", "Brinjal", "Bottle Gourd", "Bitter Gourd", "Drumsticks",
  "Mushrooms", "Soya Chunks", "Jaggery", "Sugar", "Saffron", "Rose Water", "Gongura Leaves"
];

function getMasterIngredientsList() {
  return FALLBACK_MASTER_INGREDIENTS;
}

function renderPantryChips() {
  if (!pantryChipsContainer) return;

  let itemsToDisplay = [];

  if (!pantrySearchQuery) {
    const defaultSet = new Set([...DEFAULT_PANTRY_ITEMS, ...customPantryItems, ...selectedPantry]);
    itemsToDisplay = Array.from(defaultSet);
  } else {
    const allIngredients = getMasterIngredientsList();
    itemsToDisplay = allIngredients.filter(it => it.toLowerCase().includes(pantrySearchQuery));

    selectedPantry.forEach(item => {
      if (item.toLowerCase().includes(pantrySearchQuery) && !itemsToDisplay.includes(item)) {
        itemsToDisplay.unshift(item);
      }
    });

    itemsToDisplay = itemsToDisplay.slice(0, 24);
  }

  itemsToDisplay.sort((a, b) => {
    const aSel = selectedPantry.has(a);
    const bSel = selectedPantry.has(b);
    if (aSel && !bSel) return -1;
    if (!aSel && bSel) return 1;
    return a.localeCompare(b);
  });

  let html = "";
  if (itemsToDisplay.length === 0 && pantrySearchQuery) {
    const safeQuery = escapeHtml(pantrySearchQuery);
    html = `
      <div style="padding: 10px 0; font-size: 13px; color: var(--text-dark); display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
        <span>No ingredient found for "<strong>${safeQuery}</strong>".</span>
        <button class="kitchen-chip selected" onclick="addCustomPantryItem(decodeURIComponent('${encodeURIComponent(pantrySearchQuery)}'))">
          <span>+</span>
          <span>Add "${safeQuery}" to my Pantry</span>
        </button>
      </div>
    `;
  } else {
    html = itemsToDisplay.map(item => {
      const isSelected = selectedPantry.has(item);
      const safeItem = escapeHtml(item);
      const encItem = encodeURIComponent(item);
      return `
        <button class="kitchen-chip ${isSelected ? 'selected' : ''}" onclick="togglePantryItem(decodeURIComponent('${encItem}'))">
          <span>${isSelected ? '✓' : '+'}</span>
          <span>${safeItem}</span>
        </button>
      `;
    }).join("");

    if (pantrySearchQuery && !itemsToDisplay.some(it => it.toLowerCase() === pantrySearchQuery)) {
      const safeQuery = escapeHtml(pantrySearchQuery);
      html += `
        <button class="kitchen-chip" style="border: 1.5px dashed var(--turmeric-amber); color: var(--farm-green); background: #fff;" onclick="addCustomPantryItem(decodeURIComponent('${encodeURIComponent(pantrySearchQuery)}'))">
          <span>+</span>
          <span>Add "${safeQuery}"</span>
        </button>
      `;
    }
  }

  pantryChipsContainer.innerHTML = html;
}

function onPantrySearch(val) {
  pantrySearchQuery = val.trim().toLowerCase();
  const clearBtn = document.getElementById("pantrySearchClearBtn");
  if (clearBtn) clearBtn.classList.toggle("show", val.trim().length > 0);
  renderPantryChips();
}

function clearPantrySearch() {
  const input = document.getElementById("pantrySearchInput");
  if (input) input.value = "";
  pantrySearchQuery = "";
  const clearBtn = document.getElementById("pantrySearchClearBtn");
  if (clearBtn) clearBtn.classList.remove("show");
  renderPantryChips();
  if (input) input.focus();
}

function onPantrySearchKeydown(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    if (!pantrySearchQuery) return;
    
    const allPantry = getPantryStaples();
    const exactMatch = allPantry.find(it => it.toLowerCase() === pantrySearchQuery);
    if (exactMatch) {
      togglePantryItem(exactMatch);
      clearPantrySearch();
      return;
    }

    const partialMatch = allPantry.find(it => it.toLowerCase().includes(pantrySearchQuery));
    if (partialMatch) {
      togglePantryItem(partialMatch);
      clearPantrySearch();
      return;
    }

    addCustomPantryItem(pantrySearchQuery);
    clearPantrySearch();
  }
}

function addCustomPantryItem(name) {
  if (!name || typeof name !== 'string') return;
  const trimmed = name.trim();
  if (trimmed.length === 0 || trimmed.length > 50) return;
  
  const formatted = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  customPantryItems.add(formatted);
  selectedPantry.add(formatted);
  
  renderPantryChips();
  updatePantryCounters();
  triggerPantrySync();
  loadRecipesFromAPI(currentPage);
}

function togglePantryItem(item) {
  if (!item) return;
  if (selectedPantry.has(item)) {
    selectedPantry.delete(item);
  } else {
    selectedPantry.add(item);
  }
  renderPantryChips();
  updatePantryCounters();
  triggerPantrySync();

  // If in pantry filter mode, reload
  if (isPantryFilterActive) {
    viewPantryMatches();
  } else {
    // Re-evaluate matches on currently loaded recipes
    recalculateLoadedMatches();
  }
}

function resetPantry() {
  selectedPantry.clear();
  isPantryFilterActive = false;
  renderPantryChips();
  updatePantryCounters();
  triggerPantrySync();
  loadRecipesFromAPI(1);
}

function updatePantryCounters() {
  const count = selectedPantry.size;
  if (navCountEl) {
    navCountEl.textContent = count;
    navCountEl.classList.toggle("bump", count > 0);
  }

  const footerTitle = document.getElementById("pantryFooterTitle");
  const footerSub = document.getElementById("pantryFooterSub");
  const footerIcon = document.getElementById("pantryFooterIcon");
  const btnText = document.getElementById("pantryBtnText");
  const ctaBtn = document.getElementById("pantryViewMatchesCta");
  const clearBtn = document.getElementById("pantryClearBtn");

  if (clearBtn) clearBtn.style.display = count > 0 ? "inline-flex" : "none";

  if (count === 0) {
    if (footerTitle) footerTitle.textContent = "Tap ingredients above to start matching";
    if (footerSub) footerSub.textContent = "Select what you have at home to see instant dish matches";
    if (footerIcon) footerIcon.textContent = "🥘";
    if (btnText) btnText.textContent = "Select Ingredients";
    if (ctaBtn) ctaBtn.classList.add("disabled");
  } else {
    const listStr = Array.from(selectedPantry).slice(0, 3).join(", ") + (count > 3 ? ` +${count - 3} more` : "");
    if (footerTitle) footerTitle.innerHTML = `<strong>${count} ingredient${count === 1 ? '' : 's'} selected:</strong> <span style="font-weight:400;">${escapeHtml(listStr)}</span>`;
    if (footerSub) footerSub.textContent = "Ready to discover Indian recipes you can cook right now!";
    if (footerIcon) footerIcon.textContent = "🔥";
    if (btnText) btnText.textContent = `View Dish Matches (${count})`;
    if (ctaBtn) ctaBtn.classList.remove("disabled");
  }
}

function scrollToPantry() {
  const el = document.getElementById("pantryShelf");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function getPantryMatchedRecipes() {
  if (selectedPantry.size === 0) return [];
  return getAllRecipes()
    .map(r => ({ ...r, matchInfo: calculateMatch(r) }))
    .filter(r => r.matchInfo.userMatchedCount > 0)
    .sort((a, b) => {
      if (b.matchInfo.userMatchedCount !== a.matchInfo.userMatchedCount) {
        return b.matchInfo.userMatchedCount - a.matchInfo.userMatchedCount;
      }
      if (b.matchInfo.percent !== a.matchInfo.percent) {
        return b.matchInfo.percent - a.matchInfo.percent;
      }
      return (b.matchInfo.matchedRecipeIngs ? b.matchInfo.matchedRecipeIngs.length : 0) - 
             (a.matchInfo.matchedRecipeIngs ? a.matchInfo.matchedRecipeIngs.length : 0);
    });
}

function viewPantryMatches() {
  if (selectedPantry.size === 0) {
    scrollToPantry();
    return;
  }
  isPantryFilterActive = true;
  searchQuery = "";
  const searchInput = document.getElementById("recipeSearch");
  if (searchInput) searchInput.value = "";

  renderDishesSkeleton();

  if (typeof fetch === "undefined") return;

  fetch('/api/v1/recommendations/recommend/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken()
    },
    body: JSON.stringify({
      ingredients: Array.from(selectedPantry),
      dietary: quickFilterVegOnly ? 'veg' : (quickFilterNonVegOnly ? 'nonveg' : 'all')
    })
  })
  .then(res => res.json())
  .then(data => {
    const rawList = Array.isArray(data) ? data : (data.results || data.recommendations || []);
    loadedRecipes = rawList.map(r => ({
      ...r,
      id: r.recipe_uid,
      prepTime: r.prep_time,
      subCategory: r.subcategory,
      ingredients: r.ingredients || [],
      matchInfo: {
        percent: r.match_percentage !== undefined ? r.match_percentage : (r.match_percent || 0),
        userMatchedCount: r.matched_count || (r.matched_ingredients ? r.matched_ingredients.length : 0),
        matchedItems: r.matched_ingredients || [],
        missing: r.missing_ingredients || []
      }
    }));

    renderDishesCards(loadedRecipes, loadedRecipes.length);
    if (recipesPagination) recipesPagination.style.display = "none";
    
    const notice = document.getElementById("recipeCounterNotice");
    if (notice) notice.scrollIntoView({ behavior: "smooth", block: "start" });
  })
  .catch(() => {
    loadRecipesFromAPI(1);
  });
}

function exitPantryFilter() {
  isPantryFilterActive = false;
  loadRecipesFromAPI(1);
}

// ==========================================================================
// INGREDIENT MATCHING & BOUNDARY RULES
// ==========================================================================
function cleanWord(w) {
  w = w.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (w.endsWith('ies')) return w.slice(0, -3) + 'y';
  if (w.endsWith('es') && !w.endsWith('ses') && !w.endsWith('zes') && w.length > 3) return w.slice(0, -2);
  if (w.endsWith('s') && !w.endsWith('ss') && w.length > 3) return w.slice(0, -1);
  return w;
}

function ingredientMatches(recipeIng, pantryItem) {
  if (!recipeIng || !pantryItem) return false;
  const pNorm = pantryItem.toLowerCase().trim();
  const rNorm = recipeIng.toLowerCase().trim();
  
  // Specific staple overrides for 100% homestyle culinary accuracy

  // 1. Eggs vs Eggplant (Baingan/Brinjal)
  if (pNorm === 'egg' || pNorm === 'eggs' || pNorm === 'anda') {
    const rWords = rNorm.split(/[\s,()\/&+-]+/).map(cleanWord);
    const hasEggWord = rWords.some(w => w === 'egg' || w === 'anda');
    const isEggplant = rWords.some(w => w === 'eggplant' || w === 'baingan' || w === 'brinjal');
    if (isEggplant && !hasEggWord) return false;
    return hasEggWord;
  }
  
  // 2. Whole Rice vs Rice Flour, Rice Bran Oil, Poha (Prevent False-Positive Matches)
  if (pNorm === 'rice' || pNorm === 'basmati rice' || pNorm === 'cooked rice' || pNorm === 'leftover cooked rice' || pNorm === 'raw rice' || pNorm === 'chawal') {
    if (rNorm.includes('flour') || rNorm.includes('maavu') || rNorm.includes('atta') || rNorm.includes('rava') || rNorm.includes('oil') || rNorm.includes('poha') || rNorm.includes('flakes') || rNorm.includes('batter')) {
      return false;
    }
    const rWords = rNorm.split(/[\s,()\/&+-]+/).map(cleanWord);
    return rWords.some(w => w === 'rice' || w === 'chawal' || w === 'basmati');
  }

  // 3. Rice Flour
  if (pNorm === 'rice flour' || pNorm === 'chawal ka atta' || pNorm === 'arisi maavu') {
    return rNorm.includes('rice flour') || rNorm.includes('arisi maavu') || rNorm.includes('chawal ka atta');
  }

  // 4. Poha (Flattened Rice)
  if (pNorm === 'poha' || pNorm === 'flattened rice' || pNorm === 'aval' || pNorm === 'atukulu') {
    return rNorm.includes('poha') || rNorm.includes('flattened rice') || rNorm.includes('aval') || rNorm.includes('atukulu');
  }

  // 5. Potato vs Sweet Potato
  if (pNorm === 'potato' || pNorm === 'potatoes' || pNorm === 'aloo' || pNorm === 'batata') {
    if (rNorm.includes('sweet potato') || rNorm.includes('shakarkand')) return false;
    const rWords = rNorm.split(/[\s,()\/&+-]+/).map(cleanWord);
    return rWords.some(w => w === 'potato' || w === 'aloo' || w === 'batata');
  }

  // 6. Chicken
  if (pNorm === 'chicken' || pNorm === 'murgh') {
    const rWords = rNorm.split(/[\s,()\/&+-]+/).map(cleanWord);
    return rWords.some(w => w === 'chicken' || w === 'murgh');
  }

  // 7. Paneer
  if (pNorm === 'paneer' || pNorm === 'chhena') {
    const rWords = rNorm.split(/[\s,()\/&+-]+/).map(cleanWord);
    return rWords.some(w => w === 'paneer' || w === 'chhena');
  }

  // 8. Toor Dal
  if (pNorm === 'toor dal' || pNorm === 'arhar dal' || pNorm === 'kandi pappu' || pNorm === 'dal') {
    const rWords = rNorm.split(/[\s,()\/&+-]+/).map(cleanWord);
    return rWords.some(w => w === 'toor' || w === 'kandi' || w === 'arhar' || (w === 'dal' && (rNorm.includes('toor') || rNorm.includes('arhar') || rNorm.includes('sambar') || rNorm.includes('kandi'))));
  }

  // 9. Tomato
  if (pNorm === 'tomato' || pNorm === 'tomatoes' || pNorm === 'tamatar') {
    const rWords = rNorm.split(/[\s,()\/&+-]+/).map(cleanWord);
    return rWords.some(w => w === 'tomato' || w === 'tamatar' || w === 'thakkali');
  }

  // 10. Onion
  if (pNorm === 'onion' || pNorm === 'onions' || pNorm === 'pyaz') {
    const rWords = rNorm.split(/[\s,()\/&+-]+/).map(cleanWord);
    return rWords.some(w => w === 'onion' || w === 'pyaz' || w === 'shallot' || w === 'vengayam' || w === 'ullipaya');
  }

  // 11. Ghee
  if (pNorm === 'ghee' || pNorm === 'pure cow ghee' || pNorm === 'desi ghee') {
    const rWords = rNorm.split(/[\s,()\/&+-]+/).map(cleanWord);
    return rWords.some(w => w === 'ghee' || w === 'neyyi');
  }

  // 12. Curry Leaves
  if (pNorm.includes('curry leaves') || pNorm.includes('curry leaf') || pNorm.includes('kadi patta')) {
    return rNorm.includes('curry leaf') || rNorm.includes('curry leaves') || rNorm.includes('kadi patta') || rNorm.includes('karivepaku');
  }

  // 13. Ginger
  if (pNorm === 'ginger' || pNorm === 'adrak' || pNorm === 'allam') {
    return rNorm.includes('ginger') || rNorm.includes('adrak') || rNorm.includes('allam');
  }

  // 14. Garlic
  if (pNorm === 'garlic' || pNorm === 'lahsun' || pNorm === 'vellulli') {
    return rNorm.includes('garlic') || rNorm.includes('lahsun') || rNorm.includes('vellulli');
  }

  // General fallback
  const stopWords = new Set(['fresh','pure','cooked','leftover','raw','cow','desi','warm','cold','hot','dry','fine','chopped','boiled','cut','pieces','powder','seeds','paste']);
  const pWords = pNorm.split(/[\s,()\/&+-]+/).map(cleanWord).filter(w => !stopWords.has(w) && w.length > 2);
  const rWords = rNorm.split(/[\s,()\/&+-]+/).map(cleanWord).filter(w => !stopWords.has(w) && w.length > 2);

  if (pWords.length === 0) {
    const directP = pNorm.split(/\s+/).map(cleanWord).filter(w => w.length > 1);
    return directP.some(pw => rWords.some(rw => rw === pw));
  }

  return pWords.some(pw => rWords.some(rw => rw === pw));
}

function calculateMatch(recipe) {
  const ings = recipe.ingredients || [];
  if (selectedPantry.size === 0 || ings.length === 0) {
    return {
      percent: 0,
      userMatchedCount: 0,
      matchedItems: [],
      matchedRecipeIngs: [],
      missing: ings
    };
  }

  const userItems = Array.from(selectedPantry);
  const matchedPantryItems = [];
  const matchedRecipeIngs = [];
  const missingRecipeIngs = [];

  ings.forEach(ing => {
    const ingName = typeof ing === 'string' ? ing : (ing.name || ing.raw_name || '');
    let matchedUserItem = null;
    for (const u of userItems) {
      if (ingredientMatches(ingName, u)) {
        matchedUserItem = u;
        break;
      }
    }
    if (matchedUserItem) {
      matchedRecipeIngs.push(ing);
      if (!matchedPantryItems.includes(matchedUserItem)) {
        matchedPantryItems.push(matchedUserItem);
      }
    } else {
      missingRecipeIngs.push(ing);
    }
  });

  const percent = Math.round((matchedRecipeIngs.length / ings.length) * 100);
  return {
    percent,
    userMatchedCount: matchedPantryItems.length,
    matchedItems: matchedPantryItems,
    matchedRecipeIngs,
    missing: missingRecipeIngs
  };
}

function recalculateLoadedMatches() {
  if (!loadedRecipes || loadedRecipes.length === 0) return;
  loadedRecipes.forEach(r => {
    r.matchInfo = calculateMatch(r);
  });
  renderDishesCards(loadedRecipes, totalRecipeCount);
}

// ==========================================================================
// DJANGO REST API RECIPE FETCHER & DISH CARD RENDERING
// ==========================================================================
let currentApiAbortController = null;

function renderDishesSkeleton() {
  if (!dishesGrid) return;
  let skeletonHtml = "";
  for (let i = 0; i < 6; i++) {
    skeletonHtml += `
      <div class="dishes-skeleton-card">
        <div class="skeleton-shimmer" style="width: 100%; height: 210px;"></div>
        <div style="padding: 18px 16px; flex: 1; display: flex; flex-direction: column; gap: 10px;">
          <div class="skeleton-shimmer" style="width: 35%; height: 14px; border-radius: 4px;"></div>
          <div class="skeleton-shimmer" style="width: 75%; height: 20px; border-radius: 6px;"></div>
          <div class="skeleton-shimmer" style="width: 50%; height: 14px; border-radius: 4px;"></div>
          <div class="skeleton-shimmer" style="width: 100%; height: 38px; border-radius: 6px; margin-top: auto;"></div>
        </div>
      </div>
    `;
  }
  dishesGrid.innerHTML = skeletonHtml;
}

function loadRecipesFromAPI(page = 1) {
  currentPage = page;

  if (typeof fetch === "undefined") return;

  if (typeof AbortController !== "undefined") {
    if (currentApiAbortController) {
      currentApiAbortController.abort();
    }
    currentApiAbortController = new AbortController();
  }

  renderDishesSkeleton();

  const params = new URLSearchParams();
  if (currentMainSection && currentMainSection !== "all") {
    params.set("category", currentMainSection);
  }
  if (currentSubCategory && currentSubCategory !== "all") {
    params.set("subcategory", currentSubCategory);
  }
  if (searchQuery) {
    params.set("search", searchQuery);
  }
  if (quickFilterVegOnly) {
    params.set("veg", "true");
  } else if (quickFilterNonVegOnly) {
    params.set("veg", "false");
  }
  if (quickFilterFast) {
    params.set("max_time", "20");
  }
  if (currentSort === "time") {
    params.set("sort", "time");
  } else if (currentSort === "name") {
    params.set("sort", "name");
  }
  params.set("page", page);
  params.set("page_size", "24");

  fetch('/api/v1/recipes/?' + params.toString(), {
    signal: currentApiAbortController.signal
  })
  .then(res => {
    if (!res.ok) throw new Error("HTTP error " + res.status);
    return res.json();
  })
  .then(data => {
    const rawList = Array.isArray(data) ? data : (data.results || []);
    totalRecipeCount = data.count !== undefined ? data.count : rawList.length;

    loadedRecipes = rawList.map(r => ({
      ...r,
      id: r.recipe_uid,
      prepTime: r.prep_time,
      subCategory: r.subcategory,
      ingredients: r.ingredients || [],
      matchInfo: calculateMatch(r)
    }));

    let displayList = loadedRecipes;
    if (quickFilterReady) {
      displayList = displayList.filter(r => r.matchInfo.percent === 100);
    }

    if (currentSort === "match" && selectedPantry.size > 0) {
      displayList.sort((a, b) => {
        if (b.matchInfo.userMatchedCount !== a.matchInfo.userMatchedCount) {
          return b.matchInfo.userMatchedCount - a.matchInfo.userMatchedCount;
        }
        return b.matchInfo.percent - a.matchInfo.percent;
      });
    }

    renderDishesCards(displayList, totalRecipeCount);
    renderPagination(totalRecipeCount, currentPage, 24);
  })
  .catch(err => {
    if (err.name === 'AbortError') return;
    console.error("Recipe load error:", err);
    if (!dishesGrid) return;
    dishesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: #fff; border-radius: 16px; border: 1px solid var(--bg-sand-border);">
        <p style="font-size: 28px; margin-bottom: 8px;">⚠️</p>
        <h4 style="font-size: 16px; font-weight: 700; color: var(--text-dark);">Unable to load recipes</h4>
        <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">Please check your connection or restart the server.</p>
        <button onclick="loadRecipesFromAPI(1)" style="margin-top: 14px; background: var(--farm-green); color: #fff; padding: 8px 18px; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; border: none;">
          Try Again
        </button>
      </div>
    `;
  });
}

function renderDishesCards(list, totalCount) {
  if (!dishesGrid) return;

  // Update Notice
  if (recipeCounterNotice) {
    if (isPantryFilterActive) {
      const activeList = Array.from(selectedPantry).map(escapeHtml).join(", ");
      recipeCounterNotice.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; width: 100%;">
          <span style="color: var(--farm-green); font-size: 14px;">
            🥘 Found <strong>${list.length}</strong> recipes matching your kitchen (<em>${activeList}</em>) — sorted by best match
          </span>
          <button onclick="exitPantryFilter()" style="background: var(--bg-sand); border: 1.5px solid var(--farm-green); color: var(--farm-green); border-radius: 20px; padding: 4px 12px; font-size: 12px; font-weight: 700; cursor: pointer;">
            Show All Recipes ✕
          </button>
        </div>
      `;
    } else if (searchQuery) {
      recipeCounterNotice.innerHTML = `Found <strong>${totalCount}</strong> authentic dish${totalCount === 1 ? '' : 'es'} matching "<em>${escapeHtml(searchQuery)}</em>" across all categories`;
    } else {
      let sectionName = "breakfast & tiffin";
      if (currentMainSection === "rice") sectionName = "biryani & rice";
      else if (currentMainSection === "streetfood") sectionName = "street food & chaat";
      else if (currentMainSection === "curries") sectionName = "curry & gravy";
      else if (currentMainSection === "snacks") sectionName = "snack, starter & tikka";
      else if (currentMainSection === "breads") sectionName = "bread, roti & paratha";
      else if (currentMainSection === "sweets") sectionName = "sweet & mithai";
      else if (currentMainSection === "chutneys") sectionName = "pachallu, chutney & pickle";
      else if (currentMainSection === "soups_drinks") sectionName = "soup, rasam & cooler";
      else if (currentMainSection === "sides_eggs_seafood") sectionName = "salad, egg & coastal seafood";
      else sectionName = "Indian homestyle";

      recipeCounterNotice.textContent = `Showing authentic ${sectionName} recipes (${totalCount} total in database)`;
    }
  }

  if (list.length === 0) {
    dishesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: #fff; border-radius: 16px; border: 1px solid var(--bg-sand-border);">
        <p style="font-size: 28px; margin-bottom: 8px;">🍽️</p>
        <h4 style="font-size: 16px; font-weight: 700; color: var(--text-dark);">No matching dishes found</h4>
        <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">Try selecting other pantry ingredients or clearing your search filter.</p>
        <button onclick="resetAllFiltersAndReload()" style="margin-top: 14px; background: var(--farm-green); color: #fff; padding: 8px 18px; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; border: none;">
          Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  dishesGrid.innerHTML = list.map(recipe => {
    const matchInfo = recipe.matchInfo || { percent: 0, missing: [], userMatchedCount: 0, matchedItems: [] };
    const { percent, missing, userMatchedCount, matchedItems } = matchInfo;

    // Subcategory label
    const catLabel = (recipe.subcategory || recipe.category_name || "HOMESTYLE").toUpperCase().replace(/[-_]/g, ' ') + " SPECIAL";

    // Match label
    let matchLabelHtml = "";
    if (percent === 100) {
      matchLabelHtml = `<span class="match-label-ready">🎉 100% Ready (Have all items)</span>`;
    } else if (userMatchedCount > 0) {
      matchLabelHtml = `<span class="match-label-partial"><strong>${userMatchedCount} pantry item${userMatchedCount === 1 ? '' : 's'} match</strong> • ${percent}% total</span>`;
    } else {
      matchLabelHtml = `<span class="match-label-none">⏱ ${recipe.prepTime || recipe.prep_time} mins prep</span>`;
    }

    let matchedChipHtml = "";
    if (userMatchedCount > 0 && matchedItems.length > 0) {
      matchedChipHtml = `<span class="variant-chip matched-chip">✓ Uses: ${escapeHtml(matchedItems.join(", "))}</span>`;
    }

    const imgUrl = recipe.image || "/static/images/dishes/traditional-rice.jpg";
    const recipeUid = recipe.recipe_uid || recipe.id;

    return `
      <article class="dish-card">
        <div class="card-main-content">
          <div class="dish-details">
            <div class="dish-meta-pills">
              <span class="${recipe.veg ? 'veg-indicator' : 'veg-indicator nonveg'}"><span class="circle"></span></span>
              <span class="dish-sub-category">${escapeHtml(catLabel)}</span>
            </div>

            <h3 class="dish-name" onclick="openRecipe('${recipeUid}')">${escapeHtml(recipe.name)}</h3>

            <div class="dish-meta-pills">
              <span class="rating-badge">★ 4.9</span>
              <span class="time-pill">⏱ ${recipe.prepTime || recipe.prep_time} mins</span>
              <span class="time-pill">•</span>
              <span class="time-pill">👥 Serves ${recipe.servings}</span>
            </div>

            <p class="dish-description">${escapeHtml(recipe.description || '')}</p>

            <div class="dish-variant-chips">
              <span class="variant-chip">${recipe.veg ? 'Pure Veg' : 'Non-Veg'}</span>
              <span class="variant-chip">${(recipe.prepTime || recipe.prep_time) <= 20 ? '⚡ Quick' : 'Simmered'}</span>
              ${matchedChipHtml}
            </div>
          </div>

          <div class="dish-media-box">
            <div class="dish-img-wrap">
              <img src="${imgUrl}" alt="${escapeHtml(recipe.name)}" loading="lazy" onerror="this.onerror=null; this.src='/static/images/dishes/traditional-rice.jpg'">
            </div>
            <button class="cook-recipe-btn" onclick="openRecipe('${recipeUid}')">
              COOK
            </button>
          </div>
        </div>

        <div class="dish-card-footer">
          <div>${matchLabelHtml}</div>
          <div style="color: var(--farm-green); font-weight: 700; cursor: pointer;" onclick="openRecipe('${recipeUid}')">
            View Recipe →
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderPagination(totalCount, currentPage, pageSize) {
  if (!recipesPagination) return;
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages <= 1) {
    recipesPagination.style.display = "none";
    return;
  }

  recipesPagination.style.display = "flex";
  let html = "";

  // Prev Button
  html += `
    <button class="recipes-pagination-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="loadRecipesFromAPI(${currentPage - 1})">
      ← Prev
    </button>
  `;

  // Page Numbers (sliding window)
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  if (startPage > 1) {
    html += `<button class="recipes-pagination-btn" onclick="loadRecipesFromAPI(1)">1</button>`;
    if (startPage > 2) html += `<span style="padding: 0 4px; color: var(--text-muted);">...</span>`;
  }

  for (let p = startPage; p <= endPage; p++) {
    html += `
      <button class="recipes-pagination-btn ${p === currentPage ? 'active' : ''}" onclick="loadRecipesFromAPI(${p})">
        ${p}
      </button>
    `;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) html += `<span style="padding: 0 4px; color: var(--text-muted);">...</span>`;
    html += `<button class="recipes-pagination-btn" onclick="loadRecipesFromAPI(${totalPages})">${totalPages}</button>`;
  }

  // Next Button
  html += `
    <button class="recipes-pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="loadRecipesFromAPI(${currentPage + 1})">
      Next →
    </button>
  `;

  recipesPagination.innerHTML = html;
}

function resetAllFiltersAndReload() {
  selectedPantry.clear();
  isPantryFilterActive = false;
  searchQuery = "";
  const searchInput = document.getElementById("recipeSearch");
  if (searchInput) searchInput.value = "";
  quickFilterFast = false;
  quickFilterReady = false;
  quickFilterVegOnly = false;
  quickFilterNonVegOnly = false;
  currentMainSection = "breakfast";
  currentSubCategory = "all";
  currentPage = 1;

  // Reset story circles
  document.querySelectorAll(".story-circle-item").forEach(s => s.classList.remove("active"));
  const def = document.getElementById("story-all-breakfast");
  if (def) def.classList.add("active");

  renderFilterPills();
  renderPantryChips();
  updatePantryCounters();
  loadRecipesFromAPI(1);
}

// ==========================================================================
// REAL-TIME AUTOCOMPLETE & SEARCH ENGINE (Problem B & C)
// ==========================================================================
let autocompleteTimeout = null;
let activeAutocompleteIndex = -1;

function onSearchInput(val) {
  const clearBtn = document.getElementById("searchActionBtn");
  if (clearBtn) {
    clearBtn.classList.toggle("show", val.trim().length > 0);
  }

  const query = val.trim();
  if (!query) {
    hideAutocomplete();
    if (searchQuery) {
      searchQuery = "";
      loadRecipesFromAPI(1);
    }
    return;
  }

  if (autocompleteTimeout) clearTimeout(autocompleteTimeout);
  autocompleteTimeout = setTimeout(() => {
    fetchAutocompleteSuggestions(query);
  }, 200);
}

function onSearchFocus() {
  const input = document.getElementById("recipeSearch");
  if (input && input.value.trim().length >= 1) {
    fetchAutocompleteSuggestions(input.value.trim());
  }
}

function fetchAutocompleteSuggestions(q) {
  const dropdown = document.getElementById("searchAutocompleteDropdown");
  if (!dropdown) return;

  fetch('/api/v1/recipes/autocomplete/?q=' + encodeURIComponent(q))
    .then(res => res.json())
    .then(items => {
      activeAutocompleteIndex = -1;
      if (!items || items.length === 0) {
        dropdown.innerHTML = `
          <div class="search-autocomplete-empty">
            <p style="font-size: 24px; margin-bottom: 6px;">🍽️</p>
            No matching dishes found for "<strong>${escapeHtml(q)}</strong>"
          </div>
        `;
        dropdown.style.display = "block";
        return;
      }

      const qRegex = new RegExp(`(${escapeRegex(q)})`, 'gi');
      dropdown.innerHTML = `
        <div class="search-autocomplete-header">Dish Suggestions (${items.length})</div>
        ${items.map((it, idx) => {
          const highlightedName = escapeHtml(it.name).replace(qRegex, '<mark>$1</mark>');
          return `
            <div class="search-autocomplete-item" id="autoItem-${idx}" onclick="selectAutocompleteSuggestion('${it.recipe_uid}')">
              <img src="${it.image}" alt="${escapeHtml(it.name)}" onerror="this.onerror=null; this.src='/static/images/dishes/traditional-rice.jpg'">
              <div class="item-info">
                <div class="item-title">${highlightedName}</div>
                <div class="item-meta">
                  <span>${it.veg ? '🟢 Veg' : '🔴 Non-Veg'}</span>
                  <span>•</span>
                  <span>${escapeHtml(it.category_name)}</span>
                  <span>•</span>
                  <span>⏱ ${it.prep_time}m</span>
                </div>
              </div>
              <span style="font-size: 13px; color: var(--farm-green); font-weight: 700;">View →</span>
            </div>
          `;
        }).join("")}
        <div class="search-autocomplete-footer" onclick="executeSearch(document.getElementById('recipeSearch').value)">
          🔍 View all matching results for "${escapeHtml(q)}" →
        </div>
      `;
      dropdown.style.display = "block";
    })
    .catch(() => {
      dropdown.style.display = "none";
    });
}

function hideAutocomplete() {
  const dropdown = document.getElementById("searchAutocompleteDropdown");
  if (dropdown) dropdown.style.display = "none";
  activeAutocompleteIndex = -1;
}

function selectAutocompleteSuggestion(recipe_uid) {
  hideAutocomplete();
  openRecipe(recipe_uid);
}

function executeSearch(query) {
  hideAutocomplete();
  searchQuery = (query || "").trim();
  const input = document.getElementById("recipeSearch");
  if (input) input.value = searchQuery;

  const clearBtn = document.getElementById("searchActionBtn");
  if (clearBtn) clearBtn.classList.toggle("show", searchQuery.length > 0);

  currentMainSection = "all";
  currentSubCategory = "all";
  currentPage = 1;

  document.querySelectorAll(".story-circle-item").forEach(s => s.classList.remove("active"));

  renderFilterPills();
  loadRecipesFromAPI(1);
}

function onSearchSubmitClick() {
  const input = document.getElementById("recipeSearch");
  if (input) {
    executeSearch(input.value);
  }
}

function onSearchActionClick() {
  const input = document.getElementById("recipeSearch");
  if (input) input.value = "";
  hideAutocomplete();
  const clearBtn = document.getElementById("searchActionBtn");
  if (clearBtn) clearBtn.classList.remove("show");
  searchQuery = "";
  currentPage = 1;
  loadRecipesFromAPI(1);
  if (input) input.focus();
}

function onSearchKeydown(e) {
  const dropdown = document.getElementById("searchAutocompleteDropdown");
  const isDropdownOpen = dropdown && dropdown.style.display === "block";

  if (e.key === "Enter") {
    e.preventDefault();
    if (isDropdownOpen && activeAutocompleteIndex >= 0) {
      const activeEl = document.getElementById(`autoItem-${activeAutocompleteIndex}`);
      if (activeEl) {
        activeEl.click();
        return;
      }
    }
    executeSearch(e.target.value);
  } else if (e.key === "ArrowDown" && isDropdownOpen) {
    e.preventDefault();
    const items = dropdown.querySelectorAll(".search-autocomplete-item");
    if (items.length > 0) {
      activeAutocompleteIndex = (activeAutocompleteIndex + 1) % items.length;
      updateAutocompleteActiveItem(items);
    }
  } else if (e.key === "ArrowUp" && isDropdownOpen) {
    e.preventDefault();
    const items = dropdown.querySelectorAll(".search-autocomplete-item");
    if (items.length > 0) {
      activeAutocompleteIndex = (activeAutocompleteIndex - 1 + items.length) % items.length;
      updateAutocompleteActiveItem(items);
    }
  } else if (e.key === "Escape") {
    hideAutocomplete();
  }
}

function updateAutocompleteActiveItem(items) {
  items.forEach((it, idx) => {
    it.classList.toggle("active-item", idx === activeAutocompleteIndex);
  });
}

// Click outside to dismiss autocomplete
document.addEventListener("click", (e) => {
  const wrap = document.getElementById("searchBarWrap");
  if (wrap && !wrap.contains(e.target)) {
    hideAutocomplete();
  }
});

// Dual Mode Search toggle
let searchMode = "dishes";
function toggleSearchMode() {
  if (searchMode === "dishes") {
    searchMode = "ingredients";
    document.getElementById("searchModeIcon").textContent = "🥕";
    document.getElementById("searchModeLabel").textContent = "Ingredients";
  } else {
    searchMode = "dishes";
    document.getElementById("searchModeIcon").textContent = "🍽️";
    document.getElementById("searchModeLabel").textContent = "Dishes";
  }

  const input = document.getElementById("recipeSearch");
  if (input && input.value.trim().length > 0) {
    executeSearch(input.value);
  }
}

// ==========================================================================
// CATEGORY NAVIGATION & SUBCATEGORY FILTER PILLS (Problem D)
// ==========================================================================
function filterByStory(section, category, itemEl) {
  isPantryFilterActive = false;
  searchQuery = "";
  const input = document.getElementById("recipeSearch");
  if (input) input.value = "";
  hideAutocomplete();
  const clearBtn = document.getElementById("searchActionBtn");
  if (clearBtn) clearBtn.classList.remove("show");

  currentMainSection = section;
  currentSubCategory = category || "all";
  currentPage = 1;

  document.querySelectorAll(".story-circle-item").forEach(s => s.classList.remove("active"));
  if (itemEl) itemEl.classList.add("active");

  renderFilterPills();
  loadRecipesFromAPI(1);
}

function switchMainSection(section, navBtn) {
  isPantryFilterActive = false;
  searchQuery = "";
  const searchInput = document.getElementById("recipeSearch");
  if (searchInput) searchInput.value = "";
  hideAutocomplete();

  currentMainSection = section;
  currentSubCategory = "all";
  currentPage = 1;

  document.querySelectorAll(".story-circle-item").forEach(s => s.classList.remove("active"));
  if (section !== "all") {
    const defaultStory = document.getElementById("story-all-" + section.replace(/_/g, "-"));
    if (defaultStory) defaultStory.classList.add("active");
  }

  renderFilterPills();
  loadRecipesFromAPI(1);
}

function setSubCategory(cat, btn) {
  currentSubCategory = cat;
  currentPage = 1;
  document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
  if (btn) btn.classList.add("active");
  loadRecipesFromAPI(1);
}

function toggleQuickFilter(type, btn) {
  if (type === "fast") {
    quickFilterFast = !quickFilterFast;
    btn.classList.toggle("active", quickFilterFast);
  } else if (type === "ready") {
    quickFilterReady = !quickFilterReady;
    btn.classList.toggle("active", quickFilterReady);
  } else if (type === "veg") {
    quickFilterVegOnly = !quickFilterVegOnly;
    if (quickFilterVegOnly) quickFilterNonVegOnly = false;
    renderFilterPills();
  } else if (type === "nonveg") {
    quickFilterNonVegOnly = !quickFilterNonVegOnly;
    if (quickFilterNonVegOnly) quickFilterVegOnly = false;
    renderFilterPills();
  }
  loadRecipesFromAPI(1);
}

function handleSort(val) {
  currentSort = val;
  loadRecipesFromAPI(1);
}

function renderFilterPills() {
  if (!filtersBar) return;

  if (currentMainSection === "breakfast") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Breakfast</span> <span class="filter-tag-count">30</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'idli' ? 'active' : ''}" onclick="setSubCategory('idli', this)">
        <span>Idli Varieties</span> <span class="filter-tag-count">6</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'dosa' ? 'active' : ''}" onclick="setSubCategory('dosa', this)">
        <span>Dosa Specials</span> <span class="filter-tag-count">9</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'other' ? 'active' : ''}" onclick="setSubCategory('other', this)">
        <span>Tiffins & Parathas</span> <span class="filter-tag-count">15</span>
      </button>
      <button class="filter-pill ${quickFilterFast ? 'active' : ''}" onclick="toggleQuickFilter('fast', this)">
        <span>⚡ Under 20 mins</span>
      </button>
      <button class="filter-pill ${quickFilterReady ? 'active' : ''}" onclick="toggleQuickFilter('ready', this)">
        <span>✨ 100% Ready</span>
      </button>
    `;
  } else if (currentMainSection === "rice") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Rice Dishes</span> <span class="filter-tag-count">77</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'biryani' ? 'active' : ''}" onclick="setSubCategory('biryani', this)">
        <span>Biryanis</span> <span class="filter-tag-count">36</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'traditional-rice' ? 'active' : ''}" onclick="setSubCategory('traditional-rice', this)">
        <span>Traditional Rice</span> <span class="filter-tag-count">17</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'fried-rice' ? 'active' : ''}" onclick="setSubCategory('fried-rice', this)">
        <span>Fried Rice</span> <span class="filter-tag-count">8</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'pulao' ? 'active' : ''}" onclick="setSubCategory('pulao', this)">
        <span>Pulao & Khichdi</span> <span class="filter-tag-count">16</span>
      </button>
      <button class="filter-pill ${quickFilterVegOnly ? 'active' : ''}" onclick="toggleQuickFilter('veg', this)">
        <span>🟢 Pure Veg</span>
      </button>
      <button class="filter-pill ${quickFilterNonVegOnly ? 'active' : ''}" onclick="toggleQuickFilter('nonveg', this)">
        <span>🔴 Non-Veg</span>
      </button>
    `;
  } else if (currentMainSection === "streetfood") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Street Food</span> <span class="filter-tag-count">65</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'chaat-streetfood' ? 'active' : ''}" onclick="setSubCategory('chaat-streetfood', this)">
        <span>Chaat Specials</span> <span class="filter-tag-count">15</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'rolls' ? 'active' : ''}" onclick="setSubCategory('rolls', this)">
        <span>Kathi Rolls</span> <span class="filter-tag-count">11</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'burgers-sandwiches' ? 'active' : ''}" onclick="setSubCategory('burgers-sandwiches', this)">
        <span>Sandwiches & Burgers</span> <span class="filter-tag-count">10</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'fast-food' ? 'active' : ''}" onclick="setSubCategory('fast-food', this)">
        <span>Crispy Fast Food</span> <span class="filter-tag-count">15</span>
      </button>
      <button class="filter-pill ${quickFilterVegOnly ? 'active' : ''}" onclick="toggleQuickFilter('veg', this)">
        <span>🟢 Pure Veg</span>
      </button>
      <button class="filter-pill ${quickFilterNonVegOnly ? 'active' : ''}" onclick="toggleQuickFilter('nonveg', this)">
        <span>🔴 Non-Veg</span>
      </button>
    `;
  } else if (currentMainSection === "curries") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Curries</span> <span class="filter-tag-count">60</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'chicken-curry' ? 'active' : ''}" onclick="setSubCategory('chicken-curry', this)">
        <span>Chicken Curries</span> <span class="filter-tag-count">14</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'mutton-curry' ? 'active' : ''}" onclick="setSubCategory('mutton-curry', this)">
        <span>Royal Mutton</span> <span class="filter-tag-count">10</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'veg-paneer-curry' ? 'active' : ''}" onclick="setSubCategory('veg-paneer-curry', this)">
        <span>Paneer & Veg</span> <span class="filter-tag-count">16</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'dal-south-curry' ? 'active' : ''}" onclick="setSubCategory('dal-south-curry', this)">
        <span>Dal & Sambars</span> <span class="filter-tag-count">10</span>
      </button>
    `;
  } else if (currentMainSection === "snacks") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Snacks</span> <span class="filter-tag-count">50</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'tikkas-kebabs' ? 'active' : ''}" onclick="setSubCategory('tikkas-kebabs', this)">
        <span>Tikkas & Kebabs</span> <span class="filter-tag-count">12</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'pakoras-fritters' ? 'active' : ''}" onclick="setSubCategory('pakoras-fritters', this)">
        <span>Crispy Pakoras</span> <span class="filter-tag-count">12</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'cutlets-vadas' ? 'active' : ''}" onclick="setSubCategory('cutlets-vadas', this)">
        <span>Cutlets & Vadas</span> <span class="filter-tag-count">10</span>
      </button>
    `;
  } else if (currentMainSection === "breads") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Breads</span> <span class="filter-tag-count">35</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'naan' ? 'active' : ''}" onclick="setSubCategory('naan', this)">
        <span>Naans</span> <span class="filter-tag-count">5</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'roti' ? 'active' : ''}" onclick="setSubCategory('roti', this)">
        <span>Rotis</span> <span class="filter-tag-count">9</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'paratha' ? 'active' : ''}" onclick="setSubCategory('paratha', this)">
        <span>Parathas</span> <span class="filter-tag-count">11</span>
      </button>
    `;
  } else if (currentMainSection === "sweets") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Sweets</span> <span class="filter-tag-count">45</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'halwa' ? 'active' : ''}" onclick="setSubCategory('halwa', this)">
        <span>Halwas</span> <span class="filter-tag-count">8</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'ladoo' ? 'active' : ''}" onclick="setSubCategory('ladoo', this)">
        <span>Ladoos</span> <span class="filter-tag-count">10</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'kheer' ? 'active' : ''}" onclick="setSubCategory('kheer', this)">
        <span>Kheer</span> <span class="filter-tag-count">8</span>
      </button>
    `;
  } else if (currentMainSection === "chutneys") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Pachallu & Pickles</span> <span class="filter-tag-count">40</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'pachadi' ? 'active' : ''}" onclick="setSubCategory('pachadi', this)">
        <span>Andhra Pachallu</span> <span class="filter-tag-count">12</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'tiffin-chutney' ? 'active' : ''}" onclick="setSubCategory('tiffin-chutney', this)">
        <span>Tiffin Chutneys</span> <span class="filter-tag-count">10</span>
      </button>
    `;
  } else if (currentMainSection === "soups_drinks") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Soups & Coolers</span> <span class="filter-tag-count">50</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'soup' ? 'active' : ''}" onclick="setSubCategory('soup', this)">
        <span>Rasams & Shorbas</span> <span class="filter-tag-count">25</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'drink' ? 'active' : ''}" onclick="setSubCategory('drink', this)">
        <span>Chai & Coolers</span> <span class="filter-tag-count">25</span>
      </button>
    `;
  } else if (currentMainSection === "sides_eggs_seafood") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Specials</span> <span class="filter-tag-count">60</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'egg' ? 'active' : ''}" onclick="setSubCategory('egg', this)">
        <span>Egg Dishes</span> <span class="filter-tag-count">18</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'seafood' ? 'active' : ''}" onclick="setSubCategory('seafood', this)">
        <span>Coastal Seafood</span> <span class="filter-tag-count">22</span>
      </button>
    `;
  } else {
    // Global Explore All view
    filtersBar.innerHTML = `
      <button class="filter-pill active" onclick="setSubCategory('all', this)">
        <span>All 512 Recipes</span>
      </button>
      <button class="filter-pill ${quickFilterVegOnly ? 'active' : ''}" onclick="toggleQuickFilter('veg', this)">
        <span>🟢 Pure Veg</span>
      </button>
      <button class="filter-pill ${quickFilterNonVegOnly ? 'active' : ''}" onclick="toggleQuickFilter('nonveg', this)">
        <span>🔴 Non-Veg</span>
      </button>
      <button class="filter-pill ${quickFilterFast ? 'active' : ''}" onclick="toggleQuickFilter('fast', this)">
        <span>⚡ Under 20 mins</span>
      </button>
    `;
  }
}

// ==========================================================================
// RECIPE DETAIL MODAL & COOKING TIMER (Problem A & E)
// ==========================================================================
function openRecipe(id) {
  const cached = loadedRecipes.find(r => r.id === id || r.recipe_uid === id);
  if (cached && cached.instructions && cached.instructions.length > 0) {
    populateRecipeModal(cached);
    return;
  }

  fetch('/api/v1/recipes/' + encodeURIComponent(id) + '/')
    .then(res => {
      if (!res.ok) throw new Error("Recipe not found");
      return res.json();
    })
    .then(data => {
      const recipe = {
        ...data,
        id: data.recipe_uid,
        prepTime: data.prep_time,
        subCategory: data.subcategory,
        ingredients: data.ingredients || [],
        steps: data.instructions ? data.instructions.map(i => i.instruction) : []
      };
      populateRecipeModal(recipe);
    })
    .catch(err => {
      console.error("Failed to load recipe detail:", err);
      if (cached) {
        populateRecipeModal(cached);
      }
    });
}

function populateRecipeModal(recipe) {
  activeRecipe = recipe;
  currentServingsFactor = 1;

  const titleEl = document.getElementById("modalTitle");
  if (titleEl) titleEl.textContent = recipe.name;

  const descEl = document.getElementById("modalDesc");
  if (descEl) descEl.textContent = recipe.description || "";

  const timeEl = document.getElementById("modalTime");
  if (timeEl) timeEl.textContent = `${recipe.prepTime || recipe.prep_time} mins`;

  const subCatEl = document.getElementById("modalSubcategory");
  if (subCatEl) subCatEl.textContent = ((recipe.subCategory || recipe.subcategory || "").toUpperCase()) + " SPECIAL";

  const modalImg = document.getElementById("modalRecipeImg");
  if (modalImg) {
    modalImg.src = recipe.image || "/static/images/dishes/traditional-rice.jpg";
    modalImg.alt = recipe.name;
  }

  const modalVeg = document.getElementById("modalVegIndicator");
  if (modalVeg) {
    modalVeg.className = recipe.veg ? "veg-indicator" : "veg-indicator nonveg";
  }

  const servingsValEl = document.getElementById("modalServingsVal");
  if (servingsValEl) {
    servingsValEl.textContent = recipe.servings || 2;
  }
  document.querySelectorAll(".stepper-btn").forEach(b => b.classList.remove("active"));
  const btn1x = document.getElementById("stepper1x");
  if (btn1x) btn1x.classList.add("active");

  const match = calculateMatch(recipe);
  const matchEl = document.getElementById("modalMatch");
  if (matchEl) {
    if (match.percent === 100) {
      matchEl.textContent = "100% Ready";
      matchEl.style.color = "#0F8A43";
    } else if (match.percent > 0) {
      matchEl.textContent = `${match.percent}% Match`;
      matchEl.style.color = "#C97808";
    } else {
      matchEl.textContent = "Need Items";
      matchEl.style.color = "#6B5E55";
    }
  }

  renderModalChecklist();

  const stepsEl = document.getElementById("modalStepsList");
  if (stepsEl) {
    const stepList = recipe.steps || (recipe.instructions ? recipe.instructions.map(i => i.instruction) : []);
    stepsEl.innerHTML = stepList.map(s => `
      <li class="cooking-step" onclick="toggleStepCompleted(this)" title="Tap to mark step done">
        <span>${escapeHtml(s)}</span>
      </li>
    `).join("");
  }

  setupTimer((recipe.prepTime || recipe.prep_time || 15) * 60);
  updateModalFavoriteButton();

  if (recipeModal) recipeModal.classList.add("active");
}

function toggleStepCompleted(el) {
  if (el) el.classList.toggle("completed-step");
}

function renderModalChecklist() {
  const listEl = document.getElementById("modalIngredientsList");
  if (!listEl || !activeRecipe) return;

  const ings = activeRecipe.ingredients || [];
  listEl.innerHTML = ings.map(ing => {
    const rawName = typeof ing === 'string' ? ing : (ing.raw_name || ing.name || '');
    const amount = typeof ing === 'string' ? '' : (ing.amount || '');

    let hasIt = false;
    for (const u of selectedPantry) {
      if (ingredientMatches(rawName, u)) {
        hasIt = true;
        break;
      }
    }

    const scaledAmountStr = scaleAmount(amount, currentServingsFactor);

    return `
      <li class="${hasIt ? 'present' : 'absent'}">
        <span>• <strong>${escapeHtml(rawName)}</strong> ${scaledAmountStr ? `<span style="color:#7D7065;">(${escapeHtml(scaledAmountStr)})</span>` : ''}</span>
        <span class="ing-badge">${hasIt ? 'In Pantry ✓' : 'Needed'}</span>
      </li>
    `;
  }).join("");
}

function closeModal() {
  if (recipeModal) recipeModal.classList.remove("active");
  stopTimer();
}

function setServings(factor, btn) {
  if (typeof factor !== 'number' || factor <= 0 || isNaN(factor)) factor = 1;
  currentServingsFactor = factor;

  document.querySelectorAll(".stepper-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  if (activeRecipe) {
    const servingsValEl = document.getElementById("modalServingsVal");
    if (servingsValEl) {
      servingsValEl.textContent = (activeRecipe.servings || 2) * currentServingsFactor;
    }
    renderModalChecklist();
  }
}

// Drift-free Timestamp-based Timer
function setupTimer(seconds) {
  stopTimer();
  timerRemainingMs = Math.max(0, (seconds || 900) * 1000);
  timerSeconds = Math.ceil(timerRemainingMs / 1000);
  updateTimerDisplay();
}

function toggleTimer() {
  if (timerRunning) {
    stopTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  if (timerRemainingMs <= 0) return;
  timerRunning = true;
  timerTargetTimestamp = Date.now() + timerRemainingMs;

  const btn = document.getElementById("timerToggleBtn");
  if (btn) btn.textContent = "Pause";

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const now = Date.now();
    const remaining = Math.max(0, timerTargetTimestamp - now);
    timerRemainingMs = remaining;
    timerSeconds = Math.ceil(remaining / 1000);
    updateTimerDisplay();

    if (remaining <= 0) {
      stopTimer();
      alert(`🔔 Kitchen Bell: Cooking time complete for ${activeRecipe ? activeRecipe.name : 'your dish'}!`);
    }
  }, 250);
}

function stopTimer() {
  if (timerRunning && timerTargetTimestamp) {
    timerRemainingMs = Math.max(0, timerTargetTimestamp - Date.now());
    timerSeconds = Math.ceil(timerRemainingMs / 1000);
  }
  timerRunning = false;
  timerTargetTimestamp = null;
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  const btn = document.getElementById("timerToggleBtn");
  if (btn) btn.textContent = "Start Timer";
}

function updateTimerDisplay() {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  const digitsEl = document.getElementById("timerDigits");
  if (digitsEl) {
    digitsEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
}

// ==========================================================================
// DJANGO REST FRAMEWORK AUTHENTICATION, FAVORITES & SHOPPING
// ==========================================================================
let currentUser = null;
let userFavoritesSet = new Set();
let pantrySyncTimeout = null;

function getCsrfToken() {
  const metaInput = document.querySelector('input[name="csrfmiddlewaretoken"]');
  if (metaInput && metaInput.value) return metaInput.value;
  const cookie = document.cookie.split('; ').find(row => row.startsWith('csrftoken='));
  return cookie ? cookie.split('=')[1] : '';
}

function fetchCurrentUser() {
  fetch('/api/v1/auth/me/')
    .then(res => res.json())
    .then(data => {
      if (data.is_authenticated && data.user) {
        currentUser = data.user;
        updateAuthNavUI();
        fetchFavorites();
        fetchUserPantry();
      } else {
        currentUser = null;
        updateAuthNavUI();
      }
    })
    .catch(() => {
      currentUser = null;
      updateAuthNavUI();
    });
}

function updateAuthNavUI() {
  const label = document.getElementById("authNavLabel");
  const icon = document.getElementById("authNavIcon");
  const userEl = document.getElementById("dropdownUsername");
  const btn = document.getElementById("authNavBtn");

  if (currentUser) {
    if (label) label.textContent = currentUser.username;
    if (icon) icon.textContent = "👤";
    if (userEl) userEl.textContent = currentUser.username;
    if (btn) btn.title = "Click to open user menu";
  } else {
    if (label) label.textContent = "Sign In";
    if (icon) icon.textContent = "👤";
    if (userEl) userEl.textContent = "User";
    if (btn) btn.title = "Sign In or Register";
  }
}

function onAuthNavClick() {
  if (currentUser) {
    const menu = document.getElementById("userDropdownMenu");
    if (menu) {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
  } else {
    openAuthModal();
  }
}

document.addEventListener("click", (e) => {
  const wrap = document.querySelector(".user-auth-wrap");
  const menu = document.getElementById("userDropdownMenu");
  if (menu && wrap && !wrap.contains(e.target)) {
    menu.style.display = "none";
  }
});

function openAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) {
    modal.classList.add("active");
    switchAuthTab('login');
    const notice = document.getElementById("authErrorNotice");
    if (notice) notice.style.display = "none";
  }
}

function closeAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.classList.remove("active");
}

function switchAuthTab(tab) {
  const tabLogin = document.getElementById("authTabLogin");
  const tabRegister = document.getElementById("authTabRegister");
  const formLogin = document.getElementById("authLoginForm");
  const formRegister = document.getElementById("authRegisterForm");
  const title = document.getElementById("authModalTitle");
  const notice = document.getElementById("authErrorNotice");
  if (notice) notice.style.display = "none";

  if (tab === 'login') {
    if (tabLogin) { tabLogin.classList.add("active"); tabLogin.style.color = "var(--farm-green)"; tabLogin.style.borderBottomColor = "var(--farm-green)"; }
    if (tabRegister) { tabRegister.classList.remove("active"); tabRegister.style.color = "var(--text-muted)"; tabRegister.style.borderBottomColor = "transparent"; }
    if (formLogin) formLogin.style.display = "block";
    if (formRegister) formRegister.style.display = "none";
    if (title) title.textContent = "Sign In to Desi Chef";
  } else {
    if (tabRegister) { tabRegister.classList.add("active"); tabRegister.style.color = "var(--farm-green)"; tabRegister.style.borderBottomColor = "var(--farm-green)"; }
    if (tabLogin) { tabLogin.classList.remove("active"); tabLogin.style.color = "var(--text-muted)"; tabLogin.style.borderBottomColor = "transparent"; }
    if (formRegister) formRegister.style.display = "block";
    if (formLogin) formLogin.style.display = "none";
    if (title) title.textContent = "Create Desi Chef Account";
  }
}

function submitLogin(e) {
  e.preventDefault();
  const u = document.getElementById("loginUsername").value.trim();
  const p = document.getElementById("loginPassword").value;
  const notice = document.getElementById("authErrorNotice");

  fetch('/api/v1/auth/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken()
    },
    body: JSON.stringify({ username: u, password: p })
  })
  .then(res => res.json().then(data => ({ status: res.status, data })))
  .then(({ status, data }) => {
    if (status === 200) {
      currentUser = data.user;
      closeAuthModal();
      updateAuthNavUI();
      fetchFavorites();
      syncLocalPantryToBackend();
    } else {
      if (notice) {
        notice.textContent = data.non_field_errors ? data.non_field_errors.join(" ") : (data.detail || "Invalid login credentials.");
        notice.style.display = "block";
      }
    }
  })
  .catch(() => {
    if (notice) {
      notice.textContent = "Connection error. Please try again.";
      notice.style.display = "block";
    }
  });
}

function submitRegister(e) {
  e.preventDefault();
  const u = document.getElementById("regUsername").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const p = document.getElementById("regPassword").value;
  const diet = document.getElementById("regDiet").value;
  const notice = document.getElementById("authErrorNotice");

  fetch('/api/v1/auth/register/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken()
    },
    body: JSON.stringify({
      username: u,
      email: email,
      password: p,
      dietary_preference: diet
    })
  })
  .then(res => res.json().then(data => ({ status: res.status, data })))
  .then(({ status, data }) => {
    if (status === 201) {
      currentUser = data.user;
      closeAuthModal();
      updateAuthNavUI();
      syncLocalPantryToBackend();
      alert("🎉 Account created successfully! Welcome to Desi Chef.");
    } else {
      if (notice) {
        const errs = Object.entries(data).map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(' ') : v}`).join(' | ');
        notice.textContent = errs || "Registration error. Please try again.";
        notice.style.display = "block";
      }
    }
  })
  .catch(() => {
    if (notice) {
      notice.textContent = "Connection error. Please try again.";
      notice.style.display = "block";
    }
  });
}

function logoutUser() {
  fetch('/api/v1/auth/logout/', {
    method: 'POST',
    headers: {
      'X-CSRFToken': getCsrfToken()
    }
  })
  .then(() => {
    currentUser = null;
    userFavoritesSet.clear();
    updateAuthNavUI();
    const menu = document.getElementById("userDropdownMenu");
    if (menu) menu.style.display = "none";
  })
  .catch(() => {});
}

function triggerPantrySync() {
  if (!currentUser) return;
  if (pantrySyncTimeout) clearTimeout(pantrySyncTimeout);
  pantrySyncTimeout = setTimeout(syncLocalPantryToBackend, 600);
}

function syncLocalPantryToBackend() {
  if (!currentUser) return;
  const items = Array.from(selectedPantry);
  fetch('/api/v1/pantry/sync_session_pantry/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken()
    },
    body: JSON.stringify({ items })
  }).catch(() => {});
}

function fetchUserPantry() {
  if (!currentUser) return;
  fetch('/api/v1/pantry/')
    .then(res => res.json())
    .then(data => {
      const results = Array.isArray(data) ? data : (data.results || []);
      results.forEach(it => {
        const name = it.ingredient_name || it.custom_name;
        if (name) selectedPantry.add(name);
      });
      renderPantryChips();
      updatePantryCounters();
      recalculateLoadedMatches();
    })
    .catch(() => {});
}

function updateModalFavoriteButton() {
  const icon = document.getElementById("favBtnIcon");
  const label = document.getElementById("favBtnLabel");
  const btn = document.getElementById("modalFavoriteBtn");
  if (!activeRecipe || !icon || !label) return;
  const recipeUid = activeRecipe.recipe_uid || activeRecipe.id;
  const isFav = userFavoritesSet.has(recipeUid);
  icon.textContent = isFav ? "❤️" : "🤍";
  label.textContent = isFav ? "Saved to Favorites" : "Save to Favorites";
  if (btn) {
    btn.style.background = isFav ? "var(--farm-green-light)" : "#fff";
  }
}

function fetchFavorites() {
  if (!currentUser) return;
  fetch('/api/v1/favorites/')
    .then(res => res.json())
    .then(data => {
      userFavoritesSet.clear();
      const results = Array.isArray(data) ? data : (data.results || []);
      results.forEach(f => {
        if (f.recipe_details && f.recipe_details.recipe_uid) {
          userFavoritesSet.add(f.recipe_details.recipe_uid);
        }
      });
      updateModalFavoriteButton();
    })
    .catch(() => {});
}

function toggleCurrentRecipeFavorite() {
  if (!currentUser) {
    openAuthModal();
    return;
  }
  if (!activeRecipe) return;
  const recipeUid = activeRecipe.recipe_uid || activeRecipe.id;

  fetch('/api/v1/favorites/toggle/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken()
    },
    body: JSON.stringify({ recipe_uid: recipeUid })
  })
  .then(res => res.json())
  .then(data => {
    if (data.is_favorited) {
      userFavoritesSet.add(recipeUid);
    } else {
      userFavoritesSet.delete(recipeUid);
    }
    updateModalFavoriteButton();
  })
  .catch(() => {});
}

function openFavoritesModal() {
  const menu = document.getElementById("userDropdownMenu");
  if (menu) menu.style.display = "none";
  const modal = document.getElementById("favoritesModal");
  if (modal) modal.classList.add("active");

  const container = document.getElementById("favoritesListContainer");
  if (!container) return;

  container.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--text-muted);">Loading your saved recipes...</div>';

  fetch('/api/v1/favorites/')
    .then(res => res.json())
    .then(data => {
      const results = Array.isArray(data) ? data : (data.results || []);
      if (results.length === 0) {
        container.innerHTML = `
          <div style="text-align: center; padding: 40px 20px; background: var(--bg-sand); border-radius: 12px;">
            <p style="font-size: 28px; margin-bottom: 8px;">🤍</p>
            <h4 style="font-size: 15px; font-weight: 700; color: var(--text-dark);">No saved recipes yet</h4>
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">Tap "Save to Favorites" on any recipe card to keep your favorite dishes here.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = results.map(fav => {
        const r = fav.recipe_details;
        return `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; background: var(--bg-sand); border-radius: 10px; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="${r.image}" alt="${escapeHtml(r.name)}" style="width: 52px; height: 52px; object-fit: cover; border-radius: 8px; flex-shrink: 0;" onerror="this.onerror=null; this.src='/static/images/dishes/traditional-rice.jpg'">
              <div>
                <h4 style="font-size: 14px; font-weight: 700; color: var(--text-dark); margin-bottom: 2px;">${escapeHtml(r.name)}</h4>
                <div style="font-size: 11px; color: var(--text-muted);">⏱ ${r.prep_time} mins • ${r.dietary_type}</div>
              </div>
            </div>
            <div style="display: flex; gap: 8px;">
              <button onclick="closeFavoritesModal(); openRecipe('${r.recipe_uid}')" style="background: var(--farm-green); color: #fff; border: none; padding: 6px 14px; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer;">
                Cook →
              </button>
            </div>
          </div>
        `;
      }).join("");
    })
    .catch(() => {
      container.innerHTML = '<div style="color: #D32F2F; text-align: center; padding: 20px;">Could not load favorites.</div>';
    });
}

function closeFavoritesModal() {
  const modal = document.getElementById("favoritesModal");
  if (modal) modal.classList.remove("active");
}

function addCurrentRecipeToShoppingList() {
  if (!activeRecipe) return;

  if (!currentUser) {
    openAuthModal();
    return;
  }
  const recipeUid = activeRecipe.recipe_uid || activeRecipe.id;

  fetch('/api/v1/shopping/generate_from_recipes/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken()
    },
    body: JSON.stringify({
      recipe_uids: [recipeUid],
      exclude_pantry: true
    })
  })
  .then(res => res.json())
  .then(() => {
    alert(`🛒 Added missing ingredients from ${activeRecipe.name} to your Grocery List!`);
  })
  .catch(() => {
    alert("Could not update shopping list. Please try again.");
  });
}

function openShoppingModal() {
  const menu = document.getElementById("userDropdownMenu");
  if (menu) menu.style.display = "none";
  const modal = document.getElementById("shoppingModal");
  if (modal) modal.classList.add("active");

  loadShoppingListItems();
}

function closeShoppingModal() {
  const modal = document.getElementById("shoppingModal");
  if (modal) modal.classList.remove("active");
}

function loadShoppingListItems() {
  const container = document.getElementById("shoppingListItemsContainer");
  if (!container) return;

  container.innerHTML = '<li style="padding: 16px; text-align: center; color: var(--text-muted);">Loading grocery list...</li>';

  fetch('/api/v1/shopping/')
    .then(res => res.json())
    .then(data => {
      const lists = Array.isArray(data) ? data : (data.results || []);
      if (lists.length === 0 || !lists[0].items || lists[0].items.length === 0) {
        container.innerHTML = `
          <li style="text-align: center; padding: 30px 16px; background: var(--bg-sand); border-radius: 10px; color: var(--text-muted); font-size: 13px;">
            🛒 Your shopping list is empty. Tap "Add to Grocery List" on any recipe modal to automatically add missing ingredients!
          </li>
        `;
        return;
      }

      const activeList = lists[0];
      container.innerHTML = activeList.items.map(item => `
        <li style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: var(--bg-sand); border-radius: 8px; font-size: 13px;">
          <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1; ${item.is_purchased ? 'text-decoration: line-through; opacity: 0.55;' : ''}">
            <input type="checkbox" ${item.is_purchased ? 'checked' : ''} onchange="toggleShoppingItem('${activeList.id}', '${item.id}')" style="cursor: pointer; width: 16px; height: 16px; accent-color: var(--farm-green);">
            <span><strong>${escapeHtml(item.ingredient_name)}</strong> <span style="color: var(--text-muted); font-size: 12px;">(${escapeHtml(item.amount || 'as needed')})</span></span>
          </label>
        </li>
      `).join("");
    })
    .catch(() => {
      container.innerHTML = '<li style="color: #D32F2F; padding: 16px; text-align: center;">Could not load grocery list.</li>';
    });
}

function toggleShoppingItem(listId, itemId) {
  fetch(`/api/v1/shopping/${listId}/items/${itemId}/toggle/`, {
    method: 'POST',
    headers: {
      'X-CSRFToken': getCsrfToken()
    }
  })
  .then(() => loadShoppingListItems())
  .catch(() => {});
}

// Initial Page Bootstrap
document.addEventListener("DOMContentLoaded", () => {
  renderPantryChips();
  renderFilterPills();
  updatePantryCounters();
  loadRecipesFromAPI(1);
  fetchCurrentUser();
});
