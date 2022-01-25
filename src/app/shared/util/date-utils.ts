import * as moment from 'moment';

/**
 * obtem a data anterior a data corrente
 */
export function ontem(): Date {
    const data = new Date();
    data.setDate(data.getDate() - 1);
    return data;
}

/**
 * Metodo para adicionar mais um dia de uma data
 * especifica
 *
 * @param date data para incrementar
 * @returns retorna a data somada com mais um dia
 */
export function incrementaData(date: Date): Date {
    date.setDate(date.getDate() + 1);
    return date;
}

/**
 * Metodo para reduzir mais um dia de uma data
 * especifica
 *
 * @param date data para decrementar
 * @returns retorna a data com um dia a menos
 */
export function decrementaData(date: Date): Date {
    date.setDate(date.getDate() - 1);
    return date;
}

export function isDataMaior(date1: Date, date2: Date): Boolean {
    return moment(date1).isBefore(date2);
}

export function isDataMenor(date1: Date, date2: Date): Boolean {
    return moment(date1).isAfter(date2);
}

export function isNoPeriodo(data: Date, periodoInicial: Date, periodoFinal: Date): Boolean {
    return moment(data).isBetween(periodoInicial, periodoFinal);
}

export function stringToDate(vlr: any) {
    return moment(vlr, 'yyyy-MM-dd').toDate();
}

export function stringToDatePadraoBR(vlr: any) {
  return moment(vlr, 'YYYY-MM-DD').format('DD/MM/YYYY');
}

export function stringToDatePadraoUS(vlr: any) {
    return moment(vlr, 'DD/MM/YYYY').format('YYYY-MM-DD');
  }

export function numberEpochToDate(vlr: number) {
    return stringToDatePadraoUS(moment(vlr).toISOString());
}