import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  API = 'https://theboningers-app.azurewebsites.net/HumanResources/Api/Employees';
  selectedEmployee = new EventEmitter<Employee>();

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.API}`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.API}/${id}`);
  }
}
