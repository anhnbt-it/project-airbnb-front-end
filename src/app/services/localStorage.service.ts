import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  get = (key: string) => {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }


  set = (key: string, value: any) => {
    // const user: any = {
    //   // id: id,
    //   value: value
    // };
    if (value && typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value) );
    } else {
      localStorage.setItem(key, value);
    }
  }

  delete = (key: string | null | undefined) => {
    if (key != null) {
      localStorage.removeItem(key);
    }
  }

  clearAll = () => {
    localStorage.clear();
  }
}
