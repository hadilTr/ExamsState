import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEnseignantComponent} from './Components/add-enseignant/add-enseignant.component';

const routes: Routes = [

  { path: 'addenseignants', component: AddEnseignantComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

