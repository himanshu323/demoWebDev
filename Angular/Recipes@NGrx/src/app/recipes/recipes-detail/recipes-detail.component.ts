import { Component, OnInit,Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { FeatureState, recipeState } from '../store/recipes.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddIngredients } from '../../shopping-list/actions/add-ingredient.actions';
import { DeleteRecipe } from '../store/recipes.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipeState:Observable<recipeState>;

  id:number;
  constructor(private route:ActivatedRoute,
  private router:Router,private store:Store<FeatureState>) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params[])=>{
    this.recipeState=  this.store.select('recipes');
        this.id=+params['id'];
        
        
    })
  }

  onAddToShopList(){
    this.store.select('recipes').pipe(take(1)).subscribe((state:recipeState)=>{
      this.store.dispatch(new AddIngredients(state.recipes[this.id].ingredients));
    })
    
    
  }
  onDeleteRecipe(){
    
    this.store.dispatch(new DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }
}
