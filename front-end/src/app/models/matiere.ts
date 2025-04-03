export interface MatiereBackend {
  id: number;
  nomMatiere: string;
  departement: string;
  specialite: string;
  niveau: string;
  groupe: string;
  enseignantId: number;
  enseignantNom: string;
  enseignantEmail: string;
  recu?: boolean;
  valide?: boolean;
}

export interface EnseignantInMatiere {
  id: number;
  nom: string;
  email: string;
}

export interface MatiereFrontend {
  id: number;
  nomMatiere: string;
  departement: string;
  specialite: string;
  niveau: string;
  groupe: string;
  enseignant: EnseignantInMatiere;
  recu: boolean;
  valide: boolean;
}


