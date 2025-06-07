import { ActivatedRoute } from "@angular/router";
import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";

@Component({
  selector: "app-alg-detail",
  templateUrl: "./alg-detail.page.html",
  styleUrls: ["./alg-detail.page.scss"],
  standalone: false,
})
export class AlgDetailPage {
  cubeId = "";
  setId = "";
  algId = "";
  algData: any;
  newAlg = "";
  showInput = false;

  @ViewChild("formEl") formEl!: ElementRef;

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {
    this.cubeId = this.route.snapshot.paramMap.get("cubeId") || "";
    this.setId = this.route.snapshot.paramMap.get("setId") || "";
    this.algId = this.route.snapshot.paramMap.get("algId") || "";

    this.loadData();
  }

  loadData() {
    const storageKey = `alg-${this.cubeId}-${this.setId}-${this.algId}`;
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      this.algData = JSON.parse(saved);
    } else {
      const allCubes = history.state.allCubes;

      if (allCubes?.[this.cubeId]) {
        const set = allCubes[this.cubeId].sets.find(
          (s: any) => s.id === this.setId
        );
        this.algData = set?.cases.find((a: any) => a.id === this.algId);

        localStorage.setItem(storageKey, JSON.stringify(this.algData));
      }
    }
  }

  toggleInput() {
    const form = this.formEl?.nativeElement;
    if (!form) return;

    if (!this.showInput) {
      // Mostrar con animación
      this.renderer.setStyle(form, "display", "flex");
      this.renderer.setStyle(form, "opacity", "0");
      this.renderer.setStyle(form, "transform", "scaleY(0)");
      this.renderer.setStyle(
        form,
        "transition",
        "opacity 300ms ease, transform 300ms ease"
      );

      setTimeout(() => {
        this.renderer.setStyle(form, "opacity", "1");
        this.renderer.setStyle(form, "transform", "scaleY(1)");
      });

      this.showInput = true;
    } else {
      // Ocultar con animación
      this.renderer.setStyle(form, "opacity", "0");
      this.renderer.setStyle(form, "transform", "scaleY(0)");

      setTimeout(() => {
        this.renderer.setStyle(form, "display", "none");
        this.showInput = false;
      }, 300);
    }
  }

  addAlgorithm() {
    if (!this.newAlg.trim()) return;

    this.algData.algs.unshift(this.newAlg.trim());

    const storageKey = `alg-${this.cubeId}-${this.setId}-${this.algId}`;
    localStorage.setItem(storageKey, JSON.stringify(this.algData));

    this.newAlg = "";
  }
}
