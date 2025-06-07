import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { allCubes, CubeId, CubeData } from "../data/cube-data";

@Component({
  selector: "app-cube-detail",
  templateUrl: "./cube-detail.page.html",
  styleUrls: ["./cube-detail.page.scss"],
  standalone: false,
})
export class CubeDetailPage {
  cubeId: string = "";
  cubeData: CubeData | undefined;

  allCubes = allCubes;

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get("cubeId") || "";
    this.cubeId = id;
    this.cubeData = this.allCubes[id as CubeId];
  }

  goToSet(setId: string) {
    this.router.navigate(["/tabs", "tab1", this.cubeId, setId], {
      state: { allCubes: this.allCubes },
    });
  }
}
