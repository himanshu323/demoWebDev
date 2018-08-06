import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipes.model';
import { ShoppingService } from '../../shopping-list/shopping.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input('recipeValue') recipe:Recipe;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }

  onAddToShopList(){
    this.shoppingService.addIngredientsFromRecipe(this.recipe.ingredients);
  }
}
