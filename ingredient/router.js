const express = require("express");
// const { Op } = require("sequelize");

const Ingredient = require("./model");
const router = express.Router();

// get all ingredients
router.get("/ingredient", (request, response, next) => {
  const limit = Math.min(request.query.limit || 100, 200);
  const offset = request.query.offset || 0;
  try {
    Ingredient.findAndCountAll({
      // where: {
      //   startDate: {
      //     [Op.gte]: new Date()
      //   }
      // },
      limit,
      offset
    }).then(result => {
      // console.log(result);
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
