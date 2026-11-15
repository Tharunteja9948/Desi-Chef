// ==========================================================================
// AI CHEF — Human-Crafted Application Controller
// Powers All 10 Master Indian Culinary Domains (512 Authentic Recipes)
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
  window.getTimerState = () => ({
    timerSeconds,
    timerRemainingMs,
    timerRunning,
    timerTargetTimestamp
  });
}

// DOM Elements
const pantryChipsContainer = document.getElementById("pantryChipsContainer");
const dishesGrid = document.getElementById("dishesGrid");
const recipeCounterNotice = document.getElementById("recipeCounterNotice");
const navCountEl = document.getElementById("navCount");
const recipeModal = document.getElementById("recipeModal");
const filtersBar = document.getElementById("filtersBar");

// Helper to get all 512 recipes aggregated
function getAllRecipes() {
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

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderPantryChips();
  renderFilterPills();
  renderDishes();
  updatePantryCounters();
});

// ================= PANTRY MANAGEMENT & SEARCH =================
let pantrySearchQuery = "";

// Master Indian culinary ingredients dictionary for comprehensive instant search
const ALL_CULINARY_INGREDIENTS = [
  // Core Quick Staples
  "Rice", "Eggs", "Chicken", "Onions", "Tomatoes", "Potatoes", "Paneer", "Toor Dal", "Ghee",
  // Fresh Produce & Aromatics
  "Garlic", "Ginger", "Ginger Garlic Paste", "Green Chillies", "Curry Leaves", 
  "Fresh Coriander Leaves", "Fresh Mint Leaves", "Fresh Lemon Juice", 
  "Capsicum", "Spinach (Palak)", "Carrots", "Cabbage", "Cauliflower", 
  "Green Peas", "Brinjal (Eggplant)", "Drumstick", "Bottle Gourd", 
  "Fenugreek Leaves (Methi)", "Gongura Leaves", "Bhindi (Okra)", "Cucumber",
  // Proteins, Seafood & Dairy
  "Mutton", "Fish", "Prawns", "Crab", "Fresh Curd", "Butter", "Milk", 
  "Fresh Cream", "Cheese",
  // Grains, Flours & Batters
  "Dosa Batter", "Idli Batter", "Wheat Flour (Atta)", "Maida", "Besan (Gram Flour)", 
  "Rava (Semolina)", "Rice Flour", "Poha (Flattened Rice)", "Sabudana", 
  "Pav / Buns", "Sandwich Bread", "Noodles",
  // Lentils, Nuts & Condiments
  "Urad Dal", "Yellow Moong Dal", "Chana Dal", "Masoor Dal", "Rajma", "Kabuli Chana",
  "Peanuts", "Cashews", "Almonds", "Fresh Grated Coconut", "White Sesame Seeds (Til)",
  "Tamarind", "Jaggery (Gud)", "Sugar", "Mustard Oil", "Sesame Oil", "Refined Cooking Oil",
  // Spices & Powders
  "Biryani Masala", "Sambar Powder", "Rasam Powder", "Chaat Masala", "Garam Masala",
  "Turmeric Powder", "Red Chilli Powder", "Coriander Powder", "Cumin Powder",
  "Black Peppercorns", "Cumin Seeds", "Mustard Seeds", "Kasuri Methi", "Hing (Asafoetida)",
  "Cardamom", "Cloves", "Cinnamon Stick", "Bay Leaf", "Star Anise", "Fennel Seeds (Saunf)",
  "Fine Sev", "Cornstarch"
];

function getMasterIngredientsList() {
  const set = new Set([...ALL_CULINARY_INGREDIENTS, ...customPantryItems]);
  
  // Also harvest any specific ingredients from all 512 recipes
  try {
    const all = getAllRecipes();
    all.forEach(r => {
      if (r.ingredients) {
        r.ingredients.forEach(i => {
          if (i.name && i.name.length < 30) {
            const clean = i.name.replace(/\(.*?\)/g, "").trim();
            if (clean.length > 2) {
              set.add(clean.charAt(0).toUpperCase() + clean.slice(1));
            }
          }
        });
      }
    });
  } catch (e) {
    // fallback to static list
  }
  return Array.from(set);
}

function renderPantryChips() {
  if (!pantryChipsContainer) return;

  let itemsToDisplay = [];

  if (!pantrySearchQuery) {
    // 1. When NOT searching: Show DEFAULT_PANTRY_ITEMS + custom additions + any currently selected items
    const defaultSet = new Set([...DEFAULT_PANTRY_ITEMS, ...customPantryItems, ...selectedPantry]);
    itemsToDisplay = Array.from(defaultSet);
  } else {
    // 2. When SEARCHING: Search across the FULL comprehensive culinary ingredients database!
    const allIngredients = getMasterIngredientsList();
    itemsToDisplay = allIngredients.filter(it => it.toLowerCase().includes(pantrySearchQuery));

    // Also include any selected item matching the query
    selectedPantry.forEach(item => {
      if (item.toLowerCase().includes(pantrySearchQuery) && !itemsToDisplay.includes(item)) {
        itemsToDisplay.unshift(item);
      }
    });

    // Limit to top 24 most relevant matches for fast clean UI
    itemsToDisplay = itemsToDisplay.slice(0, 24);
  }

  // Sort: Currently selected items pinned to the front
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

    // If searching and what they typed is not already an exact match, offer "+ Add [typed]" button at the end
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
    
    // Check if an item matches in default staples or custom pantry
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

    // Add validated custom ingredient
    addCustomPantryItem(pantrySearchQuery);
    clearPantrySearch();
  }
}

