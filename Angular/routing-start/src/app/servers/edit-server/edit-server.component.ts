import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { canComponentDeActivate } from 'src/app/servers/edit-server/can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"]
})
export class EditServerComponent implements OnInit, canComponentDeActivate {

  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}
canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
  if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
      return confirm("Do you want to discard changes ?")
  }
  else{
    return true;
  }}
  ngOnInit() {
    console.log(this.route.snapshot.queryParams);

    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe((params: Params[]) => {
      this.allowEdit = params["allowEdit"] === "1" ? true : false;
    });
     const id=+this.route.snapshot.params['id'];
    //this.route.queryParams.subscribe();

    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
    this.changesSaved = true;
  }
}
