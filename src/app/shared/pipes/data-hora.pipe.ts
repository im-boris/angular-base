import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataHora'
})
export class DataHoraPipe implements PipeTransform {

  format: string = 'dd/MM/yyyy HH:mm:ss';

    public transform(value: any) {
       const datePipe: DatePipe = new DatePipe('pt_BR');
       return datePipe.transform(value, this.format);
    }

}
