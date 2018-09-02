import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';

const route: Routes = [
                       {path: 'store', component: StoreListComponent },
                       {path: 'store/:city', component: StoreDetailComponent}
                       ];

@NgModule({
  imports: [
    CommonModule
    RouterModule.forChild(route);
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class StoreRoutingModule { }
