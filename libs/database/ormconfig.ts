import {Module} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {NestFactory} from '@nestjs/core';
import {Config, TowPalConfig} from '../config/src/index';
import {DataSource} from 'typeorm';
import {generateTypeOrmConfig} from './src/lib/generate-typeorm-config';
import {join} from "path";

/**
 * This class for cli usage.
 * The 'root' path will be 'libs/database'.
 * That's why we explicitly override its value
 * to project's 'root'.
 */
@Module({
  imports: [TowPalConfig(
    join(__dirname, '../../.env')
  )],
})
export class OrmConfigGenerator {
}

export default new Promise((resolve, reject) => {
  try {
    NestFactory.createApplicationContext(OrmConfigGenerator)
      .then((app) => {
        const config = app.get<ConfigService<Config>>(ConfigService);

        generateTypeOrmConfig(config, true)
          .then((options) => {
            resolve(new DataSource(options));
          }).catch(reject);
      }).catch(reject);
  } catch (error) {
    reject(error);
  }
});
