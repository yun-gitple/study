import { Module } from '@nestjs/common';
import { DogCareService } from 'src/libs/module/dogs-care.service';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

@Module({
  imports: [],
  controllers: [DogController],
  providers: [DogService, DogCareService],
  exports: [DogService],
  // exports: [DogService, DogCareService],
})
export class DogModule {}
