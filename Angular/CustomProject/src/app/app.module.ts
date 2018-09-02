import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import {BrowserModule}from "@angular/platform-browser"
import { AppRoutingModule } from "./app-routing.module";

// @NgModule({

//     declarations:[AppComponent],
//     imports:[],
//     providers:[],
//     bootstrap:[AppComponent]
// })
// export class AppModule{



// }

@NgModule({
    declarations: [
      AppComponent,
     
    ],
    imports: [
      BrowserModule,AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents:[]
  })
  export class AppModule { }