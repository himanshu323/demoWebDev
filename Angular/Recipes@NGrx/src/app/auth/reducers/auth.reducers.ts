import { State, Action } from "@ngrx/store";
import { AuthActionTypes, AuthActions } from "../actions/auth.actions";

export interface AuthState{
token:string;

authenticated:boolean

}

export const initialAuthState:AuthState={
    token:null,
    authenticated:false
}


export function reducersAuth(state=initialAuthState,action:AuthActions):AuthState{

    switch(action.type){

        case AuthActionTypes.SIGN_IN:
        case AuthActionTypes.SIGN_UP:
        return {...state,authenticated:true}

        case AuthActionTypes.SET_TOKEN:
        return {...state,token:action.payload}
        
        case AuthActionTypes.LOGOUT:
        return {...state,authenticated:false,token:null}

        default:
        return state


    }

}

