import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useClass: LocalStorageService
})

export class LocalStorageService {
  private localStorage = window.localStorage;

  setItem(key: string, value: any): void {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const value =  this.localStorage.getItem(key);
    return JSON.parse(value);
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }
}
