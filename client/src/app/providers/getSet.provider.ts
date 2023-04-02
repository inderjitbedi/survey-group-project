import { Injectable } from '@angular/core';

@Injectable()
export class GetSetService {
  storedData: any = {};
  get(key:string): any {
    return key ? this.storedData[key] : this.storedData;
  }
  set(key:string, data:any): any {
    this.storedData[key] = data;
  }
}
