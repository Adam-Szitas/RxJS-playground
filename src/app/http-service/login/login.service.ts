import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "../http.service";


@Injectable({
  providedIn: 'root'
})
export class LoginService extends HttpService {

  constructor(http: HttpClient){
    super(http)
  }

  public login(): Observable<any>{
    const loginUrl: string = '';
    const body = {

    }

    return this.http.post<any>(this.baseApi.concat(loginUrl), body);
  }

  protected async updateLogs(): Promise<void> {

  }
}
