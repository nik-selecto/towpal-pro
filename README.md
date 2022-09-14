# TowPal

## NX
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
## Git
* use committizen for make convention messages:
```
git cz
```
* husky
  * pre-commit hook make lint check
  * pre-push hook run tests
  * add `--no-verify` for skip hooks (bad practice)
