import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuestionariomedicoPage } from './cuestionariomedico.page';

const routes: Routes = [
  {
    path: '',
    component: CuestionariomedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuestionariomedicoPageRoutingModule {}
