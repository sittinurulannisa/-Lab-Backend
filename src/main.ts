import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ VALIDATION PIPE GLOBAL
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // ✅ SWAGGER
  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('Median API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // ✅ PRISMA EXCEPTION FILTER
app.useGlobalFilters(new PrismaClientExceptionFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();