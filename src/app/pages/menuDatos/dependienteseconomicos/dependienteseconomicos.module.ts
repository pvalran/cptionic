import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DependienteseconomicosPageRoutingModule } from './dependienteseconomicos-routing.module';

import { DependienteseconomicosPage } from './dependienteseconomicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DependienteseconomicosPageRoutingModule
  ],
  declarations: [DependienteseconomicosPage]
})
export class DependienteseconomicosPageModule {}
