import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { allCubes } from "../data/cube-data";

@Component({
  selector: "app-cubes-menu",
  templateUrl: "./cubes-menu.page.html",
  styleUrls: ["./cubes-menu.page.scss"],
  standalone: false,
})
export class CubesMenuPage {
  cubes = Object.entries(allCubes).map(([id, data]) => ({
    id,
    ...data,
  }));

  constructor(private router: Router) {}

  goToCube(id: string) {
    this.router.navigate(["/tabs", "tab1", id]);
  }
}
