import { Component } from '@angular/core';
import { ServersService } from 'src/app/servers.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appComponent=this.serversService.getAppComponent();

  constructor(private serversService:ServersService){

  }
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSaveServers(){

    this.serversService.storeServers(this.servers).subscribe((data)=>{
        console.log(data);
        
    },(error)=>{
      console.log("error");
    })
  }
  onGetServers(){

    this.serversService.getServers().subscribe((data:any[])=>{
      this.servers=data;
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }
}
