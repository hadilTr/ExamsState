import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:8082/api/auth/login'; // Spring Boot endpoint

  constructor(private http: HttpClient) {}

  login(nom: string, mdp: string): Observable<any> {
    const body = { nom, mdp };
    return this.http.post(this.loginUrl, body);
  }
}
