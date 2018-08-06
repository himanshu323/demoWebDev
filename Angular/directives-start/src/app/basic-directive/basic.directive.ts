
import { element } from 'protractor';
import {ElementRef,Directive,OnInit,Renderer2,Input} from "@angular/core"
import { HostListener ,HostBinding} from '@angular/core';




@Directive({selector:"[basicHighlight]"})
export class BasicDirective implements OnInit{ 
    
    @HostBinding('style.backgroundColor') backgroundColor:string;
    @Input() defaultColor:string='red';
    @Input('basicHighlight') highlightColor:string='brown';
    ngOnInit(): void {
        //this.element.nativeElement.style.backgroundColor="yellow";
        //this.renderer.setStyle(this.element.nativeElement,'background-color','orange');
       this.backgroundColor=this.defaultColor;
    }

    constructor(private element:ElementRef,private renderer:Renderer2)
    {

    }

    @HostListener('mouseenter') mouseOver(eventData:Event){
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'orange');
        //this.backgroundColor='orange';
        this.backgroundColor=this.highlightColor;
    }

     @HostListener('mouseleave') mouseLeave(eventData:Event){
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
       // this.backgroundColor="transparent";
       this.backgroundColor=this.defaultColor;
    }





}