import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConyugePageRoutingModule } from './conyuge-routing.module';

import { ConyugePage } from './conyuge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConyugePageRoutingModule
  ],
  declarations: [ConyugePage]
})
export class ConyugePageModule {}
