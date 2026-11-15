// Section 7: Sweets, Desserts & Mithai (45 recipes)
const SWEET_RECIPES = [
  {
    "id": "gajar-halwa",
    "name": "Shahi Gajar ka Halwa",
    "subCategory": "halwa",
    "prepTime": 45,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/gajar-halwa.jpg",
    "description": "Rich Punjabi winter dessert made with tender red carrots simmered in full-cream milk, reduced with mawa, roasted in desi ghee, and loaded with cashews.",
    "ingredients": [
      {
        "name": "Red Carrots (Gajar)",
        "amount": "1 kg (grated)"
      },
      {
        "name": "Full Cream Milk",
        "amount": "1 litre"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "4 tbsp"
      },
      {
        "name": "Sugar",
        "amount": "3/4 cup"
      },
      {
        "name": "Khoya / Mawa",
        "amount": "150g (crumbled)"
      },
      {
        "name": "Green Cardamom Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Cashews & Almonds",
        "amount": "1/4 cup (sliced & fried in ghee)"
      }
    ],
    "steps": [
      "Wash, peel, and grate fresh red winter carrots using the medium hole side of a box grater.",
      "In a heavy-bottomed kadai, add grated carrots and full cream milk; bring to a boil on medium heat.",
      "Simmer for 35-40 minutes, stirring periodically, until the carrots turn tender and milk reduces by 90%.",
      "Add sugar; the mixture will turn liquid again — cook on medium flame stirring continuously until all moisture evaporates.",
      "Add pure desi ghee and crumbled khoya; bhunno (roast) on medium-low flame for 10-12 minutes until glossy and ghee separates from the sides.",
      "Stir in freshly ground green cardamom powder and golden-fried cashews and almonds; serve warm."
    ]
  },
  {
    "id": "sooji-halwa",
    "name": "Prasad Sooji Halwa (Sheera)",
    "subCategory": "halwa",
    "prepTime": 20,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/sooji-halwa.jpg",
    "description": "Traditional temple-style semolina halwa cooked in equal ratios of ghee, sugar, and roasted sooji infused with green cardamom and saffron.",
    "ingredients": [
      {
        "name": "Sooji (Fine Semolina)",
        "amount": "1 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 cup"
      },
      {
        "name": "Sugar",
        "amount": "1 cup"
      },
      {
        "name": "Water / Milk",
        "amount": "3 cups (boiling hot)"
      },
      {
        "name": "Cardamom & Saffron",
        "amount": "1/2 tsp & pinch"
      },
      {
        "name": "Cashews & Raisins",
        "amount": "2 tbsp each"
      }
    ],
    "steps": [
      "Bring water (or milk blend) and sugar to a rolling boil in a saucepan with saffron threads until sugar dissolves completely.",
      "In a heavy kadai, heat pure desi ghee; fry cashews until golden and raisins until plump; remove and set aside.",
      "Add sooji to the hot ghee; roast on low-medium flame stirring continuously for 8-10 minutes until aromatic, nutty, and light golden.",
      "Carefully pour the boiling hot sugar water into the roasted sooji in a steady stream, whisking vigorously to prevent lumps from forming.",
      "Cook on low heat covered for 3 minutes until all liquid is absorbed and sooji grains swell up soft and fluffy.",
      "Finish with green cardamom powder, fried nuts, and raisins; serve warm."
    ]
  },
  {
    "id": "moong-dal-halwa",
    "name": "Royal Moong Dal Halwa",
    "subCategory": "halwa",
    "prepTime": 40,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/moong-dal-halwa.jpg",
    "description": "Opulent Rajasthani wedding celebration dessert made from soaked yellow moong dal paste roasted slowly in pure desi ghee with saffron mawa.",
    "ingredients": [
      {
        "name": "Yellow Moong Dal",
        "amount": "1 cup (soaked 4 hrs & ground coarse)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 cup"
      },
      {
        "name": "Besan & Sooji",
        "amount": "1 tbsp each (secret binder)"
      },
      {
        "name": "Full Cream Milk",
        "amount": "1.5 cups (warm)"
      },
      {
        "name": "Sugar",
        "amount": "1 cup"
      },
      {
        "name": "Saffron & Cardamom",
        "amount": "generous pinch"
      }
    ],
    "steps": [
      "Drain soaked moong dal and grind to a slightly coarse, thick paste without adding excess water.",
      "Heat ghee in a thick iron kadai; add besan and sooji and stir for 1 minute (prevents moong dal from sticking to the base).",
      "Add moong dal paste; stir vigorously on medium-low flame for 25-30 minutes until the paste transforms from lumpy to granular, sandy, and golden-brown with floating ghee.",
      "Warm milk with saffron and sugar in a separate saucepan until sugar melts.",
      "Pour hot saffron milk into the roasted dal; stir continuously on low heat until absorbed and glossy ghee oozes from the sides.",
      "Garnish with slivered pistachios and almonds; serve steaming hot."
    ]
  },
  {
    "id": "rava-kesari",
    "name": "South Indian Rava Kesari",
    "subCategory": "halwa",
    "prepTime": 15,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/rava-kesari.jpg",
    "description": "Velvety, melt-in-mouth South Indian festival sweet prepared with roasted rava, fragrant ghee, saffron strands, and crunchy fried cashews.",
    "ingredients": [
      {
        "name": "Rava (Semolina)",
        "amount": "1 cup"
      },
      {
        "name": "Sugar",
        "amount": "1.5 cups"
      },
      {
        "name": "Water",
        "amount": "3 cups"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1/2 cup"
      },
      {
        "name": "Saffron (Kesar)",
        "amount": "generous pinch soaked in milk"
      },
      {
        "name": "Cashews & Cardamom",
        "amount": "2 tbsp & 1/2 tsp"
      }
    ],
    "steps": [
      "Heat 1 tbsp ghee in a pan; roast cashews until golden-brown and set aside.",
      "In the same pan, roast rava on low heat for 4-5 minutes until warm and fragrant; transfer to a plate.",
      "Boil 3 cups water in a heavy kadai; add saffron milk.",
      "Add roasted rava slowly in a thin stream with one hand while stirring continuously with the other to avoid any lumps.",
      "Cover and cook on low heat for 3 minutes until rava absorbs water completely and turns soft.",
      "Add sugar; stir well as it melts and liquefies; cook on medium-low until it thickens again.",
      "Pour remaining ghee gradually while stirring until the kesari slides freely off the pan; fold in fried cashews and cardamom."
    ]
  },
  {
    "id": "badam-halwa",
    "name": "Chettinad Badam Halwa",
    "subCategory": "halwa",
    "prepTime": 30,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/badam-halwa.jpg",
    "description": "Silky, royal confection made with blanched California almonds pureed with milk and stirred endlessly in saffron-infused desi ghee.",
    "ingredients": [
      {
        "name": "Almonds (Badam)",
        "amount": "1 cup (blanched & peeled)"
      },
      {
        "name": "Milk",
        "amount": "1/2 cup (for grinding)"
      },
      {
        "name": "Sugar",
        "amount": "1 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1/2 cup"
      },
      {
        "name": "Saffron & Cardamom",
        "amount": "1 pinch & 1/2 tsp"
      }
    ],
    "steps": [
      "Soak almonds in boiling hot water for 20 minutes; pop out of skins; grind to a smooth paste with 1/2 cup milk.",
      "In a non-stick or heavy bottom kadai, combine almond paste and sugar; cook on medium flame stirring constantly.",
      "Once sugar melts and bubbles, start adding melted pure ghee 1 tablespoon at a time every few minutes.",
      "Add saffron steeped in warm milk and cardamom powder.",
      "Continue stirring for 18-20 minutes until the mixture leaves the sides of the pan and gathers into a glossy, jelly-soft mass that doesn't stick.",
      "Serve warm in small silver bowls."
    ]
  },
  {
    "id": "lauki-halwa",
    "name": "Doodhi (Lauki) Halwa",
    "subCategory": "halwa",
    "prepTime": 30,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/gajar-halwa.jpg",
    "description": "Tender bottle gourd grated and stewed with rich condensed milk, desi ghee, mawa, and crushed green cardamoms.",
    "ingredients": [
      {
        "name": "Bottle Gourd (Lauki / Doodhi)",
        "amount": "500g (grated without seeds)"
      },
      {
        "name": "Full Cream Milk",
        "amount": "2 cups"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp"
      },
      {
        "name": "Sugar",
        "amount": "1/2 cup"
      },
      {
        "name": "Khoya / Milk Powder",
        "amount": "1/2 cup"
      },
      {
        "name": "Cashews & Pistachios",
        "amount": "2 tbsp each"
      }
    ],
    "steps": [
      "Peel tender bottle gourd, discard spongy seeded core, and grate immediately (use right away to prevent oxidisation).",
      "Sauté grated lauki in 1 tbsp hot ghee for 4 minutes until moisture reduces.",
      "Add full cream milk and simmer on medium flame until lauki turns completely soft and milk cooks down.",
      "Add sugar, crumbled khoya, and remaining ghee; roast until glossy and ghee glazes the halwa.",
      "Garnish with cardamom powder and roasted nuts; serve warm."
    ]
  },
  {
    "id": "beetroot-halwa",
    "name": "Ruby Beetroot Halwa",
    "subCategory": "halwa",
    "prepTime": 30,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/gajar-halwa.jpg",
    "description": "Vibrant ruby-red dessert made with grated fresh beetroots simmered in milk and roasted with aromatic ghee and cashews.",
    "ingredients": [
      {
        "name": "Beetroot",
        "amount": "500g (finely grated)"
      },
      {
        "name": "Milk",
        "amount": "2 cups"
      },
      {
        "name": "Sugar",
        "amount": "1/2 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp"
      },
      {
        "name": "Cardamom & Almonds",
        "amount": "1/2 tsp & 2 tbsp"
      }
    ],
    "steps": [
      "Sauté grated beetroot in 1 tbsp ghee for 5 minutes to mellow the earthy raw note.",
      "Pour milk and cook on low-medium flame until beetroot becomes tender and liquid reduces completely.",
      "Stir in sugar and remaining ghee; roast on medium heat until thick, shiny, and leaving the pan edges.",
      "Fold in roasted almond slices and freshly pounded cardamom; serve hot."
    ]
  },
  {
    "id": "karachi-halwa",
    "name": "Bombay Karachi Halwa",
    "subCategory": "halwa",
    "prepTime": 35,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/rava-kesari.jpg",
    "description": "Chewy, translucent, gelatinous sweet squares made with cornflour, ghee, sugar syrup, and crunchy melon seeds (magaz).",
    "ingredients": [
      {
        "name": "Cornstarch / Cornflour",
        "amount": "1/2 cup"
      },
      {
        "name": "Water",
        "amount": "1.5 cups"
      },
      {
        "name": "Sugar",
        "amount": "1.5 cups"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1/3 cup"
      },
      {
        "name": "Lemon Juice",
        "amount": "1 tsp (prevents crystallization)"
      },
      {
        "name": "Melon Seeds & Cashews",
        "amount": "2 tbsp each"
      }
    ],
    "steps": [
      "Dissolve cornflour in 1 cup water until smooth without lumps.",
      "Boil sugar and 1/2 cup water in a pan with lemon juice until sugar dissolves completely.",
      "Pour cornflour slurry into hot syrup on low heat whisking vigorously; within 3-4 minutes it turns thick and glossy.",
      "Add ghee 1 tablespoon at a time, letting the halwa absorb each addition before adding the next.",
      "Stir in orange-red food color or saffron, melon seeds, and fried cashew bits.",
      "Once translucent, glossy, and pulling cleanly off the pan, pour into a greased tray, cool for 1 hour, and slice into bouncy cubes."
    ]
  },
  {
    "id": "besan-ladoo",
    "name": "Danedar Besan Ladoo",
    "subCategory": "ladoo",
    "prepTime": 30,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/besan-ladoo.jpg",
    "description": "Golden, melt-in-mouth traditional gram flour ladoos roasted slowly in pure desi ghee until nutty and rolled with boora sugar.",
    "ingredients": [
      {
        "name": "Besan (Coarse Gram Flour)",
        "amount": "2 cups"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1/2 cup"
      },
      {
        "name": "Boora / Tagar (Confectionery Sugar)",
        "amount": "1 cup"
      },
      {
        "name": "Green Cardamom Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Pistachios & Almonds",
        "amount": "2 tbsp (slivers)"
      }
    ],
    "steps": [
      "Heat ghee in a heavy-bottomed kadai; add coarse besan and mix well on low heat.",
      "Roast continuously on lowest flame for 20-25 minutes; the besan will release ghee, turn liquidy, and turn golden-brown with an intense roasted nutty aroma.",
      "Sprinkle 1 tsp cold water over the hot besan; it will foam vigorously creating a gorgeous danedar (granular) texture; stir for 1 minute and remove from heat.",
      "Transfer to a wide plate and let it cool until barely lukewarm (adding sugar to hot besan will melt it into soup).",
      "Add tagar / boora and cardamom powder; rub vigorously between palms to incorporate.",
      "Shape into smooth, firm round ladoos; press a pistachio sliver on top and store in an airtight tin."
    ]
  },
  {
    "id": "motichoor-ladoo",
    "name": "Shahi Motichoor Ladoo",
    "subCategory": "ladoo",
    "prepTime": 40,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/motichoor-ladoo.jpg",
    "description": "Celebration ladoos crafted from micro-sized pearls of besan boondi fried in ghee, soaked in saffron-rose syrup, and shaped with melon seeds.",
    "ingredients": [
      {
        "name": "Besan (Gram Flour)",
        "amount": "2 cups (fine sifted)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "for deep frying"
      },
      {
        "name": "Sugar",
        "amount": "1.5 cups"
      },
      {
        "name": "Water",
        "amount": "1 cup"
      },
      {
        "name": "Saffron & Rose Water",
        "amount": "generous pinch & 1 tsp"
      },
      {
        "name": "Melon Seeds (Magaz)",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Whisk fine besan with water into a thin, lump-free pouring batter.",
      "Heat ghee in a kadai; pour batter through a tiny-holed motichoor jhara, tapping lightly so microscopic pearls drop into hot ghee; fry for 40 seconds without browning.",
      "Boil sugar and water with saffron and rose water to a single-thread syrup consistency.",
      "Add warm boondi directly into the hot syrup; simmer on low heat for 3 minutes so pearls drink up the syrup completely.",
      "Add melon seeds and a splash of ghee; let rest covered for 15 minutes.",
      "While comfortably warm, roll gently into glowing orange spheres."
    ]
  },
  {
    "id": "boondi-ladoo",
    "name": "Tirupati Style Boondi Ladoo",
    "subCategory": "ladoo",
    "prepTime": 35,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/motichoor-ladoo.jpg",
    "description": "Sacred prasadam-style ladoo made with juicy round gram flour boondi, crushed edible camphor (pacha karpooram), cloves, and cashews.",
    "ingredients": [
      {
        "name": "Besan",
        "amount": "2 cups"
      },
      {
        "name": "Sugar",
        "amount": "2 cups"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "for frying"
      },
      {
        "name": "Edible Camphor (Pacha Karpooram)",
        "amount": "tiny speck (mustard seed size)"
      },
      {
        "name": "Cloves, Cashews & Raisins",
        "amount": "fried in ghee"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Make smooth flowing besan batter; drop through a round perforated ladle into hot ghee to create plump, spherical boondi.",
      "Boil sugar syrup to one-string consistency; dump hot boondi into the syrup.",
      "Take 1/3 of the soaked boondi and pulse briefly in a blender to create binding paste.",
      "Mix blended paste back with whole boondi, fried cashews, raisins, cloves, cardamom, and the speck of edible camphor.",
      "Squeeze firmly between palms to shape large, glossy, juicy temple-style ladoos."
    ]
  },
  {
    "id": "rava-ladoo",
    "name": "Coconut Rava Ladoo",
    "subCategory": "ladoo",
    "prepTime": 20,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/sooji-halwa.jpg",
    "description": "Quick festive South Indian ladoo made with roasted semolina, freshly grated coconut, ghee, and warm milk.",
    "ingredients": [
      {
        "name": "Fine Rava (Sooji)",
        "amount": "1.5 cups"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1 cup"
      },
      {
        "name": "Powdered Sugar",
        "amount": "1 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "4 tbsp"
      },
      {
        "name": "Warm Milk",
        "amount": "3-4 tbsp (for binding)"
      },
      {
        "name": "Cardamom & Cashews",
        "amount": "1 tsp & 2 tbsp"
      }
    ],
    "steps": [
      "Roast rava in 1 tbsp ghee on low flame for 6 minutes until aromatic; add grated coconut and roast for another 2 minutes without browning.",
      "Transfer to a bowl; stir in powdered sugar, cardamom powder, and fried cashews.",
      "Pour hot melted ghee and mix thoroughly.",
      "Drizzle warm milk a tablespoon at a time just until the mixture holds together when pressed.",
      "Shape into firm round balls and allow to set for 30 minutes."
    ]
  },
  {
    "id": "atta-ladoo",
    "name": "Punjabi Pinni (Atta Ladoo)",
    "subCategory": "ladoo",
    "prepTime": 30,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/besan-ladoo.jpg",
    "description": "Wholesome, warming winter sweet made with slow-roasted whole wheat flour, desi ghee, almonds, and boora sugar.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour (Atta)",
        "amount": "2 cups"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3/4 cup"
      },
      {
        "name": "Boora / Tagar Sugar",
        "amount": "1 cup"
      },
      {
        "name": "Almonds & Gond (Edible Gum)",
        "amount": "1/4 cup each"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Fry gond crystals in 2 tbsp ghee on low flame until they puff up like popcorn; crush coarsely.",
      "In the same ghee, add remaining ghee and whole wheat flour; roast on low flame for 20 minutes until reddish-brown and smelling of baked cookies.",
      "Turn off flame; stir in crushed gond, chopped almonds, and cardamom; cool to lukewarm.",
      "Add boora sugar, mix with hands, and press into oval pinnis or round ladoos."
    ]
  },
  {
    "id": "coconut-ladoo",
    "name": "Nariyal Ladoo",
    "subCategory": "ladoo",
    "prepTime": 15,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/besan-ladoo.jpg",
    "description": "Quick 15-minute melt-in-mouth confection made with desiccated or fresh coconut condensed with milk and ghee.",
    "ingredients": [
      {
        "name": "Desiccated Coconut",
        "amount": "2 cups + 1/4 cup for rolling"
      },
      {
        "name": "Condensed Milk",
        "amount": "3/4 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Heat ghee in a pan; add desiccated coconut and sauté on low flame for 2 minutes without letting it brown.",
      "Pour condensed milk and cardamom powder; mix well.",
      "Cook on medium-low flame for 4-5 minutes until the mixture leaves the sides of the pan and forms a dough.",
      "Cool slightly; roll into small balls, then roll each ball in dry desiccated coconut for that classic snowy coating."
    ]
  },
  {
    "id": "mathura-peda",
    "name": "Mathura ke Pede",
    "subCategory": "ladoo",
    "prepTime": 35,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/peda.jpg",
    "description": "Traditional caramelized dark-brown mawa sweet from Mathura, roasted slowly in desi ghee and tossed in tagar sugar.",
    "ingredients": [
      {
        "name": "Khoya / Mawa",
        "amount": "250g (fresh crumbled)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Milk",
        "amount": "3 tbsp"
      },
      {
        "name": "Boora / Tagar Sugar",
        "amount": "3/4 cup"
      },
      {
        "name": "Cardamom & Nutmeg",
        "amount": "1/2 tsp each"
      }
    ],
    "steps": [
      "Add mawa and 1 tbsp ghee to a heavy pan; roast on low heat continuously.",
      "When the mawa turns light brown, splash 1 tbsp milk to deglaze the caramelized bits; repeat with another splash of milk until mawa turns deep chocolate-brown.",
      "Remove from flame, mix in cardamom and nutmeg, and let it cool completely to lukewarm.",
      "Knead with boora sugar, pinch small rustic portions, roll and press between palms into traditional irregular discs, then dust in boora."
    ]
  },
  {
    "id": "dharwad-peda",
    "name": "Karnataka Dharwad Peda",
    "subCategory": "ladoo",
    "prepTime": 40,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/peda.jpg",
    "description": "Geographical Indication (GI) tagged Dharwad specialty made by caramelizing curdled buffalo milk mawa and rolling in caster sugar.",
    "ingredients": [
      {
        "name": "Fresh Paneer / Chhena",
        "amount": "250g"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp"
      },
      {
        "name": "Sugar",
        "amount": "3/4 cup"
      },
      {
        "name": "Milk",
        "amount": "1/4 cup"
      },
      {
        "name": "Caster Sugar",
        "amount": "1/4 cup (for coating)"
      }
    ],
    "steps": [
      "Roast fresh paneer/chhena in ghee on low heat; stir continuously until the chhena loses water and turns golden.",
      "Add sugar; cook until it caramelizes and turns reddish-brown; add splashes of milk to maintain softness.",
      "Blend cooled mixture into a fine granular paste.",
      "Shape into cylindrical or round pedas, roll in fine caster sugar, and let set."
    ]
  },
  {
    "id": "gond-ladoo",
    "name": "Dinkache / Gond Ladoo",
    "subCategory": "ladoo",
    "prepTime": 30,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/besan-ladoo.jpg",
    "description": "Nutritious Ayurvedic postpartum and winter energy ladoos packed with popped edible gum (dink/gond), dry fruits, and jaggery.",
    "ingredients": [
      {
        "name": "Gond (Edible Gum)",
        "amount": "1/2 cup"
      },
      {
        "name": "Dry Grated Coconut",
        "amount": "1 cup"
      },
      {
        "name": "Almonds, Cashews & Walnuts",
        "amount": "1 cup (chopped)"
      },
      {
        "name": "Jaggery (Gud)",
        "amount": "1.5 cups (grated)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1/2 cup"
      },
      {
        "name": "Nutmeg & Cardamom",
        "amount": "1/2 tsp each"
      }
    ],
    "steps": [
      "Deep fry gond in ghee on low heat until crisp and fully puffed; crush with rolling pin.",
      "Roast dry coconut and nuts separately in ghee until fragrant; coarsely grind.",
      "Melt grated jaggery with 2 tbsp water and 1 tbsp ghee in a pan until foamy and bubbling.",
      "Combine crushed gond, nuts, coconut, nutmeg, cardamom, and pour hot melted jaggery over the mixture.",
      "Mix quickly and shape into warm, nourishing round ladoos."
    ]
  },
  {
    "id": "til-ladoo",
    "name": "Makar Sankranti Til Ladoo",
    "subCategory": "ladoo",
    "prepTime": 15,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/besan-ladoo.jpg",
    "description": "Crunchy winter sesame seed and jaggery ladoos made during Sankranti with roasted peanuts and cardamom.",
    "ingredients": [
      {
        "name": "White Sesame Seeds (Til)",
        "amount": "1.5 cups"
      },
      {
        "name": "Roasted Peanuts",
        "amount": "1/2 cup (coarsely crushed)"
      },
      {
        "name": "Jaggery (Gud)",
        "amount": "1.25 cups (grated)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Dry roast sesame seeds in a pan on medium-low flame until they pop and turn aromatic (do not brown); cool.",
      "Melt jaggery with 1 tbsp ghee and 1 tbsp water in a heavy pan until bubbling and reaching soft-ball stage.",
      "Turn off heat; immediately dump roasted sesame seeds, crushed peanuts, and cardamom into the hot jaggery.",
      "Mix vigorously; grease hands with water/ghee and shape into round balls while the mixture is still hot and pliable."
    ]
  },
  {
    "id": "kheer",
    "name": "Shahi Chawal ki Kheer",
    "subCategory": "kheer",
    "prepTime": 35,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/kheer.jpg",
    "description": "Slow-simmered fragrant North Indian rice pudding enriched with condensed full-cream milk, saffron, cardamom, and slivered dry fruits.",
    "ingredients": [
      {
        "name": "Basmati Rice / Gobindobhog",
        "amount": "1/4 cup (washed & soaked 20 mins)"
      },
      {
        "name": "Full Cream Milk",
        "amount": "1 litre"
      },
      {
        "name": "Sugar",
        "amount": "1/2 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tsp"
      },
      {
        "name": "Saffron (Kesar)",
        "amount": "15-20 strands"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/2 tsp"
      },
      {
        "name": "Almonds, Pistachios & Cashews",
        "amount": "2 tbsp each (slivered)"
      }
    ],
    "steps": [
      "Drain soaked rice; crush grains lightly between your palms with 1 tsp ghee (this releases starch for a creamy consistency).",
      "Bring milk to a rolling boil in a heavy-bottomed pot; add crushed rice and stir well.",
      "Simmer uncovered on low heat for 25-30 minutes, scraping milk malai from the pot edges back into the milk, until rice is completely mushy and milk thickens to half its volume.",
      "Mash a portion of the cooked rice against the pot wall with the back of a ladle to thicken the body.",
      "Add sugar, saffron steeped in warm milk, and cardamom powder; cook for another 5 minutes until sugar dissolves and flavors meld.",
      "Fold in slivered nuts; serve warm or chilled in earthenware bowls."
    ]
  },
  {
    "id": "payasam",
    "name": "Kerala Semiya Payasam",
    "subCategory": "kheer",
    "prepTime": 20,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/payasam.jpg",
    "description": "Silky Kerala Sadya dessert made with roasted vermicelli simmered in sweetened milk, green cardamom, and golden-fried cashews and raisins.",
    "ingredients": [
      {
        "name": "Roasted Vermicelli (Semiya)",
        "amount": "1 cup"
      },
      {
        "name": "Whole Milk",
        "amount": "1 litre"
      },
      {
        "name": "Sugar",
        "amount": "3/4 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Cashews & Raisins",
        "amount": "2 tbsp each"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Heat 1 tbsp ghee in a pan; fry cashews until golden and raisins until plump; set aside.",
      "Add semiya to the pan and roast in ghee for 2 minutes until golden-brown and fragrant.",
      "Boil milk in a separate heavy saucepan; add roasted semiya into boiling milk.",
      "Cook on medium flame for 6-8 minutes until vermicelli is cooked tender and milk turns creamy.",
      "Stir in sugar; simmer for another 3 minutes until dissolved (semiya thickens as it cools, so keep it slightly runny).",
      "Finish with green cardamom powder, fried cashews, and plump raisins."
    ]
  },
  {
    "id": "moong-dal-payasam",
    "name": "Pasi Paruppu Payasam",
    "subCategory": "kheer",
    "prepTime": 25,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/payasam.jpg",
    "description": "Traditional Tamil Nadu festival payasam made with roasted yellow moong dal cooked with melted jaggery and fresh coconut milk.",
    "ingredients": [
      {
        "name": "Yellow Moong Dal",
        "amount": "1/2 cup"
      },
      {
        "name": "Jaggery (Gud)",
        "amount": "1 cup"
      },
      {
        "name": "Thick Coconut Milk",
        "amount": "1/2 cup"
      },
      {
        "name": "Thin Coconut Milk",
        "amount": "1 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Coconut Pieces & Cashews",
        "amount": "fried in ghee"
      }
    ],
    "steps": [
      "Dry roast moong dal in a pan on medium-low flame until fragrant and golden; rinse and pressure cook with 1.5 cups water for 3 whistles until soft and mushy.",
      "Melt jaggery with 1/4 cup water, strain to remove impurities, and pour into mashed dal.",
      "Simmer dal-jaggery mixture for 5 minutes until well combined.",
      "Add thin coconut milk and simmer for 2 minutes; turn off flame and pour thick coconut milk (never boil thick coconut milk).",
      "Fry tiny coconut bits and cashews in ghee until deep golden; pour sizzling over the payasam."
    ]
  },
  {
    "id": "phirni",
    "name": "Kashmiri Kesari Phirni",
    "subCategory": "kheer",
    "prepTime": 30,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/kheer.jpg",
    "description": "Velvety, slow-cooked royal dessert made with ground basmati rice paste set in traditional unglazed clay cups (shikoras) with saffron.",
    "ingredients": [
      {
        "name": "Basmati Rice",
        "amount": "1/4 cup (soaked 30 mins & ground coarse)"
      },
      {
        "name": "Full Cream Milk",
        "amount": "1 litre"
      },
      {
        "name": "Sugar",
        "amount": "1/2 cup"
      },
      {
        "name": "Saffron (Kesar)",
        "amount": "generous pinch"
      },
      {
        "name": "Rose Water & Cardamom",
        "amount": "1 tsp & 1/2 tsp"
      },
      {
        "name": "Pistachios & Silver Vark",
        "amount": "for garnish"
      }
    ],
    "steps": [
      "Drain soaked rice and grind with 2 tbsp milk into a fine semolina-like grainy paste.",
      "Boil milk in a heavy pot; reduce heat and slowly whisk in the rice paste to prevent clumps.",
      "Cook on low heat, stirring continuously for 15-20 minutes until thick and custard-like.",
      "Add sugar, saffron milk, cardamom, and rose water; cook for 3 more minutes.",
      "Pour while hot into soaked earthenware clay bowls (shikoras); chill in the refrigerator for 2 hours until firmly set, and garnish with sliced pistachios."
    ]
  },
  {
    "id": "mishti-doi",
    "name": "Kolkata Mishti Doi",
    "subCategory": "kheer",
    "prepTime": 30,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/mishti-doi.jpg",
    "description": "Classic Bengali fermented sweet curd crafted with caramelized milk and set in earthen pots for that distinctive reddish-pink blush.",
    "ingredients": [
      {
        "name": "Full Cream Milk",
        "amount": "1 litre"
      },
      {
        "name": "Sugar",
        "amount": "3/4 cup (divided)"
      },
      {
        "name": "Thick Fresh Curd / Yogurt Starter",
        "amount": "2 tbsp (hung)"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/4 tsp"
      }
    ],
    "steps": [
      "Boil milk in a pan with 1/2 cup sugar; simmer until reduced to 3/4th volume.",
      "In a separate saucepan, melt remaining 1/4 cup sugar with 1 tbsp water on medium heat without stirring until it turns a deep amber-brown caramel.",
      "Slowly pour warm reduced milk into hot caramel whisking vigorously to incorporate.",
      "Let the caramelized milk cool until comfortably warm (finger-testable).",
      "Whisk in hung curd starter and cardamom smoothly; pour into unglazed clay pots.",
      "Wrap pots in foil and keep in a warm place for 8-10 hours until firmly set; chill before serving."
    ]
  },
  {
    "id": "shrikhand",
    "name": "Kesar Elaichi Shrikhand",
    "subCategory": "kheer",
    "prepTime": 20,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/shrikhand.jpg",
    "description": "Thick, creamy Maharashtrian and Gujarati dessert prepared by whipping hung yogurt (chakka) with saffron, green cardamom, and powdered sugar.",
    "ingredients": [
      {
        "name": "Fresh Curd (Dahi)",
        "amount": "1 kg (strained overnight into 350g chakka)"
      },
      {
        "name": "Powdered Sugar",
        "amount": "3/4 cup"
      },
      {
        "name": "Saffron (Kesar)",
        "amount": "1 pinch dissolved in 1 tbsp warm milk"
      },
      {
        "name": "Green Cardamom Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Pistachios & Almonds",
        "amount": "2 tbsp (slivers)"
      }
    ],
    "steps": [
      "Tie fresh curd tightly in a muslin cloth and hang over a bowl in the refrigerator for 8 hours to drain all whey, yielding thick dense 'chakka'.",
      "Transfer chakka to a mixing bowl; add powdered sugar, saffron milk, and cardamom powder.",
      "Whisk vigorously with a whisk or rub through a fine sieve until silky smooth and glossy.",
      "Fold in sliced pistachios and almonds.",
      "Chill for at least 1 hour; serve with hot puffed puris."
    ]
  },
  {
    "id": "basundi",
    "name": "Rich Kesar Basundi",
    "subCategory": "kheer",
    "prepTime": 45,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/rabdi.jpg",
    "description": "Rich, creamy Western Indian sweet made by reducing full-fat milk to half its volume with delicate cream layers (malai), saffron, and nutmeg.",
    "ingredients": [
      {
        "name": "Full Fat Milk",
        "amount": "1.5 litres"
      },
      {
        "name": "Sugar",
        "amount": "1/2 cup"
      },
      {
        "name": "Saffron & Nutmeg",
        "amount": "pinch of each"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/2 tsp"
      },
      {
        "name": "Almonds, Cashews & Chironji",
        "amount": "2 tbsp each"
      }
    ],
    "steps": [
      "Pour milk into a broad, heavy kadai; bring to a boil on medium flame.",
      "As a skin of malai forms on top, gently push it to the sides of the pan with a spatula; repeat every few minutes as milk reduces.",
      "Once reduced to half its original volume and packed with cream ribbons, add sugar, saffron, and nutmeg.",
      "Cook for another 5 minutes; scrape all dried malai from the rim back into the basundi.",
      "Stir in chironji, sliced nuts, and cardamom; serve chilled."
    ]
  },
  {
    "id": "carrot-kheer",
    "name": "Creamy Carrot Payasam",
    "subCategory": "kheer",
    "prepTime": 25,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/kheer.jpg",
    "description": "Lush South Indian payasam made with tender carrots steamed and blended with soaked cashews and simmered in sweetened milk.",
    "ingredients": [
      {
        "name": "Carrots",
        "amount": "3 medium (peeled & chopped)"
      },
      {
        "name": "Cashews",
        "amount": "10-12 (soaked in warm water)"
      },
      {
        "name": "Whole Milk",
        "amount": "3 cups"
      },
      {
        "name": "Sugar / Condensed Milk",
        "amount": "1/2 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Steam chopped carrots until tender; blend with soaked cashews and a splash of milk into a velvety smooth puree.",
      "Heat ghee in a pot, add carrot-cashew puree, and sauté for 2 minutes.",
      "Pour milk and bring to a simmer, stirring continuously to prevent sticking.",
      "Add sugar and cardamom powder; simmer for 5 minutes until creamy.",
      "Garnish with ghee-fried cashews and serve warm or chilled."
    ]
  },
  {
    "id": "gulab-jamun",
    "name": "Mawa Gulab Jamun",
    "subCategory": "syrup-sweet",
    "prepTime": 30,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/gulab-jamun.jpg",
    "description": "Soft, pillowy fried mawa and paneer dumplings soaked in warm rosewater and cardamom-perfumed saffron sugar syrup.",
    "ingredients": [
      {
        "name": "Khoya / Mawa (Hariyali)",
        "amount": "200g (soft grated)"
      },
      {
        "name": "Fresh Paneer",
        "amount": "50g (mashed smooth)"
      },
      {
        "name": "Maida",
        "amount": "3 tbsp"
      },
      {
        "name": "Sugar",
        "amount": "2 cups"
      },
      {
        "name": "Water",
        "amount": "2 cups"
      },
      {
        "name": "Rose Water & Saffron",
        "amount": "1 tsp & pinch"
      },
      {
        "name": "Pure Cow Ghee / Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Knead grated mawa, smooth paneer, and maida with the heel of your palm for 5 minutes until velvety and crack-free.",
      "Roll gently between palms into smooth, uncreased marble-sized balls (cracks will split open during frying).",
      "Boil sugar and water with crushed green cardamoms and saffron for 6-8 minutes to form a sticky, half-string syrup; stir in rose water.",
      "Heat ghee on medium-low flame (test with a tiny ball: it should rise slowly without sizzling immediately).",
      "Gently slide jamuns in; swirl the oil with a ladle without touching the delicate balls until they float and brown uniformly into deep golden spheres.",
      "Drain and drop immediately into warm syrup; let soak for 2 hours until plump, spongy, and bursting with syrup."
    ]
  },
  {
    "id": "rasgulla",
    "name": "Bengali Spongy Rasgulla",
    "subCategory": "syrup-sweet",
    "prepTime": 35,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/rasgulla.jpg",
    "description": "Pristine white, airy, spongy cottage cheese spheres boiled in bubbling light sugar syrup until swollen and juicy.",
    "ingredients": [
      {
        "name": "Cow Milk",
        "amount": "1 litre (fresh full cream cow milk)"
      },
      {
        "name": "Lemon Juice / Vinegar",
        "amount": "2 tbsp (diluted with water)"
      },
      {
        "name": "Sugar",
        "amount": "1.5 cups"
      },
      {
        "name": "Water",
        "amount": "5 cups"
      },
      {
        "name": "Rose Water & Cardamom",
        "amount": "1 tsp & 2 pods"
      }
    ],
    "steps": [
      "Boil cow milk; turn off heat, wait 2 minutes, and drizzle diluted lemon juice until green whey separates cleanly.",
      "Strain chhena through cheesecloth, rinse thoroughly under cold water to remove acidity, and hang for 30 minutes to drain whey.",
      "Knead chhena on a plate with your palm for 6-8 minutes until completely smooth and oily without graininess.",
      "Roll into smooth, miniature crack-free balls.",
      "In a wide, deep pressure cooker or pan, boil 5 cups water and sugar to a rolling, vigorous boil with cardamom.",
      "Drop chhena balls into boiling syrup, cover with lid, and cook on high flame for 10 minutes (they will double in size).",
      "Cool completely; rasgullas should spring back when squeezed."
    ]
  },
  {
    "id": "rasmalai",
    "name": "Royal Kesar Rasmalai",
    "subCategory": "syrup-sweet",
    "prepTime": 45,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/rasmalai.jpg",
    "description": "Flattened spongy chhena discs poached in sugar syrup and steeped in thickened saffron, pistachio, and cardamom-infused rabri milk.",
    "ingredients": [
      {
        "name": "Fresh Chhena Discs",
        "amount": "10-12 pieces"
      },
      {
        "name": "Full Cream Milk",
        "amount": "1 litre (for rabri)"
      },
      {
        "name": "Sugar",
        "amount": "1/2 cup"
      },
      {
        "name": "Saffron (Kesar)",
        "amount": "generous pinch"
      },
      {
        "name": "Pistachios & Almonds",
        "amount": "3 tbsp (sliced)"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Prepare fresh chhena discs and poach in light sugar syrup for 10 minutes until spongy.",
      "Simmer full cream milk in a wide pan on medium heat until reduced by half into a fragrant, pourable rabri.",
      "Add sugar, saffron milk, and cardamom powder to the reduced milk; simmer for 2 minutes.",
      "Gently squeeze excess sugar syrup from the warm chhena discs between your palms.",
      "Transfer discs into the warm saffron rabri milk.",
      "Chill in refrigerator for at least 4 hours so discs absorb the rich rabri; garnish with pistachios."
    ]
  },
  {
    "id": "jalebi",
    "name": "Crispy Desi Ghee Jalebi",
    "subCategory": "syrup-sweet",
    "prepTime": 30,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/jalebi.jpg",
    "description": "Crispy, crunchy fermented batter swirls deep-fried in pure desi ghee and immersed in hot saffron-cardamom sugar syrup.",
    "ingredients": [
      {
        "name": "Maida",
        "amount": "1 cup"
      },
      {
        "name": "Cornstarch & Curd",
        "amount": "1 tbsp each"
      },
      {
        "name": "Baking Powder",
        "amount": "1/2 tsp"
      },
      {
        "name": "Sugar",
        "amount": "1.5 cups"
      },
      {
        "name": "Water",
        "amount": "1 cup"
      },
      {
        "name": "Saffron & Cardamom",
        "amount": "generous pinch & 1/2 tsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "for shallow frying in flat kadai"
      }
    ],
    "steps": [
      "Whisk maida, cornstarch, curd, baking powder, and water into a smooth, thick, flowing ribbon-consistency batter; rest for 15 minutes.",
      "Boil sugar, water, saffron, and cardamom for 5 minutes until it reaches 1-string sticky consistency; keep warm on low heat.",
      "Fill batter into a cloth squeeze bag or ketchup bottle with a 3mm nozzle.",
      "Heat 1-inch depth of pure ghee in a wide flat-bottomed pan on medium flame.",
      "Squeeze batter into concentric spirals starting from inside out, locking the end with a crossover stroke.",
      "Fry until crisp and pale golden on both sides; transfer immediately with tongs into hot syrup for 45 seconds, then drain and serve sizzling hot."
    ]
  },
  {
    "id": "rabdi",
    "name": "Lachhadar Malai Rabdi",
    "subCategory": "syrup-sweet",
    "prepTime": 45,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/rabdi.jpg",
    "description": "Slow-simmered rich condensed milk loaded with thick clotted cream flakes (lachha), cardamom, saffron, and pistachios.",
    "ingredients": [
      {
        "name": "Full Cream Milk",
        "amount": "1.5 litres"
      },
      {
        "name": "Sugar",
        "amount": "1/3 cup"
      },
      {
        "name": "Saffron (Kesar)",
        "amount": "15 strands"
      },
      {
        "name": "Green Cardamom Powder",
        "amount": "1/2 tsp"
      },
      {
        "name": "Pistachios & Almonds",
        "amount": "2 tbsp each (slivers)"
      }
    ],
    "steps": [
      "Boil full-fat buffalo milk in a broad cast-iron kadai on medium heat.",
      "Whenever a layer of cream (malai) forms on the surface, gently push it to the sides of the pan with a wooden spatula.",
      "Continue this process as milk slowly reduces to one-third of its original volume.",
      "Add sugar, saffron, and cardamom powder; simmer for 3 minutes until sugar melts.",
      "Scrape all the gathered cream layers (lachhas) from the edges back into the thickened milk.",
      "Garnish with pistachios; serve warm with hot jalebi or malpua, or chilled."
    ]
  },
  {
    "id": "malpua",
    "name": "Rabdi Malpua",
    "subCategory": "syrup-sweet",
    "prepTime": 30,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/malpua.jpg",
    "description": "Royal Rajasthani sweet pancakes made with flour and mawa batter, fried in desi ghee till edges turn crispy lacy, soaked in sugar syrup.",
    "ingredients": [
      {
        "name": "Khoya / Mawa",
        "amount": "1/2 cup (crumbled)"
      },
      {
        "name": "Maida & Sooji",
        "amount": "1 cup maida + 2 tbsp sooji"
      },
      {
        "name": "Fennel Seeds (Saunf)",
        "amount": "1 tsp (crushed)"
      },
      {
        "name": "Warm Milk",
        "amount": "1.5 cups"
      },
      {
        "name": "Sugar Syrup",
        "amount": "1-string warm syrup with saffron"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "for shallow frying"
      }
    ],
    "steps": [
      "Whisk mawa and warm milk into a lump-free base; add maida, sooji, and crushed fennel seeds to form a smooth pourable batter; rest 30 minutes.",
      "Heat ghee in a shallow flat frying pan.",
      "Pour a small ladle of batter in the center without spreading; it will spread on its own into a round disc with lacy edges.",
      "Fry on medium heat until edges turn golden-crisp and center remains soft; flip once.",
      "Transfer directly from hot ghee into warm saffron sugar syrup for 2 minutes.",
      "Serve warm topped with thick chilled rabdi and silver vark."
    ]
  },
  {
    "id": "balushahi",
    "name": "Flaky Desi Ghee Balushahi",
    "subCategory": "syrup-sweet",
    "prepTime": 35,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/balushahi.jpg",
    "description": "Multi-layered, flaky Indian confection resembling glazed doughnuts, fried on ultra-low heat in ghee and dipped in warm sugar glaze.",
    "ingredients": [
      {
        "name": "Maida",
        "amount": "2 cups"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1/2 cup (melted)"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/4 cup"
      },
      {
        "name": "Baking Powder",
        "amount": "1/2 tsp"
      },
      {
        "name": "Sugar",
        "amount": "2 cups (for syrup)"
      },
      {
        "name": "Cardamom & Saffron",
        "amount": "generous pinch"
      }
    ],
    "steps": [
      "Mix maida and baking powder; add ghee, curd, and ice-cold water to gently bring the dough together (do NOT knead, just gather to create flaky layers).",
      "Rest dough for 20 minutes; cut dough in half and stack over each other 4 times to build flaky laminations.",
      "Pinch small portions, roll lightly into smooth discs, and press a deep dent with your thumb in the center.",
      "Slide into lukewarm ghee on the lowest heat setting; they will slowly expand and float after 8-10 minutes.",
      "Increase heat slightly to golden-brown both sides; drain on paper towels.",
      "Dip into warm 1-string sugar syrup for 5 minutes so glaze crystallizes into a crisp outer shell."
    ]
  },
  {
    "id": "ghevar",
    "name": "Rajasthani Malai Ghevar",
    "subCategory": "syrup-sweet",
    "prepTime": 45,
    "servings": 4,
    "veg": true,
    "image": "images/dishes/ghevar.jpg",
    "description": "Intricate honeycomb disc of crisp fried batter topped with saffron syrup, scented mawa rabdi, and slivered dry fruits for Teej.",
    "ingredients": [
      {
        "name": "Maida",
        "amount": "1 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1/4 cup"
      },
      {
        "name": "Ice Cubes",
        "amount": "4-5 cubes"
      },
      {
        "name": "Cold Milk & Water",
        "amount": "1/4 cup milk + 1.5 cups chilled water"
      },
      {
        "name": "Lemon Juice",
        "amount": "1 tsp"
      },
      {
        "name": "Rabri & Sugar Syrup",
        "amount": "for topping"
      }
    ],
    "steps": [
      "Rub ghee with ice cubes in a wide bowl until it turns into a fluffy, white butter-like emulsion; discard remaining ice.",
      "Add milk, maida, and chilled water gradually whisking vigorously to create an ultra-thin, smooth pouring batter; stir in lemon juice.",
      "Heat ghee to smoking hot in a deep saucepan filled halfway.",
      "Pour 1 tablespoon of cold batter from a height into the center of bubbling ghee; let froth subside before pouring the next spoonful.",
      "Make a hole in the center with a skewer; fry until the mesh turns crisp golden-brown; lift out and drain on a wire rack.",
      "Drizzle warm saffron syrup over the honeycomb disc, spread rich chilled rabri on top, and shower with chopped pistachios."
    ]
  },
  {
    "id": "sandesh",
    "name": "Kolkata Nolen Gur Sandesh",
    "subCategory": "syrup-sweet",
    "prepTime": 20,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/sandesh.jpg",
    "description": "Delicate Bengali confection made from freshly curdled cottage cheese (chhena) gently cooked with date palm jaggery (nolen gur).",
    "ingredients": [
      {
        "name": "Fresh Chhena",
        "amount": "250g (soft & moist)"
      },
      {
        "name": "Nolen Gur (Date Palm Jaggery) / Sugar",
        "amount": "1/2 cup"
      },
      {
        "name": "Green Cardamom Powder",
        "amount": "1/2 tsp"
      },
      {
        "name": "Pistachios",
        "amount": "1 tbsp (for topping)"
      }
    ],
    "steps": [
      "Knead fresh homemade chhena on a flat marble board for 5 minutes until creamy and lump-free.",
      "Transfer chhena to a non-stick pan on lowest heat; add date palm jaggery.",
      "Cook on low flame stirring continuously for 5-6 minutes just until the mixture warms through and releases a heavenly aroma (do not overcook or chhena turns rubbery).",
      "Remove onto a plate, let cool slightly, and press into traditional wooden seashell molds or roll into round balls.",
      "Top with sliced pistachio and serve fresh."
    ]
  },
  {
    "id": "cham-cham",
    "name": "Bengali Malai Cham Cham",
    "subCategory": "syrup-sweet",
    "prepTime": 35,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/rasgulla.jpg",
    "description": "Oblong spongy chhena sweets poached in sugar syrup, slit open and filled with sweetened mawa, rolled in desiccated coconut.",
    "ingredients": [
      {
        "name": "Fresh Chhena",
        "amount": "250g"
      },
      {
        "name": "Sugar & Water",
        "amount": "2 cups sugar + 4 cups water"
      },
      {
        "name": "Khoya / Mawa",
        "amount": "1/2 cup (sweetened & cooked)"
      },
      {
        "name": "Desiccated Coconut",
        "amount": "1/2 cup"
      },
      {
        "name": "Cardamom & Pistachios",
        "amount": "for garnish"
      }
    ],
    "steps": [
      "Knead fresh chhena until smooth; shape into oblong cylindrical rolls.",
      "Boil in sweet sugar syrup on high flame for 12 minutes until light and spongy; cool completely in syrup.",
      "Slit each cham cham lengthwise halfway through.",
      "Pipe rich sweetened mawa cream into the pocket.",
      "Roll each piece in dry desiccated coconut and top with a pistachio sliver."
    ]
  },
  {
    "id": "kala-jamun",
    "name": "Royal Kala Jamun",
    "subCategory": "syrup-sweet",
    "prepTime": 35,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/gulab-jamun.jpg",
    "description": "Crisp-crusted dark chocolate-colored mawa jamuns stuffed with dry fruits and saffron, soaked in thick cardamom syrup.",
    "ingredients": [
      {
        "name": "Khoya / Mawa",
        "amount": "200g"
      },
      {
        "name": "Paneer & Maida",
        "amount": "50g paneer + 3 tbsp maida"
      },
      {
        "name": "Sugar",
        "amount": "2 cups (thick 1-string syrup)"
      },
      {
        "name": "Chopped Nuts & Saffron",
        "amount": "for core filling"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Knead mawa, paneer, and maida into a smooth pliable dough.",
      "Take a small portion of dough, mix with chopped nuts, saffron, and cardamom to make filling pellets.",
      "Encase nut filling inside dough balls, smoothing out any creases.",
      "Fry in ghee on low flame; once they puff, turn up heat to caramelize the sugar on the exterior until dark mahogany black.",
      "Soak in warm sugar syrup for 3 hours before serving."
    ]
  },
  {
    "id": "kaju-katli",
    "name": "Silver Kaju Katli",
    "subCategory": "barfi",
    "prepTime": 25,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/kaju-katli.jpg",
    "description": "Diamond-shaped, melt-in-mouth Indian cashew fudge made with finely ground cashews and delicate single-thread sugar syrup.",
    "ingredients": [
      {
        "name": "Cashews (Kaju)",
        "amount": "2 cups (room temp & dry)"
      },
      {
        "name": "Sugar",
        "amount": "1 cup"
      },
      {
        "name": "Water",
        "amount": "1/2 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tsp"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/2 tsp"
      },
      {
        "name": "Edible Silver Leaf (Vark)",
        "amount": "optional"
      }
    ],
    "steps": [
      "Pulse dry cashews in short 3-second bursts in a blender into a fine powder (do not over-blend or cashews will release oil into a paste).",
      "Sift cashew powder through a sieve to ensure uniform texture.",
      "Boil sugar and water in a non-stick kadai until it forms a 1-string consistency syrup.",
      "Add cashew powder to the syrup on low heat; stir continuously for 6-8 minutes until the paste forms a soft, non-sticky dough.",
      "Transfer onto a ghee-greased butter paper; knead gently when warm until smooth and glossy.",
      "Place another parchment paper on top and roll out into a 4mm thick uniform sheet.",
      "Apply edible silver vark, let cool for 20 minutes, and slice into classic diamond lozenges."
    ]
  },
  {
    "id": "mysore-pak",
    "name": "Ghee Mysore Pak",
    "subCategory": "barfi",
    "prepTime": 25,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/mysore-pak.jpg",
    "description": "Legendary royal confection from Mysore Palace made with roasted gram flour, bubbling hot pure cow ghee, and sugar syrup.",
    "ingredients": [
      {
        "name": "Besan (Gram Flour)",
        "amount": "1 cup (sifted)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1.5 cups (kept piping hot)"
      },
      {
        "name": "Sugar",
        "amount": "1.5 cups"
      },
      {
        "name": "Water",
        "amount": "1/2 cup"
      }
    ],
    "steps": [
      "Mix 1/2 cup warm ghee into sifted besan until it forms a smooth, lump-free pouring paste.",
      "Keep remaining 1 cup ghee simmering gently on low flame in a separate pan.",
      "Boil sugar and water in a heavy kadai to a single-string syrup consistency.",
      "Pour the besan-ghee paste into the boiling syrup; stir vigorously on medium flame.",
      "Pour a ladle of boiling hot ghee into the mixture every 2 minutes; watch it bubble and froth aerating the besan.",
      "When the mixture becomes porous, frothy like a honeycomb, and leaves the pan completely, immediately pour into a greased deep tin.",
      "Let cool for 15 minutes, slice into rectangles, and allow to set."
    ]
  },
  {
    "id": "kalakand",
    "name": "Alwar Kalakand",
    "subCategory": "barfi",
    "prepTime": 25,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/kalakand.jpg",
    "description": "Soft, moist, granular milk cake made with freshly prepared chhena and condensed milk, flavored with rose and cardamom.",
    "ingredients": [
      {
        "name": "Fresh Chhena / Paneer",
        "amount": "250g (crumbled fine)"
      },
      {
        "name": "Condensed Milk",
        "amount": "1 can (400g)"
      },
      {
        "name": "Green Cardamom Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp"
      },
      {
        "name": "Pistachios",
        "amount": "2 tbsp (sliced)"
      }
    ],
    "steps": [
      "In a heavy non-stick pan, combine crumbled fresh paneer/chhena and condensed milk.",
      "Cook on medium-low flame stirring continuously so the bottom does not scorch.",
      "Within 10-12 minutes, the mixture turns thick, grainy, and begins to leave the sides of the pan.",
      "Stir in cardamom powder and 1 tsp ghee.",
      "Transfer into a greased square pan, press level, and press sliced pistachios on top.",
      "Refrigerate for 2 hours, cut into squares, and serve cold."
    ]
  },
  {
    "id": "kulfi",
    "name": "Shahi Matka Malai Kulfi",
    "subCategory": "barfi",
    "prepTime": 40,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/kulfi.jpg",
    "description": "Dense, creamy, slow-simmered traditional Indian frozen dessert infused with saffron, cardamom, and toasted pistachios.",
    "ingredients": [
      {
        "name": "Full Cream Milk",
        "amount": "1.5 litres"
      },
      {
        "name": "Khoya / Mawa",
        "amount": "100g (crumbled)"
      },
      {
        "name": "Sugar",
        "amount": "1/2 cup"
      },
      {
        "name": "Saffron & Cardamom",
        "amount": "pinch & 1 tsp"
      },
      {
        "name": "Pistachios & Almonds",
        "amount": "1/4 cup (coarsely chopped)"
      }
    ],
    "steps": [
      "Simmer full cream milk in a wide kadai on medium heat for 35 minutes, scraping sides, until reduced to 1/3rd volume.",
      "Add crumbled mawa and sugar; whisk until dissolved completely into a rich, luscious rabri base.",
      "Stir in saffron strands, cardamom powder, and crushed pistachios and almonds; cool to room temperature.",
      "Pour into traditional clay matkas or kulfi molds; seal tightly with foil to prevent ice crystals.",
      "Freeze for 8 hours until solid; unmold by rubbing between palms, slice, and serve."
    ]
  },
  {
    "id": "gujiya",
    "name": "Holi Mawa Gujiya",
    "subCategory": "barfi",
    "prepTime": 40,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/gujiya.jpg",
    "description": "Crispy, flaky crescent pastries stuffed with roasted mawa, desiccated coconut, dry fruits, and green cardamom.",
    "ingredients": [
      {
        "name": "Maida",
        "amount": "2 cups"
      },
      {
        "name": "Pure Cow Ghee (Moyan)",
        "amount": "1/4 cup"
      },
      {
        "name": "Khoya / Mawa",
        "amount": "200g (roasted golden)"
      },
      {
        "name": "Desiccated Coconut",
        "amount": "1/2 cup"
      },
      {
        "name": "Powdered Sugar",
        "amount": "3/4 cup"
      },
      {
        "name": "Chironji, Cashews & Cardamom",
        "amount": "2 tbsp each & 1 tsp"
      },
      {
        "name": "Oil / Ghee",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Rub maida with melted ghee until it holds shape when squeezed; knead with water into a firm dough; rest 30 minutes.",
      "Roast mawa in a pan until pinkish-golden; cool and mix with roasted coconut, powdered sugar, chironji, chopped cashews, and cardamom.",
      "Roll dough into small discs; place 1 tbsp filling in center; brush edge with water, fold into a half-moon, and crimp edges with fingers or a fork.",
      "Deep fry in medium-hot ghee on low flame until pale golden-brown and crisp.",
      "Drain and cool; store in an airtight container for weeks."
    ]
  },
  {
    "id": "milk-cake",
    "name": "Alwar Ka Milk Cake",
    "subCategory": "barfi",
    "prepTime": 45,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/kalakand.jpg",
    "description": "Traditional two-toned granular fudge made from curdled reduced milk slow-cooked until the center caramelizes into deep amber.",
    "ingredients": [
      {
        "name": "Full Cream Milk",
        "amount": "2 litres"
      },
      {
        "name": "Citric Acid / Alum",
        "amount": "tiny pinch (for micro curdling)"
      },
      {
        "name": "Sugar",
        "amount": "1 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Boil milk in a heavy iron kadai; reduce to 1/3rd volume on high heat stirring continuously.",
      "Add a tiny pinch of citric acid to induce fine, granular curdling (danedar texture).",
      "Add sugar in 3 batches while stirring; cook until the mixture turns thick and sticky.",
      "Add ghee and roast until it gathers into a firm mass.",
      "Pour into a greased deep vessel, cover with foil, and wrap in a thick blanket for 6 hours; the retained heat caramelizes the center into dark brown while edges stay creamy white."
    ]
  },
  {
    "id": "besan-barfi",
    "name": "Halwai Besan Barfi",
    "subCategory": "barfi",
    "prepTime": 25,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/besan-ladoo.jpg",
    "description": "Rich, melt-in-mouth gram flour fudge roasted in pure cow ghee and set with fragrant green cardamom and slivered pistachios.",
    "ingredients": [
      {
        "name": "Besan",
        "amount": "2 cups"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3/4 cup"
      },
      {
        "name": "Sugar & Water",
        "amount": "1 cup sugar + 1/2 cup water"
      },
      {
        "name": "Cardamom & Pistachios",
        "amount": "1 tsp & 2 tbsp"
      }
    ],
    "steps": [
      "Roast besan in ghee on low flame for 18-20 minutes until aromatic, golden, and releasing ghee.",
      "Boil sugar and water to a 1.5-string syrup consistency.",
      "Pour hot syrup into roasted besan on low flame; stir vigorously until it thickens and leaves the pan sides.",
      "Pour into a greased tin, press sliced pistachios on surface, and let set for 1 hour.",
      "Cut into squares and serve."
    ]
  },
  {
    "id": "coconut-barfi",
    "name": "Fresh Coconut Barfi",
    "subCategory": "barfi",
    "prepTime": 20,
    "servings": 6,
    "veg": true,
    "image": "images/dishes/sandesh.jpg",
    "description": "Tender white squares of fresh grated coconut cooked with whole milk, sugar, and pure cow ghee.",
    "ingredients": [
      {
        "name": "Fresh Grated Coconut",
        "amount": "2 cups (white part only)"
      },
      {
        "name": "Sugar",
        "amount": "1 cup"
      },
      {
        "name": "Milk",
        "amount": "1/2 cup"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Cardamom Powder",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Grate only the pure white flesh of fresh coconut without brown skin.",
      "In a kadai, combine grated coconut, milk, and sugar; cook on medium-low flame stirring frequently.",
      "As moisture evaporates and the mixture turns sticky and thick, add pure ghee.",
      "Cook until it forms a cohesive non-sticky lump that rolls together.",
      "Spread evenly in a greased tin; cool completely and cut into squares."
    ]
  }
];
