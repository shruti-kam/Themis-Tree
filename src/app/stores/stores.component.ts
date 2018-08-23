import { Component, OnInit, Input } from '@angular/core';

import { StoresDataService } from '../services/stores-data.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css'],
})
export class StoresComponent implements OnInit {

  title: string ="FIND A STORE";
  stores: string[] = ['Select your city', 'Agartala','Agra','Ahemdabad'];

  constructor(private storesDataService: StoresDataService) { }

  ngOnInit() {
    console.log("in store component");
    console.log(this.storesDataService.getStoresList());
  }
  
  findStore(city: string) {
    this.storesDataService.getStoresList();
  }

}
