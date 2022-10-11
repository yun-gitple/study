import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { Tasks2Service } from './task-debug.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'batch-debug',
    }),
  ],
  providers: [Tasks2Service],
})
export class Cron2Module {}
