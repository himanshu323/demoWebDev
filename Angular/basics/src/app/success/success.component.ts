import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styles: [`p{
    color:green;
    border:2px solid green;
  }`]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
