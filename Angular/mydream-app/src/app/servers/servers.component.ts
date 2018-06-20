import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
/*   template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
 */  
 templateUrl:'./servers.component.html',
 styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddServer=false;
  serversStat ="No server was created";
  serverName="TestServ";

  constructor() { 

    setTimeout(() => {
      this.allowAddServer=true;
    }, 2000);
  }

  onCreateServer(){
    this.serversStat="Server was created with Name :" + this.serverName;
  }

  ngOnInit() {
  }

  onUpdateServerName(event){
  this.serverName=event.target.value;
  }

}
