import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../cubes-menu/cubes-menu.module").then(
                (m) => m.CubesMenuPageModule
              ),
          },
          {
            path: ":cubeId",
            loadChildren: () =>
              import("../cube-detail/cube-detail.module").then(
                (m) => m.CubeDetailPageModule
              ),
          },
          {
            path: ":cubeId/:setId",
            loadChildren: () =>
              import("../cube-set-detail/cube-set-detail.module").then(
                (m) => m.CubeSetDetailPageModule
              ),
          },
          {
            path: ":cubeId/:setId/:algId",
            loadChildren: () =>
              import("../alg-detail/alg-detail.module").then(
                (m) => m.AlgDetailPageModule
              ),
          },
        ],
      },
      {
        path: "tab2",
        loadChildren: () =>
          import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
      },
      {
        path: "tab3",
        loadChildren: () =>
          import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
      },
      {
        path: "",
        redirectTo: "tab1",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
