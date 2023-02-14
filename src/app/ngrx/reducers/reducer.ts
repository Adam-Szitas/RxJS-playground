import { combineReducers } from '@ngrx/store';
import { carReducer, CarState } from "./car/car.reducer";


export interface State {
  car: CarState
}

export const FEATURE_NAME_STATE = 'state';

export const Reducer = combineReducers<State>({
  car: carReducer
})
