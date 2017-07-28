import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription"
import {EmployeeService} from "../services/employee.service"

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
  public _id: number;
  public _subscription: Subscription;
  public employee: any = null;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private employeeService: EmployeeService) {

  }

  ngOnInit() {

    this._subscription = this.activateRoute.params.subscribe(params => {
      this._id = params['id'];
    })

    this.employeeService.GetSingleEmployee(this._id).subscribe((res: any) => {
      this.employee = res
    }, err => {
      console.log(err)
    })

  }

  GoToEmployee() {
    this.router.navigate(['employees'])
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
