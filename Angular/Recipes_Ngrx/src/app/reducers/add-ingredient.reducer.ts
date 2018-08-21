import { Action } from '@ngrx/store';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppngListActions, ShoppingListActionTypes } from 'src/app/actions/add-ingredient.actions';
import { State } from '@ngrx/store/src/state';


export interface ingredientState {
ingredients:Ingredients[],
editIngredient:Ingredients,
editItemIndex:number
}

export const initialIngredientState: ingredientState = {
  ingredients: [new Ingredients("Apple", 10), new Ingredients("Tomatoes", 20)],
  editIngredient:null,
  editItemIndex:-1
};

export function reducerIngredients(state = initialIngredientState, action: ShoppngListActions): ingredientState {
  switch (action.type) {

    case  ShoppingListActionTypes.AddIngredient:

    return {...state,ingredients:[...state.ingredients,action.payload]}

    case ShoppingListActionTypes.AddIngredients:
      return { ...state, ingredients: [...state.ingredients, ...action.payload],
      editIngredient:null,editItemIndex:-1 }

     case ShoppingListActionTypes.UpdateIngredients:
     const ingredient=state.ingredients[state.editItemIndex] ;
     const updateIngredient={...ingredient,...action.payload};
     const ingredients=[...state.ingredients];
     ingredients[state.editItemIndex]=updateIngredient;
     console.log(ingredients + "*****");
      return {
        ...state, ingredients: ingredients, editIngredient: null,
        editItemIndex: -1}

     case ShoppingListActionTypes.DeleteIngredients:
     const ingredientsOld=[...state.ingredients];
     ingredientsOld.splice(state.editItemIndex,1);

     return {...state,ingredients:ingredientsOld,
       editIngredient: null,
       editItemIndex: -1
    }


     case ShoppingListActionTypes.StartEdit:
     const editIngredientItem={...state.ingredients[action.payload]};
      return {...state,editIngredient:editIngredientItem,editItemIndex:action.payload}

    case ShoppingListActionTypes.StopEdit:
     
      return   {
        ...state, ingredients: [...state.ingredients],
        editIngredient: null, editItemIndex: -1
      }
    default:
      return state;
  }
}
