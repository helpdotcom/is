# is

> isDate, isUUID, and isEmail for use with [`help-gen`][]

## Install

```bash
$ npm install --save @helpdotcom/is
```

## Test

```bash
$ npm test
```

## Usage

```js
'use strict'

const is = require('@helpdotcom/is')
```

### isDate(d)

* `d` [`<String>`][] ISO formatted date string

Returns `true` if `d` is a valid ISO date string. Otherwise, returns `false`.

### isEmail(s)

* `s` [`<String>`][] The email string

Returns `true` if `s` is a valid email address. Otherwise, returns `false`.

### isUUID(s)

* `s` [`<String>`][] The uuid to test.

Returns `true` if `s` is a valid v4 UUID. Otherwise, returns `false`.


## Author

Evan Lucas

[`<String>`]: https://mdn.io/string
[`help-gen`]: https://git.help.com/common-backend/help-gen
