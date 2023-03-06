import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { Languages } from "../types/language/language.types";


@Injectable()
export class LanguageInterceptor implements HttpInterceptor{

  constructor(private translateService: TranslateService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(req.url.startsWith('/app/')) {
      if(!this.translateService.currentLang){
        throw new Error('Hi it\'s Language Interceptor I\'ve got information for you, currentLanguage must have a value!');
      }
      req = req.clone({
        setHeaders: {
          lang: this.translateService.currentLang ?? Languages.EN
        }
      })
    }
    return next.handle(req);
  }
}
