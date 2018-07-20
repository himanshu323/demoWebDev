import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css'],
  //encapsulation:ViewEncapsulation.None
})
export class ServerComponentComponent implements OnInit {

  @Input('servElementName') element:{name:string,type:string,content:string}
  constructor() { }

  ngOnInit() {
  }

}
