import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[];
  constructor(private shoppingService:ShoppingService) { 

    this.ingredients=this.shoppingService.ingredients;
  }

  ngOnInit() {
  }

 /*  onAddIng(ing:Ingredients){

    this.ingredients.push(ing);

  } */
}
