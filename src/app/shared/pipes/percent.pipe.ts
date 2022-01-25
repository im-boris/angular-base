import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'percent'
})
export class ScPercentPipe implements PipeTransform {
    transform(value: any, digitsInfo?: string, locale?: string) {
        value = (Math.round(value * 100) / 100).toFixed(2);
        value = value.toString().replace('\.',',');
        return value + '%'
    }
    transformToFloat(value: any) {
        if(value) {
            value = value.toString().replace('\%', '');
            value = value.toString().replace('\,', '.');
            value = this.transform(value);
        }
        return value;
    }
    transformToFloatNoMask(value: any) {
        return parseFloat(value.toString().replace('\,','\.')).toFixed(2)
    }
}
