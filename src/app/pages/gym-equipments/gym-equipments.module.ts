import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymEquipmentsPageRoutingModule } from './gym-equipments-routing.module';

import { GymEquipmentsPage } from './gym-equipments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymEquipmentsPageRoutingModule
  ],
  declarations: [GymEquipmentsPage]
})
export class GymEquipmentsPageModule {}
