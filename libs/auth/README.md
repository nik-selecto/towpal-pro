# Authentication
Both registration and login flows are implemented with firebase help,
using phone number (for shipper and driver)
* user (shipper | driver) input phone number
* then input code from sms
* and with received token go to the server
## Here begin difference between new user (registration) and old (login):
* registration:
    * fill inputs, upload documents, etc.
    * receive jwt access and refresh tokens
* login:
    * receive jwt access and refresh tokens

> This scenario is controlled by client's code.
> From backend side, if it is new user - server simply response
> that user should make registration (with firebase token).
> Until this step server will not return jwt tokens.
> Another words - after phone number verification server or return
> tokens or only allow registration
---
## Operator specific...
* during registration he provides his password and nik
* login flow operator will may make with "local-strategy" (nik & password)
