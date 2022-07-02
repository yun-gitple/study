import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cron')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('job')
  startEvent(@Body() job: any): boolean {
    return this.appService.executeJob(job?.name);
  }
}
