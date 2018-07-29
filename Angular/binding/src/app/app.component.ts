import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  oddArray:number[]=[];
  evenArray:number[]=[];

  onVal(dVal:number){

    if(dVal % 2===0){
      this.evenArray.push(dVal);
    }
     else{
       this.oddArray.push(dVal);
     }
  }
}
