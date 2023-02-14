import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HttpService{
  private baseApi: string = 'http://localhost:3000/api/';

  constructor(private http: HttpClient){}

  public getCarList() {
    const headers = new HttpHeaders();
    headers.append('content-type', 'text/json');
    return this.http.get<any>(this.baseApi.concat('cars'), {headers});
  }
}
