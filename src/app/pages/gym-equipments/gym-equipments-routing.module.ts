import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymEquipmentsPage } from './gym-equipments.page';

const routes: Routes = [
  {
    path: '',
    component: GymEquipmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymEquipmentsPageRoutingModule {}
