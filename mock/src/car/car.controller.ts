import { Controller, Get, Post, Body } from '@nestjs/common';
import { Car } from 'src/types/car.interface';
import { CarService } from './car.service';

@Controller('cars')
export class CarController{
  constructor(private carService: CarService){}

  @Get()
  public getCars(): Car[]{
    return this.carService.getCars();
  }

  @Post()
  public addCar(@Body('newCar') newCar: Car): void{
    this.carService.addCars(newCar);
  }
}