function addCustomPantryItem(name) {
  if (!name || typeof name !== 'string') return;
  const trimmed = name.trim();
  if (trimmed.length === 0 || trimmed.length > 50) return;
  
  // Format title-cased
  const formatted = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  
  // Protect DEFAULT_PANTRY_ITEMS from in-place mutation; store in customPantryItems
  customPantryItems.add(formatted);
  selectedPantry.add(formatted);
  
  renderPantryChips();
  renderDishes();
  updatePantryCounters();
}

function togglePantryItem(item) {
  if (!item) return;
  if (selectedPantry.has(item)) {
    selectedPantry.delete(item);
  } else {
    selectedPantry.add(item);
  }
  // If user was viewing pantry matches and removed all items, revert back
  if (isPantryFilterActive && selectedPantry.size === 0) {
    isPantryFilterActive = false;
  }
  renderPantryChips();
  renderDishes();
  updatePantryCounters();
}

function resetPantry() {
  selectedPantry.clear();
  isPantryFilterActive = false;
  renderPantryChips();
  renderDishes();
  updatePantryCounters();
}

function getPantryMatchedRecipes() {
  if (selectedPantry.size === 0) return [];
  return getAllRecipes()
    .map(r => ({ ...r, matchInfo: calculateMatch(r) }))
    .filter(r => r.matchInfo.userMatchedCount > 0)
    .sort((a, b) => {
      // 1. Prioritize dishes matching the highest number of user-selected pantry items
      if (b.matchInfo.userMatchedCount !== a.matchInfo.userMatchedCount) {
        return b.matchInfo.userMatchedCount - a.matchInfo.userMatchedCount;
      }
      // 2. Prioritize higher overall recipe completeness %
      if (b.matchInfo.percent !== a.matchInfo.percent) {
        return b.matchInfo.percent - a.matchInfo.percent;
      }
      return b.matchInfo.matchedRecipeIngs.length - a.matchInfo.matchedRecipeIngs.length;
    });
}

function updatePantryCounters() {
  const count = selectedPantry.size;
  if (navCountEl) navCountEl.textContent = count;

  const matched = getPantryMatchedRecipes();
  const matchedCount = matched.length;
  const readyCount = matched.filter(r => r.matchInfo.percent === 100).length;

  const footer = document.getElementById("pantryShelfFooter");
  const footerIcon = document.getElementById("pantryFooterIcon");
  const footerTitle = document.getElementById("pantryFooterTitle");
  const footerSub = document.getElementById("pantryFooterSub");
  const clearBtn = document.getElementById("pantryClearBtn");
  const ctaBtn = document.getElementById("pantryViewMatchesCta");
  const btnText = document.getElementById("pantryBtnText");

  if (count === 0) {
    if (footer) footer.classList.remove("active");
    if (footerIcon) footerIcon.textContent = "🥘";
    if (footerTitle) footerTitle.textContent = "Tap ingredients above to start matching";
    if (footerSub) footerSub.textContent = "Select what you have at home to see instant dish matches";
    if (clearBtn) clearBtn.style.display = "none";
    if (ctaBtn) {
      ctaBtn.classList.add("disabled");
      ctaBtn.setAttribute("disabled", "true");
    }
    if (btnText) btnText.textContent = "Select Ingredients";
  } else {
    if (footer) footer.classList.add("active");
    if (footerIcon) footerIcon.textContent = readyCount > 0 ? "🎉" : "✨";
    if (footerTitle) {
      const ingList = Array.from(selectedPantry).slice(0, 3).join(", ");
      const more = count > 3 ? ` +${count - 3} more` : "";
      footerTitle.innerHTML = `<strong>${count} ingredient${count === 1 ? '' : 's'} selected</strong> <span style="font-weight: 600; color: var(--farm-green);">(${ingList}${more})</span>`;
    }
    if (footerSub) {
      footerSub.innerHTML = readyCount > 0 
        ? `<strong style="color: #0F8A43;">${readyCount} dish${readyCount === 1 ? '' : 'es'} 100% ready to cook</strong> • ${matchedCount} total authentic dishes found`
        : `Found <strong>${matchedCount} authentic dish${matchedCount === 1 ? '' : 'es'}</strong> matching what's in your kitchen`;
    }
    if (clearBtn) clearBtn.style.display = "inline-block";
    if (ctaBtn) {
      ctaBtn.classList.remove("disabled");
      ctaBtn.removeAttribute("disabled");
    }
    if (btnText) {
      btnText.textContent = `View ${matchedCount} Matching Recipe${matchedCount === 1 ? '' : 's'}`;
    }
  }
}

