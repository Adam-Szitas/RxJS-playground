import { Car } from '../types/car.interface';

export class CarModel implements Car {
  constructor(
    public id,
    public brand,
    public color
  ){}
}
