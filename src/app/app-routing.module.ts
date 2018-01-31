import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeStartComponent } from './employees/employee-start/employee-start.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { CandidatesComponent } from './candidates/candidates.component';

const ROUTES: Routes = [
  { path: 'employees', component: EmployeesComponent, children: [
    { path: 'new', component: EmployeeEditComponent },
    { path: ':id/edit', component: EmployeeEditComponent },
    { path: ':id', component: EmployeeDetailsComponent },
    { path: '', component: EmployeeStartComponent }
  ] },
  { path: 'candidates', component: CandidatesComponent, children: [
    { path: ':id', component: CandidatesComponent }
  ] },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