function viewPantryMatches() {
  if (selectedPantry.size === 0) {
    const footer = document.getElementById("pantryShelfFooter");
    if (footer) {
      footer.style.borderColor = "var(--turmeric-amber)";
      setTimeout(() => {
        footer.style.borderColor = "";
      }, 800);
    }
    scrollToPantry();
    return;
  }
  isPantryFilterActive = true;
  searchQuery = "";
  const searchInput = document.getElementById("recipeSearch");
  if (searchInput) searchInput.value = "";
  renderDishes();
  
  const notice = document.getElementById("recipeCounterNotice");
  if (notice) notice.scrollIntoView({ behavior: "smooth", block: "start" });
}

function exitPantryFilter() {
  isPantryFilterActive = false;
  renderDishes();
}

function scrollToPantry() {
  const el = document.getElementById("pantryShelf");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ================= SECTION & CATEGORY SWITCHER =================
function switchMainSection(section, navBtn) {
  isPantryFilterActive = false;
  currentMainSection = section;
  currentSubCategory = "all";
  searchQuery = "";
  const searchInput = document.getElementById("recipeSearch");
  if (searchInput) searchInput.value = "";
  
  // Update header nav active state
  document.querySelectorAll(".nav-tab-link").forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("data-section") === section) a.classList.add("active");
  });
  if (navBtn) navBtn.classList.add("active");

  // Sync story circles
  document.querySelectorAll(".story-circle-item").forEach(s => s.classList.remove("active"));
  let storyId = "story-all-" + section.replace(/_/g, "-");
  const defaultStory = document.getElementById(storyId);
  if (defaultStory) defaultStory.classList.add("active");

  renderFilterPills();
  renderDishes();
  updatePantryCounters();
}

// Render dynamic subcategory filter pills based on active section
function renderFilterPills() {
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
      <button class="filter-pill ${quickFilterReady ? 'active' : ''}" onclick="toggleQuickFilter('ready', this)">
        <span>✨ 100% Ready</span>
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
      <button class="filter-pill ${currentSubCategory === 'noodles' ? 'active' : ''}" onclick="setSubCategory('noodles', this)">
        <span>Hakka Noodles</span> <span class="filter-tag-count">8</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'momos' ? 'active' : ''}" onclick="setSubCategory('momos', this)">
        <span>Momos</span> <span class="filter-tag-count">6</span>
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
      <button class="filter-pill ${currentSubCategory === 'egg-seafood-curry' ? 'active' : ''}" onclick="setSubCategory('egg-seafood-curry', this)">
        <span>Seafood & Egg</span> <span class="filter-tag-count">10</span>
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
      <button class="filter-pill ${currentSubCategory === 'crispy-bites' ? 'active' : ''}" onclick="setSubCategory('crispy-bites', this)">
        <span>Crispy Bites & Bonda</span> <span class="filter-tag-count">8</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'regional-namkeen' ? 'active' : ''}" onclick="setSubCategory('regional-namkeen', this)">
        <span>Regional Namkeen</span> <span class="filter-tag-count">8</span>
      </button>
    `;
  } else if (currentMainSection === "breads") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Breads & Rotis</span> <span class="filter-tag-count">35</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'naan' ? 'active' : ''}" onclick="setSubCategory('naan', this)">
        <span>Naans & Tandoor</span> <span class="filter-tag-count">5</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'roti' ? 'active' : ''}" onclick="setSubCategory('roti', this)">
        <span>Rotis & Bhakri</span> <span class="filter-tag-count">9</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'paratha' ? 'active' : ''}" onclick="setSubCategory('paratha', this)">
        <span>Stuffed Parathas</span> <span class="filter-tag-count">11</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'puri' ? 'active' : ''}" onclick="setSubCategory('puri', this)">
        <span>Puris, Theplas & Bhature</span> <span class="filter-tag-count">10</span>
      </button>
      <button class="filter-pill ${quickFilterReady ? 'active' : ''}" onclick="toggleQuickFilter('ready', this)">
        <span>✨ 100% Ready</span>
      </button>
    `;
  } else if (currentMainSection === "sweets") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Sweets</span> <span class="filter-tag-count">45</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'halwa' ? 'active' : ''}" onclick="setSubCategory('halwa', this)">
        <span>Halwas & Sheera</span> <span class="filter-tag-count">8</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'ladoo' ? 'active' : ''}" onclick="setSubCategory('ladoo', this)">
        <span>Ladoos & Peda</span> <span class="filter-tag-count">10</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'kheer' ? 'active' : ''}" onclick="setSubCategory('kheer', this)">
        <span>Kheer & Payasam</span> <span class="filter-tag-count">8</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'syrup-sweet' ? 'active' : ''}" onclick="setSubCategory('syrup-sweet', this)">
        <span>Syrupy Mithai</span> <span class="filter-tag-count">11</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'barfi' ? 'active' : ''}" onclick="setSubCategory('barfi', this)">
        <span>Barfi, Fudge & Kulfi</span> <span class="filter-tag-count">8</span>
      </button>
    `;
  } else if (currentMainSection === "chutneys") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Pachallu & Pickles</span> <span class="filter-tag-count">40</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'pachadi' ? 'active' : ''}" onclick="setSubCategory('pachadi', this)">
        <span>Andhra Roti Pachallu</span> <span class="filter-tag-count">12</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'tiffin-chutney' ? 'active' : ''}" onclick="setSubCategory('tiffin-chutney', this)">
        <span>Fresh Tiffin Chutneys</span> <span class="filter-tag-count">10</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'pickle' ? 'active' : ''}" onclick="setSubCategory('pickle', this)">
        <span>Heritage Pickles (Avakaya)</span> <span class="filter-tag-count">10</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'podi' ? 'active' : ''}" onclick="setSubCategory('podi', this)">
        <span>Gunpowders & Podis</span> <span class="filter-tag-count">8</span>
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
        <span>Chai, Lassi & Coolers</span> <span class="filter-tag-count">25</span>
      </button>
      <button class="filter-pill ${quickFilterFast ? 'active' : ''}" onclick="toggleQuickFilter('fast', this)">
        <span>⚡ Under 15 mins</span>
      </button>
      <button class="filter-pill ${quickFilterReady ? 'active' : ''}" onclick="toggleQuickFilter('ready', this)">
        <span>✨ 100% Ready</span>
      </button>
    `;
  } else if (currentMainSection === "sides_eggs_seafood") {
    filtersBar.innerHTML = `
      <button class="filter-pill ${currentSubCategory === 'all' ? 'active' : ''}" onclick="setSubCategory('all', this)">
        <span>All Specials</span> <span class="filter-tag-count">60</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'salad' ? 'active' : ''}" onclick="setSubCategory('salad', this)">
        <span>Salads, Raitas & Sundals</span> <span class="filter-tag-count">20</span>
      </button>
      <button class="filter-pill ${currentSubCategory === 'egg' ? 'active' : ''}" onclick="setSubCategory('egg', this)">
        <span>Egg Specials</span> <span class="filter-tag-count">18</span>
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
      <button class="filter-pill ${quickFilterReady ? 'active' : ''}" onclick="toggleQuickFilter('ready', this)">
        <span>✨ 100% Ready</span>
      </button>
    `;
  }
}

