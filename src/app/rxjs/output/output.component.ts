import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CarState } from "src/app/ngrx/reducers/car/car.reducer";


@Component({
  selector: 'rxjs-out',
  templateUrl: './output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./output.component.scss']
})
export class OutputComponent{
  @Input()
  public carList: CarState | undefined;
}
