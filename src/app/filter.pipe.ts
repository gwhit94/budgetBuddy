import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any, type: string): any {
    return values.filter(value => value.type_id == type);
  }

}
