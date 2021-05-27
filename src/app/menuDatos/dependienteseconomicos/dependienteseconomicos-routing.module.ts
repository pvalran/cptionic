import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DependienteseconomicosPage } from './dependienteseconomicos.page';

const routes: Routes = [
  {
    path: '',
    component: DependienteseconomicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependienteseconomicosPageRoutingModule {}
