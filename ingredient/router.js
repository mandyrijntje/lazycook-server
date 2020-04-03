const express = require("express");
const Recipe = require("../recipe/model");
const Ingredient = require("./model");
const router = express.Router();

// get all ingredients
router.get("/ingredient", (request, response, next) => {
  const limit = Math.min(request.query.limit || 100, 200);
  const offset = request.query.offset || 0;
  try {
    Ingredient.findAndCountAll({
      limit,
      offset
    }).then(result => {
      return response.send({ ingredients: result.rows, total: result.count });
    });
  } catch (error) {
    next(error);
  }
});

// // post an ingredient
router.post("/ingredient", async (request, response, next) => {
  try {
    const {
      name,
      imageUrl,
      isVegan,
      isVegetarian,
      hasNuts,
      hasDairy
    } = request.body;
    const entity = { name, imageUrl, isVegan, isVegetarian, hasNuts, hasDairy };
    const ingredient = await Ingredient.create(entity);
    response.send(ingredient);
  } catch (error) {
    next(error);
  }
});

// get one ingredient
router.get("/ingredient/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const ingredient = await Ingredient.findByPk(id);
    response.send(ingredient);
  } catch (error) {
    next(error);
  }
});

// get all recipes for an ingredient
router.get("/ingredient/:id/recipe", async (request, response, next) => {
  try {
    const ingredient = await Ingredient.findOne({
      where: { id: request.params.id }
    });

    const recipes = await ingredient.getRecipes();

    response.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
});

// get recipe for many ingredients
router.get("/kitchen/recipe", async (request, response, next) => {
  try {
    const allRecipes = Recipe.findAll({
      include: [Ingredient]
    });

    let uniqueRecipe;
    const ingredientWishlist = request.body.ingredients
    allRecipes.forEach(recipe => {
      for (let i = 0; i < recipe.ingredients.length; i++) {
        let boolean = false;
        for (let j = 0; j < ingredientWishlist.length; j++) {
          if (recipe.ingredients[i].id === ingredientWishlist[j].id) {
            boolean = true;
          }
        }
        if (!boolean) {
          return;
        }
        if (i === recipe.ingredients.length - 1) {
          uniqueRecipe = recipe;
        }
      }
    });
    response.status(200).json(uniqueRecipe);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
