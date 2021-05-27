import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboralesPage } from './laborales.page';

const routes: Routes = [
  {
    path: '',
    component: LaboralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboralesPageRoutingModule {}
