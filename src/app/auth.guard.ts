import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard = () => {
  const authService = inject(AuthService)
  const router = inject(Router)
  
    if (authService.isLoggedIn) {
      console.log("Le guard a été appelé !");
      return true;
    }
    // Utilise le service Router pour naviguer vers la page de connexion
    console.log("introuvable")
    router.navigate(["/login"]);
    // Retourne false pour empêcher l'accès à la route
    return false;
  }

