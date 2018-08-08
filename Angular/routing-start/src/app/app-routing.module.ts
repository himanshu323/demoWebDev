import {NgModule} from "@angular/core"
import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";
import { UsersComponent } from "src/app/users/users.component";
import { UserComponent } from "src/app/users/user/user.component";
import { ServersComponent } from "src/app/servers/servers.component";
import { EditServerComponent } from "src/app/servers/edit-server/edit-server.component";
import { ServerComponent } from "src/app/servers/server/server.component";
import { PagenotfoundComponent } from "src/app/pagenotfound/pagenotfound.component";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/auth-guard.service";
import { CanDeActivateGuard } from "src/app/servers/edit-server/can-deactivate-guard.service";
import { ServerResolver } from "src/app/servers/server/server-resolver.service";


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }]
  },

  {
    path: "servers",
    component: ServersComponent,
    //canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    children: [
      { path: ":id/edit", component: EditServerComponent, canDeactivate:[CanDeActivateGuard] },
      { path: ":id", component: ServerComponent,resolve:{server:ServerResolver} }
    ]
  },
  { path: "notfound", component: PagenotfoundComponent },
  { path: "**", redirectTo: "notfound" }
];
@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]

})
export class AppRouting{



}
