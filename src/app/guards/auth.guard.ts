import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const isLoggedIn = !!localStorage.getItem('loggedUser');
    if (isLoggedIn) {
      return true;
    } else {
      alert('Debes iniciar sesión para acceder a esta sección.');
      return this.router.parseUrl('/login');
    }
  }
}