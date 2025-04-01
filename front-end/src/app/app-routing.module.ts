import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './Components/layout/component/layout/layout.component';
import { DashboardComponent} from './Components/pages/dashboard/dashboard.component';
import {AddEnseignantComponent} from './Components/add-enseignant/add-enseignant.component';
import {AddMatiereComponent} from './Components/add-matiere/add-matiere.component';
import {ListMatieresComponent} from './Components/list-matieres/list-matieres.component';
import { ChartInfoComponent } from './Components/pages/Departments/dep-info/chart-info/chart-info.component';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent },
  { path:'dashboard',component: DashboardComponent},
 /* { path: '', redirectTo: 'layout', pathMatch: 'full' },*/
  { path: 'add-enseignant', component: AddEnseignantComponent },
  { path: 'add-matiere', component: AddMatiereComponent },
  { path: 'list-matiere', component: ListMatieresComponent }  ,
  { path: 'chartinfo', component: ChartInfoComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

