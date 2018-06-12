import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import {AngularFireList} from 'angularfire2/database';
import {Employee} from '../shared/employee.model';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList : Employee[];
  constructor(private service : EmployeeService) { }
  
  ngOnInit() {
    var x =  this.service.getData(); 
    
    x.snapshotChanges().subscribe(item =>{
      this.employeeList = [];
      item.forEach(ele =>{
        var data = ele.payload.toJSON();
        data["$key"] = ele.key;
        this.employeeList.push(data as Employee);
      });
    });

  }

  onClickEmployee(employee: Employee){
    // alert(employee.Name);
    this.service.employee = Object.assign({}, employee);
  }
}
