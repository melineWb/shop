import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useClass: LocalStorageService
})

export class LocalStorageService {
  private localStorage = window.localStorage;

  setItem(key: string, value: string | object): void {
    value = typeof value === 'string' ? value : JSON.stringify(value);
    this.localStorage.setItem(key, value);
  }

  getItem(key: string): string | object {
    const value =  this.localStorage.getItem(key);
    return typeof value === 'string' ? value : JSON.parse(value);
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }
}
