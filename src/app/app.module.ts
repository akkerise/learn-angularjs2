import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {EmployeeListComponent} from "./employee.component"
import {EmployeeService} from "./services/employee.service";
import {HttpModule} from "@angular/http";
import {HomeComponent} from './home.component'
import {appRoutes} from './app.routes';
import {FooterComponent} from './footer/footer.component';
import {FooterTopComponent} from './footer/footer-top/footer-top.component';
import {FooterMidComponent} from './footer/footer-mid/footer-mid.component';
import {FooterBotComponent} from './footer/footer-bot/footer-bot.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';
import {EmployeeOverviewComponent} from './employee-overview/employee-overview.component';
import {EmployeeProjectsComponent} from './employee-projects/employee-projects.component';
import {LoginComponent} from './login/login.component'
import {LoginService} from "./services/login.service"
import {CheckLoginGuard} from "../guards/check-login.guard"
import {CheckSaveFormGuard} from "./services/check-save-form.guard";
import {EmployeeEditComponent} from './employee-edit/employee-edit.component';
import {EmployeeAddComponent} from './employee-add/employee-add.component';
import {RecyleService} from "./services/recyle.service";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    FooterComponent,
    FooterTopComponent,
    FooterMidComponent,
    FooterBotComponent,
    NotfoundComponent,
    EmployeeOverviewComponent,
    EmployeeProjectsComponent,
    EmployeeDetailComponent,
    LoginComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [
    EmployeeService,
    LoginService,
    CheckLoginGuard,
    CheckSaveFormGuard,
    RecyleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
