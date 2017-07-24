import {Injectable} from '@angular/core';

@Injectable()

export class EmployeeService {
  GetList = () => {
    let employees: any[] = [
      {Id: 1, Name: 'Nguyen Van A'},
      {Id: 2, Name: 'Nguyen Van B'},
      {Id: 3, Name: 'Nguyen Van C'},
      {Id: 4, Name: 'Nguyen Van E'},
      {Id: 5, Name: 'Nguyen Van F'}
    ]
    return employees
  }
}
