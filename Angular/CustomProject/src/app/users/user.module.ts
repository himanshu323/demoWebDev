import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[UserComponent],
    imports:[UserRoutingModule,CommonModule],
    providers:[]
})
export class UserModule{

}