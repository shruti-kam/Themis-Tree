import { Component } from '@angular/core';
import { JewelleryComponent } from './jewellery/jewellery.component';

import { StoresDataService } from './services/stores-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StoresDataService],

})
export class AppComponent {
  title = 'app works!';
  logo = 'assets/logo.png';
  
  ghScheme: String = 'Golden Harvest Scheme';
  appointment: String = 'Book an Appointment';
  stores: String = 'Store Locator';
  
  jewellery = 'Jewellery';
  collections = 'Collections';
  rivaah = 'Rivaah';
  insideT = 'Inside Tanishq';
  stories = 'Tanishq Stories';
  gift = 'Gifting';
  mia = 'Mia';
  diamonds = 'Diamonds';
  search = 'Search';
  
  constructor(storesDataService: StoresDataService) {
    console.log(storesDataService);
  }
  
  
}
