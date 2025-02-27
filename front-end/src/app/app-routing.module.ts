import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './Components/layout/component/layout/layout.component';
import { DashboardComponent} from './Components/pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path:'dashboard',component: DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
