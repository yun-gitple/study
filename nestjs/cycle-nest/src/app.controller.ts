import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Cat } from './dto/cat';
import { CreateCatDto } from './dto/create-cat.dto';
import { DogCareService } from './libs/module/dogs-care.service';
import { DogService } from './module/dog.service';

@Controller('app')
export class AppController {
  constructor(
    private appService: AppService,
    private dogService: DogService,
    private dogCareService: DogCareService,
  ) {}

  @Get()
  getAll(@Req() req: JSON): Promise<Cat[]> {
    console.log('~~ req', req);
    return this.appService.finaAll();
  }

  @Get('dog')
  getDog(@Req() req: JSON) {
    console.log('~~ req', req);
    // return this.dogService.getDog();
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async create(@Body() createCatDto: CreateCatDto): Promise<any> {
    console.log('~~~ create cat, ', createCatDto);
    return this.appService.create(createCatDto);
  }

  @Get(':id/name')
  findOne(@Param() params: any): string {
    console.log('~~~ params, ', params);
    return `this action returns ${params.id} cat`;
  }

  @Get('go')
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<string[]> {
    return ['jongha', 'dohyeon'];
  }

  @Get('dog/breed')
  @HttpCode(HttpStatus.OK)
  async getBreed() {
    return this.dogCareService.getBreed();
  }

  @Post('dog/vaccine')
  setVaccineCount(@Body() count: any) {
    console.log('~~~~ set count: ', count.count);
    this.dogCareService.addVaccineCount(count.count);
  }

  @Get('dog/vaccine')
  getVaccineCount(): number {
    const count = this.dogCareService.getVaccineCount();
    console.log('~~~~ get count: ', count);
    return count;
  }
}
