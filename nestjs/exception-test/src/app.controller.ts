import { Controller, Get, HttpException, HttpStatus, NotImplementedException, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { MyExceptionFilter } from './filter/my-exception.filter';

@Controller('except')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  @UseFilters(MyExceptionFilter)
  testException(): string {
    throw new NotImplementedException();
    // throw new HttpException('Forbiddend by jongha', HttpStatus.FORBIDDEN);
  }
}
