import { Component, OnInit , EventEmitter,Output} from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import {Response} from "@angular/http"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  saveRecipe(){
    this.recipeService.postRecipes().subscribe((data:Response)=>{
        console.log(data);
    })
  }

  getRecipe(){

    this.recipeService.getRecipeFromServer().subscribe((data:any[])=>{
     
      this.recipeService.newRecipe(data);
    })
  }
}
