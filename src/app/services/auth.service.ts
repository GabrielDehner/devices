import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// private baseUrl = `http://api-devices-prod.us-east-1.elasticbeanstalk.com/`
  private baseUrl = `https://dm99al67y1u3i.cloudfront.net/`
  private isLoggedIn: boolean = false;
  private username: string = '';

  constructor(private http: HttpClient) {}

  async login({ email, password }: { email: string, password: string }) {

    const {token, user}: any =  await this.http.post<{token:string}>(`${this.baseUrl}api/users/login`, { email, password }).toPromise();
    this.isLoggedIn = true;
    localStorage.setItem('username', user.name);
    localStorage.setItem('token', token);
    return token;
  }

  logout() {
    this.isLoggedIn = false;
    this.username = '';
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  getUsername(): string {
    return this.username || localStorage.getItem('username') || '';
  }

  isLoggedInStatus(): boolean {
    return this.isLoggedIn || !!localStorage.getItem('username');
  }
}
