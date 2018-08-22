import { Directive, ElementRef ,HostListener,Renderer2} from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isClicked=false;
  constructor(private element:ElementRef,private rendrer:Renderer2){ }

  @HostListener('click') onclick(){

  this.isClicked=!(this.isClicked);
  if(this.isClicked){
  this.rendrer.addClass(this.element.nativeElement,"open");
  }
  else{
    this.rendrer.removeClass(this.element.nativeElement,"open");
    
  }



  }

}
