import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { EmployeeService } from './shared/employee.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers : [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private http: Http,
              private service: EmployeeService) { }
  ngOnInit() {
  }

}
