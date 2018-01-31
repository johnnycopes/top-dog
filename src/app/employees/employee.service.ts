import { Injectable, EventEmitter } from '@angular/core';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee = new EventEmitter<Employee>();

  private employees: Employee[] = [
    new Employee('John Coppola', 'New York', 10),
    new Employee('Juan Cortes', 'Atlanta', 11),
    new Employee('Jesslyn Landgren', 'Atlanta', 11)
  ];
  constructor() { }

  getEmployees() {
    return this.employees.slice();
  }

  getEmployee(index: number) {
    return this.employees[index];
  }
}
