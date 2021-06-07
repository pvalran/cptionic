import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusenrolamientoPageRoutingModule } from './statusenrolamiento-routing.module';

import { StatusenrolamientoPage } from './statusenrolamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusenrolamientoPageRoutingModule
  ],
  declarations: [StatusenrolamientoPage]
})
export class StatusenrolamientoPageModule {}
