const express = require("express");

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
  const ingredient = await Ingredient.findOne({
    where: {
      id: request.body.id
    }
  });

  const recipes = await ingredient.getRecipes();
  console.log(recipes);
});

module.exports = router;
