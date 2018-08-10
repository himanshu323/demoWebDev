import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipes.model';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe:Recipe;
  constructor(private route:ActivatedRoute,private shoppingService:ShoppingService, private recipeSelected:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params[])=>{
        this.recipe=this.recipeSelected.getRecipeOn(+params['id']);
    })
  }

  onAddToShopList(){
    this.shoppingService.addIngredientsFromRecipe(this.recipe.ingredients);
  }
}
