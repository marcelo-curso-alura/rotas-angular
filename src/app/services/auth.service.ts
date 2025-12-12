import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAutenticated = signal<boolean>(false);

  constructor() { }

  login() {
    this.isAutenticated.set(true);
  }

  logout() {
    this.isAutenticated.set(false);
  }

  isLogged() {
    return this.isAutenticated();
  }
}
