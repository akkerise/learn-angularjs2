import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {EmployeeService} from "../services/employee.service";
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit, OnDestroy {
  public _id: number
  public subscription: Subscription
  public employee: any = null

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this._id = params['id']
    })
    this.employeeService.GetSingleEmployee(this._id).subscribe(data => {
      this.employee = data
    })
  }

  GotoEmployee = () => {
    this.router.navigate(['employees'])
  }

  SaveForm = () => {
    this.employeeService.PutSingle(this._id, this.employee).subscribe(res => {
      if (res) {
        alert('Success')
        this.router.navigate(['/employees'])
      }
      console.log(res);
      this.router.navigate(['/employees'])
    })
  }

  ngOnDestroy() {

  }

}
