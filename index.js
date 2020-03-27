const express = require("express");
const cors = require("cors");
const ingredientRouter = require("./ingredient/router");
const recipeRouter = require("./recipe/router");
const recipeIngredientRouter = require("./recipeIngredient/router");

const app = express();
const corsMiddleware = cors();
const jsonParser = express.json();

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(corsMiddleware);
app.use(jsonParser);
app.use(ingredientRouter);
app.use(recipeRouter);
app.use(recipeIngredientRouter);
