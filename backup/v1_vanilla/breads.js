// Section 6: Breads, Rotis, Parathas & Puris (35 recipes)
const BREAD_RECIPES = [
  {
    "id": "garlic-naan",
    "name": "Garlic Butter Naan",
    "subCategory": "naan",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/garlic-naan.jpg",
    "description": "Pillowy, charred North Indian tandoori flatbread brushed with garlic-infused butter and fresh coriander.",
    "ingredients": [
      {
        "name": "Maida (All-Purpose Flour)",
        "amount": "2 cups"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/4 cup"
      },
      {
        "name": "Garlic",
        "amount": "2 tbsp (finely minced)"
      },
      {
        "name": "Pure Cow Ghee / Butter",
        "amount": "3 tbsp (melted)"
      },
      {
        "name": "Baking Powder & Soda",
        "amount": "1/2 tsp & 1/4 tsp"
      },
      {
        "name": "Nigella Seeds (Kalonji)",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Whisk maida with baking powder, baking soda, salt, sugar, curd, and warm water; knead for 6 minutes into a soft, elastic dough; rest covered with a damp cloth for 1 hour.",
      "Divide into oval dough balls; roll into teardrop shapes (1/4 inch thick).",
      "Press minced garlic, kalonji, and chopped coriander firmly onto the top surface with a rolling pin.",
      "Flip the naan over; brush the underside generously with plain water.",
      "Slap the wet side onto a smoking hot cast-iron tawa; as bubbles rise vigorously, invert the tawa directly over the high gas flame to char the garlic surface.",
      "Remove with tongs, brush immediately with sizzling garlic butter, and serve piping hot."
    ]
  },
  {
    "id": "butter-naan",
    "name": "Classic Butter Naan",
    "subCategory": "naan",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/butter-naan.jpg",
    "description": "Soft, aerated restaurant-style leavened tandoor flatbread layered with pure butter and lightly blistered on an inverted tawa.",
    "ingredients": [
      {
        "name": "Maida",
        "amount": "2 cups"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/4 cup"
      },
      {
        "name": "Butter",
        "amount": "3 tbsp (melted salted butter)"
      },
      {
        "name": "Milk",
        "amount": "1/2 cup (warm for kneading)"
      },
      {
        "name": "Baking Powder",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Knead flour with warm milk, curd, baking powder, and a dash of oil into a pliable, tender dough; rest for 45 minutes.",
      "Roll dough balls into traditional oblong elongated shapes on a lightly floured surface.",
      "Brush the backside generously with water to create an adhesive seal.",
      "Transfer wet-side down onto a scorching hot iron tawa.",
      "When large blister pockets appear, invert the tawa over open flame for 45 seconds to achieve smoky tandoori leopard spots.",
      "Smear generously with melted butter, fold in half, and serve."
    ]
  },
  {
    "id": "cheese-naan",
    "name": "Cheese Garlic Naan",
    "subCategory": "naan",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/cheese-naan.jpg",
    "description": "Molten stuffed naan oozing with mozzarella and processed cheese, crowned with toasted garlic and chilli flakes.",
    "ingredients": [
      {
        "name": "Maida",
        "amount": "2 cups"
      },
      {
        "name": "Mozzarella & Processed Cheese",
        "amount": "1 cup (grated blend)"
      },
      {
        "name": "Garlic",
        "amount": "2 tbsp (minced)"
      },
      {
        "name": "Butter",
        "amount": "2 tbsp"
      },
      {
        "name": "Chilli Flakes & Oregano",
        "amount": "1 tsp each"
      }
    ],
    "steps": [
      "Prepare soft fermented curd-maida dough and divide into 4 large portions.",
      "Flatten a dough ball, place a generous mound of grated cheese mixed with chilli flakes in the center, and gather edges like a pouch to seal completely.",
      "Gently roll out into an oval, dusting lightly with flour so cheese doesn't burst through.",
      "Press minced garlic on top, brush water on the base, and stick onto a hot tawa.",
      "Invert tawa over open flame till bubbly and golden-brown.",
      "Brush with herb butter and slice in half to reveal the gooey cheese stretch."
    ]
  },
  {
    "id": "kashmiri-naan",
    "name": "Royal Kashmiri Naan",
    "subCategory": "naan",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/kashmiri-naan.jpg",
    "description": "Sweet and fragrant Kashmiri tandoor bread stuffed with toasted almonds, cashews, raisins, and desiccated coconut with saffron butter.",
    "ingredients": [
      {
        "name": "Maida",
        "amount": "2 cups"
      },
      {
        "name": "Almonds, Cashews & Pistachios",
        "amount": "1/2 cup (finely chopped)"
      },
      {
        "name": "Desiccated Coconut",
        "amount": "3 tbsp"
      },
      {
        "name": "Golden Raisins & Glacé Cherries",
        "amount": "2 tbsp (chopped)"
      },
      {
        "name": "Fennel Powder & Cardamom",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Butter & Saffron Milk",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Prepare soft yeasted maida dough with a hint of sugar and milk; rest for 1 hour until doubled.",
      "Toss nuts, coconut, raisins, cherries, fennel powder, and cardamom together for the royal stuffing.",
      "Flatten dough discs, stuff with 3 tablespoons of nut filling, seal tightly, and roll gently into an oval.",
      "Brush top with saffron milk and press sesame seeds and sliced almonds firmly on surface.",
      "Cook on an iron tawa until bubbles form, then invert flame-side down until toasted and golden.",
      "Brush with warm butter and serve with creamy korma."
    ]
  },
  {
    "id": "pudina-naan",
    "name": "Tandoori Pudina Naan",
    "subCategory": "naan",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/garlic-naan.jpg",
    "description": "Herby and aromatic leavened naan layered with crushed dried mint (pudina), chaat masala, and ghee.",
    "ingredients": [
      {
        "name": "Maida",
        "amount": "2 cups"
      },
      {
        "name": "Dried Mint Leaves (Pudina)",
        "amount": "2 tbsp (crushed)"
      },
      {
        "name": "Fresh Mint & Coriander",
        "amount": "1/4 cup (chopped)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Chaat Masala",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Roll fermented curd dough into an oblong sheet; brush lightly with ghee and sprinkle dried mint and chaat masala.",
      "Fold into accordion pleats, roll into a spiral pinwheel, and flatten gently into an oval naan.",
      "Press fresh mint and coriander on top, wet the back with water, and place onto a smoking hot tawa.",
      "Invert over gas flame for smoky blistered edges.",
      "Smear with melted ghee while sizzling hot."
    ]
  },
  {
    "id": "tandoori-roti",
    "name": "Dhaba Tandoori Roti",
    "subCategory": "roti",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/tandoori-roti.jpg",
    "description": "Whole wheat flour tandoori bread cooked on an inverted tawa for that authentic crispy rim and chewy center with pure ghee.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour (Atta)",
        "amount": "2 cups"
      },
      {
        "name": "Fresh Curd",
        "amount": "2 tbsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Baking Soda",
        "amount": "a pinch"
      }
    ],
    "steps": [
      "Knead whole wheat atta with curd, salt, a pinch of soda, and lukewarm water into a semi-soft dough; rest for 30 minutes.",
      "Roll dough balls into 6-inch circles, keeping them slightly thicker than a regular phulka.",
      "Wet one side with water and stick firmly to a screaming-hot iron tawa.",
      "When bubbles puff across the surface, invert the tawa directly upside down over open flame.",
      "Char until smoky dark-brown spots appear, pry off with a steel spatula, crush lightly with your palms, and slather with melted ghee."
    ]
  },
  {
    "id": "phulka",
    "name": "Homestyle Phulka",
    "subCategory": "roti",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/phulka.jpg",
    "description": "Paper-thin, balloon-puffed everyday whole wheat flatbread made without oil and puffed directly over live fire.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour (Atta)",
        "amount": "2 cups"
      },
      {
        "name": "Water",
        "amount": "3/4 cup (lukewarm)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "1 tbsp (for brushing)"
      }
    ],
    "steps": [
      "Knead whole wheat atta with warm water for 5 minutes until soft and supple; rest covered for 20 minutes.",
      "Divide into small lime-sized balls; roll into thin, even 6-inch discs dusting with minimal dry atta.",
      "Toss onto a medium-hot tawa; cook for 15 seconds until faint white specks appear, then flip.",
      "Cook the second side for 30 seconds until brown spots develop.",
      "Transfer directly onto an open flame with tongs; watch it inflate instantly like a spherical balloon.",
      "Remove, smear top with pure desi ghee, and stack inside an insulated roti dabba."
    ]
  },
  {
    "id": "breads-chapati",
    "name": "Layered Soft Chapati",
    "subCategory": "roti",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/chapati.jpg",
    "description": "Multi-layered, tender griddled wheat chapatis folded with a dab of oil inside before rolling.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour (Atta)",
        "amount": "2 cups"
      },
      {
        "name": "Oil / Ghee",
        "amount": "2 tbsp"
      },
      {
        "name": "Warm Water & Salt",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Knead wheat flour with salt, 1 tsp oil, and warm water into a smooth pliable dough; rest 15 minutes.",
      "Roll a dough ball into a small circle, smear a drop of oil, fold into a semi-circle, oil again, and fold into a triangle (koni).",
      "Roll out gently maintaining the triangular or circular shape with thin edges.",
      "Roast on a hot griddle, flipping every 25 seconds while pressing corners with a clean folded cloth.",
      "Drizzle ghee around the edges until puffed with golden speckles."
    ]
  },
  {
    "id": "rumali-roti",
    "name": "Mughlai Rumali Roti",
    "subCategory": "roti",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/rumali-roti.jpg",
    "description": "Handkerchief-thin, translucent unleavened bread hand-stretched and cooked over a searing hot inverted wok (ulta kadai).",
    "ingredients": [
      {
        "name": "Maida & Atta",
        "amount": "1.5 cups maida + 0.5 cup atta"
      },
      {
        "name": "Milk & Water",
        "amount": "equal parts warm mix"
      },
      {
        "name": "Oil",
        "amount": "2 tbsp"
      },
      {
        "name": "Salt Water Spray",
        "amount": "2 tbsp water + 1 tsp salt"
      }
    ],
    "steps": [
      "Knead flours with warm milk-water mix and oil into an extremely elastic, soft dough; slap on counter 10 times; rest 30 minutes under oil.",
      "Invert a large cast iron kadai over high flame; spray the convex dome with salt water to create a seasoned non-stick crust.",
      "Spin and stretch dough discs across the backs of your knuckles into a sheer, paper-thin sheet.",
      "Drape delicately over the scorching hot kadai dome; it cooks in just 15-20 seconds.",
      "Flip once, fold immediately into handkerchief quarters (rumal), and serve immediately with rich gravies."
    ]
  },
  {
    "id": "missi-roti",
    "name": "Rajasthani Missi Roti",
    "subCategory": "roti",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/missi-roti.jpg",
    "description": "Hearty spiced flatbread made from a blend of gram flour (besan) and wheat flour with ajwain, kasuri methi, and onions.",
    "ingredients": [
      {
        "name": "Besan (Gram Flour)",
        "amount": "1.5 cups"
      },
      {
        "name": "Whole Wheat Flour",
        "amount": "1/2 cup"
      },
      {
        "name": "Onion",
        "amount": "1 small (very finely minced)"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1 tsp"
      },
      {
        "name": "Kasuri Methi",
        "amount": "1 tbsp (crushed)"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Combine besan, atta, minced onion, ajwain, crushed kasuri methi, turmeric, red chilli powder, and 1 tbsp ghee in a wide basin.",
      "Knead with minimal water into a tight, firm dough (besan turns sticky if over-hydrated).",
      "Roll into medium-thick discs dusting with wheat flour.",
      "Roast on an iron tawa on medium flame until golden brown spots appear on both sides.",
      "Smear generously with pure desi cow ghee and serve hot with dal tadka or spicy mango pickle."
    ]
  },
  {
    "id": "makki-di-roti",
    "name": "Punjabi Makki di Roti",
    "subCategory": "roti",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/makki-di-roti.jpg",
    "description": "Rustic, golden cornmeal flatbread patted by hand and roasted with abundant desi ghee, the timeless soulmate to Sarson da Saag.",
    "ingredients": [
      {
        "name": "Makki ka Atta (Yellow Maize Flour)",
        "amount": "2 cups"
      },
      {
        "name": "Warm Water",
        "amount": "as needed"
      },
      {
        "name": "Ajwain & Salt",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Desi White Butter / Ghee",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Place maize flour in a wide parat; knead vigorously with warm water using the heel of your palm for 5 minutes until pliable.",
      "Take a large ball; flatten between greased plastic sheets or pat by hand directly into a thick, rustic round disc.",
      "Carefully peel and slide onto a hot greased iron tawa on medium heat.",
      "Roast patiently for 2 minutes; flip and brush with pure ghee.",
      "Cook both sides until crisp, speckled with dark golden crusts; serve crowned with a dollop of fresh white butter (makhan)."
    ]
  },
  {
    "id": "jowar-bhakri",
    "name": "Maharashtrian Jowar Bhakri",
    "subCategory": "roti",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/jowar-bhakri.jpg",
    "description": "Nutritious gluten-free sorghum flatbread, hand-patted on wooden boards and cooked with water smeared on top.",
    "ingredients": [
      {
        "name": "Jowar Flour (Sorghum)",
        "amount": "2 cups"
      },
      {
        "name": "Hot Boiling Water",
        "amount": "1 cup"
      },
      {
        "name": "Salt",
        "amount": "1/2 tsp"
      }
    ],
    "steps": [
      "Scald jowar flour with boiling hot water and mix with a spoon; once warm, knead aggressively with your palm until smooth and crack-free.",
      "Dust flour on a flat surface; pat the dough ball outward with your palm in rhythmic circular motions to form a thin flatbread.",
      "Lift carefully and place flour-side up onto a hot clay or cast-iron tawa.",
      "Immediately apply water evenly all over the top surface with your fingers to seal cracks.",
      "Flip after 1 minute; roast bottom side till blistered, then toast directly on flame until it puffs like a dome; serve with thecha."
    ]
  },
  {
    "id": "bajra-roti",
    "name": "Rajasthani Bajra Roti",
    "subCategory": "roti",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/bajra-roti.jpg",
    "description": "Earthy pearl millet flatbread studded with toasted white sesame seeds, roasted on an earthen tawa with white butter and jaggery.",
    "ingredients": [
      {
        "name": "Bajra Flour (Pearl Millet)",
        "amount": "2 cups"
      },
      {
        "name": "White Sesame Seeds (Til)",
        "amount": "2 tbsp"
      },
      {
        "name": "Warm Water & Salt",
        "amount": "as needed"
      },
      {
        "name": "Desi Ghee / Butter",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Knead bajra flour with warm water in small batches portion by portion to ensure maximum elasticity.",
      "Flatten the dough ball, press sesame seeds on one face, and pat gently with both palms into a uniform circular roti.",
      "Slide onto a preheated cast iron tawa.",
      "Sprinkle and smooth water over the top side; flip when the water dries out.",
      "Roast both sides until toasted and crisp on the perimeter; top with melting ghee and jaggery."
    ]
  },
  {
    "id": "akki-roti",
    "name": "Karnataka Akki Rotti",
    "subCategory": "roti",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/akki-roti.jpg",
    "description": "Crispy Karnataka specialty made with rice flour, fresh coconut, dill leaves, cumin, and onions patted paper-thin onto a greased tawa.",
    "ingredients": [
      {
        "name": "Rice Flour",
        "amount": "2 cups"
      },
      {
        "name": "Fresh Grated Coconut",
        "amount": "1/2 cup"
      },
      {
        "name": "Onion",
        "amount": "1 medium (finely chopped)"
      },
      {
        "name": "Fresh Dill Leaves & Coriander",
        "amount": "1/2 cup (chopped)"
      },
      {
        "name": "Cumin Seeds & Green Chillies",
        "amount": "1 tsp & 2 chillies"
      },
      {
        "name": "Pure Cow Ghee / Oil",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "In a bowl, mix rice flour, grated coconut, chopped onions, dill leaves, green chillies, cumin seeds, and salt.",
      "Add warm water gradually to form a soft, workable dough.",
      "Grease a cold tawa or banana leaf with oil; place a dough portion and pat thin using wet fingers, poking 3 small steam vents in the center.",
      "Drizzle ghee in the vents and around edges.",
      "Cook covered on medium flame until bottom turns golden-brown and crunchy; serve hot with coconut chutney and ennegai."
    ]
  },
  {
    "id": "ragi-roti",
    "name": "Karnataka Ragi Rotti",
    "subCategory": "roti",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/ragi-roti.jpg",
    "description": "Nutrient-packed finger millet flatbread loaded with drumstick leaves, onions, green chillies, and cumin, roasted crisp with ghee.",
    "ingredients": [
      {
        "name": "Ragi Flour (Finger Millet)",
        "amount": "2 cups"
      },
      {
        "name": "Onion",
        "amount": "1 (finely chopped)"
      },
      {
        "name": "Fresh Moringa / Drumstick Leaves",
        "amount": "1/2 cup"
      },
      {
        "name": "Green Chillies & Ginger",
        "amount": "1 tbsp (minced)"
      },
      {
        "name": "Cumin Seeds",
        "amount": "1 tsp"
      }
    ],
    "steps": [
      "Combine ragi flour, onions, moringa leaves, chillies, ginger, cumin, and salt.",
      "Knead with lukewarm water into a soft, spreadable dough.",
      "Pat out thinly on an oiled tawa using fingertips; make 3 vent holes.",
      "Drizzle oil/ghee and cook on medium heat covered with a lid for 2 minutes.",
      "Flip and cook uncovered until crispy around the edges; serve with peanut chutney."
    ]
  },
  {
    "id": "breads-aloo-paratha",
    "name": "Dhaba Aloo Paratha",
    "subCategory": "paratha",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/aloo-paratha.jpg",
    "description": "Iconic Punjabi whole wheat flatbread stuffed with spiced boiled potatoes, ajwain, amchur, and roasted till crispy golden with butter.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour (Atta)",
        "amount": "2 cups"
      },
      {
        "name": "Boiled Potatoes",
        "amount": "3 large (mashed smooth)"
      },
      {
        "name": "Green Chillies & Ginger",
        "amount": "2 chillies & 1 inch"
      },
      {
        "name": "Amchur (Dry Mango Powder)",
        "amount": "1 tsp"
      },
      {
        "name": "Ajwain & Kasuri Methi",
        "amount": "1 tsp each"
      },
      {
        "name": "Pure Cow Ghee / Butter",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Knead whole wheat flour into a soft, supple dough; rest for 20 minutes.",
      "Mash boiled potatoes thoroughly; mix with minced green chillies, ginger, ajwain, amchur, kasuri methi, garam masala, and salt.",
      "Roll a dough ball into a 4-inch disc; place a generous spiced potato ball in the center, gather pleats, seal tightly, and pinch off excess dough.",
      "Dust lightly with atta; roll out with gentle, even strokes into a 7-inch thick disc without tearing.",
      "Roast on a hot griddle for 1 minute; flip, smear generously with ghee/butter, and press edges with a spatula until blistered with deep golden crisp spots.",
      "Serve piping hot with fresh curd, mango pickle, and a slab of white butter."
    ]
  },
  {
    "id": "gobi-paratha",
    "name": "Amritsari Gobi Paratha",
    "subCategory": "paratha",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/gobi-paratha.jpg",
    "description": "Golden griddled flatbread packed with spiced grated cauliflower, ginger, ajwain, and freshly ground coriander seeds.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour (Atta)",
        "amount": "2 cups"
      },
      {
        "name": "Cauliflower (Gobi)",
        "amount": "2 cups (finely grated)"
      },
      {
        "name": "Ginger & Green Chillies",
        "amount": "2 tbsp (grated)"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1 tsp"
      },
      {
        "name": "Garam Masala & Amchur",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Desi Ghee",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Grate cauliflower florets finely; squeeze out any moisture in a clean cotton cloth; toss with ginger, green chillies, ajwain, amchur, garam masala, and salt.",
      "Portion dough balls; cup each portion into a hollow well and fill with generous cauliflower stuffing.",
      "Seal seams completely, flatten, and roll out delicately dusting with dry flour.",
      "Cook on a medium-hot iron tawa, applying desi ghee on both sides.",
      "Shallow fry until crisp, aromatic, and spotted with golden freckles; serve with cold curd and spicy mixed pickle."
    ]
  },
  {
    "id": "paneer-paratha",
    "name": "Mughlai Paneer Paratha",
    "subCategory": "paratha",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/paneer-paratha.jpg",
    "description": "Rich, melt-in-mouth paratha filled with grated fresh cottage cheese, coriander, cumin, and green chillies.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour",
        "amount": "2 cups"
      },
      {
        "name": "Fresh Paneer",
        "amount": "200g (finely grated)"
      },
      {
        "name": "Green Chillies & Ginger",
        "amount": "1 tbsp (finely chopped)"
      },
      {
        "name": "Fresh Coriander Leaves",
        "amount": "3 tbsp (chopped)"
      },
      {
        "name": "Jeera Powder & Chaat Masala",
        "amount": "1 tsp each"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Grate fresh paneer; mix gently with chopped coriander, green chillies, ginger, jeera powder, chaat masala, and salt without making it pasty.",
      "Roll dough into a disc, place paneer filling, seal like a dumpling, and roll out smoothly.",
      "Place on a smoking hot tawa.",
      "Flip after 30 seconds; spoon ghee generously over top and edges.",
      "Roast both sides until crisp and flaky while paneer inside turns warm and tender."
    ]
  },
  {
    "id": "methi-paratha",
    "name": "Fresh Methi Paratha",
    "subCategory": "paratha",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/methi-paratha.jpg",
    "description": "Fragrant winter paratha made by kneading fresh chopped fenugreek leaves directly into spiced whole wheat dough.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour",
        "amount": "2 cups"
      },
      {
        "name": "Fresh Methi Leaves",
        "amount": "1.5 cups (washed & finely chopped)"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1 tsp"
      },
      {
        "name": "Turmeric & Red Chilli Powder",
        "amount": "1/2 tsp & 1 tsp"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "2 tbsp"
      }
    ],
    "steps": [
      "Mix finely chopped methi leaves with atta, ajwain, turmeric, chilli powder, salt, and 1 tbsp warm ghee.",
      "Knead with warm water into a smooth, non-sticky dough; rest 15 minutes.",
      "Roll into round or triangle layered parathas.",
      "Roast on a hot tawa with ghee on both sides until crispy and lightly browned.",
      "Serve with plain yoghurt and sweet lemon pickle."
    ]
  },
  {
    "id": "mooli-paratha",
    "name": "Punjabi Mooli Paratha",
    "subCategory": "paratha",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/mooli-paratha.jpg",
    "description": "Zesty, crispy stuffed paratha packed with grated white radish, carom seeds, ginger, and green chillies.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour (Atta)",
        "amount": "2 cups"
      },
      {
        "name": "White Radish (Mooli)",
        "amount": "2 cups (grated)"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1 tsp"
      },
      {
        "name": "Ginger & Green Chillies",
        "amount": "1 tbsp (finely grated)"
      },
      {
        "name": "Coriander Leaves & Amchur",
        "amount": "2 tbsp & 1/2 tsp"
      },
      {
        "name": "Desi Ghee",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Sprinkle salt over grated mooli; let sit for 10 minutes, then squeeze firmly in a muslin cloth to extract all water (save water to knead the dough).",
      "Season dry grated mooli with ajwain, ginger, green chillies, coriander, and amchur.",
      "Knead flour with radish water into a soft dough.",
      "Fill generous mooli stuffing into dough pockets, seal, and roll out carefully.",
      "Roast on a hot griddle with pure ghee until golden-crisp on both surfaces."
    ]
  },
  {
    "id": "lachha-paratha",
    "name": "Crispy Lachha Paratha",
    "subCategory": "paratha",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/lachha-paratha.jpg",
    "description": "Showstopper spiral multi-layered flaky North Indian paratha pleated like an accordion and toasted with pure ghee.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour & Maida",
        "amount": "1 cup each"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "4 tbsp"
      },
      {
        "name": "Ajwain & Chaat Masala",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Warm Water & Salt",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Knead flour with salt, 1 tbsp ghee, and warm water into a soft pliable dough; rest for 25 minutes.",
      "Roll dough into a paper-thin large sheet; smear generously with melted ghee and dust with dry flour.",
      "Fold the sheet back and forth like a paper fan / accordion pleats from top to bottom.",
      "Roll the pleated strip into a tight coil/spiral, tucking the tail end into the center.",
      "Roll out gently into a 7-inch paratha without pressing too hard to preserve layer separation.",
      "Roast on tawa with ghee until crisp and golden; lightly crush the paratha between your hands from both edges to release the visible flaky rings."
    ]
  },
  {
    "id": "mughlai-paratha",
    "name": "Kolkata Mughlai Paratha",
    "subCategory": "paratha",
    "prepTime": 25,
    "servings": 2,
    "veg": false,
    "image": "images/dishes/mughlai-paratha.jpg",
    "description": "Iconic Kolkata street food: crispy rectangular folded paratha filled with spiced egg, minced onions, and chillies, deep-shallow fried.",
    "ingredients": [
      {
        "name": "Maida",
        "amount": "2 cups"
      },
      {
        "name": "Eggs",
        "amount": "3 large"
      },
      {
        "name": "Onion",
        "amount": "1 large (finely minced)"
      },
      {
        "name": "Green Chillies & Ginger",
        "amount": "2 chillies & 1 tsp minced"
      },
      {
        "name": "Chaat Masala & Garam Masala",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Oil / Ghee",
        "amount": "for shallow frying"
      }
    ],
    "steps": [
      "Knead maida with 2 tbsp oil and warm water into an elastic, smooth dough; rest 30 minutes under oil.",
      "In a bowl, beat eggs with minced onion, green chillies, ginger, coriander, garam masala, chaat masala, and salt.",
      "Roll dough out very thin into a large square on an oiled surface.",
      "Pour egg mixture in the center; fold all four sides inward overlapping like an envelope to seal egg completely.",
      "Immediately slide envelope into medium-hot oil in a wide frying pan.",
      "Shallow fry on medium-low flame for 3-4 minutes per side until deeply golden, puffy, and crisp; cut into squares and serve with alur torkari."
    ]
  },
  {
    "id": "sattu-paratha",
    "name": "Bihari Sattu Paratha",
    "subCategory": "paratha",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/sattu-paratha.jpg",
    "description": "Traditional Bihari flatbread packed with spiced roasted gram flour (sattu), mustard oil, kalonji, and pickle masala.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour",
        "amount": "2 cups"
      },
      {
        "name": "Sattu (Roasted Chana Flour)",
        "amount": "1.5 cups"
      },
      {
        "name": "Mustard Oil",
        "amount": "2 tbsp"
      },
      {
        "name": "Kalonji & Ajwain",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Mango Pickle Masala",
        "amount": "1 tbsp"
      },
      {
        "name": "Garlic & Green Chillies",
        "amount": "1 tbsp (minced)"
      }
    ],
    "steps": [
      "In a bowl, mix sattu with raw mustard oil, kalonji, ajwain, minced garlic, green chillies, lemon juice, mango pickle masala, and salt until crumbly and moist.",
      "Knead wheat flour with water into a supple dough.",
      "Stuff sattu mixture inside dough balls, seal well, and roll into medium parathas.",
      "Cook on a hot iron tawa with ghee until blistered with brown spots on both sides.",
      "Serve with spicy baingan chokha and coriander chutney."
    ]
  },
  {
    "id": "malabar-parotta",
    "name": "Kerala Malabar Parotta",
    "subCategory": "paratha",
    "prepTime": 30,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/malabar-parotta.jpg",
    "description": "Flaky, multi-layered spiral Kerala street bread flipped, beaten, and twirled into gossamer threads and roasted in ghee.",
    "ingredients": [
      {
        "name": "Maida",
        "amount": "2.5 cups"
      },
      {
        "name": "Egg / Milk",
        "amount": "1 egg or 1/2 cup warm milk"
      },
      {
        "name": "Sugar & Salt",
        "amount": "1 tsp each"
      },
      {
        "name": "Oil & Pure Cow Ghee",
        "amount": "1/4 cup blend"
      }
    ],
    "steps": [
      "Knead maida with egg/milk, sugar, salt, and water for 10 minutes until elastic; coat dough balls in oil and rest 1 hour.",
      "Spread each ball paper-thin on an oiled granite counter; flick and flip the dough into the air to stretch into an ultra-thin veil.",
      "Pleat the dough together into a rope, coil into a spiral disc, and rest 15 minutes.",
      "Gently pat flat with fingers (not a rolling pin) into a 6-inch disc.",
      "Cook on a hot griddle with ghee on both sides until golden-brown and crispy.",
      "Stack 3 cooked parottas hot off the griddle and clap/crush them vigorously between your palms to shatter the layers into soft flaky ribbons; serve with chicken curry."
    ]
  },
  {
    "id": "ajwain-paratha",
    "name": "Crispy Ajwain Paratha",
    "subCategory": "paratha",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/paratha.jpg",
    "description": "Flaky triangular homestyle wheat paratha layered with fragrant carom seeds, red chilli powder, and melted desi ghee.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour",
        "amount": "2 cups"
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "amount": "1.5 tsp"
      },
      {
        "name": "Red Chilli Powder & Salt",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Knead wheat atta with salt and water into a smooth pliable dough.",
      "Roll a ball into a round circle, smear with ghee, sprinkle ajwain and chilli powder.",
      "Fold into a semi-circle, brush ghee again, and fold into a neat triangle.",
      "Roll out evenly into a triangular paratha, keeping the layers distinct.",
      "Roast on a hot tawa with generous ghee on both sides until flaky, crisp, and fragrant."
    ]
  },
  {
    "id": "pyaz-paratha",
    "name": "Spiced Pyaz (Onion) Paratha",
    "subCategory": "paratha",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/aloo-paratha.jpg",
    "description": "Crispy griddled wheat paratha stuffed with finely diced red onions, roasted cumin, green chillies, and amchur.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour",
        "amount": "2 cups"
      },
      {
        "name": "Onion",
        "amount": "2 medium (very finely chopped)"
      },
      {
        "name": "Green Chillies & Ginger",
        "amount": "2 chillies & 1 tsp (minced)"
      },
      {
        "name": "Amchur & Roasted Jeera Powder",
        "amount": "1 tsp each"
      },
      {
        "name": "Fresh Coriander",
        "amount": "3 tbsp (chopped)"
      },
      {
        "name": "Desi Ghee",
        "amount": "3 tbsp"
      }
    ],
    "steps": [
      "Mix finely chopped onions with green chillies, ginger, coriander, amchur, jeera powder, and salt (add salt right before rolling so onions don't release water).",
      "Cup a dough ball, fill with generous spiced onion stuffing, and seal tightly.",
      "Roll out gently with light pressure dusting with wheat flour.",
      "Roast on a hot iron tawa with pure cow ghee until deeply golden and crispy on both sides.",
      "Serve hot with curd and tangy tomato pickle."
    ]
  },
  {
    "id": "methi-thepla",
    "name": "Gujarati Methi Thepla",
    "subCategory": "puri",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/methi-thepla.jpg",
    "description": "Classic travel-friendly spiced Gujarati flatbread made with fresh fenugreek leaves, curd, sesame seeds, and gram flour.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour",
        "amount": "2 cups"
      },
      {
        "name": "Besan (Gram Flour)",
        "amount": "3 tbsp"
      },
      {
        "name": "Fresh Methi Leaves",
        "amount": "1.5 cups (finely chopped)"
      },
      {
        "name": "Fresh Curd",
        "amount": "3 tbsp"
      },
      {
        "name": "White Sesame Seeds (Til)",
        "amount": "1 tbsp"
      },
      {
        "name": "Turmeric & Chilli Powder",
        "amount": "1/2 tsp & 1 tsp"
      },
      {
        "name": "Oil",
        "amount": "for kneading & roasting"
      }
    ],
    "steps": [
      "In a bowl, mix atta, besan, chopped methi leaves, curd, sesame seeds, turmeric, chilli powder, 2 tbsp oil, and salt.",
      "Knead with minimal warm water into a soft, smooth dough; rest 15 minutes.",
      "Roll dough balls into thin, uniform round discs.",
      "Place on a hot tawa on medium-high heat; flip after 20 seconds.",
      "Drizzle oil on both sides, press lightly with a spatula, and roast until golden spots appear (do not overcook so they stay soft for days); serve with mango pickle (chundo)."
    ]
  },
  {
    "id": "puran-poli",
    "name": "Maharashtrian Puran Poli",
    "subCategory": "puri",
    "prepTime": 30,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/puran-poli.jpg",
    "description": "Sacred festival sweet flatbread stuffed with fragrant chana dal, jaggery, cardamom, and nutmeg, roasted with abundant ghee.",
    "ingredients": [
      {
        "name": "Chana Dal",
        "amount": "1 cup (boiled till soft)"
      },
      {
        "name": "Jaggery (Gud)",
        "amount": "1 cup (grated)"
      },
      {
        "name": "Cardamom & Nutmeg Powder",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Maida & Atta",
        "amount": "1 cup each"
      },
      {
        "name": "Pure Cow Ghee",
        "amount": "4 tbsp"
      }
    ],
    "steps": [
      "Boil chana dal until tender; drain water; combine dal with grated jaggery in a pan and cook on medium flame stirring constantly until thick and dry.",
      "Mash smooth with a puran yantra or blender; add cardamom and freshly grated nutmeg to make the fragrant 'puran'.",
      "Knead maida and atta with oil and water into an ultra-soft, pliable dough; rest 30 minutes.",
      "Take a portion of dough, stuff with an equal-sized puran ball, pinch to seal, and roll out paper-thin using rice flour dusting.",
      "Roast on a hot griddle brushing pure ghee on both sides until golden speckles appear and it puffs.",
      "Serve piping hot drenched with melted ghee and warm milk or katachi amti."
    ]
  },
  {
    "id": "bhature",
    "name": "Puffed Amritsari Bhature",
    "subCategory": "puri",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/bhature.jpg",
    "description": "Large, golden, hollow-puffed deep-fried leavened bread fermented with curd and semolina, paired with spicy Chole.",
    "ingredients": [
      {
        "name": "Maida",
        "amount": "2 cups"
      },
      {
        "name": "Sooji (Semolina)",
        "amount": "2 tbsp"
      },
      {
        "name": "Fresh Curd",
        "amount": "1/3 cup"
      },
      {
        "name": "Baking Powder & Soda",
        "amount": "1/2 tsp & 1/4 tsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Mix maida, sooji, baking powder, baking soda, sugar, and salt; add curd and warm water to knead into a soft, elastic dough; rest in a warm place for 2 hours.",
      "Grease hands with oil; shape large oval balls and roll out into 8-inch oval shapes (do not roll too thin).",
      "Slide gently into smoking hot oil on high flame.",
      "Press lightly with a slotted spoon so the bhatura puffs up into a massive hollow balloon within seconds.",
      "Flip once, fry for 30 seconds until pale golden crisp; drain and serve immediately with hot Amritsari Chole."
    ]
  },
  {
    "id": "luchi",
    "name": "Bengali Luchi",
    "subCategory": "puri",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/luchi.jpg",
    "description": "Pristine white, delicate puffed Bengali puris made with maida and ghee moyan, fried in hot oil without browning.",
    "ingredients": [
      {
        "name": "Maida",
        "amount": "2 cups"
      },
      {
        "name": "Pure Cow Ghee (Moyan)",
        "amount": "2 tbsp"
      },
      {
        "name": "Warm Water",
        "amount": "as needed"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Rub maida with warm ghee and salt until crumbly; add warm water and knead into a smooth, pliable dough; rest 20 minutes.",
      "Roll small balls into 4-inch round discs using oil instead of dry flour.",
      "Slide into moderately hot oil.",
      "Press gently with slotted spoon to puff completely; fry for just 30-40 seconds so the luchi remains snowy-white and soft.",
      "Drain and serve hot with Alur Dom or Cholar Dal."
    ]
  },
  {
    "id": "bedmi-puri",
    "name": "Delhi Bedmi Puri",
    "subCategory": "puri",
    "prepTime": 25,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/poori.jpg",
    "description": "Crisp, textured Old Delhi style deep-fried puri made with coarse wheat flour, semolina, and coarse spiced urad dal paste.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour & Sooji",
        "amount": "1.5 cups atta + 1/2 cup sooji"
      },
      {
        "name": "Urad Dal",
        "amount": "1/2 cup (soaked 3 hrs & coarsely ground)"
      },
      {
        "name": "Fennel Seeds (Saunf)",
        "amount": "1 tbsp (crushed)"
      },
      {
        "name": "Kasuri Methi & Hing",
        "amount": "1 tbsp & 1/4 tsp"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Coarsely grind soaked urad dal with fennel seeds, hing, ginger, green chillies, and red chilli powder without adding excess water.",
      "Mix dal paste with wheat flour, sooji, kasuri methi, salt, and 2 tbsp oil; knead into a stiff, firm dough; rest 20 minutes.",
      "Divide into small balls; roll into 4-inch discs slightly thicker than regular puris.",
      "Deep fry in hot oil on medium-high heat, pressing gently until puffed into a firm, crispy sphere.",
      "Drain well and serve hot with spicy hing-wale aloo sabzi."
    ]
  },
  {
    "id": "palak-puri",
    "name": "Vibrant Palak Puri",
    "subCategory": "puri",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/poori.jpg",
    "description": "Emerald-green puffed crispy puris made by blending fresh blanched spinach puree, ginger, ajwain, and wheat flour.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour",
        "amount": "2 cups"
      },
      {
        "name": "Fresh Spinach (Palak)",
        "amount": "2 cups (blanched & pureed)"
      },
      {
        "name": "Ginger & Green Chillies",
        "amount": "1 inch & 1 chilli"
      },
      {
        "name": "Ajwain & Cumin Seeds",
        "amount": "1/2 tsp each"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Blanch spinach leaves in boiling water for 2 minutes, shock in ice water, and puree with ginger, green chilli, and cumin.",
      "Add spinach puree, ajwain, salt, and 1 tsp oil to wheat flour; knead into a stiff tight dough (do not add extra water).",
      "Roll into small round discs using a drop of oil.",
      "Drop into smoking hot oil; press lightly with ladle so it inflates into a bright green balloon.",
      "Flip and fry for 20 seconds; drain on paper towels and serve with spiced potato curry or chana."
    ]
  },
  {
    "id": "breads-poori",
    "name": "Classic Homestyle Poori",
    "subCategory": "puri",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/poori.jpg",
    "description": "Golden-brown puffed whole wheat puris with a crisp exterior, the beloved Sunday morning breakfast across India.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour (Atta)",
        "amount": "2 cups"
      },
      {
        "name": "Sooji (Semolina)",
        "amount": "1 tbsp (for extra crunch)"
      },
      {
        "name": "Oil",
        "amount": "1 tsp for dough + deep frying"
      },
      {
        "name": "Water & Salt",
        "amount": "as needed"
      }
    ],
    "steps": [
      "Knead wheat flour, semolina, salt, and water into a firm, tight dough (stiff dough prevents puris from absorbing oil).",
      "Pinch into smooth round balls; apply a drop of oil and roll into even 4-inch circles with uniform thickness.",
      "Slide into hot oil on high flame; press gently with slotted spoon until it blows up completely.",
      "Flip once, fry until light golden brown (about 20 seconds), drain on a rack, and serve immediately with hot potato masala (aloo bhaji)."
    ]
  },
  {
    "id": "masala-puri-bread",
    "name": "Spiced Tikhi Puri",
    "subCategory": "puri",
    "prepTime": 15,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/poori.jpg",
    "description": "Zesty, spiced breakfast puri infused with turmeric, Kashmiri red chilli powder, ajwain, and kasuri methi.",
    "ingredients": [
      {
        "name": "Whole Wheat Flour",
        "amount": "2 cups"
      },
      {
        "name": "Turmeric Powder",
        "amount": "1/2 tsp"
      },
      {
        "name": "Kashmiri Red Chilli Powder",
        "amount": "1 tsp"
      },
      {
        "name": "Ajwain & Kasuri Methi",
        "amount": "1 tsp each"
      },
      {
        "name": "Oil",
        "amount": "for deep frying"
      }
    ],
    "steps": [
      "Combine atta with turmeric, chilli powder, ajwain, kasuri methi, salt, and 1 tbsp warm oil.",
      "Knead with water into a tight, firm dough.",
      "Roll into thin round discs.",
      "Deep fry in hot oil until fully puffed and reddish-golden.",
      "Drain and serve hot with sweet mango pickle or plain masala chai."
    ]
  },
  {
    "id": "gujarati-dhebra",
    "name": "Crispy Bajra Dhebra",
    "subCategory": "puri",
    "prepTime": 20,
    "servings": 2,
    "veg": true,
    "image": "images/dishes/methi-thepla.jpg",
    "description": "Traditional Gujarati pearl millet and fenugreek flatbread seasoned with jaggery water, curd, white sesame, and garlic.",
    "ingredients": [
      {
        "name": "Bajra Flour (Pearl Millet)",
        "amount": "1.5 cups"
      },
      {
        "name": "Whole Wheat Flour",
        "amount": "1/2 cup"
      },
      {
        "name": "Fresh Methi Leaves",
        "amount": "1 cup (finely chopped)"
      },
      {
        "name": "Jaggery (Gud)",
        "amount": "2 tbsp (dissolved in warm water)"
      },
      {
        "name": "Curd & White Sesame Seeds",
        "amount": "2 tbsp each"
      },
      {
        "name": "Ginger Garlic Paste",
        "amount": "1 tbsp"
      }
    ],
    "steps": [
      "Mix bajra flour, wheat flour, methi leaves, curd, sesame seeds, ginger garlic paste, chilli powder, salt, and jaggery water.",
      "Knead into a soft dough and rest for 10 minutes.",
      "Pat out by hand or roll between parchment sheets into medium discs.",
      "Shallow fry or griddle-roast with oil on medium flame until crisp and deep golden.",
      "Serve warm with fresh churned butter and spicy garlic chutney."
    ]
  }
];
