import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TimerPage } from "../timer/timer.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";

import { Tab2PageRoutingModule } from "./tab2-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
  ],
  declarations: [TimerPage],
})
export class Tab2PageModule {}
