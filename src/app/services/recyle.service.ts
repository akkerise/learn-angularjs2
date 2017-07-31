import {Injectable} from '@angular/core';
import {Router} from '@angular/router'

@Injectable()
export class RecyleService {

  constructor(private router: Router) {
  }

  BackHome() {
    this.router.navigate(['/employees'])
  }
}
