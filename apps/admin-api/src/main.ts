import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  const globalPrefix = 'api';
  const port = config.get('ADMIN_API_PORT') || 3333;

  app.setGlobalPrefix(globalPrefix);

  await app.listen(port);

  Logger.log(
    `
NODE_ENV=${process.env.NODE_ENV}

🚀 Application is running on: http://localhost:${port}/${globalPrefix}
    `,
  );
}

bootstrap();
