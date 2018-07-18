import { Component, OnInit } from '@angular/core';

@Component({
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
  }

}
