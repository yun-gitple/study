import { Injectable } from '@nestjs/common';

@Injectable()
export class MdAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
