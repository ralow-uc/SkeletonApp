import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  standalone: false,
})
export class HomePage implements AfterViewInit {
  username = "";
  nombre = "";
  apellido = "";
  nivel = "";
  fechaNacimiento: string | null = null;

  @ViewChild("nombreInput", { read: ElementRef }) nombreInputRef!: ElementRef;
  @ViewChild("apellidoInput", { read: ElementRef })
  apellidoInputRef!: ElementRef;
  @ViewChild("tituloHome", { read: ElementRef }) tituloHomeRef!: ElementRef;

  constructor(private router: Router, private renderer: Renderer2) {
    const nav = this.router.getCurrentNavigation();
    this.username = nav?.extras.state?.["username"] || "";
  }

  nivelesEducacion: string[] = [
    "Educación básica",
    "Educación media",
    "Técnico profesional",
    "Universitaria",
    "Postgrado",
  ];

  ngAfterViewInit(): void {
    const el = this.tituloHomeRef.nativeElement;
    this.renderer.setStyle(el, "opacity", "0");
    this.renderer.setStyle(el, "transform", "translateY(-20px)");
    this.renderer.setStyle(
      el,
      "transition",
      "opacity 1s ease, transform 1s ease"
    );

    setTimeout(() => {
      this.renderer.setStyle(el, "opacity", "1");
      this.renderer.setStyle(el, "transform", "translateY(0)");
    }, 100);
  }

  limpiar() {
    this.nombre = "";
    this.apellido = "";
    this.nivel = "";
    this.fechaNacimiento = null;

    this.animar(this.nombreInputRef.nativeElement);
    this.animar(this.apellidoInputRef.nativeElement);
  }

  animar(element: HTMLElement) {
    this.renderer.setStyle(element, "transform", "translateX(-20px)");
    this.renderer.setStyle(element, "transition", "transform 3s");
    setTimeout(() => {
      this.renderer.setStyle(element, "transform", "translateX(0)");
    }, 50);
  }

  mostrar() {
    alert(`Nombre: ${this.nombre} ${this.apellido}`);
  }
}
