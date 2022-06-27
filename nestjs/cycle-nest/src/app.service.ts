import { Injectable } from '@nestjs/common';
import { Cat } from './dto/cat';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class AppService {
  private readonly cats: Cat[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  create(catDto: CreateCatDto) {
    // this.cats.push(new Cat(catDto));
    this.cats.push(catDto);
  }

  async finaAll(): Promise<Cat[]> {
    return this.cats;
  }
}
