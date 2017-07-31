import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {ActivatedRoute} from "@angular/router"
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()

export class EmployeeService {
  private apiUrl = "https://5975b324385c4b0011fe0823.mockapi.io/api/employees";

  constructor(private _http: Http, private activateRoute: ActivatedRoute) {

  }

  GetList = (): Observable<any[]> => {
    return this._http.get(this.apiUrl).map((response: Response) => response.json())
  }

  GetSingleEmployee = (id: number): Observable<any> => {
    return this._http.get(this.apiUrl + "/" + id).map((response: Response) => response.json())
  }

  PutSingle(id: number, data: any): Observable<any> {
    return this._http.put(this.apiUrl + "/" + id, data).map((response: Response) => {
      response.json()
    })
  }

  AddSingle(data: any): Observable<any> {
    return this._http.post(this.apiUrl, data).map((response: Response) => {
      response.json()
    })
  }

  DeleteSingle(id: number): Observable<any> {
    return this._http.delete(this.apiUrl + "/" + id).map((res: Response) => {
      res.json()
    })
  }

  Search(keyword: string): Observable<any> {
    return this._http.get(this.apiUrl + "?search=" + keyword).map((res: Response) => {
      console.log(this.apiUrl + "?search=" + keyword)
      res.json()
    })
  }

}
