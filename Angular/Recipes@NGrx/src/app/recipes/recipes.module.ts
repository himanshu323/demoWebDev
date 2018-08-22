import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipesItemComponent } from "./recipes-list/recipes-item/recipes-item.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesRouting } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AuthGuard } from "../shared/authguard.service";
import { StoreModule } from "@ngrx/store";
import { recipesReducer } from "./store/recipes.reducers";

import { RecipeEffects } from "./store/recipes.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({

    declarations:[

    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
    ],
    imports:[RecipesRouting,ReactiveFormsModule,SharedModule,StoreModule.forFeature('recipes',recipesReducer),
EffectsModule.forFeature([RecipeEffects])]
    
})
export class RecipesModel{



}