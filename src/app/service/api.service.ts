import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:3000/user/create';

  constructor(private httpClient: HttpClient) { }


  public saveData(user: any): Observable<any> {
    return this.httpClient.post<any>(this.urlApi, user);
  }

}
