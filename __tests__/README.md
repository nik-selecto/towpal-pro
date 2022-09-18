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

### P.S.
Explore this folder to reduce double-inventions and try follow conventions described here.
Also run tests and make checks and updates of this package to guarantee its actuality and freshness. 
