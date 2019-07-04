import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryIcon'
})
export class CategoryIconPipe implements PipeTransform {

  transform( value: any ){
      if( value == "Pub" ){
          return "beer";
      }

      if( value == "Bar Rock" ){
          return "musical-note";
      }

      return 'wine';
  }

}
