const db = require("../db");
const Sequelize = require("sequelize");
const Category = require("../category/model");
const Recipe = require("../recipe/model");
const RecipeIngredient = require("../recipeIngredient/model");

const Ingredient = db.define("ingredient", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isVegan: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  isVegetarian: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  hasNuts: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  hasDairy: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

Ingredient.belongsToMany(Recipe, { through: RecipeIngredient });
Recipe.belongsToMany(Ingredient, { through: RecipeIngredient });

Ingredient.belongsTo(Category)
Category.hasMany(Ingredient)

module.exports = Ingredient;
