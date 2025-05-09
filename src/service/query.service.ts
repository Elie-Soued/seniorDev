import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  type loginPayload,
  registerPayload,
  addNewTaskPayload,
  updatedTask,
  authHeader,
} from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient) {}

  post(
    url: string,
    body: loginPayload | registerPayload | addNewTaskPayload,
    headers?: authHeader
  ): Observable<any> {
    return this.http.post(url, body, headers);
  }

  get(url: string, header: authHeader): Observable<any> {
    return this.http.get(url, header);
  }

  delete(url: string, header: authHeader): Observable<any> {
    return this.http.delete(url, header);
  }

  update(url: string, body: updatedTask, header: authHeader): Observable<any> {
    return this.http.put(url, body, header);
  }
}
