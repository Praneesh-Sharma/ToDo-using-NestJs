import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { count } from 'console';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  
  const config = new DocumentBuilder()
  .setTitle('Todo REST API')
  .setDescription("A rest api to list user's todos/tasks, authorixation umplement using JWT token. The API is moded using NestJS.")
  .setVersion('1.0')
  .addBearerAuth()
  .addTag('todos')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)


  await app.listen(3000);
}
bootstrap();
