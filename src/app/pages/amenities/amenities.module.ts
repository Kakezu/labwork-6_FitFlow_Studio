import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmenitiesPageRoutingModule } from './amenities-routing.module';

import { AmenitiesPage } from './amenities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmenitiesPageRoutingModule
  ],
  declarations: [AmenitiesPage]
})
export class AmenitiesPageModule {}
