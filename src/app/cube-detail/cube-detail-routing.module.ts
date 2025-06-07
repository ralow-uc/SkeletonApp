import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CubeDetailPage } from './cube-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CubeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CubeDetailPageRoutingModule {}
