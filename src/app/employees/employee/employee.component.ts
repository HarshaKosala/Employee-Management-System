import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  //bsValue = new Date();
  constructor(private service : EmployeeService,
              private toastr: ToastrService) { }

  ngOnInit() {
    //this.resetForm();
  }

  onSubmit(form : NgForm){  
    //alert(form.value.DoB);
    if(form.value.$key==null){
      this.service.addEmployee(form.value);
      this.toastr.success('Record Added Successfuly','Add Employee');
    }else{
      //alert(form.value.DoB);
      this.service.updateEmployee(form.value);
      this.toastr.success('Record Update Succesfully', 'Update Employee');
    }
    this.resetForm(form);
  }

  resetForm(form?: NgForm){
    console.log(form.value);
    if(form!=null){
      form.reset();
    }else{
      this.service.employee = {
        $key : '',
        Name : '',
        Position : '',
        Office : '',
        Salary : 0,
        DoB : new Date(),
        NIC : '',
        Email : ''
      }
    }
  }
  deleteEmployee(form : NgForm){
    
    this.service.deleteEmployee(form.value.$key);
    this.toastr.warning('Record Deleted Successfuly', 'Delete Employee');
   
    this.resetForm(form);
  }


}
