import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private apiUrl = 'http://localhost:8082/api/matieres';

  constructor(private http: HttpClient) { }

  saveMatiere(matiereData: any): Observable<any> {
    return this.http.post(this.apiUrl, matiereData);
  }

  getAllMatieres(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Optionnel: Pour filtrer par enseignant
  getMatieresByEnseignant(enseignantId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/enseignant/${enseignantId}`);
  }
}
