import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuproductosPageRoutingModule } from './menuproductos-routing.module';

import { MenuproductosPage } from './menuproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuproductosPageRoutingModule
  ],
  declarations: [MenuproductosPage]
})
export class MenuproductosPageModule {}
