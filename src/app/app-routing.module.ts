import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreListComponent } from './store-locator/store-list/store-list.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
            { path: '', redirectTo: '', pathMatch: 'full'}
						];

@NgModule({
   imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }