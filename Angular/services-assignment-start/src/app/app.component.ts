import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
 
})
export class AppComponent  {

   counter:number=0;

   
   constructor(private counterService:CounterService){
     
    this.counterService.counterChange.subscribe(()=>{
       this.counter++;
     });
   }

  }

