import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { AlgDetailPageRoutingModule } from "./alg-detail-routing.module";

import { AlgDetailPage } from "./alg-detail.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlgDetailPageRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [AlgDetailPage],
})
export class AlgDetailPageModule {}
