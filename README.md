# 🇮🇳 DesiChef – Your Personal Chef
> **Your Ingredients. Your Kitchen. Endless Authentic Indian Flavours.**

**DesiChef** is an intelligent, production-optimized, full-stack Indian recipe discovery and cooking execution platform. It empowers home cooks, food lovers, and students to discover authentic Indian dishes based strictly on the ingredients available in their kitchen pantry, eliminating food waste and daily cooking indecision.

Built with Python 3.14, Django 6+, Django REST Framework (DRF), and WhiteNoise, DesiChef is designed for zero-config local development and cloud production deployment on Render with PostgreSQL.

---

## 📑 Table of Contents
- [✨ Key Features](#-key-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [🏗️ Project Architecture](#️-project-architecture)
- [🚀 Local Installation & Setup](#-local-installation--setup)
- [☁️ Production Deployment on Render](#️-production-deployment-on-render)
- [🔒 Environment Variables Reference](#-environment-variables-reference)
- [🧪 Automated Testing & Verification](#-automated-testing--verification)
- [📖 REST API Documentation](#-rest-api-documentation)
- [🔍 Recommendation Intelligence & Regional Synonyms](#-recommendation-intelligence--regional-synonyms)
- [❓ Troubleshooting](#-troubleshooting)
- [👨‍💻 Developer & License](#-developer--license)

---

## ✨ Key Features

- 🥘 **512 Authentic Indian Recipes across 10 Categories**:
  - *Breakfast*, *Biryani & Rice*, *Street Food*, *Curries & Gravies*, *Snacks*, *Traditional Breads*, *Mithai & Sweets*, *Pachallu & Chutneys*, *Soups & Drinks*, and *Sides, Eggs & Seafood*.
- 🧠 **High-Precision Ingredient Matching Engine**:
  - Deterministic algorithm calculating required vs. missing ingredients, match percentage, and readiness without arbitrary AI hallucinations.
- 🌐 **Deep Regional Ingredient Recognition**:
  - Controlled multi-lingual dictionary with Telugu, Tamil, Hindi, and Punjabi synonyms (e.g. *Bangaladumpa / Urulaikizhangu / Aloo*, *Kandi Pappu / Thuvaram Paruppu / Arhar Dal*, *Biyyam / Arisi / Chawal*).
- 🟢 **Verified Vegan & Dietary Intelligence**:
  - Strict classification distinguishing pure vegetarian dishes from verified vegan dishes (137 verified vegan recipes free of dairy, ghee, paneer, and milk).
- 🔍 **Real-Time Autocomplete Search**:
  - Prioritized prefix matching with instant feedback across dish names, categories, and regional ingredient synonyms.
- 🍛 **Drift-Free Serving Calculator**:
  - Single-pass fraction and metric portion scaler ($1\times, 2\times, 4\times$) preserving ingredient amounts without cumulative rounding errors.
- ⏱️ **Cooking Assistant & Kitchen Timers**:
  - Step-by-step interactive cooking directions with drift-free kitchen timers.
- 🧺 **Personal Kitchen Pantry**:
  - Live session pantry synchronization with bidirectional deselection reconciliation and strict user data isolation.
- ❤️ **Saved Recipes (Bookmarks)**:
  - Instant one-click favorite toggling for rapid retrieval.
- 🛒 **Automated Grocery Shopping Lists**:
  - One-click aggregation of missing recipe ingredients into an active grocery checklist, plus custom item support.
- 🛡️ **Hardened Enterprise Security**:
  - WhiteNoise static asset serving, CSRF protection, secure cookies, HTTPS redirection, environment variable isolation, and automated health checks (`/health/`).

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Backend Framework** | Python 3.14+, Django 6.1+, Django REST Framework 3.15+ |
| **WSGI / Web Server** | Gunicorn 22+, WhiteNoise 6.7+ |
| **Database** | PostgreSQL (Production / Render), SQLite3 (Local Development / Testing), MySQL compatible |
| **Frontend** | HTML5, CSS3 (Modern Responsive Flex/Grid System), JavaScript (ES6+ Native Fetch API) |
| **Authentication** | Django Session & Basic Authentication with object-level isolation |
| **Deployment Platform** | Render (Web Service + Managed PostgreSQL), Docker/Linux compatible |

---

## 🏗️ Project Architecture

DesiChef adheres to Django best practices with a clean modular separation of concerns across 7 core applications:

```text
Desi-Chef/
├── apps/
│   ├── accounts/         # User registration, authentication, and profile management
│   ├── recipes/          # Recipe models, category views, portion scaling, autocomplete
│   ├── ingredients/      # Master ingredients, regional synonyms, and substitutions
│   ├── pantry/           # User pantry persistence, sync, and isolation
│   ├── recommendations/  # Semantic matching engine, ranking algorithms, vegan validation
│   ├── favorites/        # Bookmarked and favorited recipes
│   └── shopping/         # Grocery list generator, item toggling, custom items
├── config/               # Project settings, WSGI/ASGI handlers, global URLs
├── data/
│   └── validated/        # Validated datasets: recipes_512.json, categories.json
├── static/               # CSS styles, images, chef logo, dish photos, JS controllers
├── templates/            # index.html, recipe_detail.html
├── tests/                # Comprehensive automated test suite (32 tests)
├── .env.example          # Sample environment configuration template
├── .gitignore            # Git exclusion rules
├── build.sh              # Render zero-downtime deployment build script
├── Procfile              # Gunicorn process definition
├── render.yaml           # Infrastructure-as-Code for Render Web Service & Database
├── requirements.txt      # Production runtime dependencies
├── runtime.txt           # Python runtime version declaration (3.14.6)
└── manage.py             # Administrative CLI
```

---

## 🚀 Local Installation & Setup

### Prerequisites
- Python 3.10+ (Python 3.14 recommended)
- Git installed on your system

### 1. Clone the Repository
```bash
git clone https://github.com/Tharunteja9948/Desi-Chef.git
cd Desi-Chef
```

### 2. Create and Activate Virtual Environment
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux / macOS
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies
```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

### 4. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
# Windows (PowerShell)
Copy-Item .env.example .env

# Linux / macOS
cp .env.example .env
```
*(By default, `.env` runs in SQLite mode with zero additional database setup required).*

### 5. Apply Migrations & Seed the 512 Recipes
```bash
python manage.py migrate
python manage.py seed_recipes
```

### 6. Run the Development Server
```bash
python manage.py runserver
```
Visit **`http://127.0.0.1:8000/`** in your browser.

---

## ☁️ Production Deployment on Render

DesiChef is pre-configured for one-click or manual deployment as a **Django Web Service** with a persistent **PostgreSQL Database** on Render.

### Option A: Blueprint Deployment (render.yaml)
1. Push your repository to your GitHub account.
2. In the [Render Dashboard](https://dashboard.render.com/), click **New** > **Blueprint**.
3. Connect your GitHub repository. Render will automatically detect `render.yaml` and provision:
   - A PostgreSQL database (`desi-chef-db`).
   - A Python Web Service (`desi-chef`) running `build.sh` and `gunicorn config.wsgi:application`.

### Option B: Manual Web Service Setup
1. **Create Managed Database**:
   - In Render, click **New** > **PostgreSQL**.
   - Name: `desi-chef-db`, Database: `desi_chef`.
   - Copy the **Internal Database URL**.
2. **Create Web Service**:
   - Click **New** > **Web Service**.
   - Build Command: `./build.sh`
   - Start Command: `gunicorn config.wsgi:application --bind 0.0.0.0:$PORT`
   - Health Check Path: `/health/`
3. **Configure Environment Variables**:
   - `DEBUG`: `False`
   - `SECRET_KEY`: *(Generate a secure random string)*
   - `DATABASE_URL`: *(Paste your Render PostgreSQL URL)*
   - `ALLOWED_HOSTS`: `127.0.0.1,localhost,.onrender.com`
   - `CSRF_TRUSTED_ORIGINS`: `https://your-service-name.onrender.com`
   - `SECURE_SSL_REDIRECT`: `True`
   - `SESSION_COOKIE_SECURE`: `True`
   - `CSRF_COOKIE_SECURE`: `True`

`build.sh` automatically runs `collectstatic`, `migrate`, and `seed_recipes` during deployment.

---

## 🔒 Environment Variables Reference

| Variable | Default (Local) | Recommended (Production) | Description |
|---|---|---|---|
| `SECRET_KEY` | Development fallback | 50+ character random string | Cryptographic signing key |
| `DEBUG` | `True` | `False` | Enables/disables debug mode |
| `ALLOWED_HOSTS` | `127.0.0.1,localhost,testserver` | `127.0.0.1,localhost,.onrender.com` | Comma-separated allowed hostnames |
| `DATABASE_URL` | *(None - uses SQLite)* | `postgresql://...` | Connection URI for PostgreSQL |
| `DB_ENGINE` | `sqlite3` | `postgresql` | Database engine selection |
| `CSRF_TRUSTED_ORIGINS` | `http://127.0.0.1:8000,http://localhost:8000` | `https://*.onrender.com` | Origins allowed for CSRF validation |
| `CORS_ALLOW_ALL_ORIGINS` | `True` | `False` | Restricts cross-origin requests |
| `SECURE_SSL_REDIRECT` | `False` | `True` | Redirects all HTTP traffic to HTTPS |
| `SESSION_COOKIE_SECURE`| `False` | `True` | Enforces HTTPS-only session cookies |
| `CSRF_COOKIE_SECURE`   | `False` | `True` | Enforces HTTPS-only CSRF cookies |

---

## 🧪 Automated Testing & Verification

DesiChef includes a comprehensive test suite covering database models, security checks, regional synonym matching, recommendation ranking, vegan verification, portion scaling, user isolation, and REST APIs.

```bash
# Run the complete automated test suite
python manage.py test tests -v 2

# Verify production readiness
python manage.py check --deploy
```

**Test Results Summary**:
- **32 / 32 Passed** (100% Pass Rate).
- Execution Time: ~21 seconds.
- System Checks: 0 issues identified.

---

## 📖 REST API Documentation

### Public Endpoints

#### Health Check
- `GET /health/` or `GET /api/v1/health/`
  - Returns service status and live database connectivity.
  ```json
  { "status": "ok", "service": "DesiChef", "database": "connected" }
  ```

#### Recipes
- `GET /api/v1/recipes/`
  - Query parameters: `category`, `subcategory`, `veg` (true/false), `dietary` (veg/nonveg/vegan), `max_time`, `search`, `page`, `page_size`.
- `GET /api/v1/recipes/{recipe_uid}/`
  - Returns complete recipe details including ingredients, measurements, and cooking instructions.
- `GET /api/v1/recipes/autocomplete/?q={query}`
  - Returns up to 10 instant suggestions prioritized by prefix match.
- `GET /api/v1/recipes/{recipe_uid}/scale/?servings={n}`
  - Returns portion-scaled ingredients dynamically calculated for `n` servings.

#### Recipe Recommendations
- `POST /api/v1/recommendations/` or `POST /api/v1/recommendations/recommend/`
  - Payload:
    ```json
    {
      "ingredients": ["Rice", "Tomatoes", "Onions"],
      "dietary": "veg",
      "max_time": 30,
      "limit": 24
    }
    ```
  - Returns ranked recipes with `match_percent`, `user_matched_count`, `matched_ingredients`, and `missing_ingredients`.
- `GET /api/v1/recommendations/?ingredients=Rice,Eggs&dietary=nonveg`
  - Convenience GET endpoint for rapid URL querying.

### Authenticated Endpoints (Requires User Session)

#### User Pantry
- `GET /api/v1/pantry/` – Lists current user's pantry items.
- `POST /api/v1/pantry/sync_session_pantry/` – Bidirectional synchronization with automatic removal of unselected items.
- `DELETE /api/v1/pantry/clear_all/` – Clears user pantry.

#### Saved Recipes (Favorites)
- `GET /api/v1/favorites/` – Lists bookmarked recipes.
- `POST /api/v1/favorites/toggle/` – Toggles favorite status (`{"recipe_uid": "classic-idli"}`).

#### Grocery Shopping List
- `GET /api/v1/shopping/` – Retrieves active shopping list and items.
- `POST /api/v1/shopping/generate_from_recipes/` – Aggregates missing ingredients from dishes.
- `POST /api/v1/shopping/add_custom_item/` – Adds custom grocery item (`{"ingredient_name": "Mustard Oil 500ml"}`).
- `POST /api/v1/shopping/{list_id}/items/{item_id}/toggle/` – Toggles purchased status.

---

## 🔍 Recommendation Intelligence & Regional Synonyms

DesiChef's recommendation engine solves key linguistic and culinary challenges in Indian cooking:

1. **Multi-lingual Synonyms**:
   - **Telugu**: *Bangaladumpa* (Potato), *Ullipaya* (Onion), *Allam* (Ginger), *Vellulli* (Garlic), *Kandi Pappu* (Toor Dal), *Pasupu* (Turmeric), *Biyyam* (Rice), *Neyyi* (Ghee).
   - **Tamil**: *Urulaikizhangu* (Potato), *Vengayam* (Onion), *Inji* (Ginger), *Poondu* (Garlic), *Thuvaram Paruppu* (Toor Dal), *Manjal* (Turmeric), *Arisi* (Rice), *Nei* (Ghee).
   - **Hindi / Punjabi**: *Aloo*, *Pyaz*, *Adrak*, *Lahsun / Lassan*, *Arhar Dal*, *Haldi*, *Chawal*, *Kadi Patta*.
2. **Culinary Boundary Enforcement**:
   - *Rice* never matches *Rice Flour*, *Rice Bran Oil*, or *Poha*.
   - *Eggs* never match *Eggplant (Baingan)* or *Deggi Mirch*.
   - *Potatoes* never match *Sweet Potato (Shakarkandi)*.
   - *Mustard Seeds* never match *Mustard Oil*.
3. **Verified Vegan Filtering**:
   - 137 verified vegan recipes are identified by evaluating each ingredient against a strict exclusion list of dairy (ghee, butter, milk, paneer, curd, cream, malai, cheese, khoya) and animal products.

---

## ❓ Troubleshooting

### Port 8000 is already in use
```bash
python manage.py runserver 8080
```

### Static files not appearing in production
Ensure `collectstatic` was run:
```bash
python manage.py collectstatic --no-input
```
Verify that `whitenoise.middleware.WhiteNoiseMiddleware` is present in `config/settings.py` immediately after `SecurityMiddleware`.

### PostgreSQL connection issues
Ensure `DATABASE_URL` is correctly formatted:
```text
postgresql://username:password@hostname:5432/database_name
```

---

## 👨‍💻 Developer & License

**Seddam Tarun Theja**  
- GitHub: [@Tharunteja9948](https://github.com/Tharunteja9948)  
- LinkedIn: [Seddam Tarun Theja](https://www.linkedin.com/in/seddam-tarun-theja-348341246/)

**License**: Distributed under the MIT License.

<p align="center">
  <strong>DesiChef – Your Personal Chef. 🇮🇳</strong><br>
  <em>Discover. Cook. Enjoy.</em>
</p>
