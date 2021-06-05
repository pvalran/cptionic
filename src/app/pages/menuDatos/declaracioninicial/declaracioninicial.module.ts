import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeclaracioninicialPageRoutingModule } from './declaracioninicial-routing.module';

import { DeclaracioninicialPage } from './declaracioninicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeclaracioninicialPageRoutingModule
  ],
  declarations: [DeclaracioninicialPage]
})
export class DeclaracioninicialPageModule {}
