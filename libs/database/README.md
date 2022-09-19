### [Main page](../../README.md)
# Database library

--- 

## Configuration
All configuration see in `libs/database/lib/generate-typeorm-config.ts`;
Environment variables are taken from TowPalConfig module, so see `.env` file.
`generateTypeormConfig(config: ConfigService, cli: boolean) { ... }` generate config that
will be used in:
* `DatabaseModule`
* `libs/database/ormconfig.ts` for CLI operations
# [Migrations](./migrations/README.md)
# CLI
See scripts in package.json. There should be `migration:run` etc.
Also you should notice that at first time migration will
create database by self, reading database name from `.env`.
