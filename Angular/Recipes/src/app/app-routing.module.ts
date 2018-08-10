import { ShoppingListComponent } from "src/app/shopping-list/shopping-list.component";
import { RecipesComponent } from "src/app/recipes/recipes.component";
import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RecipesDetailComponent } from "src/app/recipes/recipes-detail/recipes-detail.component";
import { RecipeStartComponent } from "src/app/recipes/recipe-start/recipe-start.component";



const appRoutes: Routes = [
    {path:"",redirectTo:"/recipes", pathMatch:"full"},
    { path: "shopping", component: ShoppingListComponent,children:[]

        
    },
    { path: "recipes", component: RecipesComponent , children:[
        {path:"",component:RecipeStartComponent},
      {  path:":id" , component:RecipesDetailComponent}
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