import { Injectable } from '@angular/core';
import {Employee} from './employee.model';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
@Injectable()
export class EmployeeService {
  employee : Employee = new Employee();
  employeeList : AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  addEmployee(addedEmployee: Employee){
    this.employeeList.push({
      Name: addedEmployee.Name,
      Position: addedEmployee.Position,
      Office: addedEmployee.Office,
      Salary: addedEmployee.Salary
    });
  }

  updateEmployee(emp: Employee){
    this.employeeList.update(emp.$key, {
      Name : emp.Name,
      Position : emp.Position,
      Office : emp.Office,
      Salary : emp.Salary
    });
  }

  deleteEmployee($key:string){
    this.employeeList.remove($key);
  }
}
