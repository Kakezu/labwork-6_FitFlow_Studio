import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleeptipsPage } from './sleeptips.page';

const routes: Routes = [
  {
    path: '',
    component: SleeptipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleeptipsPageRoutingModule {}
