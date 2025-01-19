import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  // private baseUrl = `http://api-devices-prod.us-east-1.elasticbeanstalk.com/`
  private baseUrl = `http://api-devices-prod.us-east-1.elasticbeanstalk.com/`
  private apiUrl = `${this.baseUrl}api/historical/device/2`;

  constructor(private http: HttpClient) {}

  getDeviceData(): Observable<any> {
    // Definir el token de autenticación
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzM3MjY4MjYyLCJleHAiOjE3MzczNTQ2NjJ9.t6VfvAvz6D1zteMm1LTlHYUehGfjxaO7rb9Y4CtQ500';

    // Crear las cabeceras con el Bearer Token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    // Realizar la solicitud GET con las cabeceras
    return this.http.get(this.apiUrl, { headers });
  }
}
