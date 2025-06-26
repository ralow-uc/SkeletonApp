import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface UserData {
  username: string;
  nombre: string;
  apellido: string;
  cuboFavorito: string;
  fechaNacimiento: string;
}

@Injectable({
  providedIn: "root",
})
export class UserStoreService {
  private userSubject = new BehaviorSubject<UserData | null>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: UserData) {
    this.userSubject.next(user);
  }

  clearUser() {
    this.userSubject.next(null);
  }

  getCurrentUser(): UserData | null {
    return this.userSubject.value;
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }
}
