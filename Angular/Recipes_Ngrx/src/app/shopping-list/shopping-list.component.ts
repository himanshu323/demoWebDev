import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ingredientState } from 'src/app/reducers/add-ingredient.reducer';
import { Observable } from 'rxjs/internal/Observable';
import { State } from 'src/app/reducers';
import { StartEdit } from 'src/app/actions/add-ingredient.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  shoppingList:Observable<ingredientState>;
  ingSub:Subscription;
  constructor(private shoppingService:ShoppingService,private store:Store<State>) { 

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
