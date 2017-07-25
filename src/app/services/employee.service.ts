import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
@Injectable()

export class EmployeeService {
  private apiUrl = "https://5975b324385c4b0011fe0823.mockapi.io/api/employees";

  constructor(private _http: Http) {

  }

  GetList = (): Observable<any[]> => {
    return this._http.get(this.apiUrl).map((response: Response) => response.json())
  }
}
