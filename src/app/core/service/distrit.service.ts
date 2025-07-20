import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DistritService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getByCityId(cityId: string) {
    return this.http.get<any[]>(`${this.baseUrl}/districts?cityId=${cityId}`);
  }
}
