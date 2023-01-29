import { Component, Input } from "@angular/core";
import { Car } from "src/app/types/car.interface";


@Component({
  selector: 'rxjs-out',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent{
  @Input()
  public carList: Car[] | null = null;
}
