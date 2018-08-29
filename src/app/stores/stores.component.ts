import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';

import { StoresDataService } from '../services/stores-data.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css'],
})
export class StoresComponent implements OnInit {

  storeForm: FormGroup;
  
  
  title: string ="FIND A STORE";
  stores: string[] = ['Select your city', 'Agartala','Agra','Ahemdabad'];
  
  constructor(private storesDataService: StoresDataService, private fb: FormBuilder) { 
    this.createForm();
  }
  
  createForm() {
    this.storeForm = this.fb.group({selectCity: String});
  }

  ngOnInit() {
    console.log("in store component");
    console.log(this.storesDataService.getStoresList());
    console.log(this.storeForm.value + this.storeForm.status);
  }
  
  findStore(city: string) {
    this.storesDataService.getStoresList();
    console.log(this.storeForm.get('selectCity').value + this.storeForm.status);
  }

}
