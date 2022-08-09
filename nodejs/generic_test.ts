export class CacheService<T> {

  private data:Array<T> = new Array<T>();

  get(): T | undefined {
    return this.data.pop();
  }

  async set(item: T) {
    this.data.push(item);
  }
}

export class StackService {

  private data:Array<any> = new Array();

  get<T>(): T | undefined {
    return this.data.pop();
  }

  async set<T>(item: T) {
    this.data.push(item);
  }
}

b();

function a() {
  const cache: CacheService<string> = new CacheService();
  cache.set('generic test');
  console.log('~~~ ', cache.get());
}

function b() {
  const stack: StackService = new StackService();
  stack.set<string>('generic test');
  console.log('~~~ ', stack.get<string>());
}