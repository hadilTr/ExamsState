import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Définition de l'interface pour un groupe
export interface Group {
  id: string;
  code: string;
  description: string;
  image: string;

  quantity: number;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor() {}

  getGroups(): Observable<Group[]> {
    // Données simulées en JSON
    const mockData: Group[] = [
      {
        id: '1',
        code: 'f230fh0g3',
        description: 'Product Description',
        image: 'assets/images/groupA.png', // Mise à jour du chemin de l'image
        quantity: 24,
        rating: 5
      },
      {
        id: '2',
        code: 'f230fh0g3',
        description: 'Product Description',
        image: 'assets/images/groupB.png', // Mise à jour du chemin de l'image
        quantity: 24,
        rating: 5
      },
      {
        id: '2',
        code: 'f230fh0g3',
        description: 'Product Description',
        image: 'assets/images/groupC.png', // Mise à jour du chemin de l'image
        quantity: 24,
        rating: 5
      },
      {
        id: '2',
        code: 'f230fh0g3',
        description: 'Product Description',
        image: 'assets/images/groupD.png', // Mise à jour du chemin de l'image
        quantity: 24,
        rating: 5
      }


    ];

    // Retourne les données sous forme d'Observable
    return of(mockData);
  }
}
