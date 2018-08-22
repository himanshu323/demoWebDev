

import { RouterModule,Routes, PreloadAllModules } from "@angular/router";
import { NgModule } from "@angular/core";


import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

import { AuthGuard } from "./shared/authguard.service";
import { HomeComponent } from "./core/home/home.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";




const appRoutes: Routes = [
    {path:"",component:HomeComponent},

    {path:"recipes" , loadChildren:'./recipes/recipes.module#RecipesModel'},
    { path: "shopping", component: ShoppingListComponent,children:[]

        
    },
   
    { path: "signUp", component: SignupComponent }

    , { path: "signIn", component: SigninComponent }
];

@NgModule({
imports:[
RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
],
exports:[RouterModule]
    
})
export class AppRouting{


}