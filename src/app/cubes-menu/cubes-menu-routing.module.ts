import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CubesMenuPage } from './cubes-menu.page';

const routes: Routes = [
  {
    path: '',
    component: CubesMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CubesMenuPageRoutingModule {}