function setSubCategory(cat, btn) {
  currentSubCategory = cat;
  document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderDishes();
}

function filterByStory(section, category, itemEl) {
  isPantryFilterActive = false;
  currentMainSection = section;
  currentSubCategory = category;

  document.querySelectorAll(".story-circle-item").forEach(s => s.classList.remove("active"));
  if (itemEl) itemEl.classList.add("active");

  // Sync nav links
  document.querySelectorAll(".nav-tab-link").forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("data-section") === section) a.classList.add("active");
  });

  renderFilterPills();
  renderDishes();
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
  renderDishes();
}

function handleSearch(val) {
  searchQuery = val.trim().toLowerCase();
  renderDishes();
}

function handleSort(val) {
  currentSort = val;
  renderDishes();
}

// ================= MATCH CALCULATION =================
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
  
  // 2. Whole Rice vs Rice Flour, Rice Rava, Rice Bran Oil, Poha (Prevent False-Positive Matches)
  if (pNorm === 'rice' || pNorm === 'basmati rice' || pNorm === 'cooked rice' || pNorm === 'leftover cooked rice' || pNorm === 'raw rice' || pNorm === 'chawal') {
    // If recipe requires flour, batter, rava, oil, or flakes, whole rice cannot be substituted directly
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

  // 8. Toor Dal / Sambar Dal / Arhar Dal
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

  // General culinary ingredient matching
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
  if (selectedPantry.size === 0) {
    return {
      percent: 0,
      userMatchedCount: 0,
      matchedItems: [],
      matchedRecipeIngs: [],
      missing: recipe.ingredients
    };
  }

  const userItems = Array.from(selectedPantry);
  const matchedPantryItems = [];
  const matchedRecipeIngs = [];
  const missingRecipeIngs = [];

  recipe.ingredients.forEach(ing => {
    let matchedUserItem = null;
    for (const u of userItems) {
      if (ingredientMatches(ing.name, u)) {
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

  const percent = Math.round((matchedRecipeIngs.length / recipe.ingredients.length) * 100);
  return {
    percent,
    userMatchedCount: matchedPantryItems.length,
    matchedItems: matchedPantryItems,
    matchedRecipeIngs,
    missing: missingRecipeIngs
  };
}

// ================= DISHES RENDERING =================
function renderDishes() {
  let list = [];

  if (searchQuery) {
    // 1. GLOBAL SEARCH ACROSS ALL 512 RECIPES
    const q = searchQuery.toLowerCase().trim();
    const all = getAllRecipes().map(r => ({ ...r, matchInfo: calculateMatch(r) }));

    if (searchMode === "ingredients") {
      list = all.filter(r => r.ingredients.some(i => i.name.toLowerCase().includes(q)));
    } else {
      list = all.filter(r => {
        const matchName = r.name.toLowerCase().includes(q);
        const matchDesc = r.description.toLowerCase().includes(q);
        const matchIng = r.ingredients.some(i => i.name.toLowerCase().includes(q));
        return matchName || matchDesc || matchIng;
      });
      // Prioritize title matches so that typing "chicken" ranks Hyderabadi Chicken Biryani, Butter Chicken, etc. first
      list.sort((a, b) => {
        const aTitle = a.name.toLowerCase().includes(q) ? 1 : 0;
        const bTitle = b.name.toLowerCase().includes(q) ? 1 : 0;
        if (bTitle !== aTitle) return bTitle - aTitle;
        return 0;
      });
    }
  } else if (isPantryFilterActive) {
    // 2. PANTRY INGREDIENT MATCHES ACROSS ALL 512 RECIPES
    list = getPantryMatchedRecipes();
  } else {
    // 3. CATEGORY BROWSING
    if (currentMainSection === "breakfast") list = [...BREAKFAST_RECIPES];
    else if (currentMainSection === "rice") list = [...RICE_RECIPES];
    else if (currentMainSection === "streetfood") list = [...STREETFOOD_RECIPES];
    else if (currentMainSection === "curries") list = [...CURRY_RECIPES];
    else if (currentMainSection === "snacks") list = [...SNACK_RECIPES];
    else if (currentMainSection === "breads") list = [...BREAD_RECIPES];
    else if (currentMainSection === "sweets") list = [...SWEET_RECIPES];
    else if (currentMainSection === "chutneys") list = [...CHUTNEY_RECIPES];
    else if (currentMainSection === "soups_drinks") list = [...SOUPS_DRINKS_RECIPES];
    else if (currentMainSection === "sides_eggs_seafood") list = [...SIDES_EGGS_SEAFOOD_RECIPES];
    else list = getAllRecipes();

    // Subcategory filter (applied when user is browsing within a section)
    if (currentSubCategory !== "all") {
      list = list.filter(r => r.subCategory === currentSubCategory);
    }

    list = list.map(r => ({ ...r, matchInfo: calculateMatch(r) }));
  }

  // 4. Quick filters
  if (quickFilterFast) {
    list = list.filter(r => r.prepTime <= 20);
  }
  if (quickFilterReady) {
    list = list.filter(r => r.matchInfo.percent === 100);
  }
  if (quickFilterVegOnly) {
    list = list.filter(r => r.veg === true);
  }
  if (quickFilterNonVegOnly) {
    list = list.filter(r => r.veg === false);
  }

  // 5. Sort (when not in pantry filter mode, respect dropdown)
  if (!isPantryFilterActive) {
    if (currentSort === "match") {
      if (selectedPantry.size > 0) {
        list.sort((a, b) => {
          if (b.matchInfo.userMatchedCount !== a.matchInfo.userMatchedCount) {
            return b.matchInfo.userMatchedCount - a.matchInfo.userMatchedCount;
          }
          return b.matchInfo.percent - a.matchInfo.percent;
        });
      }
    } else if (currentSort === "time") {
      list.sort((a, b) => a.prepTime - b.prepTime);
    } else if (currentSort === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  if (isPantryFilterActive) {
    const activeList = Array.from(selectedPantry).map(escapeHtml).join(", ");
    recipeCounterNotice.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; width: 100%;">
        <span style="color: var(--farm-green); font-size: 14px;">
          🥘 Found <strong>${list.length}</strong> recipes matching your kitchen (<em>${activeList}</em>) — sorted by best match
        </span>
        <button onclick="exitPantryFilter()" style="background: var(--bg-sand); border: 1.5px solid var(--farm-green); color: var(--farm-green); border-radius: 20px; padding: 4px 12px; font-size: 12px; font-weight: 700; cursor: pointer;">
          Show Category View ✕
        </button>
      </div>
    `;
  } else if (searchQuery) {
    recipeCounterNotice.innerHTML = `Found <strong>${list.length}</strong> authentic dish${list.length === 1 ? '' : 'es'} matching "<em>${escapeHtml(searchQuery)}</em>" across all categories`;
  } else {
    let sectionName = "breakfast";
    if (currentMainSection === "rice") sectionName = "rice & biryani";
    else if (currentMainSection === "streetfood") sectionName = "street food & fast food";
    else if (currentMainSection === "curries") sectionName = "curries & gravies";
    else if (currentMainSection === "snacks") sectionName = "snacks, starters & tikkas";
    else if (currentMainSection === "breads") sectionName = "breads, rotis & parathas";
    else if (currentMainSection === "sweets") sectionName = "sweets & mithai";
    else if (currentMainSection === "chutneys") sectionName = "pachallu, chutneys & pickles";
    else if (currentMainSection === "soups_drinks") sectionName = "soups, rasams & coolers";
    else if (currentMainSection === "sides_eggs_seafood") sectionName = "salads, eggs & coastal seafood";
    else sectionName = "master Indian culinary";

    recipeCounterNotice.textContent = `Showing ${list.length} authentic ${sectionName} dish${list.length === 1 ? '' : 'es'}`;
  }

  if (list.length === 0) {
    dishesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: #fff; border-radius: 16px; border: 1px solid var(--bg-sand-border);">
        <p style="font-size: 28px; margin-bottom: 8px;">🍽️</p>
        <h4 style="font-size: 16px; font-weight: 700; color: var(--text-dark);">No matching dishes found</h4>
        <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">Try selecting other pantry ingredients or clearing your search filter.</p>
        <button onclick="resetPantry(); searchQuery=''; quickFilterFast=false; quickFilterReady=false; quickFilterVegOnly=false; quickFilterNonVegOnly=false; renderFilterPills(); renderDishes();" style="margin-top: 14px; background: var(--farm-green); color: #fff; padding: 8px 18px; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; border: none;">
          Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  // Render cards
  dishesGrid.innerHTML = list.map(recipe => {
    const { percent, missing, userMatchedCount, matchedItems } = recipe.matchInfo;
    
    // Category label
    let catLabel = "HOMESTYLE SPECIAL";
    if (recipe.subCategory === "idli") catLabel = "IDLI SPECIAL";
    else if (recipe.subCategory === "dosa") catLabel = "DOSA SPECIAL";
    else if (recipe.subCategory === "biryani") catLabel = "ROYAL BIRYANI";
    else if (recipe.subCategory === "fried-rice") catLabel = "WOK FRIED RICE";
    else if (recipe.subCategory === "traditional-rice") catLabel = "TRADITIONAL RICE";
    else if (recipe.subCategory === "pulao") catLabel = "PULAO & KHICHDI";
    else if (recipe.subCategory === "chaat-streetfood") catLabel = "CHAAT SPECIAL";
    else if (recipe.subCategory === "noodles") catLabel = "HAKKA NOODLES";
    else if (recipe.subCategory === "momos") catLabel = "TIBETAN MOMOS";
    else if (recipe.subCategory === "rolls") catLabel = "KATHI ROLL";
    else if (recipe.subCategory === "burgers-sandwiches") catLabel = "SANDWICH & BURGER";
    else if (recipe.subCategory === "fast-food") catLabel = "CRISPY FAST FOOD";
    else if (recipe.subCategory === "chicken-curry") catLabel = "CHICKEN SPECIAL";
    else if (recipe.subCategory === "mutton-curry") catLabel = "ROYAL MUTTON";
    else if (recipe.subCategory === "veg-paneer-curry") catLabel = "SHAHI PANEER & VEG";
    else if (recipe.subCategory === "dal-south-curry") catLabel = "DAL & SAMBAR";
    else if (recipe.subCategory === "egg-seafood-curry") catLabel = "SEAFOOD & EGG";
    else if (recipe.subCategory === "tikkas-kebabs") catLabel = "CHARRED TIKKA";
    else if (recipe.subCategory === "pakoras-fritters") catLabel = "CRISPY PAKORA";
    else if (recipe.subCategory === "cutlets-vadas") catLabel = "CUTLET & VADA";
    else if (recipe.subCategory === "crispy-bites") catLabel = "CRISPY BITES";
    else if (recipe.subCategory === "regional-namkeen") catLabel = "TEA-TIME NAMKEEN";
    else if (recipe.subCategory === "naan") catLabel = "TANDOORI NAAN";
    else if (recipe.subCategory === "roti") catLabel = "ROTI & BHAKRI";
    else if (recipe.subCategory === "paratha") catLabel = "STUFFED PARATHA";
    else if (recipe.subCategory === "puri") catLabel = "PURI & THEPLA";
    else if (recipe.subCategory === "halwa") catLabel = "SHAHI HALWA";
    else if (recipe.subCategory === "ladoo") catLabel = "DANEDAR LADOO";
    else if (recipe.subCategory === "kheer") catLabel = "KHEER & PAYASAM";
    else if (recipe.subCategory === "syrup-sweet") catLabel = "SYRUPY MITHAI";
    else if (recipe.subCategory === "barfi") catLabel = "BARFI & FUDGE";
    else if (recipe.subCategory === "pachadi") catLabel = "ANDHRA PACHADI";
    else if (recipe.subCategory === "tiffin-chutney") catLabel = "TIFFIN CHUTNEY";
    else if (recipe.subCategory === "pickle") catLabel = "HERITAGE PICKLE";
    else if (recipe.subCategory === "podi") catLabel = "GUNPOWDER & PODI";
    else if (recipe.subCategory === "soup") catLabel = "SOUP & RASAM";
    else if (recipe.subCategory === "drink") catLabel = "CHAI & COOLER";
    else if (recipe.subCategory === "salad") catLabel = "SALAD & SUNDAL";
    else if (recipe.subCategory === "egg") catLabel = "EGG SPECIAL";
    else if (recipe.subCategory === "seafood") catLabel = "COASTAL SEAFOOD";

    // Match label
    let matchLabelHtml = "";
    if (percent === 100) {
      matchLabelHtml = `<span class="match-label-ready">🎉 100% Ready (Have all items)</span>`;
    } else if (userMatchedCount > 0) {
      matchLabelHtml = `<span class="match-label-partial"><strong>${userMatchedCount} pantry item${userMatchedCount === 1 ? '' : 's'} match</strong> • ${percent}% total • Need ${missing.length} more</span>`;
    } else if (percent > 0) {
      matchLabelHtml = `<span class="match-label-partial">${percent}% Match • Need ${missing[0].name}</span>`;
    } else {
      matchLabelHtml = `<span class="match-label-none">Need ${recipe.ingredients.length} items</span>`;
    }

    // Matched chip
    let matchedChipHtml = "";
    if (userMatchedCount > 0) {
      matchedChipHtml = `<span class="variant-chip matched-chip">✓ Uses your: ${matchedItems.join(", ")}</span>`;
    }

    return `
      <article class="dish-card">
        <div class="card-main-content">
          
          <!-- Left details block -->
          <div class="dish-details">
            <div class="dish-meta-pills">
              <span class="${recipe.veg ? 'veg-indicator' : 'veg-indicator nonveg'}"><span class="circle"></span></span>
              <span class="dish-sub-category">${catLabel}</span>
            </div>

            <h3 class="dish-name" onclick="openRecipe('${recipe.id}')">${recipe.name}</h3>

            <div class="dish-meta-pills">
              <span class="rating-badge">★ 4.9</span>
              <span class="time-pill">⏱ ${recipe.prepTime} mins</span>
              <span class="time-pill">•</span>
              <span class="time-pill">👥 Serves ${recipe.servings}</span>
            </div>

            <p class="dish-description">${recipe.description}</p>

            <div class="dish-variant-chips">
              <span class="variant-chip">${recipe.veg ? 'Pure Veg' : 'Non-Veg'}</span>
              <span class="variant-chip">${recipe.prepTime <= 20 ? 'Quick Cook' : 'Slow Simmered'}</span>
              ${matchedChipHtml}
            </div>
          </div>

          <!-- Right food photo & COOK button -->
          <div class="dish-media-box">
            <div class="dish-img-wrap">
              <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" onerror="this.src='images/dishes/traditional-rice.jpg'">
            </div>
            <button class="cook-recipe-btn" onclick="openRecipe('${recipe.id}')">
              COOK
            </button>
          </div>

        </div>

        <!-- Footnote match status -->
        <div class="dish-card-footer">
          <div>${matchLabelHtml}</div>
          <div style="color: var(--farm-green); font-weight: 700; cursor: pointer;" onclick="openRecipe('${recipe.id}')">
            View Recipe →
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ================= MODAL & COOKING TIMER =================
function openRecipe(id) {
  const recipe = getAllRecipes().find(r => r.id === id);
  if (!recipe) return;
  activeRecipe = recipe;
  currentServingsFactor = 1;

  document.getElementById("modalTitle").textContent = recipe.name;
  document.getElementById("modalDesc").textContent = recipe.description;
  document.getElementById("modalTime").textContent = `${recipe.prepTime} mins`;
  document.getElementById("modalSubcategory").textContent = recipe.subCategory.toUpperCase() + " SPECIAL";

  // Recipe image banner in modal
  const modalImg = document.getElementById("modalRecipeImg");
  if (modalImg) {
    modalImg.src = recipe.image;
    modalImg.alt = recipe.name;
  }

  // Veg indicator in modal
  const modalVeg = document.getElementById("modalVegIndicator");
  if (modalVeg) {
    modalVeg.className = recipe.veg ? "veg-indicator" : "veg-indicator nonveg";
  }

  // Initial Servings Label Reset
  const servingsValEl = document.getElementById("modalServingsVal");
  if (servingsValEl) {
    servingsValEl.textContent = recipe.servings;
  }
  document.querySelectorAll(".stepper-btn").forEach(b => b.classList.remove("active"));
  const btn1x = document.getElementById("stepper1x");
  if (btn1x) btn1x.classList.add("active");

  const match = calculateMatch(recipe);
  const matchEl = document.getElementById("modalMatch");
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

  // Ingredients Checklist
  renderModalChecklist();

  // Steps with interactive completion toggle
  const stepsEl = document.getElementById("modalStepsList");
  stepsEl.innerHTML = recipe.steps.map((s, idx) => `
    <li class="cooking-step" onclick="toggleStepCompleted(this)" title="Tap to mark step done">
      <span>${escapeHtml(s)}</span>
    </li>
  `).join("");

  // Drift-Free Kitchen Timer Initialization
  setupTimer(recipe.prepTime * 60);

  // Open modal
  recipeModal.classList.add("active");
}

function toggleStepCompleted(el) {
  if (el) {
    el.classList.toggle("completed-step");
  }
}

function renderModalChecklist() {
  const listEl = document.getElementById("modalIngredientsList");
  if (!listEl || !activeRecipe) return;

  listEl.innerHTML = activeRecipe.ingredients.map(ing => {
    let hasIt = false;
    for (const u of selectedPantry) {
      if (ingredientMatches(ing.name, u)) {
        hasIt = true;
        break;
      }
    }

    const scaledAmountStr = scaleAmount(ing.amount, currentServingsFactor);

    return `
      <li class="${hasIt ? 'present' : 'absent'}">
        <span>• <strong>${escapeHtml(ing.name)}</strong> <span style="color:#7D7065;">(${escapeHtml(scaledAmountStr)})</span></span>
        <span class="ing-badge">${hasIt ? 'In Pantry ✓' : 'Needed'}</span>
      </li>
    `;
  }).join("");
}

function closeModal() {
  recipeModal.classList.remove("active");
  stopTimer();
}

function setServings(factor, btn) {
  if (typeof factor !== 'number' || factor <= 0 || isNaN(factor)) factor = 1;
  currentServingsFactor = factor;
  
  document.querySelectorAll(".stepper-btn").forEach(b => b.classList.remove("active"));
  if (btn) {
    btn.classList.add("active");
  } else {
    const defaultBtn = document.getElementById(`stepper${factor}x`);
    if (defaultBtn) defaultBtn.classList.add("active");
  }

  if (activeRecipe) {
    const servingsValEl = document.getElementById("modalServingsVal");
    if (servingsValEl) {
      servingsValEl.textContent = activeRecipe.servings * currentServingsFactor;
    }
    renderModalChecklist();
  }
}

// Drift-free Timestamp-based Timer Logic
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
// DUAL-MODE & ANIMATED ROTATING SEARCH ENGINE (Styles 1 + 4 Finalized)
// ==========================================================================
let searchMode = "dishes"; // "dishes" or "ingredients"
let rotatingTimer = null;
let currentRotatingIdx = 0;

const DISH_ROTATING_PROMPTS = [
  "Search 'Hyderabadi Dum Biryani'...",
  "Search 'Traditional Gongura Pachadi'...",
  "Search 'Crispy Mysore Masala Dosa'...",
  "Search 'Delhi Style Butter Chicken'...",
  "Search 'Kumbakonam Filter Coffee'...",
  "Search 'Chettinad Fish Curry'...",
  "Search 'Melt-in-mouth Gulab Jamun'..."
];

const INGREDIENT_ROTATING_PROMPTS = [
  "Search 'Leftover cooked rice'...",
  "Search 'Fresh paneer' or 'Chicken'...",
  "Search 'Toor dal' or 'Mustard seeds'...",
  "Search 'Gongura leaves' or 'Tamarind'...",
  "Search 'Prawns' or 'Fish'...",
  "Search 'Eggs' or 'Potatoes'..."
];

function initSearchSystem() {
  startRotatingPlaceholder();

  // Keyboard shortcut: Press '/' to focus search input
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      const input = document.getElementById("recipeSearch");
      if (input) {
        input.focus();
        input.select();
      }
    } else if (e.key === "Escape") {
      const input = document.getElementById("recipeSearch");
      if (input && document.activeElement === input) {
        input.blur();
      }
    }
  });
}

function startRotatingPlaceholder() {
  const input = document.getElementById("recipeSearch");
  if (!input) return;

  if (rotatingTimer) clearInterval(rotatingTimer);
  const prompts = searchMode === "ingredients" ? INGREDIENT_ROTATING_PROMPTS : DISH_ROTATING_PROMPTS;
  currentRotatingIdx = 0;
  input.placeholder = prompts[currentRotatingIdx];

  rotatingTimer = setInterval(() => {
    if (document.activeElement === input || input.value.trim().length > 0) return;
    const currentPrompts = searchMode === "ingredients" ? INGREDIENT_ROTATING_PROMPTS : DISH_ROTATING_PROMPTS;
    currentRotatingIdx = (currentRotatingIdx + 1) % currentPrompts.length;
    input.placeholder = currentPrompts[currentRotatingIdx];
  }, 2800);
}

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

  startRotatingPlaceholder();

  const input = document.getElementById("recipeSearch");
  if (input && input.value.trim().length > 0) {
    handleSearch(input.value);
  }
}

function onSearchInput(val) {
  handleSearch(val);
  const clearBtn = document.getElementById("searchActionBtn");
  if (clearBtn) {
    clearBtn.classList.toggle("show", val.trim().length > 0);
  }
}

function onSearchActionClick() {
  const input = document.getElementById("recipeSearch");
  if (!input) return;

  input.value = "";
  handleSearch("");
  const clearBtn = document.getElementById("searchActionBtn");
  if (clearBtn) clearBtn.classList.remove("show");
  input.focus();
}

// Auto-initialize when window loads
window.addEventListener("DOMContentLoaded", initSearchSystem);
if (document.readyState === "complete" || document.readyState === "interactive") {
  initSearchSystem();
}
