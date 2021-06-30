import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuproductosPage } from './menuproductos.page';

const routes: Routes = [
  {
    path: '',
    component: MenuproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuproductosPageRoutingModule {}
