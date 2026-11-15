// Section 8: Chutneys, Pickles, Podis & Pachallu (40 recipes)
const CHUTNEY_RECIPES = [
  {
    "id": "gongura-pachadi",
    "name": "Traditional Gongura Pachadi",
    "subCategory": "pachadi",
    "prepTime": 25,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/gongura-pachadi.jpg",
    "description": "The crowned jewel of Andhra homestyle cuisine: tangy sorrel leaves slow-cooked in cold-pressed sesame oil, pounded with dry red chillies, garlic, and fenugreek.",
    "ingredients": [
      {
        "name": "Fresh Red Gongura Leaves",
        "amount": "4 cups (washed & completely dried)"
      },
      {
        "name": "Guntur Dry Red Chillies",
        "amount": "12-15"
      },
      {
        "name": "Garlic Cloves",
        "amount": "10-12 (crushed)"
      },
      {
        "name": "Coriander & Cumin Seeds",
        "amount": "1 tbsp each"
      },
      {
        "name": "Methi Seeds (Fenugreek)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Cold-Pressed Sesame / Groundnut Oil",
        "amount": "4 tbsp"
      },
      {
        "name": "Mustard Seeds & Hing",
        "amount": "1 tsp & 1/4 tsp"
      }
    ],
    "steps": [
      "Wash gongura leaves thoroughly and spread on a clean cotton towel until 100% moisture-free (water spoils the pachadi).",
      "Heat 1 tbsp oil in a pan; roast dry red chillies, coriander seeds, cumin seeds, and methi seeds on low flame until fragrant; cool and grind to a coarse aromatic powder with rock salt.",
      "In the same pan, heat 1 tbsp oil; add dried gongura leaves and cook on low heat for 5-6 minutes until leaves wilt, soften, and turn into a glossy dark-green pulp; cool.",
      "In a traditional stone mortar (rolu) or blender, pound the cooked gongura leaves coarsely with the spice powder and crushed raw garlic cloves.",
      "Heat 2 tbsp oil for tempering (popu/tadka); crackle mustard seeds, urad dal, chana dal, dry red chillies, curry leaves, and a generous pinch of hing.",
      "Pour sizzling popu over the gongura pachadi; mix well and serve with piping hot steamed rice and a lake of pure desi ghee."
    ]
  },
  {
    "id": "tomato-roti-pachadi",
    "name": "Village Tomato Roti Pachadi",
    "subCategory": "pachadi",
    "prepTime": 20,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/tomato-pickle.jpg",
    "description": "Rustic Andhra stone-ground chutney made with charred country tomatoes, green chillies, garlic, and fresh coriander leaves pounded coarsely.",
    "ingredients": [
      {
        "name": "Country (Nattu) Tomatoes",
        "amount": "4 ripe (chopped)"
      },
      {
        "name": "Green Chillies",
        "amount": "8-10 (slit)"
      },
      {
        "name": "Garlic",
        "amount": "6 cloves"
      },
      {
        "name": "Cumin Seeds (Jeera)",
        "amount": "1 tsp"
      },
      {
        "name": "Fresh Coriander Leaves",
        "amount": "1/2 cup"
      },
      {
        "name": "Tamarind",
        "amount": "small marble size"
      },
      {
        "name": "Groundnut Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Heat 1 tbsp oil in a cast-iron skillet; fry slit green chillies and cumin seeds until blistered; remove.",
      "In the same skillet, add chopped tomatoes, tamarind, and turmeric; cook covered on medium heat until tomatoes turn soft, mushy, and juices reduce.",
      "Add fresh coriander leaves, toss for 30 seconds, and turn off flame to cool.",
      "In a mortar and pestle, first crush fried green chillies, raw garlic, cumin, and rock salt into a coarse paste.",
      "Add the cooked tomatoes; gently crush and pound with the pestle so tomatoes remain pulpy and textured (never puree smooth).",
      "Finish with a fragrant tempering of mustard seeds, curry leaves, and hing in hot oil; serve with rice or hot dosa."
    ]
  },
  {
    "id": "allam-pachadi",
    "name": "Andhra Allam (Ginger) Pachadi",
    "subCategory": "pachadi",
    "prepTime": 20,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/allam-pachadi.jpg",
    "description": "Tangy, spicy, sweet Andhra culinary masterpiece made with fresh ginger, soaked tamarind pulp, jaggery, and dry red chillies.",
    "ingredients": [
      {
        "name": "Fresh Ginger (Allam)",
        "amount": "1/2 cup (peeled & chopped fine)"
      },
      {
        "name": "Jaggery (Gud)",
        "amount": "1/2 cup (grated)"
      },
      {
        "name": "Tamarind",
        "amount": "lemon-sized ball (soaked in warm water)"
      },
      {
        "name": "Guntur Dry Red Chillies",
        "amount": "10-12"
      },
      {
        "name": "Urad Dal & Chana Dal",
        "amount": "1 tbsp each"
      },
      {
        "name": "Mustard Oil / Sesame Oil",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Heat 1 tbsp oil; roast chana dal, urad dal, fenugreek seeds, and dry red chillies until golden; remove.",
      "Add chopped ginger to the hot pan and sauté on medium heat for 4 minutes until raw pungency subsides.",
      "Grind roasted lentils, red chillies, tamarind pulp, grated jaggery, salt, and sautéed ginger into a thick, shiny paste.",
      "Heat 2 tbsp oil in a tadka pan; crackle mustard seeds, hing, and fresh curry leaves.",
      "Pour hot tadka over the allam pachadi.",
      "Stir well and let rest for 1 hour for flavors to harmonize; the iconic pairing for hot Pesarattu and Upma."
    ]
  },
  {
    "id": "beerakaya-thokku-pachadi",
    "name": "Beerakaya Thokku (Ridge Gourd Peel) Pachadi",
    "subCategory": "pachadi",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/allam-pachadi.jpg",
    "description": "Zero-waste Andhra grandmother recipe using tender ridged skin of fresh gourds stir-fried with green chillies, sesame seeds, and tamarind.",
    "ingredients": [
      {
        "name": "Ridge Gourd Peel (Beerakaya Thokku)",
        "amount": "2 cups (washed & chopped)"
      },
      {
        "name": "Green Chillies",
        "amount": "6-8"
      },
      {
        "name": "White Sesame Seeds (Til)",
        "amount": "2 tbsp"
      },
      {
        "name": "Garlic & Tamarind",
        "amount": "5 cloves & marble size"
      },
      {
        "name": "Groundnut Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Dry roast sesame seeds in a pan until popping; set aside.",
      "Heat 1 tbsp oil; sauté ridge gourd peels with green chillies and garlic until peels turn tender and lose raw bite.",
      "Cool completely; grind roasted sesame seeds, tamarind, salt, and sautéed peels into a textured, coarse paste.",
      "Temper with mustard seeds, cumin, and curry leaves in hot oil; mix thoroughly and serve with hot rice and ghee."
    ]
  },
  {
    "id": "dondakaya-pachadi",
    "name": "Dondakaya (Ivy Gourd) Roti Pachadi",
    "subCategory": "pachadi",
    "prepTime": 20,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/allam-pachadi.jpg",
    "description": "Homestyle Andhra delicacy made with tender kundru (ivy gourd) fried in oil with red chillies, crushed with cumin and garlic.",
    "ingredients": [
      {
        "name": "Ivy Gourd (Dondakaya / Tindora)",
        "amount": "250g (sliced thin)"
      },
      {
        "name": "Dry Red Chillies",
        "amount": "8-10"
      },
      {
        "name": "Coriander Seeds & Jeera",
        "amount": "1 tbsp & 1 tsp"
      },
      {
        "name": "Tamarind & Garlic",
        "amount": "small piece & 4 cloves"
      },
      {
        "name": "Groundnut Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Roast coriander seeds, jeera, and dry red chillies in 1 tsp oil until aromatic; remove.",
      "In the same pan, fry sliced dondakaya pieces on medium flame until browned and tender.",
      "Grind roasted spices with tamarind, salt, and garlic.",
      "Add sautéed dondakaya and pulse just 2-3 times to crush coarsely, retaining crunchy gourd bits.",
      "Stir in hot mustard and curry leaf tempering."
    ]
  },
  {
    "id": "vankaya-pachadi",
    "name": "Charred Vankaya (Brinjal) Pachadi",
    "subCategory": "pachadi",
    "prepTime": 20,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/allam-pachadi.jpg",
    "description": "Smoky Andhra fire-roasted eggplant mash crushed in a stone mortar with green chillies, raw onions, tamarind, and fresh coriander.",
    "ingredients": [
      {
        "name": "Large Bharta Brinjal (Vankaya)",
        "amount": "1 large (oiled & fire-roasted)"
      },
      {
        "name": "Green Chillies",
        "amount": "5-6 (roasted on fire)"
      },
      {
        "name": "Onion",
        "amount": "1 small (finely diced raw)"
      },
      {
        "name": "Garlic & Cumin Seeds",
        "amount": "4 cloves & 1 tsp"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "1 tbsp"
      },
      {
        "name": "Sesame Oil",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Rub eggplant with oil, slit in 3 places to insert garlic cloves; roast directly over open gas flame turning frequently until charred black and collapsed soft inside.",
      "Peel charred skin under water and mash the smoky pulp with a fork.",
      "In a mortar, pound roasted green chillies, garlic, cumin, and salt.",
      "Add mashed brinjal and tamarind pulp; pound lightly together.",
      "Fold in crunchy raw diced onions and fresh coriander; temper with mustard and curry leaves."
    ]
  },
  {
    "id": "dosakaya-pachadi",
    "name": "Dosakaya (Yellow Cucumber) Pachadi",
    "subCategory": "pachadi",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/allam-pachadi.jpg",
    "description": "Crunchy, refreshing Andhra specialty made with diced yellow cucumber, green chillies, mustard seeds, and tamarind.",
    "ingredients": [
      {
        "name": "Yellow Cucumber (Dosakaya)",
        "amount": "1 medium (peeled & chopped fine)"
      },
      {
        "name": "Green Chillies",
        "amount": "6"
      },
      {
        "name": "Mustard Seeds (Avalu)",
        "amount": "1 tsp (ground raw)"
      },
      {
        "name": "Tamarind & Turmeric",
        "amount": "marble size & 1/4 tsp"
      },
      {
        "name": "Groundnut Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Taste dosakaya to ensure it is not bitter; peel and chop into tiny 5mm cubes; reserve 1/2 cup raw cubes.",
      "Sauté green chillies and remaining cucumber with tamarind in 1 tsp oil until softened.",
      "Grind sautéed mix with raw mustard seeds, turmeric, and rock salt into a coarse paste.",
      "Mix the ground pachadi with reserved crunchy raw cucumber cubes for authentic textural contrast.",
      "Temper with mustard seeds, urad dal, red chilli, and hing in hot oil."
    ]
  },
  {
    "id": "sorakaya-pachadi",
    "name": "Sorakaya (Bottle Gourd) Pachadi",
    "subCategory": "pachadi",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/allam-pachadi.jpg",
    "description": "Cooling Andhra farm-style pachadi made with tender bottle gourd cubes sautéed with green chillies, roasted peanuts, and tamarind.",
    "ingredients": [
      {
        "name": "Bottle Gourd (Sorakaya / Lauki)",
        "amount": "2 cups (cubed)"
      },
      {
        "name": "Roasted Peanuts",
        "amount": "2 tbsp"
      },
      {
        "name": "Green Chillies & Garlic",
        "amount": "5 chillies & 4 cloves"
      },
      {
        "name": "Cumin Seeds & Tamarind",
        "amount": "1 tsp & marble size"
      },
      {
        "name": "Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Heat 1 tbsp oil; sauté bottle gourd cubes and green chillies on medium flame until tender and lightly translucent.",
      "In a blender, grind roasted peanuts, garlic, cumin, tamarind, and salt.",
      "Add cooked bottle gourd; pulse 3-4 times to form a textured, thick pachadi.",
      "Pour hot tadka of mustard seeds, curry leaves, and hing over top."
    ]
  },
  {
    "id": "pudina-pachadi",
    "name": "Country Pudina (Mint) Pachadi",
    "subCategory": "pachadi",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/mint-chutney.jpg",
    "description": "Zesty, fragrant Andhra mint relish prepared with slow-roasted garden mint leaves, urad dal, tamarind, and dry red chillies.",
    "ingredients": [
      {
        "name": "Fresh Mint Leaves (Pudina)",
        "amount": "2 cups (packed)"
      },
      {
        "name": "Dry Red Chillies",
        "amount": "8"
      },
      {
        "name": "Urad Dal & Chana Dal",
        "amount": "1 tbsp each"
      },
      {
        "name": "Tamarind & Jaggery",
        "amount": "small lime size & 1 tsp"
      },
      {
        "name": "Sesame Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Roast urad dal, chana dal, coriander seeds, and dry red chillies in 1 tbsp sesame oil until golden.",
      "Add washed mint leaves to the hot pan; sauté for just 2 minutes until wilted (do not overcook to keep mint vibrant).",
      "Grind roasted lentils and red chillies with tamarind, jaggery, and salt into a powder.",
      "Add wilted mint leaves and pulse with minimal water into a thick, coarse relish.",
      "Temper with mustard seeds and curry leaves; pairs superbly with hot rice or idli."
    ]
  },
  {
    "id": "kothimeera-pachadi",
    "name": "Traditional Kothimeera (Coriander) Pachadi",
    "subCategory": "pachadi",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/coriander-chutney.jpg",
    "description": "Vibrant emerald green farm-style coriander chutney ground with fresh green chillies, garlic, tamarind, and roasted cumin.",
    "ingredients": [
      {
        "name": "Fresh Coriander Leaves with Stems",
        "amount": "2 big bunches (washed & chopped)"
      },
      {
        "name": "Green Chillies",
        "amount": "8-10"
      },
      {
        "name": "Garlic Cloves",
        "amount": "6"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Cumin Seeds",
        "amount": "1 tsp"
      },
      {
        "name": "Groundnut Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Sauté green chillies and garlic in 1 tbsp oil until blistered; remove.",
      "Add chopped coriander leaves and tender stems to the pan; sauté on high heat for 1 minute just until collapsed.",
      "Grind chillies, garlic, cumin, tamarind pulp, and salt into a paste.",
      "Add coriander and pulse coarsely.",
      "Stir in sizzling mustard, urad dal, and hing popu; keeps fresh for 5 days in the fridge."
    ]
  },
  {
    "id": "mamidikaya-mukkalu",
    "name": "Instant Mamidikaya Mukkala Pachadi",
    "subCategory": "pachadi",
    "prepTime": 15,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/avakaya.jpg",
    "description": "Crunchy instant Andhra raw mango pickle made with finely diced sour green mangoes tossed in mustard powder, chilli, and hot sesame oil.",
    "ingredients": [
      {
        "name": "Sour Raw Green Mango",
        "amount": "1 large (finely diced into tiny cubes)"
      },
      {
        "name": "Kashmiri / Guntur Red Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Mustard Powder (Rai Kuria)",
        "amount": "1 tbsp"
      },
      {
        "name": "Turmeric & Salt",
        "amount": "1/2 tsp & 1 tbsp"
      },
      {
        "name": "Cold-Pressed Sesame Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Mustard Seeds & Hing",
        "amount": "1 tsp & 1/4 tsp"
      }
    ],
    "steps": [
      "Wash and dry raw mango thoroughly; chop into tiny 3mm cubes with skin intact.",
      "In a glass bowl, mix mango cubes with red chilli powder, fine mustard powder, turmeric, and crystal salt.",
      "Heat sesame oil in a small ladle; crackle mustard seeds, a pinch of fenugreek powder, and generous hing.",
      "Pour sizzling hot oil directly over the spiced mango cubes; the aroma will release instantly.",
      "Toss with a dry spoon; ready to eat immediately or within 2 hours as mango absorbs spices."
    ]
  },
  {
    "id": "usirikaya-pachadi",
    "name": "Usirikaya (Amla Gooseberry) Pachadi",
    "subCategory": "pachadi",
    "prepTime": 20,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/lemon-pickle.jpg",
    "description": "Tangy and revitalizing immunity-rich chutney made with fresh Indian gooseberries, green chillies, garlic, and cumin.",
    "ingredients": [
      {
        "name": "Fresh Amla (Gooseberry)",
        "amount": "6-8 (deseeded & chopped)"
      },
      {
        "name": "Green Chillies",
        "amount": "6"
      },
      {
        "name": "Garlic Cloves & Cumin",
        "amount": "5 cloves & 1 tsp"
      },
      {
        "name": "Fresh Coriander",
        "amount": "1/4 cup"
      },
      {
        "name": "Sesame Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Heat 1 tbsp oil; sauté amla pieces and green chillies on low heat covered for 6-8 minutes until amla turns soft when pressed.",
      "Grind sautéed amla, green chillies, raw garlic, cumin seeds, fresh coriander, and rock salt into a coarse paste without water.",
      "Heat 1 tbsp oil; crackle mustard seeds, urad dal, curry leaves, and dry red chillies.",
      "Pour popu over the amla pachadi; serve with hot rice, ghee, or breakfast tiffins."
    ]
  },
  {
    "id": "coconut-chutney",
    "name": "Saravana Bhavan Style Coconut Chutney",
    "subCategory": "tiffin-chutney",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/coconut-chutney.jpg",
    "description": "Pristine white hotel-style coconut chutney blended with roasted gram, green chillies, ginger, and tempered with crackling mustard and curry leaves.",
    "ingredients": [
      {
        "name": "Fresh Grated Coconut",
        "amount": "1 cup (white portion only)"
      },
      {
        "name": "Roasted Gram Dal (Pottukadalai)",
        "amount": "2 tbsp"
      },
      {
        "name": "Green Chillies",
        "amount": "2-3"
      },
      {
        "name": "Fresh Ginger",
        "amount": "1/2 inch"
      },
      {
        "name": "Coconut Oil / Pure Cow Ghee",
        "amount": "1 tbsp"
      },
      {
        "name": "Mustard Seeds, Urad Dal & Curry Leaves",
        "amount": "for tadka"
      }
    ],
    "steps": [
      "Add fresh grated white coconut, roasted gram, green chillies, ginger, and salt into a blender jar.",
      "Grind with cold water in pulses to preserve the fresh snowy white color and texture.",
      "Transfer chutney to a serving bowl.",
      "Heat coconut oil or ghee in a tadka pan; crackle mustard seeds, split urad dal, a torn red chilli, and fresh curry leaves.",
      "Pour sizzling tadka over chutney and fold in."
    ]
  },
  {
    "id": "red-chutney",
    "name": "Udupi Kara / Red Chutney",
    "subCategory": "tiffin-chutney",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/red-chutney.jpg",
    "description": "Fiery, tangy red chutney made with Byadagi red chillies, sautéed onions, tomatoes, and garlic, smeared inside Mysore Masala Dosa.",
    "ingredients": [
      {
        "name": "Byadagi Dry Red Chillies",
        "amount": "8-10 (soaked in warm water)"
      },
      {
        "name": "Onion",
        "amount": "1 medium (chopped)"
      },
      {
        "name": "Tomatoes",
        "amount": "1 small"
      },
      {
        "name": "Garlic Cloves",
        "amount": "6-8"
      },
      {
        "name": "Roasted Gram Dal (Chana)",
        "amount": "2 tbsp"
      },
      {
        "name": "Tamarind & Jaggery",
        "amount": "marble size & 1/2 tsp"
      },
      {
        "name": "Sesame Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Heat 1 tbsp oil; sauté onions and garlic until translucent and fragrant.",
      "Add chopped tomatoes and cook until soft; remove and cool.",
      "In a blender, combine soaked red chillies, sautéed onion-garlic, roasted gram dal, tamarind, jaggery, and salt.",
      "Grind with minimal water into a silky, vibrant crimson paste.",
      "Heat 1 tbsp oil, crackle mustard seeds and curry leaves, and pour over chutney; use as dosa spread or tiffin dip."
    ]
  },
  {
    "id": "peanut-chutney",
    "name": "Highway Dhaba Palli (Peanut) Chutney",
    "subCategory": "tiffin-chutney",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/peanut-chutney.jpg",
    "description": "Creamy, nutty Andhra tiffin chutney made with slow-roasted peanuts, green chillies, garlic, and cumin seeds.",
    "ingredients": [
      {
        "name": "Raw Peanuts (Groundnuts)",
        "amount": "1 cup"
      },
      {
        "name": "Green Chillies",
        "amount": "4-5"
      },
      {
        "name": "Garlic Cloves",
        "amount": "4"
      },
      {
        "name": "Tamarind",
        "amount": "small marble piece"
      },
      {
        "name": "Cumin Seeds",
        "amount": "1/2 tsp"
      },
      {
        "name": "Oil & Tadka Spices",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Dry roast peanuts on medium-low flame until golden-brown, aromatic, and skins crackle; cool and rub off loose skins.",
      "Sauté green chillies and garlic in 1 tsp oil for 1 minute.",
      "Grind roasted peanuts, chillies, garlic, tamarind, cumin, salt, and water into a smooth, creamy pourable chutney.",
      "Pour into bowl; temper with hot mustard seeds, urad dal, and curry leaves."
    ]
  },
  {
    "id": "mint-coriander-chutney",
    "name": "Classic Street Green Chutney",
    "subCategory": "tiffin-chutney",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/mint-chutney.jpg",
    "description": "The quintessential Indian chaat and sandwich green chutney made with fresh mint, coriander, green chillies, lemon, and chaat masala.",
    "ingredients": [
      {
        "name": "Fresh Mint Leaves",
        "amount": "1 cup"
      },
      {
        "name": "Fresh Coriander Leaves",
        "amount": "2 cups (with tender stems)"
      },
      {
        "name": "Green Chillies",
        "amount": "4"
      },
      {
        "name": "Ginger & Garlic",
        "amount": "1 inch & 2 cloves"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "2 tbsp"
      },
      {
        "name": "Roasted Cumin Powder & Chaat Masala",
        "amount": "1 tsp each"
      },
      {
        "name": "Ice Cubes",
        "amount": "3-4 (retains electric green color)"
      }
    ],
    "steps": [
      "Wash coriander and mint leaves thoroughly in chilled water.",
      "Add greens, green chillies, ginger, garlic, lemon juice, roasted cumin powder, chaat masala, salt, and ice cubes into blender.",
      "Blend on high speed until completely smooth (ice cubes prevent blender heat from darkening the bright green chlorophyll).",
      "Store in a clean glass jar; ready to elevate samosas, pakoras, and rolls."
    ]
  },
  {
    "id": "tamarind-date-chutney",
    "name": "Saunth (Sweet Imli) Chutney",
    "subCategory": "tiffin-chutney",
    "prepTime": 20,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/tamarind-chutney.jpg",
    "description": "Glossy sweet, sour, and spiced halwai-style chutney made with soaked tamarind pulp, dates, jaggery, ginger powder (saunth), and roasted cumin.",
    "ingredients": [
      {
        "name": "Tamarind (Imli)",
        "amount": "1/2 cup (seedless)"
      },
      {
        "name": "Soft Seedless Dates (Khajur)",
        "amount": "1/2 cup"
      },
      {
        "name": "Jaggery (Gud)",
        "amount": "1 cup"
      },
      {
        "name": "Dry Ginger Powder (Saunth)",
        "amount": "1 tsp"
      },
      {
        "name": "Roasted Cumin & Fennel Powder",
        "amount": "1 tsp each"
      },
      {
        "name": "Kala Namak (Black Salt)",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Boil tamarind and dates in 2 cups water for 10 minutes until mushy; cool and blend into a smooth puree.",
      "Strain puree through a sieve to discard fibrous residue.",
      "Pour strained puree into a pan; add grated jaggery and simmer on medium flame for 8 minutes until jaggery dissolves and chutney turns glossy.",
      "Stir in saunth (ginger powder), roasted cumin powder, fennel powder, red chilli powder, black salt, and regular salt.",
      "Simmer for another 3 minutes until it coats the back of a spoon; cool completely and refrigerate for up to 3 months."
    ]
  },
  {
    "id": "garlic-chutney",
    "name": "Spicy Lasun (Garlic) Chutney",
    "subCategory": "tiffin-chutney",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/garlic-chutney.jpg",
    "description": "Zesty Maharashtrian and Rajasthani garlic paste blended with Kashmiri dry red chillies, cumin seeds, and lemon juice.",
    "ingredients": [
      {
        "name": "Garlic Cloves",
        "amount": "1 cup (peeled)"
      },
      {
        "name": "Kashmiri Dry Red Chillies",
        "amount": "10 (soaked in warm water)"
      },
      {
        "name": "Cumin Seeds",
        "amount": "1 tsp"
      },
      {
        "name": "Mustard Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Lemon Juice & Salt",
        "amount": "1 tbsp & to taste"
      }
    ],
    "steps": [
      "Grind peeled garlic cloves, soaked red chillies, cumin seeds, salt, and 2 tbsp water into a coarse red paste.",
      "Heat mustard oil in a pan until smoking; cool slightly.",
      "Add the garlic paste into hot oil; sauté on low flame for 5-6 minutes until oil separates and raw garlic aroma softens.",
      "Stir in lemon juice; cool and bottle up; the perfect condiment for Vada Pav, Dal Baati, and stuffed parathas."
    ]
  },
  {
    "id": "kara-chutney",
    "name": "Madurai Kara Chutney",
    "subCategory": "tiffin-chutney",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/red-chutney.jpg",
    "description": "Piquant, spicy Tamil Nadu roadside tiffin chutney made with shallots (sambar onions), tomatoes, garlic, and lots of red chillies.",
    "ingredients": [
      {
        "name": "Small Shallots (Sambar Onions)",
        "amount": "15 (peeled)"
      },
      {
        "name": "Country Tomatoes",
        "amount": "2 ripe (chopped)"
      },
      {
        "name": "Dry Red Chillies",
        "amount": "6-8"
      },
      {
        "name": "Garlic Cloves",
        "amount": "6"
      },
      {
        "name": "Sesame / Gingelly Oil",
        "amount": "3 tbsp"
      },
      {
        "name": "Tamarind & Salt",
        "amount": "small piece & to taste"
      }
    ],
    "steps": [
      "Heat 1 tbsp gingelly oil; sauté dry red chillies, shallots, and garlic until shallots turn soft and light brown.",
      "Add chopped tomatoes and tamarind; cook until tomatoes turn pulpy and release oil; cool.",
      "Grind to a smooth thick paste adding salt and minimal water.",
      "Heat remaining 2 tbsp gingelly oil; crackle mustard seeds, urad dal, and curry leaves.",
      "Pour hot oil over chutney; the generous sesame oil balances the sharp heat."
    ]
  },
  {
    "id": "pottukadalai-chutney",
    "name": "Roasted Gram Dal Chutney",
    "subCategory": "tiffin-chutney",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/coconut-chutney.jpg",
    "description": "Quick low-calorie coconut-free tiffin chutney made with roasted chana dal (putnala pappu), green chillies, garlic, and fresh lemon.",
    "ingredients": [
      {
        "name": "Roasted Gram Dal (Putnalu / Dalia)",
        "amount": "1 cup"
      },
      {
        "name": "Green Chillies",
        "amount": "3-4"
      },
      {
        "name": "Garlic Cloves & Ginger",
        "amount": "3 cloves & 1/2 inch"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "1 tbsp"
      },
      {
        "name": "Oil & Mustard Popu",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "In a blender, combine roasted gram dal, green chillies, garlic, ginger, and salt.",
      "Blend with water into a smooth pourable chutney.",
      "Stir in fresh lemon juice.",
      "Temper with mustard seeds, cumin seeds, urad dal, and fresh curry leaves in hot oil; serve with hot Idlis."
    ]
  },
  {
    "id": "onion-chutney",
    "name": "Caramelized Onion Chutney",
    "subCategory": "tiffin-chutney",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/red-chutney.jpg",
    "description": "Sweet and savory South Indian tiffin accompaniment made from deeply caramelized red onions, tamarind, and roasted lentils.",
    "ingredients": [
      {
        "name": "Red Onions",
        "amount": "3 large (sliced)"
      },
      {
        "name": "Urad Dal & Chana Dal",
        "amount": "1 tbsp each"
      },
      {
        "name": "Dry Red Chillies",
        "amount": "6"
      },
      {
        "name": "Tamarind & Jaggery",
        "amount": "marble size & 1/2 tsp"
      },
      {
        "name": "Sesame Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Heat 1 tbsp oil; fry urad dal, chana dal, and red chillies until golden; remove.",
      "Add sliced onions to the pan; sauté on medium flame until deep golden-brown and caramelized.",
      "Cool completely; grind roasted lentils, tamarind, jaggery, salt, and caramelized onions into a thick textured chutney.",
      "Pour crackling mustard and curry leaf tempering over top."
    ]
  },
  {
    "id": "coriander-mint-hotel",
    "name": "Hotel Style Green Coconut Chutney",
    "subCategory": "tiffin-chutney",
    "prepTime": 10,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/coriander-chutney.jpg",
    "description": "The iconic light-green chutney served across Bangalore and Chennai tiffin rooms with piping hot Medu Vadas and Rava Dosas.",
    "ingredients": [
      {
        "name": "Fresh Grated Coconut",
        "amount": "1 cup"
      },
      {
        "name": "Fresh Coriander & Mint",
        "amount": "1/2 cup coriander + 2 tbsp mint"
      },
      {
        "name": "Roasted Gram Dal",
        "amount": "2 tbsp"
      },
      {
        "name": "Green Chillies & Ginger",
        "amount": "3 chillies & 1/2 inch"
      },
      {
        "name": "Coconut Oil & Mustard Tadka",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Blend grated coconut, coriander, mint, roasted gram, green chillies, ginger, salt, and water into a fine paste.",
      "Heat coconut oil; crackle mustard seeds, urad dal, and fresh curry leaves.",
      "Stir hot tadka into the chutney; best enjoyed fresh within hours."
    ]
  },
  {
    "id": "avakaya",
    "name": "Authentic Andhra Avakaya",
    "subCategory": "pickle",
    "prepTime": 30,
    "servings": 10,
    "veg": true,
    "image": "images/dishes/avakaya.jpg",
    "description": "The emperor of Indian pickles: hard sour raw green mango cubes cut with hard kernel intact, bathed in pungent mustard powder, red chilli, garlic, and pure sesame oil.",
    "ingredients": [
      {
        "name": "Raw Green Mangoes (Totapuri / Aseel)",
        "amount": "1 kg (cut with stone kernel intact)"
      },
      {
        "name": "Guntur Red Chilli Powder",
        "amount": "1 cup (sun-dried & ground fine)"
      },
      {
        "name": "Mustard Powder (Avala Pindi)",
        "amount": "1 cup (fresh ground raw mustard)"
      },
      {
        "name": "Crystal Salt (Kallu Uppu)",
        "amount": "3/4 cup (powdered)"
      },
      {
        "name": "Fenugreek Seeds (Methi)",
        "amount": "2 tbsp (raw whole)"
      },
      {
        "name": "Garlic Cloves",
        "amount": "1 cup (peeled whole)"
      },
      {
        "name": "Pure Cold-Pressed Sesame / Til Oil (Nuvvula Nune)",
        "amount": "2.5 cups"
      }
    ],
    "steps": [
      "Wipe green mangoes bone-dry; chop into large 1.5-inch cubes ensuring each piece has a portion of the hard inner woody shell (tenka); clean inner white membrane with a dry cloth.",
      "In a large porcelain or glass bowl, combine red chilli powder, raw mustard seed powder, ground crystal salt, whole methi seeds, and peeled garlic cloves.",
      "Dip mango pieces in sesame oil, toss in the dry spice mixture so every cube is heavily encrusted, and transfer into an earthen jar (jaadi).",
      "Pour remaining sesame oil over the top until everything is submerged; cover jar mouth with clean white muslin cloth and tie securely.",
      "On the 3rd day, open the jar, mix thoroughly with a clean dry wooden ladle from bottom to top; the mangoes will release juices and oil will float on top.",
      "Aged for 1 week before savoring with steaming hot rice and fresh melted ghee."
    ]
  },
  {
    "id": "maagai",
    "name": "Sun-Dried Maagai Pachadi",
    "subCategory": "pickle",
    "prepTime": 45,
    "servings": 10,
    "veg": true,
    "image": "images/dishes/avakaya.jpg",
    "description": "Traditional Andhra sun-cured raw mango pickle made with peeled mango strips marinated in brine, sun-dried, and seasoned with roasted fenugreek and mustard.",
    "ingredients": [
      {
        "name": "Sour Raw Mangoes",
        "amount": "1 kg (peeled & sliced into thin strips)"
      },
      {
        "name": "Turmeric & Salt",
        "amount": "1 tbsp & 3/4 cup"
      },
      {
        "name": "Red Chilli Powder",
        "amount": "3/4 cup"
      },
      {
        "name": "Fenugreek Powder (Roasted Methi)",
        "amount": "3 tbsp"
      },
      {
        "name": "Mustard Powder",
        "amount": "3 tbsp"
      },
      {
        "name": "Sesame Oil",
        "amount": "1.5 cups (tempered with hing)"
      }
    ],
    "steps": [
      "Peel raw mangoes and cut into long finger-sized slices.",
      "Toss with turmeric and salt in a glass jar; let sit for 3 days to release sour mango brine (oora).",
      "Squeeze mango pieces out of brine; spread pieces on plastic sheets and dry in hot sun for 2 days until semi-dry and leather-pliable.",
      "Mix red chilli powder, roasted methi powder, and mustard powder into the reserved sour mango brine.",
      "Add sun-dried mango slices back into the spiced brine.",
      "Pour heated and cooled sesame oil tempered with mustard and generous hing; stir well and let mature."
    ]
  },
  {
    "id": "tomato-nilva-pachadi",
    "name": "Andhra Tomato Nilva (Preserved) Pachadi",
    "subCategory": "pickle",
    "prepTime": 40,
    "servings": 10,
    "veg": true,
    "image": "images/dishes/tomato-pickle.jpg",
    "description": "Year-round preserved Andhra pickle made with country tomatoes simmered in tamarind pulp, sun-cured, and pounded with garlic and red chilli.",
    "ingredients": [
      {
        "name": "Ripe Country Tomatoes",
        "amount": "1 kg (washed & wiped bone dry)"
      },
      {
        "name": "Tamarind",
        "amount": "150g (cleaned & deseeded)"
      },
      {
        "name": "Red Chilli Powder",
        "amount": "3/4 cup"
      },
      {
        "name": "Mustard & Methi Powder",
        "amount": "2 tbsp each"
      },
      {
        "name": "Garlic",
        "amount": "15 cloves (crushed)"
      },
      {
        "name": "Sesame Oil",
        "amount": "1.5 cups"
      }
    ],
    "steps": [
      "Chop dry tomatoes into quarters; cook in a wide heavy vessel with turmeric and salt until juices bubble.",
      "Add cleaned tamarind into the hot bubbling tomatoes; cover and cook on medium flame until tomatoes turn mushy and water evaporates completely.",
      "Spread cooked tomato-tamarind pulp on wide plates and dry in hot sun for 1 day.",
      "Grind the dried pulp with red chilli powder, roasted mustard powder, roasted methi powder, and crushed garlic.",
      "Heat sesame oil; add mustard seeds, dry red chillies, and curry leaves; let oil cool down to lukewarm.",
      "Pour oil over tomato pickle, mix thoroughly, and pack into glass jars."
    ]
  },
  {
    "id": "nimma-uragaya",
    "name": "Spiced Andhra Nimma (Lemon) Uragaya",
    "subCategory": "pickle",
    "prepTime": 25,
    "servings": 10,
    "veg": true,
    "image": "images/dishes/lemon-pickle.jpg",
    "description": "Piquant, tangy lemon pickle cured in its own squeezed juice with rock salt, fiery red chilli powder, and roasted fenugreek powder.",
    "ingredients": [
      {
        "name": "Thin-Skinned Juicy Yellow Lemons",
        "amount": "15 (10 chopped + 5 juiced)"
      },
      {
        "name": "Crystal Salt (Kallu Uppu)",
        "amount": "1/2 cup"
      },
      {
        "name": "Turmeric Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Red Chilli Powder",
        "amount": "1/2 cup"
      },
      {
        "name": "Roasted Fenugreek Powder (Methi)",
        "amount": "2 tbsp"
      },
      {
        "name": "Sesame Oil",
        "amount": "1/2 cup"
      }
    ],
    "steps": [
      "Wash lemons thoroughly and dry completely with a clean towel.",
      "Chop 10 lemons into 8 wedges each; squeeze the juice of remaining 5 lemons over the wedges.",
      "Add crystal salt and turmeric; toss well in a sterilized ceramic jar.",
      "Keep jar in a warm sunny spot for 7-10 days, shaking daily until lemon rinds turn tender and lose bitterness.",
      "Add red chilli powder and roasted methi powder; mix well.",
      "Heat sesame oil, add hing, cool completely, and pour over the pickle; stores well for over a year."
    ]
  },
  {
    "id": "pandu-mirapakaya",
    "name": "Pandu Mirapakaya (Red Chilli) Pachadi",
    "subCategory": "pickle",
    "prepTime": 30,
    "servings": 10,
    "veg": true,
    "image": "images/dishes/red-chutney.jpg",
    "description": "Fiery winter Andhra pickle made with fresh, plump ripe red chillies (pandu mirapa) ground with tamarind, garlic, and fenugreek.",
    "ingredients": [
      {
        "name": "Fresh Ripe Red Chillies (Pandu Mirchi)",
        "amount": "500g (washed & completely dried)"
      },
      {
        "name": "Tamarind",
        "amount": "100g (cleaned & deseeded)"
      },
      {
        "name": "Rock Salt",
        "amount": "100g"
      },
      {
        "name": "Roasted Fenugreek Powder",
        "amount": "2 tbsp"
      },
      {
        "name": "Garlic Cloves",
        "amount": "1 cup"
      },
      {
        "name": "Sesame Oil",
        "amount": "1 cup"
      }
    ],
    "steps": [
      "Remove stems from completely dry red chillies; cut into halves.",
      "In a stone grinder or food processor, coarsely crush red chillies with tamarind and rock salt.",
      "Transfer to an airtight glass jar and let cure for 3 days.",
      "On day 4, add peeled garlic cloves and roasted fenugreek powder; grind again to a textured, shiny paste.",
      "Temper with plenty of sesame oil, mustard seeds, and hing; mix well and store."
    ]
  },
  {
    "id": "usirikaya-uragaya",
    "name": "Whole Usirikaya (Amla) Uragaya",
    "subCategory": "pickle",
    "prepTime": 35,
    "servings": 10,
    "veg": true,
    "image": "images/dishes/lemon-pickle.jpg",
    "description": "Sacred winter delicacy: whole gooseberries shallow-fried in sesame oil until soft, tossed in raw mustard and red chilli spice mix.",
    "ingredients": [
      {
        "name": "Fresh Whole Amla (Gooseberry)",
        "amount": "500g"
      },
      {
        "name": "Cold-Pressed Sesame Oil",
        "amount": "1.5 cups"
      },
      {
        "name": "Mustard Powder",
        "amount": "1/2 cup"
      },
      {
        "name": "Red Chilli Powder",
        "amount": "1/2 cup"
      },
      {
        "name": "Salt",
        "amount": "1/2 cup"
      },
      {
        "name": "Tamarind Paste",
        "amount": "1/4 cup (thick cooked)"
      }
    ],
    "steps": [
      "Wash and wipe amlas bone-dry; poke each gooseberry 2-3 times with a toothpick.",
      "Heat sesame oil in a kadai; slide whole amlas in and fry on low-medium flame for 10-12 minutes until tender and segment lines begin to split.",
      "Remove amlas; let oil cool down to lukewarm.",
      "In a bowl, mix mustard powder, chilli powder, salt, and cooked tamarind paste.",
      "Add fried whole amlas and pour the warm sesame oil over them; mix thoroughly.",
      "Allow to marinate for 5 days so gooseberries absorb the pungent spices."
    ]
  },
  {
    "id": "punjabi-mango-pickle",
    "name": "Punjabi Kache Aam ka Achar",
    "subCategory": "pickle",
    "prepTime": 30,
    "servings": 10,
    "veg": true,
    "image": "images/dishes/avakaya.jpg",
    "description": "North Indian mustard oil mango pickle flavored with coarse fennel seeds (saunf), nigella seeds (kalonji), and fenugreek.",
    "ingredients": [
      {
        "name": "Raw Green Mangoes",
        "amount": "1 kg (chopped into cubes)"
      },
      {
        "name": "Mustard Oil",
        "amount": "2 cups (heated to smoking point & cooled)"
      },
      {
        "name": "Fennel Seeds (Saunf)",
        "amount": "3 tbsp (coarsely crushed)"
      },
      {
        "name": "Kalonji (Nigella Seeds)",
        "amount": "1 tbsp"
      },
      {
        "name": "Methi Seeds & Rai Kuria",
        "amount": "2 tbsp each"
      },
      {
        "name": "Red Chilli & Turmeric",
        "amount": "1/2 cup & 2 tbsp"
      },
      {
        "name": "Salt",
        "amount": "3/4 cup"
      }
    ],
    "steps": [
      "Toss mango cubes with turmeric and salt; let sit overnight; drain brine and dry pieces in the sun for 4 hours.",
      "Heat mustard oil to smoking point; turn off heat and let cool to room temperature.",
      "Mix crushed fennel seeds, kalonji, methi seeds, yellow mustard seeds, red chilli powder, and salt.",
      "Coat dried mango cubes in spice mixture, pack tightly in glass jars, and pour mustard oil over them.",
      "Place in bright sunlight for 10-12 days until mangoes turn soft and tender."
    ]
  },
  {
    "id": "hari-mirch-achar",
    "name": "Instant Banarasi Hari Mirch Achar",
    "subCategory": "pickle",
    "prepTime": 15,
    "servings": 8,
    "veg": true,
    "image": "images/dishes/allam-pachadi.jpg",
    "description": "Tangy and fiery green chilli pickle tossed with split mustard seeds (rai kuria), amchur, fennel, and raw mustard oil.",
    "ingredients": [
      {
        "name": "Fresh Green Chillies",
        "amount": "250g (slit lengthwise)"
      },
      {
        "name": "Yellow Mustard Seeds (Rai Kuria)",
        "amount": "3 tbsp (crushed)"
      },
      {
        "name": "Fennel Seeds (Saunf)",
        "amount": "2 tbsp (coarsely powdered)"
      },
      {
        "name": "Amchur (Dry Mango Powder)",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Mustard Oil",
        "amount": "1/4 cup"
      },
      {
        "name": "Turmeric, Hing & Salt",
        "amount": "to taste"
      }
    ],
    "steps": [
      "Wash green chillies, wipe completely dry, and slit lengthwise down the center.",
      "In a bowl, mix rai kuria, crushed fennel, amchur, turmeric, hing, and salt.",
      "Pour raw mustard oil into the spices and mix into a crumbly masala.",
      "Stuff masala into the slit chillies and transfer to a dry glass jar.",
      "Shake well and let sit in sunlight for 2-3 days before devouring."
    ]
  },
  {
    "id": "ginger-garlic-pickle",
    "name": "Spiced Ginger Garlic Pickle",
    "subCategory": "pickle",
    "prepTime": 25,
    "servings": 8,
    "veg": true,
    "image": "images/dishes/allam-pachadi.jpg",
    "description": "Warming, zesty pickle loaded with fresh sliced ginger juliennes, whole garlic pods, lemon juice, and red chilli powder.",
    "ingredients": [
      {
        "name": "Fresh Ginger",
        "amount": "150g (peeled & julienned)"
      },
      {
        "name": "Garlic Cloves",
        "amount": "150g (peeled whole)"
      },
      {
        "name": "Fresh Lemon Juice",
        "amount": "1/2 cup"
      },
      {
        "name": "Red Chilli Powder",
        "amount": "3 tbsp"
      },
      {
        "name": "Mustard Seeds & Methi Powder",
        "amount": "1 tbsp & 1 tsp"
      },
      {
        "name": "Sesame Oil",
        "amount": "1/2 cup"
      }
    ],
    "steps": [
      "Combine ginger juliennes, garlic cloves, lemon juice, turmeric, and salt; let marinate for 2 days until garlic softens.",
      "Add red chilli powder, roasted mustard powder, and roasted methi powder.",
      "Heat sesame oil with a pinch of hing; cool completely and pour over the pickle.",
      "Mix well and store; wonderful for digestion and winter meals."
    ]
  },
  {
    "id": "allam-nilva-pachadi",
    "name": "Preserved Allam (Ginger) Nilva Pachadi",
    "subCategory": "pickle",
    "prepTime": 35,
    "servings": 10,
    "veg": true,
    "image": "images/dishes/allam-pachadi.jpg",
    "description": "Long-life Andhra ginger preserve made by cooking pounded fresh ginger with tamarind extract, jaggery, and red chilli in sesame oil.",
    "ingredients": [
      {
        "name": "Fresh Ginger",
        "amount": "250g (peeled & chopped)"
      },
      {
        "name": "Tamarind",
        "amount": "100g (soaked & extracted thick)"
      },
      {
        "name": "Jaggery (Gud)",
        "amount": "200g (grated)"
      },
      {
        "name": "Red Chilli Powder",
        "amount": "1/2 cup"
      },
      {
        "name": "Salt",
        "amount": "1/2 cup"
      },
      {
        "name": "Sesame Oil",
        "amount": "1 cup"
      }
    ],
    "steps": [
      "Dry fresh ginger thoroughly; grind coarsely in a food processor.",
      "Boil thick tamarind paste with salt for 5 minutes; add grated jaggery and simmer until thick.",
      "Mix ground ginger, red chilli powder, and hot tamarind-jaggery paste together.",
      "Heat sesame oil; crackle mustard seeds, urad dal, and curry leaves; cool slightly and pour over the pachadi.",
      "Stir well and let age for 1 week; stays fresh for up to 1 year."
    ]
  },
  {
    "id": "idli-podi",
    "name": "Gunpowder (Idli Milagai Podi)",
    "subCategory": "podi",
    "prepTime": 15,
    "servings": 10,
    "veg": true,
    "image": "images/dishes/idli-podi.jpg",
    "description": "Crunchy, fiery South Indian gunpowder roasted slowly with urad dal, chana dal, sesame seeds, red chillies, and hing, paired with pure ghee.",
    "ingredients": [
      {
        "name": "White Urad Dal",
        "amount": "1/2 cup"
      },
      {
        "name": "Chana Dal",
        "amount": "1/2 cup"
      },
      {
        "name": "Dry Red Chillies (Guntur & Byadagi)",
        "amount": "15-20"
      },
      {
        "name": "White Sesame Seeds (Til)",
        "amount": "2 tbsp"
      },
      {
        "name": "Asafoetida (Compounded Hing)",
        "amount": "1/2 tsp"
      },
      {
        "name": "Curry Leaves",
        "amount": "2 sprigs (dried)"
      },
      {
        "name": "Sesame Oil",
        "amount": "1 tsp (for roasting)"
      }
    ],
    "steps": [
      "Dry roast chana dal on low heat for 5 minutes until golden and nutty; remove.",
      "Dry roast urad dal until fragrant and light brown; remove.",
      "In 1 tsp sesame oil, roast dry red chillies, curry leaves, and solid hing until chillies puff; add sesame seeds at the very end until popping.",
      "Cool all roasted ingredients completely to room temperature.",
      "Grind in a dry spice blender with crystal salt to a semi-coarse, gritty texture (never powder fine; the crunch is essential).",
      "Serve by mixing a spoonful of gunpowder with piping hot melted desi cow ghee or cold-pressed sesame oil over soft idlis."
    ]
  },
  {
    "id": "kandi-podi",
    "name": "Andhra Paruppu / Kandi Podi",
    "subCategory": "podi",
    "prepTime": 15,
    "servings": 10,
    "veg": true,
    "image": "images/dishes/idli-podi.jpg",
    "description": "Classic Andhra comfort rice powder made with slow-roasted toor dal, moong dal, roasted gram, cumin, and black pepper.",
    "ingredients": [
      {
        "name": "Toor Dal (Kandi Pappu)",
        "amount": "1/2 cup"
      },
      {
        "name": "Yellow Moong Dal",
        "amount": "1/4 cup"
      },
      {
        "name": "Chana Dal",
        "amount": "1/4 cup"
      },
      {
        "name": "Dry Red Chillies",
        "amount": "8-10"
      },
      {
        "name": "Black Peppercorns & Cumin Seeds",
        "amount": "1 tsp each"
      },
      {
        "name": "Hing & Salt",
        "amount": "1/2 tsp & 1 tsp"
      }
    ],
    "steps": [
      "Dry roast toor dal and moong dal together on medium-low flame until deep golden and aromatic.",
      "Roast chana dal separately until toasted.",
      "Roast red chillies, peppercorns, cumin seeds, and hing until fragrant.",
      "Cool everything completely; grind to a fine, slightly granular powder with rock salt.",
      "Sprinkle generously over hot steamed rice, douse with desi cow ghee, and enjoy."
    ]
  },
  {
    "id": "karivepaku-podi",
    "name": "Curry Leaf (Karivepaku) Podi",
    "subCategory": "podi",
    "prepTime": 15,
    "servings": 10,
    "veg": true,
    "image": "images/dishes/idli-podi.jpg",
    "description": "Nutrient-dense dark-green spiced powder packed with crispy roasted fresh curry leaves, coriander seeds, lentils, and tamarind.",
    "ingredients": [
      {
        "name": "Fresh Curry Leaves (Karivepaku)",
        "amount": "3 cups (washed & bone dry)"
      },
      {
        "name": "Urad Dal & Chana Dal",
        "amount": "2 tbsp each"
      },
      {
        "name": "Coriander Seeds & Cumin",
        "amount": "1 tbsp & 1 tsp"
      },
      {
        "name": "Dry Red Chillies & Garlic",
        "amount": "8 chillies & 5 cloves"
      },
      {
        "name": "Tamarind & Salt",
        "amount": "marble size & to taste"
      }
    ],
    "steps": [
      "Dry roast washed curry leaves on low flame until crisp and brittle to the touch (do not burn).",
      "Roast lentils, coriander seeds, cumin, red chillies, and garlic in 1/2 tsp oil until golden.",
      "Cool completely; grind spices, tamarind, and salt first into a coarse powder.",
      "Add crispy curry leaves and pulse into a fragrant green powder; store in an airtight jar."
    ]
  },
  {
    "id": "nalla-karam-podi",
    "name": "Spicy Nalla Karam Podi",
    "subCategory": "podi",
    "prepTime": 15,
    "servings": 10,
    "veg": true,
    "image": "images/dishes/idli-podi.jpg",
    "description": "Fiery dark-tinted Andhra spice powder made with dry red chillies, coriander seeds, garlic pods, and tamarind, famous on street-cart dosas.",
    "ingredients": [
      {
        "name": "Dry Red Chillies",
        "amount": "25-30"
      },
      {
        "name": "Whole Coriander Seeds (Dhania)",
        "amount": "1/2 cup"
      },
      {
        "name": "Cumin Seeds",
        "amount": "2 tbsp"
      },
      {
        "name": "Garlic Cloves with Skin",
        "amount": "1 whole bulb"
      },
      {
        "name": "Tamarind",
        "amount": "small lime size"
      },
      {
        "name": "Oil & Salt",
        "amount": "1 tsp & 1 tbsp"
      }
    ],
    "steps": [
      "Roast coriander seeds, cumin seeds, and red chillies in 1 tsp oil on low flame until deep reddish-brown.",
      "Cool and grind with tamarind and salt into a coarse powder.",
      "Add unpeeled garlic cloves and pulse 3-4 times so garlic is crushed and moistens the spice blend into a dark, coarse powder.",
      "Dust over ghee roast dosas or fluffy idlis."
    ]
  },
  {
    "id": "putnala-podi",
    "name": "Putnala (Roasted Gram) Podi",
    "subCategory": "podi",
    "prepTime": 10,
    "servings": 8,
    "veg": true,
    "image": "images/dishes/idli-podi.jpg",
    "description": "Instant 5-minute Andhra powder made with roasted chana dal, dry coconut, garlic, and red chilli powder for busy mornings.",
    "ingredients": [
      {
        "name": "Roasted Gram Dal (Putnalu / Dalia)",
        "amount": "1 cup"
      },
      {
        "name": "Dry Coconut (Kobbari)",
        "amount": "1/4 cup (sliced thin)"
      },
      {
        "name": "Red Chilli Powder",
        "amount": "1.5 tbsp"
      },
      {
        "name": "Garlic Cloves",
        "amount": "6-8"
      },
      {
        "name": "Cumin Seeds & Salt",
        "amount": "1 tsp each"
      }
    ],
    "steps": [
      "Add roasted gram dal, dry coconut pieces, cumin seeds, red chilli powder, and salt to a blender jar.",
      "Grind to a fine powder.",
      "Add peeled garlic cloves and pulse 2-3 times just to incorporate garlic aroma.",
      "Mix with hot rice and ghee or sprinkle inside dosas and sandwiches."
    ]
  },
  {
    "id": "verusenaga-podi",
    "name": "Peanut (Verusenaga) Karam Podi",
    "subCategory": "podi",
    "prepTime": 15,
    "servings": 10,
    "veg": true,
    "image": "images/dishes/idli-podi.jpg",
    "description": "Rich, nutty dry peanut spice powder blended with dry red chillies, garlic cloves, and cumin seeds.",
    "ingredients": [
      {
        "name": "Raw Peanuts",
        "amount": "1 cup"
      },
      {
        "name": "Dry Red Chillies",
        "amount": "10-12"
      },
      {
        "name": "Cumin Seeds & Garlic",
        "amount": "1 tbsp & 8 cloves"
      },
      {
        "name": "Salt",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Dry roast peanuts on medium-low flame until golden and crunchy; remove skins.",
      "Roast dry red chillies and cumin seeds in 1/2 tsp oil until aromatic.",
      "Cool completely; grind red chillies, cumin, garlic, and salt first into a powder.",
      "Add roasted peanuts and pulse in short bursts until coarsely ground (do not over-grind or peanuts release oil into peanut butter)."
    ]
  },
  {
    "id": "kakarakaya-podi",
    "name": "Crispy Kakarakaya (Bitter Gourd) Podi",
    "subCategory": "podi",
    "prepTime": 25,
    "servings": 8,
    "veg": true,
    "image": "images/dishes/idli-podi.jpg",
    "description": "Crispy, caramelized bitter gourd rounds deep-fried and ground with roasted lentils, garlic, and dry red chillies — converts all bitter gourd skeptics!",
    "ingredients": [
      {
        "name": "Bitter Gourd (Kakarakaya / Karela)",
        "amount": "2 medium (sliced into paper-thin rounds)"
      },
      {
        "name": "Roasted Gram Dal (Putnalu)",
        "amount": "1/2 cup"
      },
      {
        "name": "Garlic Cloves & Dry Red Chillies",
        "amount": "8 cloves & 6 chillies"
      },
      {
        "name": "Oil",
        "amount": "for deep/shallow frying"
      },
      {
        "name": "Salt & Cumin Seeds",
        "amount": "to taste & 1 tsp"
      }
    ],
    "steps": [
      "Slice bitter gourds paper-thin using a mandoline; toss with a pinch of salt and squeeze out excess bitter water.",
      "Deep fry or shallow fry slices in hot oil on medium flame until dark golden-brown and crisp like potato chips; drain.",
      "In a blender, grind roasted gram dal, cumin, red chillies, garlic, and salt into a coarse powder.",
      "Add the fried crispy bitter gourd chips and pulse 3-4 times into a crunchy textured podi.",
      "Mix with hot rice and ghee for a medicinal yet delicious Andhra meal."
    ]
  },
  {
    "id": "sambar-podi",
    "name": "Traditional Udupi Sambar Podi",
    "subCategory": "podi",
    "prepTime": 20,
    "servings": 15,
    "veg": true,
    "image": "images/dishes/idli-podi.jpg",
    "description": "Authentic heritage spice blend ground with coriander seeds, fenugreek, cumin, black pepper, chana dal, and Byadagi chillies.",
    "ingredients": [
      {
        "name": "Coriander Seeds (Dhania)",
        "amount": "1 cup"
      },
      {
        "name": "Byadagi Dry Red Chillies",
        "amount": "15"
      },
      {
        "name": "Chana Dal & Urad Dal",
        "amount": "2 tbsp each"
      },
      {
        "name": "Cumin Seeds & Black Pepper",
        "amount": "1 tbsp each"
      },
      {
        "name": "Methi Seeds (Fenugreek)",
        "amount": "1 tsp"
      },
      {
        "name": "Turmeric Powder & Hing",
        "amount": "1 tsp & 1/2 tsp"
      }
    ],
    "steps": [
      "Dry roast each spice individually on low flame: coriander seeds till aromatic, lentils till golden, methi seeds till lightly browned, and chillies till puffed.",
      "Cool completely on a wide thali.",
      "Add turmeric powder and hing.",
      "Grind in a spice mill into a fine, fragrant sambar powder; store in a dry airtight jar to power everyday sambars."
    ]
  }
];
