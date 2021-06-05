import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaburoPageRoutingModule } from './consultaburo-routing.module';

import { ConsultaburoPage } from './consultaburo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaburoPageRoutingModule
  ],
  declarations: [ConsultaburoPage]
})
export class ConsultaburoPageModule {}
