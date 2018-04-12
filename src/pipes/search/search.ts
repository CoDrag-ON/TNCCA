import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operator/filter';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return filter ? items.filter( it => {
      return it.title.toLowerCase().includes(terms)// only filter country name
    }) : items; 
  }
}
