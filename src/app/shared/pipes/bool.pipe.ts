import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'bool'
})
export class BoolPipe implements PipeTransform {
    transform(value: boolean) {
        return value ? 'Sim' : 'Não';
    }
}
