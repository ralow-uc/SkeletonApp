import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CubeSQLiteService } from "src/services/sqlite-db.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
  standalone: false,
})
export class RegisterPage {
  username = "";
  password = "";
  nombre = "";
  apellido = "";
  cuboFavorito = "";
  fechaNacimiento: string | null = null;

  cubosDisponibles = [{ name: "3x3" }, { name: "Square-1" }];

  constructor(private router: Router, private dbService: CubeSQLiteService) {}

  async ngOnInit() {
    await this.dbService.initDB();
  }

  async onSubmit() {
    if (
      !this.username ||
      !this.password ||
      !this.nombre ||
      !this.apellido ||
      !this.cuboFavorito ||
      !this.fechaNacimiento
    ) {
      alert("Completa todos los campos");
      return;
    }

    const success = await this.dbService.registerUser({
      username: this.username,
      password: this.password,
      nombre: this.nombre,
      apellido: this.apellido,
      cuboFavorito: this.cuboFavorito,
      fechaNacimiento: this.fechaNacimiento,
    });

    if (success) {
      alert("Cuenta creada. Ahora puedes iniciar sesión.");
      this.router.navigate(["/login"]);
    } else {
      alert("Error: usuario ya registrado o fallo al guardar.");
    }
  }

  volverLogin() {
    this.router.navigate(["/login"]);
  }
}
