import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoDB {
  private mongoUrl: string;

  constructor() {
    console.log('~~~~ create mongoDB');
    this.mongoUrl = process.env.MONGO_URL;
  }

  async insertTransaction(data: any) {
    console.log('~~~ insert trans:', data);
  }
}
