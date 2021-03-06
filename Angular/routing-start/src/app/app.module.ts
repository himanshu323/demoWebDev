import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRouting } from 'src/app/app-routing.module';
import { AuthGuard } from 'src/app/auth-guard.service';
import { AuthenticationService } from 'src/app/auth.service';
import { CanDeActivateGuard } from 'src/app/servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from 'src/app/servers/server/server-resolver.service';


@NgModule({
  declarations: [
    
    
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting

  ],
  providers: [ServersService,AuthGuard,AuthenticationService,CanDeActivateGuard,ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
