import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from 'src/app/server/server.component';
<<<<<<< HEAD
import { ServersComponent } from 'src/app/servers/servers.component';
import { CompEx1Component } from './comp-ex1/comp-ex1.component';
import { CompEx2Component } from './comp-ex2/comp-ex2.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, CompEx1Component, CompEx2Component],
  imports: [BrowserModule, FormsModule],
=======
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,ServerComponent, ServersComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
>>>>>>> 48e2b17c9183bf24c1d909815ace82fc7a3856f4
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
