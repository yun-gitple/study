import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyExceptionFilter } from './filter/my-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new MyExceptionFilter());

  const port = 3000;
  console.log(`start at ${port}`);
  await app.listen(port);
}
bootstrap();
