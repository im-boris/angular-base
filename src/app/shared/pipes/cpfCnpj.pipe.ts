import {CnpjPipe} from './cnpj.pipe';
import {CpfPipe} from './cpf.pipe';

import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'cpfCnpj'
})
export class CpfCnpjPipe implements PipeTransform {

    private cpfPipe: CpfPipe;
    private cnpjPipe: CnpjPipe;

    constructor() {
        this.cpfPipe = new CpfPipe();
        this.cnpjPipe = new CnpjPipe();
    }


  transform(cpfCnpj: string): string {
  if (!cpfCnpj) {
            return '';
        }

        const cpfCnpjValor = cpfCnpj.replace(/\D/g, '');

        if (cpfCnpjValor.length === 11) {
            cpfCnpj = this.cpfPipe.transform(cpfCnpjValor);
        } else if (cpfCnpjValor.length === 14) {
            cpfCnpj = this.cnpjPipe.transform(cpfCnpjValor);
        }

        return cpfCnpj;
  }
}
