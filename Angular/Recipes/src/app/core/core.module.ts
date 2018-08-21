import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { AppRouting } from "../app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { ShoppingService } from "../shopping-list/shopping.service";
import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../shared/auth.service";
import { AuthGuard } from "../shared/authguard.service";
import { SharedModule } from "../shared/shared.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../shared/auth.interceptor";
import { LoggingInterceptor } from "../shared/logging.interceptor";

@NgModule({

    declarations:[HeaderComponent,HomeComponent],
    imports:[CommonModule,AppRouting,SharedModule],
    exports:[HeaderComponent],
    providers: [ShoppingService,RecipeService,AuthService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true}
    ],
})
export class CoreModule{

}