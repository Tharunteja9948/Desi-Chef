# AI Chef — Homestyle Recipe Engine

> **From Pantry to Plate** — An authentic Indian homestyle cooking engine powering 512 signature dishes across 10 master culinary traditions. Features instant pantry ingredient matching, leftover-friendly recommendations, dynamic servings scaling, and step-by-step cooking directions with interactive kitchen timers.

---

## Highlights

- **🥘 "In My Kitchen" Pantry Matcher**:
  - Tap core everyday staples (*Rice, Eggs, Chicken, Onions, Tomatoes, Potatoes, Paneer, Toor Dal, Ghee*) or search any ingredient (*curry leaves, fish, mutton, spinach, gongura*).
  - Smart semantic word-boundary matching distinguishes culinary ingredients accurately (e.g., eggs vs. eggplants, rice vs. ice cream).
  - Relevance ranking prioritizes dishes using the most ingredients you have at home.
- **🔍 Dual-Mode Search Bar**:
  - Switch seamlessly between `🍽️ Dishes` and `🥕 Ingredients` search.
  - Animated rotating placeholder with quick `[✕]` clear and `/` keyboard shortcut.
  - Title-match prioritization ensures instant access to signature recipes.
- **📱 "What Are You Craving Today?" Story Circles**:
  - 10 culinary domains with dedicated avatars and live dish counts:
    1. **Breakfast** (30 dishes)
    2. **Biryani & Rice** (77 dishes)
    3. **Curries** (60 dishes)
    4. **Street Food** (65 dishes)
    5. **Snacks & Kebabs** (50 dishes)
    6. **Rotis & Naans** (35 dishes)
    7. **Mithai & Sweets** (45 dishes)
    8. **Pachallu & Pickles** (40 dishes)
    9. **Soups & Chai** (50 dishes)
    10. **Seafood & Eggs** (60 dishes)
- **⚡ Dynamic Filter Pills Bar**:
  - Quick subcategory filters tailored to the active culinary section.
  - One-tap dietary & time filters: `⚡ Under 20 mins`, `✨ 100% Ready`, `Pure Veg`, `Non-Veg`.
- **📖 Interactive Recipe Modal**:
  - Authentic Indian veg/non-veg indicator emblems.
  - In-pantry vs. needed ingredients checklist with live status badges.
  - Dynamic Servings Scaler (`1x`, `2x`, `4x`).
  - Embedded interactive kitchen countdown timer with sound notifications.

---

## Project Structure

```
ai-chef/
├── css/
│   └── style.css            # Human-crafted design system & responsive styling
├── data/                    # 512 authentic homestyle recipes across 10 modules
│   ├── breakfast.js         # Idlis, dosas, tiffins, upma & poha (30 recipes)
│   ├── rice.js              # Royal dum biryanis, pulaos & fried rice (77 recipes)
│   ├── curries.js           # Chicken, mutton, paneer & regional curries (60 recipes)
│   ├── streetfood.js        # Chaat, momos, rolls & pav bhaji (65 recipes)
│   ├── snacks.js            # Tikkas, kebabs, pakoras & cutlets (50 recipes)
│   ├── breads.js            # Naans, rotis, parathas & puris (35 recipes)
│   ├── sweets.js            # Halwas, ladoos, kheers & syrupy mithai (45 recipes)
│   ├── chutneys.js          # Andhra pachallu, podis & tiffin chutneys (40 recipes)
│   ├── soups_drinks.js      # Rasams, shorbas, filter coffee & coolers (50 recipes)
│   └── sides_eggs_seafood.js# Coastal seafood, egg roasts & sundals (60 recipes)
├── images/
│   ├── chef-logo.jpg        # Circular toque blanche emblem
│   └── dishes/              # High-definition authentic photography
├── index.html               # Semantic, accessible HTML5 single-page application
└── js/
    └── app.js               # Application state, semantic matching engine & UI controller
```

---

## Getting Started

No build tools or external package managers required. AI Chef is built with pure, native web standards (HTML5, CSS3, vanilla ES6+ JavaScript).

### Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/ai-chef.git
   cd ai-chef
   ```

2. **Start a local development server**:
   ```bash
   # Using Python 3:
   python -m http.server 8000

   # Or using Node:
   npx serve .
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8000/`.

---

## License

MIT License — Feel free to use and adapt for personal or commercial projects.
