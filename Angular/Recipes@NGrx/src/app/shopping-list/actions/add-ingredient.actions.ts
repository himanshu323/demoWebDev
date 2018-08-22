import { Action } from '@ngrx/store';
import { Ingredients } from '../../shared/ingredients.model';


export enum ShoppingListActionTypes {
  AddIngredient = '[AddIngredient] Load AddIngredient',
  AddIngredients = '[AddIngredients] Load AddIngredients',
  UpdateIngredients = '[UpdateIngredients] Load UpdateIngredients',
  DeleteIngredients = '[DeleteIngredients] Load DeleteIngredients',
  StartEdit="Start Edit",
  StopEdit="Stop Edit"
}

export class AddIngredient implements Action {
  readonly type = ShoppingListActionTypes.AddIngredient;

  constructor(public payload:Ingredients)
{

}}

export class AddIngredients implements Action {
  readonly type = ShoppingListActionTypes.AddIngredients;

  constructor(public payload: Ingredients[]) {

  }
}

export class UpdateIngredients implements Action {
  readonly type = ShoppingListActionTypes.UpdateIngredients;

  constructor(public payload: Ingredients) {

  }
}

export class DeleteIngredients implements Action {
  readonly type = ShoppingListActionTypes.DeleteIngredients;

  constructor() {

  }
}

export class StartEdit implements Action {
  readonly type = ShoppingListActionTypes.StartEdit;

  constructor(public payload: number) {

  }
}

export class StopEdit implements Action {
  readonly type = ShoppingListActionTypes.StopEdit;

  constructor() {

  }
}
export type ShoppngListActions = AddIngredient | AddIngredients |UpdateIngredients | DeleteIngredients
|StopEdit 
|StartEdit;
