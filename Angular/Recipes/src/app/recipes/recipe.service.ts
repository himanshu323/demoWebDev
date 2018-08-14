import { Recipe } from "./recipes.model";
import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { Subject } from "rxjs";


export class RecipeService{

    recipeChange=new Subject<Recipe[]>();

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

    updateRecipe(index:number,recipe:Recipe){
        this.recipe[index]=recipe;
        this.recipeChange.next(this.recipe);
    }

    addRecipe(recipe:Recipe){
        this.recipe.push(recipe)
        this.recipeChange.next(this.recipe);
    }

    deleteRecipe(index:number){
        this.recipe.splice(index,1);
        this.recipeChange.next(this.recipe);
        
    }


}