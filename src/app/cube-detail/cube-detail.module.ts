import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
//mat-card
import { MatCardModule } from '@angular/material/card';

import { IonicModule } from '@ionic/angular';

import { CubeDetailPageRoutingModule } from './cube-detail-routing.module';

import { CubeDetailPage } from './cube-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CubeDetailPageRoutingModule,
    MatToolbarModule,
    MatCardModule
  ],
  declarations: [CubeDetailPage]
})
export class CubeDetailPageModule {}
