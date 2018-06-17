import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import {AngularFireList} from 'angularfire2/database';
import {Employee} from '../shared/employee.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList : Employee[];
  page: number = 1;
  test = [{Name:"Harsha", Position:"dfhd"}, {Name:"Harsha", Position:"dfhd"},
  {Name:"Harsha", Position:"dfhd"},{Name:"Harsha", Position:"dfhd"},
  {Name:"Harsha", Position:"dfhd"},{Name:"Harsha", Position:"dfhd"},{Name:"Harsha", Position:"dfhd"}, ]
  constructor(private service : EmployeeService,
              public ngProgress: NgProgress) {}
  paginationStart : boolean;
  ngOnInit() {
    this.paginationStart = false;
    var x =  this.service.getData(); 
    this.ngProgress.start();
    x.snapshotChanges().subscribe(item =>{
      this.employeeList = [];
      item.forEach(ele =>{
        var data = ele.payload.toJSON();
        data["$key"] = ele.key;
        //alert(data["DoB"])
        this.employeeList.push(data as Employee);
      });
      this.ngProgress.done();
      this.paginationStart = true;
      // this.dataSource = new MatTableDataSource(this.employeeList);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      //alert(this.dataSource.data[0].DoB);
    });
    
  }

  onClickEmployee(employee: Employee){
    //alert(employee.DoB);
    this.service.employee = Object.assign({}, employee);
  }
  

  // typeWord(event : any){
  //   alert(event);
  //   this.employeeList = this.employeeList.filter(event);
  // }
  //////////////////////////////////
  // displayedColumns = ['id', 'name', 'progress'];
  // dataSource: MatTableDataSource<Employee>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}
