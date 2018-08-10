import { Recipe } from "./recipes.model";
import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";


export class RecipeService{

    private recipe: Recipe[]= [new Recipe("Test Recipe", "description", "https://images.media-allrecipes.com/images/56589.png",
[new Ingredients("Mango",20),new Ingredients("Guava",19)])
, 
    new Recipe("Hello Test Recipe", "Hello description", "https://images.media-allrecipes.com/images/56589.png",
        [new Ingredients("Mango", 20), new Ingredients("Guava", 19)]

)
];


getRecipeOn(index:number){
return this.recipe[index];
}
    getRecipe(){
        return this.recipe.slice();
    }

    recipeSelected=new EventEmitter<Recipe>();


}