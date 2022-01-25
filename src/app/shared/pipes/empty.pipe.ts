import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'empty'
})
export class ScEmptyPipe implements PipeTransform {
    transform(value: any, digitsInfo?: string, locale?: string) {
        return !value ? '-' : value;
    }
}
