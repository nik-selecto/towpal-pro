import { Module } from '@nestjs/common';
import { TowPalConfig } from '@towpal-pro/config';
import { DatabaseModule } from '@towpal-pro/database';
import { getTowpalGqlModule, OperatorDto } from '@towpal-pro/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TowPalConfig,
    DatabaseModule,
    getTowpalGqlModule(
      join(process.cwd(), 'admin-api.gql'),
      [OperatorDto],
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
