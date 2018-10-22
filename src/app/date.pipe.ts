import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any): any {
    let timeNow = new Date();
    let difference = timeNow.getTime() - value.getTime();
    difference = difference / (1000 * 60 * 60 * 24);
    return Math.floor(difference);
  }

}
