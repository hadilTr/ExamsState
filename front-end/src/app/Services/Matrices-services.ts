import { Injectable } from '@angular/core';

interface InventoryStatus {
  label: string;
  value: string;
}

export interface Matrice {
  id?: string;
  nomProf?: string;
  nomMatiereGrpA?: string;
  nomMatiereGrpB?: string;
  nomMatiereGrpC?: string;
  nomMatiereGrpD?: string;
  etat?: string;
}

@Injectable()
export class MatricesServices {
  getProductsData() {
    return [
      {
        id: '1000',
        nomProf: 'Iyed',
        nomMatiereGrpA: 'Circuits',
        nomMatiereGrpB: 'Circuits',
        nomMatiereGrpC: 'Circuits',
        nomMatiereGrpD: 'Circuits',
        etat: "remis",
      },
      {
        id: '1000',
        nomProf: 'Hamda',
        nomMatiereGrpA: 'Analyse Numerique1',
        nomMatiereGrpB: 'Analyse Numerique1',
        nomMatiereGrpC: 'Analyse Numerique1',
        nomMatiereGrpD: 'Analyse Numerique1',
        etat: "remis",
      },

    ];
  }


}
