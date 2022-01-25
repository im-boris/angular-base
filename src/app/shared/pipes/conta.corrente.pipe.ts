import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'cco'
})
export class ContaCorrentePipe implements PipeTransform {
    transform(val: any, args?: any) {
            const clone = new String(val);
            return clone.slice(0, -1) + '-' + clone.slice(-1);
    }
}
