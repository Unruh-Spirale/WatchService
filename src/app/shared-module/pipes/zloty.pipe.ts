import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zloty'
})
export class ZlotyPipe implements PipeTransform {

  transform(value: number): string {
    if (!value){
      return '';
    }
    return value + ' PLN';
  }

}
