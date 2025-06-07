import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CubeSetDetailPage } from './cube-set-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CubeSetDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CubeSetDetailPageRoutingModule {}
