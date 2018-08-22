import { Action } from "@ngrx/store";
import { Recipe } from "../recipes.model";


export enum RecipeActionTypes{

    SET_RECIPE="SET_RECIPE",

    UPDATE_RECIPE="UPDATE_RECIPE",

    DELETE_RECIPE="DELETE_RECIPE",

    ADD_RECIPE="ADD_RECIPE",

    FETCH_RECIPE="FETCH_RECIPE",

    STORE_RECIPE="STORE_RECIPE"


}

export class AddRecipe implements Action{
    readonly type=RecipeActionTypes.ADD_RECIPE;

    constructor(public payload:Recipe){
        
    }

}


export class UpdateRecipe implements Action{
    readonly type=RecipeActionTypes.UPDATE_RECIPE;

    constructor(public payload:{index:number,recipe:Recipe}){
        
    }

}

    export class SetRecipe implements Action{
        readonly type=RecipeActionTypes.SET_RECIPE;
    
        constructor(public payload:Recipe[]){
            
        }

    }


    export class DeleteRecipe implements Action{
        readonly type=RecipeActionTypes.DELETE_RECIPE;
    
        constructor(public payload:number){
            
        }

    }

    export class FetchRecipe implements Action{
        readonly type=RecipeActionTypes.FETCH_RECIPE;
    
       

    }

    export class StoreRecipe implements Action{
        readonly type=RecipeActionTypes.STORE_RECIPE;
    
        

    }

    export type RecipeActions=AddRecipe|UpdateRecipe|SetRecipe|DeleteRecipe
    | FetchRecipe | StoreRecipe;


