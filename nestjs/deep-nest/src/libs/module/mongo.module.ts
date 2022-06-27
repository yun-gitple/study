import { Global, Module } from '@nestjs/common';
import { MongoDB } from './mongo.service';

@Global(
@Module({
  providers: [MongoDB],
  exports: [MongoDB],
})
export class MongoModule {}
