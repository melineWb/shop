import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(data: any, key?: string, order: boolean = false): any {
    console.log(order);
    if (key) {
      const sordedData =  data.sort((a: any, b: any): any => {
        if (typeof a[key] === 'string') {
          const item1 = a[key].toLowerCase();
          const item2 = b[key].toLowerCase();
          if (item1 < item2) {
            return 1;
          } else if (item1 > item2) {
            return -1;
          } else {
            return 0;
          }

        } else {
          return b[key] - a[key];
        }
      });

      if (order) {
        return sordedData.reverse();
      } else {
        return sordedData;
      }
    } else {
      return data;
    }
  }
}
