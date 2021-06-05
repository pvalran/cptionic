import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclaracioninicialPage } from './declaracioninicial.page';

const routes: Routes = [
  {
    path: '',
    component: DeclaracioninicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclaracioninicialPageRoutingModule {}
