// Section 9 & 10: Soups, Rasams, Shorbas, Chai & Coolers (50 recipes)
const SOUPS_DRINKS_RECIPES = [
  {
    "id": "tomato-rasam",
    "name": "Iyengar Thakkali (Tomato) Rasam",
    "subCategory": "soup",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-rasam.jpg",
    "description": "Aromatic, soothing South Indian tomato broth simmered with tamarind water, freshly pounded cumin-pepper rasam powder, and pure ghee tempering.",
    "ingredients": [
      {
        "name": "Country Tomatoes",
        "amount": "3 ripe (finely crushed by hand)"
      },
      {
        "name": "Tamarind",
        "amount": "lemon-sized ball (extracted in 2 cups water)"
      },
      {
        "name": "Toor Dal Water (Paruppu Thanneer)",
        "amount": "1 cup (boiled thin dal broth)"
      },
      {
        "name": "Black Peppercorns & Cumin Seeds",
        "amount": "1 tsp & 1.5 tsp (crushed coarse)"
      },
      {
        "name": "Garlic Cloves & Green Chilli",
        "amount": "4 crushed cloves & 1 slit chilli"
      },
      {
        "name": "Pure Cow Ghee & Hing",
        "amount": "1 tbsp & 1/4 tsp"
      },
      {
        "name": "Mustard Seeds & Curry Leaves",
        "amount": "1 tsp & 2 sprigs"
      }
    ],
    "steps": [
      "Crush ripe country tomatoes thoroughly by hand with tamarind extract, turmeric powder, slit green chilli, and rock salt in a pot.",
      "Bring tomato-tamarind broth to a boil on medium heat for 7-8 minutes until raw tamarind aroma disappears.",
      "Add thin cooked toor dal water and freshly crushed black pepper, cumin seeds, and crushed garlic.",
      "Simmer gently on low flame; as soon as a frothy golden foam rises across the top surface, turn off flame immediately.",
      "Heat pure desi ghee in a tadka pan; crackle mustard seeds, hing, dry red chilli, and fresh curry leaves.",
      "Pour sizzling tadka into the rasam, shower with chopped fresh coriander stems and leaves, and cover with a lid immediately."
    ]
  },
  {
    "id": "pepper-rasam",
    "name": "Milagu Jeera (Pepper) Rasam",
    "subCategory": "soup",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/pepper-rasam.jpg",
    "description": "Potent Ayurvedic throat-clearing pepper rasam infused with crushed tellicherry black peppercorns, roasted cumin, garlic, and ghee.",
    "ingredients": [
      {
        "name": "Black Peppercorns (Milagu)",
        "amount": "1.5 tbsp (whole)"
      },
      {
        "name": "Cumin Seeds (Jeera)",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Garlic Cloves",
        "amount": "8 (crushed with skin)"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "1.5 cups (diluted thin)"
      },
      {
        "name": "Tomato",
        "amount": "1 small (crushed)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "In a stone mortar, crush black peppercorns and cumin seeds into a coarse fragrant powder; add unpeeled garlic cloves and crush lightly.",
      "In a pot, boil thin tamarind water with crushed tomato, turmeric, curry leaves, and salt for 6 minutes.",
      "Add the freshly crushed pepper-cumin-garlic mixture and 1.5 cups of water.",
      "Simmer on low flame until frothy on top; switch off immediately.",
      "Temper with mustard seeds and curry leaves in hot ghee; drink warm as a comforting soup or mix with hot rice."
    ]
  },
  {
    "id": "mutton-paya-soup",
    "name": "Hyderabadi Mutton Paya Shorba",
    "subCategory": "soup",
    "prepTime": 50,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/mutton-paya-soup.jpg",
    "description": "Slow-simmered gelatinous lamb trotters broth stewed with potli masala, whole black cardamoms, ginger, garlic, and fresh mint.",
    "ingredients": [
      {
        "name": "Mutton Trotters (Paya)",
        "amount": "4 pieces (cleaned & roasted on flame)"
      },
      {
        "name": "Onion",
        "amount": "1 large (sliced thin)"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "2 tbsp"
      },
      {
        "name": "Whole Spices (Cinnamon, Cardamom, Cloves)",
        "amount": "tied in muslin cloth"
      },
      {
        "name": "Black Pepper & Turmeric",
        "amount": "1 tsp & 1/2 tsp"
      },
      {
        "name": "Fresh Mint & Coriander",
        "amount": "1/2 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Wash mutton trotters thoroughly with wheat flour and warm water to remove fine hairs.",
      "Heat ghee in a heavy pressure cooker; sauté sliced onions until translucent, add ginger garlic paste, and bhunno for 2 minutes.",
      "Add cleaned paya pieces, turmeric, black pepper, and salt; sear for 5 minutes.",
      "Add 5 cups water and the whole spice bouquet garni (potli).",
      "Pressure cook on high for 3 whistles, then simmer on lowest heat for 45 minutes until the bone marrow and collagen melt completely into the broth.",
      "Release steam, discard spice pouch, garnish with fresh mint leaves, lime juice, and cracked black pepper; serve piping hot with crusty pao or sheermaal."
    ]
  },
  {
    "id": "chicken-shorba",
    "name": "Dhabewala Murgh Shorba",
    "subCategory": "soup",
    "prepTime": 30,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/chicken-shorba.jpg",
    "description": "Hearty, nourishing rustic North Indian chicken broth spiced with crushed ginger, black peppercorns, green chillies, and fresh coriander roots.",
    "ingredients": [
      {
        "name": "Bone-in Chicken",
        "amount": "400g (cut into small soup pieces)"
      },
      {
        "name": "Ginger & Garlic",
        "amount": "2 tbsp (coarsely pounded)"
      },
      {
        "name": "Fresh Coriander Roots & Stems",
        "amount": "1/2 cup (bruised)"
      },
      {
        "name": "Black Peppercorns & Cloves",
        "amount": "1 tsp & 4 cloves"
      },
      {
        "name": "Onion",
        "amount": "1 small (finely chopped)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Heat ghee in a pot; add whole black peppercorns, cloves, and chopped onion; sauté until onions turn light pink.",
      "Add bone-in chicken pieces, pounded ginger, garlic, and bruised coriander roots; sear for 4 minutes to seal flavors.",
      "Pour 4 cups water, add turmeric and sea salt, and bring to a rolling boil.",
      "Simmer covered on low flame for 25 minutes until chicken is tender and broth turns golden and fragrant.",
      "Serve rustic with chicken pieces, a squeeze of fresh lime juice, and a sprinkle of roasted cumin powder."
    ]
  },
  {
    "id": "tomato-shorba",
    "name": "Tamatar Dhaniya ka Shorba",
    "subCategory": "soup",
    "prepTime": 25,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-soup.jpg",
    "description": "Silky Mughlai spiced tomato soup infused with roasted cumin seeds, fresh coriander stems, bay leaf, and ginger juliennes.",
    "ingredients": [
      {
        "name": "Ripe Red Tomatoes",
        "amount": "6 large (quartered)"
      },
      {
        "name": "Fresh Coriander Stems & Leaves",
        "amount": "1 cup"
      },
      {
        "name": "Ginger & Garlic",
        "amount": "1 tbsp each"
      },
      {
        "name": "Bay Leaf & Cinnamon",
        "amount": "1 leaf & 1 inch stick"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1 tbsp (roasted for body)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1.5 tbsp"
      }
    ],
    "steps": [
      "Heat 1 tbsp ghee in a pot; add bay leaf, cinnamon, ginger, garlic, and fresh coriander stems; sauté for 1 minute.",
      "Add quartered tomatoes, salt, and 3 cups water; simmer for 15 minutes until tomatoes are completely soft.",
      "Cool slightly, blend thoroughly, and strain through a soup sieve to discard tomato seeds and skins.",
      "In a clean pan, roast 1 tbsp besan in 1/2 tsp ghee until fragrant; whisk strained tomato broth into it to prevent lumps.",
      "Simmer for 5 minutes; season with black pepper, roasted cumin powder, and a squeeze of lemon; serve steaming hot."
    ]
  },
  {
    "id": "mysore-rasam",
    "name": "Authentic Mysore Rasam",
    "subCategory": "soup",
    "prepTime": 20,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-rasam.jpg",
    "description": "Rich, aromatic Karnataka festival rasam prepared with freshly roasted coconut, coriander, red chillies, and cooked toor dal.",
    "ingredients": [
      {
        "name": "Fresh Grated Coconut",
        "amount": "2 tbsp"
      },
      {
        "name": "Coriander Seeds & Chana Dal",
        "amount": "1 tbsp each"
      },
      {
        "name": "Byadagi Dry Red Chillies",
        "amount": "4-5"
      },
      {
        "name": "Toor Dal",
        "amount": "1/2 cup (boiled & mashed soft)"
      },
      {
        "name": "Tamarind & Country Tomato",
        "amount": "extracted juice & 1 chopped tomato"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Roast coriander seeds, chana dal, Byadagi red chillies, black pepper, and fresh coconut in 1/2 tsp ghee until golden-brown; grind to a smooth paste with water.",
      "Boil tamarind extract with chopped tomato, turmeric, and salt for 8 minutes until raw aroma departs.",
      "Add ground coconut spice paste and mashed toor dal with 2 cups water; stir well.",
      "Simmer on medium-low flame until a frothy layer forms; turn off heat immediately.",
      "Temper with mustard seeds, curry leaves, and generous hing in hot ghee; garnish with coriander."
    ]
  },
  {
    "id": "lemon-rasam",
    "name": "Elumichai (Lemon) Rasam",
    "subCategory": "soup",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-rasam.jpg",
    "description": "Refreshing tamarind-free South Indian rasam infused with fresh lemon juice, crushed ginger, green chillies, and cooked toor dal broth.",
    "ingredients": [
      {
        "name": "Cooked Toor Dal Broth",
        "amount": "1 cup"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "2-3 tbsp (from fresh lemons)"
      },
      {
        "name": "Tomato",
        "amount": "1 medium (finely chopped)"
      },
      {
        "name": "Ginger & Green Chillies",
        "amount": "1 inch & 2 chillies (slit)"
      },
      {
        "name": "Pure Cow Ghee & Hing",
        "amount": "1 tbsp & 1/4 tsp"
      },
      {
        "name": "Mustard & Curry Leaves",
        "amount": "for tempering"
      }
    ],
    "steps": [
      "In a pot, boil chopped tomato, crushed ginger, slit green chillies, turmeric, curry leaves, and salt in 2 cups water for 5 minutes.",
      "Add thin cooked toor dal broth; simmer until frothy; immediately turn off heat.",
      "Temper with mustard seeds, cumin, hing, and curry leaves in hot ghee.",
      "Wait 2 minutes for the rasam to cool slightly, then stir in fresh lemon juice (never boil lemon juice or it turns bitter).",
      "Stir well and serve hot."
    ]
  },
  {
    "id": "garlic-rasam",
    "name": "Poondu (Garlic) Rasam",
    "subCategory": "soup",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/pepper-rasam.jpg",
    "description": "Pungent, therapeutic Chettinad rasam loaded with crushed garlic pods simmered in peppery tamarind water and ghee.",
    "ingredients": [
      {
        "name": "Garlic Cloves",
        "amount": "15 cloves (10 crushed + 5 whole for tadka)"
      },
      {
        "name": "Black Peppercorns & Cumin",
        "amount": "1 tbsp each (coarsely pounded)"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "1 cup (thin extract)"
      },
      {
        "name": "Country Tomato",
        "amount": "1 ripe (mashed)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1.5 tbsp"
      }
    ],
    "steps": [
      "Heat 1/2 tbsp ghee; sauté crushed garlic cloves on low flame until fragrant and pale golden.",
      "Add mashed tomato, tamarind water, turmeric, and salt; boil for 7 minutes.",
      "Stir in freshly pounded black pepper and cumin powder with 1.5 cups water.",
      "Simmer until frothy; remove from flame.",
      "In remaining ghee, fry whole garlic cloves until golden-crisp; add mustard seeds and curry leaves; pour over rasam."
    ]
  },
  {
    "id": "horsegram-rasam",
    "name": "Kollu (Horsegram) Rasam",
    "subCategory": "soup",
    "prepTime": 25,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/pepper-rasam.jpg",
    "description": "Traditional winter wellness broth made with boiled horsegram water, crushed pepper, garlic, and cumin, celebrated for metabolism.",
    "ingredients": [
      {
        "name": "Horsegram (Kollu / Ulavalu)",
        "amount": "1/2 cup (boiled, using 3 cups water)"
      },
      {
        "name": "Tamarind Juice",
        "amount": "1/2 cup"
      },
      {
        "name": "Garlic & Black Pepper",
        "amount": "6 cloves & 1 tsp"
      },
      {
        "name": "Tomato & Cumin",
        "amount": "1 tomato & 1 tsp cumin"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Boil horsegram until soft; drain and collect the dark nutrient-dense brown broth.",
      "Crush 2 tbsp of boiled horsegram lentils with garlic, cumin, and black pepper into a paste.",
      "Boil tamarind juice with tomato, turmeric, and salt for 5 minutes.",
      "Add horsegram broth and ground spice paste; simmer on low heat until frothy.",
      "Temper with mustard seeds, curry leaves, and dry red chilli in hot ghee."
    ]
  },
  {
    "id": "raw-mango-rasam",
    "name": "Mamidikaya (Raw Mango) Rasam",
    "subCategory": "soup",
    "prepTime": 20,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-rasam.jpg",
    "description": "Tangy and lip-smacking summer rasam made with boiled raw green mango pulp, jaggery, green chillies, and toor dal water.",
    "ingredients": [
      {
        "name": "Raw Green Mango",
        "amount": "1 small (boiled & pulp scraped)"
      },
      {
        "name": "Cooked Toor Dal Water",
        "amount": "1 cup"
      },
      {
        "name": "Jaggery (Gud)",
        "amount": "1 tbsp"
      },
      {
        "name": "Green Chillies & Ginger",
        "amount": "2 chillies & 1/2 inch"
      },
      {
        "name": "Rasam Powder & Hing",
        "amount": "1 tsp & 1/4 tsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Boil green mango until skin turns soft; scrape out sour mango pulp.",
      "In a pot, combine mango pulp with 2 cups water, jaggery, slit green chillies, ginger, turmeric, and salt; simmer for 5 minutes.",
      "Add cooked dal water and rasam powder; bring to a single gentle simmer until frothy.",
      "Temper with mustard seeds, cumin, hing, and curry leaves in hot ghee; garnish with coriander."
    ]
  },
  {
    "id": "pineapple-rasam",
    "name": "Royal Pineapple Rasam",
    "subCategory": "soup",
    "prepTime": 20,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-rasam.jpg",
    "description": "Celebration wedding rasam balancing sweet and sour flavors of fresh pineapple chunks and puree with spicy rasam spices.",
    "ingredients": [
      {
        "name": "Fresh Sweet Pineapple",
        "amount": "1 cup (1/2 cup pureed + 1/2 cup finely chopped)"
      },
      {
        "name": "Cooked Toor Dal",
        "amount": "1/2 cup (mashed)"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "1/4 cup (mild extract)"
      },
      {
        "name": "Rasam Powder & Black Pepper",
        "amount": "1.5 tsp & 1/2 tsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Boil pineapple chunks with mild tamarind water, turmeric, slit green chilli, and salt until pineapple softens.",
      "Add fresh pineapple puree, mashed toor dal, and rasam powder with 2 cups water.",
      "Simmer on low flame until aromatic foam gathers on top.",
      "Finish with mustard, cumin, and curry leaf tempering in pure ghee."
    ]
  },
  {
    "id": "paruppu-urundai-rasam",
    "name": "Paruppu Urundai Rasam",
    "subCategory": "soup",
    "prepTime": 25,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-rasam.jpg",
    "description": "Wholesome Tamil Nadu meal soup featuring tender steamed spiced chana-toor dal dumplings floating in tangy rasam broth.",
    "ingredients": [
      {
        "name": "Toor Dal & Chana Dal",
        "amount": "1/4 cup each (soaked 1 hr & ground coarse)"
      },
      {
        "name": "Fennel Seeds & Red Chilli",
        "amount": "1 tsp & 2 chillies"
      },
      {
        "name": "Tamarind Extract",
        "amount": "1.5 cups"
      },
      {
        "name": "Tomato & Rasam Powder",
        "amount": "1 tomato & 1 tbsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Coarsely grind soaked lentils with fennel seeds, red chillies, and salt; roll into marble-sized balls (urundai) and steam for 8 minutes.",
      "In a pot, boil tamarind water with tomato, rasam powder, turmeric, and salt for 6 minutes.",
      "Gently slide steamed dal dumplings into the bubbling rasam; simmer for 4 minutes so dumplings absorb rasam juices.",
      "Temper with mustard seeds and curry leaves in hot ghee; serve hot."
    ]
  },
  {
    "id": "yakhni-shorba",
    "name": "Kashmiri Gosht Yakhni Shorba",
    "subCategory": "soup",
    "prepTime": 40,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/mutton-paya-soup.jpg",
    "description": "Silky, delicate Kashmiri mutton broth simmered with beaten yogurt, dry mint, fennel powder, and dried ginger (saunth).",
    "ingredients": [
      {
        "name": "Mutton on the Bone",
        "amount": "400g"
      },
      {
        "name": "Fresh Curd (Whisked)",
        "amount": "1.5 cups"
      },
      {
        "name": "Fennel Powder (Saunf)",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Dry Ginger Powder (Saunth)",
        "amount": "1 tsp"
      },
      {
        "name": "Dried Mint (Pudina)",
        "amount": "1 tbsp (rubbed between palms)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Boil mutton with whole cardamoms, cinnamon, and 4 cups water until meat is tender; strain and reserve rich mutton broth.",
      "In a pot, whisk curd vigorously with 1 egg white or 1 tsp cornstarch (prevents curdling); cook on medium flame stirring continuously in one direction until curd comes to a boil.",
      "Add reserved mutton broth, fennel powder, dry ginger powder, and cooked mutton pieces to the boiling yogurt.",
      "Simmer for 10 minutes until flavors unify into a creamy pale broth.",
      "Temper with black cumin (shahi jeera) in hot ghee; crush dried mint leaves over top and serve warm."
    ]
  },
  {
    "id": "cream-tomato-soup",
    "name": "Classic Cream of Tomato Soup",
    "subCategory": "soup",
    "prepTime": 25,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-soup.jpg",
    "description": "Velvety restaurant-style tomato soup roasted with butter, fresh cream, bay leaf, and served with golden crunchy bread croutons.",
    "ingredients": [
      {
        "name": "Ripe Red Tomatoes",
        "amount": "800g (chopped)"
      },
      {
        "name": "Carrot & Onion",
        "amount": "1 small each (for natural sweetness)"
      },
      {
        "name": "Butter & Fresh Cream",
        "amount": "2 tbsp each"
      },
      {
        "name": "Garlic & Bay Leaf",
        "amount": "4 cloves & 1 leaf"
      },
      {
        "name": "Bread Croutons",
        "amount": "1 cup (crisp fried)"
      }
    ],
    "steps": [
      "Melt 1 tbsp butter in a pot; sauté bay leaf, garlic, chopped onion, and carrot for 3 minutes.",
      "Add chopped ripe tomatoes, salt, and 2 cups water; cook covered on medium heat for 15 minutes until mushy.",
      "Discard bay leaf; blend soup until velvety smooth; strain through a fine soup strainer.",
      "Return strained soup to pan, add a pinch of sugar, black pepper, and remaining butter; simmer 3 minutes.",
      "Swirl in fresh cream and serve crowned with crunchy fried bread croutons."
    ]
  },
  {
    "id": "sweet-corn-soup",
    "name": "Indo-Chinese Sweet Corn Soup",
    "subCategory": "soup",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-soup.jpg",
    "description": "Velvety homestyle sweet corn soup prepared with cream-style corn puree, tender whole corn kernels, carrots, and white pepper.",
    "ingredients": [
      {
        "name": "Sweet Corn Kernels",
        "amount": "1.5 cups (1 cup pureed + 1/2 cup whole)"
      },
      {
        "name": "Carrots & Beans",
        "amount": "1/4 cup (finely minced)"
      },
      {
        "name": "Cornstarch Slurry",
        "amount": "2 tbsp dissolved in 1/4 cup cold water"
      },
      {
        "name": "White Pepper Powder & Salt",
        "amount": "1/2 tsp & to taste"
      },
      {
        "name": "Butter",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Blend 1 cup sweet corn with 1/2 cup water into a smooth cream-style puree; strain to remove fibrous husks.",
      "Heat butter in a soup pot; sauté minced carrots, beans, and whole corn kernels for 2 minutes.",
      "Pour corn puree and 3 cups vegetable broth; bring to a rolling simmer.",
      "Slowly pour cornstarch slurry while stirring continuously to thicken the soup smoothly.",
      "Season with white pepper and salt; simmer for 2 minutes until glossy and serve piping hot."
    ]
  },
  {
    "id": "hot-sour-chicken-soup",
    "name": "Hot & Sour Chicken Soup",
    "subCategory": "soup",
    "prepTime": 20,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/chicken-shorba.jpg",
    "description": "Tangy and spicy street-style Indo-Chinese soup loaded with shredded chicken, mushrooms, soy sauce, vinegar, and beaten egg ribbons.",
    "ingredients": [
      {
        "name": "Shredded Boiled Chicken",
        "amount": "1 cup"
      },
      {
        "name": "Chicken Broth",
        "amount": "4 cups"
      },
      {
        "name": "Mushrooms, Cabbage & Carrots",
        "amount": "1 cup (finely shredded)"
      },
      {
        "name": "Soy Sauce, Vinegar & Chilli Paste",
        "amount": "1 tbsp each"
      },
      {
        "name": "Cornstarch Slurry",
        "amount": "2 tbsp"
      },
      {
        "name": "Egg",
        "amount": "1 (beaten)"
      }
    ],
    "steps": [
      "Bring chicken broth to a boil in a wok; add shredded chicken, mushrooms, cabbage, and carrots.",
      "Stir in soy sauce, vinegar, red chilli sauce, black pepper, and salt; boil for 3 minutes.",
      "Add cornstarch slurry slowly while stirring until soup thickens.",
      "Drizzle beaten egg in a slow steady stream in circular motion while gently swirling broth with a ladle to create delicate egg flower ribbons.",
      "Garnish with spring onions and serve steaming."
    ]
  },
  {
    "id": "lemon-coriander-soup",
    "name": "Zesty Lemon Coriander Soup",
    "subCategory": "soup",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-soup.jpg",
    "description": "Clear, tangy soup infused with fresh coriander stems, garlic juliennes, crunchy cabbage, carrots, and fresh lemon juice.",
    "ingredients": [
      {
        "name": "Fresh Coriander Stems",
        "amount": "1/2 cup (finely chopped)"
      },
      {
        "name": "Garlic & Ginger",
        "amount": "1 tbsp each (finely minced)"
      },
      {
        "name": "Vegetables (Carrot, Cabbage, Mushroom)",
        "amount": "1/2 cup (finely diced)"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "2 tbsp"
      },
      {
        "name": "Vegetable Stock",
        "amount": "4 cups"
      },
      {
        "name": "Cornstarch Slurry",
        "amount": "1.5 tbsp"
      }
    ],
    "steps": [
      "Heat 1 tbsp oil in a wok; sauté minced garlic, ginger, and coriander stems on high flame for 1 minute.",
      "Add finely diced vegetables and toss for 2 minutes while maintaining crunch.",
      "Pour vegetable stock, add salt and crushed black pepper; bring to a boil.",
      "Stir in cornstarch slurry to give a light velvety body.",
      "Turn off heat; stir in fresh lemon juice and chopped coriander leaves; serve steaming."
    ]
  },
  {
    "id": "manchow-soup",
    "name": "Desi Chinese Veg Manchow Soup",
    "subCategory": "soup",
    "prepTime": 20,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-soup.jpg",
    "description": "Spicy Indo-Chinese dark brown soup packed with finely minced vegetables, garlic, ginger, green chillies, topped with crispy fried noodles.",
    "ingredients": [
      {
        "name": "Finely Minced Cabbage, Carrots & Capsicum",
        "amount": "1.5 cups"
      },
      {
        "name": "Garlic & Ginger",
        "amount": "2 tbsp each (finely minced)"
      },
      {
        "name": "Green Chillies & Spring Onion",
        "amount": "2 chillies & 1/4 cup"
      },
      {
        "name": "Dark Soy Sauce & Vinegar",
        "amount": "1.5 tbsp & 1 tbsp"
      },
      {
        "name": "Cornstarch Slurry",
        "amount": "2.5 tbsp"
      },
      {
        "name": "Crispy Fried Hakka Noodles",
        "amount": "1 cup (for topping)"
      }
    ],
    "steps": [
      "Heat oil in a wok; sauté garlic, ginger, and green chillies on high flame until fragrant and slightly browned.",
      "Add minced vegetables; stir-fry on smoking heat for 2 minutes.",
      "Pour 4 cups vegetable broth, dark soy sauce, vinegar, and black pepper; bring to a rolling boil.",
      "Whisk in cornstarch slurry; cook until glossy and thick.",
      "Ladle into bowls and crown with heaps of crispy fried noodles."
    ]
  },
  {
    "id": "dal-palak-soup",
    "name": "Moong Dal Palak Shorba",
    "subCategory": "soup",
    "prepTime": 20,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-soup.jpg",
    "description": "Nutritious and comforting winter lentil soup made with yellow moong dal, tender baby spinach, roasted cumin, and garlic ghee.",
    "ingredients": [
      {
        "name": "Yellow Moong Dal",
        "amount": "1/2 cup (boiled till mushy)"
      },
      {
        "name": "Fresh Spinach (Palak)",
        "amount": "2 cups (washed & chopped)"
      },
      {
        "name": "Garlic Cloves & Ginger",
        "amount": "5 cloves & 1 inch"
      },
      {
        "name": "Cumin Seeds & Black Pepper",
        "amount": "1 tsp each"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Boil moong dal with turmeric and salt until completely soft; whisk smooth.",
      "Sauté chopped spinach and garlic in ghee for 3 minutes until wilted; blend half of it with dal.",
      "Combine blended dal-spinach with 2 cups water; simmer on medium flame for 5 minutes.",
      "Season with crushed black pepper and a squeeze of fresh lemon juice.",
      "Temper with cumin seeds and sliced garlic in hot ghee; serve hot."
    ]
  },
  {
    "id": "moringa-soup",
    "name": "Drumstick Leaves (Murungai Keerai) Soup",
    "subCategory": "soup",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/pepper-rasam.jpg",
    "description": "Iron and calcium-rich Tamil village wellness soup made with fresh moringa leaves simmered with shallots, crushed pepper, and cumin.",
    "ingredients": [
      {
        "name": "Fresh Drumstick / Moringa Leaves",
        "amount": "2 cups (cleaned & destemmed)"
      },
      {
        "name": "Shallots (Sambar Onions)",
        "amount": "8 (crushed)"
      },
      {
        "name": "Tomato",
        "amount": "1 small"
      },
      {
        "name": "Black Peppercorns & Cumin",
        "amount": "1 tbsp each (coarsely ground)"
      },
      {
        "name": "Garlic & Pure Cow Ghee",
        "amount": "4 cloves & 1 tsp"
      }
    ],
    "steps": [
      "Heat 1 tsp ghee; sauté crushed shallots and garlic for 1 minute.",
      "Add fresh moringa leaves, tomato, crushed black pepper, cumin seeds, turmeric, and 3 cups water.",
      "Simmer covered on medium-low flame for 10-12 minutes until leaves release their earthy herbal essence.",
      "Strain through a sieve (or drink rustic with tender leaves); season with sea salt.",
      "Sip warm for instant rejuvenation."
    ]
  },
  {
    "id": "crab-soup",
    "name": "Chettinad Nandu (Crab) Rasam",
    "subCategory": "soup",
    "prepTime": 25,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/pepper-rasam.jpg",
    "description": "Fiery coastal Tamil seafood rasam brewed with fresh crabs, cracked black pepper, shallots, garlic, and country tomatoes.",
    "ingredients": [
      {
        "name": "Fresh Sea Crab / Mud Crab",
        "amount": "300g (cleaned & cracked open)"
      },
      {
        "name": "Shallots & Country Tomatoes",
        "amount": "10 shallots & 2 tomatoes"
      },
      {
        "name": "Black Peppercorns & Cumin Seeds",
        "amount": "1.5 tbsp each (fresh crushed)"
      },
      {
        "name": "Garlic & Ginger",
        "amount": "6 cloves & 1 inch"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "1/2 cup (mild)"
      },
      {
        "name": "Sesame Oil",
        "amount": "1.5 tbsp"
      }
    ],
    "steps": [
      "Clean crab pieces and crack the claws gently so juices seep into the broth.",
      "Heat sesame oil; sauté shallots, garlic, ginger, and tomatoes until soft.",
      "Add crab pieces and sear on high heat for 3 minutes until shells blush bright orange.",
      "Add mild tamarind water, freshly crushed black pepper, cumin, turmeric, and 3 cups water.",
      "Simmer covered for 12 minutes until crab meat is cooked and broth turns rich and peppery.",
      "Temper with mustard seeds and curry leaves; serve piping hot."
    ]
  },
  {
    "id": "nihari-broth",
    "name": "Purani Dilli Nalli Nihari Broth",
    "subCategory": "soup",
    "prepTime": 45,
    "servings": 4,
    "veg": false,
    "image": "images/dishes/mutton-paya-soup.jpg",
    "description": "Slow-stewed bone marrow shank broth simmered overnight with fennel, ginger, mace, and long pepper (pipli).",
    "ingredients": [
      {
        "name": "Mutton Shank with Bone Marrow (Nalli)",
        "amount": "500g"
      },
      {
        "name": "Nihari Potli Masala (Fennel, Pipli, Mace, Cardamom)",
        "amount": "2 tbsp"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "2 tbsp"
      },
      {
        "name": "Roasted Atta Slurry",
        "amount": "1.5 tbsp (whisked in water)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Sear mutton shanks in hot ghee with ginger garlic paste until browned.",
      "Add nihari spice blend, turmeric, and 5 cups water.",
      "Simmer covered on lowest heat for 40 minutes until meat is fall-apart tender and bone marrow melts into the soup.",
      "Stir in roasted atta slurry to give a smooth, velvety broth body.",
      "Garnish with julienned fresh ginger, chopped coriander, green chillies, and lemon juice."
    ]
  },
  {
    "id": "mushroom-pepper-soup",
    "name": "Chettinad Mushroom Pepper Soup",
    "subCategory": "soup",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/pepper-rasam.jpg",
    "description": "Earthy button mushrooms sautéed with shallots and simmered in peppery South Indian vegetable broth with curry leaves.",
    "ingredients": [
      {
        "name": "Fresh Button Mushrooms",
        "amount": "200g (sliced)"
      },
      {
        "name": "Shallots & Garlic",
        "amount": "6 shallots & 4 cloves"
      },
      {
        "name": "Fresh Black Pepper & Cumin",
        "amount": "1 tbsp each (coarsely pounded)"
      },
      {
        "name": "Cornstarch / Rice Flour",
        "amount": "1 tbsp"
      },
      {
        "name": "Butter / Ghee",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Heat butter/ghee in a pot; sauté sliced shallots and garlic for 1 minute.",
      "Add sliced mushrooms and sauté on high flame until mushrooms brown and release aromatic juices.",
      "Pour 3.5 cups vegetable broth, add salt, and bring to a simmer.",
      "Stir in freshly ground black pepper and cumin powder.",
      "Whisk in 1 tbsp cornstarch dissolved in water; simmer 2 minutes until light and glossy; garnish with curry leaves."
    ]
  },
  {
    "id": "pumpkin-shorba",
    "name": "Bhuna Kaddu (Roasted Pumpkin) Shorba",
    "subCategory": "soup",
    "prepTime": 25,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-soup.jpg",
    "description": "Sweet and spicy golden soup made with roasted red pumpkin, caramelized onions, ginger, cumin, and coconut milk.",
    "ingredients": [
      {
        "name": "Yellow Pumpkin (Kaddu)",
        "amount": "400g (peeled & cubed)"
      },
      {
        "name": "Onion & Garlic",
        "amount": "1 small onion & 4 cloves"
      },
      {
        "name": "Coconut Milk",
        "amount": "1/2 cup"
      },
      {
        "name": "Cumin & Coriander Powder",
        "amount": "1 tsp each"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Heat ghee in a pot; sauté onion, garlic, and pumpkin cubes for 5 minutes.",
      "Add cumin, coriander powder, salt, and 2.5 cups water; simmer covered for 12 minutes until pumpkin is fork-tender.",
      "Puree soup using an immersion blender until velvety smooth.",
      "Return to flame; stir in coconut milk and a pinch of nutmeg.",
      "Simmer for 2 minutes without boiling; serve warm."
    ]
  },
  {
    "id": "clear-veg-broth",
    "name": "Himalayan Clear Vegetable Broth",
    "subCategory": "soup",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-soup.jpg",
    "description": "Light, restorative clear broth infused with fresh ginger juliennes, baby bok choy, carrots, tofu cubes, and toasted sesame oil.",
    "ingredients": [
      {
        "name": "Assorted Vegetables (Carrot, Cabbage, Broccoli, Mushroom)",
        "amount": "1.5 cups (finely sliced)"
      },
      {
        "name": "Fresh Ginger Juliennes",
        "amount": "1 tbsp"
      },
      {
        "name": "Garlic & Green Onions",
        "amount": "3 cloves & 2 stalks"
      },
      {
        "name": "Toasted Sesame Oil",
        "amount": "1 tsp"
      },
      {
        "name": "Soy Sauce & White Pepper",
        "amount": "1 tsp & 1/2 tsp"
      }
    ],
    "steps": [
      "Bring 4 cups vegetable stock to a gentle simmer with ginger juliennes and crushed garlic for 5 minutes.",
      "Add crisp sliced vegetables; simmer for just 3 minutes to keep them bright and crunchy.",
      "Season with light soy sauce, white pepper, and sea salt.",
      "Finish with a drizzle of toasted sesame oil and fresh spring onion greens."
    ]
  },
  {
    "id": "masala-chai",
    "name": "Tapri Wali Cutting Masala Chai",
    "subCategory": "drink",
    "prepTime": 10,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/masala-chai.jpg",
    "description": "Bold roadside cutting chai brewed with crushed ginger, green cardamom, cloves, cinnamon, and full cream milk simmered to perfection.",
    "ingredients": [
      {
        "name": "Strong Assam CTC Tea Dust",
        "amount": "2 tbsp"
      },
      {
        "name": "Fresh Ginger (Adrak)",
        "amount": "1 inch (crushed in mortar)"
      },
      {
        "name": "Green Cardamom Pods",
        "amount": "3 (bruised open)"
      },
      {
        "name": "Cloves & Cinnamon",
        "amount": "2 cloves & 1/2 inch stick"
      },
      {
        "name": "Full Cream Milk",
        "amount": "1 cup"
      },
      {
        "name": "Water",
        "amount": "1 cup"
      },
      {
        "name": "Sugar",
        "amount": "2 tsp"
      }
    ],
    "steps": [
      "In a saucepan, bring 1 cup water to a vigorous boil with freshly pounded ginger, bruised cardamoms, cloves, and cinnamon.",
      "Boil on medium heat for 2-3 minutes so water absorbs all medicinal spice oils and turns amber-yellow.",
      "Add strong Assam CTC tea leaves; boil on medium flame for 2 minutes until deep reddish-brown.",
      "Pour full cream milk and sugar; bring to a rolling boil.",
      "Lower the flame as milk rises to the brim; simmer for 3 minutes, letting the chai rise and fall 3 times.",
      "Strain through a fine mesh strainer into traditional cutting glasses from a height to build a frothy crown; serve piping hot with Osmania biscuits."
    ]
  },
  {
    "id": "adrak-elaichi-chai",
    "name": "Ghar Ki Adrak Elaichi Chai",
    "subCategory": "drink",
    "prepTime": 10,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/masala-chai.jpg",
    "description": "Classic everyday homestyle Indian tea infused with juicy crushed fresh ginger root and green cardamom pods.",
    "ingredients": [
      {
        "name": "Tea Leaves (Chai Patti)",
        "amount": "2 tsp"
      },
      {
        "name": "Fresh Ginger",
        "amount": "1.5 inch (grated)"
      },
      {
        "name": "Green Cardamom",
        "amount": "4 pods (crushed fine)"
      },
      {
        "name": "Milk & Water",
        "amount": "1 cup each"
      },
      {
        "name": "Sugar",
        "amount": "2 tsp"
      }
    ],
    "steps": [
      "Boil water with grated ginger and cardamom powder for 3 minutes until fragrant.",
      "Add tea leaves and simmer for 2 minutes.",
      "Add milk and sugar; bring to a full rolling boil.",
      "Simmer for 2 minutes until tea takes on a deep caramel hue.",
      "Strain into teacups and serve with crisp rusk."
    ]
  },
  {
    "id": "filter-coffee",
    "name": "Kumbakonam Degree Filter Coffee",
    "subCategory": "drink",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/filter-coffee.jpg",
    "description": "Iconic South Indian filter coffee brewed with dark roast chicory coffee blend, poured with scalding full-cream milk in brass davarah-tumblers.",
    "ingredients": [
      {
        "name": "Filter Coffee Powder (80:20 Coffee-Chicory Blend)",
        "amount": "3 tbsp"
      },
      {
        "name": "Boiling Hot Water",
        "amount": "3/4 cup"
      },
      {
        "name": "Full Cream Buffalo / Cow Milk",
        "amount": "1.5 cups (boiled without water)"
      },
      {
        "name": "Sugar",
        "amount": "2 tsp"
      }
    ],
    "steps": [
      "Add coffee powder into the upper perforated chamber of a traditional brass coffee filter; press down lightly with plunger.",
      "Pour boiling hot water slowly over pressed powder; close lid and let decoction drip undisturbed for 12-15 minutes.",
      "Boil thick full-cream milk in a saucepan until piping hot and frothy.",
      "In a traditional brass davarah-tumbler, add sugar and 3 tablespoons of thick first-drip coffee decoction.",
      "Pour boiling milk from a height to create thick creamy foam without stirring with a spoon.",
      "Froth by pouring back and forth between the tumbler and davarah in long rhythmic arcs; serve steaming hot."
    ]
  },
  {
    "id": "irani-chai",
    "name": "Hyderabadi Irani Chai",
    "subCategory": "drink",
    "prepTime": 35,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/masala-chai.jpg",
    "description": "Rich, creamy Hyderabad cafe specialty: concentrated black tea decoction combined with slow-condensed creamy milk (khoya milk).",
    "ingredients": [
      {
        "name": "Assam Black Tea",
        "amount": "3 tbsp"
      },
      {
        "name": "Water",
        "amount": "2 cups (for sealed dum decoction)"
      },
      {
        "name": "Full Cream Milk",
        "amount": "3 cups"
      },
      {
        "name": "Condensed Milk / Mawa",
        "amount": "2 tbsp"
      },
      {
        "name": "Cardamom Pods",
        "amount": "4"
      },
      {
        "name": "Sugar",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "In a heavy pot, simmer full cream milk with condensed milk and cardamom on low heat for 30 minutes until reduced by half into thick, sweet creamy milk.",
      "In another pot, boil tea powder, sugar, and water; seal lid with dough or foil and simmer on lowest heat for 20 minutes to extract a dark, potent 'dum' decoction.",
      "To serve, pour 1/3 cup of steaming thick reduced milk into a glass.",
      "Top with 2/3 cup of boiling hot black tea decoction; serve with crispy bun maska."
    ]
  },
  {
    "id": "kashmiri-kahwa",
    "name": "Royal Kashmiri Saffron Kahwa",
    "subCategory": "drink",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/masala-chai.jpg",
    "description": "Fragrant golden Kashmiri green tea brewed with whole green cardamom, cinnamon, saffron strands, and slivered blanched almonds.",
    "ingredients": [
      {
        "name": "Kashmiri Green Tea Leaves",
        "amount": "1.5 tsp"
      },
      {
        "name": "Saffron (Kesar)",
        "amount": "15 strands"
      },
      {
        "name": "Green Cardamom & Cinnamon",
        "amount": "3 pods & 1 stick"
      },
      {
        "name": "Almonds",
        "amount": "1 tbsp (finely slivered)"
      },
      {
        "name": "Honey / Sugar",
        "amount": "1.5 tbsp"
      }
    ],
    "steps": [
      "Boil water with crushed cardamom pods and cinnamon stick in a pot for 4 minutes to infuse spices.",
      "Add saffron threads and Kashmiri green tea leaves; immediately turn off heat and cover with lid to steep for 3 minutes.",
      "Place slivered almonds and honey in traditional handle-less cups.",
      "Strain the hot golden saffron tea into the cups; stir gently and sip warm."
    ]
  },
  {
    "id": "sulaimani-chai",
    "name": "Malabar Sulaimani Tea",
    "subCategory": "drink",
    "prepTime": 10,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/masala-chai.jpg",
    "description": "Soul-satisfying Kerala post-biryani digestive black tea infused with cardamom, cloves, fresh mint leaves, and a squeeze of fresh lemon.",
    "ingredients": [
      {
        "name": "Black Tea Leaves",
        "amount": "1 tsp"
      },
      {
        "name": "Cardamom & Cloves",
        "amount": "2 pods & 1 clove"
      },
      {
        "name": "Fresh Mint Leaves",
        "amount": "4-5"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "1 tsp"
      },
      {
        "name": "Jaggery / Sugar",
        "amount": "2 tsp"
      }
    ],
    "steps": [
      "Boil 2 cups water with bruised cardamom, clove, and jaggery for 3 minutes.",
      "Add black tea leaves; simmer for 45 seconds until golden-amber.",
      "Turn off heat; drop fresh mint leaves and squeeze fresh lemon juice.",
      "Strain into glasses and serve hot after a hearty biryani meal."
    ]
  },
  {
    "id": "sweet-lassi",
    "name": "Amritsari Malai Sweet Lassi",
    "subCategory": "drink",
    "prepTime": 10,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/sweet-lassi.jpg",
    "description": "Thick, creamy Punjabi yogurt cooler hand-churned with a wooden mathani, topped with rosewater and a thick slab of fresh malai.",
    "ingredients": [
      {
        "name": "Thick Fresh Curd (Dahi)",
        "amount": "2 cups (cold & fresh, not sour)"
      },
      {
        "name": "Powdered Sugar",
        "amount": "4 tbsp"
      },
      {
        "name": "Cardamom Powder & Rose Water",
        "amount": "1/2 tsp & 1 tsp"
      },
      {
        "name": "Chilled Water / Ice",
        "amount": "1/4 cup"
      },
      {
        "name": "Fresh Buffalo Milk Malai / Cream",
        "amount": "2 tbsp (for topping)"
      }
    ],
    "steps": [
      "Whisk cold fresh curd with powdered sugar, cardamom powder, rosewater, and a few ice cubes using a traditional wooden churner (madhani) until thick and frothy.",
      "Pour into tall clay glasses (kulhad).",
      "Crown with a thick dollop of fresh clotted cream (malai), sliced pistachios, and saffron strands.",
      "Serve ice-cold."
    ]
  },
  {
    "id": "mango-lassi",
    "name": "Alphonso Mango Lassi",
    "subCategory": "drink",
    "prepTime": 10,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/mango-lassi.jpg",
    "description": "Luscious, golden summer cooler made with sweet Alphonso mango pulp, thick yogurt, cardamom, and saffron.",
    "ingredients": [
      {
        "name": "Fresh Alphonso Mango Pulp",
        "amount": "1 cup"
      },
      {
        "name": "Thick Fresh Yogurt",
        "amount": "1.5 cups"
      },
      {
        "name": "Milk",
        "amount": "1/4 cup"
      },
      {
        "name": "Sugar / Honey",
        "amount": "2 tbsp"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/4 tsp"
      }
    ],
    "steps": [
      "Combine fresh mango pulp, thick chilled yogurt, milk, sugar, and cardamom powder in a blender.",
      "Blend until velvety smooth, thick, and uniformly golden.",
      "Pour into glasses over crushed ice; garnish with diced mango cubes and mint leaf."
    ]
  },
  {
    "id": "masala-chaas",
    "name": "Spiced Matka Masala Chaas",
    "subCategory": "drink",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/masala-chaas.jpg",
    "description": "Cooling Indian buttermilk blended with roasted cumin, green chillies, ginger, fresh mint, black salt, and tempered with mustard seeds.",
    "ingredients": [
      {
        "name": "Fresh Curd (Dahi)",
        "amount": "1 cup"
      },
      {
        "name": "Chilled Water",
        "amount": "3 cups"
      },
      {
        "name": "Green Chilli & Ginger",
        "amount": "1 small chilli & 1/2 inch"
      },
      {
        "name": "Fresh Mint & Coriander",
        "amount": "2 tbsp each"
      },
      {
        "name": "Roasted Cumin Powder (Bhuna Jeera)",
        "amount": "1 tsp"
      },
      {
        "name": "Kala Namak (Black Salt)",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Pound green chilli, ginger, mint, and coriander in a mortar into a coarse paste.",
      "In a pitcher, whisk curd, chilled water, herb paste, roasted cumin powder, black salt, and rock salt until frothy.",
      "Pour into earthenware kulhads over ice cubes.",
      "Garnish with a dusting of roasted cumin powder and fresh mint."
    ]
  },
  {
    "id": "thandai",
    "name": "Royal Shahi Kesar Thandai",
    "subCategory": "drink",
    "prepTime": 20,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/thandai.jpg",
    "description": "Sacred festival cooler made with blanched almonds, poppy seeds (khus khus), fennel, rose petals, black pepper, and saffron steeped in cold milk.",
    "ingredients": [
      {
        "name": "Almonds & Cashews",
        "amount": "1/4 cup each (soaked & peeled)"
      },
      {
        "name": "Poppy Seeds (Khus Khus)",
        "amount": "2 tbsp (soaked)"
      },
      {
        "name": "Fennel Seeds (Saunf)",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Black Peppercorns",
        "amount": "10-12"
      },
      {
        "name": "Dried Rose Petals & Cardamom",
        "amount": "2 tbsp & 4 pods"
      },
      {
        "name": "Full Cream Milk",
        "amount": "4 cups (boiled & chilled)"
      },
      {
        "name": "Sugar & Saffron",
        "amount": "1/2 cup & generous pinch"
      }
    ],
    "steps": [
      "Soak almonds, cashews, poppy seeds, fennel seeds, peppercorns, cardamom, and dried rose petals in warm water for 4 hours.",
      "Grind soaked ingredients into an ultra-fine, silky smooth paste with saffron milk.",
      "Whisk 3 tablespoons of thandai paste into cold boiled milk with sugar until completely incorporated.",
      "Chill for 2 hours so flavors infuse; serve in earthen cups topped with rose petals."
    ]
  },
  {
    "id": "jaljeera",
    "name": "Delhi Chandni Chowk Jaljeera",
    "subCategory": "drink",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/jaljeera.jpg",
    "description": "Zesty, digestive summer cooler packed with fresh mint, tamarind pulp, roasted cumin, amchur, black salt, and crispy boondi.",
    "ingredients": [
      {
        "name": "Fresh Mint Leaves (Pudina)",
        "amount": "1 cup"
      },
      {
        "name": "Fresh Coriander Leaves",
        "amount": "1/2 cup"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "2 tbsp"
      },
      {
        "name": "Roasted Cumin Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Amchur & Black Salt",
        "amount": "1 tsp & 1 tsp"
      },
      {
        "name": "Cold Water & Ice",
        "amount": "4 cups"
      },
      {
        "name": "Crispy Salted Boondi",
        "amount": "1/4 cup (for topping)"
      }
    ],
    "steps": [
      "Blend fresh mint, coriander, ginger, green chilli, and tamarind pulp into a smooth green concentrate.",
      "Mix the herb puree with chilled water, roasted cumin powder, amchur, black salt, and regular salt.",
      "Stir well and chill in the refrigerator.",
      "Pour into glasses over ice; float crispy boondi on top right before serving."
    ]
  },
  {
    "id": "aam-panna",
    "name": "Kache Aam ka Panna",
    "subCategory": "drink",
    "prepTime": 25,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/aam-panna.jpg",
    "description": "Timeless North Indian heatstroke remedy made with fire-roasted raw green mangoes, jaggery, roasted cumin, and black salt.",
    "ingredients": [
      {
        "name": "Raw Green Mangoes (Kacha Aam)",
        "amount": "2 large (pressure cooked or charred)"
      },
      {
        "name": "Jaggery (Gud) / Sugar",
        "amount": "1/2 cup"
      },
      {
        "name": "Roasted Cumin Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Kala Namak (Black Salt)",
        "amount": "1 tsp"
      },
      {
        "name": "Fresh Mint Leaves",
        "amount": "1/4 cup"
      },
      {
        "name": "Chilled Water & Ice",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Pressure cook raw mangoes with water for 3 whistles until soft and collapsed.",
      "Let cool; peel skin and scrape out all the tangy green mango pulp with a spoon.",
      "Blend mango pulp with jaggery, fresh mint leaves, roasted cumin powder, black salt, and regular salt into a smooth concentrate.",
      "To serve, add 3 tablespoons of aam panna concentrate to a tall glass, top with ice cubes and chilled water, stir vigorously, and enjoy."
    ]
  },
  {
    "id": "kokum-sharbat",
    "name": "Konkani Kokum Sharbat",
    "subCategory": "drink",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/kokum-sharbat.jpg",
    "description": "Ruby-red Coastal Karnataka and Goan cooler made with wild dried kokum rind infused with cumin, black salt, and sugar.",
    "ingredients": [
      {
        "name": "Semi-Dried Kokum Rinds",
        "amount": "10-12 (soaked in 1 cup warm water)"
      },
      {
        "name": "Sugar / Jaggery",
        "amount": "1/2 cup"
      },
      {
        "name": "Roasted Cumin Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Black Salt & Cardamom",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Chilled Water",
        "amount": "3 cups"
      }
    ],
    "steps": [
      "Mash soaked kokum rinds in water to extract rich purple-red juice; strain.",
      "Boil the kokum extract with sugar for 5 minutes until sugar dissolves completely into a syrup; cool.",
      "Mix kokum syrup with chilled water, roasted cumin powder, and black salt.",
      "Serve over ice cubes in clear glasses."
    ]
  },
  {
    "id": "badam-milk",
    "name": "Kesar Badam Milk",
    "subCategory": "drink",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/badam-milk.jpg",
    "description": "Rich and nourishing sweet beverage made with blanched almonds pureed with cardamom, saffron, and simmered in full-cream milk.",
    "ingredients": [
      {
        "name": "Almonds (Badam)",
        "amount": "20 (soaked in boiling water & peeled)"
      },
      {
        "name": "Full Cream Milk",
        "amount": "2.5 cups"
      },
      {
        "name": "Sugar",
        "amount": "3 tbsp"
      },
      {
        "name": "Saffron (Kesar)",
        "amount": "15 strands"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Grind blanched and peeled almonds with 3 tbsp warm milk into a fine, smooth paste.",
      "Bring remaining milk to a boil in a saucepan with saffron threads.",
      "Whisk almond paste and sugar into the simmering milk; cook on medium-low flame for 6 minutes until rich and aromatic.",
      "Stir in green cardamom powder.",
      "Serve hot in winter, or chill in the refrigerator for 2 hours for a luxurious cold summer drink."
    ]
  },
  {
    "id": "solkadhi",
    "name": "Goan Solkadhi",
    "subCategory": "drink",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/kokum-sharbat.jpg",
    "description": "Pink digestive Konkani elixir made with freshly extracted coconut milk, tart kokum juice, garlic, green chillies, and coriander.",
    "ingredients": [
      {
        "name": "Fresh Grated Coconut",
        "amount": "2 cups (thick coconut milk extracted)"
      },
      {
        "name": "Kokum Rinds (Aamsul)",
        "amount": "8-10 (soaked in 1/2 cup warm water)"
      },
      {
        "name": "Garlic & Green Chilli",
        "amount": "2 cloves & 1 chilli"
      },
      {
        "name": "Fresh Coriander Leaves",
        "amount": "2 tbsp (chopped)"
      },
      {
        "name": "Rock Salt",
        "amount": "to taste"
      }
    ],
    "steps": [
      "Soak kokum rinds in warm water for 20 minutes; squeeze out all tangy deep-pink extract; discard rinds.",
      "Grind fresh coconut with garlic, green chilli, and 1/2 cup water; strain through muslin cloth to extract thick rich coconut milk.",
      "Combine fresh coconut milk with the pink kokum extract (it will turn into a pastel blush pink).",
      "Stir in rock salt and finely chopped coriander leaves.",
      "Chill and sip after a seafood feast for optimal digestion."
    ]
  },
  {
    "id": "shikanji",
    "name": "Old Delhi Masala Shikanji",
    "subCategory": "drink",
    "prepTime": 5,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/jaljeera.jpg",
    "description": "Bubbly spiced Indian lemonade prepared with freshly squeezed lemons, mint, black salt, roasted cumin, and club soda.",
    "ingredients": [
      {
        "name": "Fresh Lemon Juice",
        "amount": "4 tbsp"
      },
      {
        "name": "Sugar Syrup",
        "amount": "3 tbsp"
      },
      {
        "name": "Shikanji Masala (Bhuna Jeera + Kala Namak + Pepper)",
        "amount": "1 tsp"
      },
      {
        "name": "Fresh Mint Leaves",
        "amount": "6-8 (muddled)"
      },
      {
        "name": "Chilled Club Soda / Water",
        "amount": "2 cups"
      }
    ],
    "steps": [
      "In a tall glass, muddle fresh mint leaves with lemon juice and sugar syrup.",
      "Add shikanji masala and plenty of ice cubes.",
      "Pour chilled sparkling club soda from a height for maximum fizz.",
      "Stir quickly with a swizzle stick and serve immediately."
    ]
  },
  {
    "id": "nannari-sharbat",
    "name": "Madurai Nannari Sharbat",
    "subCategory": "drink",
    "prepTime": 10,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/aam-panna.jpg",
    "description": "Body-cooling South Indian root sharbat made from wild Indian sarsaparilla (nannari) root syrup, fresh lemon juice, and soaked sabja seeds.",
    "ingredients": [
      {
        "name": "Nannari Root Syrup",
        "amount": "3 tbsp"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Soaked Sabja Seeds (Basil Seeds)",
        "amount": "1 tbsp (plumped in water)"
      },
      {
        "name": "Chilled Water & Ice",
        "amount": "1.5 cups"
      }
    ],
    "steps": [
      "Soak sabja seeds in warm water for 10 minutes until they swell with a gelatinous halo.",
      "In a tall glass, add nannari root syrup, fresh lemon juice, and plumped sabja seeds.",
      "Add ice cubes and pour chilled water.",
      "Stir gently; enjoy the earthy, aromatic body cooler."
    ]
  },
  {
    "id": "jigarthanda",
    "name": "Famous Madurai Jigarthanda",
    "subCategory": "drink",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/badam-milk.jpg",
    "description": "Legendary Madurai cooling dessert drink made with soaked almond gum (badam pisin), nannari syrup, thick caramelized reduced milk, and ice cream.",
    "ingredients": [
      {
        "name": "Badam Pisin (Almond Gum)",
        "amount": "1 tbsp (soaked overnight into jelly)"
      },
      {
        "name": "Nannari Syrup",
        "amount": "2 tbsp"
      },
      {
        "name": "Reduced Basundi / Caramel Milk",
        "amount": "1/2 cup (thick)"
      },
      {
        "name": "Chilled Milk",
        "amount": "1 cup"
      },
      {
        "name": "Palgova / Vanilla Ice Cream Scoop",
        "amount": "1 scoop"
      }
    ],
    "steps": [
      "Soak almond gum overnight; it will swell into clear, firm jelly crystals.",
      "In a tall glass, add 2 tablespoons of soaked badam pisin jelly.",
      "Drizzle nannari root syrup and pour cold milk.",
      "Add thick caramelized reduced basundi milk.",
      "Top with a generous scoop of ice cream or traditional palgova; serve with a spoon and straw."
    ]
  },
  {
    "id": "panakam",
    "name": "Sri Rama Navami Panakam",
    "subCategory": "drink",
    "prepTime": 5,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/jaljeera.jpg",
    "description": "Sacred ancient Vedic cooler made with jaggery water, crushed black peppercorns, dry ginger powder (saunth), green cardamom, and holy tulsi.",
    "ingredients": [
      {
        "name": "Pure Jaggery (Gud)",
        "amount": "3/4 cup (grated)"
      },
      {
        "name": "Water",
        "amount": "3 cups"
      },
      {
        "name": "Dry Ginger Powder (Saunth)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Black Peppercorns",
        "amount": "1/2 tsp (freshly crushed)"
      },
      {
        "name": "Green Cardamom Powder",
        "amount": "1/2 tsp"
      },
      {
        "name": "Edible Camphor & Tulsi Leaves",
        "amount": "tiny speck & 4 leaves"
      }
    ],
    "steps": [
      "Dissolve grated jaggery completely in 3 cups of fresh cool water; strain through a fine sieve to remove any sediment.",
      "Add dry ginger powder, freshly crushed black pepper, and cardamom powder.",
      "Add a microscopic speck of edible camphor (pacha karpooram) and torn holy tulsi leaves.",
      "Stir well and serve at room temperature or slightly chilled in earthenware glasses."
    ]
  },
  {
    "id": "sattu-namkeen-sharbat",
    "name": "Bihari Namkeen Sattu Sharbat",
    "subCategory": "drink",
    "prepTime": 5,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/jaljeera.jpg",
    "description": "High-protein powerhouse energy drink from Bihar made with roasted chana sattu flour, green chillies, onions, lemon juice, and black salt.",
    "ingredients": [
      {
        "name": "Chana Sattu (Roasted Gram Flour)",
        "amount": "4 tbsp"
      },
      {
        "name": "Chilled Water",
        "amount": "2 cups"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "2 tbsp"
      },
      {
        "name": "Onion",
        "amount": "1 tbsp (minced super fine)"
      },
      {
        "name": "Green Chilli",
        "amount": "1/2 tsp (finely chopped)"
      },
      {
        "name": "Roasted Cumin Powder & Black Salt",
        "amount": "1 tsp & 1/2 tsp"
      }
    ],
    "steps": [
      "Add sattu flour into a pitcher; gradually whisk in chilled water to form a smooth, lump-free drink.",
      "Stir in fresh lemon juice, roasted cumin powder, black salt, and rock salt.",
      "Add finely minced raw onion, green chillies, and chopped fresh mint.",
      "Pour into glasses over ice; the ultimate natural protein meal in a glass."
    ]
  },
  {
    "id": "ganne-ka-ras",
    "name": "Homestyle Ganne ka Ras (Sugarcane Juice)",
    "subCategory": "drink",
    "prepTime": 10,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/aam-panna.jpg",
    "description": "Sweet and tangy roadside sugarcane cooler blended with crushed fresh ginger, green chillies, mint, lemon, and black salt.",
    "ingredients": [
      {
        "name": "Sugarcane Jaggery / Fresh Cane Juice",
        "amount": "1/2 cup jaggery dissolved in 2 cups chilled water"
      },
      {
        "name": "Fresh Ginger",
        "amount": "1 inch"
      },
      {
        "name": "Fresh Mint Leaves",
        "amount": "1/4 cup"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "2 tbsp"
      },
      {
        "name": "Kala Namak (Black Salt)",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Blend jaggery water with fresh ginger, mint leaves, black salt, and lemon juice until frothy.",
      "Strain through a fine mesh strainer to discard ginger fibers.",
      "Pour into glasses filled with crushed ice; tastes remarkably identical to freshly crushed cane juice."
    ]
  },
  {
    "id": "masala-dudh",
    "name": "Kojagiri Masala Dudh",
    "subCategory": "drink",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/badam-milk.jpg",
    "description": "Festive Maharashtrian spiced milk infused with coarsely pounded almonds, pistachios, cashews, saffron, nutmeg, and cardamom.",
    "ingredients": [
      {
        "name": "Full Cream Milk",
        "amount": "3 cups"
      },
      {
        "name": "Dry Fruits (Almonds, Cashews, Pistachios)",
        "amount": "1/4 cup (coarsely powdered)"
      },
      {
        "name": "Saffron (Kesar)",
        "amount": "15 strands"
      },
      {
        "name": "Cardamom & Nutmeg Powder",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Sugar",
        "amount": "2.5 tbsp"
      }
    ],
    "steps": [
      "Bring milk to a rolling boil in a heavy saucepan; reduce heat to medium.",
      "Add coarsely powdered dry fruit masala, saffron threads, and sugar.",
      "Simmer for 8-10 minutes, stirring occasionally, until milk turns creamy golden and nutty.",
      "Stir in cardamom powder and freshly grated nutmeg.",
      "Serve warm on festive moonlit nights or chill for a luxurious treat."
    ]
  },
  {
    "id": "cold-coffee",
    "name": "Cafe Style Thick Cold Coffee",
    "subCategory": "drink",
    "prepTime": 5,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/filter-coffee.jpg",
    "description": "Frothy, thick Indian cafe-style cold coffee whipped with instant coffee, chilled milk, chocolate drizzle, and vanilla ice cream.",
    "ingredients": [
      {
        "name": "Instant Coffee Powder",
        "amount": "2 tbsp (dissolved in 2 tbsp warm water)"
      },
      {
        "name": "Chilled Full Cream Milk",
        "amount": "2 cups"
      },
      {
        "name": "Sugar",
        "amount": "2.5 tbsp"
      },
      {
        "name": "Vanilla Ice Cream",
        "amount": "2 generous scoops"
      },
      {
        "name": "Chocolate Syrup & Ice",
        "amount": "for glass lining & blending"
      }
    ],
    "steps": [
      "In a blender, add warm coffee mixture, sugar, chilled milk, ice cubes, and 1 scoop of vanilla ice cream.",
      "Blend on high speed for 1 full minute until thick, frothy, and foamy.",
      "Drizzle chocolate syrup decoratively along the inner walls of tall serving glasses.",
      "Pour frothy cold coffee into the glasses.",
      "Top with a second scoop of vanilla ice cream and a dusting of cocoa or coffee powder."
    ]
  },
  {
    "id": "mohabbat-ka-sharbat",
    "name": "Jama Masjid Mohabbat ka Sharbat",
    "subCategory": "drink",
    "prepTime": 5,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/sweet-lassi.jpg",
    "description": "Old Delhi iconic summer cooler: chilled sweet rose milk studded with crunchy, juicy hand-chopped fresh watermelon cubes.",
    "ingredients": [
      {
        "name": "Chilled Full Cream Milk",
        "amount": "4 cups"
      },
      {
        "name": "Rooh Afza / Rose Syrup",
        "amount": "1/2 cup"
      },
      {
        "name": "Fresh Sweet Watermelon",
        "amount": "2 cups (finely diced into tiny cubes, deseeded)"
      },
      {
        "name": "Powdered Sugar",
        "amount": "2 tbsp (if needed)"
      },
      {
        "name": "Crushed Ice",
        "amount": "2 cups"
      }
    ],
    "steps": [
      "In a large punch bowl or pitcher, mix chilled milk with Rooh Afza rose syrup and powdered sugar until it turns a delicate baby pink.",
      "Add plenty of crushed ice to chill thoroughly.",
      "Dump in the tiny sweet watermelon cubes.",
      "Ladle into glasses making sure every glass gets a generous bounty of crunchy watermelon cubes and fragrant rose milk; serve immediately."
    ]
  },
  {
    "id": "rooh-afza-sharbat",
    "name": "Classic Gulab Rooh Afza Lemonade",
    "subCategory": "drink",
    "prepTime": 5,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/kokum-sharbat.jpg",
    "description": "Refreshing herbal rose cooler mixed with chilled water, freshly squeezed lemon juice, mint sprigs, and soaked basil seeds.",
    "ingredients": [
      {
        "name": "Rooh Afza Syrup",
        "amount": "3 tbsp"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Soaked Sabja (Basil) Seeds",
        "amount": "1 tbsp"
      },
      {
        "name": "Fresh Mint Leaves",
        "amount": "6"
      },
      {
        "name": "Chilled Water & Ice",
        "amount": "2 cups"
      }
    ],
    "steps": [
      "In glasses, add Rooh Afza syrup, fresh lemon juice, and soaked sabja seeds.",
      "Fill glasses with ice cubes and pour chilled water.",
      "Garnish with bruised fresh mint leaves.",
      "Stir well with a tall spoon and enjoy."
    ]
  }
];
