import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConstantsService {
  app = 'ShopApp';
  ver = '1.0';
  apiUrl = 'http://localhost:4200/';
}
