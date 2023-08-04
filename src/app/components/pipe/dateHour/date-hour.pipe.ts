import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dateHour'
})
export class DateHourPipe implements PipeTransform {

  transform(value: string): string {
    let formattedDateTime = '';

    if (value && value.length >= 14) {
      const year = value.substring(0, 4);
      const month = value.substring(4, 6);
      const day = value.substring(6, 8);
      
      const hour = value.substring(8, 10);
      const minute = value.substring(10, 12);
      const second = value.substring(12, 14);

      formattedDateTime = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
    }

    return formattedDateTime;
  }
}
