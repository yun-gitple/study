import { Get, Injectable } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Injectable()
export class DogCareService {
  private vaccineCount = 0;

  constructor() {
    console.log('~~~~ created! DogBreedService', new Error().stack);
  }

  public getBreed(): string {
    return 'Hello I am maltieze!';
  }

  public addVaccineCount(count: number) {
    console.log('~~~ 1 current count: ', this.vaccineCount, ', add count: ', count);
    this.vaccineCount += count;
    console.log('~~~ 2 current count: ', this.vaccineCount);
  }

  public getVaccineCount(): number {
    return this.vaccineCount;
  }
}
