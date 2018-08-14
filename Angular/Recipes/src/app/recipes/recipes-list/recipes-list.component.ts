import { Component, OnInit,Output,EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipes.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit,OnDestroy {

  ngOnDestroy(): void {
    this.recipeSub.unsubscribe();
  }
  recipeSub:Subscription;
  recipes: Recipe[] ;
  constructor(private recipeService:RecipeService) {

    this.recipes=this.recipeService.getRecipe();
   }
  

  ngOnInit() {

    this.recipeSub=this.recipeService.recipeChange.subscribe((recipe:Recipe[])=>{
      this.recipes=recipe;
  })
  }



}
