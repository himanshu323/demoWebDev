import { Component, OnInit} from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[]
})
export class RecipesComponent implements OnInit {

  recipe:Recipe;
  constructor(private recipeService:RecipeService) {

    this.recipeService.recipeSelected.subscribe((recipeVal:Recipe)=>{
      console.log(recipeVal)  ;
      this.recipe=recipeVal;
    })
   }

  ngOnInit() {

   
  }

}
