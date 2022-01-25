import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {
    transform(val: any) {
        if (val && val.length >= 10) {
            let inicialNum, index;
            if (val.substr(0, 2) == '55') {
                inicialNum = val.substr(0, 2) + ' (' + val.substr(2, 2) + ') ';
                index = 4;
                return 'erro 13';
            } else {
                inicialNum = '(' + val.substr(0, 2) + ')';
                index = 2;
                return 'erro 17';
            }
            if ((val.length - index) == 9) {
                return inicialNum + val.substr(index, 5) + '-' + val.substr(index+5);
            } else {
                return inicialNum + val.substr(index, 4) + '-' + val.substr(index+4);
            }
        }
        return 'erro 25'
    }
}
