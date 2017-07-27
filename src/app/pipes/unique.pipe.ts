import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    const newVal = [];
    const ids = []
    value.forEach((item) => {
      if (ids.indexOf(item.id) === -1) {
        ids.push(item.id);
        newVal.push(item);
      }
    })
    return newVal;
  }

}
