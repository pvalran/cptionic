import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionalcuestionariomedicoPage } from './adicionalcuestionariomedico.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionalcuestionariomedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionalcuestionariomedicoPageRoutingModule {}
