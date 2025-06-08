import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-cube-set-detail",
  templateUrl: "./cube-set-detail.page.html",
  styleUrls: ["./cube-set-detail.page.scss"],
  standalone: false,
})
export class CubeSetDetailPage {
  cubeId: string = "";
  setId: string = "";
  setData: any;
  allCubes: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.cubeId = this.route.snapshot.paramMap.get("cubeId") || "";
    this.setId = this.route.snapshot.paramMap.get("setId") || "";

    this.allCubes = history.state.allCubes;

    if (this.allCubes?.[this.cubeId]) {
      const sets = this.allCubes[this.cubeId].sets;
      this.setData = sets.find((s: any) => s.id === this.setId);
    }
  }

  goToAlgorithm(algId: string) {
    this.router.navigate(["/tabs", "tab1", this.cubeId, this.setId, algId], {
      state: {
        allCubes: this.allCubes,
      },
    });
  }

  getPreviewAlg(caseId: string, fallbackAlgs: string[]): string {
    const favKey = `alg-fav-${this.cubeId}-${this.setId}-${caseId}`;
    const favSaved = localStorage.getItem(favKey);
    if (favSaved) {
      return favSaved;
    }

    const customKey = `alg-custom-${this.cubeId}-${this.setId}-${caseId}`;
    const customSaved = localStorage.getItem(customKey);

    if (customSaved) {
      try {
        const customAlgs: string[] = JSON.parse(customSaved);
        if (customAlgs.length > 0) {
          return customAlgs[0];
        }
      } catch (e) {
        console.warn("Error al parsear customAlgs", e);
      }
    }

    return fallbackAlgs[0] || "";
  }

  isString(value: any): value is string {
    return typeof value === "string";
  }

  isArray(value: any): value is string[] {
    return Array.isArray(value);
  }
}
