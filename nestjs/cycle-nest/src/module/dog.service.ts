import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  @Get()
  getDog(): string {
    return 'Hello Podol!';
  }
}
