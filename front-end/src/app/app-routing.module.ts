import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Components/login/login.component';
import { DepartementsComponent } from './Components/departements/departements.component';
import {AddUserComponent} from './Components/add-user/add-user.component';
import {NiveauGroupeComponent} from './Components/niveau-groupe/niveau-groupe.component';


const routes: Routes = [{ path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'departments', component: DepartementsComponent },
  { path: 'addusers', component: AddUserComponent },
  { path: 'niveau-groupe', component: NiveauGroupeComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
