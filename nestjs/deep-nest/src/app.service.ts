import { Injectable } from '@nestjs/common';
import { Cat } from './dto/cat';
import { CreateCatDto } from './dto/create-cat.dto';
import { MongoDB } from './libs/module/mongo.service';

@Injectable()
export class AppService {
  private readonly cats: Cat[] = [];

  constructor(private mongo: MongoDB) {
  }

  getHello(): string {
    return 'Hello World!';
  }

  create(catDto: CreateCatDto) {
    // this.cats.push(new Cat(catDto));
    this.mongo.insertTransaction('cat 1');
    this.cats.push(catDto);
  }

  async finaAll(): Promise<Cat[]> {
    return this.cats;
  }
}
