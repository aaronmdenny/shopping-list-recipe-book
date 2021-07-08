import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe',
          'This is simply a test',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        ),
        new Recipe(
          'Another Test Recipe',
          'This is simply a test',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        )
    ];

    getRecipes() {
        // Return a new array of Recipes that is an exact copy of the recipes in this file by using slice().
        // This prevents modification of the recipes from outside of the class.
        return this.recipes.slice();
    }
}