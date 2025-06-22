import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { CubeSQLiteService } from "src/services/sqlite-db.service";
import { OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  standalone: false,
})
export class HomePage implements OnInit, AfterViewInit {
  username = "";
  nombre = "";
  apellido = "";
  cuboFavorito = "";
  fechaNacimiento: string | null = null;

  cubosDisponibles = [{ name: "3x3" }, { name: "Square-1" }];

  @ViewChild("nombreInput", { read: ElementRef }) nombreInputRef!: ElementRef;
  @ViewChild("apellidoInput", { read: ElementRef })
  apellidoInputRef!: ElementRef;
  @ViewChild("tituloHome", { read: ElementRef }) tituloHomeRef!: ElementRef;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private dbService: CubeSQLiteService
  ) {}

  async ngOnInit() {
    await this.dbService.initDB();

    this.username = localStorage.getItem("loggedUser") || "";
    console.log("Usuario logeadoOOOOOOOOOOOO:", this.username);

    if (this.username) {
      const data = await this.dbService.getUserByUsername(this.username);
      console.log("Datos obtenidos:", data);

      if (data) {
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.cuboFavorito = data.cuboFavorito;
        this.fechaNacimiento = data.fechaNacimiento;
      }
    }
  }

  async cargarDatosUsuario() {
    if (!this.username) return;
    const data = await this.dbService.getUserByUsername(this.username);
    if (data) {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.cuboFavorito = data.cuboFavorito;
      this.fechaNacimiento = data.fechaNacimiento;
    }
  }

  animarTitulo() {
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

  ngAfterViewInit(): void {
    this.animarTitulo();
  }

  async cerrarSesion() {
    const confirmar = confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (!confirmar) return;

    this.username = "";
    this.nombre = "";
    this.apellido = "";
    this.cuboFavorito = "";
    this.fechaNacimiento = null;

    localStorage.removeItem("loggedUser");
    
    await this.dbService.closeConnection();

    this.router.navigate(["/login"], { replaceUrl: true });
  }

  animar(element: HTMLElement) {
    this.renderer.setStyle(element, "transform", "translateX(-20px)");
    this.renderer.setStyle(element, "transition", "transform 3s");
    setTimeout(() => {
      this.renderer.setStyle(element, "transform", "translateX(0)");
    }, 50);
  }

  formularioCompleto(): boolean {
    return (
      this.nombre.trim() !== "" &&
      this.apellido.trim() !== "" &&
      this.cuboFavorito !== "" &&
      this.fechaNacimiento !== null
    );
  }

  async guardarCambios() {
    if (!this.username) return;

    const success = await this.dbService.updateUser(this.username, {
      nombre: this.nombre,
      apellido: this.apellido,
      cuboFavorito: this.cuboFavorito,
      fechaNacimiento: this.fechaNacimiento || "",
    });

    if (success) {
      alert("Cambios guardados correctamente");
    } else {
      alert("Hubo un error al guardar los cambios");
    }
  }
}
