import {Routes, RouterModule} from "@angular/router"
import {HomeComponent} from './home.component'
import {EmployeeListComponent} from "./employee.component"
import {NotfoundComponent} from "./notfound/notfound.component"
import {EmployeeDetailComponent} from "./employee-detail/employee-detail.component"
import {EmployeeOverviewComponent} from "./employee-overview/employee-overview.component"
import {EmployeeProjectsComponent} from "./employee-projects/employee-projects.component"
import {LoginComponent} from "./login/login.component"
import {CheckLoginGuard} from "../guards/check-login.guard"
import {CheckSaveFormGuard} from "./services/check-save-form.guard"
import {EmployeeEditComponent} from "./employee-edit/employee-edit.component"
import {EmployeeAddComponent} from "./employee-add/employee-add.component"

const routing: Routes = [
  {path: "", component: HomeComponent},
  {path: "employees", component: EmployeeListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'employee-add', component: EmployeeAddComponent},
  {
    path: 'employee-detail/:id', component: EmployeeDetailComponent, canDeactivate: [CheckSaveFormGuard],
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: EmployeeOverviewComponent},
      {path: 'projects', component: EmployeeProjectsComponent}
    ]
  },
  {path: 'employee-edit/:id', component: EmployeeEditComponent},

  {path: "**", component: NotfoundComponent}
]

export const appRoutes = RouterModule.forRoot(routing)
