import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { DogCareService } from 'src/libs/module/dogs-care.service';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(
    private dogService: DogService,
    private dogCareService: DogCareService,
  ) {}

  @Get()
  getAll(@Req() req: JSON) {
    console.log('~~ req', req);
    return this.dogService.getDog();
  }

  @Get('breed')
  getBreed() {
    return this.dogCareService.getBreed();
  }

  @Post('vaccine')
  setVaccineCount(@Body() vaccine: any) {
    this.dogCareService.addVaccineCount(vaccine.count);
  }

  @Get('vaccine')
  getVaccineCount() {
    return this.dogCareService.getVaccineCount();
  }
}
