# :fork_and_knife: LazyCook :fork_and_knife: (Server)

If you HAVE to cook, but you're feeling lazy, we got you.
Welcome to LazyCook.

CONS: Zero awards in the app making department <br>
PROS: Will teach you how to boil an egg

### For Users

- Kitchen: Generates recipes based on ingredients selected by you <br>(Beta version, can do bread-tomato-butter-beans combinations for now)
- Store: Users can add optional ingredients to their cart to shop <br>(Functionality to be created)
- Recipes: Displays a list of recipes by users of the site
- Profile: A user can see their recipes in a list, and can create a recipe

### For Guests

- Store: Guests can shop for products at the store <br>(Functionality to be created)

# Setting up (local)

- Node version
  - ^12.16.1
- Express version
  - ^4.17.1
- Sequelize version
  - ^5.21.5
- PostgresQL version
  - ^7.18.2

## Installation

0. **Clone the repository**
1. **Install all dependencies** ->


    ```
    npm install
    ```

2. **Start the server** ->


    ```
    npm run dev
    ```

3. **Create, load schema and seed the database** ->


    ```
    node seeds/recipeingredient.js
    ```

4. **Connect server to client** ->


    ```
    [Clone this repository and follow the readme](https://github.com/messmonte/lazycook-client)
    ```

5. **Enjoy your lazy lunch.**
