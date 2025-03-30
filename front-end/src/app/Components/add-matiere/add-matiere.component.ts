
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatiereService} from '../../Services/matiere.service';
import { EnseignantService} from '../../Services/enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-matiere',
  standalone:false,
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.css']
})
export class AddMatiereComponent implements OnInit {
  matiereForm: FormGroup;
  enseignants: any[] = [];
  filteredEnseignants: any[] = [];

  // Listes pour les selects
  departements = ['INFORMATIQUE', 'ELECTRIQUE', 'INDUS'];
  specialites = ['INFORMATIQUE', 'MECATRONIQUE', 'INDUS', 'INFOTRONIQUE'];
  niveaux = ['NIVEAU_1', 'NIVEAU_2', 'NIVEAU_3'];
  groupes = ['Groupe_A', 'Groupe_B', 'Groupe_C', 'Groupe_D', 'Groupe_E'];

  // Notification
  showNotification = false;
  notificationMessage = '';
  isSuccess = false;

  constructor(
    private fb: FormBuilder,
    private matiereService: MatiereService,
    private enseignantService: EnseignantService,
    private router: Router
  ) {
    this.matiereForm = this.fb.group({
      nomMatiere: ['', Validators.required],
      departement: ['', Validators.required],
      specialite: ['', Validators.required],
      niveau: ['', Validators.required],
      groupe: ['', Validators.required],
      enseignantId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadEnseignants();

    // Filtrer les enseignants quand les critères changent
    this.matiereForm.valueChanges.subscribe(() => {
      this.filterEnseignants();
    });
  }

  loadEnseignants(): void {
    const { departement, specialite, niveau, groupe } = this.matiereForm.value;

    if (departement && specialite && niveau && groupe) {
      this.isLoading = true;

      this.enseignantService.getEnseignantsByFilters(
        departement.toUpperCase(), // Force uppercase pour correspondre à l'enum
        specialite.toUpperCase(),
        niveau.toUpperCase(),
        groupe
      ).subscribe({
        next: (data) => {
          console.log('Données reçues:', data);
          this.filteredEnseignants = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Erreur:', err);
          this.isLoading = false;
        }
      });
    } else {
      this.filteredEnseignants = [];
    }
  }

  filterEnseignants(): void {
    const { departement, specialite, niveau, groupe } = this.matiereForm.value;

    if (departement && specialite && niveau && groupe) {
      this.filteredEnseignants = this.enseignants.filter(ens =>
        ens.departement === departement &&
        ens.specialite === specialite &&
        ens.niveau === niveau &&
        ens.groupe === groupe
      );
    } else {
      this.filteredEnseignants = [];
    }
  }
  isLoading = false;
  isSubmitting = false; // Ajout pour gérer l'état de soumission
  onSubmit(): void {
    if (this.matiereForm.valid) {
      this.isSubmitting = true;
      this.matiereService.saveMatiere(this.matiereForm.value).subscribe({
        next: () => {
          this.showNotification = true;
          this.isSuccess = true;
          this.notificationMessage = 'Matière ajoutée avec succès!';
          this.isSubmitting = false;

          setTimeout(() => {
            this.showNotification = false;
            this.router.navigate(['/matieres']);
          }, 3000);
        },
        error: (err) => {
          this.showNotification = true;
          this.isSuccess = false;
          this.notificationMessage = 'Erreur: ' + (err.error?.message || 'Échec de l\'ajout');
          this.isSubmitting = false;

          setTimeout(() => {
            this.showNotification = false;
          }, 3000);
        }
      });
    }
  }
}
