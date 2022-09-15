import { ConfigService } from '@nestjs/config';
import { Config } from '@towpal-pro/config';
import { DataSourceOptions } from 'typeorm';

export function generateTypeOrmConfig(config: ConfigService<Config>, cli = false): DataSourceOptions {
  return {
    type: 'postgres',
    host: config.get('PG_HOST'),
    port: 5432,
    username: config.get('PG_USER'),
    password: config.get('PG_PASS'),
    database: config.get('PG_DB'),
    migrations: [cli
      ? `${process.cwd()}/libs/database/migrations/*.ts`
      : `${__dirname}/migrations/*js`],
    migrationsTableName: 'migrations',
  };
}
