import {Routes, RouterModule} from "@angular/router"
import {HomeComponent} from './home.component'
import {EmployeeListComponent} from "./employee.component"
import {NotfoundComponent} from "./notfound/notfound.component"
import {EmployeeDetailComponent} from "./employee-detail/employee-detail.component"
import {EmployeeOverviewComponent} from "./employee-overview/employee-overview.component"
import {EmployeeProjectsComponent} from "./employee-projects/employee-projects.component"

const routing: Routes = [
  {path: "", component: HomeComponent},
  {path: "employees", component: EmployeeListComponent},
  {
    path: 'employee-detail/:id', component: EmployeeDetailComponent,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: EmployeeOverviewComponent},
      {path: 'projects', component: EmployeeProjectsComponent}
    ]
  },
  {path: "**", component: NotfoundComponent}
]

export const appRoutes = RouterModule.forRoot(routing)
