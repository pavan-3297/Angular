import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { EmployeeService, Employee } from '../service/employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-curd-opeartion',
  imports:[ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './curd-opeartion.component.html',
  styleUrls: ['./curd-opeartion.component.css']
})
export class CurdOpeartionComponent implements OnInit {
  employeeForm!: FormGroup;
  employeeList: Employee[] = [];
  selectedEmployeeId: number | null = null;
  isEditing = false;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', Validators.required],
      city: [''],
      state: [''],
      pinCode: [''],
      address: ['']
    });

    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employeeList = data;
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe(() => {
        this.employeeForm.reset();
        this.getEmployees();
      });
    }
  }

  onEdit(employee: Employee): void {
    this.employeeForm.patchValue(employee);
    this.selectedEmployeeId = employee.id || null;
    this.isEditing = true;
  }

  onUpdate(): void {
    if (this.employeeForm.valid && this.selectedEmployeeId !== null) {
      this.employeeService.updateEmployee(this.selectedEmployeeId, this.employeeForm.value).subscribe(() => {
        this.employeeForm.reset();
        this.isEditing = false;
        this.selectedEmployeeId = null;
        this.getEmployees();
      });
    }
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.getEmployees();
      });
    }
  }

  onReset(): void {
    this.employeeForm.reset();
    this.isEditing = false;
    this.selectedEmployeeId = null;
  }
}
