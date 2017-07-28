import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription"
import {Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.css']
})
export class EmployeeOverviewComponent implements OnInit, OnDestroy {
  public parentRouterId: number
  public sub: Subscription

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activateRoute.parent.params.subscribe(params => {
      this.parentRouterId = params['id']
      alert(this.parentRouterId)
    })
  }


  ngOnDestroy() {

  }
}
