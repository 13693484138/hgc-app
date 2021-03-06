import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PhonePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    return value.replace(/^(\d{3})\d{5}(\d+)/,"$1*****$2");
  }
}
