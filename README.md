# Desi Chef — Your Personal Chef

An intelligent, full-stack Indian recipe discovery and home cooking platform. **Desi Chef** acts as your personal kitchen assistant, helping households eliminate daily cooking indecision and reduce domestic food waste by suggesting authentic Indian recipes based directly on the ingredients currently available in your kitchen pantry.

Built with **Python**, **Django 6.0+**, **Django REST Framework (DRF)**, **MySQL 8.0+** (with zero-config SQLite3 local fallback), and a responsive **HTML5/CSS3/ES6+ JavaScript** frontend.

---

## Key Highlights

- **512 Authentic Homestyle Recipes**: Comprehensive dataset spanning 10 regional Indian culinary categories (Breakfast, Biryani & Rice, Curries & Gravies, Street Food, Evening Snacks, Traditional Breads, Sweets & Desserts, Chutneys & Podis, Soups & Chai, and Seafood & Eggs).
- **Intelligent Ingredient Matching Engine**: Multi-lingual synonym resolution (Hindi, Telugu, Tamil, Punjabi) paired with negative lookahead exclusion filters to prevent false-positive matches (e.g., *Rice* vs. *Rice Flour*).
- **Dynamic Serving Calculator**: Real-time ingredient scaling ($1\times, 2\times, 4\times$) supporting mixed fractions, decimals, and metric units without cumulative rounding errors.
- **Timestamp Countdown Timers**: Step-by-step cooking instruction timers calculated from wall-clock timestamps to avoid browser background tab throttling and timer drift.
- **Personalized Kitchen Pantry**: Session-isolated, user-specific pantry persistence with bulk synchronization.
- **Favorites & Multi-Recipe Grocery Shopping Lists**: Bookmark saved dishes and generate aggregated shopping lists for missing ingredients.
- **Dual Database Architecture**: Fully configured for enterprise MySQL 8.0 with immediate fallback to SQLite3 for rapid local testing.

---

## Technology Stack

- **Backend**: Python 3.12+, Django 6.0+, Django REST Framework (DRF), `django-cors-headers`, `pymysql`
- **Database**: MySQL 8.0+ / SQLite3 (dual-engine ORM)
- **Frontend**: HTML5, CSS3, Vanilla ES6+ JavaScript, Bootstrap 5 UI elements
- **Authentication**: Django Session & Token Authentication with strict user-data isolation
- **Automated Testing**: Django TestCase suite (`tests/`) + QA verification script

---

## Project Structure

```text
ai-chef/
├── apps/
│   ├── accounts/          # User authentication, registration, session management
│   ├── recipes/           # Canonical recipe models, viewsets, and serving scaling engine
│   ├── ingredients/       # Master ingredients dictionary, regional synonyms, substitutions
│   ├── pantry/            # User-isolated pantry models, sync APIs
│   ├── recommendations/   # Core Indian culinary matching algorithm & scoring
│   ├── favorites/         # Recipe bookmarking and favorites management
│   └── shopping/          # Multi-recipe grocery shopping list generation
├── config/                # Django project settings, URL routing, WSGI/ASGI configurations
├── data/
│   ├── original/          # Initial JavaScript datasets (archived backup)
│   └── validated/         # Normalized JSON datasets (512 recipes, 10 categories, master ingredients)
├── docs/
│   ├── architecture/      # System architecture, data flow, and sequence diagrams
│   └── database/          # Database ER diagrams, schema documentation, and indexing strategy
├── static/                # Compiled static assets (CSS, images, icons, ES6+ JS)
├── templates/             # Django HTML templates (index.html with static bindings & CSRF)
├── tests/                 # Automated test suite (17 passing integration tests)
├── backup/                # Preserved v1 vanilla snapshots
├── manage.py              # Django management script
├── requirements.txt       # Python project dependencies
├── .env.example           # Environment configuration template
└── README.md
```

---

## Quickstart & Local Setup

### 1. Prerequisites
- Python 3.10+ (Recommended: Python 3.12)
- Node.js (optional, for running the dataset QA verification suite)
- Git

### 2. Clone Repository & Setup Environment
```bash
git clone https://github.com/Tharunteja9948/AI-CHEF.git
cd AI-CHEF

# Create and activate a Python virtual environment
python -m venv .venv

# On Windows (PowerShell):
.venv\Scripts\Activate.ps1
# On Linux / macOS:
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Database Configuration
By default, the platform runs on SQLite3 without requiring any external database server.

To switch to **MySQL 8.0**:
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Update database credentials in `.env`:
   ```env
   DB_ENGINE=mysql
   DB_NAME=ai_chef
   DB_USER=root
   DB_PASSWORD=your_password
   DB_HOST=127.0.0.1
   DB_PORT=3306
   ```

### 4. Apply Migrations & Seed Recipes
Apply the database migrations and seed all 512 authentic recipes, 10 categories, and 901 master ingredients:
```bash
# Apply migrations
python manage.py migrate

# Seed database with the validated 512-recipe collection
python manage.py seed_recipes
```

### 5. Run Development Server
```bash
python manage.py runserver 8000
```
Open your browser and navigate to `http://127.0.0.1:8000/`.

---

## RESTful API Endpoints

The Django backend exposes clean RESTful endpoints under `/api/v1/`:

| Endpoint | Method | Access | Description |
| :--- | :---: | :---: | :--- |
| `/api/v1/recipes/` | `GET` | Public | Paginated list of 512 recipes with search and category filtering |
| `/api/v1/recipes/{slug}/` | `GET` | Public | Complete recipe details, ingredients, and instructions |
| `/api/v1/recipes/{slug}/scale/?servings=4` | `GET` | Public | Dynamically scaled ingredient measurements |
| `/api/v1/recommendations/recommend/` | `POST` | Public | Core recommendation engine (payload: `{"ingredients": ["Rice", "Chicken"]}`) |
| `/api/v1/ingredients/` | `GET` | Public | Master ingredient dictionary and taxonomy |
| `/api/v1/auth/register/` | `POST` | Public | User account registration |
| `/api/v1/auth/login/` | `POST` | Public | User authentication login (Session & Cookie based) |
| `/api/v1/auth/logout/` | `POST` | Authenticated | Session logout |
| `/api/v1/auth/me/` | `GET` | Authenticated | Authenticated user profile and state |
| `/api/v1/pantry/` | `GET` | Authenticated | Fetch authenticated user's pantry inventory |
| `/api/v1/pantry/sync_session_pantry/` | `POST` | Authenticated | Sync client pantry selection into user account |
| `/api/v1/favorites/` | `GET` | Authenticated | Retrieve user's bookmarked favorite recipes |
| `/api/v1/favorites/toggle/` | `POST` | Authenticated | Toggle favorite bookmark by `recipe_uid` |
| `/api/v1/shopping/` | `GET` | Authenticated | User's active grocery shopping lists |
| `/api/v1/shopping/generate_from_recipes/` | `POST` | Authenticated | Generate aggregated shopping list from selected recipes |

---

## Testing & Quality Assurance

### Run Django Automated Test Suite
```bash
python manage.py test tests
```
*Executes 17 comprehensive unit & integration tests covering models, recommendation scoring, negative lookahead exclusion, serving scaling, user isolation, and DRF API endpoints.*

### Run Vanilla QA Verification Suite
```bash
node scratch/export_datasets.js
```
*Validates dataset schema integrity across all 512 recipes, 0 duplicate dish names, 0 broken image paths, and regex tokenizers.*

---

## License

This project is licensed under the MIT License.
