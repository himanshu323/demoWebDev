import { Component, Input } from "@angular/core";

@Component({
    selector:'alert-component',
    template:'<div>This is an alert message {{message}}</div>'
})
export class AlertComponent{
@Input() message;
}