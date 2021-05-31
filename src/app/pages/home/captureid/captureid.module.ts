import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaptureidPageRoutingModule } from './captureid-routing.module';

import { CaptureidPage } from './captureid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaptureidPageRoutingModule
  ],
  declarations: [CaptureidPage]
})
export class CaptureidPageModule {}
