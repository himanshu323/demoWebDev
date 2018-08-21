import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { reduce } from 'rxjs/internal/operators/reduce';
import {  reducerIngredients, ingredientState } from 'src/app/reducers/add-ingredient.reducer';

export interface State {
shoppingList:ingredientState
}

export const reducers: ActionReducerMap<State> = {
shoppingList:reducerIngredients
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
