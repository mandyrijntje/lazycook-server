const express = require("express");
const auth = require("../auth/middleware");
const Recipe = require("./model");
const Ingredient = require("../ingredient/model");
const RecipeIngredient = require("../recipeIngredient/model");
const router = express.Router();

// get all recipes
router.get("/recipe", (request, response, next) => {
  const limit = Math.min(request.query.limit || 100, 200);
  const offset = request.query.offset || 0;
  try {
    Recipe.findAndCountAll({
      limit,
      offset
    }).then(result => {
      // console.log(result);
      return response.send({ recipes: result.rows, total: result.count });
    });
  } catch (error) {
    next(error);
  }
});

//POST many-to-many steps that I've used

// 1. request.body.ingredients = [{"id":2}, {"id": 5}, {"id": 6}] 
//(or whatever your new object needs to have)

// 2. httpie without ingredients
// http :4000/recipe name="ee" imageUrl="rr" step1='ee' isVegan='true' isVegetarian='true' hasNuts='false' hasDairy='false' 

// 3. https://stackoverflow.com/questions/37215565/sending-nested-json-object-using-httpie

// 4. httpie WITH ingredients 
// http :4000/recipe name="ee" imageUrl="rr" step1='ee' isVegan='true' isVegetarian='true' hasNuts='false' hasDairy='false' ingredients:='[{"id":2}, {"id":5}]'

// 5. Adjusting optionalIngredient as needed in PostgresQL database

router.post("/recipe", async (request, response, next) => {
  try {
    // 1. Recipe (name, imageUrl, ...)
    const savedRecipe = await Recipe.create(
      request.body
    );

    // 2. Finding these -> Ingredient (name, imageUrl, ...)

    // So step (1), finding all the ingredients
    // ingredientsPromises = [Promise, Promise, ...]
    const ingredientsPromises = request.body.ingredients.map(async item => {
      const ingredient = await Ingredient.findByPk(item.id);
      return ingredient;
    });

    // // ingredientsPromise = Promise of [ingr, ingr, ...]
    const ingredientsPromise = Promise.all(ingredientsPromises);

    // // ingredients = [ingr, ingr, ...]
    const ingredients = await ingredientsPromise;

    // throwing an error if one of them is null
    for (const ingredient of ingredients) {
      if (!ingredient) {
        return response.status(400).json({ error: "UFI: Unidentified flying ingredient" });
      }
    }

    // 3. making these -> RecipeIngredient (recipeId, ingredientId)
    // An array of Promises
    const listOfPromises = ingredients.map(async ingredient => {
      const recipeingredient = {
        optionalIngredient: false,
        recipeId: savedRecipe.id,
        ingredientId: ingredient.id
      };
      // RecipeIngredient <- { recipeId, ingredientId }
      await RecipeIngredient.create(recipeingredient);
    });

    // Now we have one big Promise of an array
    await Promise.all(listOfPromises);

    return response.status(200).json(savedRecipe);
  } catch (error) {
    next(error);
  }
});

// get one recipe
router.get("/recipe/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const recipe = await Recipe.findByPk(id);
    response.send(recipe);
  } catch (error) {
    next(error);
  }
});

// get all ingredients for a recipe
router.get("/recipe/:id/ingredient", async (request, response, next) => {
  try {
    const recipe = await Recipe.findOne({
      where: { id: request.params.id }
    });

    const ingredients = await recipe.getIngredients();

    response.status(200).json(ingredients);
  } catch (error) {
    next(error);
  }
});

//update a recipe for a user
router.put("/recipe/:recipeId", auth, (request, response, next) => {
  Recipe.findOne({
    where: {
      recipeId: request.params.recipeId
    }
  })
    .then(recipe => {
      if (recipe) {
        recipe.update(request.body).then(recipe => response.json(recipe));
      } else {
        response.status(404).end();
      }
    })
    .catch(next);
});

//delete a recipe for a user
router.delete("/recipe/:recipeId", auth, (request, response, next) => {
  Recipe.destroy({
    where: {
      recipeId: request.params.recipeId
    }
  })
    .then(numDeleted => {
      if (numDeleted) {
        response.status(204).end();
      } else {
        response.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
