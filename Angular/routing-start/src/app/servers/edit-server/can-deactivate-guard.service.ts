import { CanDeactivate } from "@angular/router/src/interfaces";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


export interface canComponentDeActivate{
 canDeactivate(): boolean | Observable<boolean> | Promise<boolean>;
}
export class CanDeActivateGuard implements CanDeactivate<canComponentDeActivate>{
  canDeactivate(component: canComponentDeActivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate();
  }



}
