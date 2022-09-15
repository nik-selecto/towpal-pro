import { Module } from '@nestjs/common';
import { TowPalConfig } from '@towpal-pro/config';
import { DatabaseModule } from '@towpal-pro/database';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TowPalConfig,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
