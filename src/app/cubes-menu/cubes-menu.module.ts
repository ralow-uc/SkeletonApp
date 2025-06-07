import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";

import { IonicModule } from "@ionic/angular";

import { CubesMenuPageRoutingModule } from "./cubes-menu-routing.module";

import { CubesMenuPage } from "./cubes-menu.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CubesMenuPageRoutingModule,
    MatToolbarModule,
    MatCardModule,
  ],
  declarations: [CubesMenuPage],
})
export class CubesMenuPageModule {}
