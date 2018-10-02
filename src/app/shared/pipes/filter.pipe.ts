import { Pipe, PipeTransform } from '@angular/core';
import { ICities } from '../../core/data-interfaces/cities.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: ICities[], searchText: string): ICities[] {
    if (!items || !searchText) {
      return [];
    }
    searchText = searchText.toLowerCase();
    return items.filter((it: ICities) => {
      return it.city_name.toLowerCase().includes(searchText);
    });
  }
}
