import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListComponent } from './store-list/store-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { StoreRoutingModule } from './store-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreRoutingModule
  ],
  exports: [StoreListComponent],
  declarations: [StoreListComponent, StoreDetailComponent]
})
export class StoreLocatorModule { }