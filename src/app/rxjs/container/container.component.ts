import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { CarState } from "src/app/ngrx/reducers/car/car.reducer";
import { FacadeService } from "../facade/facade.service";


@Component({
  selector: 'container',
  templateUrl: './container.component.html'
})
export class ContainerComponent{

  constructor(private facadeService: FacadeService){}

  @Input()
  public carList$: Observable<CarState> = this.facadeService.carList.get$;


  // Emitting new values to state
  public onCarInsert(car: CarState): void{
    this.facadeService.carList.insert(car);
  }

}
