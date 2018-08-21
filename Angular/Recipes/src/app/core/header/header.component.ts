import { Component, OnInit , EventEmitter,Output} from '@angular/core';

import {Response} from "@angular/http"
import { RecipeService } from '../../recipes/recipe.service';
import { AuthService } from '../../shared/auth.service';
import { HttpEvent } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private recipeService:RecipeService,public authService:AuthService) { }

  ngOnInit() {
  }

  saveRecipe(){
    this.recipeService.postRecipes().subscribe((data)=>{
        console.log(data);
    })
  }

  getRecipe(){

    this.recipeService.getRecipeFromServer().subscribe((data:any[])=>{
     
      this.recipeService.newRecipe(data);
    })
  }

  onLogout(){
    this.authService.logOut();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
