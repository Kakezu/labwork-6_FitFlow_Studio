import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthtipsPage } from './healthtips.page';

const routes: Routes = [
  {
    path: '',
    component: HealthtipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthtipsPageRoutingModule {}
