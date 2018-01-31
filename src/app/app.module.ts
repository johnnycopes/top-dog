import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeItemComponent } from './employees/employee-list/employee-item/employee-item.component';
import { EmployeeStartComponent } from './employees/employee-start/employee-start.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateListComponent } from './candidates/candidate-list/candidate-list.component';
import { CandidateItemComponent } from './candidates/candidate-list/candidate-item/candidate-item.component';
import { CandidateDetailsComponent } from './candidates/candidate-details/candidate-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeStartComponent,
    EmployeeEditComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    CandidatesComponent,
    CandidateListComponent,
    CandidateItemComponent,
    CandidateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
