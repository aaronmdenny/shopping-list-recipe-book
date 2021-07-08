import { EventEmitter } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    // When we add an ingredient to the Ingredient array, other classes do not know about the addition becuase they get
    // a slice of the array, not the actual array in this class. We create an event for other classes to subscribe to so
    // they can know when a new ingredient is added and update their ingredients accordingly.
    ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }
}