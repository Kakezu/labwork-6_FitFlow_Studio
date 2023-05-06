import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmenitiesPage } from './amenities.page';

const routes: Routes = [
  {
    path: '',
    component: AmenitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmenitiesPageRoutingModule {}
