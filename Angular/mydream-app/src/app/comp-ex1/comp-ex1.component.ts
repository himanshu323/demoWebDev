import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-ex1',
  templateUrl: './comp-ex1.component.html',
  styleUrls: ['./comp-ex1.component.css']
})
export class CompEx1Component implements OnInit {
  username = '';

  setUsernameEmpty()  {

    this.username = '';
  }

  constructor() {}

  ngOnInit() {}
}
