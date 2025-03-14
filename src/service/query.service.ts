import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient) {}

  post(url: string, body: Object): Observable<any> {
    return this.http.post(url, body);
  }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }
}
