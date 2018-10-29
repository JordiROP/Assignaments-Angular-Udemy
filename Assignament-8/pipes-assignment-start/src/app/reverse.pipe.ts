import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let newString = '';

    for (let pos = value.length; pos >= 0; pos--) {
      newString = newString + value.charAt(pos);
    }
    return newString;
  }

}
