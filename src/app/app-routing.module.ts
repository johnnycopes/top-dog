import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { CandidatesComponent } from './candidates/candidates.component';

const ROUTES: Routes = [
  { path: 'employees/:id', component: EmployeesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'candidates/:id', component: CandidatesComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
