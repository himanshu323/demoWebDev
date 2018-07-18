import { Component, OnInit } from '@angular/core';

@Component({
<<<<<<< HEAD
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  serverStatus = 'No Server was created';

  serverName = 'Default';

  serverCreated = false;


  servers = ['Ta', 'Ta12'];




  constructor() {
    setTimeout(() => {
this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer()  {

    this.serverStatus = 'Server was created with Name ' + this.serverName;

    this.serverCreated = true;

    this.servers.push(this.serverName);



  }

  onEnter(event) {

this.serverName = event.target.value;
=======
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
>>>>>>> 48e2b17c9183bf24c1d909815ace82fc7a3856f4
  }

}
