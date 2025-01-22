import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  async onLogin() {
    const token = await this.authService.login({ email: this.username, password: this.password });
    if (token) {
      this.router.navigate(['']);
    } else {
      alert('Invalid username or password');
    }
  }
}
