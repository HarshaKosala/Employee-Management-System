import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import {AngularFirestore} from 'angularfire2/firestore';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import {DatepickerModule} from 'ngx-date-picker';
import {MatTableModule, MatFormFieldModule, MatPaginatorModule,MatInputModule } from '@angular/material';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationModule } from 'ngx-bootstrap';
import { NgProgressModule } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {} from '../environments/environment';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFireDatabaseModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    //DatepickerModule
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    PaginationModule.forRoot(),
    NgProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
