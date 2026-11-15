// Section 4: Curries, Gravies & Main Course (Chicken, Mutton, Paneer, Veg, Dal, Egg & Seafood)
// Every single recipe features complete, authentic, distinct culinary instructions and ingredients
const CURRY_RECIPES = [
  {
    "id": "butter-chicken",
    "name": "Butter Chicken (Murgh Makhani)",
    "subCategory": "chicken-curry",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/butter-chicken.jpg",
    "description": "Succulent grilled chicken morsels slow-simmered in a rich, buttery, velvety tomato and cashew makhani gravy.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "400g (boneless thighs, cubed)"
      },
      {
        "name": "Tomatoes",
        "amount": "500g (ripe red, pureed)"
      },
      {
        "name": "Fresh Cream",
        "amount": "3 tbsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp + 2 tbsp butter"
      },
      {
        "name": "Cashews",
        "amount": "12-15 (soaked and ground)"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tbsp (toasted and crushed)"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Garlic",
        "amount": "1 tbsp paste"
      }
    ],
    "steps": [
      "Marinate chicken cubes with 2 tbsp yogurt, Kashmiri red chilli powder, ginger-garlic paste, and salt for at least 30 minutes.",
      "Sear marinated chicken in a hot pan with 1 tbsp butter on high heat for 6-8 minutes until charred around the edges; set aside.",
      "In a deep kadai, melt 2 tbsp butter and ghee. Add green cardamoms, cloves, and ginger-garlic paste; sauté for 1 minute.",
      "Add fresh tomato purée, Kashmiri chilli powder, and cashew paste. Simmer on medium-low flame for 15 minutes until gravy reduces and butter separates.",
      "Strain gravy for a silky restaurant finish (optional), then return to kadai and add the grilled chicken pieces.",
      "Stir in crushed kasuri methi, 1 tsp honey/sugar to balance acidity, and fresh cream; simmer on low flame for 5 minutes and serve hot."
    ]
  },
  {
    "id": "chicken-tikka-masala",
    "name": "Chicken Tikka Masala",
    "subCategory": "chicken-curry",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chicken-tikka-masala.jpg",
    "description": "Char-grilled smoky chicken tikka tossed in a vibrant spiced onion-tomato masala with crunchy bell peppers.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "400g (boneless tikka cubes)"
      },
      {
        "name": "Onion",
        "amount": "2 medium (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "3 medium (pureed)"
      },
      {
        "name": "Capsicum",
        "amount": "1 medium (cubed)"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Garlic",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Garam Masala",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Marinate chicken with hung curd, tandoori masala, Kashmiri chilli, ginger-garlic paste, and mustard oil for 30 minutes.",
      "Pan-sear or grill skewered chicken cubes on high heat for 7 minutes until smoky char marks develop on all sides.",
      "In a heavy kadai, heat ghee and oil; sauté finely chopped onions until rich golden brown.",
      "Add ginger-garlic paste, green chillies, coriander powder, cumin powder, and tomato purée; cook (bhunno) until oil releases.",
      "Toss in diced crunchy bell peppers and the grilled chicken tikka; stir-fry on high flame for 3 minutes.",
      "Pour 1/3 cup warm water, cover and simmer for 5 minutes. Finish with crushed kasuri methi and fresh coriander."
    ]
  },
  {
    "id": "chicken-chettinad",
    "name": "Chicken Chettinad",
    "subCategory": "chicken-curry",
    "prepTime": 40,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chicken-chettinad.jpg",
    "description": "Fiery Tamil country chicken curry slow-cooked with freshly stone-ground black pepper, roasted spices, and coconut.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "500g (bone-in pieces)"
      },
      {
        "name": "Onion",
        "amount": "15 shallots (sambar onions, halved)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (chopped)"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs fresh"
      },
      {
        "name": "Black Pepper",
        "amount": "1.5 tbsp (whole)"
      },
      {
        "name": "Gingelly Oil",
        "amount": "3 tbsp (sesame oil)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "3 tbsp"
      },
      {
        "name": "Fennel Seeds",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Dry roast black peppercorns, coriander seeds, fennel seeds, cumin, dried red chillies, cinnamon, star anise, kalpasi (stone flower), and coconut until fragrant; grind into a smooth Chettinad paste with a little water.",
      "Heat gingelly oil in a heavy clay pot or kadai; splutter mustard seeds, fennel seeds, and fresh curry leaves.",
      "Add shallots and crushed garlic; sauté until translucent and aromatic.",
      "Add bone-in chicken pieces, turmeric powder, and salt; sear on medium-high flame for 5 minutes until chicken turns white.",
      "Pour in the freshly ground Chettinad masala paste and chopped tomatoes; sauté for 4 minutes until raw aroma disappears.",
      "Add 1 cup hot water, cover tightly with a lid, and slow-simmer for 22 minutes until chicken is tender and dark peppery oil floats on top."
    ]
  },
  {
    "id": "andhra-chicken-curry",
    "name": "Andhra Chicken Curry (Kodi Kura)",
    "subCategory": "chicken-curry",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/andhra-chicken-curry.jpg",
    "description": "Spicy homestyle Andhra country chicken cooked with Guntur red chillies, poppy seeds, and fragrant curry leaves.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "500g (bone-in curry cut)"
      },
      {
        "name": "Onion",
        "amount": "2 large (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (pureed)"
      },
      {
        "name": "Green Chillies",
        "amount": "4 slit"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      },
      {
        "name": "Poppy Seeds (Gasagasalu)",
        "amount": "1 tbsp ground with coconut"
      },
      {
        "name": "Guntur Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Ginger",
        "amount": "1.5 tbsp paste"
      }
    ],
    "steps": [
      "Marinate chicken with turmeric, half of the ginger-garlic paste, lemon juice, and salt for 20 minutes.",
      "Heat groundnut oil in a deep kadai. Add cinnamon, cloves, cardamoms, slit green chillies, and curry leaves; sauté until crackling.",
      "Add finely chopped onions and sauté patiently until deep golden brown.",
      "Add remaining ginger-garlic paste, Guntur red chilli powder, and coriander powder; fry for 1 minute on low flame.",
      "Add chicken and fry on high heat (vepudu style) for 6 minutes until juices are locked in.",
      "Stir in the poppy seed-coconut paste and tomato purée; add 1 cup water, cover and cook on medium flame for 20 minutes until oil separates."
    ]
  },
  {
    "id": "kadai-chicken",
    "name": "Kadai Chicken",
    "subCategory": "chicken-curry",
    "prepTime": 30,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/kadai-chicken.jpg",
    "description": "Tender chicken cooked in an iron wok with freshly pounded coriander seeds, dry red chillies, and crisp bell peppers.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "450g (boneless or bone-in)"
      },
      {
        "name": "Capsicum",
        "amount": "1 large green (cubed)"
      },
      {
        "name": "Onion",
        "amount": "1 large (cubed into petals) + 1 chopped"
      },
      {
        "name": "Tomatoes",
        "amount": "3 ripe (finely chopped)"
      },
      {
        "name": "Coriander Seeds",
        "amount": "1.5 tbsp (freshly cracked)"
      },
      {
        "name": "Dry Red Chillies",
        "amount": "4 (crushed)"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp julienned"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Dry roast whole coriander seeds and dry red chillies; crush coarsely using a mortar and pestle into fresh Kadai Masala.",
      "Heat oil in an iron kadai; toss capsicum cubes and onion petals on high heat for 2 minutes until blistered yet crisp; set aside.",
      "In the same kadai, sauté chopped onions and ginger-garlic paste until golden.",
      "Add chopped tomatoes, half of the freshly crushed Kadai Masala, turmeric, and salt; mash and cook until pulpy.",
      "Add chicken pieces and bhunno on medium-high heat for 8 minutes until chicken is seared and juices run clear.",
      "Cover and simmer for 12 minutes. Stir in reserved crunchy capsicum, onion petals, ginger juliennes, and kasuri methi; toss for 2 minutes."
    ]
  },
  {
    "id": "kolhapuri-chicken",
    "name": "Kolhapuri Chicken",
    "subCategory": "chicken-curry",
    "prepTime": 40,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/kolhapuri-chicken.jpg",
    "description": "Fiery Maharashtrian curry made with signature roasted dry coconut, sesame seeds, and Lavangi red chilli masala.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "500g (bone-in)"
      },
      {
        "name": "Dry Coconut (Copra)",
        "amount": "3 tbsp (grated & roasted)"
      },
      {
        "name": "White Sesame Seeds",
        "amount": "1 tbsp"
      },
      {
        "name": "Onion",
        "amount": "2 large (sliced)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (chopped)"
      },
      {
        "name": "Kolhapuri Masala",
        "amount": "2 tbsp"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Curry Leaves",
        "amount": "1 sprig"
      }
    ],
    "steps": [
      "Roast dry coconut, sesame seeds, poppy seeds, cloves, black pepper, and cinnamon on low flame until nutty; blend into a thick paste with water.",
      "Heat oil in a heavy kadai; add bay leaves and curry leaves, followed by sliced onions; sauté until caramelized brown.",
      "Add ginger-garlic paste, chicken pieces, and turmeric; sauté on high flame for 5 minutes.",
      "Add Kolhapuri masala and chopped tomatoes; cook until tomatoes break down completely.",
      "Stir in the roasted coconut-sesame paste and 1.5 cups hot water; bring to a vigorous boil.",
      "Cover and cook on medium-low flame for 22 minutes until chicken is tender and a fiery red rassa with oil layer forms on top."
    ]
  },
  {
    "id": "chicken-korma",
    "name": "Shahi Chicken Korma",
    "subCategory": "chicken-curry",
    "prepTime": 40,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chicken-korma.jpg",
    "description": "Royal Mughlai preparation with chicken simmered in fragrant saffron-infused yogurt, almond paste, and caramelized onions.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "500g"
      },
      {
        "name": "Onion",
        "amount": "2 large (deep fried into crispy birista)"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/2 cup (whisked)"
      },
      {
        "name": "Almonds",
        "amount": "10 (blanched & ground to paste)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp"
      },
      {
        "name": "Kewra Water",
        "amount": "1 tsp"
      },
      {
        "name": "Green Cardamoms",
        "amount": "4 pods"
      },
      {
        "name": "Mace (Javitri)",
        "amount": "1 blade"
      }
    ],
    "steps": [
      "Fry thinly sliced onions in ghee until deep golden brown; drain and crush into crispy fried onion (birista).",
      "In a bowl, whisk fresh curd with almond paste, coriander powder, Kashmiri chilli powder, and ginger-garlic paste.",
      "Heat ghee in a handi; bloom green cardamoms, cloves, cinnamon, and mace until fragrant.",
      "Add chicken pieces and sear in ghee for 5 minutes until meat turns opaque white.",
      "Pour the whisked curd-nut mixture over the chicken, stirring continuously on low flame to prevent curd from splitting.",
      "Add crushed birista and 1/2 cup warm water; seal handi with lid and slow-cook (dum) on low flame for 20 minutes. Finish with kewra water."
    ]
  },
  {
    "id": "dhaba-chicken",
    "name": "Dhaba Style Chicken Curry",
    "subCategory": "chicken-curry",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/dhaba-chicken.jpg",
    "description": "Rustic North Indian highway dhaba curry with bone-in chicken cooked in smoking mustard oil with coarse onion-garlic masala.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "500g (bone-in rustic cut)"
      },
      {
        "name": "Onion",
        "amount": "3 large (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "3 ripe (finely chopped)"
      },
      {
        "name": "Mustard Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Garlic",
        "amount": "10 cloves (crushed)"
      },
      {
        "name": "Ginger",
        "amount": "2 tbsp (coarsely pounded)"
      },
      {
        "name": "Dry Red Chillies",
        "amount": "3 whole"
      },
      {
        "name": "Garam Masala",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Heat mustard oil in a heavy kadai until it smokes, then turn off heat for 1 minute to cool slightly.",
      "Turn heat to medium; add cumin seeds, whole dried red chillies, and crushed garlic cloves; sauté for 30 seconds.",
      "Add finely chopped onions and sauté on medium-high flame for 10-12 minutes until dark caramelized brown.",
      "Add pounded ginger, green chillies, chicken pieces, turmeric, and salt; bhunno vigorously for 8 minutes.",
      "Add chopped tomatoes, coriander powder, cumin powder, and red chilli powder; cook until thick masala coats the meat.",
      "Add 1.5 cups boiling water, cover and cook on high-medium heat for 18 minutes until chicken is succulent and dhaba gravy is thick."
    ]
  },
  {
    "id": "malabar-chicken",
    "name": "Malabar Chicken Curry",
    "subCategory": "chicken-curry",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/malabar-chicken.jpg",
    "description": "Authentic Kerala coastal chicken curry simmered in fresh pressed coconut milk with fennel seeds and curry leaves.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "500g"
      },
      {
        "name": "Coconut Milk",
        "amount": "1 cup thin + 1/2 cup thick"
      },
      {
        "name": "Onion",
        "amount": "2 medium (thinly sliced)"
      },
      {
        "name": "Tomatoes",
        "amount": "1 large (sliced)"
      },
      {
        "name": "Coconut Oil",
        "amount": "2 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      },
      {
        "name": "Fennel Powder",
        "amount": "1 tbsp"
      },
      {
        "name": "Green Chillies",
        "amount": "3 slit"
      }
    ],
    "steps": [
      "Heat coconut oil in an earthenware pot (manchatti) or heavy pan. Splutter mustard seeds, curry leaves, and green chillies.",
      "Add sliced onions, crushed ginger, and garlic; sauté until soft and light golden.",
      "Add sliced tomatoes, turmeric powder, coriander powder, Kashmiri chilli powder, and fennel powder; sauté for 3 minutes.",
      "Add chicken pieces and salt; toss well with the onion-spice base for 4 minutes.",
      "Pour in 1 cup of thin coconut milk, cover and cook on medium flame for 18 minutes until chicken is tender.",
      "Lower heat completely; stir in 1/2 cup thick coconut milk. Warm through for 2 minutes without letting it boil; finish with fresh curry leaves."
    ]
  },
  {
    "id": "chicken-do-pyaza",
    "name": "Chicken Do Pyaza",
    "subCategory": "chicken-curry",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chicken-do-pyaza.jpg",
    "description": "Classic Awadhi curry cooked with double onions — melted into the gravy and flash-sautéed as crunchy petals.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "450g"
      },
      {
        "name": "Onion",
        "amount": "2 finely chopped + 1 cut into large petals"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (pureed)"
      },
      {
        "name": "Fresh Curd",
        "amount": "3 tbsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Kashmiri Chilli",
        "amount": "1 tbsp"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "In a deep kadai, heat ghee and whole spices (bay leaf, cloves, cardamoms, cinnamon).",
      "Add finely chopped onions and cook on medium flame until golden brown.",
      "Add ginger-garlic paste, chicken pieces, and sear for 5 minutes. Stir in curd, tomato purée, and dry spice powders.",
      "Cover and simmer on low-medium flame for 16 minutes until chicken is cooked through.",
      "In a separate small pan, heat 1 tsp ghee; toss the large onion petals and slit green chillies on high flame for 2 minutes until translucent.",
      "Tip the crunchy onion petals into the simmering chicken gravy, sprinkle crushed kasuri methi, and simmer for 2 minutes before serving."
    ]
  },
  {
    "id": "methi-chicken",
    "name": "Methi Chicken (Murgh Methi)",
    "subCategory": "chicken-curry",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/methi-chicken.jpg",
    "description": "Aromatic curry pairing juicy chicken with the pleasant earthy bitterness of fresh tender fenugreek leaves.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "500g"
      },
      {
        "name": "Fresh Methi Leaves",
        "amount": "2 cups (plucked and washed)"
      },
      {
        "name": "Onion",
        "amount": "2 medium (finely chopped)"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/3 cup"
      },
      {
        "name": "Tomatoes",
        "amount": "2 chopped"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Garam Masala",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Sprinkle a pinch of salt over chopped fresh methi leaves, let rest for 10 minutes, and squeeze out excess bitter water.",
      "Heat ghee in a pan; sauté whole cumin seeds, bay leaf, and chopped onions until translucent golden.",
      "Add ginger-garlic paste and chicken pieces; sauté on high flame for 5 minutes until sealed.",
      "Add the squeezed methi leaves; sauté for 3 minutes until leaves wilt and release their distinct herbal aroma.",
      "Add chopped tomatoes, whisked curd, coriander powder, turmeric, and chilli powder; stir well to emulsify.",
      "Cover and simmer on low-medium heat for 18 minutes until chicken is fork-tender and aromatic green gravy thickens."
    ]
  },
  {
    "id": "chicken-sukka",
    "name": "Mangalore Chicken Sukka (Kori Sukka)",
    "subCategory": "chicken-curry",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chicken-sukka.jpg",
    "description": "Coastal Mangalorean semi-dry chicken roast coated in toasted fresh grated coconut, Byadgi chillies, and tamarind.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "500g (bone-in small pieces)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1 cup"
      },
      {
        "name": "Byadgi Chillies",
        "amount": "6"
      },
      {
        "name": "Coriander Seeds",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Cumin Seeds",
        "amount": "1 tsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "1 tbsp"
      },
      {
        "name": "Coconut Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Dry roast Byadgi chillies, coriander seeds, cumin, black pepper, and fenugreek seeds until fragrant; grind finely with tamarind and garlic.",
      "In a dry pan, lightly toast grated coconut with a pinch of turmeric and curry leaves until warm and slightly nutty; keep aside.",
      "In a kadai, heat coconut oil; add chopped onions and curry leaves, then add chicken pieces with turmeric and salt.",
      "Cover chicken and cook in its own juices for 12 minutes on medium flame until 80% tender.",
      "Add the ground spice paste; cook on open flame for 5 minutes until gravy reduces and coats chicken.",
      "Add the toasted grated coconut, toss vigorously on high flame for 4 minutes until dry, fragrant, and coconut clings to every piece."
    ]
  },
  {
    "id": "gongura-chicken",
    "name": "Andhra Gongura Chicken",
    "subCategory": "chicken-curry",
    "prepTime": 40,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/gongura-chicken.jpg",
    "description": "Tangy, bold, and fiery Andhra specialty made with red-stem sorrel (Gongura) leaves, country spices, and green chillies.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "500g (bone-in)"
      },
      {
        "name": "Gongura Leaves",
        "amount": "3 packed cups (sorrel leaves)"
      },
      {
        "name": "Onion",
        "amount": "2 large (chopped)"
      },
      {
        "name": "Green Chillies",
        "amount": "6 slit"
      },
      {
        "name": "Groundnut Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Ginger",
        "amount": "1.5 tbsp paste"
      },
      {
        "name": "Guntur Chilli Powder",
        "amount": "1 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      }
    ],
    "steps": [
      "Heat 1 tsp oil in a pan, add washed Gongura leaves and 2 slit green chillies; sauté on low heat for 4 minutes until leaves collapse into a soft puree. Coarsely mash or grind; set aside.",
      "In a deep kadai, heat remaining oil; crackle cloves, cinnamon, cardamoms, and abundant curry leaves.",
      "Add chopped onions, green chillies, and ginger-garlic paste; sauté until rich golden brown.",
      "Add chicken pieces, turmeric, and Guntur red chilli powder; fry on high flame for 6 minutes.",
      "Add 1 cup water, cover and cook on medium flame for 15 minutes until chicken is almost done.",
      "Stir in the cooked tangy Gongura puree, adjust salt, and simmer uncovered for 8 minutes until chicken absorbs the sour-spicy flavors and oil shines on top."
    ]
  },
  {
    "id": "saag-chicken",
    "name": "Saag Chicken (Palak Chicken)",
    "subCategory": "chicken-curry",
    "prepTime": 35,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/saag-chicken.jpg",
    "description": "Wholesome Punjabi dish of tender chicken braised in a velvety, emerald-green pureed spinach and mustard greens gravy.",
    "ingredients": [
      {
        "name": "Chicken",
        "amount": "450g"
      },
      {
        "name": "Fresh Spinach (Palak)",
        "amount": "1 big bunch (blanched & pureed)"
      },
      {
        "name": "Onion",
        "amount": "2 medium (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (pureed)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Ginger",
        "amount": "1.5 tbsp julienned & paste"
      },
      {
        "name": "Fresh Cream",
        "amount": "2 tbsp"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Blanch washed spinach leaves in boiling salted water for 2 minutes, then immediately shock in ice water; blend into a vibrant green purée with 2 green chillies.",
      "Heat ghee in a heavy kadai; sauté cumin seeds, bay leaf, and finely chopped onions until golden.",
      "Add ginger-garlic paste and chicken pieces; sauté on high heat for 6 minutes until lightly browned.",
      "Add tomato purée, coriander powder, cumin powder, and garam masala; cook until oil begins to separate.",
      "Pour in the emerald spinach purée and 1/3 cup water; stir gently to combine.",
      "Cover and cook on low heat for 12 minutes. Finish with a swirl of fresh cream, crushed kasuri methi, and ginger juliennes."
    ]
  },
  {
    "id": "rogan-josh",
    "name": "Kashmiri Rogan Josh",
    "subCategory": "mutton-curry",
    "prepTime": 50,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/rogan-josh.jpg",
    "description": "Slow-cooked mutton shank in an aromatic Kashmiri red gravy infused with rattan jot, maval flower, and dried ginger.",
    "ingredients": [
      {
        "name": "Mutton",
        "amount": "500g (bone-in pieces / shanks)"
      },
      {
        "name": "Mustard Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/2 cup (whisked)"
      },
      {
        "name": "Kashmiri Chilli Powder",
        "amount": "2 tbsp"
      },
      {
        "name": "Dry Ginger Powder (Sonth)",
        "amount": "1 tsp"
      },
      {
        "name": "Fennel Powder (Saunf)",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Hing (Asafoetida)",
        "amount": "1/4 tsp"
      },
      {
        "name": "Black Cardamom",
        "amount": "2 pods"
      }
    ],
    "steps": [
      "Heat mustard oil to smoking point in a heavy pressure cooker or handi; let cool slightly.",
      "Bloom black cardamoms, cinnamon, cloves, green cardamoms, and hing in the warm oil.",
      "Add mutton pieces and sear on high flame for 8 minutes until browned on all sides.",
      "Dissolve Kashmiri chilli powder in 2 tbsp warm water and pour over mutton; stir well for vibrant crimson color.",
      "Whisk curd with dry ginger powder (sonth) and fennel powder (saunf); lower flame and pour into mutton, stirring constantly.",
      "Add 1.5 cups hot water, cover and slow-simmer (or pressure cook for 4 whistles, then 15 mins on low heat) until mutton melts in your mouth."
    ]
  },
  {
    "id": "laal-maas",
    "name": "Rajasthani Laal Maas",
    "subCategory": "mutton-curry",
    "prepTime": 55,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/laal-maas.jpg",
    "description": "Fiery royal Rajasthani game-meat curry cooked in pure desi ghee with soaked Mathania dry red chillies and smoked clove charcoal.",
    "ingredients": [
      {
        "name": "Mutton",
        "amount": "500g"
      },
      {
        "name": "Mathania Red Chillies",
        "amount": "10-12 (soaked and pasted)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "4 tbsp"
      },
      {
        "name": "Onion",
        "amount": "3 large (thinly sliced)"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/2 cup"
      },
      {
        "name": "Garlic",
        "amount": "2 tbsp (coarsely ground)"
      },
      {
        "name": "Kachri Powder",
        "amount": "1 tsp (tenderizer)"
      },
      {
        "name": "Clove Smoke (Dhungar)",
        "amount": "1 coal piece"
      }
    ],
    "steps": [
      "Soak stemmed Mathania dry chillies in warm water for 25 minutes, then grind to a bright red fiery paste with a little water.",
      "In a thick-bottomed copper handi, heat desi ghee; add whole spices (black cardamom, cloves, cinnamon).",
      "Add thinly sliced onions and sauté on medium flame for 15 minutes until caramelized to dark bronze.",
      "Add mutton pieces and garlic paste; sear on high flame for 8 minutes until meat juices evaporate and ghee separates.",
      "Whisk curd with Mathania chilli paste, coriander powder, and kachri powder; pour into handi and stir continuously on low flame.",
      "Add 2 cups warm water, simmer covered for 45 minutes till mutton is tender. Perform dhungar (infuse with live clove-ghee charcoal smoke) for 3 minutes before serving."
    ]
  },
  {
    "id": "mutton-korma",
    "name": "Mughlai Mutton Korma",
    "subCategory": "mutton-curry",
    "prepTime": 50,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/mutton-korma.jpg",
    "description": "Luxurious Mughlai slow-cooked mutton in a creamy, velvety gravy of browned onions, cashews, saffron, and cardamom.",
    "ingredients": [
      {
        "name": "Mutton",
        "amount": "500g (cut into curry pieces)"
      },
      {
        "name": "Onion",
        "amount": "2 large (deep fried crispy birista)"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/2 cup"
      },
      {
        "name": "Cashews & Almonds",
        "amount": "15 (ground to paste)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp"
      },
      {
        "name": "Mace & Nutmeg",
        "amount": "1/2 tsp freshly ground"
      },
      {
        "name": "Kewra Water",
        "amount": "1 tsp"
      },
      {
        "name": "Ginger",
        "amount": "1.5 tbsp paste"
      }
    ],
    "steps": [
      "Deep-fry sliced onions until crisp golden brown; crush finely into birista once cooled.",
      "Heat ghee in a handi; bloom green cardamoms, cloves, black cardamom, and mace.",
      "Add mutton pieces with ginger-garlic paste; bhunno on high heat for 7 minutes until seared.",
      "Add whisked curd, coriander powder, Kashmiri chilli powder, and cashew-almond paste on low flame; stir constantly.",
      "Add crushed birista and 1.5 cups warm water. Cover handi with a heavy lid and slow-cook (dum) on low flame for 45 minutes until meat is butter-soft.",
      "Sprinkle freshly ground mace, nutmeg, and kewra water. Let rest covered for 10 minutes for flavors to harmonize."
    ]
  },
  {
    "id": "andhra-mutton-curry",
    "name": "Andhra Mutton Curry (Mamsam Kura)",
    "subCategory": "mutton-curry",
    "prepTime": 45,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/andhra-mutton-curry.jpg",
    "description": "Spicy, robust Andhra village-style mutton curry cooked with roasted coriander, Guntur chillies, and poppy seed paste.",
    "ingredients": [
      {
        "name": "Mutton",
        "amount": "500g (bone-in)"
      },
      {
        "name": "Onion",
        "amount": "2 large (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (chopped)"
      },
      {
        "name": "Poppy Seeds & Coconut",
        "amount": "2 tbsp ground together"
      },
      {
        "name": "Guntur Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      },
      {
        "name": "Groundnut Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Ginger",
        "amount": "2 tbsp paste"
      }
    ],
    "steps": [
      "Marinate mutton with turmeric, 1 tbsp ginger-garlic paste, 1 tbsp oil, and salt for 30 minutes.",
      "Heat oil in a pressure cooker; splutter cinnamon, cloves, cardamoms, green chillies, and curry leaves.",
      "Add finely chopped onions and sauté patiently until golden brown.",
      "Add marinated mutton and fry on high heat for 8 minutes to sear the meat.",
      "Add Guntur red chilli powder, coriander powder, chopped tomatoes, and poppy seed-coconut paste; fry for 4 minutes.",
      "Add 1.5 cups hot water, pressure cook for 5-6 whistles on medium flame until mutton is succulent and spicy red gravy thickens."
    ]
  },
  {
    "id": "railway-mutton-curry",
    "name": "Colonial Railway Mutton Curry",
    "subCategory": "mutton-curry",
    "prepTime": 50,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/railway-mutton-curry.jpg",
    "description": "Historic Anglo-Indian recipe served in First Class railway dining cars, simmered with whole spices, potatoes, and tamarind.",
    "ingredients": [
      {
        "name": "Mutton",
        "amount": "500g"
      },
      {
        "name": "Potatoes",
        "amount": "2 large (halved and lightly fried)"
      },
      {
        "name": "Onion",
        "amount": "2 medium (sliced)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (chopped)"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "1 tbsp"
      },
      {
        "name": "Mustard Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Cumin & Fennel",
        "amount": "1 tsp each"
      },
      {
        "name": "Ginger",
        "amount": "1.5 tbsp paste"
      }
    ],
    "steps": [
      "Peel potatoes, halve them, prick with fork, and shallow fry in mustard oil until golden; set aside.",
      "In the remaining oil, add bay leaf, whole black pepper, cloves, and fennel seeds.",
      "Add sliced onions and ginger-garlic paste; sauté until rich amber brown.",
      "Add mutton pieces, turmeric, coriander, and red chilli powder; bhunno on high heat for 8 minutes.",
      "Add chopped tomatoes and tamarind pulp to give that signature Anglo-Indian tang.",
      "Add 2 cups hot water and the fried potato halves; cover and slow-simmer for 40 minutes until meat and potatoes are tender."
    ]
  },
  {
    "id": "champaran-mutton",
    "name": "Champaran Mutton (Ahuna Meat)",
    "subCategory": "mutton-curry",
    "prepTime": 60,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/champaran-mutton.jpg",
    "description": "Traditional Bihari clay pot delicacy slow-cooked over burning wood coals with whole garlic pods, mustard oil, and whole spices.",
    "ingredients": [
      {
        "name": "Mutton",
        "amount": "500g"
      },
      {
        "name": "Whole Garlic Pods",
        "amount": "2 whole bulbs (unpeeled)"
      },
      {
        "name": "Onion",
        "amount": "4 large (thickly sliced)"
      },
      {
        "name": "Mustard Oil",
        "amount": "4 tbsp (raw)"
      },
      {
        "name": "Whole Red Chillies",
        "amount": "4"
      },
      {
        "name": "Coriander & Cumin Seeds",
        "amount": "1 tbsp (crushed)"
      },
      {
        "name": "Whole Black Peppercorns",
        "amount": "1 tsp"
      },
      {
        "name": "Garam Masala",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "In a large bowl, mix mutton with raw mustard oil, thickly sliced onions, whole spices, crushed coriander, chilli powder, and salt.",
      "Add 2 whole clean garlic bulbs into the marinade and toss everything thoroughly.",
      "Transfer the marinated mutton into an earthenware handi (ahuna). Do not add any water.",
      "Seal the rim of the clay handi tightly with wheat flour dough and place a tight-fitting clay lid on top.",
      "Place handi over low flame (or coals); shake gently every 15 minutes to prevent sticking.",
      "Cook undisturbed for 1 hour; break dough seal at the table to release the heavenly smoky aroma."
    ]
  },
  {
    "id": "gongura-mutton",
    "name": "Andhra Gongura Mutton (Gongura Mamsam)",
    "subCategory": "mutton-curry",
    "prepTime": 50,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/gongura-mutton.jpg",
    "description": "Celebrated Andhra culinary masterpiece marrying tender mutton with the unique sour tang of red-sorrel leaves.",
    "ingredients": [
      {
        "name": "Mutton",
        "amount": "500g"
      },
      {
        "name": "Gongura Leaves",
        "amount": "3 packed cups"
      },
      {
        "name": "Onion",
        "amount": "2 large (chopped)"
      },
      {
        "name": "Green Chillies",
        "amount": "6 slit"
      },
      {
        "name": "Groundnut Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Guntur Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Coriander Powder",
        "amount": "1 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      }
    ],
    "steps": [
      "Cook Gongura leaves with 2 green chillies and 2 tbsp water in a covered pan until soft; coarsely mash.",
      "In a pressure cooker, heat oil; add whole spices, curry leaves, chopped onions, and ginger-garlic paste; sauté till golden.",
      "Add mutton pieces, turmeric, Guntur chilli powder, and salt; fry on high flame for 8 minutes.",
      "Add 1.5 cups hot water, pressure cook for 5 whistles until mutton is tender.",
      "Release pressure, open cooker, and place back on flame; stir in the mashed Gongura puree.",
      "Simmer on medium flame for 10 minutes until mutton absorbs the sour-spicy flavors and rich dark gravy thickens."
    ]
  },
  {
    "id": "mutton-sukka",
    "name": "Chettinad Mutton Sukka (Mutton Chukka)",
    "subCategory": "mutton-curry",
    "prepTime": 45,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/mutton-sukka.jpg",
    "description": "Semi-dry South Indian mutton fry bursting with crushed shallots, black pepper, curry leaves, and fennel.",
    "ingredients": [
      {
        "name": "Mutton",
        "amount": "500g (boneless small cubes)"
      },
      {
        "name": "Shallots (Sambar Onions)",
        "amount": "20 (crushed/halved)"
      },
      {
        "name": "Curry Leaves",
        "amount": "3 sprigs"
      },
      {
        "name": "Black Peppercorns",
        "amount": "1.5 tbsp (freshly crushed)"
      },
      {
        "name": "Fennel Seeds",
        "amount": "1 tbsp"
      },
      {
        "name": "Gingelly Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Garlic",
        "amount": "10 cloves (crushed)"
      }
    ],
    "steps": [
      "Pressure cook mutton pieces with turmeric, salt, half the ginger-garlic paste, and 1/2 cup water for 4 whistles until tender; reserve the broth.",
      "Heat gingelly oil in a cast-iron kadai; add fennel seeds, whole red chillies, and lots of fresh curry leaves.",
      "Add crushed shallots and garlic; sauté on medium heat until golden brown.",
      "Add cooked mutton pieces and fry on high flame for 5 minutes.",
      "Add the freshly crushed black pepper, coriander powder, and 1/4 cup reserved broth.",
      "Toss continuously on high flame until all liquid evaporates and a thick, spicy, caramelized black-pepper coating sticks to the meat."
    ]
  },
  {
    "id": "bhuna-gosht",
    "name": "Bhuna Gosht",
    "subCategory": "mutton-curry",
    "prepTime": 50,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/bhuna-gosht.jpg",
    "description": "Slow-braised North Indian mutton pan-roasted repeatedly with ground spices until meat is dark, glazed, and deeply flavorful.",
    "ingredients": [
      {
        "name": "Mutton",
        "amount": "500g"
      },
      {
        "name": "Onion",
        "amount": "3 large (sliced)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (finely chopped)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/3 cup"
      },
      {
        "name": "Ginger",
        "amount": "2 tbsp julienned & paste"
      },
      {
        "name": "Kashmiri Chilli",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Garam Masala",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Heat ghee in a heavy-bottomed kadai; add green cardamoms, black cardamom, cloves, and bay leaf.",
      "Add sliced onions and fry patiently on medium-high heat for 12 minutes until deep amber brown.",
      "Add ginger-garlic paste and mutton pieces; sear on high flame for 8 minutes to lock in flavors.",
      "Add whisked curd and fry until curd moisture evaporates; then add chopped tomatoes, coriander, and chilli powder.",
      "Sprinkle splashes of warm water and 'bhunno' (stir-fry vigorously) repeatedly on medium flame for 20 minutes.",
      "Add 1 cup hot water, cover and slow-cook on lowest flame for 25 minutes until mutton is meltingly soft and coated in thick glaze."
    ]
  },
  {
    "id": "dalcha",
    "name": "Hyderabadi Dalcha (Mutton & Lentil Stew)",
    "subCategory": "mutton-curry",
    "prepTime": 45,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/dalcha.jpg",
    "description": "Hearty Hyderabadi wedding specialty combining tender bone-in mutton, chana dal, bottle gourd (kaddu), and tangy tamarind.",
    "ingredients": [
      {
        "name": "Mutton",
        "amount": "400g (bone-in)"
      },
      {
        "name": "Chana Dal",
        "amount": "1/2 cup (boiled till soft)"
      },
      {
        "name": "Bottle Gourd (Kaddu)",
        "amount": "1 cup (cubed)"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "2 tbsp"
      },
      {
        "name": "Onion",
        "amount": "2 medium (sliced)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 chopped"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      }
    ],
    "steps": [
      "Pressure cook chana dal with turmeric and water until completely mushy; mash with a dal masher into a smooth puree.",
      "In a separate pot, cook mutton with ginger-garlic paste, sliced onions, chilli powder, and water until 80% tender.",
      "Add cubed bottle gourd (kaddu) and chopped tomatoes to the mutton; cook for 8 minutes until gourd is tender.",
      "Pour in the mashed chana dal puree and tamarind pulp; stir to create a rich stew consistency.",
      "Simmer dalcha on low flame for 10 minutes so mutton, lentil, and gourd flavors meld together.",
      "Prepare baghar (tempering): heat ghee, splutter cumin, dry red chillies, and curry leaves; pour smoking hot over dalcha."
    ]
  },
  {
    "id": "paneer-butter-masala",
    "name": "Paneer Butter Masala",
    "subCategory": "veg-paneer-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/paneer-butter-masala.jpg",
    "description": "Cubes of tender malai paneer simmered in an indulgent, silky-smooth butter-tomato and cashew gravy.",
    "ingredients": [
      {
        "name": "Paneer",
        "amount": "250g (cubed)"
      },
      {
        "name": "Tomatoes",
        "amount": "4 large (pureed)"
      },
      {
        "name": "Cashews",
        "amount": "12 (soaked & ground to paste)"
      },
      {
        "name": "Butter & Ghee",
        "amount": "2 tbsp each"
      },
      {
        "name": "Fresh Cream",
        "amount": "2 tbsp"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tbsp"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Kashmiri Chilli",
        "amount": "1.5 tsp"
      }
    ],
    "steps": [
      "Soak paneer cubes in warm salted water for 10 minutes to make them soft and pillowy.",
      "In a kadai, melt 1 tbsp butter and 1 tbsp ghee; add whole cardamoms and ginger-garlic paste; sauté 1 minute.",
      "Add fresh tomato purée, Kashmiri chilli powder, and cashew paste; cook on medium-low flame for 12 minutes until butter releases.",
      "Add 1/2 cup warm water, salt, and 1/2 tsp honey/sugar to balance the tomato acidity; bring to a gentle boil.",
      "Drain paneer cubes and slide into the simmering makhani gravy.",
      "Sprinkle crushed toasted kasuri methi, swirl in fresh cream and remaining butter; simmer on lowest flame for 3 minutes."
    ]
  },
  {
    "id": "palak-paneer",
    "name": "Palak Paneer",
    "subCategory": "veg-paneer-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/palak-paneer.jpg",
    "description": "Fresh golden cottage cheese cubes submerged in a vibrant, velvety spiced spinach purée.",
    "ingredients": [
      {
        "name": "Paneer",
        "amount": "250g (cubed)"
      },
      {
        "name": "Fresh Spinach (Palak)",
        "amount": "1 large bunch (blanched)"
      },
      {
        "name": "Onion",
        "amount": "1 large (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "1 medium (finely chopped)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Garlic",
        "amount": "6 cloves (minced)"
      },
      {
        "name": "Green Chillies",
        "amount": "2"
      },
      {
        "name": "Fresh Cream",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Blanch washed palak leaves in boiling water for exactly 2 minutes; plunge immediately into ice-cold water to retain bright emerald color.",
      "Blend blanched palak with 2 green chillies and 1/4 inch ginger into a silky smooth purée without adding extra water.",
      "Heat ghee in a kadai; add cumin seeds and lots of minced garlic; sauté till garlic turns fragrant golden.",
      "Add finely chopped onions and sauté until translucent; add chopped tomatoes, turmeric, and coriander powder; cook till soft.",
      "Pour in the spinach purée and 1/4 cup water; season with salt and simmer on low heat for 5 minutes.",
      "Gently fold in fresh paneer cubes and finish with a drizzle of fresh cream and a pinch of garam masala."
    ]
  },
  {
    "id": "kadai-paneer",
    "name": "Kadai Paneer",
    "subCategory": "veg-paneer-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/kadai-paneer.jpg",
    "description": "Paneer cubes and crunchy bell peppers tossed in a robust, freshly pounded coriander-chilli Kadai masala.",
    "ingredients": [
      {
        "name": "Paneer",
        "amount": "250g (cubed)"
      },
      {
        "name": "Capsicum",
        "amount": "1 large (cubed)"
      },
      {
        "name": "Onion",
        "amount": "1 large (petals) + 1 chopped"
      },
      {
        "name": "Tomatoes",
        "amount": "3 ripe (finely chopped)"
      },
      {
        "name": "Coriander Seeds",
        "amount": "1.5 tbsp (freshly cracked)"
      },
      {
        "name": "Dry Red Chillies",
        "amount": "3 (crushed)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Dry roast whole coriander seeds and dry red chillies until fragrant; coarsely crush into signature Kadai masala.",
      "In an iron kadai, heat 1 tbsp oil; flash-fry capsicum cubes and onion petals on high heat for 2 minutes; remove and keep crisp.",
      "In the same kadai, add ghee, cumin seeds, and finely chopped onions; sauté until golden.",
      "Add ginger-garlic paste, chopped tomatoes, turmeric, and half the Kadai masala; cook until tomatoes turn mushy and oil separates.",
      "Add 1/4 cup water to form a thick masala sauce; gently add paneer cubes and cook for 3 minutes.",
      "Add the crunchy sautéed capsicum and onion petals, remaining Kadai masala, and crushed kasuri methi; toss on high flame for 1 minute."
    ]
  },
  {
    "id": "shahi-paneer",
    "name": "Shahi Paneer",
    "subCategory": "veg-paneer-curry",
    "prepTime": 30,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/shahi-paneer.jpg",
    "description": "Royal Mughlai delicacy with soft paneer cubes in a fragrant, creamy sauce of cashews, saffron, and aromatic whole spices.",
    "ingredients": [
      {
        "name": "Paneer",
        "amount": "250g (triangles or cubes)"
      },
      {
        "name": "Onion",
        "amount": "2 medium (boiled & pureed)"
      },
      {
        "name": "Cashews & Almonds",
        "amount": "15 (soaked & ground)"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/4 cup (whisked)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Saffron (Kesar)",
        "amount": "a pinch in 2 tbsp warm milk"
      },
      {
        "name": "Green Cardamoms",
        "amount": "4 pods"
      },
      {
        "name": "Fresh Cream",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Boil roughly chopped onions with 1 green cardamom in water for 8 minutes; drain and blend into a pale onion paste.",
      "Heat ghee in a handi; bloom green cardamoms, cloves, and cinnamon.",
      "Add the boiled onion paste and sauté on low flame for 5 minutes without letting it brown.",
      "Add whisked curd and cashew-almond paste; stir continuously on low heat to create a smooth, creamy base.",
      "Add Kashmiri chilli powder for subtle warmth, salt, and saffron-infused milk; simmer for 6 minutes.",
      "Slide in paneer pieces, finish with fresh cream and a dash of cardamom powder; simmer on low for 3 minutes."
    ]
  },
  {
    "id": "matar-paneer",
    "name": "Matar Paneer",
    "subCategory": "veg-paneer-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/matar-paneer.jpg",
    "description": "Classic North Indian comfort food: sweet green peas and soft paneer in an onion-tomato homestyle gravy.",
    "ingredients": [
      {
        "name": "Paneer",
        "amount": "200g (cubed)"
      },
      {
        "name": "Green Peas (Matar)",
        "amount": "1 cup (fresh or frozen)"
      },
      {
        "name": "Onion",
        "amount": "2 medium (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "3 medium (pureed)"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Garam Masala",
        "amount": "1 tsp"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Lightly pan-sear paneer cubes in 1 tsp ghee until edges turn faint golden; soak in warm water to keep tender.",
      "In the same pan, heat remaining ghee; crackle cumin seeds and a pinch of hing.",
      "Add chopped onions and ginger-garlic paste; sauté until light golden brown.",
      "Add tomato purée, turmeric, red chilli, coriander, and cumin powder; cook until masala leaves oil at the sides.",
      "Add green peas (matar) and 1 cup water; cover and cook for 6 minutes until peas are tender.",
      "Add the drained paneer cubes, garam masala, and crushed kasuri methi; simmer for 4 minutes and garnish with fresh coriander."
    ]
  },
  {
    "id": "malai-kofta",
    "name": "Malai Kofta",
    "subCategory": "veg-paneer-curry",
    "prepTime": 40,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/malai-kofta.jpg",
    "description": "Melt-in-the-mouth paneer and potato dumplings stuffed with nuts, served in an exquisite creamy cashew-tomato sauce.",
    "ingredients": [
      {
        "name": "Paneer",
        "amount": "150g (grated)"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "2 medium (mashed)"
      },
      {
        "name": "Cornstarch",
        "amount": "2 tbsp"
      },
      {
        "name": "Cashews & Raisins",
        "amount": "2 tbsp (chopped for stuffing)"
      },
      {
        "name": "Tomatoes",
        "amount": "4 large (pureed)"
      },
      {
        "name": "Cashew Paste",
        "amount": "3 tbsp"
      },
      {
        "name": "Fresh Cream",
        "amount": "2 tbsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Knead grated paneer, mashed potatoes, cornstarch, and a pinch of salt into a smooth dough.",
      "Divide into balls; flatten, stuff center with chopped cashews and raisins, and roll into smooth, crack-free round koftas.",
      "Deep fry koftas in hot oil on medium flame until golden brown and crisp; drain on paper towels.",
      "In a kadai, heat ghee; sauté ginger paste, tomato purée, and cashew paste on low flame for 10 minutes until glossy.",
      "Add coriander powder, Kashmiri chilli, cardamom powder, and fresh cream; simmer to a velvety smooth gravy.",
      "Arrange crisp koftas in a serving dish, ladle the hot shahi gravy over them right before serving to maintain crispness."
    ]
  },
  {
    "id": "paneer-bhurji",
    "name": "Amritsari Paneer Bhurji Gravy",
    "subCategory": "veg-paneer-curry",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/paneer-bhurji.jpg",
    "description": "Street-style spiced scrambled paneer cooked on a tawa with onions, tomatoes, butter, and pav bhaji masala.",
    "ingredients": [
      {
        "name": "Paneer",
        "amount": "250g (freshly crumbled)"
      },
      {
        "name": "Onion",
        "amount": "2 medium (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 ripe (finely chopped)"
      },
      {
        "name": "Butter",
        "amount": "2 tbsp"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1 tsp (roasted)"
      },
      {
        "name": "Pav Bhaji Masala",
        "amount": "1 tsp"
      },
      {
        "name": "Green Chillies",
        "amount": "2 (chopped)"
      },
      {
        "name": "Milk",
        "amount": "1/4 cup"
      }
    ],
    "steps": [
      "Melt butter in a wide pan or tawa; crackle cumin seeds and chopped green chillies.",
      "Add finely chopped onions and sauté on medium-high heat until translucent.",
      "Add roasted besan (gives signature street-style body) and ginger-garlic paste; stir for 1 minute.",
      "Add chopped tomatoes, turmeric, chilli powder, and pav bhaji masala; cook until pulpy.",
      "Add 1/4 cup warm milk and stir vigorously to create a rich, juicy masala base.",
      "Fold in freshly crumbled paneer and chopped coriander; toss for 2 minutes on medium heat (do not overcook)."
    ]
  },
  {
    "id": "chole-masala",
    "name": "Amritsari Chole Masala",
    "subCategory": "veg-paneer-curry",
    "prepTime": 35,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/chole-masala.jpg",
    "description": "Authentic dark Punjabi chickpea curry infused with tea decoction, dried pomegranate seeds (anardana), and amchur.",
    "ingredients": [
      {
        "name": "Kabuli Chana (Chickpeas)",
        "amount": "1 cup (soaked overnight)"
      },
      {
        "name": "Tea Leaves (Potli)",
        "amount": "1 tbsp tied in cloth (for dark color)"
      },
      {
        "name": "Anardana (Pomegranate)",
        "amount": "1 tbsp (toasted & powdered)"
      },
      {
        "name": "Onion",
        "amount": "2 large (finely grated)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (pureed)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp"
      },
      {
        "name": "Amchur Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Ginger",
        "amount": "2 tbsp juliennes"
      }
    ],
    "steps": [
      "Pressure cook soaked chickpeas with the tea bag potli, black cardamom, cinnamon, and salt for 6 whistles until butter-soft; discard tea potli.",
      "Heat ghee in a heavy kadai; sauté grated onions on medium flame until dark brown.",
      "Add ginger-garlic paste, pureed tomatoes, and cook until oil separates.",
      "Add anardana powder, chole masala, coriander powder, amchur, and roasted cumin powder.",
      "Add boiled chickpeas along with their dark broth; coarsely mash a few chickpeas with the back of a ladle to thicken the gravy.",
      "Simmer for 15 minutes. Prepare a hot ghee tadka with ginger juliennes, green chillies, and Kashmiri chilli; pour sizzling over chole."
    ]
  },
  {
    "id": "rajma-masala",
    "name": "Punjabi Rajma Masala",
    "subCategory": "veg-paneer-curry",
    "prepTime": 40,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/rajma-masala.jpg",
    "description": "Slow-simmered Kashmiri red kidney beans cooked in a hearty, homestyle ginger-garlic and onion-tomato gravy.",
    "ingredients": [
      {
        "name": "Rajma (Red Kidney Beans)",
        "amount": "1 cup (soaked overnight)"
      },
      {
        "name": "Onion",
        "amount": "2 large (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "3 ripe (pureed)"
      },
      {
        "name": "Ginger & Garlic",
        "amount": "2 tbsp (freshly pounded)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Kashmiri Chilli",
        "amount": "1 tbsp"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tsp"
      },
      {
        "name": "Garam Masala",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Pressure cook soaked rajma with 1 black cardamom and salt for 6-7 whistles until completely soft when pressed between fingers.",
      "Heat ghee and oil in a kadai; add cumin seeds and sauté finely chopped onions until caramelized brown.",
      "Add pounded ginger-garlic and green chillies; sauté for 2 minutes.",
      "Add tomato purée, coriander powder, turmeric, and Kashmiri chilli; cook on medium heat until thick and oil leaves sides.",
      "Add the boiled rajma with its rich broth; mash 2-3 spoons of beans against the pan to give natural creamy body.",
      "Slow-simmer uncovered for 20 minutes so flavors seep deep into the beans. Finish with kasuri methi and fresh coriander."
    ]
  },
  {
    "id": "dal-makhani",
    "name": "Dal Makhani (Maa di Dal)",
    "subCategory": "veg-paneer-curry",
    "prepTime": 45,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/dal-makhani.jpg",
    "description": "Legendary slow-cooked whole black urad lentils and kidney beans simmered overnight with butter, cream, and tomato reduction.",
    "ingredients": [
      {
        "name": "Sabut Urad (Black Lentils)",
        "amount": "3/4 cup (soaked 8 hours)"
      },
      {
        "name": "Rajma",
        "amount": "1/4 cup (soaked)"
      },
      {
        "name": "White Butter (Makhan)",
        "amount": "4 tbsp"
      },
      {
        "name": "Fresh Cream",
        "amount": "3 tbsp"
      },
      {
        "name": "Tomatoes",
        "amount": "3 ripe (pureed)"
      },
      {
        "name": "Garlic & Ginger",
        "amount": "1.5 tbsp paste"
      },
      {
        "name": "Deggi Mirch",
        "amount": "1 tbsp"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Pressure cook soaked black urad dal and rajma with salt and 4 cups water for 8 whistles until thoroughly tender.",
      "In a heavy handi, melt 2 tbsp butter; add ginger-garlic paste and deggi mirch; sauté for 30 seconds.",
      "Add tomato purée and cook on low flame for 12 minutes until reduced and deep crimson.",
      "Pour in the cooked lentils along with their water; mash continuously with a potato masher to release natural creamy starch.",
      "Slow-simmer on lowest heat for at least 30 minutes, stirring frequently and adding warm water as needed.",
      "Stir in remaining white butter, fresh cream, and crushed kasuri methi; simmer for 5 more minutes until silky and luxurious."
    ]
  },
  {
    "id": "dum-aloo",
    "name": "Kashmiri Dum Aloo",
    "subCategory": "veg-paneer-curry",
    "prepTime": 35,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/dum-aloo.jpg",
    "description": "Baby potatoes pricked, deep-fried until crisp, and slow-cooked (dum) in a fragrant fennel and dry ginger-spiced yogurt gravy.",
    "ingredients": [
      {
        "name": "Baby Potatoes",
        "amount": "12-15 (boiled & peeled)"
      },
      {
        "name": "Fresh Curd",
        "amount": "1 cup (whisked)"
      },
      {
        "name": "Mustard Oil",
        "amount": "3 tbsp (for frying & gravy)"
      },
      {
        "name": "Kashmiri Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Saunf (Fennel Powder)",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Sonth (Dry Ginger Powder)",
        "amount": "1 tsp"
      },
      {
        "name": "Hing",
        "amount": "1/4 tsp"
      },
      {
        "name": "Cloves & Cardamoms",
        "amount": "3 each"
      }
    ],
    "steps": [
      "Prick peeled baby potatoes thoroughly all over with a toothpick or fork.",
      "Deep-fry potatoes in hot mustard oil on medium flame until golden brown and crunchy on the outside; drain.",
      "In a bowl, whisk curd with Kashmiri red chilli powder, fennel powder, dry ginger powder, and salt.",
      "In a pan, heat 2 tbsp mustard oil; add hing, cloves, and cardamoms until they crackle.",
      "Pour in the spiced yogurt mixture, stirring continuously on low heat until it starts boiling without curdling.",
      "Add the fried potatoes, seal pan with foil/lid, and cook on 'dum' (low flame) for 15 minutes so gravy penetrates the potato cores."
    ]
  },
  {
    "id": "baingan-bharta",
    "name": "Dhaba Baingan Bharta",
    "subCategory": "veg-paneer-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/baingan-bharta.jpg",
    "description": "Charcoal-fire roasted large eggplant mashed and stir-fried with mustard oil, onions, garlic, and fresh green chillies.",
    "ingredients": [
      {
        "name": "Large Bharta Baingan (Eggplant)",
        "amount": "1 large (around 500g)"
      },
      {
        "name": "Garlic Cloves",
        "amount": "6 (slit into eggplant)"
      },
      {
        "name": "Onion",
        "amount": "2 medium (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (chopped)"
      },
      {
        "name": "Mustard Oil",
        "amount": "2.5 tbsp"
      },
      {
        "name": "Green Chillies",
        "amount": "3 (finely chopped)"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp (minced)"
      },
      {
        "name": "Green Peas (Optional)",
        "amount": "1/3 cup"
      }
    ],
    "steps": [
      "Make 3 deep slits in the baingan and insert garlic cloves and green chillies into the slits; rub skin with mustard oil.",
      "Roast directly over an open flame on the gas burner for 10-12 minutes, turning frequently until skin is charred black and flesh is tender.",
      "Let cool, peel off blackened skin, and mash the smoked pulp using a fork.",
      "Heat mustard oil in a kadai until smoking; add cumin seeds and finely chopped onions; sauté until golden.",
      "Add minced ginger, chopped green chillies, and tomatoes; cook until tomatoes are soft.",
      "Add mashed smoked baingan and salt; fry on medium flame for 7 minutes until well combined. Garnish with chopped coriander."
    ]
  },
  {
    "id": "bhindi-masala",
    "name": "Homestyle Bhindi Masala",
    "subCategory": "veg-paneer-curry",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/bhindi-masala.jpg",
    "description": "Tender crisp okra sautéed with crunchy onions, amchur, and toasted cumin seeds with zero sliminess.",
    "ingredients": [
      {
        "name": "Bhindi (Okra)",
        "amount": "300g (washed, dried thoroughly & chopped)"
      },
      {
        "name": "Onion",
        "amount": "2 medium (sliced into strips)"
      },
      {
        "name": "Tomatoes",
        "amount": "1 medium (finely chopped)"
      },
      {
        "name": "Mustard Oil",
        "amount": "2.5 tbsp"
      },
      {
        "name": "Amchur (Dry Mango Powder)",
        "amount": "1 tsp"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Coriander Powder",
        "amount": "1 tbsp"
      },
      {
        "name": "Turmeric Powder",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Ensure bhindi is completely dry before cutting into 1-inch pieces to prevent sliminess.",
      "Heat 1.5 tbsp mustard oil in a wide pan; add bhindi and shallow-fry on medium-high heat for 7 minutes until non-sticky; remove.",
      "In the same pan, heat remaining 1 tbsp oil; crackle ajwain and cumin seeds.",
      "Add sliced onions and green chillies; sauté on medium heat until light golden and translucent.",
      "Add chopped tomatoes, turmeric, coriander powder, Kashmiri chilli powder, and salt; cook until tomatoes soften.",
      "Add the fried bhindi and amchur powder; toss gently on medium heat for 4 minutes until spices coat the okra crisply."
    ]
  },
  {
    "id": "gobi-matar",
    "name": "Dhaba Aloo Gobi Matar",
    "subCategory": "veg-paneer-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/gobi-matar.jpg",
    "description": "Hearty North Indian semi-dry curry of cauliflower florets, potatoes, and sweet green peas in a spiced ginger-tomato sauce.",
    "ingredients": [
      {
        "name": "Cauliflower (Gobi)",
        "amount": "1 medium head (cut into bite-sized florets)"
      },
      {
        "name": "Potatoes (Aloo)",
        "amount": "2 medium (cubed)"
      },
      {
        "name": "Green Peas (Matar)",
        "amount": "1/2 cup"
      },
      {
        "name": "Onion",
        "amount": "1 large (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (chopped)"
      },
      {
        "name": "Ginger",
        "amount": "2 tbsp (julienned & paste)"
      },
      {
        "name": "Mustard Oil",
        "amount": "2.5 tbsp"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Shallow-fry gobi florets and potato cubes in 1.5 tbsp mustard oil for 5 minutes until lightly blistered; set aside.",
      "In the same pan, add remaining oil and crackle cumin seeds, bay leaf, and ginger-garlic paste.",
      "Add chopped onions and green chillies; sauté on medium flame until golden brown.",
      "Add chopped tomatoes, turmeric, coriander powder, cumin powder, and chilli powder; cook till tomatoes break down.",
      "Add the semi-fried gobi, aloo, green peas, and 1/3 cup warm water; season with salt.",
      "Cover tightly and simmer on low flame for 12 minutes until vegetables are fork-tender. Garnish with ginger juliennes and kasuri methi."
    ]
  },
  {
    "id": "undhiyu",
    "name": "Surti Undhiyu",
    "subCategory": "veg-paneer-curry",
    "prepTime": 45,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/undhiyu.jpg",
    "description": "Celebrated Gujarati winter specialty of stuffed baby vegetables, papdi beans, and fenugreek muthias slow-cooked together.",
    "ingredients": [
      {
        "name": "Surti Papdi (Flat Beans)",
        "amount": "1 cup (stringed)"
      },
      {
        "name": "Baby Eggplants & Potatoes",
        "amount": "4 each (slit in criss-cross)"
      },
      {
        "name": "Methi Muthia",
        "amount": "8 small (fried fenugreek dumplings)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1/2 cup"
      },
      {
        "name": "Green Garlic",
        "amount": "3 tbsp (finely chopped)"
      },
      {
        "name": "Sesame Seeds & Peanuts",
        "amount": "2 tbsp each (coarsely crushed)"
      },
      {
        "name": "Groundnut Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Ajwain",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Prepare green stuffing masala: mix grated coconut, chopped green garlic, crushed peanuts, sesame seeds, coriander, green chillies, sugar, and lemon juice.",
      "Stuff the slit baby eggplants and potatoes generously with the green coconut masala.",
      "Heat groundnut oil in a heavy pressure cooker or pot; crackle ajwain, hing, and surti papdi beans for 2 minutes.",
      "Layer the stuffed potatoes, eggplants, and purple yam (kand); sprinkle remaining green masala on top.",
      "Add 1/2 cup water, close cooker, and cook for 2 whistles on medium flame.",
      "Gently open, place fried methi muthias on top, cover and simmer on low heat for 5 minutes so muthias absorb the aromatic juices."
    ]
  },
  {
    "id": "gatte-ki-sabzi",
    "name": "Rajasthani Gatte ki Sabzi",
    "subCategory": "veg-paneer-curry",
    "prepTime": 35,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/gatte-ki-sabzi.jpg",
    "description": "Boiled and lightly fried gram flour dumplings (gatte) simmered in a spiced, tangy yogurt gravy with mustard seeds and hing.",
    "ingredients": [
      {
        "name": "Besan (Gram Flour)",
        "amount": "1 cup"
      },
      {
        "name": "Fresh Curd",
        "amount": "1 cup (whisked with spices)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Ajwain",
        "amount": "1/2 tsp"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tsp"
      },
      {
        "name": "Hing",
        "amount": "1/4 tsp"
      },
      {
        "name": "Mustard & Cumin Seeds",
        "amount": "1 tsp each"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp paste"
      }
    ],
    "steps": [
      "Knead besan with 1 tbsp ghee, 2 tbsp curd, ajwain, turmeric, chilli, and warm water into a soft pliable dough.",
      "Roll dough into cylindrical logs (1/2 inch thick); boil in bubbling hot water for 10 minutes until gattas float with small bubbles.",
      "Drain gatte (reserve the cooking broth!), cut into 1/2-inch coin pieces, and shallow-fry in 1 tsp ghee for 2 minutes.",
      "In a bowl, whisk curd with turmeric, coriander powder, Kashmiri chilli, and ginger paste.",
      "Heat ghee in a kadai; add mustard seeds, cumin seeds, hing, and curry leaves; lower flame and pour whisked curd, stirring constantly.",
      "Add the reserved gatta broth to adjust gravy consistency, add gatte pieces, and simmer on low flame for 10 minutes."
    ]
  },
  {
    "id": "dal-tadka",
    "name": "Restaurant Style Dal Tadka",
    "subCategory": "dal-south-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/dal-tadka.jpg",
    "description": "Creamy yellow toor and masoor lentils tempered twice with sizzling desi ghee, garlic, cumin, and dry red chillies.",
    "ingredients": [
      {
        "name": "Toor Dal",
        "amount": "1/2 cup"
      },
      {
        "name": "Masoor Dal (Red Lentils)",
        "amount": "1/4 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp (divided for 2 tadkas)"
      },
      {
        "name": "Garlic",
        "amount": "8 cloves (finely sliced)"
      },
      {
        "name": "Tomatoes",
        "amount": "1 medium (finely chopped)"
      },
      {
        "name": "Onion",
        "amount": "1 small (finely chopped)"
      },
      {
        "name": "Dry Red Chillies",
        "amount": "2 whole"
      },
      {
        "name": "Hing",
        "amount": "1/4 tsp"
      }
    ],
    "steps": [
      "Pressure cook washed toor and masoor dal with 2.5 cups water, turmeric, salt, and 1 green chilli for 4 whistles until creamy; whisk smooth.",
      "First Tadka: Heat 1.5 tbsp ghee in a pan; add cumin seeds, chopped onions, and sauté until translucent golden.",
      "Add chopped tomatoes, ginger, and coriander powder; cook until tomatoes break down completely.",
      "Pour in the cooked whisked dal; adjust consistency with warm water, simmer on medium flame for 5 minutes.",
      "Second Tadka (Dhungar touch): In a small tadka ladle, heat remaining 1.5 tbsp ghee until smoking; add sliced garlic, whole red chillies, and hing; let garlic turn crisp reddish-brown.",
      "Turn off flame, stir in 1/2 tsp Kashmiri chilli powder for red color, and pour the sizzling tadka immediately over the dal; cover for 2 minutes to trap aroma."
    ]
  },
  {
    "id": "dal-palak",
    "name": "Lasooni Dal Palak",
    "subCategory": "dal-south-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/dal-palak.jpg",
    "description": "Nutrient-packed homestyle yellow dal cooked with shredded tender spinach leaves and generous burnt garlic tadka.",
    "ingredients": [
      {
        "name": "Toor Dal or Moong Dal",
        "amount": "3/4 cup"
      },
      {
        "name": "Fresh Spinach (Palak)",
        "amount": "2 cups (finely shredded)"
      },
      {
        "name": "Garlic (Lasun)",
        "amount": "10 cloves (coarsely chopped)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Tomatoes",
        "amount": "1 medium (chopped)"
      },
      {
        "name": "Green Chillies",
        "amount": "2 slit"
      },
      {
        "name": "Cumin Seeds",
        "amount": "1 tsp"
      },
      {
        "name": "Hing",
        "amount": "1/4 tsp"
      }
    ],
    "steps": [
      "Cook dal with water, turmeric, and 1/2 tsp ghee in a pressure cooker for 3 whistles until soft; mash lightly.",
      "In a kadai, heat 1 tbsp ghee; add cumin seeds, slit green chillies, and half of the chopped garlic; sauté until golden.",
      "Add chopped tomatoes, salt, and coriander powder; cook until tomatoes are mushy.",
      "Add the finely shredded fresh palak leaves; sauté on medium-high heat for 3 minutes until spinach wilts completely.",
      "Pour in the mashed dal and 1/2 cup warm water; bring to a rolling boil and simmer on low heat for 5 minutes.",
      "In a tadka pan, heat 1 tbsp ghee with remaining garlic cloves and whole red chilli; fry till garlic is deep golden-brown, then pour over dal."
    ]
  },
  {
    "id": "sambar",
    "name": "South Indian Tiffin Sambar",
    "subCategory": "dal-south-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/sambar.jpg",
    "description": "Traditional hotel-style aromatic tiffin sambar made with toor dal, shallots, tamarind, and freshly roasted spice podi.",
    "ingredients": [
      {
        "name": "Toor Dal",
        "amount": "1/2 cup"
      },
      {
        "name": "Shallots (Sambar Onions)",
        "amount": "12 (peeled)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (chopped)"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Sambar Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      },
      {
        "name": "Mustard Seeds",
        "amount": "1 tsp"
      },
      {
        "name": "Hing",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Pressure cook toor dal with a pinch of turmeric and 1 drop of sesame oil until completely mushy; whisk smooth.",
      "Heat 1 tbsp sesame oil in a pot; sauté whole shallots and curry leaves for 3 minutes until translucent.",
      "Add chopped tomatoes, turmeric, and sambar powder; sauté for 1 minute on low flame.",
      "Add tamarind pulp extracted in 1.5 cups water and salt; boil for 7 minutes until the raw tamarind smell vanishes.",
      "Add the cooked whisked toor dal and adjust consistency with warm water; bring to a frothy boil on medium flame.",
      "Prepare tadka: heat ghee/oil, splutter mustard seeds, fenugreek seeds (methi), dry red chillies, hing, and curry leaves; pour over bubbling sambar."
    ]
  },
  {
    "id": "drumstick-sambar",
    "name": "Murungakkai Sambar (Drumstick Sambar)",
    "subCategory": "dal-south-curry",
    "prepTime": 30,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/drumstick-sambar.jpg",
    "description": "Authentic Tamil Nadu feast sambar highlighting sweet tender drumsticks slow-simmered in tangy lentil tamarind broth.",
    "ingredients": [
      {
        "name": "Drumsticks (Murungakkai)",
        "amount": "2 (cut into 2.5-inch pieces)"
      },
      {
        "name": "Toor Dal",
        "amount": "1/2 cup"
      },
      {
        "name": "Shallots",
        "amount": "10 (peeled)"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "2 tbsp"
      },
      {
        "name": "Sambar Powder",
        "amount": "2 tbsp"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "2 tbsp (ground to paste)"
      },
      {
        "name": "Sesame Oil",
        "amount": "2 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      }
    ],
    "steps": [
      "Cook toor dal in pressure cooker until soft; whisk well and keep ready.",
      "Heat sesame oil in a heavy pot; sauté shallots and drumstick pieces for 3 minutes.",
      "Add tamarind extract, sambar powder, turmeric, and 1.5 cups water; cover and cook for 10 minutes until drumsticks are tender and absorb tangy juices.",
      "Add the cooked toor dal and ground coconut paste; stir well to give hotel-style velvety thickness.",
      "Bring to a gentle rolling boil for 4 minutes until frothy aroma fills the kitchen.",
      "Temper with mustard seeds, fenugreek seeds, dry red chillies, curry leaves, and a generous pinch of hing."
    ]
  },
  {
    "id": "tomato-pappu",
    "name": "Andhra Tomato Pappu",
    "subCategory": "dal-south-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/tomato-pappu.jpg",
    "description": "Comforting Andhra home staple of toor dal pressure cooked with tangy tomatoes, green chillies, and garlic tadka.",
    "ingredients": [
      {
        "name": "Toor Dal",
        "amount": "3/4 cup"
      },
      {
        "name": "Tomatoes",
        "amount": "3 large ripe country tomatoes (chopped)"
      },
      {
        "name": "Green Chillies",
        "amount": "4 (slit)"
      },
      {
        "name": "Garlic",
        "amount": "6 cloves (crushed with skin)"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      },
      {
        "name": "Groundnut Oil or Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Mustard & Cumin Seeds",
        "amount": "1 tsp each"
      },
      {
        "name": "Hing",
        "amount": "1/4 tsp"
      }
    ],
    "steps": [
      "In a pressure cooker, combine washed toor dal, chopped tomatoes, slit green chillies, 1/4 tsp turmeric, and 2 cups water.",
      "Pressure cook on medium flame for 4 whistles until dal and tomatoes are thoroughly cooked.",
      "Once pressure releases, add salt and mash vigorously using a traditional wooden dal churner (pappu gutti) until creamy.",
      "Prepare popu (tadka): heat oil/ghee in a small pan; add mustard seeds and let them splutter.",
      "Add cumin seeds, crushed garlic cloves, whole red chillies, curry leaves, and hing; fry until garlic turns golden brown.",
      "Pour the sizzling popu directly into the mashed tomato dal, stir once, and serve piping hot over steamed rice with pure ghee."
    ]
  },
  {
    "id": "avial",
    "name": "Kerala Sadya Avial",
    "subCategory": "dal-south-curry",
    "prepTime": 30,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/avial.jpg",
    "description": "Grand Kerala feast dish featuring 7 native vegetables cooked in fresh ground coconut, green chillies, sour curd, and raw coconut oil.",
    "ingredients": [
      {
        "name": "Mixed Veggies (Carrot, Beans, Raw Banana, Elephant Yam, Drumstick, Snake Gourd)",
        "amount": "2.5 cups (cut into 2-inch batons)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1 cup"
      },
      {
        "name": "Green Chillies",
        "amount": "4"
      },
      {
        "name": "Cumin Seeds",
        "amount": "1 tsp"
      },
      {
        "name": "Sour Curd (Yogurt)",
        "amount": "3 tbsp (whisked)"
      },
      {
        "name": "Coconut Oil",
        "amount": "2 tbsp (raw virgin)"
      },
      {
        "name": "Curry Leaves",
        "amount": "3 sprigs fresh"
      },
      {
        "name": "Turmeric Powder",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Cut all traditional vegetables into uniform 2-inch finger batons.",
      "Coarsely crush grated coconut with cumin seeds and green chillies without adding water (do not make a fine paste).",
      "Cook firm vegetables (yam, raw banana, drumstick) first in a wide pot with turmeric, salt, and 1/2 cup water; add softer vegetables (beans, carrots) later; cook until tender-crisp.",
      "Make a well in the center of the cooked vegetables, add the coarse coconut paste, cover and steam for 3 minutes.",
      "Gently fold the coconut paste with the vegetables; lower heat and stir in whisked sour curd.",
      "Turn off the heat immediately. Pour 2 tbsp pure raw coconut oil and a generous handful of fresh crushed curry leaves over the top; keep covered for 15 minutes before serving."
    ]
  },
  {
    "id": "mor-kulambu",
    "name": "Mor Kulambu (South Indian Buttermilk Kadhi)",
    "subCategory": "dal-south-curry",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/mor-kulambu.jpg",
    "description": "Cooling, sun-yellow yogurt gravy flavored with fresh coconut, ginger, green chillies, and soaked lentil paste.",
    "ingredients": [
      {
        "name": "Sour Curd / Buttermilk",
        "amount": "1.5 cups (whisked smooth with water)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "3 tbsp"
      },
      {
        "name": "Toor Dal & Chana Dal",
        "amount": "1 tsp each (soaked 20 mins)"
      },
      {
        "name": "Green Chillies",
        "amount": "2"
      },
      {
        "name": "Ginger",
        "amount": "1 inch piece"
      },
      {
        "name": "Coconut Oil",
        "amount": "1 tbsp"
      },
      {
        "name": "Mustard Seeds",
        "amount": "1 tsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      }
    ],
    "steps": [
      "Grind soaked toor dal, chana dal, cumin seeds, grated coconut, ginger, and green chillies into a smooth paste with little water.",
      "In a bowl, whisk sour curd with turmeric powder, salt, and 1/2 cup water until smooth.",
      "Mix the ground coconut-lentil paste into the whisked curd thoroughly.",
      "Pour into a kadai and place on low-medium flame; stir continuously until the gravy warms and turns frothy around edges (do not let it boil, or curd will split).",
      "As soon as the first bubble rises, turn off flame immediately.",
      "Heat coconut oil in a small ladle; splutter mustard seeds, fenugreek seeds, dry red chillies, hing, and curry leaves; pour over Mor Kulambu."
    ]
  },
  {
    "id": "vatha-kulambu",
    "name": "Chettinad Vatha Kulambu (Sundakkai Gravy)",
    "subCategory": "dal-south-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/vatha-kulambu.jpg",
    "description": "Intense, tangy, and spicy Tamil gravy made with sun-dried turkey berries (sundakkai vathal) and thick tamarind pulp in gingelly oil.",
    "ingredients": [
      {
        "name": "Sundakkai Vathal (Dried Turkey Berries)",
        "amount": "2 tbsp"
      },
      {
        "name": "Shallots",
        "amount": "12 (peeled)"
      },
      {
        "name": "Garlic",
        "amount": "10 cloves"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "lemon-sized ball extracted in 2 cups water"
      },
      {
        "name": "Sambar Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Gingelly Oil (Sesame Oil)",
        "amount": "3 tbsp"
      },
      {
        "name": "Fenugreek Seeds (Methi)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Jaggery",
        "amount": "1 small piece"
      }
    ],
    "steps": [
      "Heat 1 tbsp gingelly oil in a pan; fry sundakkai vathal on low heat until crisp and dark brown; remove and set aside.",
      "In the remaining oil, add more gingelly oil; crackle mustard seeds, fenugreek seeds, and curry leaves.",
      "Add shallots and whole garlic cloves; sauté on low flame until soft and fragrant.",
      "Add sambar powder, turmeric, and coriander powder; stir quickly without burning.",
      "Pour in thick tamarind extract, salt, and jaggery; bring to a rolling boil and simmer on medium flame for 12 minutes until gravy reduces and oil separates.",
      "Add the fried crispy sundakkai vathal, simmer for 3 minutes, and let sit for 1 hour for flavors to intensify."
    ]
  },
  {
    "id": "gujarati-kadhi",
    "name": "Gujarati Kadhi",
    "subCategory": "dal-south-curry",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/gujarati-kadhi.jpg",
    "description": "Sweet, tangy, and silky-thin Gujarati yogurt soup delicately tempered with cinnamon, cloves, mustard seeds, and jaggery.",
    "ingredients": [
      {
        "name": "Sour Curd (Yogurt)",
        "amount": "1 cup (whisked)"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "2 tbsp"
      },
      {
        "name": "Jaggery (Gud)",
        "amount": "1.5 tbsp (or sugar)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Ginger-Chilli Paste",
        "amount": "1 tbsp"
      },
      {
        "name": "Cinnamon & Cloves",
        "amount": "1 stick cinnamon, 3 cloves"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      },
      {
        "name": "Mustard & Cumin Seeds",
        "amount": "1/2 tsp each"
      }
    ],
    "steps": [
      "In a bowl, whisk curd and besan together thoroughly so no lumps remain; add 2.5 cups water and whisk into a thin, smooth liquid.",
      "Pour into a pot, add ginger-green chilli paste, jaggery, and salt.",
      "Cook on medium flame, stirring continuously in one direction until it begins to simmer and froths gently.",
      "Boil on low heat for 8-10 minutes until the raw smell of besan disappears.",
      "Prepare vaghar (tempering): heat ghee in a tadka pan; add mustard seeds, cumin seeds, cinnamon stick, cloves, hing, and curry leaves.",
      "Pour the fragrant sweet-smelling vaghar directly into the simmering kadhi; garnish with chopped coriander."
    ]
  },
  {
    "id": "kadhi-pakora",
    "name": "Punjabi Kadhi Pakora",
    "subCategory": "dal-south-curry",
    "prepTime": 35,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/kadhi-pakora.jpg",
    "description": "Crisp spiced onion-besan fritters submerged in a thick, tangy, slow-simmered sour yogurt kadhi with methi tadka.",
    "ingredients": [
      {
        "name": "Sour Curd (Khatta Dahi)",
        "amount": "1.5 cups"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "1/2 cup for kadhi + 1/2 cup for pakoras"
      },
      {
        "name": "Onion",
        "amount": "2 medium (sliced for pakoras)"
      },
      {
        "name": "Mustard Oil & Ghee",
        "amount": "for frying & tadka"
      },
      {
        "name": "Fenugreek Seeds (Methi Dana)",
        "amount": "1 tsp"
      },
      {
        "name": "Ajwain",
        "amount": "1/2 tsp"
      },
      {
        "name": "Dry Red Chillies",
        "amount": "3 whole"
      },
      {
        "name": "Kashmiri Chilli",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "For Pakoras: Mix sliced onions, besan, ajwain, green chillies, salt, and water into a thick batter; drop spoonfuls into hot oil and deep-fry until crisp golden; drain.",
      "Whisk sour curd, 1/2 cup besan, turmeric, and 4 cups water until completely lump-free.",
      "In a deep pot, heat 1.5 tbsp mustard oil; add methi dana, cumin seeds, hing, and chopped ginger.",
      "Pour in the curd-besan mixture; stir continuously on high heat until it comes to a boil.",
      "Lower heat to minimum and slow-simmer for 30 minutes, stirring occasionally, until kadhi turns thick, glossy, and fragrant.",
      "Add fried pakoras into hot kadhi, let soak for 5 minutes. Finish with a second ghee tadka of cumin, whole red chillies, and Kashmiri deggi mirch."
    ]
  },
  {
    "id": "egg-curry",
    "name": "Dhaba Style Egg Curry",
    "subCategory": "egg-seafood-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/egg-curry.jpg",
    "description": "Hard-boiled eggs shallow-fried with turmeric until blistered, simmered in a robust, spicy onion-tomato dhaba gravy.",
    "ingredients": [
      {
        "name": "Eggs",
        "amount": "4 (hard-boiled & peeled)"
      },
      {
        "name": "Onion",
        "amount": "2 large (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (pureed)"
      },
      {
        "name": "Mustard Oil",
        "amount": "2.5 tbsp"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Garlic",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tsp"
      },
      {
        "name": "Garam Masala",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Prick boiled eggs lightly with a fork; toss with a pinch of turmeric, chilli powder, and salt.",
      "Heat 1 tbsp mustard oil in a pan; shallow-fry the eggs on medium-high heat for 3 minutes until blistered and golden-crisp outside; set aside.",
      "In the remaining oil, crackle cumin seeds, bay leaf, and cardamom.",
      "Add finely chopped onions and sauté on medium flame until rich golden brown.",
      "Add ginger-garlic paste, tomato purée, coriander powder, cumin, and red chilli; cook until oil separates.",
      "Add 1 cup hot water and bring to a boil; slide in the fried eggs, sprinkle kasuri methi and garam masala, and simmer covered for 6 minutes."
    ]
  },
  {
    "id": "chettinad-egg-roast",
    "name": "Chettinad Egg Roast (Muttai Roast)",
    "subCategory": "egg-seafood-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chettinad-egg-roast.jpg",
    "description": "Dry-roasted South Indian egg preparation coated in caramelized shallots, freshly ground black pepper, and curry leaves.",
    "ingredients": [
      {
        "name": "Eggs",
        "amount": "4 (hard-boiled & halved)"
      },
      {
        "name": "Shallots (Sambar Onions)",
        "amount": "15 (finely sliced)"
      },
      {
        "name": "Tomatoes",
        "amount": "1 medium (finely chopped)"
      },
      {
        "name": "Black Pepper",
        "amount": "1.5 tbsp (freshly cracked)"
      },
      {
        "name": "Fennel Seeds",
        "amount": "1 tsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      },
      {
        "name": "Gingelly Oil",
        "amount": "2 tbsp"
      },
      {
        "name": "Ginger-Garlic",
        "amount": "1 tbsp paste"
      }
    ],
    "steps": [
      "Heat gingelly oil in a cast-iron pan; crackle fennel seeds and abundant fresh curry leaves.",
      "Add sliced shallots and sauté on medium heat until caramelized and sweet.",
      "Add ginger-garlic paste, chopped tomatoes, turmeric, and chilli powder; sauté until oil glazes the masala.",
      "Add freshly cracked black pepper and toss well for 1 minute.",
      "Gently place halved boiled eggs into the pan, yolk side up; spoon hot spiced onion masala over the eggs.",
      "Flip carefully and roast on low flame for 3 minutes until the eggs are crusted with the dark, peppery Chettinad masala."
    ]
  },
  {
    "id": "dim-kosha",
    "name": "Bengali Dim Kosha",
    "subCategory": "egg-seafood-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/dim-kosha.jpg",
    "description": "Rich Bengali preparation of golden-fried eggs and potatoes slow-braised in caramelized onions, ginger, and shahi garam masala.",
    "ingredients": [
      {
        "name": "Eggs",
        "amount": "4 (hard-boiled)"
      },
      {
        "name": "Potatoes",
        "amount": "2 medium (halved)"
      },
      {
        "name": "Onion",
        "amount": "2 large (finely sliced)"
      },
      {
        "name": "Tomatoes",
        "amount": "1 large (chopped)"
      },
      {
        "name": "Mustard Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Ginger",
        "amount": "1.5 tbsp paste"
      },
      {
        "name": "Bengali Garam Masala (Cardamom, Clove, Cinnamon)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Prick boiled eggs and halved potatoes; rub with turmeric and salt.",
      "Heat mustard oil till smoking; fry potatoes till golden, remove; then fry eggs till blistered yellow, remove.",
      "In the same oil, add bay leaf, whole cardamoms, and cloves; add sliced onions and sauté till dark golden brown.",
      "Add ginger paste, cumin powder, coriander powder, Kashmiri chilli, and chopped tomatoes; bhunno on medium heat until oil releases.",
      "Add fried potatoes, eggs, and 1 cup warm water; cover and simmer for 10 minutes until potatoes are fork-tender and gravy is thick.",
      "Finish with a spoonful of pure ghee and freshly ground Bengali garam masala."
    ]
  },
  {
    "id": "goan-fish-curry",
    "name": "Goan Fish Curry (Xitt Codi)",
    "subCategory": "egg-seafood-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/goan-fish-curry.jpg",
    "description": "Tangy and vibrant coastal Goan curry cooked with fresh kingfish or pomfret, grated coconut, Kashmiri chillies, and sour kokum.",
    "ingredients": [
      {
        "name": "Fish (Kingfish / Surmai / Pomfret)",
        "amount": "400g (steaks)"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1 cup"
      },
      {
        "name": "Kashmiri Dry Red Chillies",
        "amount": "6-8"
      },
      {
        "name": "Kokum Petals",
        "amount": "4-5 (soaked in 2 tbsp warm water)"
      },
      {
        "name": "Coriander Seeds",
        "amount": "1 tbsp"
      },
      {
        "name": "Cumin Seeds",
        "amount": "1 tsp"
      },
      {
        "name": "Garlic",
        "amount": "6 cloves"
      },
      {
        "name": "Green Chillies",
        "amount": "2 slit"
      }
    ],
    "steps": [
      "Grind grated coconut with dry red chillies, coriander seeds, cumin, garlic, turmeric, and water into a very fine, vibrant orange paste.",
      "Heat coconut oil in an earthenware pot; add slit green chillies and 1 sliced onion; sauté for 2 minutes.",
      "Pour in the ground Goan coconut masala paste and 1.5 cups water; bring to a lively boil.",
      "Add soaked kokum petals along with their soaking liquid to provide authentic Goan tartness.",
      "Gently slide in fresh fish steaks and season with salt; do not stir with a spoon (swirl the pot gently).",
      "Cook on medium heat for 6-8 minutes until fish is cooked through and tender; serve hot with steamed Goan red rice."
    ]
  },
  {
    "id": "malabar-fish-curry",
    "name": "Kerala Malabar Fish Curry",
    "subCategory": "egg-seafood-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/malabar-fish-curry.jpg",
    "description": "Spicy, ruby-red Kerala clay pot fish curry infused with smokey Kudampuli (Malabar tamarind), fenugreek, and coconut oil.",
    "ingredients": [
      {
        "name": "Fish (Seer fish / Sardines / Mackerel)",
        "amount": "400g (cut into pieces)"
      },
      {
        "name": "Kudampuli (Malabar Tamarind)",
        "amount": "3 pieces (soaked in 1/2 cup warm water)"
      },
      {
        "name": "Shallots",
        "amount": "10 (sliced)"
      },
      {
        "name": "Kashmiri Chilli Powder",
        "amount": "2 tbsp"
      },
      {
        "name": "Fenugreek Seeds (Methi)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Ginger & Garlic",
        "amount": "1.5 tbsp (crushed)"
      },
      {
        "name": "Coconut Oil",
        "amount": "2.5 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "3 sprigs"
      }
    ],
    "steps": [
      "Soak Kudampuli pieces in warm water for 15 minutes.",
      "Heat coconut oil in an earthenware clay pot (manchatti); add fenugreek seeds and fresh curry leaves until fragrant.",
      "Add sliced shallots, crushed ginger, garlic, and slit green chillies; sauté on medium heat until golden.",
      "Make a paste of Kashmiri chilli powder and turmeric with 2 tbsp water; add to pot and sauté on low flame for 1 minute.",
      "Pour in 1.5 cups water, the soaked Kudampuli with its dark water, and salt; bring to a rolling boil for 5 minutes.",
      "Slide in the fish pieces, swirl the pot, cover and cook on medium flame for 8-10 minutes. Drizzle fresh coconut oil and let rest (tastes best after a few hours!)."
    ]
  },
  {
    "id": "macher-jhol",
    "name": "Bengali Macher Jhol",
    "subCategory": "egg-seafood-curry",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/macher-jhol.jpg",
    "description": "Light, comforting, and fragrant Bengali fish stew cooked with Rohu or Katla, potatoes, nigella seeds (kalonji), and green chillies.",
    "ingredients": [
      {
        "name": "Fish (Rohu or Katla)",
        "amount": "400g (steaks)"
      },
      {
        "name": "Potatoes",
        "amount": "2 medium (cut into long wedges)"
      },
      {
        "name": "Kalonji (Nigella Seeds)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Green Chillies",
        "amount": "4 (slit)"
      },
      {
        "name": "Mustard Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Cumin Powder",
        "amount": "1.5 tsp"
      },
      {
        "name": "Turmeric Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp paste"
      }
    ],
    "steps": [
      "Marinate fish steaks with turmeric, salt, and a few drops of mustard oil for 10 minutes.",
      "Heat mustard oil in a kadai until smoking; shallow-fry fish steaks on medium-high heat for 2-3 minutes per side; remove.",
      "In the same oil, fry potato wedges until lightly golden; remove.",
      "Add kalonji (nigella seeds) and slit green chillies to the oil until aromatic.",
      "Mix ginger paste, cumin powder, turmeric, and 2 tbsp water; add to kadai and sauté for 1 minute.",
      "Add 2 cups hot water and the fried potatoes; boil until potatoes are almost cooked. Slide in the fish steaks, simmer gently for 5 minutes, and garnish with fresh coriander."
    ]
  },
  {
    "id": "meen-kulambu",
    "name": "Chettinad Meen Kulambu (Fish Curry)",
    "subCategory": "egg-seafood-curry",
    "prepTime": 30,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/meen-kulambu.jpg",
    "description": "Bold, fiery Tamil fish curry made with whole shallots, garlic, country tomatoes, and thick tamarind extract in gingelly oil.",
    "ingredients": [
      {
        "name": "Fish (Vanjaram / Seer Fish)",
        "amount": "450g"
      },
      {
        "name": "Shallots",
        "amount": "15 (halved)"
      },
      {
        "name": "Garlic",
        "amount": "12 cloves"
      },
      {
        "name": "Tomatoes",
        "amount": "2 ripe (crushed by hand)"
      },
      {
        "name": "Tamarind",
        "amount": "lemon-sized ball (extracted in 2 cups water)"
      },
      {
        "name": "Gingelly Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Fenugreek Seeds",
        "amount": "1/2 tsp"
      },
      {
        "name": "Chettinad Fish Masala",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Heat gingelly oil in an earthen chatty or deep kadai; splutter mustard seeds, fenugreek seeds, and curry leaves.",
      "Add shallots and whole garlic cloves; sauté on medium heat until golden brown.",
      "Add hand-crushed tomatoes and cook until soft and oil separates.",
      "Add Chettinad fish masala powder and turmeric; sauté quickly for 30 seconds on low flame.",
      "Pour in thick tamarind extract and salt; bring to a vigorous boil and simmer on medium heat for 12 minutes until gravy thickens and oil glistens on top.",
      "Gently place fish steaks into the simmering gravy; cover and cook on low heat for 7 minutes without stirring. Turn off heat and rest for 30 minutes."
    ]
  },
  {
    "id": "prawn-masala",
    "name": "Spicy Coastal Prawn Masala",
    "subCategory": "egg-seafood-curry",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/prawn-masala.jpg",
    "description": "Juicy plump prawns cooked in a rich, caramelized onion, tomato, and crushed black pepper coastal masala.",
    "ingredients": [
      {
        "name": "Prawns",
        "amount": "350g (shelled, deveined & cleaned)"
      },
      {
        "name": "Onion",
        "amount": "2 large (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (finely chopped)"
      },
      {
        "name": "Ginger",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Garlic",
        "amount": "1 tbsp paste"
      },
      {
        "name": "Coconut Oil",
        "amount": "2 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      },
      {
        "name": "Crushed Black Pepper",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Marinate cleaned prawns with turmeric, 1/2 tsp chilli powder, lemon juice, and salt for 10 minutes.",
      "Heat coconut oil in a wide pan; crackle fennel seeds, curry leaves, and green chillies.",
      "Add finely chopped onions and sauté on medium-high heat until deep golden brown.",
      "Add ginger-garlic paste and chopped tomatoes; cook until tomatoes break down completely into a rich masala paste.",
      "Add coriander powder, Kashmiri chilli, and 1/4 cup water; cook until oil begins to separate.",
      "Add marinated prawns and crushed black pepper; toss on high heat for exactly 4-5 minutes until prawns turn opaque and curl into a C-shape (do not overcook)."
    ]
  },
  {
    "id": "prawn-balchao",
    "name": "Goan Prawn Balchão",
    "subCategory": "egg-seafood-curry",
    "prepTime": 30,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/prawn-balchao.jpg",
    "description": "Traditional spicy, tangy, and sweet Goan pickled prawn pickle-curry cooked with toddy vinegar, dried red chillies, and cumin.",
    "ingredients": [
      {
        "name": "Prawns",
        "amount": "350g (peeled and deveined)"
      },
      {
        "name": "Goan Toddy Vinegar",
        "amount": "3 tbsp"
      },
      {
        "name": "Kashmiri Dry Chillies",
        "amount": "8"
      },
      {
        "name": "Onion",
        "amount": "3 medium (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (finely chopped)"
      },
      {
        "name": "Mustard Seeds & Cumin",
        "amount": "1 tsp each"
      },
      {
        "name": "Sugar",
        "amount": "1 tsp"
      },
      {
        "name": "Oil",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Soak dry red chillies, cumin seeds, mustard seeds, cloves, cinnamon, and garlic in vinegar for 20 minutes; blend into a smooth, fiery balchão paste.",
      "Lightly fry seasoned prawns in 1 tbsp oil for 2 minutes; remove and keep aside.",
      "In the remaining oil, sauté finely chopped onions on medium flame for 12 minutes until deeply caramelized.",
      "Add chopped tomatoes and cook until soft and oil separates.",
      "Add the ground vinegar balchão spice paste and sugar; cook on low flame for 8 minutes until the vinegar mellows and turns glossy.",
      "Add the seared prawns, toss to coat in the thick spicy-tangy glaze, and simmer for 3 minutes."
    ]
  },
  {
    "id": "crab-sukka",
    "name": "South Indian Crab Sukka (Nandu Roast)",
    "subCategory": "egg-seafood-curry",
    "prepTime": 30,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/crab-sukka.jpg",
    "description": "Sweet fresh crab claws and pieces tossed in a peppery, spicy Chettinad-style shallot, garlic, and roasted coconut masala.",
    "ingredients": [
      {
        "name": "Fresh Blue Crabs",
        "amount": "500g (cleaned, cracked claws & halved)"
      },
      {
        "name": "Shallots",
        "amount": "15 (finely chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "2 medium (chopped)"
      },
      {
        "name": "Black Pepper",
        "amount": "1.5 tbsp (freshly ground)"
      },
      {
        "name": "Fennel Seeds",
        "amount": "1 tbsp"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "3 tbsp (toasted)"
      },
      {
        "name": "Gingelly Oil",
        "amount": "2.5 tbsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs"
      }
    ],
    "steps": [
      "Clean crabs thoroughly, crack the large claws slightly with the back of a knife to allow masala to penetrate.",
      "Heat gingelly oil in a wide heavy pan; add fennel seeds, whole red chillies, and abundant curry leaves.",
      "Add chopped shallots, crushed garlic, and ginger paste; sauté until golden brown.",
      "Add chopped tomatoes, turmeric, coriander powder, and chilli powder; cook till pulpy.",
      "Add crab pieces and claws, season with salt, and toss vigorously on high heat for 3 minutes.",
      "Add 1/2 cup water, cover and cook on medium flame for 10 minutes until crab shells turn bright orange. Sprinkle freshly ground black pepper and toasted coconut; toss until dry and aromatic."
    ]
  }
];
