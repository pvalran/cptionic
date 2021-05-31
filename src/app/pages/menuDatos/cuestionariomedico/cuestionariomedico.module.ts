import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuestionariomedicoPageRoutingModule } from './cuestionariomedico-routing.module';

import { CuestionariomedicoPage } from './cuestionariomedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuestionariomedicoPageRoutingModule
  ],
  declarations: [CuestionariomedicoPage]
})
export class CuestionariomedicoPageModule {}
