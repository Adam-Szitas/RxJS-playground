import { Injectable, OnModuleInit } from '@nestjs/common';
import { Car } from 'src/types/car.interface';
import { CarModel } from './car.model';

@Injectable()
export class CarService implements OnModuleInit{

  private carList: CarModel[] = [];

  onModuleInit(){
    this.initializeCars()
  }

  private initializeCars(): void {
    const carList: Car[] = [
      {
        id: 1,
        brand: "Mercedes Benz",
        color: "white"
      },
      {
        id: 2,
        brand: "Audi",
        color: "blue"
      },
      {
        id: 3,
        brand: "BMW",
        color: "green"
      },
      {
        id: 4,
        brand: "Mitsubishi",
        color: "red"
      },
      {
        id: 5,
        brand: "Toyota",
        color: "grey"
      },
      {
        id: 6,
        brand: "Skoda",
        color: "red"
      }
    ];
    this.addCars(carList[0])
    this.addCars(carList[1])
    this.addCars(carList[2])
    this.addCars(carList[3])
    this.addCars(carList[4])
    this.addCars(carList[5])
  }

  public getCars(): Car[]{
    return this.carList;
  }

  public addCars(car: Car): void{
    const newCar: Car = new CarModel(car.id, car.brand, car.color);
    this.carList.push(newCar);
  }
}
