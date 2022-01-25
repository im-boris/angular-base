import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filtro' })
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, nomeCampo?: string): any[] {
      
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      if(nomeCampo)
        return it[nomeCampo].toLocaleLowerCase().includes(searchText);
      
      return it.toLocaleLowerCase().includes(searchText);
    });

  }

}