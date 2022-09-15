import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
/**
 * This ignore for TypeOrm CLI compatibility
 */
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Config, TowPalConfig } from '../config/src/index';
import { DataSource } from 'typeorm';
import { generateTypeOrmConfig } from './src/lib/generate-typeorm-config';

@Module({
  imports: [TowPalConfig],
})
export class OrmConfigGenerator { }

export default new Promise((resolve, reject) => {
  try {
    NestFactory.createApplicationContext(OrmConfigGenerator).then((app) => {
      const config = app.get<ConfigService<Config>>(ConfigService);

      resolve(new DataSource(generateTypeOrmConfig(config, true)));
    }).catch(reject);
  } catch (error) {
    reject(error);
  }
});
