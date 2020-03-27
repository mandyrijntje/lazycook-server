const Ingredient = require("../ingredient/model");
const Recipe = require("../recipe/model");

async function seedRecipeIngredient() {
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

  carrot.addRecipe(carrotSoup, {
    through: { optionalIngredient: false }
  });
  tomato.addRecipe(tomatoSoup, {
    through: { optionalIngredient: false }
  });
  potato.addRecipe(potatoSoup, {
    through: { optionalIngredient: false }
  });

  tomatoSoup.addIngredient(broccoli, {
    through: { optionalIngredient: true }
  });
}

seedRecipeIngredient();
