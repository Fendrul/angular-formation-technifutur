import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number): string {
    let hour = Math.floor(value / 3600);
    value = value - hour * 3600;
    let minute = Math.floor(value / 60);
    value = value - minute * 60;
    let second = value;

    return hour + ' : ' + minute + ' : ' + second;
  }

}
