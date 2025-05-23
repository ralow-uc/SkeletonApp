import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
  standalone: false,
})
export class LoginPage {
  email = "";
  password = "";

  constructor() {}

  onSubmit() {
    console.log("Email:", this.email);
    console.log("Password:", this.password);
  }
}
