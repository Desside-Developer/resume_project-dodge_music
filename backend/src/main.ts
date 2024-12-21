import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { HttpExceptionFilter } from './common/filters/http-exception.filter';
// import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
// import { v4 as uuidv4 } from 'uuid';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use((req: Request, res: Response, next: Function) => {
  //   const requestId = uuidv4();
  //   Logger.log(`Request ID: ${requestId} | Method: ${req.method} | URL: ${req.url}`, 'Request');
  //   res.setHeader('X-Request-ID', requestId);
  //   next();
  // });

  // app.useGlobalInterceptors(new LoggingInterceptor());

  // app.enableCors({
  //   origin: process.env.CORS_ORIGIN || '*',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   allowedHeaders: 'Content-Type, Accept, Authorization',
  // });

  // app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Spotify Clone API')
    .setDescription('API for Spotify Clone')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  // console.log(`Application is running on: http://0.0.0.0:${port}`);
  Logger.log(`Application is running on: http://0.0.0.0:${port}`, 'Bootstrap');
}
bootstrap();
