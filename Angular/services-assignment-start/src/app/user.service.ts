import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";


@Injectable()

export class UserService{

  counter=0;
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    
    this.counterService.counterChange.emit();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.counterChange.emit();
  }

 constructor(private counterService:CounterService){

 }

}