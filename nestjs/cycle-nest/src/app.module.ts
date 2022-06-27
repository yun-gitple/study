import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogCareService } from './libs/module/dogs-care.service';
import { DogModule } from './module/dog.module';

@Module({
  imports: [DogModule],
  controllers: [AppController],
  providers: [AppService, DogCareService],
  // providers: [AppService],
})
export class AppModule {}
