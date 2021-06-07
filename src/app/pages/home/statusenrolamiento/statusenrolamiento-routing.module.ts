import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusenrolamientoPage } from './statusenrolamiento.page';

const routes: Routes = [
  {
    path: '',
    component: StatusenrolamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusenrolamientoPageRoutingModule {}
