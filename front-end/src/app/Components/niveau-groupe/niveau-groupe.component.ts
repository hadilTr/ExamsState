import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Role} from '../add-user/add-user.component';

export enum  Speciality {
    Mécatronique="Mécatronique",
    Informatique="Informatique",
    Infotronique= "Infotronique",
    GSIL="GSIL"
}
export enum Level {
  Premiere="Premiere",
  Deuxieme="Deuxieme",
  Troisieme="Troisieme"
}
enum Departement {
  Informatique="Informatique",
  Electrique="Electrique",
  Industriel="Industriel"
}

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

  constructor(
    private router: Router,) {

    // Convert enum to array of objects for dropdown
    this.specialities = Object.keys(Speciality).map(key => ({
      name: this.formatSpecilaityName(key),
      value: Speciality[key as keyof typeof Speciality]
    }));

    this.levels=Object.keys(Level).map(key => ({
      name:this.formatLevelName(key),
      value:Level[key as keyof typeof Level]
    }));

    this.departments=Object.keys(Departement).map(key => ({
      name:this.formatDepartmentsName(key),
      value:Departement[key as keyof typeof Departement]
    }));



  }
  // Variables pour stocker les sélections
  selectedGroupe1: Groupe | null = null;
  selectedGroupe2: Groupe | null = null;
  selectedGroupe3: Groupe | null = null;

  accederNiveau(s: string, selectedGroupe1: Groupe) {

  }
  // your-component.ts

  displayBasic: boolean = false;
  name: any;
  speciliaty: Speciality;
  specialities: any[] = [];
  level:Level;
  levels: any[] = [];
  department:Departement;
  departments:any[]=[];


  private formatSpecilaityName(specKey: string): string {
    return specKey
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }
  private formatLevelName(lvlKey: string): string {
    return lvlKey
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }
  private formatDepartmentsName(depKey: string): string {
    return depKey
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }

  saveGroup() {

  }
}
