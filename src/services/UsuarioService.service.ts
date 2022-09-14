import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario.model';

const baseUrl = 'https://localhost:44301/api/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/${id}`);
  }
}
