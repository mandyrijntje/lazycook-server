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
      offset,
    }).then((result) => {
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
      hasDairy,
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
      where: { id: request.params.id },
    });

    const recipes = await ingredient.getRecipes();

    response.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
});

// get recipe for many ingredients
router.post("/kitchen/recipe", (request, response, next) => {
  try {
    Recipe.findAll({
      include: [Ingredient],
    }).then((result) => {
      let uniqueRecipe = {
        dataValues: {
          name: "No Recipe",
        },
      };
      const ingredientWishlist = request.body.ingredients;
      console.log("ooo", ingredientWishlist);
      console.log("res", result);
      result.forEach((recipe) => {
        for (let j = 0; j < ingredientWishlist.length; j++) {
          let boolean = false;
          for (let i = 0; i < recipe.dataValues.ingredients.length; i++) {
            if (
              ingredientWishlist[j].id === recipe.dataValues.ingredients[i].id
            ) {
              boolean = true;
            }
          }
          if (!boolean) {
            return;
          }
          if (j === ingredientWishlist.length - 1 && boolean) {
            uniqueRecipe = recipe;
            return;
          }
        }
      });
      console.log("uniq", uniqueRecipe);
      response.status(200).json(uniqueRecipe);
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
