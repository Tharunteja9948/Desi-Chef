# 🇮🇳 DesiChef – Your Personal Chef
> **Your Ingredients. Your Kitchen. Endless Indian Flavours.**

**DesiChef** is an intelligent, full-stack Indian recipe discovery and cooking platform that helps users discover authentic Indian recipes based on ingredients available in their kitchen. It makes everyday cooking easier while helping reduce food waste and daily cooking indecision.

---

## ✨ Key Features
- 🥘 **512 Authentic Indian Recipes** – Explore 10 categories of traditional homestyle Indian dishes.
- 🧠 **Smart Ingredient Matching** – Discover recipes ranked by available ingredients and completeness.
- 🌐 **Regional Ingredient Recognition** – Supports Hindi, Telugu, Tamil, and Punjabi ingredient synonyms.
- 🔍 **Real-Time Autocomplete Search** – Fast instant search with match highlighting and category filters.
- 🍛 **Serving Calculator** – Dynamically scale ingredient quantities ($1\times, 2\times, 4\times$) without rounding errors.
- ⏱️ **Cooking Assistant** – Step-by-step directions with drift-free kitchen timers.
- 🧺 **Personal Kitchen Pantry** – Manage and persist available kitchen ingredients with user isolation.
- ❤️ **Favorites & Bookmarks** – Save your preferred recipes for quick access.
- 🛒 **Smart Shopping Lists** – Automatically generate aggregated grocery lists from selected recipes.
- 🔐 **User Authentication** – Secure session and token authentication for personalized accounts.

---

## 🛠️ Technology Stack
- **Backend**: Python, Django 6+, Django REST Framework (DRF)
- **Database**: MySQL 8+ (Production), SQLite3 (Local / Testing)
- **Frontend**: HTML5, CSS3, JavaScript ES6+, Bootstrap 5
- **Version Control**: Git, GitHub

---

## 🏗️ Project Architecture
The platform is built with a modular Django architecture separated into 7 dedicated applications:

```text
Accounts | Recipes | Ingredients | Pantry | Recommendations | Favorites | Shopping
```

---

## 🚀 Installation & Setup

```bash
# 1. Clone repository
git clone https://github.com/Tharunteja9948/Desi-Chef.git
cd Desi-Chef

# 2. Setup virtual environment
python -m venv venv

# Windows
venv\Scripts\activate
# Linux/macOS
source venv/bin/activate

# 3. Install dependencies
python -m pip install -r requirements.txt

# 4. Apply migrations and seed the 512 authentic recipes
python manage.py migrate
python manage.py seed_recipes

# 5. Run development server
python manage.py runserver
```

Open your browser at: **`http://127.0.0.1:8000/`**

---

## 🧪 Testing

```bash
# Verify system configuration
python manage.py check

# Run automated test suite (24 tests)
python manage.py test tests
```

---

## 👨‍💻 Developer

**Seddam Tarun Theja**  
- GitHub: [@Tharunteja9948](https://github.com/Tharunteja9948)  
- LinkedIn: [Profile](https://www.linkedin.com/in/seddam-tarun-theja-348341246/)

---

## 📜 License
This project is licensed under the MIT License.

<p align="center">
  <strong>DesiChef – Your Personal Chef. 🇮🇳</strong><br>
  <em>Discover. Cook. Enjoy.</em>
</p>
