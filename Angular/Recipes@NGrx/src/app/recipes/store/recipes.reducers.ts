import { Recipe } from "../recipes.model";
import { Ingredients } from "../../shared/ingredients.model";
import { Action } from "@ngrx/store";
import { RecipeActions, RecipeActionTypes } from "./recipes.actions";
import { AppState } from "../../store";


export interface FeatureState extends AppState{

    recipes:recipeState
}
export interface recipeState{
    recipes:Recipe[]
}

export const initialRecipeState:recipeState={
    recipes:[new Recipe("Test Recipe", "description", "https://images.media-allrecipes.com/images/56589.png",
    [new Ingredients("Mango",20),new Ingredients("Guava",19)])
    , 
        new Recipe("Hello Test Recipe", "Hello description", "https://images.media-allrecipes.com/images/56589.png",
            [new Ingredients("Mango", 20), new Ingredients("Guava", 19)]
    )
    ]
}

export function recipesReducer(state=initialRecipeState,action:RecipeActions){

    switch(action.type){

        case RecipeActionTypes.ADD_RECIPE:

        return{...state,recipes:[...state.recipes,action.payload]}

        case RecipeActionTypes.UPDATE_RECIPE:
        const recipe=state.recipes[action.payload.index];
        const updatedRecipe={...recipe,...action.payload.recipe}

        const recipes=[...state.recipes]
        recipes[action.payload.index]=updatedRecipe
        return{...state,recipes:recipes}

        case RecipeActionTypes.SET_RECIPE:
        
        return {...state,recipes:action.payload}

        case RecipeActionTypes.DELETE_RECIPE:

        const recipesOld=[...state.recipes];

        recipesOld.splice(action.payload,1);

        return{...state,recipes:recipesOld}

        default:

        return {...state}
    }
   
}