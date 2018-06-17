import { Injectable } from '@angular/core';
import {Employee} from './employee.model';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { DatePipe } from '@angular/common';
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
    //alert(new DatePipe("en-US").transform(addedEmployee.DoB, 'dd/MM/yyyy'));
    this.employeeList.push({
      Name: addedEmployee.Name,
      Position: addedEmployee.Position,
      Office: addedEmployee.Office,
      Salary: addedEmployee.Salary,
      DoB :  new DatePipe("en-US").transform(addedEmployee.DoB, 'dd/MM/yyyy') ,
      NIC : addedEmployee.NIC,
      Email : addedEmployee.Email
    });
  }

  updateEmployee(emp: Employee){
    this.employeeList.update(emp.$key, {
      Name : emp.Name,
      Position : emp.Position,
      Office : emp.Office,
      Salary : emp.Salary,
      DoB : new DatePipe("en-US").transform(emp.DoB, 'dd/MM/yyyy'),
      NIC : emp.NIC,
      Email : emp.Email
    });
  }

  deleteEmployee($key:string){
    this.employeeList.remove($key);
  }
}
