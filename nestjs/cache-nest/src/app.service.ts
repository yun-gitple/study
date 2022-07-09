import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getCache(query: any) {
    console.log('~~~ query: ', query);
    const value = await this.cacheManager.get(query.key);
    return value;
  }

  async setCache(contents: any) {
    console.log('~~~ contents: ', contents);
    await this.cacheManager.set(contents.key, contents.value, { ttl: 10 });
  }
}
