import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import {map, catchError} from "rxjs/operators"
import { throwError } from "rxjs";

@Injectable()
export class ServersService{



    constructor(private http:Http){

    }


    storeServers(servers:any[]){
      //return  this.http.post("https://httpdemo-32027.firebaseio.com/data.json",servers);

      return  this.http.put("https://httpdemo-32027.firebaseio.com/data.json",servers);
    }

    getServers(){

      return this.http.get("https://httpdemo-32027.firebaseio.com/data").pipe(map((data:Response)=>{
    
        let arrayData= data.json();

        for(let c of arrayData){
          c.name="Fetched_" +c.name;
        }

        return arrayData;
    }))
    .pipe(catchError((error:Response)=>{
      return throwError("Not wrkng")

    }));
    }

    getAppComponent(){

      return this.http.get("https://httpdemo-32027.firebaseio.com/appComp.json").pipe(map((data:Response)=>{
        return data.json();
      }))
    }
}