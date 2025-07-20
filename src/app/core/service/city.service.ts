import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Specialty } from '../model/speciality.model';

@Injectable({
  providedIn: 'root',
})
export class CityService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  getAll(): Observable<Specialty[]> {
    return this.get<Specialty[]>('cities');
  }
}
