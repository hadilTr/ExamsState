import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AddUserRequest} from '../models/AddUser-request.model';
import {AddUserResponse} from '../models/AddUserResponse.model';

@Injectable({
  providedIn: 'root'
})
export class addUserService {
  private apiUrl = 'http://localhost:8082/api/api/user'; // Spring Boot endpoint

  constructor(private http: HttpClient) {}

  adduser(credentials: AddUserRequest): Observable<AddUserResponse> {
    return this.http.post<AddUserResponse>(`${this.apiUrl}`, credentials);

  }
}
