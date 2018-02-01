import { Injectable, EventEmitter } from '@angular/core';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee = new EventEmitter<Employee>();

  private employees: Employee[] = [
    new Employee('John Coppola', 'New York', 'Software Engineer', [], [], [], [], { coreType: 'ENFJ', coreTypeName: 'Protagonist' }),
    new Employee('Jesslyn Landgren', 'Atlanta', 'Software Engineer', [], [], [], [], { coreType: 'ISFJ', coreTypeName: 'Defender' }),
    new Employee('Elijah Allstrom-Luttrell', 'Atlanta', 'Software Engineer', [], [], [], [], { coreType: 'INFP', coreTypeName: 'Mediator' })
  ];
  constructor() { }

  getEmployees() {
    return this.employees.slice();
  }

  getEmployee(index: number) {
    return this.employees[index];
  }
}
