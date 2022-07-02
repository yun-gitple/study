import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('queue')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('jobs')
  async getJobs() {
    return this.appService.getJobs();
  }
}
