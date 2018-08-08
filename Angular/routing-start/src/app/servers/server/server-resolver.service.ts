import { Resolve, RouterStateSnapshot } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "src/app/servers/servers.service";
import { Injectable } from "@angular/core";



interface Server{

  name:string,
  status:string,
  id:number
}
@Injectable()

export class ServerResolver implements Resolve<Server>  {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
    return this.serversService.getServer(+route.params['id']);
  }
  constructor(private serversService:ServersService) {

  }
}
