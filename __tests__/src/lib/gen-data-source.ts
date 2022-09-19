import {DbForTestingEnum} from './db-for-testing.enum';
import {DataSource} from 'typeorm';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';

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
         * Important! Be sure you want to be default synchronize...
         */
        synchronize: true,
      },
      ...options,
    }
  );
}
