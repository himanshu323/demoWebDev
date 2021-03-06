import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

import { Subscription } from 'rxjs';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { ingredientState } from './reducers/add-ingredient.reducer';
import { AppState } from '../store';
import { StartEdit } from './actions/add-ingredient.actions';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  shoppingList:Observable<ingredientState>;
  ingSub:Subscription;
  constructor(private store:Store<AppState>) { 

   /// this.shoppingList=this.shoppingService.ingredients;
  }

  ngOnInit() {

  //  this.ingSub= this.shoppingService.ingredientsChanged.subscribe((ing:Ingredients[])=>{
  //     this.ingredients=ing
  //   })
    console.log("In")
    this.shoppingList=this.store.select(state=>state.shoppingList)
    //this.shoppingList.subscribe(state=>console.log(state.ingredients));

  }

 /*  onAddIng(ing:Ingredients){

    this.ingredients.push(ing);

  } */

  onEditItem(index:number){
  //  this.shoppingService.editingItem.next(index);

  this.store.dispatch(new StartEdit(index));
  }
}
