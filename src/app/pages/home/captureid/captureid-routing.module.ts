import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaptureidPage } from './captureid.page';

const routes: Routes = [
  {
    path: '',
    component: CaptureidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaptureidPageRoutingModule {}
