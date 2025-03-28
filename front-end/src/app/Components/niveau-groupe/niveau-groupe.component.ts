import { Component } from '@angular/core';

class Groupe {
}

@Component({
  selector: 'app-niveau-groupe',
  standalone: false,
  templateUrl: './niveau-groupe.component.html',
  styleUrl: './niveau-groupe.component.css'
})
export class NiveauGroupeComponent {
  groupes: Groupe[] = [
    { id: 1, name: 'Groupe A' },
    { id: 2, name: 'Groupe B' },
    { id: 3, name: 'Groupe C' },
    { id: 4, name: 'Groupe D' }
  ];

  // Variables pour stocker les sélections
  selectedGroupe1: Groupe | null = null;
  selectedGroupe2: Groupe | null = null;
  selectedGroupe3: Groupe | null = null;

  accederNiveau(s: string, selectedGroupe1: Groupe) {

  }
}
