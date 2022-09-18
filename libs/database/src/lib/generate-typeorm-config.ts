import {ConfigService} from '@nestjs/config';
import {Config} from '@towpal-pro/config';
import {DataSourceOptions} from 'typeorm';
import {Client} from 'pg';
import {join} from 'path';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies';
import {entities} from './entities';



export async function generateTypeOrmConfig(
  config: ConfigService<Config>,
  cli = false,
): Promise<DataSourceOptions> {
  /**
   * Before running migrations the database should be already exists.
   */
  if (cli) {
    const client = new Client({
      host: config.get('PG_HOST'),
      port: 5432,
      user: config.get('PG_USER'),
      password: config.get('PG_PASS'),
    });

    await client.connect();

    const {rows: [db]} = await client.query(
      `SELECT
       FROM pg_database
       WHERE datname = $1`, // eslint-disable-line
      [config.get('PG_DB')]
    );

    if (!db) {
      await client.query(`CREATE DATABASE ${config.get('PG_DB')}`);
    }

    await client.end();
  }

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
