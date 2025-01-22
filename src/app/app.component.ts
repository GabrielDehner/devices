import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  providers:[AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'devices';
  username: string = '';  // Aquí guardamos el nombre de usuario
  isLoggedIn: boolean = false;  // Variable para verificar si el usuario está logueado

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Actualizamos el estado de la autenticación
    this.isLoggedIn = this.authService.isLoggedInStatus();
    if (this.isLoggedIn) {
      this.username = this.authService.getUsername();
      // console.log(this.username)
    } else {
      this.router.navigate(['/login']);  // Redirigir a login si no está logueado
    }
  }

  logout() {
    // Ejecutamos el método de logout del servicio
    this.authService.logout();
    this.isLoggedIn = false;
    // Redirigimos a la página de login
    this.router.navigate(['/login']);
    
  }

  isLogged(){
    return this.authService.isLoggedInStatus();
  }

  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

  getUserName(){
    return this.authService.getUsername();
  }

}
