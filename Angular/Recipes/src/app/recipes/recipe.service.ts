import { Recipe } from "./recipes.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { Subject } from "rxjs";
import {Http,Response} from "@angular/http"
import {map} from "rxjs/operators"
import { AuthService } from "src/app/shared/auth.service";
import { HttpClient, HttpHeaders, HttpParams ,HttpRequest} from "@angular/common/http";


@Injectable()
export class RecipeService{

    constructor(private httpClient:HttpClient,private authService:AuthService){

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

        const token = this.authService.getToken();
       /*  return this.httpClient.put("https://recipe-book-c5959.firebaseio.com/data.json",this.recipe,
    {observe:'response',
    params:new HttpParams().set("auth",token) */
    const req=new HttpRequest("PUT","https://recipe-book-c5959.firebaseio.com/data.json",this.recipe,{reportProgress:true,
//params:new HttpParams().set("auth",token)
});
    return this.httpClient.request(req);
   // headers:new HttpHeaders({"Content-Type":"application/json"})
//});
    }


    getRecipeFromServer(){
        const token=this.authService.getToken();
        return this.httpClient.get("https://recipe-book-c5959.firebaseio.com/data.json",{
            observe:'response',
            responseType:'json',
            //params:new HttpParams().set("auth",token)
        } ).pipe(map((data:Recipe[])=>{
          // let recipes= data.json();(re)
          console.log(data);
           for(let r of data){
               if(!r['ingredients']){
                   r['ingredients']=[];
                   console.log(r);
               }
           }
        return data;
        }))
    }
}