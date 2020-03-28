const express = require("express");
const Ingredient = require("../ingredient/model");
const Category = require("./model");
const router = express.Router();

// get all categories
router.get("/category", (request, response, next) => {
  const limit = Math.min(request.query.limit || 15, 50);
  const offset = request.query.offset || 0;
  try {
    Category.findAndCountAll({
      limit,
      offset
    }).then(result => {
      return response.send({ categories: result.rows, total: result.count });
    });
  } catch (error) {
    next(error);
  }
});

//post a category
router.post("/category", async (request, response, next) => {
  try {
    const { name } = request.body;
    const entity = { name };
    const category = await Category.create(entity);
    response.send(category);
  } catch (error) {
    next(error);
  }
});

// get all ingredients for a specific category
router.get("/category/:categoryId/ingredient", (request, response, next) => {
  Ingredient.findAll({
    // limit,
    // offset,
    where: { categoryId: request.params.categoryId }
  })
    .then(ingredient => {
      response.json(ingredient);
    })
    .catch(next);
});

module.exports = router;
