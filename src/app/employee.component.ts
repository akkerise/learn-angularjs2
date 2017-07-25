import {Component, OnInit} from "@angular/core"
import {EmployeeService} from "./services/employee.service"

@Component({
  selector: 'employee-list',
  templateUrl: './employee.component.html'
})

export class EmployeeComponent implements OnInit {
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
