import {Routes, RouterModule} from "@angular/router"
import {HomeComponent} from './home.component'
import {EmployeeListComponent} from "./employee.component"
import {NotfoundComponent} from "./notfound/notfound.component"

const routing: Routes = [
  {path: "", component: HomeComponent},
  {path: "employees", component: EmployeeListComponent},
  {path: "**", component: NotfoundComponent}
]

export const appRoutes = RouterModule.forRoot(routing)
