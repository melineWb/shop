import { Component } from '@angular/core';

import { Category } from '../shared/category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.less']
})
export class FirstComponent {
  name = 'Ceramic capacitors Bundle';
  description = 'The ceramic capacitor gains its name from the fact that it uses ceramic materials for its dielectric.';
  price = 2;
  category: Category = Category.Capacitor;
  isAvailabile = false;
  tags: string[] = ['ceramic', 'capacitor'];
  bundleItems: string[] = ['Ceramic capacitor 1', 'Ceramic capacitor 2', 'Ceramic capacitor 3'];

  constructor() { }
}
