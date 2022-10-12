import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'filterBrand'
})
export class FilterBrandPipe implements PipeTransform {

  transform(value: CarDetail[], filterText: string): unknown {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:CarDetail)=>c.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
