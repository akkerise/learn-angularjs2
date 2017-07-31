import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  public isLoggedIn: boolean

  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    this.isLoggedIn = this.loginService.IsLogged()
    console.log(this.isLoggedIn)
  }

  Logout = () => {
    this.loginService.SetLogin(false)
    alert('Logout Success')
  }

  ngOnDestroy() {

  }
}
