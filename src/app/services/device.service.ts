import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  // private baseUrl = `http://api-devices-prod.us-east-1.elasticbeanstalk.com/`
  private baseUrl = `https://dm99al67y1u3i.cloudfront.net/`

  constructor(private http: HttpClient) {}

  async getDeviceData(deviceId = 2) {
    const token  = (await this.getToken(deviceId).toPromise())?.token

    // Crear las cabeceras con el Bearer Token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    // Realizar la solicitud GET con las cabeceras
    return await this.http.get(`${this.baseUrl}api/historical/device/${deviceId}`, { headers }).toPromise();
  }

  getToken(deviceId: number): Observable<{token:string}>{
    return this.http.post<{token:string}>(`${this.baseUrl}api/devices/login`, { device_id: deviceId });
  }
}
