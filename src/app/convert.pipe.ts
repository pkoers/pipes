import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if (!value) {
      return '';
    };

    return Number(value) * 1.60934;
  }

}
