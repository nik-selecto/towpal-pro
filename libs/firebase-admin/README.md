### [Main page](../../README.md)

# Firebase-admin

---

## Firebase secrets sharing using assets:
In your `.env` file your should have `GOOGLE_APPLICATION_CREDENTIALS` variable.
It stores the path to the `firebase-admin.secret.json` with api-keys, secrets etc. from your firebase.
You should specify this path, according to assets replacements.
See `libs/firebase-admin/project.json` to understand how correctly define path:
```jsonc
{
  "targets": {
    "build": {
      "options": {
        "assets": [
          // ==== explore this object ====
          {
            "input": "libs/firebase-admin/secrets",
            "glob": "**/*",
            "ignore": ["**/.gitignore"],
            "output": "/assets/firebase-admin/secrets"
          }
          // =============================
        ],
      },
    },
  }
}
```
This is because during `build` nx target, all files will be bundled together
and your origin typescript folder structure will be broken.
So it's impossible to predict where you should find your no-typescript
files and that's why they will be ignoring during building.
But because of implicit setting behavior of their copying
by using `targets.build.options.assets` property of your app that will be client of
`firebase-admin` library files will be copied. In our case it's `firebase-admin.json`.
So during app execution you should declare correct path to file in `dist` folder.
---
So according to json example above in `.env` it should be something like:
```yaml
GOOGLE_APPLICATION_CREDENTIALS="dist/apps/admin-api/assets/firebase-admin/secrets/firebase-admin.secret.json"
```
#### P.S.
> In this example in `output` property the path with `/` prefix is using.
> So these assets will be copying directly to the `dist` folder
> above any applications...
> It means that they are common for all application
> (however it is declared only in one... so we have cool life-hack but
> unfortunately it hidden behavior... be careful)
## Also important:
* This is example. Check your path carefully by yourself.
* Any library may share its assets with any application in such way.
  * simple don't forget to add correct config to application's `project.json`
