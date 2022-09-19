import {DbForTestingEnum} from './db-for-testing.enum';
import {DataSource} from 'typeorm';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies';

export function getDataSource(
  dbName: DbForTestingEnum,
  // eslint-disable-next-line @typescript-eslint/ban-types
  entities: Function[],
  options: Partial<PostgresConnectionOptions> = {},
) {
  return new DataSource({
      ...{
        type: 'postgres',
        host: process.env.TEST_PG_HOST,
        username: process.env.TEST_PG_USER,
        password: process.env.TEST_PG_PASSWORD,
        database: dbName,
        entities,
        /**
         * Important! Massive part of code is assumed that you named
         * props in entity's class with 'camelCase' style.
         * But because of naming strategy below it
         * stored in postgres with 'snake_case' style.
         */
        namingStrategy: new SnakeNamingStrategy(),
        /**
         * Important! Be sure you want to be default synchronize...
         */
        synchronize: true,
      },
      ...options,
    }
  );
}
