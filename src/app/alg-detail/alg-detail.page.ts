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
  originalAlgs: string[] = [];
  favoriteAlg: string | null = null;

  @ViewChild("formEl") formEl!: ElementRef;

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {
    this.cubeId = this.route.snapshot.paramMap.get("cubeId") || "";
    this.setId = this.route.snapshot.paramMap.get("setId") || "";
    this.algId = this.route.snapshot.paramMap.get("algId") || "";

    this.loadData();
  }

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    const key = this.getFavoriteStorageKey();
    const saved = localStorage.getItem(key);
    this.favoriteAlg = saved ?? null;
  }

  toggleFavorite(alg: string) {
    const favKey = `alg-fav-${this.cubeId}-${this.setId}-${this.algId}`;

    if (this.favoriteAlg === alg) {
      this.favoriteAlg = null;
      localStorage.removeItem(favKey);
    } else {
      this.favoriteAlg = alg;
      localStorage.setItem(favKey, alg);
    }
  }

  isFavorite(alg: string): boolean {
    return this.favoriteAlg === alg;
  }

  getFavoriteStorageKey(): string {
    return `alg-fav-${this.cubeId}-${this.setId}-${this.algId}`;
  }

  loadData() {
    const allCubes = history.state.allCubes;

    if (allCubes?.[this.cubeId]) {
      const set = allCubes[this.cubeId].sets.find(
        (s: any) => s.id === this.setId
      );
      const caseData = set?.cases.find((a: any) => a.id === this.algId);

      if (caseData) {
        this.originalAlgs = [...caseData.algs]; // guarda los originales
        const storageKey = `alg-custom-${this.cubeId}-${this.setId}-${this.algId}`;
        const saved = localStorage.getItem(storageKey);
        const customAlgs: string[] = saved ? JSON.parse(saved) : [];

        this.algData = {
          ...caseData,
          algs: [...customAlgs, ...this.originalAlgs],
        };
      }
    }
    this.loadFavorites();
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

    const storageKey = `alg-custom-${this.cubeId}-${this.setId}-${this.algId}`;
    const existing = localStorage.getItem(storageKey);
    const customAlgs: string[] = existing ? JSON.parse(existing) : [];

    customAlgs.unshift(this.newAlg.trim());
    localStorage.setItem(storageKey, JSON.stringify(customAlgs));

    this.algData.algs = [...customAlgs, ...this.originalAlgs];
    this.newAlg = "";
  }

  isCustomAlg(alg: string): boolean {
    const storageKey = `alg-custom-${this.cubeId}-${this.setId}-${this.algId}`;
    const saved = localStorage.getItem(storageKey);
    if (!saved) return false;

    try {
      const customAlgs: string[] = JSON.parse(saved);
      return customAlgs.includes(alg);
    } catch {
      return false;
    }
  }

  removeAlgorithm(alg: string) {
    const storageKey = `alg-custom-${this.cubeId}-${this.setId}-${this.algId}`;
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;

    let customAlgs: string[] = JSON.parse(saved);
    customAlgs = customAlgs.filter((a) => a !== alg);
    localStorage.setItem(storageKey, JSON.stringify(customAlgs));

    this.algData.algs = [...customAlgs, ...this.originalAlgs];
  }

  isString(value: any): value is string {
    return typeof value === "string";
  }

  isArray(value: any): value is string[] {
    return Array.isArray(value);
  }
}
