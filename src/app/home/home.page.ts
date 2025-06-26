import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
  OnInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { CubeSQLiteService } from "src/services/sqlite-db.service";
import { UserStoreService } from "src/services/user-store.service";

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
    private dbService: CubeSQLiteService,
    private userStore: UserStoreService
  ) {}

  async ngOnInit() {
    await this.dbService.initDB();

    this.userStore.user$.subscribe((user) => {
      if (user) {
        this.username = user.username;
        this.nombre = user.nombre;
        this.apellido = user.apellido;
        this.cuboFavorito = user.cuboFavorito;
        this.fechaNacimiento = user.fechaNacimiento;
      }
    });
  }

  ngAfterViewInit(): void {
    this.animarTitulo();
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

  limpiar() {
    this.nombre = "";
    this.apellido = "";
    this.cuboFavorito = "";
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
      this.userStore.setUser({
        username: this.username,
        nombre: this.nombre,
        apellido: this.apellido,
        cuboFavorito: this.cuboFavorito,
        fechaNacimiento: this.fechaNacimiento || "",
      });
      alert("Cambios guardados correctamente");
    } else {
      alert("Hubo un error al guardar los cambios");
    }
  }

  async cerrarSesion() {
    const confirmar = confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (!confirmar) return;

    this.userStore.clearUser();
    localStorage.removeItem("loggedUser");
    await this.dbService.closeConnection();
    this.router.navigate(["/login"], { replaceUrl: true });
  }
}
