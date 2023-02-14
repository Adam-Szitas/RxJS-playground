import { Action, createReducer, on } from '@ngrx/store';
import { CarActions } from '../../actions/car/car.actions';

export interface CarState{
  id: number | null;
  brand: string | null;
  color: string | null;
}

const initialState: CarState = {
  id: null,
  brand: null,
  color: null,
}

const reducer = createReducer(
  initialState,
  on(CarActions.insert, (state: CarState, { carDetails }) => {
    return {
      ...state,
      carDetails
    }
  })
)

export function carReducer(state: CarState | undefined, action: Action): CarState {
  return reducer(state, action);
}
