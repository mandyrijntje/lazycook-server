const Ingredient = require("../ingredient/model");
const Recipe = require("../recipe/model");

async function seedRecipeIngredient() {
  const rice = await Ingredient.create({
    name: "Rice",
    imageUrl:
      "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18173634/fc78kt074-02_ld-thumb1x1.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const bread = await Ingredient.create({
    name: "Bread",
    imageUrl:
      "https://www.universalmedicalinc.com/media/catalog/product/cache/449ed920677b89995fce23e18d20c3e2/w/0/w05823-main-1200wx1200h.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const noodles = await Ingredient.create({
    name: "Noodles",
    imageUrl: "https://i.imgur.com/K2lCc2q.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const carrot = await Ingredient.create({
    name: "Carrot",
    imageUrl:
      "https://soonhuatseeds.com/wp-content/uploads/2018/09/Carrot-seeds-soon-huat-seeds-malaysia.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const tomato = await Ingredient.create({
    name: "Tomato",
    imageUrl:
      "https://www.levarht.com/wp-content/uploads/2018/05/55-tomato.png",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const potato = await Ingredient.create({
    name: "Potato",
    imageUrl:
      "https://i5.walmartimages.ca/images/Enlarge/094/507/6000200094507.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const broccoli = await Ingredient.create({
    name: "Broccoli",
    imageUrl:
      "https://i5.walmartimages.ca/images/Enlarge/094/507/6000200094507.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const avocado = await Ingredient.create({
    name: "Avocado",
    imageUrl:
      "https://sc01.alicdn.com/kf/UTB8GtF5CODEXKJk43Oqq6Az3XXa8/Fresh-Avocado-Hass-Avocado-Fuerte-Avocado-South.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const seaweed = await Ingredient.create({
    name: "Seaweed",
    imageUrl:
      "https://image.made-in-china.com/202f0j00LNhapvDBOWuE/Yaki-Sushi-Nori-Seaweed.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const beef = await Ingredient.create({
    name: "Beef",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/2181/5655/products/chuck_crop_2018_web_2000x.png",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const pork = await Ingredient.create({
    name: "Pork",
    imageUrl: "https://scene7.samsclub.com/is/image/samsclub/0021103100000_A",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const venison = await Ingredient.create({
    name: "Venison",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-596443642-1560532197.jpg",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const pepper = await Ingredient.create({
    name: "Pepper",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-9d454/images/stencil/1280x1280/products/4908/9610/whole-black-peppercorns__02328.1299860220.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const rosemary = await Ingredient.create({
    name: "Rosemary",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/2971/2126/products/Rosemary_2522e414-cd12-4f6f-912d-b5cd9cfb0fc7_2000x.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const chives = await Ingredient.create({
    name: "Chives",
    imageUrl:
      "https://cdn1.i-scmp.com/sites/default/files/styles/768x768/public/2015/01/06/312c8c64db0819643d12aa605d552443.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const garlic = await Ingredient.create({
    name: "Garlic",
    imageUrl:
      "https://boxstuff-development-thumbnails.s3.amazonaws.com/484439_1200x1200.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const peanuts = await Ingredient.create({
    name: "Peanuts",
    imageUrl:
      "https://gourmetnutsanddriedfruit.com/wp-content/uploads/2015/10/Wholesale-Raw-Peanuts.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: true,
    hasDairy: false
  });

  const beans = await Ingredient.create({
    name: "Beans",
    imageUrl:
      "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2012/10/white_beans.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const peas = await Ingredient.create({
    name: "Peas",
    imageUrl:
      "https://www.taukri.pk/wp-content/uploads/2018/12/green-peas-500x500.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const salmon = await Ingredient.create({
    name: "Salmon",
    imageUrl:
      "https://www.mayrand.ca/globalassets/mayrand/catalog-mayrand/poissonnerie/52966-filet-de-truite-saumonnee-350-g.jpg",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const shrimp = await Ingredient.create({
    name: "Shrimp",
    imageUrl:
      "https://api.paleorobbie.com/static/db/plr/files/smp,W4bWAJ2dhDg=.jpg",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const tuna = await Ingredient.create({
    name: "Tuna",
    imageUrl:
      "https://www.marxfoods.com/images/Yellowfin-Tuna-Steaks_YellowfinTunaLoin-1.jpg",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const milk = await Ingredient.create({
    name: "Milk",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-ek50668lzs/images/stencil/1280x1280/products/2669/2933/2346-lg__43149.1577646969.jpg",
    isVegan: false,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: true
  });

  const coconutMilk = await Ingredient.create({
    name: "Coconut Milk",
    imageUrl:
      "https://atlas-content-cdn.pixelsquid.com/stock-images/glass-of-milk-2MEn1r7-600.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const cheese = await Ingredient.create({
    name: "Cheese",
    imageUrl:
      "https://www.ecosystemmarketplace.com/wp-content/uploads/2019/11/Swiss-Cheese.jpg",
    isVegan: false,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: true
  });

  const butter = await Ingredient.create({
    name: "Butter",
    imageUrl:
      "https://rascamsarl.com/wp-content/uploads/2018/12/Unsalted-Butter-2.jpg",
    isVegan: false,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: true
  });

  const oliveOil = await Ingredient.create({
    name: "Olive Oil",
    imageUrl:
      "https://www.organicityeu.com/wp-content/uploads/2019/03/extra-virgin-olive-oil.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const sunflowerOil = await Ingredient.create({
    name: "Sunflower Oil",
    imageUrl:
      "https://sc02.alicdn.com/kf/UTB8M1pKmXPJXKJkSahVq6xyzFXaw/Sunflower-Oil.jpg_350x350.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const soySauce = await Ingredient.create({
    name: "Soy Sauce",
    imageUrl: "https://www.planetsushi.hu/wp-content/uploads/szoja-szosz.jpg",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const chicken = await Ingredient.create({
    name: "Chicken",
    imageUrl:
      "https://5.imimg.com/data5/NT/RJ/MY-62650623/chicken-brest-500x500.jpg",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const duck = await Ingredient.create({
    name: "Duck",
    imageUrl:
      "https://www.marxfoods.com/images/Pekin-Boneless-Breasts_PekinDuckBreasts-1.jpg",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const turkey = await Ingredient.create({
    name: "Turkey",
    imageUrl:
      "https://5.imimg.com/data5/GY/XN/MY-44080452/turkey-meat-500x500.jpg",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  //recipes

  const carrotSoup = await Recipe.create({
    name: "Carrot Soup",
    imageUrl:
      "https://i5.walmartimages.ca/images/Enlarge/094/507/6000200094507.jpg",
    step1: "Make carrot soup",
    isVegan: false,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: true
  });

  const tomatoSoup = await Recipe.create({
    name: "Tomato Soup",
    imageUrl:
      "https://i5.walmartimages.ca/images/Enlarge/094/507/6000200094507.jpg",
    step1: "Make tomato soup",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const potatoSoup = await Recipe.create({
    name: "Potato Soup",
    imageUrl:
      "https://i5.walmartimages.ca/images/Enlarge/094/507/6000200094507.jpg",
    step1: "Make potato soup",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const stirFryBroccoli = await Recipe.create({
    name: "Stir-fry Broccoli",
    imageUrl:
      "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/garlicchilliandbrocc_90660_16x9.jpg",
    step1: "Fry broccoli in a pan",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const guacamole = await Recipe.create({
    name: "Guacamole",
    imageUrl:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Guacamole-Recipe.jpg",
    step1: "Smush avocado",
    step2: "Add salt to taste",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const toast = await Recipe.create({
    name: "Toasted bread",
    imageUrl:
      "https://i.pinimg.com/originals/9f/d1/87/9fd1876ba77bd963f957b9e057449637.png",
    step1: "Toast the bread",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const butterToast = await Recipe.create({
    name: "Buttered toast",
    imageUrl:
      "https://wellfoodbd.com/pub/media/catalog/product/cache/a5c5b28b33ce3dcb301bbca6f0078b05/w/e/well_food_butter_toast_1_.jpg",
    step1: "Toast the bread",
    step2: "Butter the toast",
    isVegan: false,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: true
  });

  const cheeseToast = await Recipe.create({
    name: "Cheesy toast",
    imageUrl:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/17/17/1493418831-delish-french-toast-grilled-cheese-9.jpg",
    step1: "Toast the bread",
    step2: "Slap cheese on the toast",
    isVegan: false,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: true
  });

  const tomatoToast = await Recipe.create({
    name: "Tomatoes on toast",
    imageUrl:
      "https://www.simplyrecipes.com/wp-content/uploads/2012/08/tomatoes-on-toast-horiz-a-2000.jpg",
    step1: "Toast the bread",
    step2: "Slap some tomatoes on the toast",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const salmonToast = await Recipe.create({
    name: "Salmon on toast",
    imageUrl:
      "https://img.taste.com.au/E-dqicsx/taste/2016/11/smoked-salmon-french-toast-109155-1.jpeg",
    step1: "Toast the bread",
    step2: "Slap some salmon on the toast",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const chickenSandwich = await Recipe.create({
    name: "Chicken Sandwich",
    imageUrl:
      "https://uitpaulineskeuken.nl/wp-content/uploads/2013/08/DSC_0165.jpg",
    step1: "Toast the bread",
    step2: "Slap some chicken between toasts",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const turkeySandwich = await Recipe.create({
    name: "Turkey Sandwich",
    imageUrl:
      "https://images-gmi-pmc.edge-generalmills.com/63675983-44a6-4981-a4d4-a3557ebceb8f.jpg",
    step1: "Toast the bread",
    step2: "Slap some turkey between toasts",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const beansToast = await Recipe.create({
    name: "Beans on toast",
    imageUrl:
      "https://www.weightlossresources.co.uk/pimg/wlr/b/beans-on-toast-high-fiber-article.jpg",
    step1: "Toast the bread",
    step2: "Lay beans on toast",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const cheeseTomatoToast = await Recipe.create({
    name: "Tomato-cheese toast",
    imageUrl:
      "https://www.goodfood.com.au/content/dam/images/g/w/n/x/2/k/image.related.articleLeadwide.620x349.2f08w.png",
    step1: "Toast the bread",
    step2: "Slap cheese on toast",
    step3: "Lay tomatoes on cheesy toast",
    isVegan: false,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: true
  });

  const butterTomatoToast = await Recipe.create({
    name: "Tomato-butter toast",
    imageUrl:
      "https://www.simplyrecipes.com/wp-content/uploads/2012/08/tomatoes-on-toast-horiz-a-2000.jpg",
    step1: "Toast the bread",
    step2: "Slap butter on toast",
    step3: "Lay tomatoes on cheesy toast",
    isVegan: false,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: true
  });

  const beanTomatoToast = await Recipe.create({
    name: "Tomato-bean toast",
    imageUrl:
      "https://purewows3.imgix.net/images/articles/2020_01/tomato-and-white-bean-stew-on-toast-recipe.jpg",
    step1: "Toast the bread",
    step2: "Slap beans on toast",
    step3: "Lay tomatoes on beany toast",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const beanButterToast = await Recipe.create({
    name: "Buttered-bean toast",
    imageUrl:
      "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/tuscan_beans_on_99053_16x9.jpg",
    step1: "Toast the bread",
    step2: "Slap butter on toast",
    step3: "Lay beans on buttered toast",
    isVegan: false,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: true
  });

  const beanButterTomatoToast = await Recipe.create({
    name: "Buttered beans-and-tomato toast",
    imageUrl:
      "https://www.goodfood.com.au/content/dam/images/g/w/n/x/2/k/image.related.articleLeadwide.620x349.2f08w.png",
    step1: "Toast the bread",
    step2: "Mix beans and tomatoes",
    step3: "Butter toast",
    step4: "Lay beans and tomatoes on buttered toast",
    isVegan: false,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: true
  });

  const onigiri = await Recipe.create({
    name: "Onigiri",
    imageUrl:
      "https://www.elephantasticvegan.com/wp-content/uploads/2016/01/peanut-butter-filled-onigiri-3.jpg",
    step1: "Make rice balls",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const wokNoodles = await Recipe.create({
    name: "Wok Noodles",
    imageUrl:
      "https://goldandgreenfoods.com/app/uploads/2019/05/thai-wok-pulled-oats.jpg",
    step1: "Wok the noodles",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const beefStew = await Recipe.create({
    name: "Beef Stew",
    imageUrl: "https://www.cscassets.com/recipes/wide_cknew/wide_61145.jpg",
    step1: "Cook a stew",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: true
  });

  const porkStew = await Recipe.create({
    name: "Pork Stew",
    imageUrl: "https://www.cscassets.com/recipes/wide_cknew/wide_61145.jpg",
    step1: "Cook a stew",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const venisonStew = await Recipe.create({
    name: "Venison Stew",
    imageUrl: "https://www.cscassets.com/recipes/wide_cknew/wide_61145.jpg",
    step1: "Cook a stew",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const peanutSauce = await Recipe.create({
    name: "Peanut Sauce",
    imageUrl:
      "https://2.bp.blogspot.com/-Ij4ANuS2xEI/TYt6QwFh1aI/AAAAAAAAFto/yP3nADt-k7U/s1600/The%2BBest%2BThai%2BPeanut%2BSauce.jpg",
    step1: "Make a sauce",
    isVegan: true,
    isVegetarian: true,
    hasNuts: true,
    hasDairy: false
  });

  const beanSalsa = await Recipe.create({
    name: "Bean Salsa",
    imageUrl:
      "https://irepo.primecp.com/2018/10/390135/Save-the-Day-Black-Bean-Salsa_MASTER_ID-2953614.jpg",
    step1: "Toss a salsa",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const peaSoup = await Recipe.create({
    name: "Dutch-style Pea Soup",
    imageUrl:
      "https://food-images.files.bbci.co.uk/food/recipes/peaandmintsoup_81285_16x9.jpg",
    step1: "Make a soup",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const salmonSteak = await Recipe.create({
    name: "Salmon Steak",
    imageUrl:
      "https://onlineculinaryschool.net/wp-content/uploads/2018/12/online_culinary_school_salmon_steak_coconut_milk-1.jpg",
    step1: "Pan-fry salmon filet",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const garlicShrimp = await Recipe.create({
    name: "Garlic butter shrimp",
    imageUrl:
      "https://therecipecritic.com/wp-content/uploads/2018/07/cajun_garlic_butter_shrimp-1-of-1.jpg",
    step1: "Fry some shrump",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const tunaSteak = await Recipe.create({
    name: "Tuna Steak",
    imageUrl:
      "https://du7ybees82p4m.cloudfront.net/571f66553f2062.32914086.jpg",
    step1: "Pan-fry tuna filet",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const chocolateMilk = await Recipe.create({
    name: "Chocolate Milk",
    imageUrl:
      "https://static01.nyt.com/images/2018/08/29/dining/ko-chocolate-milk-horizontal/ko-chocolate-milk-horizontal-articleLarge.jpg",
    step1: "Pan-fry tuna filet",
    isVegan: false,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: true
  });

  const coconutCurry = await Recipe.create({
    name: "Coconut Curry",
    imageUrl:
      "https://plantd.co/wp-content/uploads/2019/08/Mango-Coconut-Curry.png",
    step1: "Cook a curry",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const cheeseSticks = await Recipe.create({
    name: "Cheese Sticks",
    imageUrl:
      "https://images-gmi-pmc.edge-generalmills.com/f2b4d600-488e-48c8-b64b-cb47b9823a80.jpg",
    step1: "Deep-fry cheese sticks",
    isVegan: false,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: true
  });

  const basilPesto = await Recipe.create({
    name: "Basil Pesto",
    imageUrl:
      "https://assets.bonappetit.com/photos/5b72f35c7278c24ab618f773/master/w_4699,h_2643,c_limit/ba-best-pesto-1.jpg",
    step1: "Mix basil with olive oil",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const garlicPaste = await Recipe.create({
    name: "Garlic Paste",
    imageUrl:
      "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/toum.jpg",
    step1: "Blend garlic and oil",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const koreanSauce = await Recipe.create({
    name: "Spicy Korean Bibimbap Sauce",
    imageUrl: "https://s3.amazonaws.com/yummy_uploads2/blog/8201.jpg",
    step1: "Mix soy sauce with powdered chili flakes",
    isVegan: true,
    isVegetarian: true,
    hasNuts: false,
    hasDairy: false
  });

  const sesameChicken = await Recipe.create({
    name: "Sesame Chicken",
    imageUrl:
      "https://images-gmi-pmc.edge-generalmills.com/f2b4d600-488e-48c8-b64b-cb47b9823a80.jpg",
    step1: "Pan-fry chicken with sesame and honey",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const pekingDuck = await Recipe.create({
    name: "Peking Duck",
    imageUrl:
      "https://images-gmi-pmc.edge-generalmills.com/f2b4d600-488e-48c8-b64b-cb47b9823a80.jpg",
    step1: "Deep-fry cheese sticks",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  const roastTurkey = await Recipe.create({
    name: "Roast Turkey",
    imageUrl:
      "https://images-gmi-pmc.edge-generalmills.com/f2b4d600-488e-48c8-b64b-cb47b9823a80.jpg",
    step1: "Roast a turkey",
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  });

  //mandatory recipes for each ingredient

  rice.addRecipe(onigiri, {
    through: { optionalIngredient: false }
  });

  noodles.addRecipe(wokNoodles, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(toast, {
    through: { optionalIngredient: false }
  });

  salmon.addRecipe(salmonToast, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(salmonToast, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(cheeseToast, {
    through: { optionalIngredient: false }
  });

  cheese.addRecipe(cheeseToast, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(tomatoToast, {
    through: { optionalIngredient: false }
  });

  tomato.addRecipe(tomatoToast, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(butterToast, {
    through: { optionalIngredient: false }
  });

  butter.addRecipe(butterToast, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(chickenSandwich, {
    through: { optionalIngredient: false }
  });

  chicken.addRecipe(chickenSandwich, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(turkeySandwich, {
    through: { optionalIngredient: false }
  });

  turkey.addRecipe(turkeySandwich, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(beansToast, {
    through: { optionalIngredient: false }
  });

  beans.addRecipe(beansToast, {
    through: { optionalIngredient: false }
  });

  beans.addRecipe(beanTomatoToast, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(beanTomatoToast, {
    through: { optionalIngredient: false }
  });

  tomato.addRecipe(beanTomatoToast, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(beanButterToast, {
    through: { optionalIngredient: false }
  });

  beans.addRecipe(beanButterToast, {
    through: { optionalIngredient: false }
  });

  butter.addRecipe(beanButterToast, {
    through: { optionalIngredient: false }
  });

  butter.addRecipe(butterTomatoToast, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(butterTomatoToast, {
    through: { optionalIngredient: false }
  });

  tomato.addRecipe(butterTomatoToast, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(beanButterTomatoToast, {
    through: { optionalIngredient: false }
  });

  butter.addRecipe(beanButterTomatoToast, {
    through: { optionalIngredient: false }
  });

  beans.addRecipe(beanButterTomatoToast, {
    through: { optionalIngredient: false }
  });

  tomato.addRecipe(beanButterTomatoToast, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(beanButterTomatoToast, {
    through: { optionalIngredient: false }
  });

  butter.addRecipe(beanButterTomatoToast, {
    through: { optionalIngredient: false }
  });

  bread.addRecipe(cheeseTomatoToast, {
    through: { optionalIngredient: false }
  });

  cheese.addRecipe(cheeseTomatoToast, {
    through: { optionalIngredient: false }
  });

  tomato.addRecipe(cheeseTomatoToast, {
    through: { optionalIngredient: false }
  });

  carrot.addRecipe(carrotSoup, {
    through: { optionalIngredient: false }
  });

  tomato.addRecipe(tomatoSoup, {
    through: { optionalIngredient: false }
  });

  potato.addRecipe(potatoSoup, {
    through: { optionalIngredient: false }
  });

  avocado.addRecipe(guacamole, {
    through: { optionalIngredient: false }
  });

  broccoli.addRecipe(stirFryBroccoli, {
    through: { optionalIngredient: false }
  });

  beef.addRecipe(beefStew, {
    through: { optionalIngredient: false }
  });

  pork.addRecipe(porkStew, {
    through: { optionalIngredient: false }
  });

  venison.addRecipe(venisonStew, {
    through: { optionalIngredient: false }
  });

  garlic.addRecipe(garlicPaste, {
    through: { optionalIngredient: false }
  });

  peanuts.addRecipe(peanutSauce, {
    through: { optionalIngredient: false }
  });

  beans.addRecipe(beanSalsa, {
    through: { optionalIngredient: false }
  });

  peas.addRecipe(peaSoup, {
    through: { optionalIngredient: false }
  });

  salmon.addRecipe(salmonSteak, {
    through: { optionalIngredient: false }
  });

  shrimp.addRecipe(garlicShrimp, {
    through: { optionalIngredient: false }
  });

  tuna.addRecipe(tunaSteak, {
    through: { optionalIngredient: false }
  });

  milk.addRecipe(chocolateMilk, {
    through: { optionalIngredient: false }
  });

  coconutMilk.addRecipe(coconutCurry, {
    through: { optionalIngredient: false }
  });

  cheese.addRecipe(cheeseSticks, {
    through: { optionalIngredient: false }
  });

  butter.addRecipe(garlicShrimp, {
    through: { optionalIngredient: false }
  });

  oliveOil.addRecipe(basilPesto, {
    through: { optionalIngredient: false }
  });

  sunflowerOil.addRecipe(garlicPaste, {
    through: { optionalIngredient: false }
  });

  soySauce.addRecipe(koreanSauce, {
    through: { optionalIngredient: false }
  });

  chicken.addRecipe(sesameChicken, {
    through: { optionalIngredient: false }
  });

  duck.addRecipe(pekingDuck, {
    through: { optionalIngredient: false }
  });

  turkey.addRecipe(roastTurkey, {
    through: { optionalIngredient: false }
  });

  //adding ingredients

  toast.addIngredient(cheese, {
    through: { optionalIngredient: true }
  });

  toast.addIngredient(butter, {
    through: { optionalIngredient: true }
  });

  toast.addIngredient(tomato, {
    through: { optionalIngredient: true }
  });

  toast.addIngredient(chicken, {
    through: { optionalIngredient: true }
  });

  toast.addIngredient(turkey, {
    through: { optionalIngredient: true }
  });

  toast.addIngredient(beans, {
    through: { optionalIngredient: true }
  });

  toast.addIngredient(salmon, {
    through: { optionalIngredient: true }
  });

  toast.addIngredient(avocado, {
    through: { optionalIngredient: true }
  });

  salmonToast.addIngredient(avocado, {
    through: { optionalIngredient: true }
  });

  tomatoToast.addIngredient(cheese, {
    through: { optionalIngredient: true }
  });

  tomatoToast.addIngredient(butter, {
    through: { optionalIngredient: true }
  });

  tomatoToast.addIngredient(beans, {
    through: { optionalIngredient: true }
  });

  cheeseToast.addIngredient(tomato, {
    through: { optionalIngredient: true }
  });

  cheeseToast.addIngredient(chicken, {
    through: { optionalIngredient: true }
  });

  beanTomatoToast.addIngredient(butter, {
    through: { optionalIngredient: true }
  });

  butterTomatoToast.addIngredient(beans, {
    through: { optionalIngredient: true }
  });

  beanButterToast.addIngredient(tomato, {
    through: { optionalIngredient: true }
  });

  beanButterTomatoToast.addIngredient(avocado, {
    through: { optionalIngredient: true }
  });

  chickenSandwich.addIngredient(cheese, {
    through: { optionalIngredient: true }
  });

  turkeySandwich.addIngredient(cheese, {
    through: { optionalIngredient: true }
  });

  onigiri.addIngredient(seaweed, {
    through: { optionalIngredient: false }
  });

  wokNoodles.addIngredient(soySauce, {
    through: { optionalIngredient: false }
  });

  wokNoodles.addIngredient(sunflowerOil, {
    through: { optionalIngredient: false }
  });

  wokNoodles.addIngredient(pepper, {
    through: { optionalIngredient: true }
  });

  wokNoodles.addIngredient(chives, {
    through: { optionalIngredient: true }
  });

  carrotSoup.addIngredient(bread, {
    through: { optionalIngredient: true }
  });

  tomatoSoup.addIngredient(broccoli, {
    through: { optionalIngredient: true }
  });

  potatoSoup.addIngredient(peas, {
    through: { optionalIngredient: true }
  });

  beefStew.addIngredient(rosemary, {
    through: { optionalIngredient: false }
  });

  porkStew.addIngredient(pepper, {
    through: { optionalIngredient: false }
  });

  venisonStew.addIngredient(chives, {
    through: { optionalIngredient: false }
  });
}

seedRecipeIngredient();
