import { Recipe } from "./recipes.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { Subject } from "rxjs";
import {Http,Response} from "@angular/http"
import {map} from "rxjs/operators"

@Injectable()
export class RecipeService{

    constructor(private http:Http){

    }

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

    newRecipe(recipes:any[]){
        this.recipe=recipes;
        this.recipeChange.next(this.recipe);
    }

    deleteRecipe(index:number){
        this.recipe.splice(index,1);
        this.recipeChange.next(this.recipe);
        
    }

    postRecipes(){
        return this.http.put("https://recipe-book-c5959.firebaseio.com/data.json",this.recipe);
    }


    getRecipeFromServer(){
        
        return this.http.get("https://recipe-book-c5959.firebaseio.com/data.json").pipe(map((data:Response)=>{
           let recipes= data.json();
           for(let r of recipes){
               if(!r['ingredients']){
                   r['ingredients']=[];
                   console.log(r);
               }
           }
        return recipes;
        }))
    }
}