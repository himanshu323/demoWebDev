import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { AppState } from "../store";
import { Store } from "@ngrx/store";
import { AuthState } from "../auth/reducers/auth.reducers";

import { switchMap, take } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private store:Store<AppState>){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    //   return this.store.select('auth').subscribe((state:AuthState)=>{

    //     const copyReq=req.clone({params:req.params.set("auth",state.token)})
    //     console.log("Interceptor",copyReq);
    //     return next.handle(copyReq);
    //    })
       
    // return this.store.select('auth')
      
    //   .switchMap((authState: AuthState) => {
    //     const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
    //     return next.handle(copiedReq);
    //   })

     //  return this.store.select('auth')
    //     const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
    //      return next.handle(copiedReq);
                
    //    })}
      
    //    .pipe(
    //    take(1)).pipe(
    //    switchMap((authState: AuthState) => {
    //      const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
    //      return next.handle(copiedReq);
    //    }))
   // }


   return this.store.select('auth')
      .pipe(take(1)).pipe(
      switchMap((authState: AuthState) => {
        const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
        console.log("Token*********" +authState.token)
        return next.handle(copiedReq);}))
}



}

