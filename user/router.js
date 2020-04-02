const express = require("express");
const bcrypt = require("bcrypt");
const auth = require("../auth/middleware");
const User = require("./model");
const Recipe = require("../recipe/model");
const Ingredient = require("../ingredient/model");
const { toJWT, toData } = require("../auth/jwt");

const router = express.Router();

//create a user
router.post("/users", async (request, response, next) => {
  try {
    const userCredentials = {
      email: request.body.email,
      password: bcrypt.hashSync(request.body.password, 10)
    };
    if (!userCredentials.email || !userCredentials.password) {
      response.status(400).send({
        message: "Please supply a valid email and password"
      });
    } else {
      const createUser = await User.create(userCredentials);
      const jwt = toJWT({ userId: createUser.id });
      response.send({
        jwt,
        id: createUser.id,
        email: createUser.email
      });
    }
  } catch (error) {
    next(error);
  }
});

//get all users
router.get("/users", async (request, response, next) => {
  try {
    const showUsers = await User.findAll({
      include: [
        {
          model: Recipe
        }
      ]
    });
    response.send(showUsers);
  } catch (error) {
    next(error);
  }
});

//get one user
router.get("/users/:userId", (request, response, next) => {
  User.findByPk(request.params.userId, {
    include: [
      {
        model: Recipe
      }
    ]
  })
    .then(user => {
      if (!user) {
        response.status(404).end();
      } else {
        response.send(user);
      }
    })
    .catch(next);
});

// Get all user's recipes
router.get("/users/:userId/recipe", (request, response, next) => {
  Recipe.findAll({
    where: { userId: request.params.userId },
    include: [Ingredient]
  })
    .then(recipe => {
      response.json(recipe);
    })
    .catch(next);
});

// get one recipe for a specific user
router.get("/users/:userId/recipe/:id", (request, response, next) => {
  Recipe.findOne({
    where: {
      id: request.params.id,
      userId: request.params.userId
    }
  })
    .then(recipe => {
      if (recipe) {
        response.json(recipe);
      } else {
        response.status(404).end();
      }
    })
    .catch(next);
});

// // post a recipe for user
// router.post("/users/:userId/recipe", auth, async (request, response, next) => {
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
//     const recipe = await Recipe.create({
//       ...entity,
//       userId: request.user.userId
//     });
//     response.send(recipe);
//   } catch (error) {
//     next(error);
//   }
// });

// Delete all user's recipes
router.delete("/users/:userId/recipe", auth, (request, response, next) => {
  Recipe.destroy({
    where: {
      userId: request.params.userId
    }
  })
    .then(() => {
      response.status(204).end();
    })
    .catch(next);
});

module.exports = router;
