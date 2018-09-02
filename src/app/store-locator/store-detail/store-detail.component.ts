import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

  city = "Agartala";
  storeAdd = "Store Address";
  viewDirections = "View Directions on the map";
  appointment = "book an appointment";
  
  constructor() { }

  ngOnInit() {
  }

}
