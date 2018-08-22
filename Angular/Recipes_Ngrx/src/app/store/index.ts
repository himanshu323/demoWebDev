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
import { reducerIngredients, ingredientState } from '../shopping-list/reducers/add-ingredient.reducer';
import { AuthState, reducersAuth } from '../auth/reducers/auth.reducers';


export interface AppState {
shoppingList:ingredientState,
auth:AuthState
}

export const reducers: ActionReducerMap<AppState> = {
shoppingList:reducerIngredients,
auth:reducersAuth
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
