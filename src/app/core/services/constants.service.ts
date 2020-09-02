import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  // эти же значения можно сразу в классе задать...
  // меньше кода, проще читать.
  useValue: {
    app: 'ShopApp',
    ver: '1.0',
    apiUrl: 'http://localhost:4200/'
  }
})

export class ConstantsService {
  app: string;
  ver: string;
  apiUrl: string;
}
