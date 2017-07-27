import {Component, OnInit} from "@angular/core"
import {EmployeeService} from "./services/employee.service"

@Component({
  selector: 'employee-list',
  template: `
    <table class="table">
      <thead>
      <tr>
        <td>Id</td>
        <td>Created At</td>
        <td>Name</td>
        <td>Age</td>
        <td>Status</td>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let employee of employees">
        <td>{{employee.id}}</td>
        <td>{{employee.createdAt | date:'yyyy-MM-dd HH:mm:ss Z'}}</td>
        <td>{{employee.name}}</td>
        <td>{{employee.age}}</td>
        <td>{{employee.status}}</td>
      </tr>
      </tbody>
    </table>
  `
})

export class EmployeeListComponent implements OnInit {
  public employees: any[];

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeService.GetList().subscribe((response: any) => {
      this.employees = response
    }, error => {
      console.log(error)
    });
  }
}
