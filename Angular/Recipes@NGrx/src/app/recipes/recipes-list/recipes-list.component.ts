import { Component, OnInit,Output,EventEmitter, OnDestroy } from '@angular/core';


import { Subscription, Observable } from 'rxjs';
import { FeatureState, recipeState } from '../store/recipes.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

 
  recipes: Observable<recipeState>;
  constructor(private store:Store<FeatureState>) {

    
   // this.recipes=this.recipeService.getRecipe();
   }
  

  ngOnInit() {

    this.recipes=this.store.select('recipes');

  //   this.recipeSub=this.recipeService.recipeChange.subscribe((recipe:Recipe[])=>{
  //     this.recipes=recipe;
  // })
  }



}
