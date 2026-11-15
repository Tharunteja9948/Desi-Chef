// Section 3: Street Food & Fast Food (Chaat, Noodles, Momos, Rolls, Sandwiches, Crispy Fast Food)
// Every single dish features complete, in-depth, authentic step-by-step street-style instructions
const STREETFOOD_RECIPES = [
  {
    "id": "pani-puri-golgappa-puchka",
    "name": "Pani Puri (Golgappa / Puchka)",
    "subCategory": "chaat-streetfood",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pani-puri.jpg",
    "description": "Crisp hollow puris stuffed with spiced potato-chickpea mash, dipped in chilled spicy mint water and sweet tamarind chutney.",
    "ingredients": [
      {
        "name": "Puri (Golgappa)",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Boiled Chickpeas",
        "amount": "as needed"
      },
      {
        "name": "Mint & Coriander",
        "amount": "as needed"
      },
      {
        "name": "Tamarind Chutney",
        "amount": "as needed"
      },
      {
        "name": "Chaat Masala",
        "amount": "as needed"
      },
      {
        "name": "Black Salt",
        "amount": "as needed"
      },
      {
        "name": "Green Chillies",
        "amount": "as needed"
      }
    ],
    "steps": [
      "For spicy pani (teekha pani): Blend fresh mint leaves, coriander, green chillies, ginger, and lemon juice into a fine paste. Mix with 3 cups chilled water, black salt, roasted cumin powder, chaat masala, and boondi.",
      "For sweet pani (meetha pani): Dilute thick tamarind-date chutney with 1.5 cups chilled water and a pinch of roasted cumin powder.",
      "For filling: Coarsely mash boiled potatoes with boiled brown chickpeas, red chilli powder, chaat masala, and chopped coriander.",
      "To assemble: Poke a hole in the center of a crisp hollow puri with your thumb.",
      "Stuff with a spoonful of the potato-chickpea mixture, add a dash of sweet tamarind chutney, dunk completely into the spicy mint water, and pop the whole puri into your mouth immediately!"
    ]
  },
  {
    "id": "bhel-puri",
    "name": "Bhel Puri",
    "subCategory": "chaat-streetfood",
    "prepTime": 10,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/bhel-puri.jpg",
    "description": "Iconic Mumbai beach snack: crunchy puffed rice, sev, and crushed papdi tossed with onions, boiled potatoes, and tangy chutneys.",
    "ingredients": [
      {
        "name": "Puffed Rice (Murmura)",
        "amount": "as needed"
      },
      {
        "name": "Fine Sev",
        "amount": "as needed"
      },
      {
        "name": "Papdi",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Tomatoes",
        "amount": "as needed"
      },
      {
        "name": "Green Chutney",
        "amount": "as needed"
      },
      {
        "name": "Tamarind Chutney",
        "amount": "as needed"
      },
      {
        "name": "Chaat Masala",
        "amount": "as needed"
      },
      {
        "name": "Lemon Juice",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Ensure the puffed rice (murmura) is completely dry and crunchy (dry roast in a pan for 2 minutes if soft).",
      "In a large mixing bowl, combine puffed rice, crushed flat papdis, finely diced boiled potatoes, chopped onions, and deseeded tomatoes.",
      "Add 2 tablespoons of spicy green mint-coriander chutney and 2 tablespoons of sweet-tangy tamarind chutney.",
      "Sprinkle chaat masala, black salt, and squeeze fresh lemon juice over the mixture.",
      "Toss quickly and vigorously with two spoons so the chutneys coat the murmura without making it soggy.",
      "Top generously with a mountain of fine nylon sev and fresh coriander; serve immediately in paper cones."
    ]
  },
  {
    "id": "sev-puri",
    "name": "Sev Puri",
    "subCategory": "chaat-streetfood",
    "prepTime": 12,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/sev-puri.jpg",
    "description": "Flat crispy papdis topped with spiced potato-onion mash, trio of chutneys, raw mango pieces, and an avalanche of fine sev.",
    "ingredients": [
      {
        "name": "Flat Papdi",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Tomatoes",
        "amount": "as needed"
      },
      {
        "name": "Raw Green Mango",
        "amount": "as needed"
      },
      {
        "name": "Green Chutney",
        "amount": "as needed"
      },
      {
        "name": "Tamarind Chutney",
        "amount": "as needed"
      },
      {
        "name": "Garlic Chutney",
        "amount": "as needed"
      },
      {
        "name": "Nylon Sev",
        "amount": "as needed"
      },
      {
        "name": "Chaat Masala",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Arrange 6 to 8 crisp flat papdis in a single layer on a serving plate.",
      "Top each papdi with a spoonful of diced boiled potatoes and finely chopped onions.",
      "Drizzle fiery red garlic chutney, vibrant spicy green mint chutney, and glossy sweet tamarind chutney over every papdi.",
      "Add a sprinkle of finely chopped raw green mango (kacchi kairi) for a signature Mumbai tang.",
      "Dust generously with chaat masala and roasted cumin powder.",
      "Completely bury the puris under a mountain of golden nylon sev and chopped cilantro; eat immediately while crispy."
    ]
  },
  {
    "id": "dahi-puri",
    "name": "Dahi Puri",
    "subCategory": "chaat-streetfood",
    "prepTime": 12,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/dahi-puri.jpg",
    "description": "Crispy puris stuffed with spiced potatoes, drenched in chilled sweetened whisked curd, tamarind glaze, and crunchy sev.",
    "ingredients": [
      {
        "name": "Hollow Puris",
        "amount": "as needed"
      },
      {
        "name": "Fresh Curd",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Boiled Moong / Chickpeas",
        "amount": "as needed"
      },
      {
        "name": "Tamarind Chutney",
        "amount": "as needed"
      },
      {
        "name": "Green Chutney",
        "amount": "as needed"
      },
      {
        "name": "Nylon Sev",
        "amount": "as needed"
      },
      {
        "name": "Chaat Masala",
        "amount": "as needed"
      },
      {
        "name": "Pomegranate",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Whisk 1.5 cups fresh thick curd with 1.5 tbsp powdered sugar and a pinch of black salt until silky smooth and chilled.",
      "Place 6 to 8 hollow puris on a plate and crack a hole in the center of each.",
      "Stuff each puri with a spoonful of seasoned potato mash and boiled moong or chickpeas.",
      "Drizzle sweet tamarind-date chutney and spicy green chutney inside each puri.",
      "Generously ladle the cold sweetened curd over each puri until they are completely bathed in white yogurt.",
      "Garnish with a drizzle of tamarind chutney, a dusting of red chilli powder and chaat masala, fine sev, and ruby pomegranate pearls."
    ]
  },
  {
    "id": "masala-puri",
    "name": "Masala Puri",
    "subCategory": "chaat-streetfood",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/masala-puri.jpg",
    "description": "Bangalore street food legend: crushed crispy puris smothered in piping hot spiced dried green peas gravy with onions and sev.",
    "ingredients": [
      {
        "name": "Puris",
        "amount": "as needed"
      },
      {
        "name": "Dried Green Peas (soaked)",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Tomatoes",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Garam Masala",
        "amount": "as needed"
      },
      {
        "name": "Chaat Masala",
        "amount": "as needed"
      },
      {
        "name": "Fine Sev",
        "amount": "as needed"
      },
      {
        "name": "Carrot (grated)",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Pressure cook soaked dried green peas with turmeric and salt until soft; mash half the peas for a thick curry consistency.",
      "Prepare the spiced gravy: Sauté onions, ginger, garlic, tomatoes, and ground spices (cinnamon, cloves, fennel, coriander) into a spicy sauce; simmer with the mashed green peas for 5 minutes.",
      "In a shallow bowl, coarsely crush 4 to 5 crisp puris with your fingers.",
      "Ladle 2 generous ladles of the boiling hot green peas gravy all over the crushed puris.",
      "Top immediately with finely chopped onions, grated carrots, fresh coriander, sweet tamarind chutney, and fine sev.",
      "Enjoy piping hot with a spoon while the puris are semi-crisp and soaking in the spiced gravy."
    ]
  },
  {
    "id": "samosa",
    "name": "Samosa",
    "subCategory": "chaat-streetfood",
    "prepTime": 30,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/samosa.jpg",
    "description": "Pyramid-shaped flaky pastry crust stuffed with a spiced potato-green peas filling, deep-fried to golden perfection.",
    "ingredients": [
      {
        "name": "Wheat Flour / Maida",
        "amount": "as needed"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Green Peas",
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
        "name": "Amchur (Dry Mango)",
        "amount": "as needed"
      },
      {
        "name": "Garam Masala",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "For the flaky crust: Rub 3 tbsp hot ghee or oil into 2 cups maida with ajwain and salt until it forms breadcrumb texture (moin). Knead into a very stiff, firm dough; rest 20 minutes.",
      "For stuffing: Sauté cumin, crushed coriander seeds, ginger, and green chillies in oil. Add boiled potatoes crushed by hand, green peas, amchur, garam masala, and cashews; cook 3 minutes until dry.",
      "Roll oval-shaped discs of dough, slice in half into semi-circles.",
      "Apply water along the straight edge, fold into a cone shape, seal the seam firmly, and stuff generously with the spiced potato filling.",
      "Pleat the back edge, seal the base tightly so the samosa can stand upright on a flat surface.",
      "Slide into medium-low heat oil (do not fry in smoking oil or bubbles will form). Fry slowly on low heat for 12 to 15 minutes until pale golden, then increase heat for 2 minutes to a deep, blister-free golden crunch."
    ]
  },
  {
    "id": "onion-samosa-irani-street-samosa",
    "name": "Onion Samosa (Irani / Street Samosa)",
    "subCategory": "chaat-streetfood",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/onion-samosa.jpg",
    "description": "Thin, ultra-crispy translucent pastry pockets packed with a spicy raw onion, poha, and green chilli filling.",
    "ingredients": [
      {
        "name": "Samosa Patti / Spring Roll Sheets",
        "amount": "as needed"
      },
      {
        "name": "Onion (thinly sliced)",
        "amount": "as needed"
      },
      {
        "name": "Poha (thin flattened rice)",
        "amount": "as needed"
      },
      {
        "name": "Green Chillies",
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
        "name": "Coriander",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Thinly slice 3 large onions. Mix with 0.5 cup raw thin poha (poha absorbs excess moisture from the onions during frying to ensure maximum crispiness).",
      "Add finely chopped green chillies, red chilli powder, garam masala, salt, and lots of fresh chopped coriander; mix well.",
      "Use thin samosa patti strips. Fold one corner to form a triangle pocket.",
      "Fill with the spiced raw onion-poha mixture (do not overfill).",
      "Apply a flour-water paste on the edges and fold securely to seal all three corners completely.",
      "Drop into medium-hot oil and deep-fry on medium flame for 4 to 5 minutes until wafer-thin, golden, and crackling crisp. Serve with hot chai."
    ]
  },
  {
    "id": "mirchi-bajji-mirapakaya-bajji",
    "name": "Mirchi Bajji (Mirapakaya Bajji)",
    "subCategory": "chaat-streetfood",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/mirchi-bajji.jpg",
    "description": "Andhra street classic: thick green bhavnagri chillies stuffed with ajwain-tamarind masala, dipped in gram flour batter, and double-fried.",
    "ingredients": [
      {
        "name": "Bhavnagri / Bajji Green Chillies",
        "amount": "as needed"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "as needed"
      },
      {
        "name": "Rice Flour",
        "amount": "as needed"
      },
      {
        "name": "Ajwain",
        "amount": "as needed"
      },
      {
        "name": "Tamarind Pulp",
        "amount": "as needed"
      },
      {
        "name": "Onion (chopped)",
        "amount": "as needed"
      },
      {
        "name": "Chaat Masala",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Wash and slit large thick bajji chillies lengthwise; deseed with the back of a spoon to reduce heat.",
      "For stuffing: Mix 1 tbsp carom seeds (ajwain), 1 tbsp roasted cumin powder, salt, and thick tamarind pulp into a paste. Stuff inside each slit chilli.",
      "Whisk 1 cup besan, 2 tbsp rice flour (for crunch), salt, turmeric, a pinch of baking soda, and water into a smooth, lump-free, thick batter.",
      "Hold each stuffed chilli by its stem, dip completely into the batter to coat evenly, and slide into hot oil.",
      "Deep-fry on medium flame for 4 minutes until golden; drain.",
      "For street style: Slit the fried bajji open, stuff with finely chopped raw onions tossed in lemon juice and chaat masala, and serve piping hot."
    ]
  },
  {
    "id": "aloo-bajji-potato-fritters",
    "name": "Aloo Bajji (Potato Fritters)",
    "subCategory": "chaat-streetfood",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/aloo-bajji.jpg",
    "description": "Thin round slices of potato enveloped in a spiced gram flour batter, deep-fried into puffed golden pillows.",
    "ingredients": [
      {
        "name": "Raw Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "as needed"
      },
      {
        "name": "Rice Flour",
        "amount": "as needed"
      },
      {
        "name": "Ajwain",
        "amount": "as needed"
      },
      {
        "name": "Red Chilli Powder",
        "amount": "as needed"
      },
      {
        "name": "Hing (Asafoetida)",
        "amount": "as needed"
      },
      {
        "name": "Baking Soda",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Peel 2 large potatoes and slice into even, thin rounds (about 2 mm thick) using a mandoline slicer. Soak in cold salted water for 5 minutes, then pat completely dry.",
      "Prepare batter: In a bowl, whisk 1 cup besan, 2 tbsp rice flour, ajwain, chilli powder, hing, salt, and water into a thick, pourable batter.",
      "Add 1 tablespoon of smoking hot oil and a tiny pinch of baking soda into the batter; whisk briskly for 1 minute for extra puffiness.",
      "Dip each potato slice into the batter, coating both sides thoroughly.",
      "Slide gently into medium-hot oil. The slices will puff up like pillows within seconds.",
      "Fry on both sides for 3 minutes until crisp and golden brown; serve hot with green chutney."
    ]
  },
  {
    "id": "pav-bhaji",
    "name": "Pav Bhaji",
    "subCategory": "chaat-streetfood",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pav-bhaji.jpg",
    "description": "Mumbai's most beloved street food: rich mashed spiced vegetable gravy swimming in butter, served with soft griddle-toasted pav.",
    "ingredients": [
      {
        "name": "Pav Buns",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Cauliflower & Green Peas",
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
        "name": "Tomatoes",
        "amount": "as needed"
      },
      {
        "name": "Pav Bhaji Masala",
        "amount": "as needed"
      },
      {
        "name": "Kashmiri Chilli Powder",
        "amount": "as needed"
      },
      {
        "name": "Pure Salted Butter",
        "amount": "as needed"
      },
      {
        "name": "Lemon",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Pressure cook potatoes, cauliflower, carrots, and green peas with water and salt until completely soft; mash smooth with a potato masher.",
      "Heat 2 tbsp butter and 1 tbsp oil in a wide pan or flat tawa. Sauté finely chopped onions and ginger-garlic paste until golden.",
      "Add finely diced capsicum and sauté for 2 minutes; add chopped ripe tomatoes and cook until soft and pulpy.",
      "Add 2.5 tbsp authentic pav bhaji masala, 1 tbsp bright red Kashmiri chilli powder, and salt. Cook until butter starts separating.",
      "Add the mashed boiled vegetables and 1 cup of warm water. Mash continuously with the masher on medium heat for 6-8 minutes until thick and glossy.",
      "Finish with a giant block of butter, fresh lemon juice, and coriander.",
      "Slice pav buns horizontally. Toast on a hot tawa with a generous dollop of butter, a pinch of pav bhaji masala, and coriander until golden and soft.",
      "Serve steaming bhaji topped with extra melting butter, alongside the warm buttered pav, sliced onions, and lemon wedges."
    ]
  },
  {
    "id": "vada-pav",
    "name": "Vada Pav",
    "subCategory": "chaat-streetfood",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/vada-pav.jpg",
    "description": "The Mumbai burger: spiced batata vada inside a soft pav lined with dry red garlic-peanut chutney and green chutney.",
    "ingredients": [
      {
        "name": "Ladi Pav",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potatoes",
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
        "name": "Ginger Garlic Green Chilli Paste",
        "amount": "as needed"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "as needed"
      },
      {
        "name": "Dry Garlic Chutney",
        "amount": "as needed"
      },
      {
        "name": "Green Chutney",
        "amount": "as needed"
      },
      {
        "name": "Fried Green Chillies",
        "amount": "as needed"
      }
    ],
    "steps": [
      "For potato filling: Heat 1 tbsp oil; crackle mustard seeds, hing, curry leaves, and pounded ginger-garlic-green chilli paste. Add turmeric, salt, and coarsely mashed boiled potatoes. Sauté 2 minutes, finish with coriander, and shape into round balls.",
      "For batter: Whisk besan, rice flour, turmeric, salt, a pinch of baking soda, and water into a smooth dipping batter.",
      "Dip each potato ball into the batter, coating completely, and drop into hot oil.",
      "Deep-fry on medium flame for 3 to 4 minutes until golden and crisp; drain.",
      "Slit a soft ladi pav horizontally (leaving the hinge intact).",
      "Spread spicy green mint chutney on the bottom and a generous layer of authentic fiery dry red garlic-peanut chutney inside.",
      "Place the hot batata vada inside, press gently, and serve with a salted fried green chilli."
    ]
  },
  {
    "id": "dabeli-kutchi-dabeli",
    "name": "Dabeli (Kutchi Dabeli)",
    "subCategory": "chaat-streetfood",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/dabeli.jpg",
    "description": "Gujarat street food favorite: sweet and spicy potato mash stuffed in pav with masala peanuts, pomegranate, and sev.",
    "ingredients": [
      {
        "name": "Pav Buns",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Dabeli Masala",
        "amount": "as needed"
      },
      {
        "name": "Tamarind Chutney",
        "amount": "as needed"
      },
      {
        "name": "Spicy Masala Peanuts",
        "amount": "as needed"
      },
      {
        "name": "Pomegranate Seeds",
        "amount": "as needed"
      },
      {
        "name": "Nylon Sev",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      }
    ],
    "steps": [
      "In a pan, heat 1 tbsp oil. Sauté 2 tbsp dabeli masala with 3 tbsp sweet-tangy tamarind chutney until fragrant.",
      "Add mashed boiled potatoes and 2-3 tbsp water; mix into a smooth, moist, spiced potato spread. Simmer for 2 minutes.",
      "Spread the potato mixture onto a flat plate. Decorate the top with fresh pomegranate pearls, spicy masala peanuts, chopped coriander, and fine sev.",
      "Slit pav buns, apply sweet tamarind chutney and spicy garlic chutney inside.",
      "Stuff generously with the prepared potato mixture, extra masala peanuts, and pomegranate.",
      "Toast the stuffed dabeli on a hot tawa with generous butter on all sides until golden.",
      "Roll the exposed edges in a bowl of nylon sev so it sticks all around, and serve warm."
    ]
  },
  {
    "id": "aloo-tikki",
    "name": "Aloo Tikki",
    "subCategory": "chaat-streetfood",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/aloo-tikki.jpg",
    "description": "Delhi-style pan-crisped potato patties with a golden crackling crust, topped with spiced curd and chutneys.",
    "ingredients": [
      {
        "name": "Boiled Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Cornstarch / Rice Flour",
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
        "name": "Chaat Masala",
        "amount": "as needed"
      },
      {
        "name": "Cumin Powder",
        "amount": "as needed"
      },
      {
        "name": "Ghee or Oil for frying",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Boil potatoes, let them cool completely in the fridge (chilling removes moisture for a crisper crust), then grate finely.",
      "Mix grated potatoes with 2 tbsp cornstarch, 1 tbsp rice flour, minced green chillies, grated ginger, chaat masala, and salt into a smooth dough.",
      "Shape into thick, round 2.5-inch patties with smooth edges.",
      "Heat 3 tbsp ghee or oil on a flat heavy tawa on medium flame.",
      "Place patties on the tawa and shallow-fry slowly for 5-6 minutes on each side, pressing gently with a flat spatula until the exterior forms a deep golden, crackling, ultra-crisp crust.",
      "Serve hot as standalone tikkis or crush on a plate topped with whisked sweet curd, tamarind chutney, mint chutney, and sev."
    ]
  },
  {
    "id": "chole-bhature",
    "name": "Chole Bhature",
    "subCategory": "chaat-streetfood",
    "prepTime": 35,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/chole-bhature.jpg",
    "description": "Punjabi royal breakfast: balloon-puffed giant fermented bhature served with dark, intensely spiced Amritsari chole.",
    "ingredients": [
      {
        "name": "Maida (All Purpose Flour)",
        "amount": "as needed"
      },
      {
        "name": "Sooji (Semolina)",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Baking Powder",
        "amount": "as needed"
      },
      {
        "name": "Kabuli Chana (Chickpeas)",
        "amount": "as needed"
      },
      {
        "name": "Tea Bag (for dark color)",
        "amount": "as needed"
      },
      {
        "name": "Amritsari Chole Masala",
        "amount": "as needed"
      },
      {
        "name": "Onion & Tomatoes",
        "amount": "as needed"
      },
      {
        "name": "Pure Ghee",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "For chole: Pressure cook soaked chickpeas with a black tea bag (for deep authentic dark color), cinnamon, and black cardamom until melt-in-mouth soft.",
      "Sauté onions, ginger-garlic paste, tomato puree, chole masala, amchur, and coriander powder in ghee until oil separates. Simmer cooked chole with the gravy for 10 minutes, lightly mashing some chickpeas to thicken.",
      "For bhature dough: Knead 2 cups maida with 2 tbsp sooji, 0.5 cup curd, 0.5 tsp baking powder, pinch of baking soda, sugar, and warm water into a soft, elastic dough. Rest covered with a damp cloth for 2 hours.",
      "Divide into smooth balls, roll into large 7-inch oval sheets with light oil (do not use dry flour).",
      "Slide into smoking hot oil in a deep kadai. Immediately tap the bhatura lightly with a slotted ladle; it will puff into a giant golden balloon!",
      "Flip for 5 seconds until pale golden, drain, and serve immediately alongside hot Amritsari chole, pickled green chillies, and sliced red onions."
    ]
  },
  {
    "id": "veg-hakka-noodles",
    "name": "Veg Hakka Noodles",
    "subCategory": "noodles",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/hakka-noodles.jpg",
    "description": "Desi Indo-Chinese street style boiled noodles tossed on high flame with julienned vegetables, soy sauce, and black pepper.",
    "ingredients": [
      {
        "name": "Hakka Noodles",
        "amount": "as needed"
      },
      {
        "name": "Cabbage",
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
        "name": "Onion",
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
        "name": "Green Chilli Sauce",
        "amount": "as needed"
      },
      {
        "name": "Vinegar",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Boil noodles in salted water until 80% al dente; drain immediately, rinse in cold water, and toss with 1 tsp oil to keep strands separate.",
      "Heat 2 tbsp oil in a smoking hot wok on the highest flame.",
      "Add finely minced garlic and sliced onions; stir-fry for 30 seconds.",
      "Add julienned carrots, capsicum, and shredded cabbage; toss vigorously on high flame for 1.5 minutes to retain crunch.",
      "Add the boiled noodles, 1.5 tbsp light soy sauce, 1 tbsp green chilli sauce, 1 tsp vinegar, and freshly cracked black pepper.",
      "Using two tongs, toss noodles continuously on high flame for 2 minutes until smoky and well coated. Garnish with spring onions."
    ]
  },
  {
    "id": "egg-noodles",
    "name": "Egg Noodles",
    "subCategory": "noodles",
    "prepTime": 15,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/hakka-noodles.jpg",
    "description": "Street-style wok-tossed noodles with scrambled eggs, shredded cabbage, carrots, and piquant Chinese sauces.",
    "ingredients": [
      {
        "name": "Noodles",
        "amount": "as needed"
      },
      {
        "name": "Fresh Eggs",
        "amount": "as needed"
      },
      {
        "name": "Cabbage",
        "amount": "as needed"
      },
      {
        "name": "Carrot",
        "amount": "as needed"
      },
      {
        "name": "Spring Onions",
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
      "Boil noodles until al dente, drain, rinse with cold water, and coat with 1 tsp oil.",
      "Heat 1 tbsp oil in a hot wok; pour 2 whisked eggs seasoned with pepper and quickly scramble into soft ribbons; remove.",
      "In the same wok, heat 1 tbsp oil on high flame, sauté minced garlic and spring onions.",
      "Add shredded vegetables and toss for 1 minute.",
      "Add noodles, scrambled eggs, soy sauce, chilli sauce, and black pepper; toss on high flame for 2 minutes until hot and fragrant."
    ]
  },
  {
    "id": "chicken-noodles",
    "name": "Chicken Noodles",
    "subCategory": "noodles",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/hakka-noodles.jpg",
    "description": "Tender seasoned chicken strips stir-fried with noodles, vegetables, garlic, and savory umami sauces.",
    "ingredients": [
      {
        "name": "Noodles",
        "amount": "as needed"
      },
      {
        "name": "Boneless Chicken (sliced)",
        "amount": "as needed"
      },
      {
        "name": "Eggs",
        "amount": "as needed"
      },
      {
        "name": "Cabbage",
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
        "name": "Chilli Sauce",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate thin strips of chicken breast with 0.5 tsp soy sauce, cornstarch, pepper, and salt for 10 minutes.",
      "Stir-fry chicken strips in 2 tbsp oil on high flame for 3-4 minutes until cooked through and golden; push to the side.",
      "Quickly scramble 1 egg in the center of the wok.",
      "Add minced garlic, julienned cabbage, carrots, and capsicum; toss on smoking high flame.",
      "Add boiled noodles, soy sauce, vinegar, chilli sauce, and cracked black pepper; toss vigorously for 2 minutes."
    ]
  },
  {
    "id": "schezwan-noodles",
    "name": "Schezwan Noodles",
    "subCategory": "noodles",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/hakka-noodles.jpg",
    "description": "Fiery and spicy red noodles tossed with homemade Schezwan sauce, garlic, and crunchy vegetables.",
    "ingredients": [
      {
        "name": "Noodles",
        "amount": "as needed"
      },
      {
        "name": "Schezwan Sauce",
        "amount": "as needed"
      },
      {
        "name": "Garlic & Ginger",
        "amount": "as needed"
      },
      {
        "name": "Cabbage",
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
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Spring Onions",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Boil noodles until al dente, rinse in cold water, and toss with oil.",
      "Heat 2 tbsp oil in a wok on high heat; sauté minced garlic, ginger, and spring onions.",
      "Add julienned vegetables and stir-fry for 1.5 minutes.",
      "Add 2 generous tablespoons of spicy red Schezwan sauce and 1 tsp soy sauce; stir until bubbling.",
      "Toss in the noodles and stir-fry on high flame until every strand is coated in fiery red sauce. Garnish with scallions."
    ]
  },
  {
    "id": "chicken-schezwan-noodles",
    "name": "Chicken Schezwan Noodles",
    "subCategory": "noodles",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/hakka-noodles.jpg",
    "description": "Spicy street food favorite: tender chicken strips tossed with noodles in fiery Schezwan sauce and crunchy vegetables.",
    "ingredients": [
      {
        "name": "Noodles",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Schezwan Sauce",
        "amount": "as needed"
      },
      {
        "name": "Garlic",
        "amount": "as needed"
      },
      {
        "name": "Carrot",
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
        "name": "Spring Onions",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Sear sliced chicken breast in 2 tbsp oil until golden and cooked.",
      "Add minced garlic, sliced carrots, and cabbage; toss on high heat for 1 minute.",
      "Stir in 2.5 tablespoons of Schezwan sauce and soy sauce.",
      "Add boiled noodles and toss vigorously on high flame so the spicy red sauce glazes the chicken and noodles evenly."
    ]
  },
  {
    "id": "veg-steamed-momos",
    "name": "Veg Steamed Momos",
    "subCategory": "momos",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/momos.jpg",
    "description": "Delicate, translucent steamed dumplings stuffed with finely minced cabbage, carrots, onions, garlic, and black pepper.",
    "ingredients": [
      {
        "name": "Maida (All Purpose Flour)",
        "amount": "as needed"
      },
      {
        "name": "Cabbage (finely grated)",
        "amount": "as needed"
      },
      {
        "name": "Carrot",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Garlic & Ginger",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Knead 1.5 cups maida with water and a pinch of salt into a smooth, firm dough; rest covered for 20 minutes.",
      "For filling: Mix finely grated cabbage, carrots, onions, minced garlic, ginger, black pepper, 1 tsp soy sauce, 1 tbsp oil, and salt. Squeeze lightly to remove excess water.",
      "Divide dough into small marble-sized balls; roll into very thin 3-inch discs with thinner edges and slightly thicker center.",
      "Place 1 tablespoon of filling in the center.",
      "Pleat the edges from one side to the other, pinching tightly to create the classic crescent or round pouch shape.",
      "Grease steamer plates with oil, arrange momos leaving space between them, and steam on high heat for 8 to 10 minutes until skins turn translucent and glossy. Serve with spicy red chilli-garlic dip."
    ]
  },
  {
    "id": "chicken-steamed-momos",
    "name": "Chicken Steamed Momos",
    "subCategory": "momos",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/momos.jpg",
    "description": "Juicy, succulent steamed dumplings stuffed with seasoned minced chicken, scallions, and ginger-garlic.",
    "ingredients": [
      {
        "name": "Maida",
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
        "name": "Spring Onions",
        "amount": "as needed"
      },
      {
        "name": "Ginger & Garlic",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Butter or Oil",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      }
    ],
    "steps": [
      "In a bowl, mix minced chicken with finely chopped onions, spring onions, ginger, garlic, soy sauce, black pepper, and 1 tbsp melted butter (butter keeps chicken momos juicy inside).",
      "Roll thin circular wrappers from rested dough.",
      "Place filling in the center, pleat and pinch the edges together to seal tightly.",
      "Steam on high heat for 10 to 12 minutes until wrappers are shiny and chicken is fully cooked.",
      "Serve piping hot with fiery red momo chutney."
    ]
  },
  {
    "id": "fried-chicken-momos",
    "name": "Fried Chicken Momos",
    "subCategory": "momos",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/momos.jpg",
    "description": "Crispy golden deep-fried dumplings with a crackling outer shell and juicy chicken filling.",
    "ingredients": [
      {
        "name": "Chicken Momos (prepared)",
        "amount": "as needed"
      },
      {
        "name": "Oil for frying",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Prepare chicken momos and steam lightly for 5 minutes (half-steam prevents dough from getting chewy during frying).",
      "Heat oil in a deep kadai on medium flame.",
      "Drop the prepared momos into medium-hot oil.",
      "Deep-fry for 4 to 5 minutes, turning gently until the outer wrapper turns uniformly golden brown and crisp.",
      "Drain on paper towels and dust with a pinch of peri-peri or chaat masala; serve hot with mayonnaise and red chilli sauce."
    ]
  },
  {
    "id": "tandoori-momos",
    "name": "Tandoori Momos",
    "subCategory": "momos",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/momos.jpg",
    "description": "Delhi street innovation: steamed momos coated in a spicy hung curd tandoori marinade, roasted to smoky perfection.",
    "ingredients": [
      {
        "name": "Steamed Momos",
        "amount": "as needed"
      },
      {
        "name": "Thick Curd",
        "amount": "as needed"
      },
      {
        "name": "Kashmiri Chilli Powder",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Garam Masala",
        "amount": "as needed"
      },
      {
        "name": "Kasuri Methi",
        "amount": "as needed"
      },
      {
        "name": "Mustard Oil",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Whisk thick curd with mustard oil, Kashmiri chilli powder, ginger-garlic paste, garam masala, crushed kasuri methi, and lemon juice into a rich red tandoori marinade.",
      "Gently coat steamed momos with the marinade; let sit for 10 minutes.",
      "Skewer or place on a greased grill pan / tawa.",
      "Roast on high heat with butter or over direct flame for 4-5 minutes until blistered with smoky charred spots.",
      "Toss with chaat masala, lemon juice, and sliced onions; serve hot with mint chutney."
    ]
  },
  {
    "id": "kurkure-momos",
    "name": "Kurkure Momos",
    "subCategory": "momos",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/momos.jpg",
    "description": "Ultra-crunchy fried momos coated in a seasoned cornflake crumb crust, served with spicy dip.",
    "ingredients": [
      {
        "name": "Steamed Momos",
        "amount": "as needed"
      },
      {
        "name": "Cornflakes (crushed)",
        "amount": "as needed"
      },
      {
        "name": "Cornstarch & Maida",
        "amount": "as needed"
      },
      {
        "name": "Chilli Flakes & Oregano",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Crush plain cornflakes coarsely with hands or rolling pin.",
      "Make a smooth medium-thick slurry with maida, cornstarch, chilli flakes, and water.",
      "Dip each steamed momo into the slurry, then roll thoroughly in the crushed cornflakes to coat all sides evenly.",
      "Heat oil on medium flame.",
      "Fry for 3 to 4 minutes until the cornflake crust turns deep golden and super crunchy. Serve hot."
    ]
  },
  {
    "id": "chicken-kathi-roll",
    "name": "Chicken Kathi Roll",
    "subCategory": "rolls",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/kathi-roll.jpg",
    "description": "Kolkata style street wrap: flaky paratha layered with fried egg, stuffed with spiced chicken tikka, sliced onions, and green chutney.",
    "ingredients": [
      {
        "name": "Paratha / Roti",
        "amount": "as needed"
      },
      {
        "name": "Chicken (boneless cubes)",
        "amount": "as needed"
      },
      {
        "name": "Egg",
        "amount": "as needed"
      },
      {
        "name": "Onion (sliced)",
        "amount": "as needed"
      },
      {
        "name": "Green Chutney",
        "amount": "as needed"
      },
      {
        "name": "Chaat Masala",
        "amount": "as needed"
      },
      {
        "name": "Lemon Juice",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Sauté marinated chicken tikka pieces in 1 tbsp oil until juicy and charred around edges.",
      "Cook a flaky layered paratha on a tawa with ghee.",
      "Crack an egg on the tawa, season with salt and pepper, and place the paratha directly on top of the raw egg; press so they stick together into an egg-paratha.",
      "Flip and cook for 30 seconds until egg is set; place on greaseproof paper egg-side up.",
      "Arrange the spiced chicken cubes along the center, top with thinly sliced red onions, a drizzle of spicy green chutney, sweet tomato sauce, and a squeeze of fresh lemon juice.",
      "Roll tightly into a parchment paper cylinder and serve hot."
    ]
  },
  {
    "id": "egg-roll",
    "name": "Egg Roll",
    "subCategory": "rolls",
    "prepTime": 15,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/kathi-roll.jpg",
    "description": "Crispy golden paratha fried with double eggs, rolled with crunchy raw onions, green chillies, and tangy chaat masala.",
    "ingredients": [
      {
        "name": "Paratha",
        "amount": "as needed"
      },
      {
        "name": "2 Eggs",
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
        "name": "Chaat Masala",
        "amount": "as needed"
      },
      {
        "name": "Tomato Ketchup",
        "amount": "as needed"
      },
      {
        "name": "Lemon Juice",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Heat 1 tbsp oil on a flat tawa; pour 2 whisked eggs.",
      "Place a paratha or flatbread directly over the wet egg, press firmly, and cook until the egg bonds with the paratha.",
      "Flip and toast until the paratha is crisp and golden; transfer to paper.",
      "Layer thinly sliced onions, chopped green chillies, chaat masala, lemon juice, and a drizzle of tomato sauce along the center.",
      "Roll up tightly and serve hot."
    ]
  },
  {
    "id": "paneer-kathi-roll",
    "name": "Paneer Kathi Roll",
    "subCategory": "rolls",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/kathi-roll.jpg",
    "description": "Flaky whole wheat paratha wrapped around spiced paneer tikka, crunchy bell peppers, sliced onions, and mint chutney.",
    "ingredients": [
      {
        "name": "Paratha",
        "amount": "as needed"
      },
      {
        "name": "Paneer Cubes",
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
        "name": "Tandoori Masala",
        "amount": "as needed"
      },
      {
        "name": "Mint Chutney",
        "amount": "as needed"
      },
      {
        "name": "Chaat Masala",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate paneer cubes and sliced bell peppers in curd, tandoori masala, ginger-garlic paste, and lemon juice for 15 minutes.",
      "Sauté on high heat in a pan with butter for 3-4 minutes until paneer is lightly charred.",
      "Warm a flaky paratha on the tawa.",
      "Spread mint-coriander chutney, arrange the hot paneer tikka filling, top with raw sliced onions and chaat masala, roll tightly, and wrap in paper."
    ]
  },
  {
    "id": "veg-frankie",
    "name": "Veg Frankie",
    "subCategory": "rolls",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/kathi-roll.jpg",
    "description": "Mumbai street classic: warm roti rolled with a spiced potato roll, chopped onions, and a sprinkle of frankie masala.",
    "ingredients": [
      {
        "name": "Roti / Tortilla",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Frankie Masala",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Vinegar Chilli Water",
        "amount": "as needed"
      },
      {
        "name": "Green Chutney",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Shape spiced boiled mashed potatoes into cylindrical cutlets; shallow fry in butter until crisp golden on both sides.",
      "Warm a thin roti on a tawa with butter.",
      "Spread green chutney, place the hot potato cutlet in the center, top with sliced onions, a sprinkle of authentic frankie masala, and a splash of vinegar-soaked green chillies.",
      "Roll tightly into a cylinder and enjoy hot."
    ]
  },
  {
    "id": "bombay-grilled-sandwich",
    "name": "Bombay Grilled Sandwich",
    "subCategory": "burgers-sandwiches",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/bombay-sandwich.jpg",
    "description": "Mumbai street icon: three-layered buttered bread stuffed with spiced potatoes, beetroot, cucumber, tomato, and cheese, grilled crisp.",
    "ingredients": [
      {
        "name": "White Bread Slices",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potatoes (sliced)",
        "amount": "as needed"
      },
      {
        "name": "Beetroot (boiled & sliced)",
        "amount": "as needed"
      },
      {
        "name": "Cucumber & Tomato",
        "amount": "as needed"
      },
      {
        "name": "Amul Butter",
        "amount": "as needed"
      },
      {
        "name": "Green Mint Chutney",
        "amount": "as needed"
      },
      {
        "name": "Sandwich Masala",
        "amount": "as needed"
      },
      {
        "name": "Grated Cheese",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Butter 3 slices of bread generously on one side; spread vibrant spicy green mint-coriander chutney over the butter.",
      "Layer the first slice with thin round slices of boiled potatoes and cucumber; sprinkle authentic Bombay sandwich masala.",
      "Place the second slice of bread over it; layer with sliced tomatoes, boiled beetroot rounds, onion rings, and grated cheese.",
      "Cover with the third slice, butter the top crust lavishly.",
      "Grill in a hot sandwich toaster or on a grooved tawa, pressing firmly until both sides turn deep golden, grill-marked, and ultra-crisp.",
      "Cut into 4 bite-sized squares, top with extra grated cheese, fine sev, and serve with ketchup and green chutney."
    ]
  },
  {
    "id": "veg-crispy-burger",
    "name": "Veg Crispy Burger",
    "subCategory": "burgers-sandwiches",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/burger.jpg",
    "description": "Toasted sesame bun with a crispy potato-corn patty, fresh lettuce, sliced onions, tomatoes, and spicy eggless mayo.",
    "ingredients": [
      {
        "name": "Burger Buns",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potatoes & Sweet Corn",
        "amount": "as needed"
      },
      {
        "name": "Breadcrumbs",
        "amount": "as needed"
      },
      {
        "name": "Lettuce",
        "amount": "as needed"
      },
      {
        "name": "Onion & Tomato",
        "amount": "as needed"
      },
      {
        "name": "Cheese Slice",
        "amount": "as needed"
      },
      {
        "name": "Mayonnaise",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Mash boiled potatoes with boiled sweet corn, peas, chaat masala, and breadcrumbs into thick round burger patties.",
      "Dip patty in a light cornstarch slurry, coat with breadcrumbs, and deep-fry or pan-fry until golden brown and crackling crisp.",
      "Slice burger buns in half; toast the cut sides with butter on a hot tawa until golden.",
      "Spread spicy mayo on the bottom bun, place a crisp lettuce leaf, the hot crispy patty, a slice of cheese, and sliced onions and tomatoes.",
      "Spread sauce on the top bun, close the burger, and serve hot with French fries."
    ]
  },
  {
    "id": "chicken-burger",
    "name": "Chicken Burger",
    "subCategory": "burgers-sandwiches",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/burger.jpg",
    "description": "Juicy seasoned chicken patty inside a butter-toasted bun with melted cheese, crisp lettuce, and special burger sauce.",
    "ingredients": [
      {
        "name": "Burger Buns",
        "amount": "as needed"
      },
      {
        "name": "Minced Chicken / Chicken Breast",
        "amount": "as needed"
      },
      {
        "name": "Cheese Slice",
        "amount": "as needed"
      },
      {
        "name": "Lettuce",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Burger Sauce",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Season chicken patty with garlic powder, paprika, black pepper, and salt; grill or pan-sear on medium-high for 3-4 minutes per side until juicy.",
      "Place a cheese slice over the hot patty in the last minute so it melts completely.",
      "Toast buttered burger buns until golden.",
      "Assemble with sauce, lettuce, the cheesy chicken patty, sliced red onions, and pickles."
    ]
  },
  {
    "id": "club-sandwich",
    "name": "Club Sandwich",
    "subCategory": "burgers-sandwiches",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/bombay-sandwich.jpg",
    "description": "Triple-decker toasted sandwich packed with fresh veggies, cheese, potato filling, and tangy herb spread.",
    "ingredients": [
      {
        "name": "Bread Slices",
        "amount": "as needed"
      },
      {
        "name": "Cheese Slice",
        "amount": "as needed"
      },
      {
        "name": "Cucumber",
        "amount": "as needed"
      },
      {
        "name": "Tomato",
        "amount": "as needed"
      },
      {
        "name": "Lettuce",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      },
      {
        "name": "Green Chutney",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Toast 3 bread slices until crisp and golden; butter one side of each slice.",
      "Spread herb mayo or green chutney on the first slice, layer with crisp lettuce, cucumber, and cheese.",
      "Cover with the second slice, spread chutney, layer with tomatoes, seasoned potato slices, and bell peppers.",
      "Cover with the third slice, trim the crusts, cut into triangles, secure with toothpicks, and serve with potato wafers."
    ]
  },
  {
    "id": "chicken-65",
    "name": "Chicken 65",
    "subCategory": "fast-food",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chicken-65.jpg",
    "description": "Iconic Chennai Military canteen appetizer: bite-sized chicken cubes marinated in fiery red spices, deep-fried and tossed with curry leaves and green chillies.",
    "ingredients": [
      {
        "name": "Boneless Chicken",
        "amount": "as needed"
      },
      {
        "name": "Curd",
        "amount": "as needed"
      },
      {
        "name": "Kashmiri Chilli Powder",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Cornstarch & Rice Flour",
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
        "name": "Garlic (sliced)",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Cut chicken into 1-inch bite-sized cubes. Marinate with 2 tbsp thick curd, 1.5 tbsp Kashmiri chilli powder, 1 tbsp ginger-garlic paste, 0.5 tsp pepper, 2 tbsp cornstarch, 1 tbsp rice flour, and salt for 30 minutes.",
      "Heat oil in a deep kadai on medium-high flame.",
      "Drop marinated chicken pieces one by one into the hot oil (do not crowd the pan).",
      "Deep-fry for 5 to 6 minutes until deep red, crisp on the outside, and juicy inside; drain.",
      "For authentic street tempering (tadka): Heat 1 tbsp oil in a hot pan; crackle sliced garlic, lots of fresh curry leaves, and slit green chillies until crisp.",
      "Add the fried chicken pieces into the tempering, toss vigorously on high heat for 1 minute, and serve with lemon wedges and raw onion rings."
    ]
  },
  {
    "id": "gobi-manchurian",
    "name": "Gobi Manchurian",
    "subCategory": "fast-food",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/gobi-manchurian.jpg",
    "description": "Crispy golden cauliflower florets tossed in a spicy, sweet, and tangy Indo-Chinese Manchurian sauce with spring onions.",
    "ingredients": [
      {
        "name": "Cauliflower (florets)",
        "amount": "as needed"
      },
      {
        "name": "Cornstarch & Maida",
        "amount": "as needed"
      },
      {
        "name": "Ginger & Garlic",
        "amount": "as needed"
      },
      {
        "name": "Green Chillies",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Tomato Ketchup",
        "amount": "as needed"
      },
      {
        "name": "Chilli Sauce",
        "amount": "as needed"
      },
      {
        "name": "Spring Onions",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Blanch bite-sized cauliflower florets in boiling salted water for 2 minutes; drain and pat dry.",
      "Make a coating batter with 3 tbsp cornstarch, 3 tbsp maida, black pepper, red chilli powder, salt, and water to a thick coating consistency.",
      "Dip florets into the batter and deep-fry in hot oil until pale golden; remove and rest for 2 minutes, then double-fry on high flame for 1 minute for extreme crackling crunch.",
      "For sauce: Heat 1 tbsp oil in a wok on high heat; sauté finely minced garlic, ginger, and green chillies for 30 seconds.",
      "Add 1 tbsp soy sauce, 1.5 tbsp tomato ketchup, 1 tbsp red chilli sauce, and 2 tbsp water; simmer until glossy and bubbling.",
      "Toss the ultra-crispy fried gobi into the hot sauce for 30 seconds until glazed without losing crunch. Garnish with chopped scallions."
    ]
  },
  {
    "id": "chilli-chicken",
    "name": "Chilli Chicken",
    "subCategory": "fast-food",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chilli-chicken.jpg",
    "description": "Diced chicken wok-tossed with crunchy bell peppers, onions, green chillies, garlic, and dark soy sauce.",
    "ingredients": [
      {
        "name": "Boneless Chicken",
        "amount": "as needed"
      },
      {
        "name": "Capsicum & Onion (diced)",
        "amount": "as needed"
      },
      {
        "name": "Green Chillies",
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
        "name": "Chilli Sauce",
        "amount": "as needed"
      },
      {
        "name": "Vinegar",
        "amount": "as needed"
      },
      {
        "name": "Cornstarch",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate diced chicken with egg white, 1 tbsp soy sauce, cornstarch, pepper, and salt; deep-fry until golden and crisp.",
      "In a hot wok, heat 2 tbsp oil on high flame; sauté crushed garlic and slit green chillies.",
      "Add square-cut onions and green capsicum; stir-fry on high heat for 1.5 minutes to keep them crunchy.",
      "Add 1 tbsp dark soy sauce, 1 tbsp red chilli sauce, 1 tsp vinegar, and 2 tbsp chicken stock or water.",
      "Add a dash of cornstarch slurry to make a glossy glaze; toss the crispy chicken pieces on high flame for 1 minute until coated."
    ]
  },
  {
    "id": "chilli-paneer",
    "name": "Chilli Paneer",
    "subCategory": "fast-food",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/chilli-paneer.jpg",
    "description": "Crispy pan-fried paneer cubes tossed in an aromatic oriental sauce with bell peppers, green chillies, and spring onions.",
    "ingredients": [
      {
        "name": "Fresh Paneer Cubes",
        "amount": "as needed"
      },
      {
        "name": "Capsicum & Onion",
        "amount": "as needed"
      },
      {
        "name": "Garlic & Ginger",
        "amount": "as needed"
      },
      {
        "name": "Green Chillies",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Chilli Sauce",
        "amount": "as needed"
      },
      {
        "name": "Cornstarch",
        "amount": "as needed"
      },
      {
        "name": "Spring Onions",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Dust paneer cubes in cornstarch, salt, and pepper; shallow fry in 2 tbsp oil until golden on all sides.",
      "Heat 1 tbsp oil in a wok on high heat; toss minced garlic, green chillies, square onions, and capsicum for 1 minute.",
      "Add soy sauce, chilli sauce, vinegar, and a splash of water.",
      "Toss in the crispy paneer cubes gently so they absorb the savory glaze without breaking. Garnish with spring onions."
    ]
  },
  {
    "id": "chicken-lollipop",
    "name": "Chicken Lollipop",
    "subCategory": "fast-food",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chicken-lollipop.jpg",
    "description": "French-cut chicken wingettes shaped like lollipops, marinated in Indo-Chinese spices, fried into crispy red drumsticks.",
    "ingredients": [
      {
        "name": "Chicken Wingettes / Lollipops",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Kashmiri Chilli Powder",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Cornstarch & Maida",
        "amount": "as needed"
      },
      {
        "name": "Schezwan Sauce",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Shape chicken wings into lollipops by pushing the meat to the top of the bone.",
      "Marinate with ginger-garlic paste, red chilli powder, soy sauce, black pepper, and salt for 30 minutes.",
      "Dip in a seasoned cornstarch-maida batter and deep-fry in medium-hot oil for 6 to 8 minutes until golden and cooked to the bone.",
      "Toss lightly in sweet and spicy Schezwan sauce or serve dry with foil wrapped around the bone tip alongside Schezwan dip."
    ]
  },
  {
    "id": "french-fries-salted-peri-peri",
    "name": "French Fries (Salted & Peri Peri)",
    "subCategory": "fast-food",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/french-fries.jpg",
    "description": "Golden, double-fried crispy potato batons seasoned with sea salt or spicy Peri-Peri seasoning.",
    "ingredients": [
      {
        "name": "Large Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Cold Water",
        "amount": "as needed"
      },
      {
        "name": "Cornstarch",
        "amount": "as needed"
      },
      {
        "name": "Salt",
        "amount": "as needed"
      },
      {
        "name": "Peri Peri Seasoning",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Cut potatoes into even 1 cm batons; rinse in cold water 3 times to remove surface starch, then boil in salted water for 5 minutes until just tender; drain and cool completely.",
      "Dust batons lightly with cornstarch.",
      "First fry: Fry in medium-hot oil for 4 minutes until pale; remove and drain.",
      "Second fry: Increase oil temperature to high and flash-fry for 2 minutes until blistered, golden brown, and super crunchy.",
      "Transfer to a bowl, immediately dust with peri-peri masala or sea salt, toss, and serve hot."
    ]
  },
  {
    "id": "spring-rolls",
    "name": "Spring Rolls",
    "subCategory": "fast-food",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/spring-rolls.jpg",
    "description": "Crunchy golden fried wrapper rolls stuffed with seasoned stir-fried vegetables and noodles.",
    "ingredients": [
      {
        "name": "Spring Roll Wrappers",
        "amount": "as needed"
      },
      {
        "name": "Cabbage (shredded)",
        "amount": "as needed"
      },
      {
        "name": "Carrots",
        "amount": "as needed"
      },
      {
        "name": "Capsicum",
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
        "name": "Flour Paste",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Stir-fry shredded cabbage, carrots, capsicum, and noodles with soy sauce and black pepper on high heat for 2 minutes; cool completely.",
      "Place a square spring roll sheet with a corner pointing toward you.",
      "Place 2 tablespoons of vegetable filling across the bottom third.",
      "Fold the bottom corner up over the filling, tuck tightly, fold both side corners inward into an envelope shape.",
      "Roll tightly upward, apply a paste of flour and water on the final corner, and seal firmly.",
      "Deep-fry on medium flame for 4 to 5 minutes until blister-free, uniform golden brown and crunchy. Slice diagonally and serve with sweet chilli dip."
    ]
  },
  {
    "id": "garlic-noodles",
    "name": "Garlic Noodles",
    "subCategory": "noodles",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/hakka-noodles.jpg",
    "description": "Burnt garlic flavored street noodles with crunchy green bell peppers and scallions.",
    "ingredients": [
      {
        "name": "Noodles",
        "amount": "as needed"
      },
      {
        "name": "Fresh Garlic",
        "amount": "as needed"
      },
      {
        "name": "Spring Onions",
        "amount": "as needed"
      },
      {
        "name": "Capsicum",
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
      "Boil noodles al dente, drain, and toss in 1 tsp oil.",
      "Heat 2 tbsp oil in a wok; add 2 tablespoons of finely minced garlic and fry until fragrant and golden.",
      "Add sliced spring onions and capsicum; toss on high flame for 1 minute.",
      "Toss in the boiled noodles, soy sauce, a dash of vinegar, and cracked black pepper.",
      "Stir-fry on high heat for 2 minutes to lock in the smoky burnt garlic aroma."
    ]
  },
  {
    "id": "paneer-noodles",
    "name": "Paneer Noodles",
    "subCategory": "noodles",
    "prepTime": 18,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/hakka-noodles.jpg",
    "description": "Stir-fried noodles loaded with golden pan-seared paneer cubes and crunchy garden vegetables.",
    "ingredients": [
      {
        "name": "Noodles",
        "amount": "as needed"
      },
      {
        "name": "Fresh Paneer",
        "amount": "as needed"
      },
      {
        "name": "Cabbage & Carrot",
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
        "name": "Chilli Sauce",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Pan-fry small paneer cubes in 1 tbsp oil until light golden; remove.",
      "In the same wok on high flame, sauté minced garlic, sliced carrots, and cabbage for 1.5 minutes.",
      "Add boiled noodles, light soy sauce, green chilli sauce, and black pepper.",
      "Gently fold in the golden paneer cubes and toss on high flame for 2 minutes without breaking the paneer."
    ]
  },
  {
    "id": "mixed-noodles",
    "name": "Mixed Noodles",
    "subCategory": "noodles",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/hakka-noodles.jpg",
    "description": "Deluxe street noodles loaded with chicken, scrambled egg, prawns, and shredded vegetables.",
    "ingredients": [
      {
        "name": "Noodles",
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
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Spring Onions",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Sear chicken strips and deveined prawns in 2 tbsp oil until tender; scramble 1 egg in the wok.",
      "Add minced garlic and shredded vegetables on smoking high flame.",
      "Add boiled noodles, dark soy sauce, chilli sauce, vinegar, and pepper.",
      "Toss continuously on high flame for 2-3 minutes for authentic street-style wok hei."
    ]
  },
  {
    "id": "paneer-momos",
    "name": "Paneer Momos",
    "subCategory": "momos",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/momos.jpg",
    "description": "Steamed dumplings filled with crumbled spiced paneer, onions, ginger, and green chillies.",
    "ingredients": [
      {
        "name": "Maida",
        "amount": "as needed"
      },
      {
        "name": "Fresh Paneer",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Ginger & Green Chillies",
        "amount": "as needed"
      },
      {
        "name": "Coriander",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Crumble fresh paneer and mix with finely chopped onions, ginger, green chillies, black pepper, and coriander.",
      "Roll thin wrappers from rested maida dough.",
      "Place 1 tbsp paneer filling in the center, pleat the edges to form a sealed pouch.",
      "Steam on high heat for 8 to 10 minutes until skins turn translucent.",
      "Serve warm with spicy red tomato-garlic momo dip."
    ]
  },
  {
    "id": "egg-chicken-roll",
    "name": "Egg Chicken Roll",
    "subCategory": "rolls",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/kathi-roll.jpg",
    "description": "Kolkata street favorite: flaky paratha cooked with an egg and loaded with spiced roasted chicken cubes.",
    "ingredients": [
      {
        "name": "Paratha",
        "amount": "as needed"
      },
      {
        "name": "Egg",
        "amount": "as needed"
      },
      {
        "name": "Chicken Tikka",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Green Chutney",
        "amount": "as needed"
      },
      {
        "name": "Chaat Masala",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Sauté marinated chicken pieces in butter until tender and charred.",
      "Cook paratha on tawa; crack an egg on top and flip so the egg adheres to the paratha.",
      "Spread mint chutney on the egg side, pile juicy chicken pieces, sliced onions, chaat masala, and lemon juice.",
      "Roll tightly into greaseproof paper and serve hot."
    ]
  },
  {
    "id": "paneer-roll",
    "name": "Paneer Roll",
    "subCategory": "rolls",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/kathi-roll.jpg",
    "description": "Flaky tawa paratha rolled with tandoori paneer cubes, crunchy peppers, and sweet-spicy chutneys.",
    "ingredients": [
      {
        "name": "Paratha",
        "amount": "as needed"
      },
      {
        "name": "Paneer",
        "amount": "as needed"
      },
      {
        "name": "Capsicum & Onion",
        "amount": "as needed"
      },
      {
        "name": "Mint Chutney",
        "amount": "as needed"
      },
      {
        "name": "Chaat Masala",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Pan-sear paneer cubes with tandoori masala and capsicum for 3 minutes.",
      "Toast paratha on griddle with pure ghee until flaky.",
      "Layer mint chutney, spiced paneer filling, crunchy onion slices, and chaat masala.",
      "Roll up tightly and serve warm."
    ]
  },
  {
    "id": "veg-roll",
    "name": "Veg Roll",
    "subCategory": "rolls",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/kathi-roll.jpg",
    "description": "Crunchy stir-fried vegetables and seasoned potato mash wrapped in a crisp whole wheat flatbread.",
    "ingredients": [
      {
        "name": "Paratha / Roti",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Carrots & Cabbage",
        "amount": "as needed"
      },
      {
        "name": "Green Chutney",
        "amount": "as needed"
      },
      {
        "name": "Chaat Masala",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Sauté shredded vegetables with chaat masala and cumin.",
      "Place on a warm paratha lined with green chutney and seasoned potato spread.",
      "Top with pickled onions, roll up, and serve."
    ]
  },
  {
    "id": "chicken-frankie",
    "name": "Chicken Frankie",
    "subCategory": "rolls",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/kathi-roll.jpg",
    "description": "Mumbai street frankie stuffed with juicy spiced chicken, frankie masala, and vinegar-soaked green chillies.",
    "ingredients": [
      {
        "name": "Roti",
        "amount": "as needed"
      },
      {
        "name": "Chicken",
        "amount": "as needed"
      },
      {
        "name": "Frankie Masala",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Chilli Vinegar",
        "amount": "as needed"
      },
      {
        "name": "Green Chutney",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Sauté spiced chicken pieces with frankie masala until tender.",
      "Warm roti on a tawa with butter; spread chutney and arrange the chicken filling.",
      "Sprinkle frankie masala, chopped onions, and a splash of vinegar chillies.",
      "Roll tightly and serve in a paper sleeve."
    ]
  },
  {
    "id": "paneer-frankie",
    "name": "Paneer Frankie",
    "subCategory": "rolls",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/kathi-roll.jpg",
    "description": "Soft roti layered with spiced paneer batons, frankie masala, and tangy vinegar green chillies.",
    "ingredients": [
      {
        "name": "Roti",
        "amount": "as needed"
      },
      {
        "name": "Paneer",
        "amount": "as needed"
      },
      {
        "name": "Frankie Masala",
        "amount": "as needed"
      },
      {
        "name": "Onion",
        "amount": "as needed"
      },
      {
        "name": "Chilli Vinegar",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Sauté paneer strips in butter with turmeric, chilli powder, and frankie masala.",
      "Assemble on warm buttered roti with onions, frankie spice dust, and vinegar chillies.",
      "Roll and serve hot."
    ]
  },
  {
    "id": "cheese-burger",
    "name": "Cheese Burger",
    "subCategory": "burgers-sandwiches",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/burger.jpg",
    "description": "Double melted cheese slices over a crispy golden vegetable patty inside a toasted sesame bun.",
    "ingredients": [
      {
        "name": "Burger Buns",
        "amount": "as needed"
      },
      {
        "name": "Crispy Veg Patty",
        "amount": "as needed"
      },
      {
        "name": "2 Cheese Slices",
        "amount": "as needed"
      },
      {
        "name": "Lettuce",
        "amount": "as needed"
      },
      {
        "name": "Tomato & Onion",
        "amount": "as needed"
      },
      {
        "name": "Burger Sauce",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Pan-fry crispy veg patty until hot.",
      "Melt cheese slices over the hot patty on the pan.",
      "Layer sauce, lettuce, the double cheesy patty, tomatoes, and toasted sesame buns."
    ]
  },
  {
    "id": "paneer-burger",
    "name": "Paneer Burger",
    "subCategory": "burgers-sandwiches",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/burger.jpg",
    "description": "Thick slice of marinated grilled paneer inside a warm toasted bun with mint mayo and crunchy onions.",
    "ingredients": [
      {
        "name": "Burger Buns",
        "amount": "as needed"
      },
      {
        "name": "Thick Paneer Slab",
        "amount": "as needed"
      },
      {
        "name": "Tandoori Spices",
        "amount": "as needed"
      },
      {
        "name": "Onion & Tomato",
        "amount": "as needed"
      },
      {
        "name": "Mint Mayo",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate a thick paneer slab in tandoori spices; grill on tawa with butter until golden.",
      "Toast buns with butter.",
      "Assemble with mint mayo, crisp lettuce, the grilled paneer slab, and onion rings."
    ]
  },
  {
    "id": "veg-sandwich",
    "name": "Veg Sandwich",
    "subCategory": "burgers-sandwiches",
    "prepTime": 10,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/bombay-sandwich.jpg",
    "description": "Classic homestyle cold vegetable sandwich with butter, mint chutney, cucumber, and tomato slices.",
    "ingredients": [
      {
        "name": "Bread Slices",
        "amount": "as needed"
      },
      {
        "name": "Cucumber & Tomato",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potato",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      },
      {
        "name": "Green Chutney",
        "amount": "as needed"
      },
      {
        "name": "Chaat Masala",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Spread butter and fresh green chutney on two slices of soft white bread.",
      "Layer with thin slices of cucumber, tomato, and boiled potatoes.",
      "Dust with chaat masala, close the sandwich, trim crusts if desired, and cut into triangles."
    ]
  },
  {
    "id": "grilled-sandwich",
    "name": "Grilled Sandwich",
    "subCategory": "burgers-sandwiches",
    "prepTime": 12,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/bombay-sandwich.jpg",
    "description": "Crispy griddle-pressed sandwich stuffed with seasoned potatoes, onions, and melted cheese.",
    "ingredients": [
      {
        "name": "Bread Slices",
        "amount": "as needed"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Onion & Capsicum",
        "amount": "as needed"
      },
      {
        "name": "Cheese",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      },
      {
        "name": "Chutney",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Fill buttered bread with spiced potato mash, capsicum, onions, and cheese.",
      "Grill on a hot sandwich toaster with butter until golden brown and super crunchy."
    ]
  },
  {
    "id": "chicken-sandwich",
    "name": "Chicken Sandwich",
    "subCategory": "burgers-sandwiches",
    "prepTime": 15,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/bombay-sandwich.jpg",
    "description": "Shredded seasoned chicken breast mixed with herb mayonnaise, layered between toasted bread.",
    "ingredients": [
      {
        "name": "Bread Slices",
        "amount": "as needed"
      },
      {
        "name": "Cooked Chicken (shredded)",
        "amount": "as needed"
      },
      {
        "name": "Mayonnaise",
        "amount": "as needed"
      },
      {
        "name": "Black Pepper",
        "amount": "as needed"
      },
      {
        "name": "Lettuce",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Mix shredded cooked chicken with mayonnaise, black pepper, celery, and a pinch of salt.",
      "Toast bread slices with butter.",
      "Layer crisp lettuce and the creamy chicken spread between the warm toasted bread slices."
    ]
  },
  {
    "id": "cheese-sandwich",
    "name": "Cheese Sandwich",
    "subCategory": "burgers-sandwiches",
    "prepTime": 10,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/bombay-sandwich.jpg",
    "description": "Golden griddled comfort: double layers of melted processed cheese and mozzarella between buttered bread.",
    "ingredients": [
      {
        "name": "Bread Slices",
        "amount": "as needed"
      },
      {
        "name": "Cheese Slices & Mozzarella",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      },
      {
        "name": "Chilli Flakes & Oregano",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Place cheese slices and grated mozzarella between two buttered slices of bread.",
      "Toast on medium-low flame with butter on a tawa until the bread is golden crisp and cheese is fully melted and gooey."
    ]
  },
  {
    "id": "peri-peri-fries",
    "name": "Peri Peri Fries",
    "subCategory": "fast-food",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/french-fries.jpg",
    "description": "Crispy double-fried golden potato fries generously tossed in spicy Peri-Peri seasoning shaker.",
    "ingredients": [
      {
        "name": "Potatoes",
        "amount": "as needed"
      },
      {
        "name": "Peri Peri Masala",
        "amount": "as needed"
      },
      {
        "name": "Salt",
        "amount": "as needed"
      },
      {
        "name": "Oil for frying",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Double-fry potato batons until blistered, golden, and extra crunchy.",
      "Transfer immediately to a shaker bag or bowl.",
      "Add 1 tbsp spicy peri-peri masala, toss vigorously, and serve piping hot."
    ]
  },
  {
    "id": "chicken-nuggets",
    "name": "Chicken Nuggets",
    "subCategory": "fast-food",
    "prepTime": 18,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chicken-nuggets.jpg",
    "description": "Golden breadcrumb-crusted bite-sized chicken nuggets, tender inside and crunchy outside.",
    "ingredients": [
      {
        "name": "Minced Chicken",
        "amount": "as needed"
      },
      {
        "name": "Breadcrumbs",
        "amount": "as needed"
      },
      {
        "name": "Garlic Powder",
        "amount": "as needed"
      },
      {
        "name": "Egg & Flour",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Season minced chicken with garlic powder, onion powder, pepper, and salt; shape into small nuggets.",
      "Dip in flour, beaten egg, and roll in fine breadcrumbs.",
      "Deep-fry on medium flame for 4 to 5 minutes until uniformly golden brown. Serve with ketchup."
    ]
  },
  {
    "id": "chicken-popcorn",
    "name": "Chicken Popcorn",
    "subCategory": "fast-food",
    "prepTime": 18,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chicken-popcorn.jpg",
    "description": "Bite-sized crispy fried chicken popcorn seasoned with paprika and black pepper, perfect for snacking.",
    "ingredients": [
      {
        "name": "Boneless Chicken (mini cubes)",
        "amount": "as needed"
      },
      {
        "name": "Buttermilk",
        "amount": "as needed"
      },
      {
        "name": "Seasoned Flour & Cornstarch",
        "amount": "as needed"
      },
      {
        "name": "Paprika",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Marinate mini chicken cubes in buttermilk and spices for 20 minutes.",
      "Dredge in seasoned flour-cornstarch mix, dip quickly in cold water, and dredge again for flaky craggy crust.",
      "Deep-fry in hot oil for 3-4 minutes until golden and crackling crisp."
    ]
  },
  {
    "id": "chicken-wings",
    "name": "Chicken Wings",
    "subCategory": "fast-food",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/chicken-wings.jpg",
    "description": "Crispy fried chicken wings tossed in a spicy, buttery garlic hot sauce.",
    "ingredients": [
      {
        "name": "Chicken Wings",
        "amount": "as needed"
      },
      {
        "name": "Hot Sauce & Butter",
        "amount": "as needed"
      },
      {
        "name": "Garlic",
        "amount": "as needed"
      },
      {
        "name": "Cornstarch",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Dust chicken wings with cornstarch and salt; deep-fry until skin is deeply crisp and golden.",
      "Melt butter in a pan with minced garlic and spicy hot sauce.",
      "Toss the hot crispy wings in the sauce until evenly glazed."
    ]
  },
  {
    "id": "paneer-manchurian",
    "name": "Paneer Manchurian",
    "subCategory": "fast-food",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/gobi-manchurian.jpg",
    "description": "Crispy battered paneer cubes tossed in sweet, spicy, and tangy Indo-Chinese Manchurian gravy.",
    "ingredients": [
      {
        "name": "Fresh Paneer Cubes",
        "amount": "as needed"
      },
      {
        "name": "Cornstarch & Maida",
        "amount": "as needed"
      },
      {
        "name": "Garlic & Ginger",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Tomato Ketchup",
        "amount": "as needed"
      },
      {
        "name": "Spring Onions",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Dip paneer cubes in cornstarch batter and shallow-fry until golden.",
      "Sauté garlic, ginger, green chillies, and spring onions in a wok.",
      "Simmer soy sauce, ketchup, and chilli sauce; toss in the crispy paneer cubes and garnish with scallions."
    ]
  },
  {
    "id": "chicken-manchurian",
    "name": "Chicken Manchurian",
    "subCategory": "fast-food",
    "prepTime": 22,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/gobi-manchurian.jpg",
    "description": "Crispy chicken meatballs or bites glazed in dark savory garlic-soy Manchurian sauce.",
    "ingredients": [
      {
        "name": "Chicken (minced or cubes)",
        "amount": "as needed"
      },
      {
        "name": "Garlic & Ginger",
        "amount": "as needed"
      },
      {
        "name": "Soy Sauce",
        "amount": "as needed"
      },
      {
        "name": "Chilli Sauce",
        "amount": "as needed"
      },
      {
        "name": "Spring Onions",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Fry seasoned chicken balls or bites until golden and cooked through.",
      "Prepare savory Manchurian sauce with minced garlic, ginger, soy sauce, and a dash of cornstarch slurry.",
      "Toss the chicken in the simmering glossy sauce for 1 minute."
    ]
  },
  {
    "id": "pizza-desi-st-style-pan-pizza",
    "name": "Pizza (Desi St-Style Pan Pizza)",
    "subCategory": "fast-food",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pizza.jpg",
    "description": "Pan-baked pizza topped with spiced tomato sauce, onions, capsicum, sweet corn, and bubbling mozzarella.",
    "ingredients": [
      {
        "name": "Pizza Base",
        "amount": "as needed"
      },
      {
        "name": "Pizza Sauce",
        "amount": "as needed"
      },
      {
        "name": "Mozzarella Cheese",
        "amount": "as needed"
      },
      {
        "name": "Capsicum & Onion",
        "amount": "as needed"
      },
      {
        "name": "Sweet Corn",
        "amount": "as needed"
      },
      {
        "name": "Oregano & Chilli Flakes",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Spread spiced pizza sauce over a fresh pizza base.",
      "Generously layer shredded mozzarella cheese, diced capsicum, onions, and sweet corn.",
      "Bake in an oven or covered pan with butter on low heat for 10-12 minutes until cheese melts and base is crisp."
    ]
  },
  {
    "id": "pasta-desi-masala-macaroni",
    "name": "Pasta (Desi Masala Macaroni)",
    "subCategory": "fast-food",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/pasta.jpg",
    "description": "Homestyle Indian street-style elbow macaroni tossed with onions, tomatoes, green chillies, and garam masala.",
    "ingredients": [
      {
        "name": "Elbow Macaroni Pasta",
        "amount": "as needed"
      },
      {
        "name": "Onion & Tomato",
        "amount": "as needed"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "as needed"
      },
      {
        "name": "Garam Masala",
        "amount": "as needed"
      },
      {
        "name": "Butter",
        "amount": "as needed"
      },
      {
        "name": "Coriander",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Boil macaroni in salted water until tender; drain.",
      "In a pan, heat butter; sauté cumin, onions, ginger-garlic paste, and ripe tomatoes until mushy.",
      "Add turmeric, red chilli powder, garam masala, and 2 tbsp tomato ketchup.",
      "Toss in the boiled macaroni with 2 tbsp pasta water; simmer for 2 minutes and garnish with coriander."
    ]
  },
  {
    "id": "punugulu-street-chaat-style",
    "name": "Punugulu (Street Chaat Style)",
    "subCategory": "chaat-streetfood",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/punugulu.jpg",
    "description": "Crunchy bite-sized golden fritters tossed with finely chopped raw onions, chaat masala, lemon, and spicy peanut chutney.",
    "ingredients": [
      {
        "name": "Dosa Batter",
        "amount": "2 cups"
      },
      {
        "name": "Rice Flour",
        "amount": "2 tbsp"
      },
      {
        "name": "Onion",
        "amount": "1 (chopped)"
      },
      {
        "name": "Green Chillies",
        "amount": "2"
      },
      {
        "name": "Chaat Masala",
        "amount": "1 tsp"
      },
      {
        "name": "Oil for frying",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Mix leftover fermented dosa batter with rice flour, chopped onions, green chillies, cumin seeds, and a pinch of salt into a thick dropping batter.",
      "Heat oil in a kadai on medium-high flame.",
      "Drop small marble-sized portions of batter into the hot oil with wet fingers.",
      "Deep-fry, stirring continuously with a slotted ladle until uniformly golden and crisp.",
      "Transfer to a bowl while piping hot, toss with finely chopped raw onions, chaat masala, and a squeeze of fresh lemon juice.",
      "Serve hot with spicy peanut or allam (ginger) chutney."
    ]
  },
  {
    "id": "veg-kathi-wrap",
    "name": "Veg Kathi Wrap",
    "subCategory": "rolls",
    "prepTime": 18,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/kathi-roll.jpg",
    "description": "Flaky layered paratha packed with pan-seared spiced vegetables, crunchy peppers, and sweet-tangy chutneys.",
    "ingredients": [
      {
        "name": "Paratha / Roti",
        "amount": "2 pieces"
      },
      {
        "name": "Capsicum & Carrots",
        "amount": "1 cup (julienned)"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "1 cup"
      },
      {
        "name": "Green Chutney",
        "amount": "2 tbsp"
      },
      {
        "name": "Chaat Masala",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Sauté julienned carrots, capsicum, and sliced onions in 1 tbsp butter on high flame for 2 minutes to keep them crisp.",
      "Add spiced mashed potatoes, chaat masala, and garam masala; mix into a savory filling.",
      "Toast a layered paratha on a tawa with ghee until crisp and golden.",
      "Spread fresh green mint chutney and sweet tamarind sauce across the center of the paratha.",
      "Arrange the spiced vegetable filling, top with raw sliced onions, chaat masala, and a splash of lemon juice.",
      "Roll tightly into parchment paper and serve warm."
    ]
  },
  {
    "id": "chicken-kathi-wrap-double-egg",
    "name": "Chicken Kathi Wrap (Double Egg)",
    "subCategory": "rolls",
    "prepTime": 20,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/kathi-roll.jpg",
    "description": "Kolkata park street classic: flaky paratha cooked with two eggs, loaded with juicy roasted chicken tikka and spiced onions.",
    "ingredients": [
      {
        "name": "Flaky Paratha",
        "amount": "2 pieces"
      },
      {
        "name": "Fresh Eggs",
        "amount": "4 eggs (2 per roll)"
      },
      {
        "name": "Boneless Chicken Tikka",
        "amount": "200g"
      },
      {
        "name": "Onion",
        "amount": "1 (sliced)"
      },
      {
        "name": "Green Chutney",
        "amount": "2 tbsp"
      },
      {
        "name": "Chaat Masala",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Sauté marinated chicken pieces in butter until juicy, charred, and aromatic.",
      "Heat 1 tbsp oil on a wide griddle; whisk 2 eggs with a pinch of salt and pepper, pour onto the pan.",
      "Immediately place a flaky paratha directly over the wet eggs, pressing down so the double egg bonds with the paratha.",
      "Flip and cook until the eggs are golden and paratha is crisp; transfer egg-side up onto food wrapping paper.",
      "Line the center with a generous row of hot chicken tikka pieces, thinly sliced raw onions, and green chillies.",
      "Drizzle spicy green chutney and lemon juice, roll tightly into a cylinder, and serve piping hot."
    ]
  }
];
