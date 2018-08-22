import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';




import {Routes}  from "@angular/router"
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';





import {HttpClient, HttpClientModule}  from "@angular/common/http"
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/effects/auth.effects';
import {StoreRouterConnectingModule}from "@ngrx/router-store"
import { isPlatformBrowser } from '@angular/common';
import { CoreModule } from './core/core.module';
import { AppRouting } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    
    
    
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'recipes' }),FormsModule,CoreModule,AppRouting,HttpModule,HttpClientModule,SharedModule,ShoppingModule,AuthModule,StoreModule.forRoot(reducers, 
      { metaReducers }), !environment.production ? StoreDevtoolsModule.instrument() : [],
      EffectsModule.forRoot([AuthEffects]),StoreRouterConnectingModule
      
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { 

  

  /* constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  } */
}
