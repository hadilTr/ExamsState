import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatiereBackend, MatiereFrontend} from '../models/matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private apiUrl = 'http://localhost:8083/api/matieres';

  constructor(private http: HttpClient) { }

  saveMatiere(matiereData: any): Observable<any> {
    return this.http.post(this.apiUrl, matiereData);
  }

  /*getAllMatieres(): Observable<any> {
    return this.http.get(this.apiUrl);
  }*/
  getAllMatieres(): Observable<MatiereBackend[]> {
    return this.http.get<MatiereBackend[]>(this.apiUrl);
  }

  getMatieresByEnseignant(enseignantId: number): Observable<MatiereFrontend[]> {
    return this.http.get<MatiereFrontend[]>(`${this.apiUrl}/enseignant/${enseignantId}`);
  }

  getMatieresByFilters(departement: string, specialite: string, niveau: string, groupe: string): Observable<MatiereFrontend[]> {
    return this.http.get<MatiereFrontend[]>(`${this.apiUrl}/filter`, {
      params: {
        departement,
        specialite,
        niveau,
        groupe
      }
    });
  }

  updateMatiereStatus(id: number, recu: boolean, valide: boolean): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/status`, { recu, valide });
  }
}
