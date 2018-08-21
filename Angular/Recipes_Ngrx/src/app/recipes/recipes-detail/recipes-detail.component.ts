import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipes.model';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { AddIngredients } from 'src/app/actions/add-ingredient.actions';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe:Recipe;

  id:number;
  constructor(private route:ActivatedRoute, private recipeSelected:RecipeService,

  private router:Router,private store:Store<State>) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params[])=>{
        this.recipe=this.recipeSelected.getRecipeOn(+params['id']);
        this.id=+params['id'];
    })
  }

  onAddToShopList(){
   // this.shoppingService.addIngredientsFromRecipe(this.recipe.ingredients);
    this.store.dispatch(new AddIngredients(this.recipe.ingredients));
  }
  onDeleteRecipe(){
    this.recipeSelected.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
