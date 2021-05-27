import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConyugePage } from './conyuge.page';

const routes: Routes = [
  {
    path: '',
    component: ConyugePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConyugePageRoutingModule {}
