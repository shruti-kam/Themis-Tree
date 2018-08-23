import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { StoresComponent } from './stores/stores.component';
import { AppRoutingModule } from './app-routing.module';
import { StoresDataService } from './services/stores-data.service';

@NgModule({
  declarations: [
    AppComponent,
    JewelleryComponent,
    StoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [StoresDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
