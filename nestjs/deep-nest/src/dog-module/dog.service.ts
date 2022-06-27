import { Get, Injectable } from '@nestjs/common';
import { MongoDB } from 'src/libs/module/mongo.service';

@Injectable()
export class DogService {

  constructor(private mongo:MongoDB) {

  }

  getDog(): string {
    return 'Hello Podol!';
  }
}
