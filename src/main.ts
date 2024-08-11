import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 8443;

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-telegram-auth'],
  });
  

  await app.listen(port);

  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();

