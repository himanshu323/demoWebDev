import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] ;
  constructor(private recipeService:RecipeService) {

    this.recipes=this.recipeService.getRecipe();
   }
  

  ngOnInit() {
  }



}
