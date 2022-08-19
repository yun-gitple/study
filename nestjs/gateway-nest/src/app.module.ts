import { Module } from '@nestjs/common';
import { EventsModule } from './gateway/events.module';

@Module({
  imports: [EventsModule],
})
export class AppModule {}
