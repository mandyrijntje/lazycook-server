const express = require("express");
// const { Op } = require("sequelize");

const RecipeIngredient = require("./model");
const router = express.Router();

// // get all recipes
// router.get("/recipe", (request, response, next) => {
//   const limit = Math.min(request.query.limit || 100, 200);
//   const offset = request.query.offset || 0;
//   try {
//     Recipe.findAndCountAll({
//       // where: {
//       //   startDate: {
//       //     [Op.gte]: new Date()
//       //   }
//       // },
//       limit,
//       offset
//     }).then(result => {
//       // console.log(result);
//       return response.send({ recipes: result.rows, total: result.count });
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// // // post an ingredient
// router.post("/recipe", async (request, response, next) => {
//   try {
//     const {
//       name,
//       imageUrl,
//       step1,
//       step2,
//       step3,
//       step4,
//       step5,
//       step6,
//       isVegan,
//       isVegetarian,
//       hasNuts,
//       hasDairy
//     } = request.body;
//     const entity = {
//       name,
//       imageUrl,
//       step1,
//       step2,
//       step3,
//       step4,
//       step5,
//       step6,
//       isVegan,
//       isVegetarian,
//       hasNuts,
//       hasDairy
//     };
//     const recipe = await Recipe.create(entity);
//     response.send(recipe);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
