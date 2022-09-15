import { ConfigService } from '@nestjs/config';
import { Config } from '@towpal-pro/config';
import { DataSourceOptions } from 'typeorm';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { entities } from './entities';

export function generateTypeOrmConfig(config: ConfigService<Config>, cli = false): DataSourceOptions {
  return {
    type: 'postgres',
    host: config.get('PG_HOST'),
    port: 5432,
    username: config.get('PG_USER'),
    password: config.get('PG_PASS'),
    database: config.get('PG_DB'),
    entities,
    synchronize: config.get('FORCE_SYNC_DB'),
    migrations: [cli
      ? join(`${__dirname}/../../migrations/*.ts`)
      : join(`${__dirname}/../../migrations/*.js`)],
    migrationsTableName: 'migrations',
    namingStrategy: new SnakeNamingStrategy(),
  };
}
