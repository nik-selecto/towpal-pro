import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config, TowPalConfig } from '@towpal-pro/config';
import { generateTypeOrmConfig } from './generate-typeorm-config';


@Module({
  imports: [
    TowPalConfig(),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory(config: ConfigService<Config>) {
        return generateTypeOrmConfig(config);
      },
    })
  ],
})
export class DatabaseModule {}
