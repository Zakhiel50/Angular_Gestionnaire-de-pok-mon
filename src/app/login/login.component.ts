import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
    ],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit{
  message: string = "Vous êtes déconnecté. user: pikachu  password: pikachu";
  name: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService,
              private router: Router
               ) { }


  ngOnInit(): void {
    this.auth = this.auth;
  }

  setMessage() {
    if(this.auth.isLoggedIn) {
      this.message = "Vous êtes connectés"
    } else {
      this.message = "Identifiant ou mot de passe incorrect."
    }
  }

  login() {
    this.message = "Tentative de connexion en cours ...";
    this.auth.login(this.name, this.password)
    .subscribe((isLoggedIn: boolean) => {
      this.setMessage();

      if(isLoggedIn) {
        this.router.navigate(["/pokemons"]);
      } else {
        this.password = ""
        this.router.navigate(["/login"]);
      }
    }) 
  }

  logout() {
    this.auth.logout();
    this.message = "Vous êtes déconnecté."
  }
}
