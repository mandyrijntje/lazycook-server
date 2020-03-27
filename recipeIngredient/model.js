const db = require("../db");
const Sequelize = require("sequelize");

const RecipeIngredient = db.define(
  "recipeIngredient",
  {
    optionalIngredient: {
      type: Sequelize.BOOLEAN
    }
  },
  { timestamps: false }
);

module.exports = RecipeIngredient;
