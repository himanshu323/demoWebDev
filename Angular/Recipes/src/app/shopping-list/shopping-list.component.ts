import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ngOnDestroy(): void {
    this.ingSub.unsubscribe();
  }
  ingredients:Ingredients[];
  ingSub:Subscription;
  constructor(private shoppingService:ShoppingService) { 

    this.ingredients=this.shoppingService.ingredients;
  }

  ngOnInit() {

   this.ingSub= this.shoppingService.ingredientsChanged.subscribe((ing:Ingredients[])=>{
      this.ingredients=ing
    })
  }

 /*  onAddIng(ing:Ingredients){

    this.ingredients.push(ing);

  } */

  onEditItem(index:number){
    this.shoppingService.editingItem.next(index);
  }
}
