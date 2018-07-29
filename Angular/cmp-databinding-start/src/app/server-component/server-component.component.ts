import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChanges , ElementRef,ViewChild,ContentChild} from '@angular/core';



@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css'],
  //encapsulation:ViewEncapsulation.None
})
export class ServerComponentComponent implements OnInit , OnChanges ,AfterContentInit,AfterContentChecked,AfterViewInit
,AfterViewChecked,DoCheck  {


  ngDoCheck(): void {
    console.log("Do Check")
  }
  ngAfterViewChecked(): void {
    console.log("After View Checked");
  }
  ngAfterViewInit(): void {
    console.log("After View Init");
     console.log(this.head.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log("After Content Check");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes" + changes);
  }

  ngAfterContentInit(){
console.log("After content Init");
console.log(this.content.nativeElement.textContent);
  }



  @Input('servElementName') element:{name:string,type:string,content:string}
  @Input('name') name:string;
  @ViewChild('header') head:ElementRef;
  @ContentChild('content') content:ElementRef;
  constructor() {

    console.log("Const");
  }

  ngOnInit() {

    console.log("ng onInit");

    console.log(this.head.nativeElement.textContent);

    console.log(this.content.nativeElement.textContent);
  }



}
