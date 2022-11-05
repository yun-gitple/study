import { Logger, Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ApiConfigService } from './api-config.service';
import { createPrismaRedisCache } from '@bd/middlewares/prisma.redis.middleware';
import { fieldEncryptionMiddleware } from 'prisma-field-encryption';
import Redis from 'ioredis';
import { CACHED_MODELS } from './prisma.common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  static isConstructed = false;
  private readonly logger = new Logger(PrismaService.name);
  constructor(public readonly configService: ApiConfigService) {
    super({
      log: ['info', 'warn', 'error']
    });
    if (PrismaService.isConstructed) {
      this.logger.warn('NOT SINGLETON');
    }
    PrismaService.isConstructed = true;
  }
  private redis = new Redis(JSON.parse(process.env.REDIS_OPTIONS)); // FIXME: try catch

  async onModuleInit() {
    await this.$connect();
    await this.middleware();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
  async middleware() {
    const redis = this.redis;
    this.$use(
      createPrismaRedisCache({
        models: CACHED_MODELS,
        cacheTime: 30, // 30 sec
        redis,
        excludeCacheMethods: ['findUnique'] // default cached methods: findUnique,findFirst,findMany,queryRaw,aggregate,count,groupBy
      })
    );

    this.$use(fieldEncryptionMiddleware());
  }
}
