import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";

import { AlgDetailPageRoutingModule } from "./alg-detail-routing.module";

import { AlgDetailPage } from "./alg-detail.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlgDetailPageRoutingModule,
    MatToolbarModule,
    MatCardModule,
  ],
  declarations: [AlgDetailPage],
})
export class AlgDetailPageModule {}
