import { Component, OnInit,Output,EventEmitter } from '@angular/core';




@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
@Output() displayValue=new EventEmitter<number>();
//@Output() displayEven=new EventEmitter<{even:number}>();
val:number=0;
stopVal;
  constructor() { }

  ngOnInit() {
  }

  onStart(){
    this.stopVal= setInterval(()=>{

    console.log(this.val);
    /* if(!(this.val %2 ===0)){
      this.displayOdd.emit({odd:this.val})
    }
    else{
      this.displayEven.emit({even:this.val})
    } */
    this.displayValue.emit(this.val);
    this.val++;
    },1000);
  }

  onStop(){

    clearInterval(this.stopVal)
  }
}
