import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatricesComponent} from './Components/matrices/matrices.component';
import {GroupComponent} from './Components/group/group.component';

const routes: Routes = [
  {path: '', redirectTo: 'matrices', pathMatch: 'full'},
  {path: 'matrices' , component: MatricesComponent},
  {path: 'group' , component: GroupComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
