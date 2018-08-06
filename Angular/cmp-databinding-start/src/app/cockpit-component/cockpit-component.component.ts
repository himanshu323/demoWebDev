import { Component, OnInit } from '@angular/core';

import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Element } from '@angular/compiler';

import { ViewChild,ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit-component',
  templateUrl: './cockpit-component.component.html',
  styleUrls: ['./cockpit-component.component.css']
})
export class CockpitComponentComponent implements OnInit {

  newServerName = '';
  newServerContent = '';

  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated=new EventEmitter<{blueprintName:string,blueprintContent:string}>();
  @ViewChild('serverContentInput') serverContent:ElementRef;
  constructor() { }

  ngOnInit() {
  }


  onAddServer(input:HTMLInputElement) {

    console.log(input.value);
    console.log(this.serverContent);
    this.serverCreated.emit({serverName:input.value,serverContent:this.serverContent.nativeElement.value});
    /* this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    }); */
  }

  onAddBlueprint() {

    this.blueprintCreated.emit({blueprintName:this.newServerName,blueprintContent:this.serverContent.nativeElement.value})
   /*  this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });*/
  }
}
