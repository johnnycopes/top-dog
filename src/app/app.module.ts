import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeItemComponent } from './employees/employee-list/employee-item/employee-item.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateListComponent } from './candidates/candidate-list/candidate-list.component';
import { CandidateItemComponent } from './candidates/candidate-list/candidate-item/candidate-item.component';
import { CandidateDetailsComponent } from './candidates/candidate-details/candidate-details.component';
import { HomeComponent } from './home/home.component';


const ROUTES: Routes = [
  { path: 'employees/:id', component: EmployeesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'candidates/:id', component: CandidatesComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeeDetailsComponent,
    CandidatesComponent,
    CandidateListComponent,
    CandidateItemComponent,
    CandidateDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
