import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from "@angular/router"
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {

  }
    Login = (value: any) => {
    console.log(value);
    if (value.username === 'admin' && value.password === '123') {
      this.loginService.SetLogin(true);
      this.router.navigate(['/'])
    }
  }


  ngOnDestroy() {

  }

}
