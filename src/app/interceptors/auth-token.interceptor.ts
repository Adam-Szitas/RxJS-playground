import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

const AUTHORIZATION_HEADER = 'Authorization';
const AUTHORIZATION_TOKEN = 'auth-token';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor{
  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem(AUTHORIZATION_TOKEN);
      if(token){
        req = req.clone({
          setHeaders: {
            Authorization: 'Bearer ' + token
          }
        })
      }

      return next.handle(req).pipe(
        map((event: HttpEvent<any>) => {
          if(event instanceof HttpResponse){
            const httpResponse: HttpResponse<any> = event as HttpResponse<any>;
            const headers: HttpHeaders = httpResponse.headers;

            const authHeader = headers.get(AUTHORIZATION_HEADER);
            if(authHeader) {
              localStorage.setItem(AUTHORIZATION_TOKEN, authHeader)
            }
          }
          return event;
        })
      )
  }
}
