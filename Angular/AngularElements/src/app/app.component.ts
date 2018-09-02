import { Component, Injector } from '@angular/core';
import {createCustomElement} from "@angular/elements"
import { AlertComponent } from './alert.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  content=null;

  constructor(injector:Injector,domSanitizer:DomSanitizer)
  {
    let constElement=createCustomElement(AlertComponent,{injector:injector});
    customElements.define('my-alert',constElement);
    this.content=domSanitizer.bypassSecurityTrustHtml("<my-alert message='Bye'></my-alert>");
  }
}
