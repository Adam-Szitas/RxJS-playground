import { createAction, props } from '@ngrx/store'
import { CarState } from '../../reducers/car/car.reducer'

export const CarActions = {
  insert: createAction('[car] inserting car to store', props<{ carDetails: CarState }>())
}
