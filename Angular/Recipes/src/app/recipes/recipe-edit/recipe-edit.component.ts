import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  recipeForm:FormGroup;

  editMode:boolean=false;
  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{

      this.id=+params['id'];

      console.log(this.id);

      this.editMode=params['id']!=null?true:false;

      console.log(this.editMode);

      this.initForm();



    })

  }

  onAddIng(){

    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name':new FormControl(null,Validators.required),
      'amount':new FormControl(null,[Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
    }))
  }
  private initForm(){


    let recipeName="";
    let recipeImagePath="";
    let recipeDescription="";
    let recipeIngredients=new FormArray([]);

    if(this.editMode){
      const recipe=this.recipeService.getRecipeOn(this.id);
      recipeName=recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription=recipe.description;
      if(recipe['ingredients']){
        for(let ing of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ing.name,Validators.required),
            'amount':new FormControl(ing.amount,[Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
            ])

            })
          )
        }
      }

    }
    this.recipeForm=new FormGroup({

      'recipeName':new FormControl(recipeName,Validators.required),

      'recipeImagePath':new FormControl(recipeImagePath,Validators.required),

      'description':new FormControl(recipeDescription,Validators.required),

      'ingredients':recipeIngredients


    });

  }

  onSubmit(){
   
    const recipe=new Recipe(this.recipeForm.value.recipeName,this.recipeForm.value.description,
      this.recipeForm.value.recipeImagePath,this.recipeForm.value.ingredients)
    if(this.editMode){
        this.recipeService.updateRecipe(this.id,recipe);
    }
    else{
      this.recipeService.addRecipe(recipe);
    }

    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  onDeleteIng(index:number){

    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }


}