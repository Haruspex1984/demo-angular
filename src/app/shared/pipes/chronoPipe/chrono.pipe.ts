import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono'
})
export class ChronoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return minutes + " minutes " + seconds + " secondes";
  }

}
