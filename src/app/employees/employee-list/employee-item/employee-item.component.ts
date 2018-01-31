import { Component, OnInit, Input } from '@angular/core';

import { Employee } from '../../employee.model';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  onSelect() {
    this.employeeService.selectedEmployee.emit(this.employee);
  }

}
