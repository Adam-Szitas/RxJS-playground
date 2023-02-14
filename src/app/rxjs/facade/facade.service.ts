import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/internal/Observable";
import { CarActions } from "src/app/ngrx/actions/car/car.actions";
import { CarState } from "src/app/ngrx/reducers/car/car.reducer";
import { CarSelectors } from "src/app/ngrx/selectors/car/car.selectors";


@Injectable({providedIn: 'root'})
export class FacadeService{

  constructor(private store$: Store){}

  public get carList(){
    return {
      get$: ((): Observable<CarState> => this.store$.select(CarSelectors.getCarList))(),
      insert: (carList: CarState) => this.store$.dispatch(CarActions.insert({ carDetails: carList })),
    }
  }

}
