import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AddUserRequest} from '../models/AddUser-request.model';
import {AddUserResponse} from '../models/AddUserResponse.model';

@Injectable({
  providedIn: 'root'
})
export class addUserService {
  private apiUrl = 'http://localhost:8083/api/user'; // Spring Boot endpoint

  constructor(private http: HttpClient) {}

  adduser(credentials: AddUserRequest): Observable<AddUserResponse>
  { const headers = new HttpHeaders(
    {'Content-Type': 'application/json',
      'Accept': 'application/json'});

    return this.http.post<AddUserResponse>(`${this.apiUrl}`, credentials,{ headers });

  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    const token = localStorage.getItem('token'); // assuming token is stored here
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post(`${this.apiUrl}/profile-picture`, formData, { headers });
  }

  getProfilePicture(): Observable<Blob> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token') // adjust how you store token
    );

    return this.http.get('http://localhost:8083/api/user/profile-picture', {
      headers,
      responseType: 'blob' // we expect a binary image
    });
  }
}
