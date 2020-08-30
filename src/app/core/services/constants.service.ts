import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue: {
    app: 'ShopApp',
    ver: '1.0',
    api_url: 'http://localhost:4200/'
  }
})

export class ConstantsService {
  app: string;
  ver: string;
  api_url:string;
}
