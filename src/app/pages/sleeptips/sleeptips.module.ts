import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleeptipsPageRoutingModule } from './sleeptips-routing.module';

import { SleeptipsPage } from './sleeptips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleeptipsPageRoutingModule
  ],
  declarations: [SleeptipsPage]
})
export class SleeptipsPageModule {}
