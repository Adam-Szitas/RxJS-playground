import { Component, Input } from "@angular/core";
import { Car } from "src/app/types/car.interface";


@Component({
  selector: 'container',
  templateUrl: './container.component.html'
})
export class ContainerComponent{


  @Input()
  public carList: Car[] | null = null;

}
