import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  id: number;
  editMode = false;
  employee: Employee;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.editMode = !!params.id;
          this.editMode ? this.getEmployee(this.id) : this.initAddForm();
        }
      );
  }

  getEmployee(id: number): void {
    this.employeeService.getEmployee(this.id)
      .subscribe(employee => {
        this.employee = employee;
        this.initEditForm();
      );
  }

  private initAddForm() {
    this.editForm = new FormGroup({
      'name': new FormControl(''),
      'jobTitle': new FormControl(''),
      'location': new FormControl(''),
      'email': new FormControl(''),
      'phoneNumber': new FormControl(''),
      'linkedIn': new FormControl(''),
      'skills': new FormArray([])
    });
  }

  private initEditForm() {
    this.editForm = new FormGroup({
      'name': new FormControl(this.employee.name),
      'jobTitle': new FormControl(this.employee.jobTitle),
      'location': new FormControl(this.employee.location),
      'email': new FormControl(this.employee.email),
      'phoneNumber': new FormControl(this.employee.phoneNumber),
      'linkedIn': new FormControl(this.employee.linkedIn),
      'skills': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.editForm);
  }

  onAddSkill() {
    const control = new FormControl('');
    (<FormArray>this.editForm.get('skills')).push(control);
  }

}
