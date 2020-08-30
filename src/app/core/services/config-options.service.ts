import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private settings = {};
  constructor() { }

  set(data: object): void {
    this.settings = Object.assign(this.settings, data);
  }

  get(): object {
    return this.settings;
  }
}
