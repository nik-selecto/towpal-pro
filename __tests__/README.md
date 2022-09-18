### [Main page](../README.md)

# Tests

---

This library is not registered in NX project or any workspace.
Because it will contain only configurations or helpers, utils
that will be used only during tests.
The main idea is to encapsulate all testing logic in one place
and without any effects to real code.
It's also important to note that each app or library
should have own tests inside self folders with related
only for their feature testing logic.
So this module is exists for two main reasons:
* accumulate all common and repeated logic for tests in one place
* avoid circular dependencies (because this functional will be used in every test and each app, lib will have test)
* leave business code(apps and libs) as possible independent related to the tests and modular between each other

### Environments and configurations
There is `.default.test.env` file. It should contain all variables that are
needed for tests run.
If you need (and it is recommended) you may define
`.test.env` file in the same folder with the same
variables. It is ignored by git, and it will override default config.

// TODO
Also it will be cool to provide some convention logic about defining and overriding environments relatively to
libs, folders where tests are.
####### Important!
Please read official [Jest documentation about setup environment](https://jestjs.io/docs/configuration#setupfiles-array)
and try to make all with best practices described there, because it is very easy to lose
clean test's settings etc. and make this part of developing very hard to support.
Unfortunately most likely that even current code not ideal in these moments. Feel free to upgrade it!


### P.S.
Explore this folder to reduce double-inventions and try follow conventions described here.
Also run tests and make checks and updates of this package to guarantee its actuality and freshness. 
