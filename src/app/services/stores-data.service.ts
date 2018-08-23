import { Injectable } from '@angular/core';
import { storesList } from '../stores/stores-list';

@Injectable()
export class StoresDataService {

  constructor() { }
  
  getStoresList() {
    return storesList;
  }

}
