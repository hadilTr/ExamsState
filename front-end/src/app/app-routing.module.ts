import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/component/layout/layout.component';
import { DashboardComponent } from './Components/pages/dashboard/dashboard.component';
import { AddEnseignantComponent } from './Components/add-enseignant/add-enseignant.component';
import { AddMatiereComponent } from './Components/add-matiere/add-matiere.component';
import { ListMatieresComponent } from './Components/list-matieres/list-matieres.component';
import { ChartInfoComponent } from './Components/pages/Departments/dep-info/chart-info/chart-info.component';
import { LoginComponent } from './Components/login/login.component';
import { DepartementsComponent } from './Components/departements/departements.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { NiveauGroupeComponent } from './Components/niveau-groupe/niveau-groupe.component';
import { EnseignantListComponent } from './Components/enseignant-list/enseignant-list.component';

const routes: Routes = [
  // Public routes
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  // Admin routes
  //{ path: 'departments', component: DepartementsComponent },
  { path: 'addusers', component: AddUserComponent },
 // { path: 'niveau-groupe', component: NiveauGroupeComponent },

  // Layout and Dashboard
  { path: 'layout', component: LayoutComponent },
  { path: 'dashboard', component: DashboardComponent },

  // Other routes
  { path: 'enseignants', component: AddEnseignantComponent },

  { path: 'add-enseignant', component: AddEnseignantComponent },

  { path: 'add-matiere', component: AddMatiereComponent },
  { path: 'matieres', component: AddMatiereComponent },

  { path: 'list-matiere', component: ListMatieresComponent },
  { path: 'list-enseignants', component: EnseignantListComponent },

  { path: 'chartinfo', component: ChartInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
