import { Injectable } from "@angular/core";
import { switchMap } from "rxjs";
import { HttpService } from "src/app/http-service/http.service";


@Injectable({providedIn: 'root'})
export class SwitchMapService{
  constructor(private httpService: HttpService){}

  public getCars(): any{
    return this.httpService.getCarList().pipe(
      switchMap((car) => {
        console.log(car);
        return car
      })
    ).subscribe()
  }
}
