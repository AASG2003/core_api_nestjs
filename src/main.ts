import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Delizia')
    .setDescription('APIs de la base de datos de delizi')
    .setVersion('1.0')
    .addTag('Delizia')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.enableCors();
  app.setGlobalPrefix('/api');
  await app.listen(process.env.APP_PORT ?? 4000);
}
bootstrap();
