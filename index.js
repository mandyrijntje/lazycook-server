const express = require("express");
const cors = require("cors");

const authRouter = require("./auth/router");
const userRouter = require("./user/router");
const ingredientRouter = require("./ingredient/router");
const categoryRouter = require("./category/router");
const recipeRouter = require("./recipe/router");
const recipeIngredientRouter = require("./recipeIngredient/router");

const app = express();
const corsMiddleware = cors();
const jsonParser = express.json();

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(corsMiddleware);
app.use(jsonParser);
app.use(authRouter);
app.use(userRouter);
app.use(ingredientRouter);
app.use(categoryRouter);
app.use(recipeRouter);
app.use(recipeIngredientRouter);
