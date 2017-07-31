import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {EmployeeDetailComponent} from "../employee-detail/employee-detail.component";


@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<EmployeeDetailComponent> {
  canDeactivate(component: EmployeeDetailComponent) {
    alert('You can not leave this page without saving data')
    return false;
  }
}
