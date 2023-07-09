import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hour'
})
export class HourPipe implements PipeTransform {

  transform(value: string): string {
    let formattedTime = '';

    if (value && value.length >= 6) {
      const hours = value.substring(0, 2);
      const minutes = value.substring(2, 4);
      const seconds = value.substring(4, 6);

      formattedTime = `${hours}:${minutes}:${seconds}`;
    }

    return formattedTime;
  }

}
