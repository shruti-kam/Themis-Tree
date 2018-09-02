import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { StoreLocatorModule } from './store-locator/store-locator.module';

import { AppComponent } from './app.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { AppRoutingModule } from './app-routing.module';
import { StoresDataService } from './services/stores-data.service';

@NgModule({
  declarations: [
    AppComponent,
    JewelleryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreLocatorModule,
    AppRoutingModule,
  ],
  providers: [StoresDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
