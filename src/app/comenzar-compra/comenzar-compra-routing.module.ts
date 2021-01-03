import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComenzarCompraPage } from './comenzar-compra.page';

const routes: Routes = [
  {
    path: '',
    component: ComenzarCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComenzarCompraPageRoutingModule {}
