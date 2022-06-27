import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogCareService } from './dog-module/dog-care-module/dogs-care.service';
import { DogModule } from './dog-module/dog.module';
import { MongoModule } from './libs/module/mongo.module';

@Module({
  imports: [DogModule],
  controllers: [AppController],
  // providers: [AppService, DogCareService],
  providers: [AppService],
})
export class AppModule {}
