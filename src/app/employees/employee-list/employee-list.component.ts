import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [
    new Employee('John Coppola', 'New York', 10),
    new Employee('Juan Cortes', 'Atlanta', 11),
    new Employee('Jesslyn Landgren', 'Atlanta', 11)
  ];

  constructor() { }

  ngOnInit() {
  }

}
