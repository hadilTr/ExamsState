import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnseignantService} from '../../Services/enseignant.service';
import { Enseignant} from '../../models/enseignant.model';

@Component({
  selector: 'add-enseignant',
  standalone:false,
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {

  enseignantForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private enseignantService: EnseignantService
  ) {
    // Initialisation de enseignantForm dans le constructeur
    this.enseignantForm = this.fb.group({
      nom: ['', Validators.required],
     // prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      departement: ['', Validators.required],
      specialite: ['', Validators.required],
      niveau: ['', Validators.required],
      groupe: ['', Validators.required],
      matieres: ['', Validators.required],
      //dateRecrutement: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.enseignantForm.valid) {
      const newEnseignant: Enseignant = this.enseignantForm.value;
      newEnseignant.matieres = this.enseignantForm.value.matieres.split(',').map((m: string) => m.trim());

      this.enseignantService.createEnseignant(newEnseignant).subscribe({
        next: () => alert('Enseignant ajouté avec succès !'),
        error: (err) => {
          alert('Erreur : ' + err.message);
          console.error(err);
        }
      });
    }
  }
}
