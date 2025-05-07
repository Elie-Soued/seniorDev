import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient) {}

  post(url: string, body: Object, options: any): Observable<any> {
    return this.http.post(url, body, options);
  }

  get(url: string, headers: any): Observable<any> {
    return this.http.get(url, headers);
  }

  delete(url: string, headers: any): Observable<any> {
    return this.http.delete(url, headers);
  }

  update(url: string, body: Object, options: any): Observable<any> {
    return this.http.put(url, body, options);
  }
}
