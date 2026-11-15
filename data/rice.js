// Section 2: Rice & Rice-Based Dishes (Fried Rice, Traditional Rice, Biryani, Pulao & Khichdi)
// Every single dish features its own authentic, distinct cooking process and ingredients
const RICE_RECIPES = [
  {
    "id": "veg-fried-rice",
    "name": "Veg Fried Rice",
    "subCategory": "fried-rice",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/fried-rice.jpg",
    "description": "Indo-Chinese street-style wok-tossed long grain rice with crisp colorful vegetables and spring onions.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Carrot",
        "amount": "as needed"
      },
      {
        "name": "Beans",
        "amount": "as needed"
      },
      {
        "name": "Cabbage",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Spring Onion",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      },
      {
        "name": "Garlic",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat 2 tbsp oil in a large wok or kadai on the highest heat until smoking.",
      "Add finely minced garlic and sliced white parts of spring onion; toss for 20 seconds.",
      "Add finely chopped carrots, French beans, and cabbage; stir-fry vigorously for 2 minutes to keep them crunchy.",
      "Add cold, separated day-old cooked rice, 1 tbsp soy sauce, 0.5 tsp vinegar, crushed black pepper, and salt.",
      "Toss continuously on high flame for 2 minutes, finish with green spring onion greens, and serve hot."
    ]
  },
  {
    "id": "egg-fried-rice",
    "name": "Egg Fried Rice",
    "subCategory": "fried-rice",
    "prepTime": 15,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/fried-rice.jpg",
    "description": "Fluffy rice scrambled with fresh farm eggs, cracked black pepper, garlic, and scallions.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Eggs",
        "amount": "as needed"
      },
      {
        "name": "Garlic",
        "amount": "as needed"
      },
      {
        "name": "Spring Onion",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat 1 tbsp oil in a hot wok. Pour 2 whisked eggs seasoned with a pinch of salt and pepper.",
      "Quickly scramble into soft, fluffy curds on medium flame for 1 minute; remove and set aside.",
      "In the same wok, heat 1 tbsp oil on high flame, saut\u00e9 minced garlic and spring onions until fragrant.",
      "Add cold cooked rice, scrambled eggs, 1 tbsp soy sauce, and a generous pinch of crushed black pepper.",
      "Toss vigorously on high flame for 2 minutes so the rice grains get coated in egg aroma. Garnish with scallions."
    ]
  },
  {
    "id": "chicken-fried-rice",
    "name": "Chicken Fried Rice",
    "subCategory": "fried-rice",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/fried-rice.jpg",
    "description": "Diced tender chicken breast tossed in a smoking wok with basmati rice, vegetables, and soy sauce.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Boneless Chicken",
        "amount": "as needed"
      },
      {
        "name": "Eggs",
        "amount": "as needed"
      },
      {
        "name": "Garlic",
        "amount": "as needed"
      },
      {
        "name": "Spring Onion",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate small diced boneless chicken with 0.5 tsp soy sauce, cornstarch, pepper, and salt for 10 minutes.",
      "Sear chicken in a smoking hot wok with 2 tbsp oil until golden and fully cooked (about 3-4 minutes); push to one side.",
      "Crack 1 egg into the wok and scramble quickly.",
      "Toss in minced garlic, finely diced carrots, beans, and spring onion whites for 1 minute.",
      "Add chilled cooked rice, 1 tbsp soy sauce, white pepper, and toss continuously on high flame until grains dance."
    ]
  },
  {
    "id": "schezwan-fried-rice",
    "name": "Schezwan Fried Rice",
    "subCategory": "fried-rice",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/fried-rice.jpg",
    "description": "Fiery, spicy street-style fried rice infused with red chilli Schezwan sauce, garlic, and crunchy vegetables.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Schezwan Sauce",
        "amount": "as needed"
      },
      {
        "name": "Carrot",
        "amount": "as needed"
      },
      {
        "name": "Capsicum",
        "amount": "as needed"
      },
      {
        "name": "Garlic",
        "amount": "as needed"
      },
      {
        "name": "Spring Onion",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat 2 tbsp oil in a wok on high flame. Add minced garlic, ginger, and sliced celery or spring onions.",
      "Add diced carrots, capsicum, and cabbage; stir-fry for 1.5 minutes on high heat.",
      "Add 2 generous tablespoons of fiery red Schezwan sauce and 1 tsp soy sauce; mix until bubbling and fragrant.",
      "Tip in cold separated cooked rice, toss vigorously on high flame until every grain turns spicy bright red.",
      "Garnish with chopped spring onion greens and serve with Manchurian gravy."
    ]
  },
  {
    "id": "paneer-fried-rice",
    "name": "Paneer Fried Rice",
    "subCategory": "fried-rice",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/fried-rice.jpg",
    "description": "Golden pan-seared paneer cubes tossed with fragrant basmati rice, bell peppers, and oriental spices.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Paneer",
        "amount": "as needed"
      },
      {
        "name": "Capsicum",
        "amount": "as needed"
      },
      {
        "name": "Carrot",
        "amount": "as needed"
      },
      {
        "name": "Garlic",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Cut fresh paneer into small 1 cm cubes. Shallow fry in 1 tbsp oil or ghee until light golden; drain.",
      "In the same pan on high heat, saut\u00e9 minced garlic and diced bell peppers (capsicum) for 1 minute.",
      "Add cold cooked basmati rice, golden paneer cubes, soy sauce, and crushed black pepper.",
      "Gently toss on medium-high flame without breaking the paneer cubes until heated through.",
      "Finish with fresh spring onion greens."
    ]
  },
  {
    "id": "mushroom-fried-rice",
    "name": "Mushroom Fried Rice",
    "subCategory": "fried-rice",
    "prepTime": 18,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/fried-rice.jpg",
    "description": "Earthy button mushrooms stir-fried on high heat with garlic, spring onions, and seasoned rice.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Button Mushrooms",
        "amount": "as needed"
      },
      {
        "name": "Garlic",
        "amount": "as needed"
      },
      {
        "name": "Spring Onion",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Slice button mushrooms into bite-sized pieces and pat dry completely.",
      "Heat 2 tbsp oil or butter on high flame; add minced garlic and sliced mushrooms.",
      "Saut\u00e9 on high heat without crowding until mushrooms release moisture and turn caramelized golden brown.",
      "Add spring onions, cold cooked rice, light soy sauce, and lots of cracked black pepper.",
      "Toss on high heat for 2 minutes and serve steaming hot."
    ]
  },
  {
    "id": "garlic-fried-rice",
    "name": "Garlic Fried Rice",
    "subCategory": "fried-rice",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/fried-rice.jpg",
    "description": "Aromatic burnt garlic flavored fried rice with crispy golden garlic chips and scallions.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Fresh Garlic",
        "amount": "as needed"
      },
      {
        "name": "Spring Onion",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      },
      {
        "name": "Butter or Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Thinly slice 8 cloves of garlic into chips. Fry in 2 tbsp oil on low flame until crisp and golden brown; drain and set aside.",
      "In the remaining garlic-infused oil, add 1 tbsp finely minced raw garlic and saut\u00e9 on high heat for 30 seconds.",
      "Add cold cooked rice, a dash of light soy sauce, salt, and white pepper.",
      "Toss on high flame until every grain is infused with toasted garlic aroma.",
      "Turn off heat, mix in chopped spring onions, and top with the crispy golden garlic chips."
    ]
  },
  {
    "id": "mixed-fried-rice",
    "name": "Mixed Fried Rice",
    "subCategory": "fried-rice",
    "prepTime": 22,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/fried-rice.jpg",
    "description": "Deluxe combination fried rice loaded with chicken, eggs, prawns, and colorful vegetables.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Eggs",
        "amount": "as needed"
      },
      {
        "name": "Prawns",
        "amount": "as needed"
      },
      {
        "name": "Garlic",
        "amount": "as needed"
      },
      {
        "name": "Spring Onion",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Sear bite-sized chicken pieces and cleaned deveined prawns in 2 tbsp oil until cooked; set aside.",
      "Scramble 2 eggs in the hot wok and add back the cooked chicken and prawns.",
      "Toss in minced garlic, shredded cabbage, carrots, and spring onions on smoking high heat.",
      "Add cold cooked long-grain rice, 1 tbsp soy sauce, oyster sauce (or dark soy), and black pepper.",
      "Toss continuously on high flame for 2-3 minutes for a true street-style smoky wok hei flavor."
    ]
  },
  {
    "id": "lemon-rice-chitranna",
    "name": "Lemon Rice (Chitranna)",
    "subCategory": "traditional-rice",
    "prepTime": 12,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Zesty, turmeric-tinted tempered rice with crunchy roasted peanuts, mustard seeds, and fresh curry leaves.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "as needed"
      },
      {
        "name": "Peanuts",
        "amount": "as needed"
      },
      {
        "name": "Mustard Seeds",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Green Chillies",
        "amount": "as needed"
      },
      {
        "name": "Turmeric",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Spread warm cooked rice on a wide plate to cool; drizzle 1 tsp sesame oil and 0.5 tsp turmeric over it.",
      "Heat 2 tbsp oil in a kadai. Add mustard seeds; when they crackle, add raw peanuts, chana dal, and urad dal.",
      "Fry on low heat until peanuts turn crunchy and lentils turn golden brown.",
      "Add slit green chillies, grated ginger, and fresh curry leaves; fry for 30 seconds, then turn off the flame completely.",
      "Squeeze fresh lemon juice into the hot oil with salt, then pour this aromatic tadka over the rice and mix gently with a flat spatula."
    ]
  },
  {
    "id": "tomato-rice-thakkali-sadam",
    "name": "Tomato Rice (Thakkali Sadam)",
    "subCategory": "traditional-rice",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Tangy and spiced South Indian rice cooked with ripe country tomatoes, onions, and aromatic garam masala.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Tomatoes",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Mustard Seeds",
        "amount": "as needed"
      },
      {
        "name": "Chilli Powder",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat 2 tbsp oil in a pan. Temper mustard seeds, fennel seeds, a small cinnamon stick, and curry leaves.",
      "Add sliced onions and ginger-garlic paste; saut\u00e9 until onions turn translucent and sweet.",
      "Add 3 finely chopped ripe country tomatoes, turmeric, red chilli powder, and coriander powder.",
      "Cook covered on medium flame until tomatoes turn completely soft, pulpy, and oil starts separating from the masala.",
      "Add cooked rice and a spoon of ghee; mix gently until the rice is thoroughly coated in the spiced tomato gravy."
    ]
  },
  {
    "id": "curd-rice-thayir-sadam",
    "name": "Curd Rice (Thayir Sadam)",
    "subCategory": "traditional-rice",
    "prepTime": 10,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Soothing, cooling tempered yogurt rice garnished with roasted mustard, ginger, green chillies, and pomegranate pearls.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Fresh Curd",
        "amount": "as needed"
      },
      {
        "name": "Milk",
        "amount": "as needed"
      },
      {
        "name": "Mustard Seeds",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Ginger",
        "amount": "as needed"
      },
      {
        "name": "Green Chillies",
        "amount": "as needed"
      },
      {
        "name": "Pomegranate",
        "amount": "as needed"
      }
    ],
    "steps": [
      "While cooked rice is still warm, mash it lightly with the back of a cup or ladle so it turns soft.",
      "Add 0.5 cup warm milk first (this keeps the curd rice from turning sour over time) and mix well, then fold in 1 cup fresh thick curd and salt.",
      "Heat 1 tbsp ghee in a small pan. Crackle mustard seeds, urad dal, finely chopped ginger, green chillies, and curry leaves.",
      "Pour the hot ghee tempering directly into the creamy curd rice and stir gently.",
      "Garnish with ruby pomegranate pearls, fresh coriander, and roasted cashews. Chill before serving."
    ]
  },
  {
    "id": "tamarind-rice-puliyodharai",
    "name": "Tamarind Rice (Puliyodharai)",
    "subCategory": "traditional-rice",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Iconic temple-style tangy tamarind rice spiced with roasted sesame, fenugreek powder, and crunchy peanuts.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "as needed"
      },
      {
        "name": "Peanuts",
        "amount": "as needed"
      },
      {
        "name": "Mustard Seeds",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Dry Red Chillies",
        "amount": "as needed"
      },
      {
        "name": "Fenugreek Powder",
        "amount": "as needed"
      },
      {
        "name": "Sesame Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Soak a lemon-sized ball of tamarind in warm water and extract 1 cup of thick pulp.",
      "Dry roast fenugreek seeds, dry red chillies, and coriander seeds; grind into a fragrant spice powder.",
      "Heat 3 tbsp sesame oil (gingelly oil). Crackle mustard seeds, peanuts, chana dal, dry red chillies, and curry leaves.",
      "Pour in the thick tamarind extract, turmeric, jaggery, salt, and half the ground spice powder. Simmer on low heat until it thickens into an oily shiny paste (pulikachal).",
      "Mix the prepared pulikachal into warm cooked rice with the remaining spice powder and 1 tbsp raw sesame oil for authentic temple flavor."
    ]
  },
  {
    "id": "coconut-rice-thengai-sadam",
    "name": "Coconut Rice (Thengai Sadam)",
    "subCategory": "traditional-rice",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Delicate, aromatic rice tossed with freshly grated coconut, cashews, mustard seeds, and pure coconut oil.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "as needed"
      },
      {
        "name": "Cashews",
        "amount": "as needed"
      },
      {
        "name": "Mustard Seeds",
        "amount": "as needed"
      },
      {
        "name": "Urad Dal",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Green Chillies",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat 2 tbsp pure coconut oil or ghee in a pan.",
      "Add mustard seeds, urad dal, chana dal, whole cashews, dry red chillies, and curry leaves; fry until cashews turn golden.",
      "Add finely slit green chillies, grated ginger, and a pinch of asafoetida (hing).",
      "Add 1 cup of freshly grated coconut and saut\u00e9 gently on low flame for just 2 minutes (do not brown the coconut).",
      "Turn off the flame, add cooled cooked rice and salt, and toss gently until the coconut aroma coats every grain."
    ]
  },
  {
    "id": "jeera-rice",
    "name": "Jeera Rice",
    "subCategory": "traditional-rice",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Fragrant long-grain basmati rice tempered in pure desi ghee with crackling roasted cumin seeds and fresh coriander.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Cumin Seeds",
        "amount": "as needed"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "as needed"
      },
      {
        "name": "Whole Spices",
        "amount": "as needed"
      },
      {
        "name": "Fresh Coriander",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Rinse basmati rice until water runs clear; soak for 20 minutes, then cook with whole spices until grains are long and 95% done.",
      "Heat 2 tbsp pure cow ghee in a wide heavy pan on medium flame.",
      "Add 1.5 tbsp whole cumin seeds (jeera), 1 bay leaf, 2 green cardamoms, and 1 slit green chilli; let cumin crackle and release nutty aroma.",
      "Gently fold in the cooked fluffy basmati rice and season with salt.",
      "Toss on low flame for 1 minute, garnish with finely chopped fresh coriander, and serve with dal tadka."
    ]
  },
  {
    "id": "ghee-rice-neychoru",
    "name": "Ghee Rice (Neychoru)",
    "subCategory": "traditional-rice",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Rich Malabar celebration rice cooked in pure ghee with caramelized golden onions, roasted cashews, and sultanas.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "as needed"
      },
      {
        "name": "Onion (caramelized)",
        "amount": "as needed"
      },
      {
        "name": "Cashews",
        "amount": "as needed"
      },
      {
        "name": "Raisins",
        "amount": "as needed"
      },
      {
        "name": "Cardamom & Cloves",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat 3 tbsp pure desi ghee in a heavy pot. Fry whole cashews and raisins until cashews are golden and raisins puff up; remove.",
      "In the same ghee, thinly slice 1 onion and fry until deep caramelized golden brown (birista); remove half for garnish.",
      "Add whole spices: cinnamon, cardamom, cloves, and bay leaf; saut\u00e9 washed and drained kaima or basmati rice for 2 minutes in the ghee.",
      "Pour 2 cups boiling water per cup of rice, add salt, cover tightly with lid, and cook on low flame for 10-12 minutes until water is absorbed.",
      "Gently fluff the rice, top with fried onions, cashews, raisins, and an extra drizzle of melted cow ghee."
    ]
  },
  {
    "id": "mint-rice-pudina-rice",
    "name": "Mint Rice (Pudina Rice)",
    "subCategory": "traditional-rice",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Refreshing, vibrant green rice flavored with fresh garden mint leaves, coriander, green chillies, and whole spices.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Fresh Mint Leaves",
        "amount": "as needed"
      },
      {
        "name": "Fresh Coriander",
        "amount": "as needed"
      },
      {
        "name": "Green Chillies",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "In a blender, grind 1 packed cup fresh mint leaves, 0.5 cup coriander, 3 green chillies, 1 inch ginger, and 4 garlic cloves with 2 tbsp water into a vibrant green paste.",
      "Heat 2 tbsp ghee or oil in a pan. Add bay leaf, cloves, cinnamon, and sliced onions; saut\u00e9 until translucent.",
      "Add the freshly ground pudina paste and saut\u00e9 on medium heat for 3 minutes until the raw smell disappears.",
      "Add cooked rice and salt; mix gently on low flame until the mint paste coats every single rice grain evenly.",
      "Serve hot with cooling onion raita and roasted papad."
    ]
  },
  {
    "id": "coriander-rice-kothimeera-annam",
    "name": "Coriander Rice (Kothimeera Annam)",
    "subCategory": "traditional-rice",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Fragrant green rice prepared with a fresh ground paste of aromatic cilantro, green chillies, ginger, and cumin.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Fresh Coriander",
        "amount": "as needed"
      },
      {
        "name": "Green Chillies",
        "amount": "as needed"
      },
      {
        "name": "Ginger",
        "amount": "as needed"
      },
      {
        "name": "Cumin Seeds",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Blend a large bunch of fresh coriander leaves with green chillies, garlic, ginger, and cumin seeds into a smooth paste.",
      "Heat 2 tbsp oil in a pan. Add mustard seeds, chana dal, urad dal, and crunchy peanuts; fry until golden.",
      "Pour in the fresh coriander paste and saut\u00e9 on low heat for 2-3 minutes until the vibrant green aroma blooms.",
      "Stir in warm cooked rice and salt, toss gently on low heat, and serve with potato fry or curd."
    ]
  },
  {
    "id": "mango-rice-mamidikaya-annam",
    "name": "Mango Rice (Mamidikaya Annam)",
    "subCategory": "traditional-rice",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Seasonal Andhra specialty made with freshly grated raw tangy green mango, green chillies, and crunchy tempering.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Raw Green Mango",
        "amount": "as needed"
      },
      {
        "name": "Peanuts",
        "amount": "as needed"
      },
      {
        "name": "Mustard Seeds",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Green Chillies",
        "amount": "as needed"
      },
      {
        "name": "Turmeric",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Peel and coarsely grate 1 firm, tart raw green mango.",
      "Heat 2 tbsp groundnut oil in a kadai. Crackle mustard seeds, peanuts, chana dal, urad dal, slit green chillies, and curry leaves.",
      "Add 0.5 tsp turmeric and the freshly grated raw mango; saut\u00e9 on medium-low flame for 2-3 minutes until soft.",
      "Turn off the heat, add cooked rice and salt, and mix thoroughly so the sour, tangy mango flavor permeates the rice.",
      "Let sit for 10 minutes before serving to let the flavors deepen."
    ]
  },
  {
    "id": "sambar-rice-sambar-sadam",
    "name": "Sambar Rice (Sambar Sadam)",
    "subCategory": "traditional-rice",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Wholesome, comforting one-pot rice simmered with spiced toor dal, mixed country vegetables, and aromatic ghee.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Toor Dal",
        "amount": "as needed"
      },
      {
        "name": "Sambar Powder",
        "amount": "as needed"
      },
      {
        "name": "Tamarind",
        "amount": "as needed"
      },
      {
        "name": "Mixed Vegetables",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Pressure cook toor dal with a pinch of turmeric and extra water until soft and mashable.",
      "In a large pot, cook drumsticks, carrots, shallots, and beans with tamarind water, sambar powder, and salt until vegetables are tender.",
      "Add cooked dal, cooked rice, and 1 cup of warm water; mash lightly so the rice and dal merge into a porridge-like consistency.",
      "Simmer on low heat for 5 minutes so the rice absorbs the spicy tamarind sambar.",
      "In a small pan, prepare a rich tadka of mustard, curry leaves, hing, and ghee; pour sizzling over the sambar rice and mix."
    ]
  },
  {
    "id": "rasam-rice",
    "name": "Rasam Rice",
    "subCategory": "traditional-rice",
    "prepTime": 12,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Warm, soul-soothing comforting rice soaked in hot, peppery tomato-garlic rasam, topped with pure ghee.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Tomato",
        "amount": "as needed"
      },
      {
        "name": "Tamarind",
        "amount": "as needed"
      },
      {
        "name": "Crushed Pepper & Cumin",
        "amount": "as needed"
      },
      {
        "name": "Garlic",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Crush black peppercorns, cumin seeds, garlic, and dry red chilli coarsely.",
      "Boil crushed tomatoes with tamarind water, turmeric, crushed spice paste, curry leaves, and salt for 7-8 minutes.",
      "Temper mustard seeds, hing, and curry leaves in hot ghee, pour into the boiling rasam, and turn off heat.",
      "In a wide serving bowl, place warm cooked rice and pour 2 generous ladles of boiling peppery rasam over it.",
      "Top with a teaspoon of pure cow ghee, mash gently with fingers or spoon, and enjoy hot."
    ]
  },
  {
    "id": "dal-rice-pappu-annam",
    "name": "Dal Rice (Pappu Annam)",
    "subCategory": "traditional-rice",
    "prepTime": 10,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Simple everyday comfort: hot rice mixed with homestyle seasoned yellow lentils, a generous spoon of cow ghee, and pickle.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Toor Dal",
        "amount": "as needed"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "as needed"
      },
      {
        "name": "Turmeric",
        "amount": "as needed"
      },
      {
        "name": "Mustard Seeds",
        "amount": "as needed"
      },
      {
        "name": "Cumin",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Pressure cook toor dal with water and a pinch of turmeric until creamy and fully cooked.",
      "Mash the dal smooth with salt. Temper mustard seeds, cumin, crushed garlic, and curry leaves in pure cow ghee.",
      "On a traditional plate or thali, serve steaming hot rice, ladle hot mashed dal directly over the center.",
      "Top with a generous spoonful of melting pure desi cow ghee.",
      "Mix with fingers and enjoy alongside Andhra avakaya pickle and crispy papad."
    ]
  },
  {
    "id": "chicken-rice",
    "name": "Chicken Rice",
    "subCategory": "traditional-rice",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Hearty, comforting homestyle rice cooked with tender spiced chicken pieces, caramelized onions, and whole spices.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Tomato",
        "amount": "as needed"
      },
      {
        "name": "Garam Masala",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Cut 250g boneless chicken into small bite-sized pieces. Marinate with 0.5 tsp turmeric, chilli powder, ginger-garlic paste, and salt for 15 minutes.",
      "Heat 2 tbsp oil in a heavy kadai. Crackle cumin seeds and whole cinnamon-cloves.",
      "Saut\u00e9 finely sliced onions and slit green chillies on medium flame until deep golden brown.",
      "Add marinated chicken pieces and saut\u00e9 on medium-high heat for 5 minutes until chicken turns white and releases natural juices.",
      "Add chopped ripe tomatoes and fresh curry leaves; cook covered for 5 minutes until chicken is tender and masala is thick and glossy.",
      "Gently fold in warm cooked basmati rice, drizzle 1 tsp pure cow ghee, and toss on low flame for 2 minutes until every grain absorbs the chicken flavor. Garnish with chopped fresh coriander."
    ]
  },
  {
    "id": "egg-rice",
    "name": "Egg Rice",
    "subCategory": "traditional-rice",
    "prepTime": 15,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Quick, protein-rich everyday rice stir-fried with seasoned scrambled eggs, sliced onions, and crushed black pepper.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Eggs",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Green Chillies",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "In a bowl, crack 3 fresh farm eggs, add a pinch of salt, crushed black pepper, and 1 tbsp water; whisk lightly for extra fluffiness.",
      "Heat 2 tbsp oil in a wide pan or kadai. Saut\u00e9 finely chopped onions, slit green chillies, and fresh curry leaves until onions turn light golden.",
      "Pour the whisked eggs into the pan; let sit undisturbed for 20 seconds, then gently scramble into soft, large curds on medium flame.",
      "When eggs are 90% set, tip in cold, separated cooked rice.",
      "Add 0.5 tsp roasted cumin powder, freshly cracked black pepper, and salt to taste.",
      "Toss continuously on high flame for 2 minutes so the rice grains become aromatic, slightly toasted, and thoroughly coated with the scrambled egg. Serve hot with pickle."
    ]
  },
  {
    "id": "bagara-rice",
    "name": "Bagara Rice",
    "subCategory": "traditional-rice",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Signature Hyderabadi aromatic wedding rice cooked with mint, whole shahi garam masala, and caramelized onions.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Shahi Jeera",
        "amount": "as needed"
      },
      {
        "name": "Whole Garam Masala",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Mint & Coriander",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Rinse and soak basmati rice for 20 minutes.",
      "In a heavy-bottomed pot, heat 2 tbsp ghee and 1 tbsp oil. Add shahi jeera, bay leaf, cinnamon, cardamom, cloves, and star anise; saut\u00e9 until fragrant.",
      "Add thinly sliced onions and green chillies; saut\u00e9 on medium flame until onions turn deep golden brown.",
      "Add ginger-garlic paste, fresh mint leaves, and coriander; saut\u00e9 for 1 minute until fragrant.",
      "Add soaked drained rice, fry for 1 minute, then pour 2 cups of boiling water with salt. Cover tightly and cook on low heat for 12 minutes."
    ]
  },
  {
    "id": "bisibele-bath",
    "name": "Bisibele Bath",
    "subCategory": "traditional-rice",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/traditional-rice.jpg",
    "description": "Authentic Karnataka royal spicy rice and lentil dish cooked with vegetables, tamarind, and freshly ground aromatic spices.",
    "ingredients": [
      {
        "name": "Rice",
        "amount": "as needed"
      },
      {
        "name": "Toor Dal",
        "amount": "as needed"
      },
      {
        "name": "Mixed Vegetables",
        "amount": "as needed"
      },
      {
        "name": "Bisibelebath Powder",
        "amount": "as needed"
      },
      {
        "name": "Tamarind",
        "amount": "as needed"
      },
      {
        "name": "Cashews",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Pressure cook rice and toor dal together with 4 cups of water until soft and mushy.",
      "Cook diced carrots, beans, shallots, and peas with tamarind pulp, jaggery, salt, and 2 tbsp authentic bisibelebath powder.",
      "Combine the mashed rice-dal with the cooked spiced vegetables and add warm water to achieve a semi-liquid consistency.",
      "Simmer on low flame for 6-8 minutes so the rice absorbs all the rich spice and tamarind flavors.",
      "Heat 3 tbsp ghee; fry whole cashews, mustard seeds, curry leaves, and hing until golden; pour over the boiling bisibele bath."
    ]
  },
  {
    "id": "hyderabadi-chicken-dum-biryani",
    "name": "Hyderabadi Chicken Dum Biryani",
    "subCategory": "biryani",
    "prepTime": 45,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "The king of biryanis: marinated chicken slow-cooked on dum with saffron-infused long grain basmati rice, mint, and fried onions.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Fried Onions (Birista)",
        "amount": "as needed"
      },
      {
        "name": "Mint & Coriander",
        "amount": "as needed"
      },
      {
        "name": "Biryani Masala",
        "amount": "as needed"
      },
      {
        "name": "Saffron Milk",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate 500g chicken with thick curd, ginger-garlic paste, red chilli powder, biryani masala, mint, coriander, and half the golden fried onions (birista) for at least 1 hour.",
      "In a large pot of boiling water with whole garam masala and salt, boil soaked basmati rice until 70% done (firm to bite); drain.",
      "Spread the marinated raw chicken evenly at the bottom of a heavy-bottomed handi.",
      "Layer the 70% cooked hot basmati rice over the chicken. Drizzle saffron-infused warm milk, 3 tbsp pure desi ghee, rose water, and remaining fried onions on top.",
      "Seal the rim of the pot tightly with dough or aluminum foil and lid. Cook on high heat for 10 minutes, then place on a heavy tawa on low heat for 25 minutes for dum cooking.",
      "Rest for 10 minutes before gently scooping from the bottom to reveal layers of aromatic saffron rice and succulent chicken."
    ]
  },
  {
    "id": "chicken-fry-piece-biryani",
    "name": "Chicken Fry Piece Biryani",
    "subCategory": "biryani",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Iconic Andhra style: fragrant spiced bagara rice topped with spicy, deep-roasted chicken fry and curry leaves.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Chilli Powder",
        "amount": "as needed"
      },
      {
        "name": "Garam Masala",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Prepare fragrant bagara rice: saut\u00e9 shahi jeera, whole spices, mint, and onions in ghee; cook basmati rice until fluffy and set aside.",
      "For chicken fry: marinate chicken pieces with ginger-garlic paste, chilli powder, coriander powder, pepper, and garam masala for 30 minutes.",
      "Heat 3 tbsp oil in a heavy iron kadai. Saut\u00e9 sliced onions, slit green chillies, and lots of fresh curry leaves.",
      "Add marinated chicken and roast on medium-high flame without adding water until moisture evaporates and chicken turns deep roasted dark golden.",
      "To serve: ladle hot aromatic bagara rice onto a platter, generously heap the spicy roasted chicken fry pieces over the top, and garnish with fried cashews."
    ]
  },
  {
    "id": "chicken-65-biryani",
    "name": "Chicken 65 Biryani",
    "subCategory": "biryani",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Spicy, crispy fried Chicken 65 tossed with curry leaves, layered over aromatic dum basmati rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Chicken 65",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Biryani Spices",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Chicken 65 with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Chicken 65 in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "donne-chicken-biryani",
    "name": "Donne Chicken Biryani",
    "subCategory": "biryani",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Legendary Bangalore Shivaji Military Hotel specialty made with short-grain seeraga samba rice and aromatic green herbal masala.",
    "ingredients": [
      {
        "name": "Seeraga Samba Rice",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Mint & Coriander Paste",
        "amount": "as needed"
      },
      {
        "name": "Green Chillies",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      },
      {
        "name": "Whole Spices",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Blend a large bunch of fresh mint leaves, coriander, green chillies, garlic, ginger, and cinnamon-cloves into a fine green herbal masala paste.",
      "Heat 3 tbsp ghee in a heavy pot. Add whole spices, sliced onions, and saut\u00e9 until translucent.",
      "Add chicken pieces and the freshly ground green herbal paste; saut\u00e9 on medium flame for 5 minutes until oil starts releasing.",
      "Add washed short-grain seeraga samba rice and gently coat the rice in the green masala for 2 minutes.",
      "Pour boiling water (1:2 ratio), add salt, bring to a boil, cover tightly, and cook on low flame for 12 minutes until water is absorbed.",
      "Serve piping hot in traditional eco-friendly palm leaf cups (donne) with onion raita and boiled egg."
    ]
  },
  {
    "id": "ambur-chicken-biryani",
    "name": "Ambur Chicken Biryani",
    "subCategory": "biryani",
    "prepTime": 40,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Famous Tamil Nadu Arcot specialty cooked with seeraga samba rice, red chilli paste, curd, and tender chicken.",
    "ingredients": [
      {
        "name": "Seeraga Samba Rice",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Tomato",
        "amount": "as needed"
      },
      {
        "name": "Red Chilli Paste",
        "amount": "as needed"
      },
      {
        "name": "Whole Spices",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Soak seeraga samba rice for 20 minutes.",
      "Soak dry red chillies in warm water and grind into a smooth red paste.",
      "In a heavy brass pot, heat oil and ghee. Saut\u00e9 thinly sliced onions until golden; add ginger-garlic paste and the fresh red chilli paste.",
      "Add chopped tomatoes, curd, and chicken pieces; cook on medium heat until chicken releases its juices and gravy thickens.",
      "Cook seeraga samba rice in boiling salted water until 70% done; drain and layer over the chicken masala.",
      "Cover tightly with lid and place burning coals or heavy weight on top for 20 minutes dum. Serve with brinjal gravy (ennai kathirikai)."
    ]
  },
  {
    "id": "dindigul-chicken-biryani",
    "name": "Dindigul Chicken Biryani",
    "subCategory": "biryani",
    "prepTime": 40,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Signature Dindigul Thalappakatti biryani made with succulent country chicken, seeraga samba rice, and freshly pounded pepper masala.",
    "ingredients": [
      {
        "name": "Seeraga Samba Rice",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Shallots",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Pound whole black peppercorns, cumin, shallots (small sambar onions), ginger, and garlic into a coarse rustic paste.",
      "Heat ghee in a pot. Saut\u00e9 the shallot-pepper paste and fresh mint until aromatic.",
      "Add tender chicken pieces, fresh thick curd, lemon juice, and salt; simmer on medium flame until chicken is half-cooked.",
      "Add drained seeraga samba rice and boiling water. Stir once gently.",
      "Cook until water level aligns with rice, then seal with lid and place on low dum for 15 minutes. The signature peppery aroma will fill the kitchen."
    ]
  },
  {
    "id": "malabar-chicken-biryani",
    "name": "Malabar Chicken Biryani",
    "subCategory": "biryani",
    "prepTime": 40,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Kerala Thalassery style biryani cooked with fragrant kaima rice, mild spices, fried cashews, raisins, and tender chicken.",
    "ingredients": [
      {
        "name": "Jeerakasala / Kaima Rice",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Cashews & Raisins",
        "amount": "as needed"
      },
      {
        "name": "Fennel & Garam Masala",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate chicken with turmeric, chilli powder, lemon juice, and salt; shallow fry lightly and set aside.",
      "Saut\u00e9 thinly sliced onions, tomatoes, ginger-garlic-green chilli paste, fennel powder, and garam masala to make a rich Malabar chicken gravy.",
      "For rice: heat ghee, saut\u00e9 whole spices, and fry kaima / jeerakasala rice for 2 minutes. Add boiling water and cook until fluffy.",
      "In a heavy vessel, layer the chicken gravy, then cooked fragrant kaima rice, followed by fried cashews, raisins, fried onions, and a sprinkle of garam masala.",
      "Seal and place on low dum for 15 minutes. Serve with date-lemon pickle and coconut chammanthi."
    ]
  },
  {
    "id": "chicken-tikka-biryani",
    "name": "Chicken Tikka Biryani",
    "subCategory": "biryani",
    "prepTime": 40,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Charcoal tandoor-smoked marinated chicken tikka chunks layered with aromatic saffron rice and brown onions.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Tandoori Chicken Tikka",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Fried Onions",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      },
      {
        "name": "Biryani Masala",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Chicken Tikka with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Chicken Tikka in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "chicken-keema-biryani",
    "name": "Chicken Keema Biryani",
    "subCategory": "biryani",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Minced chicken cooked in rich bhuna masala, layered with long grain basmati rice and fresh mint.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Minced Chicken (Keema)",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Tomato",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Chicken Keema with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Chicken Keema in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "chicken-boneless-biryani",
    "name": "Chicken Boneless Biryani",
    "subCategory": "biryani",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Tender bite-sized boneless chicken pieces cooked in aromatic spices and slow-dummed with basmati rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Boneless Chicken",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Fried Onions",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Biryani Masala",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Chicken Boneless with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Chicken Boneless in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "chicken-lollipop-biryani",
    "name": "Chicken Lollipop Biryani",
    "subCategory": "biryani",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Crispy Indo-Chinese chicken lollipops nestled over a bed of fragrant, spicy Hyderabadi biryani rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Chicken Lollipops",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Biryani Masala",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Chicken Lollipop with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Chicken Lollipop in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "chicken-mughlai-biryani",
    "name": "Chicken Mughlai Biryani",
    "subCategory": "biryani",
    "prepTime": 45,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Royal, mildly spiced creamy biryani enriched with cashew-almond paste, kewra water, saffron, and tender chicken.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Cashew Paste",
        "amount": "as needed"
      },
      {
        "name": "Cream",
        "amount": "as needed"
      },
      {
        "name": "Saffron",
        "amount": "as needed"
      },
      {
        "name": "Fried Onions",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Chicken Mughlai with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Chicken Mughlai in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "kacchi-chicken-biryani",
    "name": "Kacchi Chicken Biryani",
    "subCategory": "biryani",
    "prepTime": 50,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Raw marinated chicken cooked slowly together with half-cooked basmati rice in a sealed pot under gentle dum heat.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Raw Papaya Paste",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Fried Onions",
        "amount": "as needed"
      },
      {
        "name": "Saffron",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Kacchi Chicken with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Kacchi Chicken in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "hyderabadi-mutton-dum-biryani",
    "name": "Hyderabadi Mutton Dum Biryani",
    "subCategory": "biryani",
    "prepTime": 60,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Classic royal feast: tender mutton pieces marinated in rich spices, slow-cooked with basmati rice on sealed dum.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Mutton",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Fried Onions",
        "amount": "as needed"
      },
      {
        "name": "Mint & Coriander",
        "amount": "as needed"
      },
      {
        "name": "Shahi Garam Masala",
        "amount": "as needed"
      },
      {
        "name": "Saffron Milk",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Hyderabadi Mutton Dum with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Hyderabadi Mutton Dum in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "mutton-fry-biryani",
    "name": "Mutton Fry Biryani",
    "subCategory": "biryani",
    "prepTime": 50,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Fragrant spiced biryani rice served with intensely roasted, peppery Andhra mutton fry on top.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Mutton",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Mutton Fry with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Mutton Fry in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "mutton-keema-biryani",
    "name": "Mutton Keema Biryani",
    "subCategory": "biryani",
    "prepTime": 40,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Flavor-packed minced mutton cooked with whole spices, green peas, and layered with aromatic basmati rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Minced Mutton (Keema)",
        "amount": "as needed"
      },
      {
        "name": "Green Peas",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Mutton Keema with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Mutton Keema in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "mutton-bone-biryani-nalli-biryani",
    "name": "Mutton Bone Biryani (Nalli Biryani)",
    "subCategory": "biryani",
    "prepTime": 60,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Rich bone marrow nalli mutton slow cooked until meltingly tender, combined with saffron basmati rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Mutton Nalli / Bone",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Fried Onions",
        "amount": "as needed"
      },
      {
        "name": "Saffron",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Mutton Bone  (Nalli ) with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Mutton Bone  (Nalli ) in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "ambur-mutton-biryani",
    "name": "Ambur Mutton Biryani",
    "subCategory": "biryani",
    "prepTime": 50,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Arcot region traditional mutton biryani prepared with seeraga samba rice, curd, and mild whole red chilli spice.",
    "ingredients": [
      {
        "name": "Seeraga Samba Rice",
        "amount": "as needed"
      },
      {
        "name": "Mutton",
        "amount": "as needed"
      },
      {
        "name": "Tomato",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Whole Spices",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Ambur Mutton with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Ambur Mutton in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "dindigul-mutton-biryani",
    "name": "Dindigul Mutton Biryani",
    "subCategory": "biryani",
    "prepTime": 50,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "South Indian favorite with tender goat meat cooked with curd, small onions, and freshly ground whole spices.",
    "ingredients": [
      {
        "name": "Seeraga Samba Rice",
        "amount": "as needed"
      },
      {
        "name": "Mutton",
        "amount": "as needed"
      },
      {
        "name": "Shallots",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Mint & Coriander",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Dindigul Mutton with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Dindigul Mutton in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "malabar-mutton-biryani",
    "name": "Malabar Mutton Biryani",
    "subCategory": "biryani",
    "prepTime": 50,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "North Kerala coastal delicacy with small-grain kaima rice, tender spiced mutton, and golden dry fruits.",
    "ingredients": [
      {
        "name": "Kaima Rice",
        "amount": "as needed"
      },
      {
        "name": "Mutton",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Cashews & Raisins",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Malabar Mutton with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Malabar Mutton in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "egg-dum-biryani",
    "name": "Egg Dum Biryani",
    "subCategory": "biryani",
    "prepTime": 30,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Boiled eggs shallow-fried with turmeric and chilli, layered with aromatic saffron basmati rice and mint.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Hard Boiled Eggs",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Fried Onions",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Biryani Masala",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Hard-boil 4 eggs; make small shallow slits on the sides. Toss in a pan with 0.5 tsp turmeric, chilli powder, and 1 tsp ghee until outer skin turns blistered and golden.",
      "Cook basmati rice with bay leaf, cloves, and salt until 75% done; drain.",
      "In a pot, prepare a rich biryani gravy by saut\u00e9ing onions, ginger-garlic, tomatoes, curd, biryani masala, and mint.",
      "Gently nestle the golden fried eggs into the gravy.",
      "Layer the drained basmati rice over the eggs, drizzle saffron milk, ghee, and golden fried onions. Cover tightly on low dum for 12 minutes."
    ]
  },
  {
    "id": "egg-fry-biryani",
    "name": "Egg Fry Biryani",
    "subCategory": "biryani",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Spicy pan-roasted eggs with crispy onions and curry leaves, topped over fragrant biryani rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Eggs",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Chilli Powder",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Egg Fry with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Egg Fry in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "prawn-biryani-royyala-biryani",
    "name": "Prawn Biryani (Royyala Biryani)",
    "subCategory": "biryani",
    "prepTime": 30,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Juicy, succulent ocean prawns marinated in coastal spices, layered with fragrant basmati rice and coriander.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Fresh Prawns",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Tomato",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Clean and devein fresh prawns. Marinate with 1 tsp turmeric, chilli powder, ginger-garlic paste, and lemon juice for 15 minutes.",
      "Heat 2 tbsp ghee. Saut\u00e9 onions, green chillies, tomatoes, and biryani spices until soft and fragrant.",
      "Add marinated prawns and cook for just 3-4 minutes on medium flame (do not overcook prawns or they become rubbery).",
      "Layer partially cooked basmati rice over the juicy prawn masala.",
      "Drizzle saffron milk, mint, and pure ghee; seal and dum cook for just 10 minutes on very low heat."
    ]
  },
  {
    "id": "fish-biryani",
    "name": "Fish Biryani",
    "subCategory": "biryani",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Delicate kingfish steaks marinated in ginger, garlic, and turmeric, gently layered with fragrant spiced rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Fish Fillets",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Mint & Coriander",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      },
      {
        "name": "Biryani Masala",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Fish with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Fish in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "fish-tikka-biryani",
    "name": "Fish Tikka Biryani",
    "subCategory": "biryani",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Tandoori-spiced grilled fish tikka combined with saffron-infused long grain basmati rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Fish Tikka",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Fish Tikka with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Fish Tikka in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "crab-biryani",
    "name": "Crab Biryani",
    "subCategory": "biryani",
    "prepTime": 40,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/biryani.jpg",
    "description": "Coastal specialty featuring sweet, tender crab meat cooked in rich aromatic coastal masala and basmati rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Fresh Crab",
        "amount": "as needed"
      },
      {
        "name": "Coconut Milk",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Tomato",
        "amount": "as needed"
      },
      {
        "name": "Spices",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Crab with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Crab in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "vegetable-dum-biryani",
    "name": "Vegetable Dum Biryani",
    "subCategory": "biryani",
    "prepTime": 35,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/biryani.jpg",
    "description": "Colorful medley of cauliflower, carrots, beans, and potatoes cooked with mint, fried onions, and saffron basmati rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Carrots & Beans",
        "amount": "as needed"
      },
      {
        "name": "Cauliflower",
        "amount": "as needed"
      },
      {
        "name": "Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Fried Onions",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Cut carrots, French beans, cauliflower florets, and potatoes into even bite-sized pieces.",
      "Marinate the vegetables in thick curd, ginger-garlic paste, biryani masala, red chilli powder, mint, coriander, and fried onions for 30 minutes.",
      "Cook vegetables in a wide pot with 2 tbsp ghee for 5-6 minutes until half-cooked.",
      "Parboil soaked basmati rice with whole spices in salted water until 70% done; drain.",
      "Layer the aromatic rice over the vegetable masala, drizzle saffron milk and pure ghee, seal with foil, and dum cook on low heat for 20 minutes."
    ]
  },
  {
    "id": "paneer-biryani",
    "name": "Paneer Biryani",
    "subCategory": "biryani",
    "prepTime": 30,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/biryani.jpg",
    "description": "Marinated succulent cubes of paneer layered with fragrant long-grain basmati rice, fried onions, and mint.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Fresh Paneer",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Fried Onions",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Biryani Masala",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Cut fresh paneer into 1-inch cubes. Marinate with curd, biryani masala, ginger-garlic paste, kasuri methi, and salt for 20 minutes.",
      "Lightly pan-sear the paneer cubes in ghee for 2 minutes until aromatic (do not overcook).",
      "Prepare a spiced onion-tomato gravy with mint and coriander in the pot, then fold in the marinated paneer.",
      "Layer 75% cooked basmati rice over the paneer masala, sprinkle fried onions and ghee.",
      "Cook on low dum for 12 minutes until the rice is fragrant and paneer remains pillow-soft."
    ]
  },
  {
    "id": "paneer-tikka-biryani",
    "name": "Paneer Tikka Biryani",
    "subCategory": "biryani",
    "prepTime": 35,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/biryani.jpg",
    "description": "Smoky tandoor-marinated paneer tikka cubes cooked in rich gravy and layered with aromatic basmati rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Paneer Tikka",
        "amount": "as needed"
      },
      {
        "name": "Capsicum & Onion",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Saffron Milk",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Paneer Tikka with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Paneer Tikka in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "mushroom-biryani",
    "name": "Mushroom Biryani",
    "subCategory": "biryani",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/biryani.jpg",
    "description": "Juicy button mushrooms cooked in a spiced yogurt-mint gravy, layered with dum basmati rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Button Mushrooms",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Mint & Coriander",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Mushroom with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Mushroom in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "baby-corn-biryani",
    "name": "Baby Corn Biryani",
    "subCategory": "biryani",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/biryani.jpg",
    "description": "Crisp baby corn batons marinated in biryani spices and slow cooked with aromatic basmati rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Baby Corn",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Fried Onions",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Baby Corn with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Baby Corn in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "soya-chunks-biryani",
    "name": "Soya Chunks Biryani",
    "subCategory": "biryani",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/biryani.jpg",
    "description": "Protein-packed juicy soya chunks marinated in spiced yogurt and layered with aromatic basmati rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Soya Chunks",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Tomato",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Soya Chunks with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Soya Chunks in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "jackfruit-biryani-kathal-biryani",
    "name": "Jackfruit Biryani (Kathal Biryani)",
    "subCategory": "biryani",
    "prepTime": 40,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/biryani.jpg",
    "description": "Meaty, tender raw jackfruit chunks marinated and cooked to tender perfection in rich Awadhi biryani style.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Raw Jackfruit (Kathal)",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Fried Onions",
        "amount": "as needed"
      },
      {
        "name": "Saffron",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Jackfruit  (Kathal ) with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Jackfruit  (Kathal ) in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "corn-biryani",
    "name": "Corn Biryani",
    "subCategory": "biryani",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/biryani.jpg",
    "description": "Sweet corn kernels and bell peppers simmered in fragrant herbs and layered with saffron rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Sweet Corn",
        "amount": "as needed"
      },
      {
        "name": "Capsicum",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Corn with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Corn in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "palak-biryani",
    "name": "Palak Biryani",
    "subCategory": "biryani",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/biryani.jpg",
    "description": "Healthy, vibrant spinach puree cooked with basmati rice, paneer cubes, and aromatic whole spices.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Fresh Spinach (Palak)",
        "amount": "as needed"
      },
      {
        "name": "Paneer",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      },
      {
        "name": "Spices",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate the Palak with thick curd, ginger-garlic paste, mint, and freshly ground biryani spices for 45 minutes.",
      "Parboil premium long-grain basmati rice with whole spices in boiling salted water until 70% done; drain carefully.",
      "Cook the marinated Palak in a heavy pot with pure cow ghee until tender and aromatic.",
      "Layer the fragrant basmati rice over the masala, drizzle saffron milk, ghee, and golden fried onions.",
      "Seal with airtight lid and cook on gentle dum heat for 15-20 minutes to infuse the aromas."
    ]
  },
  {
    "id": "kaju-biryani-cashew-biryani",
    "name": "Kaju Biryani (Cashew Biryani)",
    "subCategory": "biryani",
    "prepTime": 30,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/biryani.jpg",
    "description": "Rich, royal Andhra restaurant specialty loaded with golden roasted cashews, fried onions, and ghee basmati rice.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Whole Cashews",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Mint & Coriander",
        "amount": "as needed"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "as needed"
      },
      {
        "name": "Biryani Masala",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat 3 tbsp pure cow ghee in a heavy pot. Fry 1 cup of whole cashews on low heat until rich golden and crunchy; set half aside for garnish.",
      "In the remaining ghee, saut\u00e9 shahi jeera, whole garam masala, and sliced onions until deep golden brown.",
      "Add ginger-garlic paste, green chillies, tomatoes, curd, and biryani masala; cook until oil releases.",
      "Add the roasted cashews and fold in parboiled fragrant basmati rice.",
      "Drizzle saffron milk, cover with airtight lid, and cook on low dum for 15 minutes. Garnish with remaining crisp cashews."
    ]
  },
  {
    "id": "veg-pulao",
    "name": "Veg Pulao",
    "subCategory": "pulao",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pulao.jpg",
    "description": "Fragrant, mild one-pot basmati rice cooked with mixed vegetables, whole spices, and a dash of ghee.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Carrot & Beans",
        "amount": "as needed"
      },
      {
        "name": "Green Peas",
        "amount": "as needed"
      },
      {
        "name": "Whole Garam Masala",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Soak long-grain basmati rice for 20 minutes, then drain.",
      "Heat 2 tbsp ghee in a pressure cooker or heavy pot. Add cumin seeds, bay leaf, cinnamon, cardamom, and cloves.",
      "Add sliced onions, slit green chillies, ginger-garlic paste, and saut\u00e9 until fragrant.",
      "Add diced carrots, green peas, beans, and potatoes; saut\u00e9 for 2 minutes.",
      "Add drained basmati rice, gently mix with vegetables, pour 2 cups warm water per cup of rice, add salt, cover, and cook for 1 whistle on medium flame or 12 mins on low heat."
    ]
  },
  {
    "id": "peas-pulao-matar-pulao",
    "name": "Peas Pulao (Matar Pulao)",
    "subCategory": "pulao",
    "prepTime": 18,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pulao.jpg",
    "description": "Classic North Indian homestyle rice simmered with sweet green peas, cumin seeds, and whole cinnamon.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Sweet Green Peas",
        "amount": "as needed"
      },
      {
        "name": "Cumin Seeds",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat 2 tbsp pure cow ghee in a pot. Add 1 tbsp cumin seeds, 2 green cardamoms, and 1 black cardamom; saut\u00e9 until cumin crackles.",
      "Add thinly sliced onions and saut\u00e9 until soft and translucent (do not brown).",
      "Add 1 cup fresh or frozen sweet green peas and saut\u00e9 for 1 minute.",
      "Add soaked and drained basmati rice and gently fry in ghee for 1 minute.",
      "Pour 2 cups of boiling water, add salt, cover with lid, and cook on low flame for 12 minutes until water is absorbed and grains are fluffy."
    ]
  },
  {
    "id": "mushroom-pulao",
    "name": "Mushroom Pulao",
    "subCategory": "pulao",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pulao.jpg",
    "description": "Mild, aromatic rice tossed with sliced button mushrooms, garlic, and ground spices.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Button Mushrooms",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Garlic",
        "amount": "as needed"
      },
      {
        "name": "Whole Spices",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat pure cow ghee in a heavy pot. Crackle cumin seeds, cinnamon, cardamom, and cloves.",
      "Saut\u00e9 onions and ingredients for Mushroom Pulao until aromatic and sweet.",
      "Add soaked basmati rice, pour warm water or seasoned stock, and season with salt.",
      "Cover tightly and simmer on low heat until grains are long, fluffy, and fragrant."
    ]
  },
  {
    "id": "kaju-pulao",
    "name": "Kaju Pulao",
    "subCategory": "pulao",
    "prepTime": 22,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pulao.jpg",
    "description": "Delicately spiced festive rice generously studded with golden pan-roasted whole cashew nuts.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Whole Cashews",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Cardamom & Cloves",
        "amount": "as needed"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat pure cow ghee in a heavy pot. Crackle cumin seeds, cinnamon, cardamom, and cloves.",
      "Saut\u00e9 onions and ingredients for Kaju Pulao until aromatic and sweet.",
      "Add soaked basmati rice, pour warm water or seasoned stock, and season with salt.",
      "Cover tightly and simmer on low heat until grains are long, fluffy, and fragrant."
    ]
  },
  {
    "id": "paneer-pulao",
    "name": "Paneer Pulao",
    "subCategory": "pulao",
    "prepTime": 22,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pulao.jpg",
    "description": "Light, fluffy basmati rice cooked with lightly fried paneer cubes, green peas, and whole spices.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Paneer",
        "amount": "as needed"
      },
      {
        "name": "Green Peas",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Whole Spices",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat pure cow ghee in a heavy pot. Crackle cumin seeds, cinnamon, cardamom, and cloves.",
      "Saut\u00e9 onions and ingredients for Paneer Pulao until aromatic and sweet.",
      "Add soaked basmati rice, pour warm water or seasoned stock, and season with salt.",
      "Cover tightly and simmer on low heat until grains are long, fluffy, and fragrant."
    ]
  },
  {
    "id": "kashmiri-pulao",
    "name": "Kashmiri Pulao",
    "subCategory": "pulao",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pulao.jpg",
    "description": "Exotic, mildly sweet royal rice infused with saffron, garnished with pomegranate, apple, walnuts, and fried onions.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Saffron Milk",
        "amount": "as needed"
      },
      {
        "name": "Apples & Pomegranate",
        "amount": "as needed"
      },
      {
        "name": "Walnuts & Almonds",
        "amount": "as needed"
      },
      {
        "name": "Fried Onions",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Infuse a generous pinch of Kashmiri saffron strands in 3 tbsp warm milk.",
      "Heat 3 tbsp ghee; fry whole almonds, cashews, and walnuts until golden; remove and set aside.",
      "In the same ghee, saut\u00e9 whole spices (cinnamon, cloves, fennel seeds) and basmati rice.",
      "Pour water, saffron milk, and salt; cook covered until rice is fragrant, fluffy, and golden yellow.",
      "Gently fluff the rice, fold in the roasted dry fruits, and garnish with fresh pomegranate seeds and thin apple slices."
    ]
  },
  {
    "id": "tawa-pulao",
    "name": "Tawa Pulao",
    "subCategory": "pulao",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pulao.jpg",
    "description": "Mumbai street food specialty: fluffy rice tossed on a huge iron tawa with pav bhaji masala, butter, and crunchy capsicum.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Pav Bhaji Masala",
        "amount": "as needed"
      },
      {
        "name": "Capsicum",
        "amount": "as needed"
      },
      {
        "name": "Tomato",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      },
      {
        "name": "Lemon",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat 2 tbsp butter on a wide tawa or flat pan. Saut\u00e9 cumin seeds, finely chopped onions, and ginger-garlic paste.",
      "Add chopped tomatoes and cook until soft and mushy.",
      "Add diced capsicum, boiled green peas, 1.5 tbsp pav bhaji masala, red chilli powder, and salt; cook for 2 minutes.",
      "Tip in cold leftover cooked rice and 1 extra tbsp butter.",
      "Toss vigorously on high flame with a spatula until the rice turns rich spicy orange-red. Squeeze fresh lemon juice on top."
    ]
  },
  {
    "id": "chicken-pulao",
    "name": "Chicken Pulao",
    "subCategory": "pulao",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/pulao.jpg",
    "description": "Homestyle chicken and basmati rice cooked together in an aromatic spiced stock with green chillies and mint.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Whole Spices",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat pure cow ghee in a heavy pot. Crackle cumin seeds, cinnamon, cardamom, and cloves.",
      "Saut\u00e9 onions and ingredients for Chicken Pulao until aromatic and sweet.",
      "Add soaked basmati rice, pour warm water or seasoned stock, and season with salt.",
      "Cover tightly and simmer on low heat until grains are long, fluffy, and fragrant."
    ]
  },
  {
    "id": "mutton-pulao-yakhni-pulao",
    "name": "Mutton Pulao (Yakhni Pulao)",
    "subCategory": "pulao",
    "prepTime": 45,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/pulao.jpg",
    "description": "Awadhi specialty: basmati rice cooked in rich, slow-simmered aromatic mutton bone broth (yakhni).",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Mutton",
        "amount": "as needed"
      },
      {
        "name": "Yakhni Stock",
        "amount": "as needed"
      },
      {
        "name": "Fennel & Coriander Seeds",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat pure cow ghee in a heavy pot. Crackle cumin seeds, cinnamon, cardamom, and cloves.",
      "Saut\u00e9 onions and ingredients for Mutton Pulao (Yakhni Pulao) until aromatic and sweet.",
      "Add soaked basmati rice, pour warm water or seasoned stock, and season with salt.",
      "Cover tightly and simmer on low heat until grains are long, fluffy, and fragrant."
    ]
  },
  {
    "id": "egg-pulao",
    "name": "Egg Pulao",
    "subCategory": "pulao",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/pulao.jpg",
    "description": "Fluffy basmati rice tossed with spiced boiled eggs, caramelized onions, and fresh mint leaves.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "as needed"
      },
      {
        "name": "Eggs",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat pure cow ghee in a heavy pot. Crackle cumin seeds, cinnamon, cardamom, and cloves.",
      "Saut\u00e9 onions and ingredients for Egg Pulao until aromatic and sweet.",
      "Add soaked basmati rice, pour warm water or seasoned stock, and season with salt.",
      "Cover tightly and simmer on low heat until grains are long, fluffy, and fragrant."
    ]
  },
  {
    "id": "dal-khichdi",
    "name": "Dal Khichdi",
    "subCategory": "pulao",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pulao.jpg",
    "description": "Comfort in a bowl: wholesome yellow moong lentils and rice simmered to creamy perfection, topped with garlic ghee tadka.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Yellow Moong Dal",
        "amount": "as needed"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "as needed"
      },
      {
        "name": "Garlic",
        "amount": "as needed"
      },
      {
        "name": "Cumin & Mustard",
        "amount": "as needed"
      },
      {
        "name": "Turmeric",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Wash 0.5 cup rice and 0.5 cup yellow moong dal together; pressure cook with 3.5 cups water, turmeric, and salt for 4 whistles until creamy.",
      "For the royal tadka: heat 2 tbsp pure cow ghee in a small pan.",
      "Add 1 tbsp cumin seeds, 1 tsp mustard seeds, 6 cloves of finely chopped garlic, 2 slit green chillies, and curry leaves.",
      "Fry on medium flame until garlic turns golden brown and deeply fragrant.",
      "Pour the sizzling garlic ghee tadka directly over the creamy hot khichdi, stir gently, and serve with papad and pickle."
    ]
  },
  {
    "id": "chicken-khichdi",
    "name": "Chicken Khichdi",
    "subCategory": "pulao",
    "prepTime": 30,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/pulao.jpg",
    "description": "Nourishing, savory rice and lentil porridge slow-cooked with tender shredded chicken, ginger, and black pepper.",
    "ingredients": [
      {
        "name": "Rice",
        "amount": "as needed"
      },
      {
        "name": "Moong Dal",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Ginger",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat pure cow ghee in a heavy pot. Crackle cumin seeds, cinnamon, cardamom, and cloves.",
      "Saut\u00e9 onions and ingredients for Chicken Khichdi until aromatic and sweet.",
      "Add soaked basmati rice, pour warm water or seasoned stock, and season with salt.",
      "Cover tightly and simmer on low heat until grains are long, fluffy, and fragrant."
    ]
  },
  {
    "id": "vegetable-khichdi",
    "name": "Vegetable Khichdi",
    "subCategory": "pulao",
    "prepTime": 22,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pulao.jpg",
    "description": "Wholesome, warming comfort food made with rice, lentils, carrots, green peas, and a rich desi ghee tempering.",
    "ingredients": [
      {
        "name": "Rice",
        "amount": "as needed"
      },
      {
        "name": "Moong Dal",
        "amount": "as needed"
      },
      {
        "name": "Carrots & Peas",
        "amount": "as needed"
      },
      {
        "name": "Cumin Seeds",
        "amount": "as needed"
      },
      {
        "name": "Turmeric",
        "amount": "as needed"
      },
      {
        "name": "Ghee",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat pure cow ghee in a heavy pot. Crackle cumin seeds, cinnamon, cardamom, and cloves.",
      "Saut\u00e9 onions and ingredients for Vegetable Khichdi until aromatic and sweet.",
      "Add soaked basmati rice, pour warm water or seasoned stock, and season with salt.",
      "Cover tightly and simmer on low heat until grains are long, fluffy, and fragrant."
    ]
  },
  {
    "id": "vangi-bath",
    "name": "Vangi Bath",
    "subCategory": "pulao",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pulao.jpg",
    "description": "Karnataka traditional spiced brinjal rice flavored with aromatic roasted coconut-lentil vangi bath powder.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Brinjals (Eggplant)",
        "amount": "as needed"
      },
      {
        "name": "Vangi Bath Powder",
        "amount": "as needed"
      },
      {
        "name": "Peanuts",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat pure cow ghee in a heavy pot. Crackle cumin seeds, cinnamon, cardamom, and cloves.",
      "Saut\u00e9 onions and ingredients for Vangi Bath until aromatic and sweet.",
      "Add soaked basmati rice, pour warm water or seasoned stock, and season with salt.",
      "Cover tightly and simmer on low heat until grains are long, fluffy, and fragrant."
    ]
  },
  {
    "id": "tomato-bath",
    "name": "Tomato Bath",
    "subCategory": "pulao",
    "prepTime": 18,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pulao.jpg",
    "description": "South Indian style spiced tomato and rice preparation cooked with onions, mustard seeds, and mint.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Tomatoes",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Mint",
        "amount": "as needed"
      },
      {
        "name": "Mustard Seeds",
        "amount": "as needed"
      },
      {
        "name": "Curry Leaves",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat pure cow ghee in a heavy pot. Crackle cumin seeds, cinnamon, cardamom, and cloves.",
      "Saut\u00e9 onions and ingredients for Tomato Bath until aromatic and sweet.",
      "Add soaked basmati rice, pour warm water or seasoned stock, and season with salt.",
      "Cover tightly and simmer on low heat until grains are long, fluffy, and fragrant."
    ]
  },
  {
    "id": "ghee-karam-rice",
    "name": "Ghee Karam Rice",
    "subCategory": "pulao",
    "prepTime": 10,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pulao.jpg",
    "description": "Homestyle Andhra comfort: steaming hot rice mixed with pure cow ghee and authentic spicy garlic karam podi.",
    "ingredients": [
      {
        "name": "Leftover Cooked Rice",
        "amount": "as needed"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "as needed"
      },
      {
        "name": "Garlic Karam Podi",
        "amount": "as needed"
      },
      {
        "name": "Salt",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Take piping hot, freshly cooked steamed rice in a traditional bowl.",
      "Make a small depression in the center and add 2-3 tablespoons of authentic Andhra spicy garlic karam podi (gunpowder).",
      "Heat 3 tablespoons of pure desi cow ghee until smoking hot, and pour directly over the podi.",
      "Watch the ghee sizzle and release the intoxicating roasted aroma of garlic and spices.",
      "Mix with your fingers while hot and savor the comforting homestyle Andhra flavors."
    ]
  }
];
