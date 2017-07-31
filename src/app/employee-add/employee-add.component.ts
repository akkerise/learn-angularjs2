import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {EmployeeService} from "../services/employee.service";
import {Subscription} from 'rxjs'


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  private _id: number
  private subscription: Subscription
  private employee: any

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employee = {}
  }

  AddForm = () => {
    this.employeeService.AddSingle(this.employee).subscribe(res => {
      console.log(this.employee)
      if (res) {
        alert('Add Success')
        this.GotoEmployee()
      }
      alert('Add Success')
      this.GotoEmployee()
    })
  }
  GotoEmployee = () => {
    this.router.navigate(['employees'])
  }


}
