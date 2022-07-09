import { Module, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      useFactory: () => ({
        store: redisStore,
        db: 1,
        host: '127.0.0.1',
        port: 6379,
        ttl: 100, // 캐시 만료 시간입니다.(초)
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
