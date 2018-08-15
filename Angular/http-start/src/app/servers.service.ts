import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ServersService{



    constructor(private http:Http){

    }


    storeServers(servers:any[]){
      return  this.http.post("https://httpdemo-32027.firebaseio.com/data.json",servers);
    }
}