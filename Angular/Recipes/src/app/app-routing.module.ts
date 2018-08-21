import { ShoppingListComponent } from "src/app/shopping-list/shopping-list.component";
import { RecipesComponent } from "src/app/recipes/recipes.component";
import { RouterModule,Routes, PreloadAllModules } from "@angular/router";
import { NgModule } from "@angular/core";
import { RecipesDetailComponent } from "src/app/recipes/recipes-detail/recipes-detail.component";
import { RecipeStartComponent } from "src/app/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { SignupComponent } from "src/app/auth/signup/signup.component";
import { SigninComponent } from "src/app/auth/signin/signin.component";
import { AuthGuard } from "./shared/authguard.service";
import { HomeComponent } from "./core/home/home.component";




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