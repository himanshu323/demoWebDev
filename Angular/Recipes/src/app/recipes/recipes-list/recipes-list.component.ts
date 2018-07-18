import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[]=[new Recipe("Test Recipe","description","https://images.media-allrecipes.com/images/56589.png")]
  constructor() { }

  ngOnInit() {
  }

}
