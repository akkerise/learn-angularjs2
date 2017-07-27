import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {EmployeeListComponent} from "./employee.component"
import {EmployeeService} from "./services/employee.service";
import {HttpModule} from "@angular/http";
import {HomeComponent} from './home.component'
import {appRoutes} from './app.routes';
import { FooterComponent } from './footer/footer.component';
import { FooterTopComponent } from './footer/footer-top/footer-top.component';
import { FooterMidComponent } from './footer/footer-mid/footer-mid.component';
import { FooterBotComponent } from './footer/footer-bot/footer-bot.component';
import { NotfoundComponent } from './notfound/notfound.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    FooterComponent,
    FooterTopComponent,
    FooterMidComponent,
    FooterBotComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
