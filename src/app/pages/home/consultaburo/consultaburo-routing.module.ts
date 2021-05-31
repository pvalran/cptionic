import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaburoPage } from './consultaburo.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaburoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaburoPageRoutingModule {}
