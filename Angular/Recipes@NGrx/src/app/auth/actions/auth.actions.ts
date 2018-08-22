import { Action } from "@ngrx/store";
export enum AuthActionTypes{


  TRY_SIGNIN="TRY_SIGNIN",

  TRY_SIGNUP="TRY_SIGNUP",

  SIGN_IN="SIGN_IN",

  SIGN_UP="SIGN_UP",
    
  SET_TOKEN="SET_TOKEN",
    
  LOGOUT="LOGOUT",
    
}


export class SignInAction implements Action {
   readonly type=AuthActionTypes.SIGN_IN;

   
}



export class TrySignInAction implements Action {
  readonly type=AuthActionTypes.TRY_SIGNIN;

  constructor(public payload:{username:string,password:string}){

  }

  
}


export class TrySignUpAction implements Action {
  readonly type=AuthActionTypes.TRY_SIGNUP;

  constructor(public payload:{username:string,password:string}){
    
  }

  
  
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
 export type AuthActions = SignInAction | SignUpAction | LogOutAction | SetTokenAction| TrySignInAction |TrySignUpAction;
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