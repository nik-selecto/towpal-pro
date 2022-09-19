import {DataSource} from 'typeorm';

export async function dropAllTables(dataSource: DataSource) {
  await dataSource.query('DROP SCHEMA public CASCADE');
  await dataSource.query('CREATE SCHEMA public');
}
