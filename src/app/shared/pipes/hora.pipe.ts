import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'hora'
})
export class HoraPipe implements PipeTransform {

  format: string = 'HH:mm:ss';

      transform(value: any) {
         const datePipe: DatePipe = new DatePipe('pt_BR');
         return datePipe.transform(value, this.format);
      }

}
