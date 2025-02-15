import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatricesComponent} from './Components/matrices/matrices.component';

const routes: Routes = [
  {path: '', redirectTo: 'matrices', pathMatch: 'full'},
  {path: 'matrices' , component: MatricesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
