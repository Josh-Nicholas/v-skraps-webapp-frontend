import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellRequestsService {

  constructor(private http: HttpClient) {}

  getList(data): Observable<any> {
    return this.http.post(`${environment.baseUrl}/investment/listRequests`, data);
  }

  changeStatus(data): Observable<any> {
    return this.http.post(`${environment.baseUrl}/investment/requestToggle`, data);
  }
}
