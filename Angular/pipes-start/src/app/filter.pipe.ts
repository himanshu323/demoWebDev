import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterValue:string,property:string): any {
   
   if(filterValue.length<=0){
     return value;
   }
    var resultsArray=[];
    for( let c of value){
      if(c[property]===filterValue){
        resultsArray.push(c);
      }
    }
    console.log("***" + resultsArray)

    return resultsArray;
  }

}
