// Section 11, 12, 13: Salads, Raitas, Sundals, Eggs & Seafood (60 recipes)
const SIDES_EGGS_SEAFOOD_RECIPES = [
  {
    "id": "kachumber",
    "name": "Dhaba Style Kachumber Salad",
    "subCategory": "salad",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/kachumber.jpg",
    "description": "Crisp, crunchy homestyle Indian salad tossed with finely diced cucumbers, red onions, tomatoes, fresh green chillies, lemon juice, and chaat masala.",
    "ingredients": [
      {
        "name": "Cucumbers",
        "amount": "2 crisp (peeled & finely diced)"
      },
      {
        "name": "Red Onion",
        "amount": "1 large (finely diced)"
      },
      {
        "name": "Ripe Firm Tomatoes",
        "amount": "2 (deseeded & diced)"
      },
      {
        "name": "Green Chillies",
        "amount": "1-2 (minced fine)"
      },
      {
        "name": "Fresh Coriander Leaves",
        "amount": "1/4 cup (chopped)"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "2 tbsp"
      },
      {
        "name": "Chaat Masala & Kala Namak",
        "amount": "1 tsp & 1/2 tsp"
      }
    ],
    "steps": [
      "Dice peeled cucumbers, red onions, and deseeded firm tomatoes into uniform 4mm tiny cubes.",
      "In a wide glass mixing bowl, toss the diced vegetables with minced green chillies and fresh coriander.",
      "In a small cup, whisk fresh lemon juice with chaat masala, black salt (kala namak), and roasted cumin powder.",
      "Pour dressing over vegetables right before serving to keep salad crisp.",
      "Toss lightly with salad spoons and serve chilled."
    ]
  },
  {
    "id": "boondi-raita",
    "name": "Crispy Tadka Boondi Raita",
    "subCategory": "salad",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/boondi-raita.jpg",
    "description": "Cooling spiced yogurt bowl crowned with crunchy chickpea pearls (boondi), roasted cumin, Kashmiri red chilli powder, and fresh mint.",
    "ingredients": [
      {
        "name": "Fresh Whisked Curd (Dahi)",
        "amount": "2 cups (cold & smooth)"
      },
      {
        "name": "Salted Crisp Boondi",
        "amount": "1 cup"
      },
      {
        "name": "Roasted Cumin Powder (Bhuna Jeera)",
        "amount": "1 tsp"
      },
      {
        "name": "Kala Namak (Black Salt)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Kashmiri Red Chilli Powder",
        "amount": "1/2 tsp"
      },
      {
        "name": "Fresh Mint Leaves",
        "amount": "2 tbsp (finely chopped)"
      }
    ],
    "steps": [
      "Soak half of the boondi in warm water for 2 minutes and gently squeeze out excess water; reserve the other half dry for crisp topping.",
      "Whisk cold fresh curd with black salt, regular salt, pinch of sugar, and cold water until silky smooth and pourable.",
      "Fold softened boondi and chopped fresh mint into the whisked curd.",
      "Dust top with roasted cumin powder, red chilli powder, and chaat masala.",
      "Top with reserved crunchy dry boondi right before serving."
    ]
  },
  {
    "id": "cucumber-raita",
    "name": "Pudina Kheera (Cucumber) Raita",
    "subCategory": "salad",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/cucumber-raita.jpg",
    "description": "Hydrating, refreshing raita made with freshly grated tender cucumber, thick whisked yogurt, crushed roasted cumin, and garden mint.",
    "ingredients": [
      {
        "name": "Fresh Cucumbers",
        "amount": "2 (grated & excess juice squeezed)"
      },
      {
        "name": "Thick Fresh Curd",
        "amount": "2 cups"
      },
      {
        "name": "Fresh Mint Leaves",
        "amount": "2 tbsp (crushed)"
      },
      {
        "name": "Roasted Cumin Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Green Chilli",
        "amount": "1/2 (minced tiny)"
      },
      {
        "name": "Black Salt & Sea Salt",
        "amount": "to taste"
      }
    ],
    "steps": [
      "Grate cucumbers; press lightly in your palms to squeeze out half the water.",
      "Whisk thick fresh yogurt until velvety; mix in grated cucumber, crushed mint, minced green chilli, roasted cumin powder, and black salt.",
      "Chill in refrigerator for 20 minutes.",
      "Garnish with a sprig of fresh mint and roasted cumin."
    ]
  },
  {
    "id": "sprouted-moong-salad",
    "name": "Khamang Sprouted Moong Salad",
    "subCategory": "salad",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/sprouted-moong-salad.jpg",
    "description": "Crunchy Ayurvedic protein salad made with home-sprouted green moong beans, grated coconut, pomegranate pearls, and lemon-mustard tempering.",
    "ingredients": [
      {
        "name": "Sprouted Green Moong",
        "amount": "2 cups (fresh crisp sprouts)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1/4 cup"
      },
      {
        "name": "Pomegranate Pearls",
        "amount": "1/4 cup"
      },
      {
        "name": "Carrot & Cucumber",
        "amount": "1/2 cup each (finely diced)"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "2 tbsp"
      },
      {
        "name": "Mustard Seeds & Curry Leaves",
        "amount": "1 tsp & 1 sprig (for tadka)"
      }
    ],
    "steps": [
      "Toss fresh moong sprouts with diced carrot, cucumber, fresh coconut, and ruby pomegranate pearls.",
      "Season with rock salt, green chillies, and freshly squeezed lemon juice.",
      "Heat 1 tsp oil in a tadka ladle; crackle mustard seeds, a pinch of hing, and curry leaves.",
      "Pour hot tadka over the salad, toss gently, and serve."
    ]
  },
  {
    "id": "chana-sundal",
    "name": "Temple Style Chana Sundal",
    "subCategory": "salad",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/chana-sundal.jpg",
    "description": "Traditional Navratri temple prasadam: tender boiled white chickpeas tossed in coconut oil with crackling mustard seeds, curry leaves, hing, and fresh coconut.",
    "ingredients": [
      {
        "name": "White Chickpeas (Kabuli Chana)",
        "amount": "2 cups (soaked overnight & boiled soft)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1/3 cup"
      },
      {
        "name": "Mustard Seeds & Urad Dal",
        "amount": "1 tsp each"
      },
      {
        "name": "Dry Red Chillies & Green Chilli",
        "amount": "2 red + 1 slit green"
      },
      {
        "name": "Compounded Hing (Asafoetida)",
        "amount": "1/4 tsp (generous)"
      },
      {
        "name": "Coconut Oil",
        "amount": "1.5 tbsp"
      }
    ],
    "steps": [
      "Boil soaked chickpeas with salt until tender but holding shape.",
      "Heat pure coconut oil in a pan; crackle mustard seeds, urad dal, broken dry red chillies, slit green chilli, and fresh curry leaves.",
      "Add generous hing; dump in boiled chickpeas and toss on medium-high flame for 2-3 minutes.",
      "Turn off heat; fold in generous heaps of freshly grated coconut."
    ]
  },
  {
    "id": "burani-raita",
    "name": "Hyderabadi Shahi Burani Raita",
    "subCategory": "salad",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/boondi-raita.jpg",
    "description": "Silky, pungent royal Mughlai raita infused with finely grated raw garlic, roasted cumin, Kashmiri red chilli, and thick hung curd.",
    "ingredients": [
      {
        "name": "Thick Fresh Yogurt (Hung Curd)",
        "amount": "2 cups"
      },
      {
        "name": "Garlic Cloves",
        "amount": "4 (finely grated on microplane)"
      },
      {
        "name": "Roasted Cumin Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Kashmiri Red Chilli Powder",
        "amount": "1/2 tsp"
      },
      {
        "name": "Black Salt & Sea Salt",
        "amount": "1/2 tsp each"
      }
    ],
    "steps": [
      "Whisk cold hung curd with sea salt and black salt until silky and glossy.",
      "Stir in microplaned raw garlic cloves.",
      "Dust top with roasted cumin powder and vibrant Kashmiri red chilli powder.",
      "Chill for 30 minutes before serving with Dum Biryani or rich kebabs."
    ]
  },
  {
    "id": "khamang-kakdi",
    "name": "Maharashtrian Khamang Kakdi",
    "subCategory": "salad",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/kachumber.jpg",
    "description": "Crunchy Maharashtrian cucumber salad tossed with coarse roasted peanuts, fresh coconut, green chillies, lemon juice, and mustard tadka.",
    "ingredients": [
      {
        "name": "Cucumbers",
        "amount": "2 (peeled & finely chopped)"
      },
      {
        "name": "Roasted Peanuts",
        "amount": "1/3 cup (coarsely crushed)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "3 tbsp"
      },
      {
        "name": "Green Chillies & Coriander",
        "amount": "1 chilli & 2 tbsp"
      },
      {
        "name": "Fresh Lemon Juice & Sugar",
        "amount": "1 tbsp & 1/2 tsp"
      },
      {
        "name": "Oil & Mustard Tadka",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Toss finely chopped cucumber with crushed roasted peanuts, fresh grated coconut, and chopped coriander.",
      "Whisk lemon juice with sugar, salt, and minced green chilli.",
      "Heat 1 tsp oil, crackle mustard seeds, and pour sizzling over cucumber.",
      "Toss right before serving to maintain crunch."
    ]
  },
  {
    "id": "beetroot-pachadi",
    "name": "Kerala Sadya Beetroot Pachadi",
    "subCategory": "salad",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/cucumber-raita.jpg",
    "description": "Vibrant magenta Kerala festival dish made with cooked grated beetroot, freshly ground coconut-mustard paste, and sour curd.",
    "ingredients": [
      {
        "name": "Beetroot",
        "amount": "1 large (finely grated)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1/2 cup"
      },
      {
        "name": "Mustard Seeds",
        "amount": "1 tsp"
      },
      {
        "name": "Green Chillies",
        "amount": "2"
      },
      {
        "name": "Sour Curd (Yogurt)",
        "amount": "1 cup (whisked)"
      },
      {
        "name": "Coconut Oil",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Cook grated beetroot with 1/4 cup water, turmeric, and salt for 6 minutes until tender.",
      "Grind fresh coconut with green chillies, cumin seeds, and 1/2 tsp raw mustard seeds into a smooth thick paste.",
      "Add coconut paste to cooked beetroot; simmer 2 minutes; cool slightly and fold in whisked curd.",
      "Temper with mustard seeds, dry red chillies, and curry leaves in hot coconut oil."
    ]
  },
  {
    "id": "carrot-kosambari",
    "name": "Karnataka Carrot Kosambari",
    "subCategory": "salad",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/sprouted-moong-salad.jpg",
    "description": "Refreshing Karnataka festival salad made with soaked split yellow moong dal, grated carrots, fresh coconut, and lemon-mustard popu.",
    "ingredients": [
      {
        "name": "Yellow Moong Dal",
        "amount": "1/4 cup (soaked in water 1 hr & drained)"
      },
      {
        "name": "Carrots",
        "amount": "2 medium (finely grated)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "3 tbsp"
      },
      {
        "name": "Green Chilli & Ginger",
        "amount": "1 chilli & 1/2 tsp (minced)"
      },
      {
        "name": "Fresh Lemon Juice & Coriander",
        "amount": "1 tbsp & 2 tbsp"
      },
      {
        "name": "Coconut Oil & Mustard Seeds",
        "amount": "1 tsp each"
      }
    ],
    "steps": [
      "Combine drained soaked moong dal with grated carrots and fresh coconut in a bowl.",
      "Add minced green chillies, ginger, and fresh coriander.",
      "Temper mustard seeds, hing, and curry leaves in hot coconut oil; pour over salad.",
      "Drizzle fresh lemon juice and salt right before serving."
    ]
  },
  {
    "id": "onion-tomato-raita",
    "name": "Classic Onion Tomato Raita",
    "subCategory": "salad",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/cucumber-raita.jpg",
    "description": "The quintessential Indian restaurant raita: diced onions, tomatoes, and green chillies in chilled spiced creamy curd.",
    "ingredients": [
      {
        "name": "Red Onion",
        "amount": "1 medium (finely chopped)"
      },
      {
        "name": "Tomato",
        "amount": "1 medium (deseeded & finely chopped)"
      },
      {
        "name": "Fresh Curd",
        "amount": "2 cups (whisked)"
      },
      {
        "name": "Green Chilli & Coriander",
        "amount": "1 chilli & 2 tbsp"
      },
      {
        "name": "Roasted Cumin & Black Salt",
        "amount": "1/2 tsp each"
      }
    ],
    "steps": [
      "Whisk curd with a splash of milk or water, black salt, and regular salt until smooth.",
      "Fold in chopped onion, deseeded tomato, green chilli, and fresh coriander.",
      "Sprinkle roasted cumin powder on top; serve chilled with biryani."
    ]
  },
  {
    "id": "peanut-sundal",
    "name": "Verkadalai (Peanut) Sundal",
    "subCategory": "salad",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/chana-sundal.jpg",
    "description": "Nutty, wholesome South Indian festival snack made with boiled raw peanuts tempered with mustard, red chillies, and fresh coconut.",
    "ingredients": [
      {
        "name": "Raw Groundnuts / Peanuts",
        "amount": "2 cups (boiled with salt until tender)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1/4 cup"
      },
      {
        "name": "Mustard Seeds & Hing",
        "amount": "1 tsp & 1/4 tsp"
      },
      {
        "name": "Dry Red Chillies & Curry Leaves",
        "amount": "2 chillies & 1 sprig"
      },
      {
        "name": "Coconut Oil",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Pressure cook raw peanuts with salt and water for 3 whistles until soft and cooked through; drain.",
      "Heat coconut oil; crackle mustard seeds, hing, broken dry red chillies, and fresh curry leaves.",
      "Add boiled peanuts; toss on medium heat for 2 minutes.",
      "Stir in fresh grated coconut and serve warm."
    ]
  },
  {
    "id": "corn-sundal",
    "name": "Sweet Corn Sundal",
    "subCategory": "salad",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/chana-sundal.jpg",
    "description": "Juicy, colorful South Indian snack made with tender steamed sweet corn kernels, grated coconut, green chillies, and mustard popu.",
    "ingredients": [
      {
        "name": "Sweet Corn Kernels",
        "amount": "2 cups (steamed tender)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "3 tbsp"
      },
      {
        "name": "Green Chillies & Ginger",
        "amount": "1 chilli & 1/2 inch (minced)"
      },
      {
        "name": "Mustard Seeds, Urad Dal & Curry Leaves",
        "amount": "for tadka"
      },
      {
        "name": "Lemon Juice",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Steam sweet corn kernels with a pinch of salt until plump and juicy.",
      "Heat oil in a pan; crackle mustard seeds, urad dal, curry leaves, minced ginger, and green chillies.",
      "Toss steamed sweet corn on high flame for 2 minutes.",
      "Turn off flame; fold in fresh coconut and lemon juice."
    ]
  },
  {
    "id": "vellarikka-kichadi",
    "name": "Kerala Vellarikka (Cucumber) Kichadi",
    "subCategory": "salad",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/cucumber-raita.jpg",
    "description": "Traditional Onam Sadya dish made with yellow cucumber cooked with turmeric, folded in ground coconut-mustard paste and fresh curd.",
    "ingredients": [
      {
        "name": "Yellow Cucumber (Vellarikka)",
        "amount": "1.5 cups (finely diced)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1/2 cup"
      },
      {
        "name": "Mustard Seeds",
        "amount": "1 tsp (half ground raw)"
      },
      {
        "name": "Green Chillies",
        "amount": "2"
      },
      {
        "name": "Thick Curd",
        "amount": "1 cup"
      },
      {
        "name": "Coconut Oil",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Cook diced yellow cucumber with 1/4 cup water, turmeric, and salt for 5 minutes until soft.",
      "Grind fresh coconut, green chillies, and 1/2 tsp mustard seeds into a thick paste.",
      "Stir coconut paste into cooked cucumber; simmer for 2 minutes and turn off heat.",
      "Fold in thick whisked curd; temper with mustard seeds and curry leaves in hot coconut oil."
    ]
  },
  {
    "id": "pineapple-raita",
    "name": "Shahi Pineapple Raita",
    "subCategory": "salad",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/boondi-raita.jpg",
    "description": "Sweet and tangy royal yogurt bowl made with simmered caramelized pineapple chunks, roasted cumin, and black salt.",
    "ingredients": [
      {
        "name": "Fresh Pineapple",
        "amount": "1.5 cups (finely chopped)"
      },
      {
        "name": "Sugar / Honey",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Thick Fresh Curd",
        "amount": "2 cups (cold)"
      },
      {
        "name": "Roasted Cumin & Black Salt",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Pomegranate Seeds",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Simmer chopped pineapple cubes with sugar and 2 tbsp water in a pan for 5 minutes until juicy and tender; cool completely.",
      "Whisk cold thick curd with black salt and roasted cumin powder until smooth.",
      "Fold in the cooked sweet pineapple chunks.",
      "Garnish with ruby pomegranate seeds; serve chilled."
    ]
  },
  {
    "id": "lauki-raita",
    "name": "Doodhi (Lauki) Raita",
    "subCategory": "salad",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/cucumber-raita.jpg",
    "description": "Cooling Ayurvedic summer raita made with steamed grated bottle gourd folded into spiced curd with roasted cumin and mint.",
    "ingredients": [
      {
        "name": "Bottle Gourd (Lauki)",
        "amount": "1.5 cups (peeled & grated)"
      },
      {
        "name": "Fresh Curd",
        "amount": "2 cups (whisked)"
      },
      {
        "name": "Roasted Cumin Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Green Chilli & Mint",
        "amount": "1 chilli & 1 tbsp"
      },
      {
        "name": "Black Salt & Sea Salt",
        "amount": "to taste"
      }
    ],
    "steps": [
      "Steam or boil grated lauki for 4 minutes until tender; drain completely and press out excess moisture; cool.",
      "Whisk cold fresh curd with black salt, roasted cumin powder, and minced green chilli.",
      "Fold in cooked lauki and fresh mint.",
      "Chill and serve with hot stuffed parathas."
    ]
  },
  {
    "id": "papaya-sambharo",
    "name": "Gujarati Raw Papaya Sambharo",
    "subCategory": "salad",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/kachumber.jpg",
    "description": "Crunchy warm Gujarati salad made with shredded raw green papaya stir-fried in oil with mustard seeds, turmeric, and green chillies.",
    "ingredients": [
      {
        "name": "Raw Green Papaya",
        "amount": "2 cups (grated thick or julienned)"
      },
      {
        "name": "Green Chillies",
        "amount": "3 (slit lengthwise)"
      },
      {
        "name": "Mustard Seeds & Hing",
        "amount": "1 tsp & 1/4 tsp"
      },
      {
        "name": "Turmeric & Salt",
        "amount": "1/2 tsp & to taste"
      },
      {
        "name": "Oil & Lemon Juice",
        "amount": "1 tbsp & 1 tsp"
      }
    ],
    "steps": [
      "Heat oil in a kadai; crackle mustard seeds, hing, and slit green chillies until blistered.",
      "Add shredded raw papaya, turmeric powder, and salt.",
      "Toss on high flame for just 2-3 minutes (crucial: do not overcook so papaya retains its crunchy bite).",
      "Finish with a squeeze of fresh lemon juice; the classic accompaniment to Fafda and Gathiya."
    ]
  },
  {
    "id": "pomegranate-raita",
    "name": "Anar (Pomegranate) Raita",
    "subCategory": "salad",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/boondi-raita.jpg",
    "description": "Jewel-toned raita studded with ruby sweet pomegranate pearls in thick creamy curd with roasted cumin and chaat masala.",
    "ingredients": [
      {
        "name": "Fresh Pomegranate Pearls (Anar)",
        "amount": "1 cup"
      },
      {
        "name": "Thick Fresh Curd",
        "amount": "2 cups"
      },
      {
        "name": "Roasted Cumin Powder & Chaat Masala",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Black Salt & Mint",
        "amount": "1/2 tsp & 1 tbsp"
      }
    ],
    "steps": [
      "Whisk thick cold curd with black salt, a pinch of sugar, and roasted cumin powder.",
      "Fold in crisp, sweet pomegranate seeds and fresh mint.",
      "Serve chilled with rich biryanis and pulaos."
    ]
  },
  {
    "id": "sprout-chaat-salad",
    "name": "Street Style Sprout Chaat",
    "subCategory": "salad",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/sprouted-moong-salad.jpg",
    "description": "Zesty street-cart salad made with mixed steamed sprouts, boiled potato cubes, diced onions, sweet tamarind and green chutneys.",
    "ingredients": [
      {
        "name": "Mixed Sprouts (Moong, Chana, Matki)",
        "amount": "2 cups (steamed 3 mins)"
      },
      {
        "name": "Boiled Potato & Onion",
        "amount": "1 small each (diced)"
      },
      {
        "name": "Green Chutney & Tamarind Chutney",
        "amount": "1.5 tbsp each"
      },
      {
        "name": "Chaat Masala & Lemon Juice",
        "amount": "1 tsp & 1 tbsp"
      },
      {
        "name": "Nylon Sev",
        "amount": "2 tbsp (for topping)"
      }
    ],
    "steps": [
      "In a mixing bowl, combine warm steamed mixed sprouts with diced boiled potato and chopped onion.",
      "Add green mint chutney, sweet tamarind chutney, chaat masala, and lemon juice.",
      "Toss thoroughly until evenly coated.",
      "Garnish with nylon sev and fresh coriander; serve immediately."
    ]
  },
  {
    "id": "kala-chana-salad",
    "name": "Chatpata Kala Chana Salad",
    "subCategory": "salad",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/chana-sundal.jpg",
    "description": "Tangy high-fiber salad made with boiled black chickpeas, crunchy cucumbers, onions, green chillies, amchur, and lemon juice.",
    "ingredients": [
      {
        "name": "Boiled Black Chickpeas (Kala Chana)",
        "amount": "2 cups"
      },
      {
        "name": "Onion, Tomato & Cucumber",
        "amount": "1/2 cup each (finely diced)"
      },
      {
        "name": "Green Chilli & Fresh Mint",
        "amount": "1 chilli & 2 tbsp"
      },
      {
        "name": "Amchur (Dry Mango Powder)",
        "amount": "1 tsp"
      },
      {
        "name": "Roasted Cumin & Black Salt",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Combine boiled kala chana with diced onion, tomato, and cucumber in a bowl.",
      "Add green chillies, mint, amchur, roasted cumin, black salt, and sea salt.",
      "Pour fresh lemon juice; toss well and serve as a wholesome gym snack."
    ]
  },
  {
    "id": "cabbage-poriyal",
    "name": "South Indian Cabbage Poriyal",
    "subCategory": "salad",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/chana-sundal.jpg",
    "description": "Warm, light South Indian cabbage stir-fry tossed with crackling mustard seeds, split urad dal, green chillies, and freshly grated coconut.",
    "ingredients": [
      {
        "name": "Cabbage",
        "amount": "3 cups (finely shredded)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1/4 cup"
      },
      {
        "name": "Mustard Seeds & Urad Dal",
        "amount": "1 tsp each"
      },
      {
        "name": "Green Chillies & Curry Leaves",
        "amount": "2 chillies & 1 sprig"
      },
      {
        "name": "Coconut Oil",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Heat coconut oil; crackle mustard seeds, urad dal, green chillies, and curry leaves.",
      "Add finely shredded cabbage, turmeric powder, and salt.",
      "Cover and steam on low flame for 5 minutes until tender-crisp (do not overcook into mush).",
      "Stir in freshly grated coconut; toss well and serve."
    ]
  },
  {
    "id": "egg-bhurji",
    "name": "Mumbai Street Style Egg Bhurji",
    "subCategory": "egg",
    "prepTime": 15,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/egg-bhurji.jpg",
    "description": "Fiery Mumbai street cart scrambled eggs loaded with finely diced caramelized onions, tomatoes, green chillies, pav bhaji masala, and abundant butter.",
    "ingredients": [
      {
        "name": "Fresh Eggs",
        "amount": "4 large (cracked into bowl)"
      },
      {
        "name": "Red Onions",
        "amount": "2 large (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 ripe (finely chopped)"
      },
      {
        "name": "Green Chillies",
        "amount": "3-4 (finely minced)"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "1 tbsp"
      },
      {
        "name": "Pav Bhaji Masala & Turmeric",
        "amount": "1 tsp & 1/2 tsp"
      },
      {
        "name": "Salted Butter & Oil",
        "amount": "2 tbsp butter + 1 tbsp oil"
      },
      {
        "name": "Fresh Coriander",
        "amount": "1/4 cup (chopped)"
      }
    ],
    "steps": [
      "Heat butter and oil on a large cast iron tawa or skillet on high flame; add finely chopped onions and sauté until golden.",
      "Add minced green chillies and ginger garlic paste; sauté for 1 minute.",
      "Add chopped tomatoes, turmeric, pav bhaji masala, red chilli powder, and salt; bhunno until tomatoes break down and butter releases.",
      "Pour beaten eggs directly onto sizzling tomato-onion masala.",
      "Scramble aggressively on medium flame for 2-3 minutes, breaking into soft, juicy curds.",
      "Turn off flame while curds are still moist; fold in fresh coriander and lime juice; serve with butter-toasted ladi pav."
    ]
  },
  {
    "id": "masala-omelette",
    "name": "Irani Cafe Masala Omelette",
    "subCategory": "egg",
    "prepTime": 10,
    "servings": 1,
    "veg": false,
    "image": "images/dishes/masala-omelette.jpg",
    "description": "Crispy-edged, fluffy spiced Indian omelette studded with finely chopped red onions, green chillies, fresh coriander, and turmeric.",
    "ingredients": [
      {
        "name": "Eggs",
        "amount": "2 large"
      },
      {
        "name": "Onion",
        "amount": "1/2 small (finely diced)"
      },
      {
        "name": "Green Chilli",
        "amount": "1-2 (minced)"
      },
      {
        "name": "Fresh Coriander",
        "amount": "2 tbsp"
      },
      {
        "name": "Turmeric & Red Chilli Powder",
        "amount": "1/4 tsp each"
      },
      {
        "name": "Butter / Oil",
        "amount": "1.5 tbsp"
      }
    ],
    "steps": [
      "In a bowl, beat eggs with a fork for 1 full minute until frothy.",
      "Whisk in diced onion, green chillies, coriander, turmeric, red chilli powder, and salt.",
      "Heat butter in a frying pan on medium-high flame until foaming.",
      "Pour egg mixture; tilt pan so it spreads into a wide circular disc.",
      "As edges set and turn golden-crisp, gently lift edges to let raw egg run underneath.",
      "Flip once, cook for 30 seconds, fold in half, and slide onto plate with buttered toast."
    ]
  },
  {
    "id": "sides-chettinad-egg-roast",
    "name": "Chettinad Muttai (Egg) Roast",
    "subCategory": "egg",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chettinad-egg-roast.jpg",
    "description": "Fiery Tamil Nadu dry egg roast coated in caramelized shallots, freshly roasted fennel seeds, black peppercorns, and curry leaves.",
    "ingredients": [
      {
        "name": "Hard Boiled Eggs",
        "amount": "4 (shelled & slit lengthwise)"
      },
      {
        "name": "Shallots (Sambar Onions)",
        "amount": "15 (sliced thin)"
      },
      {
        "name": "Country Tomatoes",
        "amount": "2 (chopped)"
      },
      {
        "name": "Chettinad Pepper Masala (Fennel, Pepper, Cumin)",
        "amount": "1.5 tbsp (fresh ground)"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      },
      {
        "name": "Cold-Pressed Sesame Oil",
        "amount": "2.5 tbsp"
      }
    ],
    "steps": [
      "Slit boiled eggs lengthwise in 4 places.",
      "Heat sesame oil; fry slit eggs with turmeric, chilli powder, and salt for 2 minutes until outer skin blisters golden; remove.",
      "In the same oil, sauté sliced shallots and curry leaves on medium heat until caramelized brown.",
      "Add ginger garlic paste and tomatoes; cook down into thick masala paste.",
      "Stir in freshly ground Chettinad pepper-fennel masala.",
      "Toss blistered eggs into masala until heavily coated; serve with parotta or steamed rice."
    ]
  },
  {
    "id": "sides-dim-kosha",
    "name": "Kolkata Dim Kosha",
    "subCategory": "egg",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/dim-kosha.jpg",
    "description": "Classic Bengali celebration egg dish: fried hard-boiled duck or chicken eggs simmered in a dark, rich, caramelized onion and ginger gravy.",
    "ingredients": [
      {
        "name": "Hard Boiled Eggs",
        "amount": "4 (pricked with fork)"
      },
      {
        "name": "Baby Potatoes",
        "amount": "4 (boiled & peeled)"
      },
      {
        "name": "Onion Paste",
        "amount": "1/2 cup (fried till deep brown)"
      },
      {
        "name": "Ginger & Garlic Paste",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Kashmiri Chilli & Shahi Garam Masala",
        "amount": "1 tbsp & 1/2 tsp"
      },
      {
        "name": "Mustard Oil",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Rub boiled eggs and potatoes with turmeric and salt; fry in smoking hot mustard oil until crinkled; set aside.",
      "In same oil, temper with bay leaf, whole cardamoms, and cloves.",
      "Add onion paste and sauté until oil separates and color turns deep mahogany.",
      "Add ginger-garlic paste, tomato puree, turmeric, Kashmiri chilli powder, and cumin powder; bhunno for 6 minutes.",
      "Slide in fried eggs and potatoes with 3/4 cup warm water; simmer covered for 8 minutes until gravy clings thick and glossy.",
      "Finish with shahi garam masala and pure ghee; serve with luchi."
    ]
  },
  {
    "id": "kerala-egg-curry",
    "name": "Nadan Mutta (Egg) Roast",
    "subCategory": "egg",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/egg-curry.jpg",
    "description": "Kerala breakfast staple: halved hard-boiled eggs smothered in deeply caramelized sliced onions, green chillies, fennel, and coconut oil.",
    "ingredients": [
      {
        "name": "Hard Boiled Eggs",
        "amount": "4 (cut into halves)"
      },
      {
        "name": "Red Onions",
        "amount": "3 large (sliced paper thin)"
      },
      {
        "name": "Tomato",
        "amount": "1 large (chopped)"
      },
      {
        "name": "Fennel Powder (Perumjeerakam)",
        "amount": "1 tsp"
      },
      {
        "name": "Meat Masala & Black Pepper",
        "amount": "1 tsp & 1/2 tsp"
      },
      {
        "name": "Coconut Oil & Curry Leaves",
        "amount": "2 tbsp & 2 sprigs"
      }
    ],
    "steps": [
      "Heat coconut oil; sauté sliced onions and curry leaves on medium heat for 12 minutes until soft and caramelized.",
      "Add minced ginger, garlic, and slit green chillies; sauté 2 minutes.",
      "Add chopped tomato, coriander powder, chilli powder, turmeric, and fennel powder; cook until tomato turns mushy.",
      "Add 1/4 cup water to create a thick, glossy masala paste.",
      "Place egg halves face down into simmering masala; spoon rich gravy over whites; simmer 3 minutes.",
      "Serve with fluffy appams or idiyappam."
    ]
  },
  {
    "id": "dhaba-anda-curry",
    "name": "Highway Dhaba Anda Curry",
    "subCategory": "egg",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/egg-curry.jpg",
    "description": "Rustic highway dhaba curry with blistered deep-fried boiled eggs simmering in robust onion-tomato gravy with kasuri methi.",
    "ingredients": [
      {
        "name": "Boiled Eggs",
        "amount": "4 (pricked with toothpick)"
      },
      {
        "name": "Onions",
        "amount": "2 large (finely chopped)"
      },
      {
        "name": "Tomato Puree",
        "amount": "1 cup"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Kasuri Methi & Garam Masala",
        "amount": "1 tbsp & 1 tsp"
      },
      {
        "name": "Mustard Oil",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Prick boiled eggs; fry in hot mustard oil with turmeric and chilli powder until blistered and crisp; remove.",
      "In remaining oil, sauté chopped onions until golden-brown.",
      "Add ginger garlic paste and tomato puree; cook until oil separates.",
      "Add coriander powder, cumin, chilli, and 1 cup warm water; bring to a boil.",
      "Add fried eggs; simmer covered for 8 minutes; finish with kasuri methi."
    ]
  },
  {
    "id": "egg-keema-pav",
    "name": "Street Style Egg Keema",
    "subCategory": "egg",
    "prepTime": 15,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/egg-bhurji.jpg",
    "description": "Boiled eggs grated into mince texture, cooked in rich Mughlai keema gravy with green peas, mint, and butter, served with buttered pav.",
    "ingredients": [
      {
        "name": "Hard Boiled Eggs",
        "amount": "4 (coarsely grated on box grater)"
      },
      {
        "name": "Raw Egg",
        "amount": "1 (for binding richness)"
      },
      {
        "name": "Onion & Tomato",
        "amount": "1 large each (finely minced)"
      },
      {
        "name": "Green Peas (Matar)",
        "amount": "1/4 cup"
      },
      {
        "name": "Pav Bhaji Masala & Garam Masala",
        "amount": "1 tsp & 1/2 tsp"
      },
      {
        "name": "Butter & Oil",
        "amount": "2 tbsp each"
      }
    ],
    "steps": [
      "Grate boiled eggs coarsely using the large holes of a box grater.",
      "Heat butter and oil; sauté minced onion until golden, add ginger garlic paste, green chillies, and tomatoes; cook until oil separates.",
      "Add green peas, pav bhaji masala, turmeric, chilli powder, and salt.",
      "Add grated eggs and 1/3 cup water; toss on medium heat for 3 minutes.",
      "Whisk in 1 raw egg into the center; stir vigorously to create a rich creamy texture.",
      "Garnish with coriander and serve with butter-toasted pav."
    ]
  },
  {
    "id": "parsi-akuri",
    "name": "Authentic Parsi Akuri",
    "subCategory": "egg",
    "prepTime": 10,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/egg-bhurji.jpg",
    "description": "Creamy, loose, custardy Parsi scrambled eggs spiced with mild green chillies, fresh coriander, ginger, and melted butter.",
    "ingredients": [
      {
        "name": "Fresh Farm Eggs",
        "amount": "4 (lightly beaten)"
      },
      {
        "name": "Onion",
        "amount": "1 small (finely diced)"
      },
      {
        "name": "Tomato",
        "amount": "1 small (finely chopped)"
      },
      {
        "name": "Green Chillies & Ginger",
        "amount": "2 chillies & 1 tsp (minced)"
      },
      {
        "name": "Fresh Coriander Leaves",
        "amount": "1/4 cup (generous)"
      },
      {
        "name": "Butter",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Melt butter in a pan on medium-low flame; sauté diced onion, green chillies, and ginger for 2 minutes until translucent.",
      "Add chopped tomatoes, turmeric, and salt; cook for 1 minute.",
      "Pour lightly beaten eggs into pan; reduce heat to lowest setting.",
      "Stir gently and continuously with a spatula, folding curds softly.",
      "Turn off heat while eggs are still loose and custardy.",
      "Fold in fresh coriander and serve with buttered pav."
    ]
  },
  {
    "id": "egg-ghee-roast",
    "name": "Kundapur Egg Ghee Roast",
    "subCategory": "egg",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chettinad-egg-roast.jpg",
    "description": "Mangalorean coastal specialty: hard-boiled eggs roasted in aromatic Byadagi red chilli and whole spice paste cooked in pure cow ghee.",
    "ingredients": [
      {
        "name": "Hard Boiled Eggs",
        "amount": "4 (pricked & halved)"
      },
      {
        "name": "Byadagi Red Chillies",
        "amount": "8 (soaked & ground to paste)"
      },
      {
        "name": "Whole Spices (Coriander, Cumin, Pepper, Fennel, Methi)",
        "amount": "roasted & ground"
      },
      {
        "name": "Tamarind Pulp & Jaggery",
        "amount": "1 tbsp & 1 tsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp (generous)"
      }
    ],
    "steps": [
      "Roast Byadagi chillies and whole spices; grind with garlic and tamarind into a smooth red paste.",
      "Heat pure ghee in a heavy kadai; add ground spice paste.",
      "Bhunno on low-medium flame for 10-12 minutes until ruby-red ghee floats to the surface.",
      "Stir in jaggery and salt.",
      "Add boiled egg halves; spoon glossy ghee roast masala over eggs; roast for 3 minutes.",
      "Serve hot with neer dosa."
    ]
  },
  {
    "id": "street-egg-dosa",
    "name": "Street Cart Egg Muttai Dosa",
    "subCategory": "egg",
    "prepTime": 10,
    "servings": 1,
    "veg": false,
    "image": "images/dishes/plain-dosa.jpg",
    "description": "Crispy golden South Indian fermented dosa cracked with an egg, seasoned with idli podi, onions, pepper, and roasted with ghee.",
    "ingredients": [
      {
        "name": "Fermented Dosa Batter",
        "amount": "1 cup"
      },
      {
        "name": "Fresh Egg",
        "amount": "1"
      },
      {
        "name": "Idli Milagai Podi (Gunpowder)",
        "amount": "1 tsp"
      },
      {
        "name": "Onion & Green Chilli",
        "amount": "1 tbsp each (finely minced)"
      },
      {
        "name": "Pure Cow Ghee / Oil",
        "amount": "1.5 tbsp"
      }
    ],
    "steps": [
      "Spread a ladle of dosa batter in concentric circles on a hot cast iron tawa.",
      "Crack an egg directly into center of wet batter.",
      "Spread egg evenly across surface of dosa with spatula.",
      "Sprinkle minced onions, green chillies, coriander, and a generous dusting of idli podi and black pepper.",
      "Drizzle ghee around perimeter; cook until bottom turns golden-brown and crispy.",
      "Flip once and roast for 45 seconds to cook egg through; serve with coconut chutney."
    ]
  },
  {
    "id": "egg-pepper-fry",
    "name": "South Indian Egg Pepper Fry",
    "subCategory": "egg",
    "prepTime": 15,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chettinad-egg-roast.jpg",
    "description": "Spicy, dry South Indian egg roast seasoned with freshly cracked black peppercorns, roasted cumin, and curry leaves.",
    "ingredients": [
      {
        "name": "Boiled Eggs",
        "amount": "4 (halved)"
      },
      {
        "name": "Onion",
        "amount": "1 large (sliced thin)"
      },
      {
        "name": "Black Peppercorns",
        "amount": "1.5 tbsp (freshly ground)"
      },
      {
        "name": "Cumin Seeds & Fennel",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      },
      {
        "name": "Sesame Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Heat sesame oil; crackle cumin, fennel, and fresh curry leaves.",
      "Sauté sliced onions until deep golden-brown.",
      "Add turmeric, salt, and freshly cracked black pepper powder; stir on low heat.",
      "Place boiled egg halves face down; roast for 2 minutes.",
      "Flip gently and coat with peppery onion masala; serve warm."
    ]
  },
  {
    "id": "hyderabadi-egg-korma",
    "name": "Shahi Hyderabadi Egg Korma",
    "subCategory": "egg",
    "prepTime": 25,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/egg-curry.jpg",
    "description": "Rich royal egg curry cooked in a creamy gravy of ground cashew nuts, whisked yogurt, fried onions, and saffron.",
    "ingredients": [
      {
        "name": "Boiled Eggs",
        "amount": "4 (pricked & fried golden)"
      },
      {
        "name": "Fried Onions (Birista)",
        "amount": "1/2 cup (ground with curd)"
      },
      {
        "name": "Cashew Nut Paste",
        "amount": "2 tbsp"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/2 cup"
      },
      {
        "name": "Shahi Garam Masala & Cardamom",
        "amount": "1 tsp & 3 pods"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Blend fried onions, cashew nuts, and fresh curd into a smooth korma paste.",
      "Heat ghee in a pot; add green cardamoms, cloves, and ginger-garlic paste; sauté for 1 minute.",
      "Pour in korma paste; cook on low heat stirring constantly until ghee separates.",
      "Add 1 cup water, salt, and fried boiled eggs; simmer covered for 8 minutes.",
      "Garnish with saffron milk and fresh coriander; serve with naan or biryani."
    ]
  },
  {
    "id": "anda-pakora",
    "name": "Crispy Anda (Egg) Pakora",
    "subCategory": "egg",
    "prepTime": 15,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/egg-pakora.jpg",
    "description": "Golden deep-fried snack made with seasoned hard-boiled egg halves dipped in spiced gram flour batter with ajwain.",
    "ingredients": [
      {
        "name": "Hard Boiled Eggs",
        "amount": "4 (halved lengthwise)"
      },
      {
        "name": "Chaat Masala & Red Chilli",
        "amount": "1 tsp each (dusted on egg yolks)"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1 cup"
      },
      {
        "name": "Rice Flour",
        "amount": "2 tbsp (for crunch)"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Dust cut faces of boiled egg halves with chaat masala, red chilli powder, and black salt.",
      "Whisk besan, rice flour, ajwain, turmeric, red chilli, and water into a thick coating batter.",
      "Carefully dip each seasoned egg half into the batter.",
      "Drop into hot oil; deep fry on medium flame for 3 minutes until crisp and golden.",
      "Drain and sprinkle chaat masala; serve hot with mint chutney."
    ]
  },
  {
    "id": "boiled-egg-tadka",
    "name": "Homestyle Boiled Egg Tadka",
    "subCategory": "egg",
    "prepTime": 10,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chettinad-egg-roast.jpg",
    "description": "Quick 10-minute protein snack: boiled eggs tossed in hot ghee with mustard seeds, curry leaves, red chilli powder, and chaat masala.",
    "ingredients": [
      {
        "name": "Hard Boiled Eggs",
        "amount": "4 (sliced into quarters)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Mustard Seeds & Curry Leaves",
        "amount": "1 tsp & 1 sprig"
      },
      {
        "name": "Red Chilli Powder & Turmeric",
        "amount": "1/2 tsp & 1/4 tsp"
      },
      {
        "name": "Chaat Masala & Lemon",
        "amount": "1/2 tsp & 1 tsp"
      }
    ],
    "steps": [
      "Heat pure ghee in a pan; crackle mustard seeds and fresh curry leaves.",
      "Turn flame to low; add turmeric, red chilli powder, and salt.",
      "Add quartered boiled eggs; toss gently so spices coat each slice without breaking yolks.",
      "Dust with chaat masala and fresh lemon juice; serve warm."
    ]
  },
  {
    "id": "mughlai-anda-korma",
    "name": "Mughlai Shahi Anda Curry",
    "subCategory": "egg",
    "prepTime": 25,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/egg-curry.jpg",
    "description": "Velvety Mughlai egg gravy made with boiled eggs simmered in rich cream, roasted almond paste, melon seeds, and white pepper.",
    "ingredients": [
      {
        "name": "Boiled Eggs",
        "amount": "4 (shelled)"
      },
      {
        "name": "Almonds & Magaz (Melon Seeds)",
        "amount": "2 tbsp each (soaked & pureed)"
      },
      {
        "name": "Fresh Cream",
        "amount": "3 tbsp"
      },
      {
        "name": "Ginger & Green Chilli Paste",
        "amount": "1.5 tbsp"
      },
      {
        "name": "White Pepper Powder & Cardamom",
        "amount": "1/2 tsp & 1/2 tsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Heat ghee in a pan; sauté green cardamoms and ginger-chilli paste on low heat.",
      "Add almond-melon seed paste and 1 cup water; simmer for 6 minutes until aromatic.",
      "Season with white pepper powder and salt.",
      "Slide in boiled eggs and simmer covered for 5 minutes.",
      "Stir in fresh cream; serve warm with butter naan."
    ]
  },
  {
    "id": "bhojpuri-egg-masala",
    "name": "Bhojpuri Anda Masala",
    "subCategory": "egg",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/egg-curry.jpg",
    "description": "Zesty rustic village egg curry cooked in pure mustard oil with crushed coriander seeds, garlic, and dry red chillies.",
    "ingredients": [
      {
        "name": "Boiled Eggs",
        "amount": "4 (pricked & deep fried)"
      },
      {
        "name": "Mustard Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Onions & Tomatoes",
        "amount": "2 onions & 2 tomatoes (chopped)"
      },
      {
        "name": "Crushed Whole Coriander & Cumin",
        "amount": "1 tbsp each"
      },
      {
        "name": "Garlic Paste",
        "amount": "1.5 tbsp"
      }
    ],
    "steps": [
      "Fry eggs in smoking hot mustard oil until crinkled and golden; set aside.",
      "In the same oil, sauté crushed coriander and cumin seeds, garlic, and onions until deep brown.",
      "Add chopped tomatoes and cook until oil separates.",
      "Add fried eggs with 1/2 cup water; simmer for 5 minutes.",
      "Garnish with chopped green chillies and coriander; serve with phulkas."
    ]
  },
  {
    "id": "muttai-thokku",
    "name": "Tamil Village Muttai Thokku",
    "subCategory": "egg",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/dim-kosha.jpg",
    "description": "Thick, spicy, preserved-style onion tomato egg thokku cooked down with gingelly oil, mustard, and curry leaves.",
    "ingredients": [
      {
        "name": "Boiled Eggs",
        "amount": "4 (halved)"
      },
      {
        "name": "Shallots",
        "amount": "1 cup (finely chopped)"
      },
      {
        "name": "Country Tomatoes",
        "amount": "3 (finely chopped)"
      },
      {
        "name": "Kulambu Chilli Powder",
        "amount": "2 tbsp"
      },
      {
        "name": "Gingelly Oil",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Heat gingelly oil in a pan; crackle mustard seeds, fennel seeds, and curry leaves.",
      "Add finely chopped shallots; sauté until golden-brown.",
      "Add tomatoes and chilli powder; cook covered on low flame for 12 minutes until oil completely oozes out and thokku turns dark red.",
      "Nestle boiled egg halves into the thick thokku; simmer for 3 minutes.",
      "Serve with rasam rice or curd rice."
    ]
  },
  {
    "id": "egg-biryani-salan",
    "name": "Hyderabadi Mirchi ka Salan with Eggs",
    "subCategory": "egg",
    "prepTime": 30,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/egg-curry.jpg",
    "description": "Tangy and nutty Hyderabadi gravy made with roasted peanuts, sesame seeds, tamarind, green chillies, and fried boiled eggs.",
    "ingredients": [
      {
        "name": "Boiled Eggs",
        "amount": "4 (fried golden)"
      },
      {
        "name": "Roasted Peanuts, Sesame & Coconut",
        "amount": "2 tbsp each (ground into paste)"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "1/4 cup"
      },
      {
        "name": "Large Bhavnagri Chillies",
        "amount": "4 (slit & fried)"
      },
      {
        "name": "Mustard Oil / Ghee",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Grind roasted peanuts, sesame seeds, coconut, cumin, and coriander into a smooth nutty paste.",
      "Heat oil; crackle mustard seeds, kalonji, and curry leaves; sauté onion and ginger garlic paste until brown.",
      "Add nutty paste and cook on medium-low flame until oil separates.",
      "Add tamarind pulp, 1.5 cups water, fried green chillies, and fried boiled eggs.",
      "Simmer for 10 minutes until aromatic oil floats; the ultimate accompaniment for Biryani."
    ]
  },
  {
    "id": "karimeen-pollichathu",
    "name": "Kerala Karimeen Pollichathu",
    "subCategory": "seafood",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/karimeen-pollichathu.jpg",
    "description": "Iconic Kerala backwater delicacy: fresh pearl spot fish marinated in spicy paste, coated in rich shallot-tomato masala, wrapped in banana leaf, and pan-roasted in coconut oil.",
    "ingredients": [
      {
        "name": "Karimeen (Pearl Spot Fish)",
        "amount": "2 whole (cleaned & scored diagonally)"
      },
      {
        "name": "Shallots (Sambar Onions)",
        "amount": "1.5 cups (finely sliced)"
      },
      {
        "name": "Country Tomatoes",
        "amount": "2 (finely chopped)"
      },
      {
        "name": "Kudampuli (Malabar Tamarind) / Lime",
        "amount": "soaked in 2 tbsp water"
      },
      {
        "name": "Kashmiri Chilli & Turmeric",
        "amount": "1.5 tbsp & 1/2 tsp"
      },
      {
        "name": "Fresh Banana Leaves",
        "amount": "2 large (wilted over flame)"
      },
      {
        "name": "Pure Coconut Oil",
        "amount": "4 tbsp"
      }
    ],
    "steps": [
      "Score whole Karimeen; marinate with red chilli powder, turmeric, black pepper, lemon juice, and salt for 20 minutes.",
      "Shallow fry marinated fish in coconut oil for 2 minutes per side; set aside.",
      "In same pan, sauté sliced shallots, ginger, garlic, green chillies, and curry leaves until golden-brown.",
      "Add chopped tomatoes, coriander powder, chilli powder, and kudampuli water; cook until thick, glossy masala paste forms.",
      "Wilt banana leaves briefly over open flame to make them pliable.",
      "Place a layer of onion-tomato masala on banana leaf, place fried fish, cover completely with more masala, and wrap into a tight packet.",
      "Pan-roast packets on a cast iron tawa with coconut oil on low heat for 5-6 minutes per side until leaf chars fragrant."
    ]
  },
  {
    "id": "prawn-ghee-roast",
    "name": "Mangalorean Prawn Ghee Roast",
    "subCategory": "seafood",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/prawn-ghee-roast.jpg",
    "description": "Legendary coastal Karnataka restaurant dish: succulent tiger prawns roasted in a velvety, fiery Byadagi chilli masala cooked in copious pure desi cow ghee.",
    "ingredients": [
      {
        "name": "Jumbo Tiger Prawns",
        "amount": "350g (cleaned, peeled & deveined)"
      },
      {
        "name": "Byadagi Dry Red Chillies",
        "amount": "10-12 (soaked in warm water)"
      },
      {
        "name": "Whole Spices (Coriander, Cumin, Fennel, Peppercorn, Methi)",
        "amount": "roasted"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Jaggery (Gud)",
        "amount": "1 tsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "4 tbsp (divided)"
      }
    ],
    "steps": [
      "Marinate cleaned prawns with curd, turmeric, lemon juice, and salt for 15 minutes.",
      "Grind roasted spices, soaked Byadagi chillies, garlic, and tamarind pulp into a thick red paste.",
      "Heat 1 tbsp ghee in a pan; sear marinated prawns on high flame for 2 minutes just until pink; remove.",
      "Heat remaining 3 tbsp pure ghee in a heavy kadai; add red spice paste and cook on medium-low flame for 10-12 minutes until aromatic red ghee separates abundantly.",
      "Add jaggery and sea salt.",
      "Toss seared prawns into bubbling ghee roast masala; roast for 3 minutes until every prawn is lavishly glazed with the dark red crust; serve with neer dosa."
    ]
  },
  {
    "id": "rava-fish-fry",
    "name": "Goan Rava Surmai (Kingfish) Fry",
    "subCategory": "seafood",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/fish-fry.jpg",
    "description": "Crispy Goan coastal fish steaks marinated in spicy red rechado masala, dredged in coarse semolina (rava), and shallow-fried in coconut oil.",
    "ingredients": [
      {
        "name": "Kingfish (Surmai / Anjal) Steaks",
        "amount": "4 thick cut steaks"
      },
      {
        "name": "Kashmiri Red Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Turmeric & Ginger Garlic Paste",
        "amount": "1/2 tsp & 1 tbsp"
      },
      {
        "name": "Kokum / Lemon Juice",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Fine Sooji / Rava & Rice Flour",
        "amount": "1/2 cup rava + 2 tbsp rice flour"
      },
      {
        "name": "Coconut Oil",
        "amount": "for shallow frying"
      }
    ],
    "steps": [
      "Wash and pat kingfish steaks completely dry with paper towels.",
      "Mix red chilli powder, turmeric, ginger garlic paste, lemon/kokum juice, and salt into a thick marinade paste; rub over fish steaks and marinate for 20 minutes.",
      "In a shallow plate, combine fine semolina (rava), rice flour, a pinch of chilli powder, and salt.",
      "Dredge each marinated fish steak firmly into rava mixture on all sides, pressing lightly so coating adheres uniformly.",
      "Heat coconut oil in a cast-iron skillet on medium flame.",
      "Shallow fry fish steaks for 3-4 minutes per side until semolina crust turns golden-brown and ultra-crisp while meat stays juicy inside."
    ]
  },
  {
    "id": "sides-prawn-balchao",
    "name": "Goan Prawn Balchao",
    "subCategory": "seafood",
    "prepTime": 35,
    "servings": 6,
    "veg": false,
    "image": "images/dishes/prawn-balchao.jpg",
    "description": "Fiery, tangy Goan-Portuguese pickled prawn preserve prepared with caramelized onions, toddy vinegar, whole spices, and sun-dried red chillies.",
    "ingredients": [
      {
        "name": "Fresh Prawns",
        "amount": "400g (shelled & deveined)"
      },
      {
        "name": "Red Onions",
        "amount": "3 large (finely minced)"
      },
      {
        "name": "Goan Toddy Vinegar / White Vinegar",
        "amount": "1/2 cup"
      },
      {
        "name": "Kashmiri Dry Red Chillies",
        "amount": "10-12 (ground with vinegar)"
      },
      {
        "name": "Cinnamon, Cloves & Cumin",
        "amount": "ground into balchao paste"
      },
      {
        "name": "Sugar & Salt",
        "amount": "1 tsp each"
      },
      {
        "name": "Oil",
        "amount": "1/3 cup"
      }
    ],
    "steps": [
      "Marinate prawns with salt and turmeric; sear in 2 tbsp oil for 2 minutes; set aside.",
      "Grind red chillies, garlic, ginger, and whole spices with vinegar into a smooth, pungent balchao paste.",
      "Heat remaining oil in a pan; fry minced onions on medium heat until caramelized deep golden-brown.",
      "Add balchao spice paste; cook on low flame for 12 minutes until oil separates and vinegar mellows.",
      "Stir in seared prawns, sugar, and salt; simmer for 5 minutes.",
      "Cool completely and store in a glass jar."
    ]
  },
  {
    "id": "sides-malabar-fish-curry",
    "name": "Kerala Malabar Coconut Fish Curry",
    "subCategory": "seafood",
    "prepTime": 25,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/malabar-fish-curry.jpg",
    "description": "Rich, tangy coastal Kerala fish curry stewed in earthenware pot (meen chatti) with dried Malabar tamarind (kudampuli), shallots, and fresh coconut milk.",
    "ingredients": [
      {
        "name": "Fresh Seer Fish / Pomfret",
        "amount": "500g (cut into steaks)"
      },
      {
        "name": "Kudampuli (Malabar Tamarind)",
        "amount": "3 pieces (soaked in warm water)"
      },
      {
        "name": "Shallots (Sambar Onions)",
        "amount": "1 cup (sliced)"
      },
      {
        "name": "Ginger & Garlic",
        "amount": "1.5 tbsp (julienned)"
      },
      {
        "name": "Kashmiri Chilli & Coriander Powder",
        "amount": "2 tbsp & 1 tbsp"
      },
      {
        "name": "Thick & Thin Coconut Milk",
        "amount": "1/2 cup thick + 1.5 cups thin"
      },
      {
        "name": "Coconut Oil & Fenugreek",
        "amount": "2 tbsp & 1/4 tsp"
      }
    ],
    "steps": [
      "Heat coconut oil in an earthenware pot; crackle fenugreek seeds, curry leaves, and sliced shallots until golden.",
      "Add julienned ginger, garlic, and slit green chillies; sauté until aromatic.",
      "Add chilli powder, coriander powder, and turmeric paste; sauté until oil separates.",
      "Add thin coconut milk, soaked kudampuli with water, and rock salt; bring to a boil.",
      "Slide in fish steaks; swirl pot gently.",
      "Simmer covered on medium heat for 10 minutes until fish is tender.",
      "Pour thick coconut milk; swirl and turn off flame immediately before it boils.",
      "Temper with shallots and curry leaves in hot coconut oil."
    ]
  },
  {
    "id": "sides-meen-kulambu",
    "name": "Chettinad Meen (Fish) Kulambu",
    "subCategory": "seafood",
    "prepTime": 25,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/meen-kulambu.jpg",
    "description": "Fiery and sour Chettinad village fish curry cooked with country shallots, garlic, dark tamarind extract, and freshly ground kulambu masala in a clay pot.",
    "ingredients": [
      {
        "name": "Fresh Seer Fish (Vanjaram)",
        "amount": "500g"
      },
      {
        "name": "Shallots & Garlic Cloves",
        "amount": "1 cup each (whole)"
      },
      {
        "name": "Dark Aged Tamarind",
        "amount": "lemon size (extracted thick in 2 cups water)"
      },
      {
        "name": "Country Tomatoes",
        "amount": "2 (crushed by hand)"
      },
      {
        "name": "Kulambu Chilli Powder (Milagai Thool)",
        "amount": "2.5 tbsp"
      },
      {
        "name": "Sesame Oil & Vadagam / Fenugreek",
        "amount": "3 tbsp & 1 tsp"
      }
    ],
    "steps": [
      "Heat gingelly oil in a clay pot; crackle fenugreek seeds, cumin, and fresh curry leaves.",
      "Add whole shallots and garlic cloves; sauté on medium flame until golden.",
      "Add hand-crushed tomatoes and cook until soft and pulpy.",
      "Add kulambu chilli powder, turmeric, and rock salt; pour thick tamarind extract.",
      "Boil on medium heat for 10 minutes until raw tamarind smell vanishes and oil floats.",
      "Add fish pieces; simmer on low flame for 6-7 minutes.",
      "Let rest for 2 hours before serving with hot steamed ponni rice."
    ]
  },
  {
    "id": "sides-goan-fish-curry",
    "name": "Classic Goan Coconut Fish Curry",
    "subCategory": "seafood",
    "prepTime": 25,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/goan-fish-curry.jpg",
    "description": "Golden-orange Goan coastal curry made by blending fresh coconut with Kashmiri chillies, coriander seeds, cumin, and simmered with sour kokum.",
    "ingredients": [
      {
        "name": "Fresh Pomfret / Kingfish",
        "amount": "500g (cut into pieces)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1.5 cups"
      },
      {
        "name": "Kashmiri Dry Red Chillies",
        "amount": "8"
      },
      {
        "name": "Coriander Seeds & Cumin",
        "amount": "1 tbsp & 1/2 tsp"
      },
      {
        "name": "Kokum Petals (Aamsul)",
        "amount": "5-6"
      },
      {
        "name": "Green Chillies & Ginger",
        "amount": "2 slit chillies & 1 inch"
      },
      {
        "name": "Coconut Oil",
        "amount": "1.5 tbsp"
      }
    ],
    "steps": [
      "Grind fresh coconut with red chillies, coriander seeds, cumin, garlic, and turmeric into a smooth, bright orange paste.",
      "Heat coconut oil in a pan; sauté slit green chillies and sliced onion for 2 minutes.",
      "Pour ground coconut paste with 1.5 cups water; bring to a gentle simmer.",
      "Drop in kokum petals and sea salt; simmer for 5 minutes.",
      "Slide in fish steaks; cook on low heat for 5-6 minutes until fish is cooked.",
      "Serve piping hot over Goan red rice."
    ]
  },
  {
    "id": "sides-macher-jhol",
    "name": "Bengali Rui Macher Jhol",
    "subCategory": "seafood",
    "prepTime": 25,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/macher-jhol.jpg",
    "description": "Light, wholesome, golden Bengali fish curry cooked with fresh Rohu or Katla, potato wedges, cauliflower florets, nigella seeds (kalo jeere), and green chillies.",
    "ingredients": [
      {
        "name": "Rohu / Katla Fish Steaks",
        "amount": "4 large (cleaned)"
      },
      {
        "name": "Potatoes",
        "amount": "2 (peeled & cut into long wedges)"
      },
      {
        "name": "Kalonji (Nigella Seeds / Kalo Jeere)",
        "amount": "1 tsp"
      },
      {
        "name": "Green Chillies",
        "amount": "4 (slit lengthwise)"
      },
      {
        "name": "Ginger Paste & Cumin Powder",
        "amount": "1 tbsp each"
      },
      {
        "name": "Mustard Oil",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Marinate fish steaks with turmeric and salt; fry in smoking hot mustard oil for 2 minutes per side; remove.",
      "In same oil, fry potato wedges until edges turn golden; set aside.",
      "Temper remaining oil with kalonji seeds and slit green chillies.",
      "Add ginger paste, cumin powder, turmeric, and chilli powder dissolved in 3 tbsp water; sauté 2 minutes.",
      "Add potato wedges and 2 cups warm water; bring to a boil.",
      "Slide in fried fish steaks; simmer gently for 6 minutes so fish absorbs cumin broth.",
      "Garnish with coriander; serve with hot rice."
    ]
  },
  {
    "id": "sides-fish-amritsari",
    "name": "Crispy Amritsari Fish Fry",
    "subCategory": "seafood",
    "prepTime": 20,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/fish-amritsari.jpg",
    "description": "Crunchy Punjab roadside specialty: boneless fish fillets marinated in ajwain, ginger-garlic, dipped in light spiced besan-rice flour batter, and double-fried.",
    "ingredients": [
      {
        "name": "Firm White Fish Fillets (Singhara / Sole)",
        "amount": "500g (cut into finger strips)"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1.5 tsp (crushed between palms)"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "2 tbsp"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1/2 cup"
      },
      {
        "name": "Rice Flour",
        "amount": "2 tbsp (for extra crunch)"
      },
      {
        "name": "Lemon Juice & Chaat Masala",
        "amount": "2 tbsp & 1 tsp"
      },
      {
        "name": "Mustard Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Marinate fish strips with lemon juice, ginger-garlic paste, chilli powder, crushed ajwain, and salt for 15 minutes.",
      "Whisk besan, rice flour, a pinch of baking soda, and cold water into a light batter coating consistency.",
      "Dip fish strips into batter, ensuring a thin, even glaze.",
      "Deep fry in smoking hot mustard oil on medium heat for 3 minutes; drain on wire rack.",
      "Flash-fry in high-heat oil for 1 minute for extreme crackling crunch.",
      "Dust with chaat masala and serve with onions and mint chutney."
    ]
  },
  {
    "id": "sides-crab-sukka",
    "name": "Mangalorean Crab Sukka",
    "subCategory": "seafood",
    "prepTime": 30,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/crab-sukka.jpg",
    "description": "Coastal Karnataka celebration dish: sweet mud crabs cooked in dry roasted grated coconut masala with Byadagi chillies and tamarind.",
    "ingredients": [
      {
        "name": "Fresh Mud Crabs",
        "amount": "400g (cleaned & cracked open)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1.5 cups (dry roasted golden)"
      },
      {
        "name": "Kundapur Sukka Masala (Coriander, Cumin, Pepper, Fennel, Methi)",
        "amount": "2 tbsp"
      },
      {
        "name": "Onion & Garlic",
        "amount": "1 large onion & 6 cloves"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Coconut Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Crack crab claws gently so spices penetrate.",
      "Coarsely grind half the roasted coconut with Byadagi chillies, whole spices, garlic, and tamarind into sukka masala.",
      "Heat coconut oil; sauté sliced onion and curry leaves until golden.",
      "Add crab pieces and sear on high heat for 3 minutes until shells turn bright orange.",
      "Add ground sukka masala and 1/2 cup water; cook covered on medium heat for 10 minutes.",
      "Add remaining roasted coconut; toss on high flame until gravy clings dry around crab claws."
    ]
  },
  {
    "id": "fish-moilee",
    "name": "Kerala Meen Moilee",
    "subCategory": "seafood",
    "prepTime": 25,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/meen-moilee.jpg",
    "description": "Mild, fragrant, creamy Kerala-Christian fish stew prepared with seer fish, ginger juliennes, green chillies, and rich coconut milk.",
    "ingredients": [
      {
        "name": "Seer Fish / Kingfish Steaks",
        "amount": "500g"
      },
      {
        "name": "Thin & Thick Coconut Milk",
        "amount": "1.5 cups thin + 1/2 cup thick"
      },
      {
        "name": "Shallots & Ginger",
        "amount": "10 shallots & 2 tbsp juliennes"
      },
      {
        "name": "Green Chillies",
        "amount": "4 (slit lengthwise)"
      },
      {
        "name": "Tomato",
        "amount": "1 (cut into round slices)"
      },
      {
        "name": "Pure Coconut Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Lightly sear marinated fish steaks in coconut oil for 1 minute per side; set aside.",
      "In same oil, sauté shallots, ginger juliennes, green chillies, and curry leaves until translucent.",
      "Add turmeric powder and thin coconut milk; bring to a gentle simmer.",
      "Slide in fish steaks and tomato slices; simmer on low heat for 7 minutes.",
      "Pour thick coconut milk; swirl pot gently and turn off flame before it boils.",
      "Serve warm with fluffy Kerala appams."
    ]
  },
  {
    "id": "sides-prawn-koliwada",
    "name": "Koliwada Crispy Fried Prawns",
    "subCategory": "seafood",
    "prepTime": 15,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/prawn-koliwada.jpg",
    "description": "Crispy, fiery red spiced fried prawns invented by the Punjabi migrants in Mumbai's fishing colony of Guru Tegh Bahadur Nagar.",
    "ingredients": [
      {
        "name": "Fresh Prawns",
        "amount": "300g (cleaned & deveined)"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Kashmiri Chilli & Ajwain",
        "amount": "1.5 tbsp & 1/2 tsp"
      },
      {
        "name": "Cornstarch & Maida",
        "amount": "2 tbsp each"
      },
      {
        "name": "Lemon Juice",
        "amount": "1 tbsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Marinate prawns with lemon juice, ginger-garlic paste, red chilli powder, crushed ajwain, and salt for 10 minutes.",
      "Coat prawns with cornstarch and flour to form a light, crispy crust.",
      "Drop into hot oil on high flame; fry for 2-3 minutes until golden-red and crispy.",
      "Drain and toss with chaat masala; serve with onion rings."
    ]
  },
  {
    "id": "squid-roast",
    "name": "Kerala Koonthal (Squid) Roast",
    "subCategory": "seafood",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/squid-roast.jpg",
    "description": "Spicy coastal calamari fry cooked with shallots, crushed tellicherry peppercorns, green chillies, coconut bits, and curry leaves.",
    "ingredients": [
      {
        "name": "Fresh Squid (Koonthal / Calamari)",
        "amount": "400g (cleaned & cut into rings)"
      },
      {
        "name": "Shallots",
        "amount": "1 cup (sliced)"
      },
      {
        "name": "Thin Coconut Slices (Thenga Kothu)",
        "amount": "2 tbsp"
      },
      {
        "name": "Cracked Black Pepper & Fennel",
        "amount": "1.5 tbsp & 1 tsp"
      },
      {
        "name": "Coconut Oil & Curry Leaves",
        "amount": "2 tbsp & 2 sprigs"
      }
    ],
    "steps": [
      "Pressure cook cleaned squid rings with turmeric, chilli powder, salt, and 2 tbsp water for just 1 whistle (overcooking makes squid rubbery).",
      "Heat coconut oil; fry coconut slices (thenga kothu) until golden-brown.",
      "Add shallots, ginger, garlic, green chillies, and curry leaves; sauté until caramelized.",
      "Add cooked squid and its cooking juices; roast on high flame for 5 minutes until liquid evaporates completely.",
      "Finish with freshly cracked black pepper and fennel powder; toss until squid is coated in a dark, peppery crust."
    ]
  },
  {
    "id": "sides-prawn-masala",
    "name": "Maharashtrian Kolambi (Prawn) Masala",
    "subCategory": "seafood",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/prawn-masala.jpg",
    "description": "Zesty Malvani style prawn curry cooked in roasted onion-coconut masala with kokum and fresh coriander.",
    "ingredients": [
      {
        "name": "Fresh Prawns",
        "amount": "350g (peeled & deveined)"
      },
      {
        "name": "Malvani Masala",
        "amount": "2 tbsp"
      },
      {
        "name": "Roasted Onion-Coconut Paste (Vatan)",
        "amount": "3 tbsp"
      },
      {
        "name": "Kokum Petals",
        "amount": "3-4"
      },
      {
        "name": "Oil & Mustard Seeds",
        "amount": "2 tbsp & 1 tsp"
      }
    ],
    "steps": [
      "Marinate prawns with turmeric, lemon juice, and salt.",
      "Heat oil; crackle mustard seeds and curry leaves; sauté onion-coconut vatan paste until oil separates.",
      "Add Malvani masala, red chilli powder, and kokum petals.",
      "Add prawns and 1/2 cup warm water; simmer on medium flame for 4-5 minutes until prawns turn tender and juicy.",
      "Garnish with chopped coriander; serve with bhakri or steamed rice."
    ]
  },
  {
    "id": "tawa-pomfret-fry",
    "name": "Tawa Masala Pomfret Fry",
    "subCategory": "seafood",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/fish-fry.jpg",
    "description": "Whole silver pomfret fish stuffed and coated with spicy red masala paste, griddled on a cast iron tawa with curry leaves.",
    "ingredients": [
      {
        "name": "Fresh Silver Pomfret",
        "amount": "2 whole (cleaned & diamond scored)"
      },
      {
        "name": "Kashmiri Red Chilli Paste",
        "amount": "2 tbsp"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "1 tbsp"
      },
      {
        "name": "Lemon Juice & Garam Masala",
        "amount": "2 tbsp & 1/2 tsp"
      },
      {
        "name": "Oil",
        "amount": "3 tbsp (for tawa frying)"
      }
    ],
    "steps": [
      "Score whole pomfret deeply on both sides.",
      "Mix red chilli paste, ginger-garlic paste, lemon juice, turmeric, and salt; stuff into cuts and coat fish evenly; marinate 20 minutes.",
      "Heat oil on a flat cast-iron tawa on medium flame.",
      "Place fish on tawa; fry for 4 minutes per side basting with hot oil until skin is blistered and charred crisp.",
      "Garnish with lemon slices and ring onions."
    ]
  },
  {
    "id": "konkan-crab-curry",
    "name": "Malvani Crab Curry",
    "subCategory": "seafood",
    "prepTime": 30,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/crab-sukka.jpg",
    "description": "Rich coastal Maharashtra crab curry prepared with roasted dry coconut, coriander, peppercorns, and sour kokum petals.",
    "ingredients": [
      {
        "name": "Fresh Crabs",
        "amount": "400g (cleaned & cracked)"
      },
      {
        "name": "Malvani Dry Coconut Paste",
        "amount": "1/2 cup"
      },
      {
        "name": "Onion & Tomato",
        "amount": "1 each (finely chopped)"
      },
      {
        "name": "Malvani Masala & Kokum",
        "amount": "2 tbsp & 4 petals"
      },
      {
        "name": "Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Heat oil in a pot; sauté onions until brown, add ginger-garlic paste and tomatoes; cook until soft.",
      "Add Malvani masala and roasted dry coconut paste; cook until aromatic and oil floats.",
      "Add crab pieces and sear on high heat for 3 minutes.",
      "Pour 1.5 cups warm water, add kokum petals and salt; simmer covered on medium flame for 12 minutes until crab meat is cooked.",
      "Serve hot with steamed rice or jowar bhakri."
    ]
  },
  {
    "id": "mangalorean-fish-curry",
    "name": "Mangalorean Anjal (Seer Fish) Curry",
    "subCategory": "seafood",
    "prepTime": 25,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/malabar-fish-curry.jpg",
    "description": "Fiery coastal Karnataka fish curry made with Byadagi chillies, coriander seeds, cumin, fenugreek, and fresh coconut paste with tamarind.",
    "ingredients": [
      {
        "name": "Seer Fish (Anjal / Surmai)",
        "amount": "500g"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1 cup"
      },
      {
        "name": "Byadagi Dry Red Chillies",
        "amount": "8-10"
      },
      {
        "name": "Coriander & Cumin Seeds",
        "amount": "1 tbsp & 1 tsp"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "2 tbsp"
      },
      {
        "name": "Coconut Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Grind fresh coconut with roasted Byadagi chillies, coriander, cumin, fenugreek, and tamarind into a smooth paste.",
      "Heat coconut oil in a clay pot; sauté sliced onions and green chillies until translucent.",
      "Pour ground coconut masala with 2 cups water; bring to a rolling boil.",
      "Gently slide in seer fish steaks; simmer on medium-low flame for 7 minutes.",
      "Serve with steamed boiled rice or fluffy neer dosa."
    ]
  },
  {
    "id": "prawn-pepper-fry",
    "name": "Coastal Prawn Pepper Fry",
    "subCategory": "seafood",
    "prepTime": 15,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/prawn-ghee-roast.jpg",
    "description": "Spicy, dry coastal prawn roast packed with cracked black peppercorns, sautéed shallots, garlic, and fresh curry leaves.",
    "ingredients": [
      {
        "name": "Fresh Prawns",
        "amount": "300g (cleaned & deveined)"
      },
      {
        "name": "Shallots",
        "amount": "1 cup (sliced)"
      },
      {
        "name": "Cracked Black Pepper",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Ginger & Garlic",
        "amount": "1 tbsp (minced)"
      },
      {
        "name": "Coconut Oil & Curry Leaves",
        "amount": "2 tbsp & 2 sprigs"
      }
    ],
    "steps": [
      "Marinate prawns with turmeric, pepper, and lemon juice for 10 minutes.",
      "Heat coconut oil; sauté shallots, ginger, garlic, and curry leaves until golden-brown.",
      "Add marinated prawns; sauté on high flame for 3-4 minutes until water evaporates.",
      "Add freshly cracked black pepper and fennel powder; toss on high heat until prawns are darkly crusted.",
      "Serve hot with lemon wedges."
    ]
  },
  {
    "id": "bombil-fry",
    "name": "Crispy Bombay Duck (Bombil) Fry",
    "subCategory": "seafood",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/fish-fry.jpg",
    "description": "Crunchy Mumbai Koli delicacy: delicate Bombay duck fish pressed dry, spiced with Koli masala, crusted in semolina, and fried crisp.",
    "ingredients": [
      {
        "name": "Fresh Bombay Duck (Bombil)",
        "amount": "6 whole (cleaned & butterflied)"
      },
      {
        "name": "Koli Masala / Red Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "1 tbsp"
      },
      {
        "name": "Kokum Extract / Lemon Juice",
        "amount": "1 tbsp"
      },
      {
        "name": "Rava (Semolina) & Rice Flour",
        "amount": "1/2 cup blend"
      },
      {
        "name": "Oil",
        "amount": "for shallow frying"
      }
    ],
    "steps": [
      "Press cleaned butterflied bombil between paper towels under a heavy weight for 20 minutes to squeeze out excess moisture.",
      "Marinate with Koli masala, ginger garlic paste, kokum juice, and salt.",
      "Dredge in rava and rice flour mixture, pressing firmly.",
      "Shallow fry in hot oil on medium-high heat for 3-4 minutes per side until super crisp and golden.",
      "Serve immediately while hot and crunchy."
    ]
  },
  {
    "id": "sides-fish-tikka",
    "name": "Tandoori Amritsari Fish Tikka",
    "subCategory": "seafood",
    "prepTime": 25,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/fish-tikka.jpg",
    "description": "Smoky char-grilled boneless fish chunks marinated in hung curd, carom seeds (ajwain), mustard oil, and Kashmiri chilli.",
    "ingredients": [
      {
        "name": "Firm Fish Cubes (Basa / Sole / Surmai)",
        "amount": "400g"
      },
      {
        "name": "Thick Hung Curd",
        "amount": "1/2 cup"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1 tsp (crushed)"
      },
      {
        "name": "Mustard Oil",
        "amount": "2 tbsp"
      },
      {
        "name": "Kashmiri Chilli & Garam Masala",
        "amount": "1.5 tbsp & 1 tsp"
      },
      {
        "name": "Chaat Masala & Lemon",
        "amount": "for garnish"
      }
    ],
    "steps": [
      "Whisk hung curd with mustard oil, ajwain, Kashmiri chilli powder, ginger-garlic paste, and salt into a thick tikka marinade.",
      "Coat fish cubes gently; marinate for 30 minutes in refrigerator.",
      "Thread onto skewers; grill on high heat or bake at 220°C for 10-12 minutes until charred at edges and tender inside.",
      "Brush with melted butter and dust with chaat masala; serve with mint chutney."
    ]
  },
  {
    "id": "andhra-royyala-kura",
    "name": "Andhra Royyala (Prawn) Kura",
    "subCategory": "seafood",
    "prepTime": 25,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/prawn-masala.jpg",
    "description": "Fiery Andhra coastal prawn curry cooked with poppy seed paste (gasagasalu), country onions, green chillies, and tamarind.",
    "ingredients": [
      {
        "name": "Fresh Prawns (Royyalu)",
        "amount": "400g"
      },
      {
        "name": "Poppy Seeds & Cashews",
        "amount": "1.5 tbsp each (soaked & ground to paste)"
      },
      {
        "name": "Onions & Green Chillies",
        "amount": "2 onions & 4 slit chillies"
      },
      {
        "name": "Guntur Red Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Groundnut Oil",
        "amount": "2.5 tbsp"
      }
    ],
    "steps": [
      "Heat groundnut oil; sauté onions and green chillies until soft and golden.",
      "Add ginger garlic paste and sauté for 1 minute.",
      "Add cleaned prawns, turmeric, chilli powder, and salt; sear for 3 minutes until prawns turn pink.",
      "Stir in poppy seed-cashew paste and 1 cup water.",
      "Simmer covered for 6 minutes until gravy turns thick and oil separates.",
      "Garnish with chopped coriander; serve with hot steamed rice."
    ]
  },
  {
    "id": "meen-peera",
    "name": "Kerala Meen Peera Pattichathu",
    "subCategory": "seafood",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/malabar-fish-curry.jpg",
    "description": "Traditional Kerala homestyle dish of small anchovies or fish fillets cooked dry with coarsely crushed coconut, bird's eye chillies, and kudampuli.",
    "ingredients": [
      {
        "name": "Small Fish / Anchovies (Netholi / Kozhuva)",
        "amount": "300g (cleaned)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1 cup (crushed with shallots & chillies)"
      },
      {
        "name": "Bird's Eye Chillies (Kanthari)",
        "amount": "6-8"
      },
      {
        "name": "Kudampuli (Malabar Tamarind)",
        "amount": "2 small pieces"
      },
      {
        "name": "Coconut Oil & Curry Leaves",
        "amount": "1.5 tbsp & 2 sprigs"
      }
    ],
    "steps": [
      "In a traditional meen chatti or pan, crush coconut coarsely with shallots, bird's eye chillies, turmeric, and garlic using your hand.",
      "Mix cleaned fish pieces with the coconut mixture, soaked kudampuli, and salt.",
      "Add 1/4 cup water; cover and cook on low heat for 8-10 minutes until fish is cooked and moisture evaporates completely.",
      "Drizzle raw coconut oil and scatter fresh curry leaves over top.",
      "Serve warm with hot rice or boiled tapioca (kappa)."
    ]
  }
];
