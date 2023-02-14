import { createSelector } from '@ngrx/store';
import { CarState } from '../../reducers/car/car.reducer';
import { State } from '../../reducers/reducer';
import { getState } from '../selector';


const getCarState = createSelector(getState, (state: State): CarState => state['car']);

const getCarList = createSelector(getCarState, (state: CarState): CarState => state);

export const CarSelectors = {
  getCarList
}
