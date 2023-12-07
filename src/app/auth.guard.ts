import { Injectable } from '@angular/core';
import { CanActivate , Router  } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService, 
    private router: Router
    ) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      console.log("Le guard a été appelé !");
      return true;
    }
    // Utilise le service Router pour naviguer vers la page de connexion
    console.log("introuvable")
    this.router.navigate(["/login"]);
    // Retourne false pour empêcher l'accès à la route
    return false;
  }
}