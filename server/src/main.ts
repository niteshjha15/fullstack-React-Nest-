import { NestFactory } from '@nestjs/core';
import { GreetModule } from './greetModule/greet.module';

async function bootstrap() {
  const app = await NestFactory.create(GreetModule);
  await app.listen(8000);
}
bootstrap();
