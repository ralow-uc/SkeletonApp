import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { CubeSQLiteService } from "src/services/sqlite-db.service";
import { UserStoreService } from "src/services/user-store.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
  standalone: false,
})
export class LoginPage {
  username = "";
  password = "";

  @ViewChild("loginWrapper", { read: ElementRef }) loginWrapperRef!: ElementRef;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private dbService: CubeSQLiteService,
    private userStore: UserStoreService
  ) {}

  async ngOnInit() {
    await this.dbService.initDB();
  }

  async onSubmit() {
    const valid = await this.dbService.validateLogin(
      this.username,
      this.password
    );

    if (valid) {
      const userData = await this.dbService.getUserByUsername(this.username);

      if (userData) {
        this.userStore.setUser({
          username: this.username,
          ...userData,
        });

        localStorage.setItem("loggedUser", this.username);

        const element = this.loginWrapperRef.nativeElement;
        this.renderer.setStyle(element, "transition", "transform 0.5s ease");
        this.renderer.setStyle(element, "transform", "translateX(-100vw)");

        setTimeout(() => {
          this.router.navigate(["/tabs/tab1"], {
            replaceUrl: true,
          });
        }, 500);
      } else {
        alert("No se encontraron datos del usuario.");
      }
    } else {
      alert("Usuario o contraseña inválidos");
    }
  }

  goToRegister() {
    this.router.navigate(["/register"]);
  }
}
