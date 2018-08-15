import { ShoppingListComponent } from "src/app/shopping-list/shopping-list.component";
import { RecipesComponent } from "src/app/recipes/recipes.component";
import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RecipesDetailComponent } from "src/app/recipes/recipes-detail/recipes-detail.component";
import { RecipeStartComponent } from "src/app/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";



const appRoutes: Routes = [
    {path:"",redirectTo:"/recipes", pathMatch:"full"},
    { path: "shopping", component: ShoppingListComponent,children:[]

        
    },
    { path: "recipes", component: RecipesComponent , children:[
        {path:"",component:RecipeStartComponent},
        {path:"new",component:RecipeEditComponent},
      {  path:":id" , component:RecipesDetailComponent},
      {path:":id/edit",component:RecipeEditComponent}
    ]}
];

@NgModule({
imports:[
RouterModule.forRoot(appRoutes)
],
exports:[RouterModule]
    
})
export class AppRouting{


}