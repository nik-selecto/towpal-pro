### [Main page](../../README.md)

# How add new environment variable?

---
At first add it to `libs/config/src/lib/config.ts`:
```ts
export class Config {
  @Transform(({ value }) => +value)
  @IsNotEmpty()
  GOOD_LUCK = 777;
}
```
Then add it to `.env` file.
```
GOOD_LUCK=777
```
---
* If validation failed, bootstrap process will stop.
* If value is not string use `@Transform` decorator
* If property has default value and my not exists in `.env`, you should write it as default like in example above.
## How use:
```ts
export class SomeWhere {
  constructor(private conf: ConfigService<ProcessEnvType>) {}

  doSomething() {
    console.info(conf.get('GOOD_LUCK'));
  }
}
```
