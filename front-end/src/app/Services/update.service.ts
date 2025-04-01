import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
export interface Update {
  level?: string;
  subject?: string;
  validation_status?: string;
  verification_status?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UpdateService  {
  private apiUrl = '';
  constructor(private http:HttpClient) {}

  getHistoriques():Observable<Update[]>{
    return this.http.get<Update[]>(this.apiUrl);
  }
}
