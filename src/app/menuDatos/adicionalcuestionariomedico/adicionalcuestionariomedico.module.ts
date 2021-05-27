import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionalcuestionariomedicoPageRoutingModule } from './adicionalcuestionariomedico-routing.module';

import { AdicionalcuestionariomedicoPage } from './adicionalcuestionariomedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionalcuestionariomedicoPageRoutingModule
  ],
  declarations: [AdicionalcuestionariomedicoPage]
})
export class AdicionalcuestionariomedicoPageModule {}
