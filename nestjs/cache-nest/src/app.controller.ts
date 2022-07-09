import {
  Controller,
  Get,
  Post,
  Query,
  UseInterceptors,
  CacheInterceptor,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cache')
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getCache(@Query() query: any): Promise<any> {
    return this.appService.getCache(query);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  setCache(@Body() contents: any): Promise<any> {
    return this.appService.setCache(contents);
  }
}
