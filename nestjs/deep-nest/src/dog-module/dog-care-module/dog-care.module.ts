import { Module } from '@nestjs/common';
import { DogCareService } from './dogs-care.service';

@Module({
  imports: [],
  providers: [DogCareService],
  exports: [DogCareService],
})
export class DogCareModule {}
