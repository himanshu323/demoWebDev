import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    let c=value.split("");
    let result="";
    c.reverse().forEach(function(s){
        result=result+s;
     })
     return result;
  }

}
