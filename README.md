# TowPalPro
---
---
---
# === 0_o Explore carefully! And enjoy! :D ===
## [Configuration, environment, etc.](./libs/config/README.md)
## [DatabaseModule, postgres, migrations, etc.](./libs/database/README.md)
## [Firebase-admin](./libs/firebase-admin/README.md)
---
---
---
## Git settings
* use committizen for make convention messages:
```
git cz
```
* husky
  * pre-commit hook make lint check
  * pre-push hook run tests
  * add `--no-verify` for skip hooks (bad practice)

## [NX](https://nx.dev/getting-started/intro)
For manage this monorepo the NX tool is used. For api projects [Nest Plugin](https://nx.dev/packages/nest) is used.
### Some tips and hacks:
* use `--dry-run` command before every cli command that make some generations to see what it will produce before actual file changing
## CLI
* in general see [NX-cli](https://nx.dev/reference/commands#nx-cli-commands) rules
* by default `process.env.NODE_ENV=development`, add `--prod` flag to make it `production`
* examples:
```
npx nx serve [appName]
```
```
npx nx build [appName] --prod
```
```
npx nx run-many --target=build
```
```
npx nx run-many --target=build --project=admin-api,shipper-api
```
---
### // TODO
* CI
  * now merge allowed even if some checks are failed but merge should be declined
