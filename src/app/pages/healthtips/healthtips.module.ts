import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthtipsPageRoutingModule } from './healthtips-routing.module';

import { HealthtipsPage } from './healthtips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthtipsPageRoutingModule
  ],
  declarations: [HealthtipsPage]
})
export class HealthtipsPageModule {}
