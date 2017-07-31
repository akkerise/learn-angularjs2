import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {LoginService} from "../app/services/login.service";

@Injectable()
export class CheckLoginGuard implements CanActivate {

  constructor(private loginService: LoginService) {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let status = this.loginService.IsLogged();
    if (status === false) {
      alert('You don\'t have permission access to this page')
    }
    return status
  }

}
