<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles : [`
  .online {
    color : white;
  }

  `]

})
export class ServerComponent {
 serverId = 10;

 serverStatus = 'online';

 constructor() {

  this.serverStatus = Math.random() > 0.5 ? 'online' :  'offline';

 }

 getColor() {


 return this.serverStatus === 'online'  ? 'green' : 'red';

 }
}
=======
import { Component } from '@angular/core'

@Component({

    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{

serverId="123";
serverStatus="offline";

    getServerStatus(){
        return this.serverStatus;
    }

}
>>>>>>> 48e2b17c9183bf24c1d909815ace82fc7a3856f4
