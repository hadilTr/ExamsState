import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEnseignantComponent} from './Components/add-enseignant/add-enseignant.component';
import {AddMatiereComponent} from './Components/add-matiere/add-matiere.component';
import {ListMatieresComponent} from './Components/list-matieres/list-matieres.component';

const routes: Routes = [

  { path: '', redirectTo: 'add-enseignant', pathMatch: 'full' },

  { path: 'add-enseignant', component: AddEnseignantComponent },

  { path: 'add-matiere', component: AddMatiereComponent },

  { path: 'list-matiere', component: ListMatieresComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

