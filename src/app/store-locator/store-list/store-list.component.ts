import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';

import { StoresList } from '../../store-locator/stores-list';
import { StoresDataService } from '../../services/stores-data.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  storeForm: FormGroup;
  list: StoresList;
  multipleStores = false;
  
  title: string ="FIND A STORE";
  stores: string[] = ['Select your city', 'Agartala','Agra','Ahemdabad'];
  
  constructor(private storesDataService: StoresDataService, private fb: FormBuilder) { 
    this.createForm();
  }
  
  createForm() {
    this.storeForm = this.fb.group({selectCity: ""});
  }

  ngOnInit() {
    console.log("in store component");
  //  console.log(this.storesDataService.getStoresList());
    console.log(this.storeForm.value + this.storeForm.status);
  }
  
  findStore(city: string) {
    this.list = this.storesDataService.getStoresList(this.storeForm.get('selectCity').value);
    console.log(this.list);

    //if (this.list.length > 1) {
    //  this.multipleStores = true;
    //} else
    //  this.multipleStores = false;
  }

}