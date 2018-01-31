import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [ EmployeeService ]
})
export class EmployeesComponent implements OnInit {
  selectedEmployee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.employeeService.selectedEmployee
      .subscribe(
        (employee: Employee) => {
          this.selectedEmployee = employee;
        }
      );
  }

}
