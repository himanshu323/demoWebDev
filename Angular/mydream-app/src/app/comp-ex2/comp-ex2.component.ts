import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-ex2',
  templateUrl: './comp-ex2.component.html',
  styles: [`
  .change{
    color : white;
  }
  `]
})
export class CompEx2Component implements OnInit {
  clickBT = false;
  clickArray = [];
  num = 0;
  constructor() {}

  ngOnInit() {}

  onButtonClick() {
    this.clickBT = !this.clickBT;
    // this.clickArray.push(this.num);
    this.clickArray.push(new Date());
    this.num++;
  }

  colorBlue() {

    if  ( this.num > 5) {
      return 'blue';
    }
    return 'none';
  }
}
