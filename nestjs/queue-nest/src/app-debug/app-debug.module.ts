import { Module } from '@nestjs/common';
import { AppDebugService } from './app-debug.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
      defaultJobOptions: {
        attempts: 1,
        backoff: 2000,
        removeOnComplete: true,
      },
    }),
    BullModule.registerQueue({
      name: 'batch-debug',
    }),
  ],
  providers: [AppDebugService],
})
export class AppDebugModule {}
