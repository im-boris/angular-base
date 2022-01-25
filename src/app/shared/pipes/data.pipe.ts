import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
    name: 'date', pure: true
})
export class DataPipe implements PipeTransform {

    format: string = 'dd/MM/yyyy';
    formatUS: string = 'yyyy-MM-dd'
    /*constructor(private format: string = 'dd/MM/yyyy') {
    }*/

    transform(value: any) {
        const datePipe: DatePipe = new DatePipe('pt_BR');
        return datePipe.transform(value, this.format);
    }
    
    transformUS(value: any) {
        const datePipe: DatePipe = new DatePipe('en_US');
        return datePipe.transform(value, this.formatUS);
    }

}
