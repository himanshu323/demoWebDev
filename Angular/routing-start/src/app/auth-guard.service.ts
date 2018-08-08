import { CanActivate } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/auth.service";
import { Router } from "@angular/router";
import { CanActivateChild } from "@angular/router/src/interfaces";

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute,state);
  }


  constructor(private authService:AuthenticationService,private router:Router){



  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {


    return this.authService.isAuthenticated().then(
        (status:boolean)=>{
            if(status){
              return true;
            }
            else{
                this.router.navigate(['/']);
            }

        }

    )
  }




}
