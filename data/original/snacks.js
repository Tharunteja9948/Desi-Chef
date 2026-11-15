// Section 5: Snacks, Starters & Tikkas (Tikkas, Pakoras, Cutlets, Bondas, Regional Namkeen)
// Every single recipe features complete, authentic, distinct culinary instructions and ingredients
const SNACK_RECIPES = [
  {
    "id": "paneer-tikka",
    "name": "Classic Tandoori Paneer Tikka",
    "subCategory": "tikkas-kebabs",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/paneer-tikka.jpg",
    "description": "Succulent cubes of malai paneer marinated in roasted gram flour, hung curd, and ajwain, skewered with onions and bell peppers and roasted till smoky.",
    "ingredients": [
      {
        "name": "Paneer",
        "amount": "250g (thick square slabs)"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/2 cup (hung in muslin)"
      },
      {
        "name": "Capsicum",
        "amount": "1 large (cubed)"
      },
      {
        "name": "Onion",
        "amount": "1 large (petals separated)"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "2 tbsp (roasted golden)"
      },
      {
        "name": "Mustard Oil",
        "amount": "2 tbsp (heated till smoking)"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Kashmiri Chilli Powder",
        "amount": "1.5 tbsp"
      }
    ],
    "steps": [
      "Whisk hung curd with roasted besan, hot mustard oil, Kashmiri chilli powder, ajwain, ginger-garlic paste, chaat masala, and salt until bright orange and smooth.",
      "Gently toss paneer cubes, onion petals, and capsicum squares in the marinade; coat thoroughly and rest for 30 minutes in the refrigerator.",
      "Thread alternating pieces of onion, capsicum, and paneer onto metal or soaked wooden skewers.",
      "Place on a smoking hot tawa with 1 tsp ghee (or inside an oven/tandoor at 220°C).",
      "Roast for 8-10 minutes, basting with melted butter and rotating occasionally until all edges develop golden-black charred spots.",
      "Sprinkle generous chaat masala and freshly squeezed lemon juice; serve piping hot with spicy mint-coriander chutney."
    ]
  },
  {
    "id": "chicken-tikka",
    "name": "Murgh Tandoori Chicken Tikka",
    "subCategory": "tikkas-kebabs",
    "prepTime": 30,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chicken-tikka.jpg",
    "description": "Juicy boneless chicken thighs marinated twice with Kashmiri deggi mirch, kasuri methi, and mustard oil, charred over coals.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "400g (boneless thighs cut into 1.5-inch cubes)"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/2 cup (thick hung dahi)"
      },
      {
        "name": "Mustard Oil",
        "amount": "2.5 tbsp"
      },
      {
        "name": "Ginger",
        "amount": "1.5 tbsp paste"
      },
      {
        "name": "Garlic",
        "amount": "1.5 tbsp paste"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tbsp (toasted & crushed)"
      },
      {
        "name": "Deggi Mirch",
        "amount": "2 tbsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp (for basting)"
      }
    ],
    "steps": [
      "First Marination: Rub chicken cubes with 1 tbsp ginger-garlic paste, Kashmiri red chilli powder, lemon juice, and salt; rest for 20 minutes.",
      "Second Marination: Whisk hung curd, smoked mustard oil, roasted besan, kasuri methi, garam masala, and black salt into a thick emulsion.",
      "Squeeze out excess moisture from chicken, rub thoroughly with the second marinade, and refrigerate for 2 hours.",
      "Thread chicken onto skewers, leaving small gaps so heat circulates evenly.",
      "Pan-sear on high flame in a grill pan (or roast in oven/tandoor) for 10-12 minutes, basting with melted ghee until edges are blistered and charred.",
      "Perform a 2-minute dhungar smoke with hot charcoal and ghee; sprinkle chaat masala and serve with onion rings and lemon wedges."
    ]
  },
  {
    "id": "malai-tikka",
    "name": "Murgh Malai Tikka",
    "subCategory": "tikkas-kebabs",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/malai-tikka.jpg",
    "description": "Melt-in-mouth creamy chicken kebabs marinated in cashew paste, hung curd, grated cheese, green cardamom, and white pepper.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "400g (boneless thigh or breast cubes)"
      },
      {
        "name": "Fresh Cream",
        "amount": "3 tbsp"
      },
      {
        "name": "Processed Cheese",
        "amount": "2 tbsp (grated fine)"
      },
      {
        "name": "Cashews",
        "amount": "12 (ground to smooth paste)"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/3 cup (hung)"
      },
      {
        "name": "White Pepper Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/2 tsp"
      },
      {
        "name": "Ginger & Garlic",
        "amount": "1 tbsp paste"
      }
    ],
    "steps": [
      "In a bowl, mash grated cheese with heavy cream until smooth and lump-free.",
      "Add hung curd, cashew paste, ginger-garlic paste, white pepper powder, green cardamom powder, lemon juice, and salt; whisk into a rich white marinade.",
      "Add chicken cubes and massage the creamy marinade into the meat; chill covered for at least 1 hour.",
      "Skewer chicken cubes and place on a moderately hot greased grill pan or tawa.",
      "Cook on medium heat for 10-12 minutes, turning gently so the white coating browns into appetizing golden speckles without drying out.",
      "Brush with melted butter, sprinkle a pinch of cardamom and chaat masala, and serve warm with green chutney."
    ]
  },
  {
    "id": "hariyali-tikka",
    "name": "Hariyali Chicken Kebab",
    "subCategory": "tikkas-kebabs",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/hariyali-tikka.jpg",
    "description": "Vibrant emerald-green charred chicken kebabs infused with fresh mint leaves, coriander, green chillies, and roasted cumin.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "400g (boneless cubes)"
      },
      {
        "name": "Fresh Mint Leaves",
        "amount": "1 packed cup"
      },
      {
        "name": "Fresh Coriander",
        "amount": "1 packed cup"
      },
      {
        "name": "Green Chillies",
        "amount": "4"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/3 cup (thick)"
      },
      {
        "name": "Roasted Cumin Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Ginger & Garlic",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp (for grilling)"
      }
    ],
    "steps": [
      "Blend fresh mint, coriander, green chillies, ginger, garlic, and 1 tbsp lemon juice into a vibrant, thick green paste without adding water.",
      "In a bowl, mix the green paste with thick hung curd, roasted cumin powder, chaat masala, and salt.",
      "Toss chicken cubes in the green marinade; marinate in the refrigerator for 45 minutes.",
      "Skewer the marinated chicken pieces and grill on a medium-high tawa or tandoor for 10 minutes.",
      "Baste with ghee and turn continuously until the chicken is tender, juicy, and speckled with char marks.",
      "Garnish with sliced red onion rings, fresh lemon wedges, and a pinch of black salt."
    ]
  },
  {
    "id": "fish-tikka",
    "name": "Tandoori Fish Tikka",
    "subCategory": "tikkas-kebabs",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/fish-tikka.jpg",
    "description": "Firm river sole or surmai cubes marinated in fragrant carom seeds (ajwain), Kashmiri chilli, and hung curd, seared to flaky perfection.",
    "ingredients": [
      {
        "name": "Fish (Sole, Surmai, or Basa)",
        "amount": "400g (boneless thick cubes)"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1 tsp (crushed between palms)"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/3 cup (thick hung)"
      },
      {
        "name": "Mustard Oil",
        "amount": "2 tbsp"
      },
      {
        "name": "Kashmiri Chilli",
        "amount": "1 tbsp"
      },
      {
        "name": "Ginger-Garlic Paste",
        "amount": "1 tbsp"
      },
      {
        "name": "Besan",
        "amount": "1 tbsp (lightly roasted)"
      },
      {
        "name": "Lemon Juice",
        "amount": "1.5 tbsp"
      }
    ],
    "steps": [
      "Pat fish cubes completely dry with paper towels; rub with lemon juice, salt, and turmeric; rest for 10 minutes.",
      "Whisk hung curd, roasted besan, crushed ajwain, Kashmiri chilli powder, hot mustard oil, and ginger-garlic paste into a smooth marinade.",
      "Gently coat fish cubes with the marinade (do not overwork as fish is delicate); rest for 15 minutes.",
      "Heat a cast-iron skillet or grill pan with 1 tbsp oil on high flame.",
      "Place fish cubes in a single layer; sear undisturbed for 3-4 minutes on one side until charred crust forms.",
      "Flip delicately and sear for another 3 minutes until fish is opaque and flaky. Squeeze fresh lemon juice over the hot fish tikka."
    ]
  },
  {
    "id": "seekh-kebab",
    "name": "Mutton Seekh Kebab",
    "subCategory": "tikkas-kebabs",
    "prepTime": 30,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/seekh-kebab.jpg",
    "description": "Minced mutton blended with bone marrow fat, roasted spices, mint, and green chillies, molded onto skewers and grilled over coals.",
    "ingredients": [
      {
        "name": "Mutton Keema (Minced Mutton with 20% fat)",
        "amount": "450g (fine double-mince)"
      },
      {
        "name": "Onion",
        "amount": "1 large (finely grated & completely squeezed dry)"
      },
      {
        "name": "Green Chillies",
        "amount": "3 (finely minced)"
      },
      {
        "name": "Fresh Mint & Coriander",
        "amount": "3 tbsp (finely chopped)"
      },
      {
        "name": "Ginger-Garlic Paste",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Roasted Cumin & Coriander Powder",
        "amount": "1 tbsp each"
      },
      {
        "name": "Garam Masala",
        "amount": "1 tsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp (for basting)"
      }
    ],
    "steps": [
      "Ensure the grated onions are squeezed dry in a cloth to remove every drop of water (crucial so kebabs don't slip off skewers).",
      "Knead minced mutton with squeezed onions, minced chillies, herbs, ginger-garlic paste, spices, and salt vigorously for 8 minutes until fibrous and sticky.",
      "Chill the meat mixture in the refrigerator for 30 minutes to firm up.",
      "Wet hands with chilled water, take a ball of meat, and mold it evenly around a wide flat metal skewer with pressing thumb motions.",
      "Grill over medium-hot coals or on a smoking grill pan, rotating every 2 minutes for 8-10 minutes until browned all around.",
      "Brush generously with melted ghee, gently slide off skewers onto a platter using a flatbread, and sprinkle chaat masala."
    ]
  },
  {
    "id": "galouti-kebab",
    "name": "Lucknawi Galouti Kebab",
    "subCategory": "tikkas-kebabs",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/galouti-kebab.jpg",
    "description": "Legendary melt-in-the-mouth Nawabi delicacy made with triple-minced mutton, raw papaya tenderizer, roasted gram flour, and smoked clove aroma.",
    "ingredients": [
      {
        "name": "Mutton Keema",
        "amount": "400g (triple-ground silky mince)"
      },
      {
        "name": "Raw Papaya Paste",
        "amount": "2 tbsp (with skin, for tenderizing)"
      },
      {
        "name": "Roasted Chana Dal Powder (Bhuna Besan)",
        "amount": "3 tbsp"
      },
      {
        "name": "Browned Onion Paste (Birista)",
        "amount": "2 tbsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp (for pan frying)"
      },
      {
        "name": "Potli Masala / Shahi Garam Masala",
        "amount": "1 tbsp"
      },
      {
        "name": "Kewra & Rose Water",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Clove Smoke (Dhungar)",
        "amount": "1 charcoal piece + 2 cloves"
      }
    ],
    "steps": [
      "Knead the silky mutton mince with raw papaya paste and salt; rest for 45 minutes to break down meat fibers.",
      "Add roasted chana dal powder, fried onion paste, potli spices, ginger-garlic paste, kewra water, and a touch of saffron.",
      "Mix thoroughly with palms until mixture turns into a paste-like, spreadable consistency.",
      "Place a small metal cup in the meat bowl with a burning lump of charcoal, drop 2 cloves and 1/2 tsp ghee on it, and seal bowl tightly for 5 minutes (dhungar).",
      "Grease palms with water, shape soft flat round patties, and place directly onto a hot ghee-coated lagan or tawa.",
      "Shallow fry on medium-low flame for 3 minutes per side until a delicate brown crust forms while inside remains velvety soft; slide onto ulte tawe ka paratha."
    ]
  },
  {
    "id": "shami-kebab",
    "name": "Hyderabadi Shami Kebab",
    "subCategory": "tikkas-kebabs",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/shami-kebab.jpg",
    "description": "Traditional Awadhi and Hyderabadi patties of boneless meat simmered with chana dal and whole spices, ground and pan-fried with onion-mint filling.",
    "ingredients": [
      {
        "name": "Boneless Mutton or Chicken",
        "amount": "350g"
      },
      {
        "name": "Chana Dal (Bengal Gram)",
        "amount": "1/2 cup (soaked 30 mins)"
      },
      {
        "name": "Whole Spices (Cardamom, Clove, Cinnamon, Bay Leaf)",
        "amount": "1 tbsp"
      },
      {
        "name": "Ginger & Garlic",
        "amount": "1.5 tbsp (whole)"
      },
      {
        "name": "Egg",
        "amount": "1 (lightly beaten, for binding)"
      },
      {
        "name": "Onion",
        "amount": "1 small (finely chopped for stuffing)"
      },
      {
        "name": "Mint & Green Chillies",
        "amount": "2 tbsp (finely chopped for stuffing)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp (for pan frying)"
      }
    ],
    "steps": [
      "In a pressure cooker, cook meat, soaked chana dal, whole spices, dry red chillies, ginger, garlic, salt, and 1 cup water for 5 whistles until completely soft and dry.",
      "Discard bay leaf and cinnamon stick; grind the warm meat-dal mixture using a sil batta or food processor into a smooth dough without adding water.",
      "Mix in half a beaten egg to bind smoothly.",
      "Make small balls of the dough, flatten in your palm, place a pinch of finely chopped onion-mint-chilli in the center, and seal into smooth round cutlets.",
      "Heat ghee in a flat tawa on medium heat.",
      "Pan-fry shami kebabs for 4 minutes per side until crisp dark-golden crust develops; serve hot with mint chutney and lemon wedges."
    ]
  },
  {
    "id": "hara-bhara-kebab",
    "name": "Crispy Hara Bhara Kebab",
    "subCategory": "tikkas-kebabs",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/hara-bhara-kebab.jpg",
    "description": "Pan-fried vegetarian green patties made with blanched spinach, sweet green peas, crumbled paneer, and crowned with half cashew nuts.",
    "ingredients": [
      {
        "name": "Fresh Spinach (Palak)",
        "amount": "2 cups (blanched & squeezed completely dry)"
      },
      {
        "name": "Green Peas (Matar)",
        "amount": "1 cup (boiled & coarsely mashed)"
      },
      {
        "name": "Paneer",
        "amount": "100g (finely grated)"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "1 large (mashed)"
      },
      {
        "name": "Roasted Gram Flour (Besan)",
        "amount": "3 tbsp"
      },
      {
        "name": "Green Chillies & Ginger",
        "amount": "1 tbsp (minced)"
      },
      {
        "name": "Chaat Masala",
        "amount": "1 tsp"
      },
      {
        "name": "Cashews",
        "amount": "10-12 halves (for crowning)"
      }
    ],
    "steps": [
      "Blanch spinach leaves for 2 minutes, shock in ice water, squeeze out all moisture in a kitchen towel, and chop finely.",
      "Sauté chopped spinach and boiled green peas in 1 tsp ghee for 3 minutes to remove any remaining water.",
      "In a bowl, combine spinach-pea mixture, grated paneer, mashed potato, roasted besan, minced ginger, chillies, chaat masala, and salt; knead into a firm green dough.",
      "Divide into equal balls, flatten into smooth disc patties, and press half a cashew firmly into the center of each patty.",
      "Heat 2 tbsp ghee or oil in a wide tawa on medium flame.",
      "Pan-fry patties for 3-4 minutes per side until edges are crisp and deep golden-green; serve with tangy tamarind chutney."
    ]
  },
  {
    "id": "dahi-ke-kebab",
    "name": "Mughlai Dahi Ke Kebab",
    "subCategory": "tikkas-kebabs",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/dahi-ke-kebab.jpg",
    "description": "Delicate North Indian kebabs featuring a crisp outer golden shell encasing a luscious, molten spiced hung-curd and cardamom center.",
    "ingredients": [
      {
        "name": "Fresh Curd (Thick Hung Curd / Greek Yogurt)",
        "amount": "1.5 cups (hung for 6 hours)"
      },
      {
        "name": "Paneer",
        "amount": "100g (grated very fine)"
      },
      {
        "name": "Roasted Besan",
        "amount": "2 tbsp"
      },
      {
        "name": "Green Chillies",
        "amount": "2 (finely minced)"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp (minced)"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/2 tsp"
      },
      {
        "name": "Breadcrumbs",
        "amount": "1/2 cup (for light rolling)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp (for shallow frying)"
      }
    ],
    "steps": [
      "Ensure curd is completely moisture-free like cream cheese after hanging in cheesecloth.",
      "Gently mix hung curd with grated paneer, roasted besan, minced green chillies, ginger, cardamom powder, chopped coriander, and salt.",
      "Dust hands with a little cornstarch or breadcrumbs; gently shape the soft curd mixture into round or oval kebabs.",
      "Roll lightly in fine breadcrumbs so a protective coating forms.",
      "Heat ghee in a non-stick pan on medium-high flame.",
      "Shallow-fry kebabs carefully for 2 minutes per side until the exterior is crisp golden; drain gently on paper towels and serve immediately."
    ]
  },
  {
    "id": "soya-chaap-tikka",
    "name": "Tandoori Soya Chaap Tikka",
    "subCategory": "tikkas-kebabs",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/soya-chaap-tikka.jpg",
    "description": "Tender layered soya chaap sticks marinated in spicy yogurt, smoked mustard oil, and tandoori spices, roasted till charred.",
    "ingredients": [
      {
        "name": "Soya Chaap",
        "amount": "4 sticks (boiled & cut into 1.5-inch pieces)"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/2 cup (hung)"
      },
      {
        "name": "Mustard Oil",
        "amount": "2 tbsp"
      },
      {
        "name": "Kashmiri Red Chilli",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tsp"
      },
      {
        "name": "Onion & Capsicum",
        "amount": "1 each (petals)"
      },
      {
        "name": "Ginger-Garlic Paste",
        "amount": "1 tbsp"
      },
      {
        "name": "Chaat Masala",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Remove wooden sticks from soya chaap, cut into round pieces, and shallow-fry in 1 tbsp oil for 3 minutes so layers puff up and open.",
      "In a bowl, mix hung curd with hot mustard oil, Kashmiri chilli, ginger-garlic paste, roasted cumin, kasuri methi, and salt.",
      "Toss the fried soya chaap pieces, onion petals, and capsicum squares in the marinade; coat inside the layers and rest 20 minutes.",
      "Thread alternating pieces onto skewers.",
      "Roast on high heat in a grill pan or tandoor for 8-10 minutes, basting with butter until all edges are charred and fragrant.",
      "Slide off skewers into a bowl, toss with 1 tbsp melted butter, sliced onions, and lemon juice."
    ]
  },
  {
    "id": "boti-kebab",
    "name": "Mutton Boti Kebab",
    "subCategory": "tikkas-kebabs",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/boti-kebab.jpg",
    "description": "Tender bite-sized boneless mutton cubes marinated with raw papaya, roasted spices, and pan-roasted in desi ghee till dark and glazed.",
    "ingredients": [
      {
        "name": "Boneless Mutton",
        "amount": "400g (cut into 1-inch small cubes)"
      },
      {
        "name": "Raw Papaya Paste",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/4 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp"
      },
      {
        "name": "Ginger-Garlic Paste",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Kashmiri Chilli & Black Pepper",
        "amount": "1 tsp each"
      },
      {
        "name": "Garam Masala",
        "amount": "1 tsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "1 sprig"
      }
    ],
    "steps": [
      "Marinate boneless mutton cubes with raw papaya paste, ginger-garlic paste, curd, chilli powder, and salt for 1 hour to tenderize.",
      "Heat 2 tbsp ghee in a heavy cast-iron pan; add marinated mutton pieces along with all juices.",
      "Cook on medium flame covered for 15 minutes until mutton releases juices and turns tender.",
      "Uncover pan and turn flame to high; bhunno vigorously until all liquid evaporates.",
      "Add remaining 1 tbsp ghee, crushed black pepper, roasted cumin, and curry leaves.",
      "Toss continuously on high heat for 5 minutes until a dark, caramelized, spicy crust coats every single meat boti."
    ]
  },
  {
    "id": "onion-pakora",
    "name": "Crispy Onion Pakora (Kanda Bhaji)",
    "subCategory": "pakoras-fritters",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/onion-pakora.jpg",
    "description": "Maharashtra monsoon street-style crunchy onion fritters made without extra water, relying purely on onion juices and coarse besan.",
    "ingredients": [
      {
        "name": "Onion",
        "amount": "3 large (thinly sliced length-wise)"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1 cup"
      },
      {
        "name": "Rice Flour",
        "amount": "2 tbsp (for extra crunch)"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1 tsp (crushed)"
      },
      {
        "name": "Green Chillies",
        "amount": "3 (finely chopped)"
      },
      {
        "name": "Turmeric & Red Chilli",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Curry Leaves",
        "amount": "1 sprig (chopped)"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "In a wide mixing bowl, toss sliced onions with salt, crushed ajwain, turmeric, and red chilli powder; massage firmly with fingers and rest for 10 minutes so onions release their natural juices.",
      "Sprinkle chopped green chillies, curry leaves, and rice flour over the sweating onions.",
      "Add besan gradually in 2-3 batches, mixing gently with your fingers so a thin layer of gram flour coats every onion strand without turning into a liquid paste (do not add any water).",
      "Drizzle 1 tbsp hot oil into the mixture for signature street-style crispness.",
      "Drop rough, loose clusters of onion strands into moderately hot oil on medium flame.",
      "Fry undisturbed for 2 minutes, then turn and fry on high-medium heat until deeply golden and intensely crunchy; drain on wire rack."
    ]
  },
  {
    "id": "paneer-pakora",
    "name": "Stuffed Paneer Pakora",
    "subCategory": "pakoras-fritters",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/paneer-pakora.jpg",
    "description": "Thick pillowy paneer slabs layered with spicy mint chutney, dipped in an ajwain-spiced gram flour batter, and fried golden.",
    "ingredients": [
      {
        "name": "Paneer",
        "amount": "250g (cut into thick rectangular slabs)"
      },
      {
        "name": "Green Mint Chutney",
        "amount": "3 tbsp (thick)"
      },
      {
        "name": "Chaat Masala",
        "amount": "1 tsp"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1 cup"
      },
      {
        "name": "Ajwain",
        "amount": "1/2 tsp"
      },
      {
        "name": "Baking Soda",
        "amount": "a tiny pinch"
      },
      {
        "name": "Red Chilli Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Slice paneer into thick slabs, then make a horizontal slit along the side like a book.",
      "Spread 1/2 tsp thick green mint-coriander chutney inside each paneer slit, sprinkle chaat masala, and press gently.",
      "Whisk besan with ajwain, red chilli powder, turmeric, salt, and water into a smooth, thick coating batter (coating back of a spoon).",
      "Add a pinch of baking soda and 1 tsp hot oil to the batter for a light, fluffy crust.",
      "Dip each stuffed paneer sandwich into the batter until completely coated.",
      "Deep fry in hot oil on medium flame for 4 minutes, turning once, until crust is puffed and golden; slice diagonally before serving."
    ]
  },
  {
    "id": "bread-pakora",
    "name": "Delhi Street Bread Pakora",
    "subCategory": "pakoras-fritters",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/bread-pakora.jpg",
    "description": "Iconic university canteen and street snack: triangular sandwich stuffed with spiced cumin potatoes and paneer, deep-fried in crispy besan.",
    "ingredients": [
      {
        "name": "White Bread Slices",
        "amount": "4 slices"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "3 medium (mashed)"
      },
      {
        "name": "Paneer",
        "amount": "2 thin slices (optional)"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1.5 cups"
      },
      {
        "name": "Ajwain",
        "amount": "1 tsp"
      },
      {
        "name": "Green Chillies & Ginger",
        "amount": "1 tbsp (finely minced)"
      },
      {
        "name": "Amchur Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Prepare potato filling: heat 1 tsp oil, sauté cumin seeds, minced ginger, chillies, mashed potatoes, turmeric, amchur, garam masala, and coriander; let cool.",
      "Spread green chutney on one bread slice and sweet tamarind chutney on the other.",
      "Layer a generous amount of potato masala (and a slice of paneer) between the bread slices and press gently; cut diagonally into triangles.",
      "Whisk besan with ajwain, red chilli powder, salt, and water into a medium-thick batter.",
      "Dip the triangular stuffed sandwich into the batter to seal all cut edges thoroughly.",
      "Deep-fry in hot oil on medium flame for 5 minutes, basting oil on top, until golden and crisp; drain and sprinkle chaat masala."
    ]
  },
  {
    "id": "palak-pakora",
    "name": "Crispy Palak Pakora (Spinach Fritters)",
    "subCategory": "pakoras-fritters",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/palak-pakora.jpg",
    "description": "Whole tender spinach leaves dipped individually in a light, carom-scented batter and flash-fried into paper-crisp chips.",
    "ingredients": [
      {
        "name": "Fresh Spinach Leaves (Palak)",
        "amount": "20 large whole leaves (stem intact, washed & dried completely)"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1 cup"
      },
      {
        "name": "Rice Flour",
        "amount": "3 tbsp"
      },
      {
        "name": "Ajwain",
        "amount": "1/2 tsp"
      },
      {
        "name": "Hing (Asafoetida)",
        "amount": "1/4 tsp"
      },
      {
        "name": "Red Chilli Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Gently pat every spinach leaf dry with kitchen paper; any moisture will make the pakora soggy.",
      "Prepare batter: whisk besan, rice flour, crushed ajwain, hing, red chilli powder, salt, and water into a thin, smooth batter (crepe consistency).",
      "Heat oil in a kadai on medium-high flame.",
      "Hold a spinach leaf by its stem, dip into the batter to form a thin translucent veil, shake off excess batter.",
      "Drop into hot oil; fry for 1-2 minutes, flipping once, until the leaf crisps up like a crunchy green wafer.",
      "Drain on paper towels and dust immediately with roasted cumin powder and black salt."
    ]
  },
  {
    "id": "methi-gota",
    "name": "Gujarati Methi Na Gota",
    "subCategory": "pakoras-fritters",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/methi-gota.jpg",
    "description": "Traditional Gujarati tea-time specialty: round, fluffy, golden fritters packed with fresh fenugreek leaves, crushed black pepper, and coriander seeds.",
    "ingredients": [
      {
        "name": "Fresh Methi Leaves (Fenugreek)",
        "amount": "1.5 cups (finely chopped)"
      },
      {
        "name": "Coarse Besan (Gram Flour)",
        "amount": "1 cup"
      },
      {
        "name": "Semolina (Rava)",
        "amount": "2 tbsp"
      },
      {
        "name": "Black Peppercorns",
        "amount": "1 tbsp (coarsely crushed)"
      },
      {
        "name": "Coriander Seeds",
        "amount": "1 tbsp (coarsely cracked)"
      },
      {
        "name": "Ginger-Green Chilli Paste",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Baking Soda",
        "amount": "1/4 tsp + 1 tbsp hot oil"
      },
      {
        "name": "Sugar",
        "amount": "1 tsp (to balance bitterness)"
      }
    ],
    "steps": [
      "In a bowl, combine coarse besan, rava, cracked coriander seeds, crushed black pepper, ginger-chilli paste, sugar, and salt.",
      "Add washed and chopped fresh methi leaves; mix with your hands.",
      "Add water gradually to make a thick, drop-consistency batter; whisk vigorously with hands for 3 minutes to incorporate air.",
      "Add 1/4 tsp baking soda, pour 1 tbsp sizzling hot oil directly over the soda, and fold gently.",
      "Drop small lemon-sized balls of batter into medium-hot oil.",
      "Fry on low-medium flame for 5 minutes, rolling them continuously with a slotted spoon until uniformly round, puffed, and golden; serve with fried green chillies."
    ]
  },
  {
    "id": "corn-pakora",
    "name": "Crispy Sweet Corn Pakora",
    "subCategory": "pakoras-fritters",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/corn-pakora.jpg",
    "description": "Sweet juicy American corn kernels bound with chopped onions, green chillies, and rice flour, fried into crispy clusters.",
    "ingredients": [
      {
        "name": "Sweet Corn Kernels",
        "amount": "1.5 cups (fresh or thawed, half crushed)"
      },
      {
        "name": "Onion",
        "amount": "1 medium (finely chopped)"
      },
      {
        "name": "Rice Flour",
        "amount": "3 tbsp"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1/2 cup"
      },
      {
        "name": "Green Chillies",
        "amount": "2 (chopped)"
      },
      {
        "name": "Ginger",
        "amount": "1 tsp (minced)"
      },
      {
        "name": "Chaat Masala",
        "amount": "1 tsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Coarsely pulse half of the sweet corn kernels in a blender (this releases moisture and prevents whole corn from popping in hot oil).",
      "Mix crushed corn, whole corn kernels, chopped onions, green chillies, minced ginger, and chopped coriander in a bowl.",
      "Add besan, rice flour, red chilli powder, and salt; mix with fingers into a tight, sticky mixture without adding any extra water.",
      "Heat oil in a kadai on medium heat.",
      "Pinch small, rough spoonfuls of the corn mixture and drop into the hot oil.",
      "Deep fry for 4-5 minutes until the exterior is crunchy and golden; toss with chaat masala while still hot."
    ]
  },
  {
    "id": "egg-pakora",
    "name": "Kolkata Egg Devil (Dim Chop / Egg Pakora)",
    "subCategory": "pakoras-fritters",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/egg-pakora.jpg",
    "description": "Boiled eggs halved and encased in a spiced, caramelized onion-potato bhuna masala, crumbed and fried into a crunchy croquette.",
    "ingredients": [
      {
        "name": "Eggs",
        "amount": "3 (hard-boiled & halved)"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "2 medium (mashed)"
      },
      {
        "name": "Onion",
        "amount": "1 large (finely chopped & caramelized)"
      },
      {
        "name": "Ginger-Garlic Paste",
        "amount": "1 tbsp"
      },
      {
        "name": "Bengali Bhaja Masala (Roasted Cumin, Coriander, Dry Chilli)",
        "amount": "1 tbsp"
      },
      {
        "name": "Breadcrumbs",
        "amount": "1 cup"
      },
      {
        "name": "Cornstarch / Egg wash",
        "amount": "for dipping"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Prepare filling: heat 1 tbsp oil, sauté onions till golden brown, add ginger-garlic paste, mashed potatoes, bhaja masala, and salt; cook till dry and cool completely.",
      "Take a portion of the spiced potato mixture in your palm, flatten, place half a boiled egg in the center, and wrap the potato mixture neatly around the egg into an oval shape.",
      "Dip the potato-wrapped egg into a light cornstarch slurry or beaten egg.",
      "Roll thoroughly in breadcrumbs, pressing gently to adhere; repeat dipping and rolling for a double-crust crunch.",
      "Deep-fry in hot oil on medium-high flame for 3-4 minutes until dark golden brown and super-crispy.",
      "Cut in half length-wise to reveal the egg center; serve with Kasundi (Bengali mustard) and onion salad."
    ]
  },
  {
    "id": "chicken-pakora",
    "name": "Street Style Crispy Chicken Pakora",
    "subCategory": "pakoras-fritters",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chicken-pakora.jpg",
    "description": "Bite-sized chicken cubes marinated in crushed ginger, garlic, and red chilli, coated in spiced cornstarch-besan batter, double-fried for maximum crunch.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "350g (boneless, cut into bite-sized 1-inch cubes)"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1/2 cup"
      },
      {
        "name": "Cornstarch / Rice Flour",
        "amount": "3 tbsp"
      },
      {
        "name": "Ginger-Garlic Paste",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Egg",
        "amount": "1 small"
      },
      {
        "name": "Kashmiri Chilli & Black Pepper",
        "amount": "1.5 tbsp & 1 tsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs (chopped)"
      },
      {
        "name": "Oil",
        "amount": "for double frying"
      }
    ],
    "steps": [
      "Marinate bite-sized chicken cubes with ginger-garlic paste, lemon juice, Kashmiri chilli powder, black pepper, and salt for 20 minutes.",
      "Add 1 beaten egg, besan, cornstarch, chopped curry leaves, and 1 tbsp water; mix well until a sticky coating clings to each piece.",
      "First Fry: Drop chicken pieces one by one into medium-hot oil; fry for 4 minutes until 80% cooked and light golden; drain and rest for 5 minutes.",
      "Increase oil heat to high.",
      "Second Fry: Flash-fry the pre-fried chicken pieces in screaming hot oil for 90 seconds until the exterior turns reddish-golden, ultra-crispy, and blistered.",
      "Toss with chaat masala and fried curry leaves; serve immediately with spicy garlic chutney."
    ]
  },
  {
    "id": "fish-amritsari",
    "name": "Amritsari Fish Fry",
    "subCategory": "pakoras-fritters",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/fish-amritsari.jpg",
    "description": "Famous Punjab street food: succulent boneless fish fingers marinated in carom seeds (ajwain), ginger-garlic, and crisp gram flour batter.",
    "ingredients": [
      {
        "name": "Fish (Singhara / Sole / Basa)",
        "amount": "400g (cut into fingers)"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1.5 tsp (crushed between palms)"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1/2 cup"
      },
      {
        "name": "Rice Flour",
        "amount": "2 tbsp"
      },
      {
        "name": "Ginger-Garlic Paste",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Kashmiri Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Mustard Oil",
        "amount": "1 tbsp (for marinade) + oil for frying"
      },
      {
        "name": "Chaat Masala & Lemon",
        "amount": "for finishing"
      }
    ],
    "steps": [
      "Rub fish fingers with lemon juice, salt, and ginger-garlic paste; let rest for 10 minutes.",
      "In a bowl, mix besan, rice flour, crushed ajwain, Kashmiri chilli powder, turmeric, 1 tbsp raw mustard oil, and a splash of chilled water into a semi-thick batter.",
      "Coat fish fingers evenly in the batter; rest for 10 minutes.",
      "Heat oil in a kadai on medium flame.",
      "Drop fish fingers one by one into the hot oil; fry for 4-5 minutes until the batter is crisp and fish is cooked through.",
      "Drain on paper towels, dust immediately with generous chaat masala, and serve with pickled onions and mint chutney."
    ]
  },
  {
    "id": "prawn-koliwada",
    "name": "Mumbai Prawn Koliwada",
    "subCategory": "pakoras-fritters",
    "prepTime": 15,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/prawn-koliwada.jpg",
    "description": "Iconic Mumbai fisherman-style spicy red deep-fried prawns marinated in garlic, ajwain, Kashmiri deggi mirch, and lime.",
    "ingredients": [
      {
        "name": "Prawns",
        "amount": "300g (shelled, deveined & tails intact)"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "3 tbsp"
      },
      {
        "name": "Cornstarch",
        "amount": "2 tbsp"
      },
      {
        "name": "Garlic Paste",
        "amount": "1.5 tbsp (heavy on garlic)"
      },
      {
        "name": "Ajwain",
        "amount": "1/2 tsp"
      },
      {
        "name": "Deggi Mirch (Kashmiri Chilli)",
        "amount": "1.5 tbsp (for signature red hue)"
      },
      {
        "name": "Lemon Juice",
        "amount": "2 tbsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Marinate cleaned prawns with lemon juice, garlic paste, Kashmiri chilli powder, crushed ajwain, and salt for 15 minutes.",
      "Add besan and cornstarch directly to the marinated prawns; toss with your fingers so the natural moisture forms a light, tight batter around each prawn.",
      "Heat oil in a deep pan until hot (180°C).",
      "Drop prawns individually by their tails into the bubbling hot oil.",
      "Fry on high heat for exactly 2.5 to 3 minutes until prawns turn crisp, bright crimson, and curl into a C-shape (do not overcook).",
      "Drain immediately onto paper towels, sprinkle chaat masala, and serve with onion rings."
    ]
  },
  {
    "id": "mirchi-bajji",
    "name": "Andhra Cut Mirchi Bajji",
    "subCategory": "pakoras-fritters",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/mirchi-bajji.jpg",
    "description": "Large mild green chillies stuffed with ajwain and tamarind podi, dipped in thick gram flour batter, fried, cut, and double-fried till shatteringly crisp.",
    "ingredients": [
      {
        "name": "Bajji Chillies (Large Mild Green Chillies)",
        "amount": "6 large"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1 cup"
      },
      {
        "name": "Rice Flour",
        "amount": "2 tbsp"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1 tbsp (ground with salt)"
      },
      {
        "name": "Tamarind Paste",
        "amount": "1 tbsp"
      },
      {
        "name": "Onion",
        "amount": "1 small (finely chopped for stuffing)"
      },
      {
        "name": "Baking Soda",
        "amount": "1/4 tsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Slit green chillies length-wise on one side; scrape out seeds using the handle of a spoon to reduce heat.",
      "Mix crushed ajwain, tamarind paste, and a pinch of salt; stuff a small amount inside each slit chilli.",
      "Whisk besan, rice flour, baking soda, salt, and water into a thick, smooth, lump-free batter.",
      "Dip each stuffed chilli by its stalk into the batter until heavily coated.",
      "Deep fry in hot oil on medium heat until light golden; remove and let cool for 2 minutes.",
      "Cut each fried bajji into 1-inch roundels, drop back into smoking hot oil for a 1-minute second fry until edges turn shatteringly crisp; top with chopped raw onions and roasted peanuts."
    ]
  },
  {
    "id": "banana-bajji",
    "name": "Raw Banana Bajji (Vazhakkai Bajji)",
    "subCategory": "pakoras-fritters",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/banana-bajji.jpg",
    "description": "South Indian tea stall classic: thin ribbons of raw green plantain dipped in spiced fluffy gram flour batter and fried into golden clouds.",
    "ingredients": [
      {
        "name": "Raw Green Banana (Vazhakkai / Plantain)",
        "amount": "2 medium"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1 cup"
      },
      {
        "name": "Rice Flour",
        "amount": "2 tbsp"
      },
      {
        "name": "Hing (Asafoetida)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Kashmiri Chilli Powder",
        "amount": "1 tbsp"
      },
      {
        "name": "Baking Soda",
        "amount": "a pinch"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Peel the fibrous green skin of raw bananas; slice length-wise into uniform, paper-thin ribbons using a mandoline slicer.",
      "Immerse banana slices in water with a pinch of turmeric to prevent oxidation until ready to fry; pat dry before dipping.",
      "Whisk besan, rice flour, hing, chilli powder, baking soda, salt, and water into a smooth batter that coats a spoon evenly.",
      "Heat oil in a kadai on medium-high flame.",
      "Dip each long banana slice into the batter, coating both sides.",
      "Gently slide into hot oil; watch them puff up like golden pillows; fry for 3 minutes, flipping once, until crisp and golden; serve with coconut chutney."
    ]
  },
  {
    "id": "aloo-tikki-cutlet",
    "name": "Crispy Aloo Tikki Cutlet",
    "subCategory": "cutlets-vadas",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/aloo-tikki.jpg",
    "description": "Crisp golden potato patties shallow-fried in desi ghee on a heavy iron tawa, stuffed with spiced yellow chana dal and green peas.",
    "ingredients": [
      {
        "name": "Boiled Potatoes",
        "amount": "4 large (boiled, peeled & chilled)"
      },
      {
        "name": "Chana Dal",
        "amount": "1/4 cup (soaked & boiled al dente)"
      },
      {
        "name": "Cornstarch / Rice Flour",
        "amount": "3 tbsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp (for tawa frying)"
      },
      {
        "name": "Ginger & Green Chillies",
        "amount": "1 tbsp (finely minced)"
      },
      {
        "name": "Amchur Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Chaat Masala",
        "amount": "1 tsp"
      },
      {
        "name": "Coriander",
        "amount": "2 tbsp (chopped)"
      }
    ],
    "steps": [
      "Grate chilled boiled potatoes (chilling removes surface moisture for ultra-crisp tikkis); mix with cornstarch and salt into a smooth dough.",
      "Prepare filling: mix boiled chana dal with ginger, green chillies, amchur, chaat masala, and chopped coriander.",
      "Divide potato mixture into large balls; flatten in palms, place a spoonful of chana dal filling inside, and seal into smooth, thick round patties.",
      "Heat ghee generously on a flat cast-iron tawa on medium heat.",
      "Place tikkis on the tawa and shallow-fry slowly for 6-7 minutes on one side until thick golden-brown crust forms.",
      "Flip carefully, press slightly with spatula to flatten, and fry until both sides are shatteringly crisp; serve with sweetened curd and chutneys."
    ]
  },
  {
    "id": "veg-cutlet",
    "name": "Indian Railway Veg Cutlet",
    "subCategory": "cutlets-vadas",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/veg-cutlet.jpg",
    "description": "Nostalgic pantry staple: heart-shaped minced vegetable croquettes coated in golden breadcrumbs, served piping hot on passenger train journeys.",
    "ingredients": [
      {
        "name": "Boiled Potatoes",
        "amount": "2 large (mashed)"
      },
      {
        "name": "Beetroot",
        "amount": "1 small (grated & sautéed for pink hue)"
      },
      {
        "name": "Carrot & Green Peas",
        "amount": "1/2 cup each (finely diced & steamed)"
      },
      {
        "name": "Breadcrumbs",
        "amount": "1 cup"
      },
      {
        "name": "Cornstarch Slurry",
        "amount": "3 tbsp cornstarch in 1/4 cup water"
      },
      {
        "name": "Ginger-Green Chilli Paste",
        "amount": "1 tbsp"
      },
      {
        "name": "Garam Masala",
        "amount": "1 tsp"
      },
      {
        "name": "Oil",
        "amount": "for shallow or deep frying"
      }
    ],
    "steps": [
      "In a pan, sauté ginger-green chilli paste, grated beetroot, carrots, and peas for 3 minutes to remove excess moisture.",
      "In a bowl, combine sautéed vegetables with mashed potatoes, garam masala, amchur, chopped coriander, and salt; mix into a pliable dough.",
      "Shape into traditional heart or oval cutlet patties.",
      "Dip each cutlet into the light cornstarch slurry, then roll immediately into breadcrumbs, pressing firmly so crumbs adhere all over.",
      "Rest the breaded cutlets in the refrigerator for 15 minutes to prevent crumbs from shedding in oil.",
      "Shallow fry in hot oil on medium flame for 3-4 minutes per side until the breadcrumb crust is deep golden brown and crunchy; serve with tomato ketchup."
    ]
  },
  {
    "id": "beetroot-cutlet",
    "name": "Kolkata Beetroot Chop (Vegetable Chop)",
    "subCategory": "cutlets-vadas",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/beetroot-cutlet.jpg",
    "description": "Bengali street telebhaja classic: sweet-spicy croquettes of grated beetroot, potatoes, and crunchy roasted peanuts crusted in toast crumbs.",
    "ingredients": [
      {
        "name": "Beetroot",
        "amount": "2 medium (grated fine)"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "2 medium (mashed)"
      },
      {
        "name": "Roasted Peanuts",
        "amount": "3 tbsp (crushed coarse)"
      },
      {
        "name": "Bengali Bhaja Masala",
        "amount": "1 tbsp (dry-roasted cumin, fennel & dry chilli)"
      },
      {
        "name": "Ginger Paste",
        "amount": "1 tbsp"
      },
      {
        "name": "Breadcrumbs (Toast Biscuit Crumbs)",
        "amount": "1 cup"
      },
      {
        "name": "Cornstarch Slurry",
        "amount": "for dipping"
      },
      {
        "name": "Mustard Oil",
        "amount": "1 tbsp for cooking + oil for frying"
      }
    ],
    "steps": [
      "Heat 1 tbsp mustard oil; add ginger paste, grated beetroot, and salt; cook on medium flame for 8 minutes until beetroot is soft and dry.",
      "Add mashed potatoes, Bengali bhaja masala, and roasted crushed peanuts; stir-fry until the mixture leaves the sides of the pan; cool completely.",
      "Divide into cylindrical oval croquettes.",
      "Dip each croquette in cornstarch slurry, then roll in biscuit/toast crumbs; dip and coat twice for extra thick Bengali cabin-style crust.",
      "Chill for 15 minutes in the fridge.",
      "Deep-fry in hot oil on medium-high flame for 3 minutes until dark reddish-brown and crispy; serve hot with Kasundi."
    ]
  },
  {
    "id": "sabudana-vada",
    "name": "Maharashtrian Sabudana Vada",
    "subCategory": "cutlets-vadas",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/sabudana-vada.jpg",
    "description": "Crisp fasting specialty made with soaked sago pearls, boiled potatoes, roasted crushed peanuts, and green chillies fried till crunchy.",
    "ingredients": [
      {
        "name": "Sabudana (Tapioca Pearls)",
        "amount": "1 cup (soaked 5 hours till non-sticky & tender)"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "2 medium (mashed)"
      },
      {
        "name": "Roasted Peanuts",
        "amount": "1/2 cup (coarsely powdered (danyacha koot))"
      },
      {
        "name": "Green Chillies",
        "amount": "3 (finely minced)"
      },
      {
        "name": "Cumin Seeds",
        "amount": "1 tsp"
      },
      {
        "name": "Lemon Juice",
        "amount": "1 tbsp"
      },
      {
        "name": "Sendha Namak (Rock Salt)",
        "amount": "1 tsp"
      },
      {
        "name": "Peanut Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Ensure soaked sabudana pearls are completely drained, fluffy, and soft when pressed between thumb and finger without excess water.",
      "In a bowl, combine sabudana, mashed potatoes, roasted coarse peanut powder, minced chillies, cumin seeds, lemon juice, sugar, and salt.",
      "Knead gently into a cohesive dough (potatoes and peanuts act as binder so vadas don't burst in oil).",
      "Grease palms with water and shape into smooth round patties (1/2 inch thick).",
      "Heat oil in a kadai on medium-high flame; slide 3-4 vadas at a time into hot oil.",
      "Fry undisturbed for 2 minutes until pearls crisp up and vadas float; flip and fry until pale golden and super crunchy; serve with sweet curd dip."
    ]
  },
  {
    "id": "maddur-vada",
    "name": "Karnataka Maddur Vada",
    "subCategory": "cutlets-vadas",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/maddur-vada.jpg",
    "description": "Famous Karnataka railway station snack: thin crispy-on-the-edges, soft-in-the-center fritters of rice flour, rava, onions, and curry leaves.",
    "ingredients": [
      {
        "name": "Rice Flour",
        "amount": "1/2 cup"
      },
      {
        "name": "Semolina (Rava / Sooji)",
        "amount": "1/2 cup"
      },
      {
        "name": "Maida (All-Purpose Flour)",
        "amount": "1/4 cup"
      },
      {
        "name": "Onion",
        "amount": "2 large (finely sliced)"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs (finely chopped)"
      },
      {
        "name": "Green Chillies & Ginger",
        "amount": "1 tbsp (finely chopped)"
      },
      {
        "name": "Hot Oil",
        "amount": "2 tbsp (for dough moyan) + oil for frying"
      },
      {
        "name": "Hing",
        "amount": "1/4 tsp"
      }
    ],
    "steps": [
      "In a wide mixing bowl, combine rice flour, rava, maida, sliced onions, chopped curry leaves, green chillies, ginger, hing, and salt.",
      "Pour 2 tbsp bubbling hot oil over the flour mixture; it will sizzle; rub flour and oil between fingers for a crumbly sand texture.",
      "Sprinkle minimal water (2-3 tbsp) and knead into a stiff, pliable dough; let rest for 10 minutes.",
      "Tear small lemon-sized balls, place on greased parchment paper, and pat with fingers into thin 3-inch discs with thinner crispy edges.",
      "Gently peel off paper and slide into medium-hot oil.",
      "Fry on medium-low flame for 4-5 minutes, turning occasionally until golden brown and crisp; drain and serve with coconut chutney."
    ]
  },
  {
    "id": "snacks-medu-vada",
    "name": "Crispy Medu Vada",
    "subCategory": "cutlets-vadas",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/medu-vada.jpg",
    "description": "Fluffy, aerated South Indian urad dal doughnut fritters with crisp golden crusts, cracked peppercorns, fresh coconut, and curry leaves.",
    "ingredients": [
      {
        "name": "Urad Dal",
        "amount": "1 cup (soaked 3 hours & drained)"
      },
      {
        "name": "Whole Black Peppercorns",
        "amount": "1 tsp"
      },
      {
        "name": "Fresh Coconut Bits",
        "amount": "2 tbsp (finely diced)"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs (chopped)"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp (minced)"
      },
      {
        "name": "Hing",
        "amount": "1/4 tsp"
      },
      {
        "name": "Rice Flour",
        "amount": "1 tbsp (for extra crisp exterior)"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Grind soaked urad dal with just 2-3 tablespoons of ice-cold water in a wet grinder until thick, silky, and voluminous.",
      "Whisk batter vigorously with your hand in one direction for 5 minutes until aerated (test: a drop of batter must float on a bowl of water).",
      "Fold in crushed black pepper, fresh coconut bits, curry leaves, minced ginger, hing, rice flour, and salt.",
      "Wet both palms with cold water; take a ball of batter in your right hand, flatten slightly, and poke a neat hole in the center with your thumb.",
      "Slide the doughnut-shaped vada gently into hot oil on medium flame.",
      "Fry for 4-5 minutes, turning over until uniformly golden brown and crisp; serve hot dipped in tiffin sambar or coconut chutney."
    ]
  },
  {
    "id": "masala-vada",
    "name": "South Indian Masala Vada (Paruppu Vadai)",
    "subCategory": "cutlets-vadas",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/masala-vada.jpg",
    "description": "Crunchy tea stall lentil fritters made with coarsely ground chana dal, fennel seeds, dry red chillies, shallots, and curry leaves.",
    "ingredients": [
      {
        "name": "Chana Dal (Bengal Gram)",
        "amount": "1 cup (soaked 2 hours)"
      },
      {
        "name": "Shallots (Sambar Onions)",
        "amount": "10 (finely chopped)"
      },
      {
        "name": "Fennel Seeds (Saunf)",
        "amount": "1 tbsp"
      },
      {
        "name": "Dry Red Chillies",
        "amount": "3"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs (chopped)"
      },
      {
        "name": "Ginger & Garlic",
        "amount": "1 tbsp (finely minced)"
      },
      {
        "name": "Hing",
        "amount": "1/4 tsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Drain soaked chana dal completely; reserve 2 tbsp whole dal aside for texture.",
      "Grind the remaining chana dal with fennel seeds, dry red chillies, and ginger coarsely without adding any water (some dal should be crushed, some half-broken).",
      "Transfer to a bowl, add the reserved whole chana dal, chopped shallots, curry leaves, minced garlic, hing, and salt; mix well.",
      "Divide into small balls, flatten between palms into 2-inch discs (keep edges slightly rough for crispiness).",
      "Slide into medium-hot oil.",
      "Fry on medium-low flame for 5-6 minutes until the vadas turn deep reddish-golden and crunchy; drain on wire rack."
    ]
  },
  {
    "id": "keema-cutlet",
    "name": "Mutton Keema Cutlet",
    "subCategory": "cutlets-vadas",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/keema-cutlet.jpg",
    "description": "Parsis and Anglo-Indian style spiced minced mutton croquettes mixed with mashed potatoes and mint, crusted in panko breadcrumbs.",
    "ingredients": [
      {
        "name": "Mutton Keema (Minced Mutton)",
        "amount": "300g (cooked dry with spices)"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "2 medium (mashed smooth)"
      },
      {
        "name": "Onion",
        "amount": "1 medium (finely chopped & sautéed)"
      },
      {
        "name": "Fresh Mint & Coriander",
        "amount": "3 tbsp (finely chopped)"
      },
      {
        "name": "Egg",
        "amount": "1 (beaten with 1 tbsp milk)"
      },
      {
        "name": "Breadcrumbs",
        "amount": "1 cup (panko or fresh breadcrumbs)"
      },
      {
        "name": "Garam Masala",
        "amount": "1 tsp"
      },
      {
        "name": "Oil",
        "amount": "for shallow frying"
      }
    ],
    "steps": [
      "Cook minced mutton in a pan with ginger-garlic paste, turmeric, chilli powder, garam masala, and salt until completely dry without liquid; let cool.",
      "Mix cooked keema with mashed potatoes, sautéed onions, chopped mint, and coriander; knead into a firm mixture.",
      "Shape into flat oval or cylindrical cutlet patties.",
      "Dip each cutlet in beaten egg, then roll generously in breadcrumbs to coat completely.",
      "Heat 3 tbsp oil in a flat skillet on medium flame.",
      "Shallow fry cutlets for 3 minutes per side until the breadcrumb crust turns dark golden and crunchy; serve with spicy green chutney and lemon."
    ]
  },
  {
    "id": "fish-cutlet",
    "name": "Kerala Coastal Fish Cutlet",
    "subCategory": "cutlets-vadas",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/fish-cutlet.jpg",
    "description": "Classic Kerala bakery and wedding snack: flaked steamed fish cooked with shallots, curry leaves, and black pepper, breaded and fried crisp.",
    "ingredients": [
      {
        "name": "Fish (Kingfish, Tuna, or Mackerel)",
        "amount": "300g (steamed & flaked boneless)"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "2 medium (mashed)"
      },
      {
        "name": "Shallots",
        "amount": "10 (finely minced)"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs (finely minced)"
      },
      {
        "name": "Black Pepper",
        "amount": "1.5 tsp (crushed)"
      },
      {
        "name": "Egg",
        "amount": "1 (whisked)"
      },
      {
        "name": "Breadcrumbs",
        "amount": "1 cup"
      },
      {
        "name": "Coconut Oil",
        "amount": "for shallow frying"
      }
    ],
    "steps": [
      "Steam fish fillets with a pinch of turmeric, black pepper, and salt; discard bones and skin, flake the meat into small pieces.",
      "In a pan with 1 tbsp coconut oil, sauté shallots, minced ginger, green chillies, and curry leaves for 3 minutes until soft.",
      "Add flaked fish, black pepper, garam masala, and salt; toss for 2 minutes and turn off heat.",
      "Mix fish with mashed potatoes into a smooth, cohesive dough; shape into oval patties.",
      "Dip each patty into whisked egg, coat thoroughly in breadcrumbs, pressing lightly.",
      "Shallow fry in hot coconut oil on medium flame for 3 minutes per side until the crust is golden-brown and crispy; serve with onion salad."
    ]
  },
  {
    "id": "corn-cheese-balls",
    "name": "Crispy Corn Cheese Balls",
    "subCategory": "cutlets-vadas",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/corn-cheese-balls.jpg",
    "description": "Golden spheres packed with sweet American corn kernels, molten processed cheese, and mozzarella, crusted in panko breadcrumbs.",
    "ingredients": [
      {
        "name": "Processed Cheese & Mozzarella",
        "amount": "1 cup (grated blend)"
      },
      {
        "name": "Boiled Sweet Corn",
        "amount": "1/2 cup (coarsely pulsed)"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "1 large (mashed smooth)"
      },
      {
        "name": "Cornstarch & Maida",
        "amount": "2 tbsp each (for slurry)"
      },
      {
        "name": "Oregano & Chilli Flakes",
        "amount": "1 tsp each"
      },
      {
        "name": "Breadcrumbs",
        "amount": "1 cup"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "In a bowl, combine grated cheese, coarsely crushed sweet corn, mashed potato, oregano, chilli flakes, and salt.",
      "Roll into smooth round balls (marble-sized) with no visible cracks; freeze for 10 minutes to firm up.",
      "Prepare a lump-free dipping slurry by mixing cornstarch, maida, and 1/3 cup water with a pinch of salt.",
      "Dip each frozen cheese ball in the slurry, roll in breadcrumbs, dip in slurry again, and roll in breadcrumbs a second time (double coating prevents cheese leakage).",
      "Heat oil in a deep kadai until hot (180°C).",
      "Flash-fry cheese balls on high flame for 90 seconds until golden crisp outside; remove immediately and serve while cheese is molten and stretchy."
    ]
  },
  {
    "id": "aloo-bonda",
    "name": "South Indian Aloo Bonda",
    "subCategory": "crispy-bites",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/aloo-bonda.jpg",
    "description": "Golden spheres of spiced mustard-tempered potato masala encased in a crisp, sunny-yellow chickpea flour batter.",
    "ingredients": [
      {
        "name": "Boiled Potatoes",
        "amount": "3 large (coarsely mashed)"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1 cup"
      },
      {
        "name": "Rice Flour",
        "amount": "2 tbsp"
      },
      {
        "name": "Mustard Seeds",
        "amount": "1 tsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs (chopped)"
      },
      {
        "name": "Ginger & Green Chillies",
        "amount": "1 tbsp (minced)"
      },
      {
        "name": "Hing & Turmeric",
        "amount": "1/4 tsp each"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Prepare potato masala: heat 1 tbsp oil, splutter mustard seeds, curry leaves, hing, minced ginger, and green chillies.",
      "Add turmeric, mashed potatoes, and salt; sauté for 2 minutes and finish with fresh coriander; let cool.",
      "Roll the spiced potato masala into smooth round golf-sized balls.",
      "Whisk besan, rice flour, turmeric, a pinch of baking soda, salt, and water into a thick coating batter.",
      "Dip each potato ball into the batter, coating it completely with a light flick of fingers.",
      "Drop into hot oil on medium-high flame; fry for 4 minutes, turning gently until golden-yellow and crisp; serve with coconut chutney."
    ]
  },
  {
    "id": "mysore-bonda",
    "name": "Mysore Bonda (Mangalore Goli Baje)",
    "subCategory": "crispy-bites",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/mysore-bonda.jpg",
    "description": "Authentic coastal Karnataka tea snack: round, golden fritters with a crisp exterior and airy, spongy, sourdough-like center flavored with coconut, ginger, and cumin.",
    "ingredients": [
      {
        "name": "Maida (All-Purpose Flour)",
        "amount": "1.5 cups"
      },
      {
        "name": "Sour Curd (Yogurt)",
        "amount": "3/4 cup (whisked)"
      },
      {
        "name": "Rice Flour",
        "amount": "2 tbsp"
      },
      {
        "name": "Fresh Coconut Bits",
        "amount": "2 tbsp (finely chopped)"
      },
      {
        "name": "Cumin Seeds (Jeera)",
        "amount": "1 tsp"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp (finely minced)"
      },
      {
        "name": "Baking Soda",
        "amount": "1/2 tsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "In a bowl, whisk sour curd with salt, sugar, and baking soda until frothy.",
      "Add maida, rice flour, cumin seeds, finely chopped coconut bits, minced ginger, green chillies, and curry leaves.",
      "Mix well using hands into a thick, sticky, stretchy batter (slightly thicker than cake batter); beat vigorously with fingers for 3 minutes to incorporate air.",
      "Cover and rest the batter for at least 1 hour (resting allows the curd and soda to create a naturally spongy, aerated crumb).",
      "Heat oil in a deep kadai on medium heat. Wet fingers with water, pinch small portions of batter, and drop like round dumplings into the hot oil.",
      "Fry on medium-low flame for 5 minutes, rotating continuously with a slotted spoon until spheres turn evenly reddish-golden and crisp; serve hot with spicy red coconut chutney."
    ]
  },
  {
    "id": "snacks-spring-rolls",
    "name": "Crispy Veg Spring Rolls",
    "subCategory": "crispy-bites",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/spring-rolls.jpg",
    "description": "Thin, crackly wrappers stuffed with wok-tossed shredded cabbage, carrots, bell peppers, soy sauce, and white pepper, fried golden.",
    "ingredients": [
      {
        "name": "Spring Roll Wrappers (or thin pastry sheets)",
        "amount": "6 sheets"
      },
      {
        "name": "Shredded Cabbage",
        "amount": "1.5 cups"
      },
      {
        "name": "Carrot",
        "amount": "1 medium (julienned)"
      },
      {
        "name": "Capsicum",
        "amount": "1/2 (julienned)"
      },
      {
        "name": "Spring Onion Greens",
        "amount": "1/2 cup"
      },
      {
        "name": "Soy Sauce & Vinegar",
        "amount": "1 tbsp & 1 tsp"
      },
      {
        "name": "White Pepper & Garlic",
        "amount": "1 tsp each"
      },
      {
        "name": "Maida Paste",
        "amount": "2 tbsp maida in 2 tbsp water (for sealing)"
      }
    ],
    "steps": [
      "Heat 1 tbsp oil in a smoking hot wok; toss minced garlic, ginger, and white spring onions on high flame for 30 seconds.",
      "Add shredded cabbage, carrots, and capsicum; flash stir-fry on high flame for 2 minutes (keep vegetables crunchy, do not let them sweat water).",
      "Stir in soy sauce, vinegar, black pepper, and salt; turn off heat, toss in spring onion greens, and cool completely.",
      "Place a spring roll sheet diagonally; spoon 2 tbsp filling across the corner closest to you.",
      "Roll tightly halfway, fold in the left and right flaps envelope-style, brush edges with maida slurry, and roll all the way to seal firmly.",
      "Deep fry in hot oil on medium-high flame for 3-4 minutes until blistered, golden, and shatteringly crisp; slice diagonally and serve with sweet chilli sauce."
    ]
  },
  {
    "id": "kurkuri-bhindi",
    "name": "Crispy Kurkuri Bhindi",
    "subCategory": "crispy-bites",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/kurkuri-bhindi.jpg",
    "description": "Thin juliennes of tender okra deseeded, dusted with gram flour, rice flour, amchur, and carom seeds, flash-fried into crispy straws.",
    "ingredients": [
      {
        "name": "Bhindi (Okra)",
        "amount": "250g (washed, dried thoroughly, deseeded & julienned into thin matchsticks)"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "3 tbsp"
      },
      {
        "name": "Rice Flour / Cornstarch",
        "amount": "2 tbsp"
      },
      {
        "name": "Ajwain",
        "amount": "1/2 tsp"
      },
      {
        "name": "Amchur Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Kashmiri Chilli & Chaat Masala",
        "amount": "1 tbsp each"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Cut bhindi in half length-wise, scrape out white seeds completely, and slice into very thin lengthwise matchsticks.",
      "In a wide plate, toss julienned bhindi with red chilli powder, turmeric, amchur, ajwain, and chaat masala (do NOT add salt yet, salt releases water).",
      "Dust besan and rice flour over the seasoned bhindi; toss gently so dry flour sticks to the okra strips.",
      "Sprinkle a few droplets of water (just 1 teaspoon) and salt right before frying; toss quickly so flour forms a light coating.",
      "Drop bhindi matchsticks in small batches into hot oil on medium-high heat.",
      "Fry for 3 minutes until deep golden and shatteringly crisp; drain and dust with extra chaat masala immediately."
    ]
  },
  {
    "id": "crispy-corn",
    "name": "Barbeque-Style Crispy Pepper Corn",
    "subCategory": "crispy-bites",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/crispy-corn.jpg",
    "description": "Restaurant favorite: sweet corn kernels boiled, dredged in spiced cornstarch, deep-fried until crunchy, and tossed with spring onions and crushed pepper.",
    "ingredients": [
      {
        "name": "Sweet Corn Kernels",
        "amount": "2 cups (boiled 3 mins & drained well)"
      },
      {
        "name": "Cornstarch",
        "amount": "1/3 cup"
      },
      {
        "name": "Rice Flour",
        "amount": "2 tbsp"
      },
      {
        "name": "Black Pepper",
        "amount": "1 tbsp (freshly cracked)"
      },
      {
        "name": "Spring Onion Greens",
        "amount": "3 tbsp (finely chopped)"
      },
      {
        "name": "Green Chillies & Garlic",
        "amount": "1 tbsp (finely minced)"
      },
      {
        "name": "Lemon Juice & Chaat Masala",
        "amount": "1 tsp each"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Boil sweet corn kernels in salted water for 3 minutes; drain completely in a colander for 5 minutes (they must be moist, but not dripping wet).",
      "Toss warm corn with 2 tbsp cornstarch, 1 tbsp rice flour, salt, and black pepper; let it sit for 2 minutes to adhere.",
      "Add remaining cornstarch and toss until every kernel is individually coated in white dry starch.",
      "Sieve lightly to shake off excess loose flour.",
      "Heat oil in a deep kadai on high flame; slide corn carefully into hot oil and cover partially with a splatter guard (corn can pop); fry undisturbed for 3-4 minutes until crunchy and crisp.",
      "Drain fried corn into a mixing bowl; toss with minced garlic, green chillies, spring onion greens, cracked pepper, lemon juice, and chaat masala."
    ]
  },
  {
    "id": "gobi-65",
    "name": "Crispy Gobi 65",
    "subCategory": "crispy-bites",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/gobi-65.jpg",
    "description": "Crunchy cauliflower florets marinated in fiery Kashmiri red chilli, ginger, garlic, and rice flour, flash-fried and tossed with curry leaves.",
    "ingredients": [
      {
        "name": "Cauliflower (Gobi)",
        "amount": "1 small head (cut into bite-sized florets)"
      },
      {
        "name": "Cornstarch",
        "amount": "3 tbsp"
      },
      {
        "name": "Rice Flour",
        "amount": "3 tbsp"
      },
      {
        "name": "Kashmiri Chilli Powder",
        "amount": "1.5 tbsp (vibrant red)"
      },
      {
        "name": "Ginger-Garlic Paste",
        "amount": "1 tbsp"
      },
      {
        "name": "Fresh Curd",
        "amount": "2 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      },
      {
        "name": "Green Chillies",
        "amount": "3 (slit)"
      }
    ],
    "steps": [
      "Blanch gobi florets in boiling salted water with turmeric for exactly 2 minutes; drain completely on paper towels.",
      "In a bowl, mix ginger-garlic paste, curd, Kashmiri chilli powder, garam masala, lemon juice, and salt.",
      "Toss warm cauliflower in the spice marinade; then sprinkle cornstarch and rice flour over it, tossing until a tight, even crust forms.",
      "Heat oil in a kadai on medium-high flame.",
      "Drop florets individually into hot oil; fry for 5 minutes until crispy and dark reddish-golden; drain.",
      "In a pan, heat 1 tsp oil, flash-fry curry leaves and slit green chillies for 30 seconds, tip the crispy fried gobi in, and toss for 1 minute."
    ]
  },
  {
    "id": "chicken-65-snack",
    "name": "Original Chennai Chicken 65",
    "subCategory": "crispy-bites",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chicken-65.jpg",
    "description": "Legendary Hotel Buhari Chennai appetizer: boneless chicken cubes marinated in thick yogurt, Kashmiri chilli, black pepper, and rice flour, fried with curry leaves.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "400g (boneless small 1-inch cubes)"
      },
      {
        "name": "Fresh Curd",
        "amount": "2 tbsp (thick)"
      },
      {
        "name": "Rice Flour",
        "amount": "2 tbsp"
      },
      {
        "name": "Cornstarch",
        "amount": "2 tbsp"
      },
      {
        "name": "Kashmiri Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Ginger-Garlic Paste",
        "amount": "1 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "3 sprigs"
      },
      {
        "name": "Green Chillies",
        "amount": "4 (slit)"
      }
    ],
    "steps": [
      "Marinate boneless chicken cubes with curd, Kashmiri chilli powder, ginger-garlic paste, black pepper, lemon juice, and salt for 30 minutes.",
      "Sprinkle cornstarch and rice flour directly over the chicken; toss firmly until each piece is coated in a sticky batter.",
      "Heat oil in a deep kadai on medium-high heat.",
      "Drop chicken pieces one by one into the bubbling hot oil (do not crowd the pan).",
      "Deep-fry on medium flame for 5-6 minutes until chicken is tender inside and blistered crispy outside; drain on paper towels.",
      "In a separate small pan, heat 1 tsp oil; crackle lots of fresh curry leaves and slit green chillies; toss the hot fried chicken in for 30 seconds."
    ]
  },
  {
    "id": "paneer-65",
    "name": "Crispy Paneer 65",
    "subCategory": "crispy-bites",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/paneer-65.jpg",
    "description": "Crisp-fried cubes of fresh paneer coated in spicy South Indian red marinade, tossed in a sizzling tempering of mustard, garlic, and curry leaves.",
    "ingredients": [
      {
        "name": "Paneer",
        "amount": "250g (cut into bite-sized cubes)"
      },
      {
        "name": "Cornstarch",
        "amount": "3 tbsp"
      },
      {
        "name": "Rice Flour",
        "amount": "2 tbsp"
      },
      {
        "name": "Kashmiri Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Ginger-Garlic Paste",
        "amount": "1 tbsp"
      },
      {
        "name": "Fresh Curd",
        "amount": "2 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      },
      {
        "name": "Mustard Seeds",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "In a bowl, mix curd, Kashmiri chilli, ginger-garlic paste, black pepper, lemon juice, and salt into a smooth marinade.",
      "Gently toss paneer cubes in the marinade, then dredge in cornstarch and rice flour until every side is dry-coated.",
      "Heat oil in a kadai on medium-high flame.",
      "Drop paneer cubes into the hot oil; fry for 2-3 minutes until the exterior turns crisp and deep golden-red (do not over-fry or paneer turns chewy).",
      "Drain paneer on paper towels.",
      "Heat 1 tbsp oil in a wok; add mustard seeds, slit green chillies, minced garlic, and curry leaves; toss the crispy fried paneer in the sizzling tempering for 30 seconds."
    ]
  },
  {
    "id": "mathri",
    "name": "Punjabi Crispy Khasta Mathri",
    "subCategory": "regional-namkeen",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/mathri.jpg",
    "description": "Flaky, layered Punjabi tea-time crackers spiced with carom seeds (ajwain), kasuri methi, and black peppercorns, slow-fried till golden.",
    "ingredients": [
      {
        "name": "Maida (All-Purpose Flour)",
        "amount": "2 cups"
      },
      {
        "name": "Pure Cow Ghee (Moyan)",
        "amount": "1/4 cup (melted warm)"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1 tbsp (crushed)"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tbsp (crushed)"
      },
      {
        "name": "Whole Black Peppercorns",
        "amount": "1 tsp (coarsely cracked)"
      },
      {
        "name": "Oil or Ghee",
        "amount": "for slow deep frying"
      }
    ],
    "steps": [
      "In a large bowl, rub flour with warm melted ghee thoroughly between palms for 4 minutes until it resembles breadcrumbs and holds shape when pressed.",
      "Add crushed ajwain, kasuri methi, coarsely cracked black pepper, and salt.",
      "Sprinkle chilled water gradually and knead into a stiff, tight dough (do not over-knead); rest covered for 15 minutes.",
      "Pinch small portions of dough, roll into balls, and flatten with your palm or rolling pin into thick discs (1/4 inch thick).",
      "Prick each mathri all over with a fork on both sides (prevents puffing and ensures crisp interior).",
      "Slide into medium-low heat oil; slow fry for 12-14 minutes on low flame until pale golden-brown and completely crisp; cool and store."
    ]
  },
  {
    "id": "chakli",
    "name": "Traditional Rice Flour Chakli (Murukku)",
    "subCategory": "regional-namkeen",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/chakli.jpg",
    "description": "Festive Diwali spiral savories made with rice flour, roasted gram flour, sesame seeds, and ajwain, pressed into spiky spirals.",
    "ingredients": [
      {
        "name": "Rice Flour",
        "amount": "2 cups"
      },
      {
        "name": "Roasted Chana Dal Flour (Puttu Kadalai)",
        "amount": "1/2 cup"
      },
      {
        "name": "White Sesame Seeds (Til)",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Ajwain & Cumin Seeds",
        "amount": "1 tsp each"
      },
      {
        "name": "Butter",
        "amount": "2 tbsp (room temperature)"
      },
      {
        "name": "Hing",
        "amount": "1/4 tsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Sift rice flour and roasted gram flour into a mixing bowl; rub soft butter into the flour with fingertips until crumbly.",
      "Add sesame seeds, cumin, crushed ajwain, hing, red chilli powder, and salt.",
      "Add warm water gradually and knead into a smooth, non-sticky, pliable dough (keep covered with damp cloth).",
      "Fit a star nozzle into a chakli/murukku press; grease the inside cylinder with oil and fill with dough.",
      "Press the dough into neat spiral concentric circles on small greased parchment paper squares.",
      "Gently slide spirals into medium-hot oil; fry on medium flame for 5-6 minutes until bubbles subside and chaklis turn crisp and golden."
    ]
  },
  {
    "id": "ribbon-pakoda",
    "name": "South Indian Ribbon Pakoda (Ola Pakoda)",
    "subCategory": "regional-namkeen",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/ribbon-pakoda.jpg",
    "description": "Crisp golden flat ribbon ribbons made from rice and gram flour seasoned with red chilli, hing, and sesame, pressed straight into hot oil.",
    "ingredients": [
      {
        "name": "Rice Flour",
        "amount": "2 cups"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1 cup"
      },
      {
        "name": "Butter or Hot Oil",
        "amount": "2 tbsp"
      },
      {
        "name": "Kashmiri Red Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Hing (Asafoetida)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Sesame Seeds",
        "amount": "1 tbsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Combine rice flour, besan, red chilli powder, hing, sesame seeds, and salt in a bowl.",
      "Rub in soft butter or hot oil until flour is evenly incorporated.",
      "Add water in parts and knead into a soft, smooth dough (softer than chakli dough to press easily through slit nozzle).",
      "Fit the flat horizontal slit plate (ribbon nozzle) into a murukku press; fill with dough.",
      "Hold the press directly over hot oil in a kadai and press continuously in circular motion to form ribbons directly into the oil.",
      "Fry on medium-high flame for 3 minutes, flipping once, until bubbling ceases and ribbons are crisp; drain and break into bite-sized strips."
    ]
  },
  {
    "id": "namak-pare",
    "name": "Crispy Namak Pare (Nimki)",
    "subCategory": "regional-namkeen",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/namak-pare.jpg",
    "description": "Crisp diamond-cut savory crackers flavored with carom seeds and ghee, fried on gentle heat till golden and flaky.",
    "ingredients": [
      {
        "name": "Maida (All-Purpose Flour)",
        "amount": "2 cups"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1/4 cup (melted warm)"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1 tbsp (crushed)"
      },
      {
        "name": "Kalonji (Nigella Seeds)",
        "amount": "1/2 tsp (optional)"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Rub maida and warm ghee together with your fingers for 3 minutes until crumbly and holds shape when squeezed in a fist.",
      "Add crushed ajwain, kalonji, and salt; sprinkle lukewarm water in small amounts and knead into a firm, stiff dough; rest covered for 20 minutes.",
      "Divide into 3 large balls; roll out each ball with a rolling pin into a thin, even disc (1/8 inch thick).",
      "Using a pizza cutter or sharp knife, cut diamond-shaped strips (first parallel lines, then diagonal cuts).",
      "Separate the diamond pieces gently and slide into moderately hot oil.",
      "Fry on low-medium flame for 6-8 minutes, stirring gently so they cook through and turn uniform light golden-brown and crispy."
    ]
  },
  {
    "id": "nippattu",
    "name": "Karnataka Nippattu (Spicy Rice Crackers)",
    "subCategory": "regional-namkeen",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/nippattu.jpg",
    "description": "Crunchy Karnataka tea-time savory discs studded with roasted peanuts, fried gram, curry leaves, and Byadgi red chilli.",
    "ingredients": [
      {
        "name": "Rice Flour",
        "amount": "2 cups"
      },
      {
        "name": "Maida",
        "amount": "1/4 cup"
      },
      {
        "name": "Roasted Peanuts",
        "amount": "1/3 cup (coarsely crushed)"
      },
      {
        "name": "Roasted Gram (Hurigadale)",
        "amount": "1/3 cup (coarsely powdered)"
      },
      {
        "name": "White Sesame Seeds",
        "amount": "1 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs (finely minced)"
      },
      {
        "name": "Byadgi Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Hot Oil",
        "amount": "3 tbsp (for dough) + oil for frying"
      }
    ],
    "steps": [
      "In a wide bowl, mix rice flour, maida, crushed roasted peanuts, roasted gram powder, sesame seeds, chopped curry leaves, chilli powder, hing, and salt.",
      "Pour 3 tbsp smoking hot oil over the dry flour; mix with a spoon as it froths, then rub with fingers.",
      "Add warm water gradually and knead into a smooth, non-sticky dough.",
      "Take small gooseberry-sized dough balls, place between greased plastic sheets, and flatten with a flat-bottomed bowl into thin, flat round discs.",
      "Prick each disc with a fork so they don't puff up.",
      "Deep fry in hot oil on medium flame for 5-6 minutes until golden-brown and delightfully crunchy."
    ]
  },
  {
    "id": "chekkalu",
    "name": "Andhra Pappu Chekkalu",
    "subCategory": "regional-namkeen",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/chekkalu.jpg",
    "description": "Authentic Andhra village snack: crispy fried rice discs embedded with soaked chana dal, cumin, ginger, and curry leaves.",
    "ingredients": [
      {
        "name": "Rice Flour",
        "amount": "2 cups (freshly milled or fine store-bought)"
      },
      {
        "name": "Chana Dal",
        "amount": "1/4 cup (soaked in warm water for 1 hour)"
      },
      {
        "name": "Butter / Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Green Chilli & Ginger Paste",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Cumin Seeds (Jeera)",
        "amount": "1 tsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs (finely chopped)"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Drain soaked chana dal completely.",
      "In a bowl, combine rice flour, butter, drained chana dal, ginger-green chilli paste, cumin seeds, chopped curry leaves, and salt.",
      "Mix well with fingertips until butter is evenly dispersed throughout the flour.",
      "Add warm water in small increments and knead into a smooth, soft, pliable dough.",
      "Pinch small balls, place on greased plastic sheet, and pat thin with your fingers into round flat discs; prick with fork.",
      "Slide discs into medium-hot oil; fry on medium flame for 4-5 minutes until oil bubbles settle and chekkalu turn light golden and crisp."
    ]
  },
  {
    "id": "thattai",
    "name": "Tamil Thattai Murukku",
    "subCategory": "regional-namkeen",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/thattai.jpg",
    "description": "Traditional Tamil festival savory: crisp round discs made with roasted urad dal flour, rice flour, soaked chana dal, and asafoetida.",
    "ingredients": [
      {
        "name": "Rice Flour",
        "amount": "2 cups"
      },
      {
        "name": "Urad Dal Flour",
        "amount": "2 tbsp (urad dal dry-roasted till fragrant & powdered)"
      },
      {
        "name": "Chana Dal",
        "amount": "2 tbsp (soaked 30 mins & drained)"
      },
      {
        "name": "Butter",
        "amount": "1.5 tbsp (softened)"
      },
      {
        "name": "Hing (Asafoetida)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Red Chilli Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "1 sprig (chopped)"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Dry roast urad dal in a pan on low flame until aromatic (do not brown); cool and grind to fine powder; sift.",
      "In a bowl, mix rice flour, roasted urad dal flour, soft butter, soaked chana dal, red chilli powder, hing, chopped curry leaves, and salt.",
      "Add water gradually to make a smooth, pliable dough that holds together without cracking.",
      "Pinch small marble-sized balls; place on a greased sheet and flatten with fingers or a flat cup into thin roundels.",
      "Prick each thattai all over with a fork so they remain flat and crunchy.",
      "Deep fry in hot oil on medium flame for 4-5 minutes until golden and crisp; drain and cool completely."
    ]
  },
  {
    "id": "banana-chips",
    "name": "Kerala Nendran Banana Chips",
    "subCategory": "regional-namkeen",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/banana-chips.jpg",
    "description": "God's Own Country signature snack: thin rounds of raw Kerala Nendran plantains fried in pure coconut oil and salted with turmeric water.",
    "ingredients": [
      {
        "name": "Raw Nendran Bananas (Kerala Plantains)",
        "amount": "3 large (firm & green)"
      },
      {
        "name": "Pure Coconut Oil",
        "amount": "for deep frying"
      },
      {
        "name": "Salted Turmeric Water",
        "amount": "1 tbsp salt + 1/2 tsp turmeric dissolved in 3 tbsp water"
      }
    ],
    "steps": [
      "Slit the thick green skin of raw Nendran bananas length-wise at four corners; peel off the outer skin cleanly.",
      "Immerse peeled bananas in water with a pinch of turmeric for 5 minutes, then wipe completely dry with a towel.",
      "Heat pure coconut oil in a deep traditional uruli or kadai on medium-high flame until hot.",
      "Hold a chip slicer directly over the hot coconut oil and slice thin round coins directly into the bubbling oil in a single layer.",
      "Stir gently with a slotted ladle so slices do not stick together; fry for 3 minutes until crisping up.",
      "Carefully sprinkle 1 teaspoon of the salted turmeric water into the hot oil (it will sizzle vigorously and season the chips uniformly); fry for 1 more minute until bubbling stops completely; drain crisp yellow chips."
    ]
  }
];
