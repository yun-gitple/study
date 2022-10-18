import { Controller, Get } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller('axios')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('findAll')
  findAll(): Promise<any> {
    return this.appService.finaAll();
  }
}
