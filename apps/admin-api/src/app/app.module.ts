import { Module } from '@nestjs/common';
import { TowPalConfig } from '@towpal-pro/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TowPalConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
