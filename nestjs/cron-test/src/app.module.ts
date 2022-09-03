import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bull';
import { Cron2Module } from './cron2/cron-debug.module';
import { TasksService } from './task.service';

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
      name: 'batch',
    }),
    Cron2Module,
  ],
  controllers: [AppController],
  providers: [AppService, TasksService],
})
export class AppModule {}
