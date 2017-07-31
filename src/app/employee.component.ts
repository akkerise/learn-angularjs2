import {Component, OnInit} from "@angular/core"
import {EmployeeService} from "./services/employee.service"
import {Router, ActivatedRoute} from "@angular/router"
import {RecyleService} from "./services/recyle.service";

@Component({
  selector: 'employee-list',
  templateUrl: './employee.component.html'
})

export class EmployeeListComponent implements OnInit {
  public employees: any[]
  public pages: number[]
  public currentPage: number
  public keyword: string

  constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute, private recyleService: RecyleService) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentPage = params['pageNumber'] || 1
    })
    this.employeeService.GetList().subscribe((response: any) => {
      this.employees = response
      console.log(response)
    }, error => {
      console.log(error)
    })
    this.pages = [1, 2, 3, 4, 5]
    this.LoadData();
  }

  Delete = (id: number) => {
    this.employeeService.DeleteSingle(id).subscribe((res: any) => {
      let confirmResult = confirm('Are you sure to delete this employee?')
      if (confirmResult) {
        this.LoadData()
        alert('Delete Success')
      }
    })

  }

  HandleKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.Search()
    }
  }

  LoadData = () => {
    this.employeeService.GetList().subscribe((response: any) => {
      this.employees = response
      console.log(response)
    }, error => {
      console.log(error)
    })
  }

  Search = () => {
    this.employeeService.Search(this.keyword).subscribe((response: any) => {
      this.employees = response
      console.log(response)
    }, error => {
      console.log(error)
    })
  }
}
