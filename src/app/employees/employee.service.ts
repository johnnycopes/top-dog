import { Injectable, EventEmitter } from '@angular/core';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee = new EventEmitter<Employee>();

  private employees: Employee[] = [
    new Employee('1', 'John Coppola', 'New York', 10),
    new Employee('2', 'Juan Cortes', 'Atlanta', 11),
    new Employee('3', 'Jesslyn Landgren', 'Atlanta', 11)
  ];
  constructor() { }

  getEmployees() {
    return this.employees.slice();
  }
}
