import { Effect ,Actions} from "@ngrx/effects";
import { RecipeActionTypes,RecipeActions } from "./recipes.actions";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { Recipe } from "../recipes.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { FeatureState } from "./recipes.reducers";
import { Store } from "@ngrx/store";
@Injectable()
export class RecipeEffects{


    @Effect()
    fetchData=this.actions$.ofType(RecipeActionTypes.FETCH_RECIPE).pipe(
        
        switchMap((action:RecipeActionTypes.FETCH_RECIPE)=>{
            return this.httpClient.get("https://recipe-book-c5959.firebaseio.com/data.json",{
                observe:'body',
                responseType:'json',
                //params:new HttpParams().set("auth",token)
            } )}), map((data:Recipe[])=>{

                console.log(data+"****");
                for(let r of data){
                    if(!r['ingredients']){
                        r['ingredients']=[];
                        console.log(r);
                    }
                }
                console.log("Hello",data)

                return {
                    type:RecipeActionTypes.SET_RECIPE,
                    payload:data
                    
                }
            })

        )
        
  
        @Effect({dispatch:false})
        storeData=this.actions$.ofType(RecipeActionTypes.STORE_RECIPE).pipe(

            withLatestFrom(
                this.store.select('recipes')
            ),

            switchMap(([action,state])=>{
                const req=new HttpRequest("PUT","https://recipe-book-c5959.firebaseio.com/data.json",state.recipes,{reportProgress:true,
                //params:new HttpParams().set("auth",token)

                
                });
                return this.httpClient.request(req);
            })
        )

    constructor(private actions$:Actions,private httpClient:HttpClient,private store:Store<FeatureState>){

    }
}