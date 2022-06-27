import { Module } from '@nestjs/common';
import { captureRejections } from 'events';
import { MongoModule } from 'src/libs/module/mongo.module';
import { MongoDB } from 'src/libs/module/mongo.service';
import { DogCareModule } from './dog-care-module/dog-care.module';
import { DogCareService } from './dog-care-module/dogs-care.service';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

@Module({
  imports: [DogCareModule, MongoModule],
  controllers: [DogController],
  providers: [DogService],
  // exports: [DogService],
  exports: [DogService, DogCareModule],
})
export class DogModule {}
