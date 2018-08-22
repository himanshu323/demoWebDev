import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { AppState } from "../store";
import { Store } from "@ngrx/store";
import { AuthState } from "../auth/reducers/auth.reducers";
import { map } from "rxjs/operators";
import { StartEdit } from "../shopping-list/actions/add-ingredient.actions";
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store:Store<AppState>){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.store.select('auth').pipe(map((state:AuthState)=>{
 return state.authenticated;
        }))
    }
}