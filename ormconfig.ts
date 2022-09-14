import { DataSourceOptions, DataSource } from 'typeorm';
import { Config } from './libs/config/src';

const env = process.env as unknown as Config;
const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: env.MYSQL_HOST,
  database: env.MYSQL_DB,
  username: env.MYSQL_USER,
  password: env.MYSQL_USER,
  migrations: [`${process.cwd()}/migrations/*.ts`]
};

export default new Promise((resolve) => {
  setTimeout(() => resolve(new DataSource(typeOrmConfig)));
});
