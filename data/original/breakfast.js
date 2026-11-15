// 30 Authentic Indian Breakfast Recipes (Idli, Dosa & Morning Tiffins)
// Every dish uses its own strictly relevant, verified authentic photography
const BREAKFAST_RECIPES = [
  // --- IDLI VARIETIES (6) ---
  {
    id: "classic-idli",
    name: "Classic Idli",
    subCategory: "idli",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/classic-idli.jpg",
    description: "Soft and fluffy steamed rice-and-dal idlis served hot with coconut chutney and sambar.",
    ingredients: [
      { name: "Idli Batter", amount: "2 cups" },
      { name: "Pure Cow Ghee", amount: "1 tsp (for greasing)" },
      { name: "Water", amount: "2 cups (for steaming)" }
    ],
    steps: [
      "Check that your fermented batter is light, aerated, and doubled in volume. Stir gently once from bottom to top without knocking out the natural air bubbles.",
      "Add 2 cups of water to the idli steamer or cooker and bring to a rolling boil on high heat before placing the plates inside.",
      "Grease the idli moulds lightly with sesame oil or pure cow ghee. Ladle batter into each mould until 3/4th full so the idlis have space to expand.",
      "Place the stand in the steamer, cover tightly with the lid (without pressure weight), and steam on medium-high heat for 10 to 12 minutes.",
      "Turn off the heat and let rest undisturbed for 2 minutes. Sprinkle a few drops of cool water on the back of the plates, then slide a wet spoon around the edges to unmould silky soft idlis.",
      "Serve piping hot on a banana leaf alongside fresh coconut chutney, spicy tomato chutney, and aromatic tiffin sambar."
    ]
  },
  {
    id: "chitti-idli",
    name: "Chitti Idli (Button Idli)",
    subCategory: "idli",
    prepTime: 12,
    servings: 2,
    veg: true,
    image: "images/dishes/chitti-idli.jpg",
    description: "Cute mini bite-sized idlis dipped in a bowl of hot sambar with a spoonful of melted ghee.",
    ingredients: [
      { name: "Idli Batter", amount: "1.5 cups" },
      { name: "Sambar", amount: "2 cups" },
      { name: "Pure Cow Ghee", amount: "1 tbsp" }
    ],
    steps: [
      "Lightly grease mini-button idli moulds with melted pure cow ghee.",
      "Carefully ladle 1 small teaspoon of fermented batter into each button cavity.",
      "Steam in a preheated steamer on high flame for exactly 7 to 8 minutes until toothpicks inserted come out clean.",
      "While hot, unmould the mini idlis using a small butter knife or teaspoon.",
      "Place 15 to 20 hot button idlis directly into a wide shallow bowl, pour 2 generous ladles of boiling hot aromatic sambar all over them so they submerge completely.",
      "Crown with a dollop of pure desi cow ghee, garnish with finely chopped fresh coriander, and let sit for 1 minute before eating so the idlis soak up the spiced lentil broth."
    ]
  },
  {
    id: "ragi-idli",
    name: "Ragi Idli",
    subCategory: "idli",
    prepTime: 18,
    servings: 2,
    veg: true,
    image: "images/dishes/ragi-idli.jpg",
    description: "Healthy, earthy idlis made with finger millet flour (ragi), packed with fiber and calcium.",
    ingredients: [
      { name: "Ragi Flour", amount: "1 cup" },
      { name: "Urad Dal", amount: "1 cup (soaked & ground)" },
      { name: "Curd", amount: "0.5 cup" },
      { name: "Salt", amount: "1 tsp" }
    ],
    steps: [
      "In a mixing bowl, combine 1 cup ragi (finger millet) flour with 1 cup fermented urad dal batter, 0.5 cup fresh thick curd, and 1 tsp salt.",
      "Whisk smoothly into a lump-free, pourable thick batter. Cover and rest for 15 minutes to allow the ragi flour to absorb the moisture.",
      "Bring water to a boil in your steamer pot.",
      "Grease idli plates with sesame oil, ladle the dark purple-brown ragi batter into the moulds.",
      "Steam on medium-high heat for 12 to 14 minutes until firm and fully cooked through.",
      "Rest for 2 minutes, unmould gently, and serve warm with a spicy roasted peanut chutney or allam (ginger) pachadi."
    ]
  },
  {
    id: "thatte-idli",
    name: "Thatte Idli",
    subCategory: "idli",
    prepTime: 20,
    servings: 2,
    veg: true,
    image: "images/dishes/thatte-idli.jpg",
    description: "Famous Karnataka-style plate idli: large, super soft, and spongy, smeared with podi and butter.",
    ingredients: [
      { name: "Idli Batter", amount: "2 cups" },
      { name: "Leftover Cooked Rice", amount: "0.5 cup (blended in batter)" },
      { name: "Pure Cow Ghee", amount: "2 tbsp" },
      { name: "Chutney Podi", amount: "2 tbsp" }
    ],
    steps: [
      "For authentic Bidadi-style thatte idli, ensure your batter contains soaked poha (flattened rice) blended along with the idli rice and urad dal for extreme sponginess.",
      "Grease wide, flat thatte plates (or flat steel plates) generously with pure ghee or sesame oil.",
      "Pour a large ladle (about 1 cup) of batter into the center and tilt the plate gently so it spreads into a wide, even disc.",
      "Steam in a large steamer on high flame for 12 to 15 minutes until a knife inserted in the center comes out clean.",
      "Let cool for 2 minutes. Run a wet flat knife along the outer edge and slide the giant plate idli onto a banana leaf.",
      "Generously dust the entire top with spicy gun powder (chutney podi) and place a generous pat of fresh melting white butter right in the center."
    ]
  },
  {
    id: "kanchipuram-idli",
    name: "Kanchipuram Idli",
    subCategory: "idli",
    prepTime: 25,
    servings: 2,
    veg: true,
    image: "images/dishes/kanchipuram-idli.jpg",
    description: "Traditional temple idli seasoned with coarsely crushed black pepper, cumin seeds, dry ginger, and cashews.",
    ingredients: [
      { name: "Idli Batter", amount: "2 cups" },
      { name: "Ginger", amount: "1 inch (finely chopped)" },
      { name: "Curry Leaves", amount: "1 sprig" },
      { name: "Pure Cow Ghee", amount: "2 tbsp" },
      { name: "Cumin & Pepper", amount: "1 tsp each" }
    ],
    steps: [
      "Ensure your idli batter is ground coarsely (not silky smooth) to give the authentic temple texture.",
      "For the royal tempering: Heat 2 tbsp ghee in a small pan. Crackle cumin seeds, coarsely crushed black peppercorns, finely minced fresh ginger, 10 halved cashews, and fresh curry leaves until aromatic and cashews turn golden.",
      "Pour the sizzling ghee tadka along with 0.5 tsp dry ginger powder (sukku) and a pinch of hing directly into the coarse batter; fold gently.",
      "Grease cylindrical steel tumblers, banana leaf cups, or traditional kanchipuram moulds with ghee.",
      "Pour batter until 3/4th full and steam on medium-high flame for 18 to 20 minutes (since these idlis are denser and larger).",
      "Unmould, slice into thick rounds if cooked in tumblers, and serve warm with spicy coconut chutney and idli podi."
    ]
  },
  {
    id: "oats-idli",
    name: "Oats Idli",
    subCategory: "idli",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/oats-idli.jpg",
    description: "Quick, light instant idlis made with roasted oats, curd, mustard tempering, and grated carrots.",
    ingredients: [
      { name: "Rolled Oats", amount: "1 cup (powdered)" },
      { name: "Rava (Semolina)", amount: "0.5 cup" },
      { name: "Curd", amount: "1 cup" },
      { name: "Green Chillies", amount: "2 (chopped)" },
      { name: "Carrot", amount: "1 (grated)" }
    ],
    steps: [
      "Dry roast 1 cup rolled oats in a pan on medium-low flame for 4 minutes until warm and nutty. Cool and grind into a coarse flour.",
      "In the same pan, heat 1 tsp oil; fry mustard seeds, chana dal, urad dal, finely chopped green chillies, grated ginger, and curry leaves.",
      "In a bowl, combine the roasted oats flour, 0.5 cup semolina (rava), the prepared tempering, 1 finely grated carrot, and 1 cup fresh whisked curd.",
      "Mix into a thick batter and let rest for 5 minutes. If batter thickens too much, add 2-3 tbsp water and a pinch of baking soda or eno.",
      "Ladle into greased idli plates and steam immediately on high heat for 10 to 12 minutes.",
      "Serve warm with refreshing mint-coconut chutney for a light, fiber-rich breakfast."
    ]
  },

  // --- DOSA VARIETIES (9) ---
  {
    id: "plain-dosa",
    name: "Plain Dosa (Sada Dosa)",
    subCategory: "dosa",
    prepTime: 10,
    servings: 2,
    veg: true,
    image: "images/dishes/plain-dosa.jpg",
    description: "Crispy, paper-thin golden crepe made on a hot cast iron tawa with fermented batter.",
    ingredients: [
      { name: "Dosa Batter", amount: "2 cups" },
      { name: "Pure Cow Ghee", amount: "2 tbsp" }
    ],
    steps: [
      "Heat a seasoned heavy cast-iron tawa on medium-high heat until hot. Splash a few drops of water; if they sizzle and dance off, wipe the surface with an onion half dipped in oil.",
      "Pour a large ladle of well-fermented batter right into the center of the tawa.",
      "Using the flat base of the ladle, spread the batter in smooth, quick outward concentric circles to form a thin, even crepe.",
      "Immediately drizzle 1 teaspoon of oil or pure desi ghee all along the edges and across the surface.",
      "Cook on medium-high flame without flipping until the edges curl up naturally and the underside turns a beautiful uniform golden brown.",
      "Fold the dosa in half or roll into a cylinder and transfer to a plate immediately. Serve with fresh coconut chutney and piping hot sambar."
    ]
  },
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    subCategory: "dosa",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/masala-dosa.jpg",
    description: "The classic restaurant favorite: crispy golden dosa stuffed with comforting spiced potato masala.",
    ingredients: [
      { name: "Dosa Batter", amount: "2 cups" },
      { name: "Boiled Potatoes", amount: "3 (mashed)" },
      { name: "Onion", amount: "1 large (sliced)" },
      { name: "Green Chillies", amount: "2 (minced)" },
      { name: "Curry Leaves", amount: "1 sprig" }
    ],
    steps: [
      "Prepare the potato masala: Heat 1 tbsp oil in a pan, crackle mustard seeds, chana dal, curry leaves, and green chillies. Saut\u00e9 sliced onions until soft; add turmeric, salt, boiled coarsely mashed potatoes, and 3 tbsp water. Simmer for 3 minutes until moist and aromatic, finish with fresh coriander.",
      "Heat your cast-iron tawa until very hot, splash water to check temperature, and wipe clean.",
      "Ladle batter onto the center and spread thinly in concentric circles.",
      "Drizzle pure cow ghee or butter generously around the borders and over the top. Roast on medium flame until golden brown and super crisp.",
      "Spread a generous scoop of the warm potato masala across the center of the roasting dosa.",
      "Fold both sides over the filling or roll into a cylinder, and serve piping hot with coconut chutney and tiffin sambar."
    ]
  },
  {
    id: "onion-dosa",
    name: "Onion Dosa",
    subCategory: "dosa",
    prepTime: 12,
    servings: 2,
    veg: true,
    image: "images/dishes/onion-dosa.jpg",
    description: "Crisp dosa topped with finely chopped onions, fresh green chillies, and coriander that caramelize on the pan.",
    ingredients: [
      { name: "Dosa Batter", amount: "2 cups" },
      { name: "Onion", amount: "1 cup (finely chopped)" },
      { name: "Green Chillies", amount: "2 (finely minced)" },
      { name: "Pure Cow Ghee", amount: "2 tbsp" }
    ],
    steps: [
      "Finely dice 1 large onion, 2 green chillies, and fresh coriander leaves; mix together in a bowl with a pinch of cumin seeds.",
      "Heat your tawa, grease lightly with oil, and pour a ladle of dosa batter, spreading it into a thin circular crepe.",
      "Immediately, while the top batter is still wet, generously sprinkle a handful of the chopped onion-chilli mixture evenly across the entire surface.",
      "Gently press the onions down with a flat spatula so they adhere into the batter.",
      "Drizzle 1 tbsp oil around the circumference. Once the bottom is golden, flip the dosa for 30 to 45 seconds to let the onions caramelize into sweet golden perfection.",
      "Flip back, fold, and serve hot with spicy tomato-garlic chutney."
    ]
  },
  {
    id: "ghee-dosa",
    name: "Ghee Dosa (Ghee Roast)",
    subCategory: "dosa",
    prepTime: 12,
    servings: 2,
    veg: true,
    image: "images/dishes/ghee-dosa.jpg",
    description: "Extra crispy, deep-golden crepe roasted lavishly in pure desi cow ghee.",
    ingredients: [
      { name: "Dosa Batter", amount: "2 cups" },
      { name: "Pure Cow Ghee", amount: "3 tbsp" }
    ],
    steps: [
      "Prepare a well-fermented, slightly thin dosa batter for maximum crispiness.",
      "Heat the cast-iron griddle on high heat, splash water droplets, and wipe clean with a cloth.",
      "Spread a ladle of batter thinly from center outwards into a wafer-thin circle.",
      "Ladle 2 tablespoons of pure desi cow ghee generously around the outer rim and across the top of the dosa.",
      "Roast on medium flame; the ghee will fry the bottom to an intense, fragrant mahogany-gold crunch.",
      "Roll into a tall showstopper cone (roast cone) or double fold, and serve smoking hot."
    ]
  },
  {
    id: "rava-dosa",
    name: "Rava Dosa",
    subCategory: "dosa",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/rava-dosa.jpg",
    description: "Lacy, wafer-crisp instant semolina dosa studded with whole cumin seeds, black pepper, and ginger.",
    ingredients: [
      { name: "Rava (Semolina)", amount: "0.5 cup" },
      { name: "Ginger", amount: "1 tsp (minced)" },
      { name: "Green Chillies", amount: "2 (chopped)" },
      { name: "Curry Leaves", amount: "1 sprig" }
    ],
    steps: [
      "In a mixing bowl, whisk 0.5 cup rava (semolina), 0.5 cup rice flour, 2 tbsp maida, 1 tsp cumin seeds, 1 tsp crushed black pepper, minced ginger, chopped green chillies, curry leaves, salt, and 2.5 cups water into a very thin, watery buttermilk-like batter. Rest for 15 minutes.",
      "Stir the batter thoroughly from the bottom before each dosa, as rava tends to settle down.",
      "Heat a cast-iron tawa until smoking hot. Do NOT spread with a ladle; instead, splash/pour a cup of thin batter from 3 inches height starting from the outer edge toward the center, allowing natural lace holes to form.",
      "Drizzle 1 tablespoon of oil or ghee into all the holes and around the outer border.",
      "Cook on medium-low flame for 3 to 4 minutes without disturbing until the edges turn reddish-brown and crisp up completely. Fold and serve with ginger chutney."
    ]
  },
  {
    id: "pesarattu",
    name: "Pesarattu",
    subCategory: "dosa",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/pesarattu.jpg",
    description: "Nutritious Andhra green gram crepe made from whole soaked moong dal, ginger, and green chillies.",
    ingredients: [
      { name: "Whole Green Moong", amount: "1 cup (soaked)" },
      { name: "Ginger", amount: "1 inch piece" },
      { name: "Green Chillies", amount: "3 pieces" },
      { name: "Onion", amount: "0.5 cup (diced for topping)" }
    ],
    steps: [
      "Soak 1 cup whole green gram (sabut moong) in water for at least 4 to 6 hours or overnight.",
      "Drain and grind the soaked moong with 1 inch fresh ginger, 3 green chillies, 1 tsp cumin seeds, and 0.5 cup water into a smooth, pourable batter. Add salt to taste (no fermentation needed).",
      "Heat a tawa on medium heat, pour a ladle of green batter, and spread into a medium-thin circle.",
      "Immediately top with finely diced raw onions and a sprinkle of whole cumin seeds; press lightly with a spatula.",
      "Drizzle oil or ghee around the edges and cook on medium heat until the bottom turns golden-brown and crisp.",
      "Flip for 30 seconds to lightly toast the onions, flip back, fold in half, and serve hot with spicy sweet-tangy Andhra ginger chutney (Allam Pachadi)."
    ]
  },
  {
    id: "set-dosa",
    name: "Set Dosa",
    subCategory: "dosa",
    prepTime: 12,
    servings: 2,
    veg: true,
    image: "images/dishes/set-dosa.jpg",
    description: "Set of three super soft, spongy, thick mini dosas that melt in your mouth, served with veg sagu.",
    ingredients: [
      { name: "Dosa Batter", amount: "2 cups" },
      { name: "Curd", amount: "2 tbsp" },
      { name: "Pure Cow Ghee", amount: "1 tbsp" }
    ],
    steps: [
      "Make sure your batter contains flattened rice (poha) and thick curd, fermented overnight into an airy, frothy sponge batter.",
      "Heat a tawa on medium-low heat and grease lightly with oil.",
      "Pour a thick ladle of batter in the center. Do NOT spread thin; let it naturally spread into a small, thick 5-inch circle.",
      "Cover the pan with a lid immediately. The steam trapped inside will create hundreds of tiny aerated holes on the surface.",
      "Cook for 2 minutes on low flame until the top is fully set and spongy like a cloud. Do not flip.",
      "Serve traditionally as a 'set' of three soft spongy dosas stacked together, accompanied by vegetable sagu and coconut chutney."
    ]
  },
  {
    id: "mysore-masala-dosa",
    name: "Mysore Masala Dosa",
    subCategory: "dosa",
    prepTime: 18,
    servings: 2,
    veg: true,
    image: "images/dishes/mysore-masala-dosa.jpg",
    description: "Famous Bangalore/Mysore style dosa coated with spicy red garlic-chilli chutney and stuffed with potato bhaji.",
    ingredients: [
      { name: "Dosa Batter", amount: "2 cups" },
      { name: "Boiled Potatoes", amount: "2 (mashed)" },
      { name: "Onion", amount: "1 (sliced)" },
      { name: "Pure Cow Ghee", amount: "2 tbsp" }
    ],
    steps: [
      "Prepare the fiery red chutney: Saut\u00e9 garlic cloves, soaked Byadgi red chillies, roasted chana dal, onion, and tamarind; blend into a thick, spicy, fragrant red paste.",
      "Heat a cast-iron tawa until smoking hot, wipe with a damp cloth, and spread batter thinly into a large circle.",
      "Drizzle melted butter or ghee along the perimeter.",
      "As the dosa begins to turn golden, drop a generous tablespoon of the red garlic-chilli paste in the center and smear it evenly across the entire inner surface using a spatula.",
      "Place a scoop of spiced potato bhaji in the middle.",
      "Let the bottom roast to a deep mahogany, crackling crispness. Fold into a neat envelope or triangle and serve with coconut chutney."
    ]
  },
  {
    id: "egg-dosa",
    name: "Egg Dosa",
    subCategory: "dosa",
    prepTime: 12,
    servings: 2,
    veg: false,
    image: "images/dishes/egg-dosa.jpg",
    description: "Street-style crisp dosa with a fresh egg cracked and spiced directly on top while roasting.",
    ingredients: [
      { name: "Dosa Batter", amount: "2 cups" },
      { name: "Onion", amount: "2 tbsp (finely chopped)" },
      { name: "Curry Leaves", amount: "1 sprig" },
      { name: "Pure Cow Ghee", amount: "2 tbsp" }
    ],
    steps: [
      "Heat your tawa, wipe clean, and spread a ladle of dosa batter into a wide thin circle.",
      "Drizzle 1 tsp oil around the edges and let it cook for 30 seconds until the batter sets slightly.",
      "Crack a fresh farm egg directly in the center of the roasting dosa.",
      "Using a spoon or spatula, break the yolk and spread the egg evenly across the entire surface of the dosa.",
      "Immediately season with a pinch of salt, freshly cracked black pepper, finely chopped onions, green chillies, and coriander.",
      "Drizzle oil over the egg, flip the dosa carefully, and cook on medium flame for 1 minute until the egg is completely cooked, fragrant, and golden.",
      "Flip back, fold in half, and serve hot with chicken gravy or spicy tomato chutney."
    ]
  },

  // --- OTHER BREAKFAST & TIFFINS (15) ---
  {
    id: "poori",
    name: "Poori",
    subCategory: "other",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/poori.jpg",
    description: "Puffed, golden whole-wheat deep-fried breads, crispy on the outside and hollow inside.",
    ingredients: [
      { name: "Wheat Flour", amount: "2 cups" },
      { name: "Water & Salt", amount: "as needed" },
      { name: "Oil", amount: "for deep frying" }
    ],
    steps: [
      "In a wide bowl, mix 2 cups whole wheat flour with 0.5 tsp salt, 1 tsp oil, and lukewarm water added in small increments.",
      "Knead into a firm, stiff dough (a stiff dough prevents pooris from absorbing excess oil). Cover with a damp cloth and rest for 10 minutes.",
      "Pinch small lemon-sized balls of dough. Roll each ball with light oil (avoid dry flour dusting as it burns in the oil) into a 4-inch round disc of even medium thickness.",
      "Heat oil in a deep kadai on high flame until very hot (test with a tiny speck of dough; it should rise to the surface in 1 second).",
      "Gently slide one rolled dough disc into the hot oil. Immediately tap the center lightly with the back of a slotted skimmer ladle; the steam will trap and balloon the poori up completely!",
      "Flip the puffed poori, fry the other side for 5 seconds until light golden, remove with the skimmer, drain on paper towels, and serve immediately while puffed."
    ]
  },
  {
    id: "chapati",
    name: "Chapati",
    subCategory: "other",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/chapati.jpg",
    description: "Everyday soft, thin whole-wheat flatbread cooked on an iron tawa with a light brush of ghee.",
    ingredients: [
      { name: "Wheat Flour", amount: "2 cups" },
      { name: "Pure Cow Ghee", amount: "1 tsp" },
      { name: "Water", amount: "0.75 cup" }
    ],
    steps: [
      "Combine 2 cups whole wheat flour with 0.5 tsp salt and gradually add warm water; knead for 5 minutes into a soft, supple, pliable dough. Smear with 1 tsp oil, cover, and rest for 15 minutes.",
      "Divide into smooth golf-ball sized rounds. Dust lightly with wheat flour and roll out evenly using a rolling pin into a thin 6 to 7-inch circle.",
      "Heat an iron tawa on medium-high. Place the rolled chapati on the hot tawa.",
      "Cook for 25-30 seconds until tiny air bubbles appear on the surface; flip over.",
      "Cook the second side for 30 seconds, pressing gently with a clean folded kitchen towel or spatula around the edges; the chapati will puff up like a balloon.",
      "Transfer to a plate, immediately brush with warm pure cow ghee, and stack inside an insulated roti box to stay soft for hours."
    ]
  },
  {
    id: "puri-bhaji",
    name: "Puri Bhaji",
    subCategory: "other",
    prepTime: 25,
    servings: 2,
    veg: true,
    image: "images/dishes/puri-bhaji.jpg",
    description: "The classic Indian breakfast pairing: puffed hot pooris served with mild yellow spiced potato curry.",
    ingredients: [
      { name: "Wheat Flour", amount: "2 cups (for pooris)" },
      { name: "Boiled Potatoes", amount: "3 (crushed)" },
      { name: "Onion", amount: "1 (sliced)" },
      { name: "Green Chillies", amount: "2" },
      { name: "Curry Leaves", amount: "1 sprig" }
    ],
    steps: [
      "For the potato bhaji: Heat 2 tbsp oil in a pan, crackle mustard seeds, cumin, hing, green chillies, grated ginger, and curry leaves. Add sliced onions and cook until soft and translucent.",
      "Add 0.5 tsp turmeric, salt, and 3 boiled potatoes coarsely crushed with your fingers. Pour 1 cup of warm water and simmer on medium flame for 5 minutes until the curry thickens to a comforting gravy. Finish with lemon juice and fresh coriander.",
      "For pooris: Knead a stiff dough with wheat flour, salt, and water. Roll into small even discs.",
      "Deep fry in smoking hot oil, pressing gently with a slotted ladle so they puff up into hollow golden balloons.",
      "Drain quickly and serve 3 piping hot, crisp puffed pooris immediately alongside a generous bowl of hot potato bhaji and sliced red onions."
    ]
  },
  {
    id: "upma",
    name: "Upma",
    subCategory: "other",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/upma.jpg",
    description: "Simple, comforting South Indian semolina breakfast tempered with mustard, ginger, and curry leaves.",
    ingredients: [
      { name: "Rava (Semolina)", amount: "1 cup" },
      { name: "Ginger", amount: "1 tsp" },
      { name: "Curry Leaves", amount: "1 sprig" },
      { name: "Green Chillies", amount: "2" },
      { name: "Pure Cow Ghee", amount: "2 tbsp" }
    ],
    steps: [
      "Heat a dry pan on medium-low flame. Add 1 cup semolina (rava) and roast slowly for 4-5 minutes, stirring continuously until fragrant and warm (do not let it brown). Transfer to a plate.",
      "In the same kadai, heat 2 tbsp oil or pure cow ghee. Add 1 tsp mustard seeds; when they crackle, add 1 tsp chana dal, 1 tsp urad dal, and fry until golden.",
      "Add finely chopped ginger, 2 slit green chillies, sliced onions, and fresh curry leaves; saut\u00e9 until onions turn translucent.",
      "Pour 2.5 cups of water and 1 tsp salt into the kadai; bring to a rolling, bubbling boil on high flame.",
      "Lower the heat to medium. Slowly pour the roasted rava into the boiling water in a steady stream with one hand while stirring continuously with a wooden spatula in the other hand to prevent any lumps from forming.",
      "Cover tightly with a lid and cook on low heat for 3 minutes until all water is absorbed. Turn off flame, drizzle 1 tbsp pure ghee on top, rest covered for 2 minutes, then fluff with a fork."
    ]
  },
  {
    id: "rava-upma",
    name: "Rava Upma",
    subCategory: "other",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/rava-upma.jpg",
    description: "Rich, homestyle upma loaded with golden cashews, sweet sliced onions, and a spoon of melted ghee.",
    ingredients: [
      { name: "Rava (Semolina)", amount: "1 cup" },
      { name: "Onion", amount: "1 medium (sliced)" },
      { name: "Green Chillies", amount: "2" },
      { name: "Curry Leaves", amount: "1 sprig" },
      { name: "Pure Cow Ghee", amount: "2 tbsp" }
    ],
    steps: [
      "In a kadai, heat 2 tbsp pure cow ghee. Add 10-12 halved cashews and fry on low heat until golden brown and crunchy; remove and set aside.",
      "In the remaining hot ghee, roast 1 cup Bombay rava for 4 minutes until warm, nutty, and aromatic; transfer to a plate.",
      "Add 1 more tablespoon of ghee/oil to the pan. Crackle mustard seeds, urad dal, chana dal, grated ginger, curry leaves, and sliced onions; saut\u00e9 until onions soften.",
      "Pour 2.5 cups water, add salt to taste, and bring to a vigorous rolling boil.",
      "Stream the roasted rava in gradually while whisking continuously to keep it silky smooth and lump-free.",
      "Cover with a tight lid, simmer on low heat for 3 minutes, then fold in the golden fried cashews and a teaspoon of fresh lemon juice before serving."
    ]
  },
  {
    id: "pongal",
    name: "Pongal",
    subCategory: "other",
    prepTime: 25,
    servings: 2,
    veg: true,
    image: "images/dishes/pongal.jpg",
    description: "Creamy, heartwarming rice and moong dal khichdi tempered with whole black pepper, cumin, and cashews in ghee.",
    ingredients: [
      { name: "Leftover Cooked Rice", amount: "1.5 cups" },
      { name: "Urad Dal", amount: "0.5 cup" },
      { name: "Ginger", amount: "1 inch (finely chopped)" },
      { name: "Curry Leaves", amount: "1 sprig" },
      { name: "Pure Cow Ghee", amount: "3 tbsp" }
    ],
    steps: [
      "Dry roast 0.5 cup yellow moong dal in a pressure cooker on low flame for 3 minutes until nutty and fragrant (do not brown).",
      "Add 1 cup raw rice (or leftover cooked rice), wash thoroughly, and add 4.5 cups of water with 1 tsp salt.",
      "Pressure cook on medium flame for 4 to 5 whistles until the rice and dal are completely soft, creamy, and easily mashable.",
      "Open the cooker and lightly mash the rice-dal mixture with the back of a ladle into a porridge-like consistency.",
      "For the royal tempering: Heat 3 tablespoons of pure desi cow ghee in a small pan. Add 1 tsp whole black peppercorns, 1 tsp cumin seeds, 10 whole cashews, 1 inch finely chopped ginger, and fresh curry leaves; fry on low heat until cashews turn golden.",
      "Pour the sizzling ghee tadka directly over the mashed pongal, stir thoroughly, and serve steaming hot with coconut chutney and medu vada."
    ]
  },
  {
    id: "ven-pongal",
    name: "Ven Pongal",
    subCategory: "other",
    prepTime: 25,
    servings: 2,
    veg: true,
    image: "images/dishes/ven-pongal.jpg",
    description: "Temple-style white savory pongal, silky smooth and rich with pure cow ghee and roasted spices.",
    ingredients: [
      { name: "Leftover Cooked Rice", amount: "1.5 cups" },
      { name: "Pure Cow Ghee", amount: "3 tbsp" },
      { name: "Ginger", amount: "1 tbsp" },
      { name: "Curry Leaves", amount: "1 sprig" }
    ],
    steps: [
      "In a pressure cooker, combine 1 cup raw rice and 0.5 cup roasted yellow moong dal with 5 cups of water and 1 tsp salt.",
      "Cook for 5 whistles on medium flame until ultra-soft and silky smooth.",
      "Mash the mixture lightly with a wooden ladle while steaming hot.",
      "In a separate tadka pan, heat 4 generous tablespoons of pure cow ghee on medium flame.",
      "Crackle 1.5 tsp crushed black peppercorns, 1 tsp cumin seeds, 12 whole cashews, grated ginger, and curry leaves until the cashews are rich golden and the pepper releases its pungent aroma.",
      "Pour the bubbling ghee tempering over the pongal, mix well, and serve piping hot on a banana leaf alongside authentic tiffin sambar."
    ]
  },
  {
    id: "pesarattu-upma",
    name: "Pesarattu Upma (MLA Pesarattu)",
    subCategory: "other",
    prepTime: 20,
    servings: 2,
    veg: true,
    image: "images/dishes/pesarattu-upma.jpg",
    description: "Andhra's ultimate breakfast combo: a crisp green moong dosa stuffed with hot savory rava upma inside.",
    ingredients: [
      { name: "Whole Green Moong", amount: "1 cup (soaked)" },
      { name: "Rava (Semolina)", amount: "0.5 cup" },
      { name: "Onion", amount: "0.5 cup (chopped)" },
      { name: "Ginger", amount: "1 tbsp" },
      { name: "Pure Cow Ghee", amount: "2 tbsp" }
    ],
    steps: [
      "First, cook a quick batch of homestyle savory rava upma loaded with cashews and ghee; keep it warm.",
      "Grind soaked whole green moong dal with fresh ginger, green chillies, and cumin into a smooth batter.",
      "Heat a cast-iron tawa on medium-high heat, pour a ladle of green moong batter, and spread into a thin circle.",
      "Sprinkle finely diced onions, green chillies, and cumin seeds on top; drizzle 1 tablespoon of pure cow ghee around the edges.",
      "Roast until the bottom turns deep golden-brown and crispy.",
      "Place a generous scoop of hot savory rava upma right in the center of the crisp green dosa.",
      "Fold both sides over the upma into a roll, slide onto a plate, and serve immediately with Andhra ginger chutney (Allam Pachadi)."
    ]
  },
  {
    id: "uttapam",
    name: "Uttapam",
    subCategory: "other",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/uttapam.jpg",
    description: "Thick, soft fermented pancake with a golden crisp base and spongy pillowy top.",
    ingredients: [
      { name: "Dosa Batter", amount: "2 cups" },
      { name: "Curry Leaves", amount: "1 sprig" },
      { name: "Pure Cow Ghee", amount: "2 tbsp" }
    ],
    steps: [
      "Ensure your fermented dosa batter is thick (ladle-coating consistency, not thin like dosa batter).",
      "Heat a tawa on medium heat and smear with a few drops of oil.",
      "Pour a generous, thick ladle of batter into the center. Do NOT spread it out thin; let it settle naturally into a thick 6-inch round pancake.",
      "Drizzle oil or ghee around the edges.",
      "Cover the tawa with a domed lid and cook on medium-low flame for 2.5 minutes until the base turns golden and the top is cooked and aerated with tiny holes.",
      "Flip gently and cook the other side for 1 minute until lightly toasted. Serve warm with sambar and coconut chutney."
    ]
  },
  {
    id: "onion-uttapam",
    name: "Onion Uttapam",
    subCategory: "other",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/onion-uttapam.jpg",
    description: "Thick savory pancake loaded with sweet caramelized onions, green chillies, and fresh coriander.",
    ingredients: [
      { name: "Dosa Batter", amount: "2 cups" },
      { name: "Onion", amount: "1 cup (finely chopped)" },
      { name: "Green Chillies", amount: "2 (minced)" },
      { name: "Curry Leaves", amount: "1 sprig" }
    ],
    steps: [
      "Finely chop 1 large onion, 2 green chillies, and fresh coriander leaves.",
      "Heat a tawa on medium flame, drizzle a few drops of oil, and pour a thick ladle of fermented batter into a 6-inch pancake.",
      "Immediately, while the top batter is still wet, press a generous handful of the chopped onions, chillies, and coriander firmly into the batter with your fingers.",
      "Drizzle 1 tablespoon of pure ghee or oil around the outer rim and over the onions.",
      "Cover with a lid and cook on medium-low for 2 minutes until the base is crisp and cooked through.",
      "Flip the uttapam carefully and cook on medium flame for 1 to 2 minutes so the onions press against the hot griddle and caramelize into sweet, golden perfection.",
      "Flip back and serve hot with spicy tomato chutney."
    ]
  },
  {
    id: "appam",
    name: "Appam",
    subCategory: "other",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/appam.jpg",
    description: "Kerala bowl-shaped fermented rice pancake with a soft spongy cloud center and crispy lace edges.",
    ingredients: [
      { name: "Coconut Milk", amount: "1 cup" },
      { name: "Leftover Cooked Rice", amount: "0.5 cup" },
      { name: "Pure Cow Ghee", amount: "1 tsp" }
    ],
    steps: [
      "Prepare the fermented batter using raw rice, cooked rice, coconut milk, and a pinch of yeast; ferment overnight until frothy and bubbly.",
      "Heat an authentic curved non-stick or seasoned cast-iron appachatti (appam pan) on medium-low flame.",
      "Lightly grease the center with oil using a paper towel.",
      "Pour a ladle of batter into the center of the pan. Immediately hold both handles of the pan, lift it slightly, and swirl it once in a complete circular motion so a thin layer coats the curved sides while the excess batter pools in the center.",
      "Cover with the lid and cook on low heat for 2 to 3 minutes without flipping.",
      "Remove the lid: the edges should be papery, crisp, and lacy, while the center remains a thick, spongy, cloud-soft white pillow. Slide onto a plate and serve with sweetened coconut milk or vegetable stew."
    ]
  },
  {
    id: "medu-vada",
    name: "Medu Vada",
    subCategory: "other",
    prepTime: 20,
    servings: 2,
    veg: true,
    image: "images/dishes/medu-vada.jpg",
    description: "Crunchy golden doughnut-shaped lentil fritters with a crisp exterior and airy, fluffy inside.",
    ingredients: [
      { name: "Urad Dal", amount: "1 cup (soaked & aerated)" },
      { name: "Ginger", amount: "1 tsp (chopped)" },
      { name: "Curry Leaves", amount: "1 sprig" },
      { name: "Green Chillies", amount: "2" }
    ],
    steps: [
      "Soak 1 cup whole skinless urad dal in water for 3 to 4 hours; drain completely.",
      "Grind the dal in a wet grinder or mixer using only 2 to 3 tablespoons of ice-cold water (cold water prevents the batter from heating up and keeps it airy). Beat the batter with your hands in one direction for 3 minutes until light, fluffy, and white (test: a drop of batter should float on a bowl of water).",
      "Fold in 1 tsp whole black peppercorns, 1 inch finely chopped ginger, 2 minced green chillies, fresh curry leaves, and salt.",
      "Heat oil in a deep kadai on medium heat.",
      "Wet your palms with water. Take a lemon-sized portion of batter, shape into a smooth ball on your wet fingers, and press a hole in the center with your thumb to create the doughnut shape.",
      "Gently slide the shaped vada into the hot oil. Fry on medium flame for 3 to 4 minutes, flipping occasionally, until uniformly deep golden-brown and crackling crisp on the outside while staying light and airy inside. Drain and serve immediately with hot sambar."
    ]
  },
  {
    id: "punugulu",
    name: "Punugulu",
    subCategory: "other",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/punugulu.jpg",
    description: "Popular Andhra street snack: crisp bite-sized golden balls made from leftover idli or dosa batter.",
    ingredients: [
      { name: "Dosa Batter", amount: "1.5 cups" },
      { name: "Idli Batter", amount: "1.5 cups" },
      { name: "Onion", amount: "0.5 cup (chopped)" },
      { name: "Green Chillies", amount: "2" }
    ],
    steps: [
      "Take 2 cups of leftover, well-fermented idli or dosa batter in a mixing bowl.",
      "Add 2 tablespoons of rice flour or maida to absorb excess moisture and give a crisp outer shell.",
      "Add 1 finely chopped onion, 2 minced green chillies, 1 tsp cumin seeds, fresh curry leaves, and a pinch of salt; whisk into a thick dropping consistency.",
      "Heat oil in a deep kadai on medium flame until hot.",
      "Wet your fingers in water, pinch small bite-sized cherry-sized portions of batter, and drop them gently into the hot oil.",
      "Deep-fry on medium heat, stirring continuously with a slotted ladle so they fry evenly on all sides into crunchy, golden-brown balls.",
      "Drain on paper towels and serve piping hot with spicy peanut chutney or Andhra palli pachadi."
    ]
  },
  {
    id: "paratha",
    name: "Paratha (Plain Flaky)",
    subCategory: "other",
    prepTime: 15,
    servings: 2,
    veg: true,
    image: "images/dishes/paratha.jpg",
    description: "Crispy, multi-layered golden whole-wheat flatbread cooked with pure ghee on a tawa.",
    ingredients: [
      { name: "Wheat Flour", amount: "2 cups" },
      { name: "Pure Cow Ghee", amount: "2 tbsp" },
      { name: "Salt", amount: "0.5 tsp" }
    ],
    steps: [
      "In a bowl, knead 2 cups whole wheat flour with 0.5 tsp salt, 1 tsp oil, and warm water into a soft, smooth dough. Rest for 15 minutes.",
      "Divide into smooth balls. Roll a ball into a 5-inch circle, spread 0.5 tsp pure cow ghee evenly on top, and dust with a pinch of dry flour.",
      "Fold the circle in half into a semi-circle, spread a drop of ghee, and fold again into a triangle (or pleat like a fan and roll into a pinwheel spiral for lachha layers).",
      "Roll the folded dough gently into an even triangle or round flatbread without pressing too hard, to preserve the internal layers.",
      "Place on a hot tawa. Cook for 30 seconds until tiny bubbles appear; flip over.",
      "Brush both sides generously with pure cow ghee and press the edges gently with a spatula on medium heat until golden brown spots appear and the layers separate into flaky, crispy goodness. Serve warm with curd and pickle."
    ]
  },
  {
    id: "aloo-paratha",
    name: "Aloo Paratha",
    subCategory: "other",
    prepTime: 20,
    servings: 2,
    veg: true,
    image: "images/dishes/aloo-paratha.jpg",
    description: "Classic Punjabi comfort: stuffed flatbread loaded with spiced mashed potatoes, served with butter.",
    ingredients: [
      { name: "Wheat Flour", amount: "2 cups" },
      { name: "Boiled Potatoes", amount: "3 (mashed)" },
      { name: "Green Chillies", amount: "2 (minced)" },
      { name: "Pure Cow Ghee", amount: "2 tbsp" }
    ],
    steps: [
      "For the stuffing: Boil, peel, and thoroughly mash 3 large potatoes. Add 2 finely minced green chillies, 1 tsp roasted cumin powder, 1 tsp dry mango powder (amchur), 0.5 tsp garam masala, chopped fresh coriander, and salt; mix into a smooth, flavorful potato mixture.",
      "Knead a soft, pliable whole wheat dough (the dough must be as soft as the filling so it rolls out without bursting).",
      "Take a ball of dough, flatten the edges into a small cup, and place an equal-sized ball of potato filling in the center.",
      "Bring the dough edges together over the filling, pinch to seal tightly at the top, and flatten gently with your palms.",
      "Dust with dry flour and roll out very gently with light, even pressure into a 7-inch round paratha.",
      "Place on a hot tawa. Cook the first side for 30 seconds, flip, spread 1 tablespoon of butter or ghee, flip again, and baste the other side.",
      "Griddle on medium-high heat, pressing the edges until puffed, crisp, and speckled with golden-brown spots. Serve steaming hot with a melting slab of white butter, thick curd, and spicy mango pickle."
    ]
  }
];
