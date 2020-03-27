const db = require("../db");
const Sequelize = require("sequelize");

const Recipe = db.define("recipe", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  step1: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  step2: {
    type: Sequelize.TEXT
  },
  step3: {
    type: Sequelize.TEXT
  },
  step4: {
    type: Sequelize.TEXT
  },
  step5: {
    type: Sequelize.TEXT
  },
  step6: {
    type: Sequelize.TEXT
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

module.exports = Recipe;
