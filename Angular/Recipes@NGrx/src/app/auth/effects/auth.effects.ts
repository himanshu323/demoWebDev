import {Actions,Effect} from "@ngrx/effects"
import { AuthActionTypes, TrySignInAction, AuthActions, SignUpAction, TrySignUpAction } from "../actions/auth.actions";
import { switchMap, map, mergeMap, tap, } from "rxjs/operators";
import * as firebase from "firebase"
import { from} from 'rxjs';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects{

    @Effect()
    authSignUp=this.actions$.ofType(AuthActionTypes.TRY_SIGNUP).pipe(map
    ((action:TrySignUpAction)=>{
      return   action.payload
    })).pipe(switchMap((data)=>{
        return from(firebase.auth().createUserWithEmailAndPassword(data.username,data.password))
    })).pipe(switchMap(()=>{
     return from(firebase.auth().currentUser.getIdToken());

    })).pipe(mergeMap((token:string)=>{
  console.log(":::" + token)
    return [{
        type:AuthActionTypes.SIGN_UP
    },{

        type:AuthActionTypes.SET_TOKEN,
        payload:token
    }]

    }))


    @Effect()
    authSignIn=this.actions$.ofType(AuthActionTypes.TRY_SIGNIN).pipe(map
    ((action:TrySignInAction)=>{
      return   action.payload
    })).pipe(switchMap((data)=>{
        return from(firebase.auth().signInWithEmailAndPassword(data.username,data.password))
    })).pipe(switchMap(()=>{
     return from(firebase.auth().currentUser.getIdToken());

    })).pipe(mergeMap((token:string)=>{
  console.log(":::" + token)

  this.router.navigate(['/']);
    return [{
        type:AuthActionTypes.SIGN_IN
    },{

        type:AuthActionTypes.SET_TOKEN,
        payload:token
    }]

    }))

    @Effect({dispatch:false})
    authLogout = this.actions$
    .ofType(AuthActionTypes.LOGOUT)
    .pipe(tap(() => {
      this.router.navigate(['/']);
    }));

    // logOut=this.actions$.ofType(AuthActionTypes.LOGOUT).do(() => {
    //     this.router.navigate(['/']);
    //   });


    constructor(private actions$:Actions,private router:Router){

    }
}