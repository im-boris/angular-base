import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'cep'
})
export class CepPipe implements PipeTransform {
    transform(val: any, args?:any) {
        if (val && val.length === 8) {
            return val.substr(0, 2) + '.' + val.substr(2, 3) + '-' + val.substr(5);
        } else {
            return val;
        }
    }
}
