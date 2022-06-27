import { Controller, Get } from '@nestjs/common';
import { MdAppService } from './md-app.service';

@Controller('md')
export class AppController {
  constructor(private readonly appService: MdAppService) {}

  @Get()
  getMdHello(): string {
    return this.appService.getHello();
  }
}
