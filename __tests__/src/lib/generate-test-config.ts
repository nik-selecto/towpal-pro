import {DbForTestingEnum} from './db-for-testing.enum';
import {config} from 'dotenv';
import {join} from 'path';
import {Client} from 'pg';

config({path: join(__dirname, '../../.test.env')});
config({path: join(__dirname, '../../.default.test.env')});

export async function generateTestConfig(settings: {
                                           prepareDbs?: [DbForTestingEnum, ...DbForTestingEnum[]],
                                         } = {},
) {
  const {
    prepareDbs,
  } = {
    ...{
      // TODO default settings
    },
    ...settings,
  };

  if (prepareDbs) {
    const client = new Client({
      host: process.env.TEST_PG_HOST,
      user: process.env.TEST_PG_USER,
      password: process.env.TEST_PG_PASSWORD,
    });

    await client.connect();
    await Promise.all(prepareDbs.map((dbName) => {
      return client.query(`DROP DATABASE IF EXISTS "${dbName}" WITH (FORCE)`);
    }));
    await Promise.all(prepareDbs.map((dbName) => {
      return client.query(`CREATE DATABASE "${dbName}"`);
    }));

    await client.end();
  }

}
