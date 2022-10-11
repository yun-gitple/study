import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { AppDebugModule } from './app-debug/app-debug.module';

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
      name: 'batch',
    }),
    AppDebugModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
