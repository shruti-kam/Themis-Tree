import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css']
})
export class JewelleryComponent implements OnInit {

  jewellery: string = 'Jewellery';

  constructor() { }

  ngOnInit() {
  }

}
