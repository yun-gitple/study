import { Module } from '@nestjs/common';
import { AppController } from './md-app.controller';
import { MdAppService } from './md-app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MdAppService],
})
export class AppModule {}
