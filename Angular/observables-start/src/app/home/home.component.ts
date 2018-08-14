import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription ,interval} from 'rxjs';
import {map} from "rxjs/operators"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  ngOnDestroy(): void {
    this.numObsSubscription.unsubscribe();

    this.customObsSubscription.unsubscribe();
  }
  numObsSubscription:Subscription;

  customObsSubscription:Subscription;

  constructor() { }

  ngOnInit() {

    const numbers=interval(1000)
    .pipe(map((data:number)=>{
      return data*2;
    }));

    this.numObsSubscription=numbers.subscribe((num:Number)=>{
      console.log(num);

    
    })

    const customObservable=Observable.create((observer:Observer<String>)=>{


      setTimeout(()=>{

        observer.next('first package');
      },2000);

      setTimeout(()=>{

        observer.next('second package');
      },4000);

  /*     setTimeout(()=>{

        observer.error('Error with observable');
      },5000); */

      setTimeout(()=>{

        observer.complete();
      },6000);

      setTimeout(()=>{

        observer.next('third package');
      },6000);
      
    });

    this.customObsSubscription=customObservable.subscribe((data:string)=>{

      console.log(data);
    },
  
    (error:string)=>{
      console.log(error)
    },

    ()=>{
      console.log("completed");
    }
  )
  }

}
