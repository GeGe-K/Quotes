import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lapse'
})
export class DatePipe implements PipeTransform {

  transform(value: any): any {
    let timeNow = new Date(); //Takes the current date
    let difference = timeNow.getTime() - value.getTime(); //Difference btwn current date and when it was posted
    difference = difference / (1000 * 60 * 60 * 24);
    return Math.floor(difference);
  }

}
