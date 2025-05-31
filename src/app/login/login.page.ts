import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(private router: Router, private renderer: Renderer2) {}

  onSubmit() {
    const usernameValid = /^[a-zA-Z0-9]{3,8}$/.test(this.username);
    const passwordValid = /^[0-9]{4}$/.test(this.password);

    if (usernameValid && passwordValid) {
      // Aplica animación antes de navegar
      const element = this.loginWrapperRef.nativeElement;

      this.renderer.setStyle(element, "transition", "transform 0.5s ease");
      this.renderer.setStyle(element, "transform", "translateX(-100vw)");

      setTimeout(() => {
        this.router.navigate(["/tabs/tab1"], {
          state: { username: this.username },
          replaceUrl: true,
        });
      }, 500); // esperar a que termine la animación
    } else {
      alert("Usuario o contraseña inválidos");
    }
  }
}
