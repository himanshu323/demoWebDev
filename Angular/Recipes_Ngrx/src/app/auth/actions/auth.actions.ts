import { Action } from "@ngrx/store";
export enum AuthActionTypes{

      SIGN_IN="SIGN_IN",

     SIGN_UP="SIGN_UP",
    
    SET_TOKEN="SET_TOKEN",
    
      LOGOUT="LOGOUT",
    
}


export class SignInAction implements Action {
   readonly type=AuthActionTypes.SIGN_IN;

   
}

export class SignUpAction implements Action {
    readonly type=AuthActionTypes.SIGN_UP;
 
    
 }
 export class SetTokenAction implements Action {
    readonly type=AuthActionTypes.SET_TOKEN;
     
    constructor( public payload:string){
      
    }
 
    
 }
 export class LogOutAction implements Action {
    readonly type=AuthActionTypes.LOGOUT;
 
    
 }
 export type AuthActions = SignInAction | SignUpAction | LogOutAction | SetTokenAction;
 /* export type  AuthActions= SignInAction|SignUpAction|SetTokenAction|LogOutAction; 


 export class Signup implements Action {
      readonly type = AuthActionTypes.SIGN_IN;
    }
    
    export class Signin implements Action {
      readonly type = AuthActionTypes.SIGN_UP;
    }
    
    export class Logout implements Action {
      readonly type = AuthActionTypes.LOGOUT;
    }
    
    export class SetToken implements Action {
      readonly type = AuthActionTypes.SET_TOKEN;
    
      constructor(public payload: string) {}
    }
    
    export type AuthActions = Signup | Signin | Logout | SetToken; */