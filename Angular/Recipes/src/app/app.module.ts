import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import { DropdownDirective } from './dropdown.directive';
import { ShoppingService } from './shopping-list/shopping.service';
import {Routes}  from "@angular/router"
import { RouterModule } from '@angular/router';
import { AppRouting } from 'src/app/app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { HttpModule } from '@angular/http';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from 'src/app/shared/auth.service';
import { AuthGuard } from './shared/authguard.service';
import { RecipesModel } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { AuthModule } from './auth/auth.module';

import { CoreModule } from './core/core.module';
import {HttpClient, HttpClientModule}  from "@angular/common/http"


@NgModule({
  declarations: [
    AppComponent,
    
    
    
   
  ],
  imports: [
    BrowserModule,FormsModule,CoreModule,AppRouting,HttpModule,HttpClientModule,SharedModule,ShoppingModule,AuthModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
