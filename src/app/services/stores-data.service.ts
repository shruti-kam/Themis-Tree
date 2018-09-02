import { Injectable } from '@angular/core';
import { storesList } from '../store-locator/stores-list';

@Injectable()
export class StoresDataService {

  constructor() { }
  
  getStoresList(city: any) {
    return storesList[0];
  }

}
