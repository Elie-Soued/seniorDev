import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { type updatedTask, authHeader, task } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient) {}

  post<TResponse, TBody>(
    url: string,
    body: TBody,
    headers?: authHeader
  ): Observable<TResponse> {
    return this.http.post<TResponse>(url, body, headers);
  }

  get(url: string, header: authHeader): Observable<task[]> {
    return this.http.get<task[]>(url, header);
  }

  delete(url: string, header: authHeader): Observable<task[]> {
    return this.http.delete<task[]>(url, header);
  }

  update(
    url: string,
    body: updatedTask,
    header: authHeader
  ): Observable<task[]> {
    return this.http.put<task[]>(url, body, header);
  }
}
