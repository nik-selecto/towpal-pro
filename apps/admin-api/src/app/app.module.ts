import { Module } from '@nestjs/common';
import { TowPalConfig } from '@towpal-pro/config';
import {DatabaseModule, entities, OperatorEntity} from '@towpal-pro/database';
import { FirebaseAdminModule } from '@towpal-pro/firebase-admin';
import { getTowpalGqlModule } from '@towpal-pro/graphql';
import { join } from 'path';
import { AdminApiResolver } from './admin-api.resolver';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    TowPalConfig(),
    DatabaseModule,
    TypeOrmModule.forFeature(entities),
    FirebaseAdminModule,
    getTowpalGqlModule(join(process.cwd(), 'admin-api.schema.gql')),
  ],
  controllers: [AppController],
  providers: [AppService, AdminApiResolver],
})
export class AppModule {}
