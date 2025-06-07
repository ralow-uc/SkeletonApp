import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";

import { IonicModule } from "@ionic/angular";

import { CubeSetDetailPageRoutingModule } from "./cube-set-detail-routing.module";

import { CubeSetDetailPage } from "./cube-set-detail.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CubeSetDetailPageRoutingModule,
    MatToolbarModule,
    MatCardModule,
  ],
  declarations: [CubeSetDetailPage],
})
export class CubeSetDetailPageModule {}
