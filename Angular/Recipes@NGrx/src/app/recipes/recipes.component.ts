import { Component, OnInit} from '@angular/core';
import { Recipe } from './recipes.model';



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[]
})
export class RecipesComponent implements OnInit {

  recipe:Recipe;
  constructor() {

    
   }

  ngOnInit() {

   
  }

}
