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

* `d` [`<String>`][] | [`<Date>`][] ISO formatted date string

Returns `true` if `d` is a valid ISO date string. Otherwise, returns `false`.

### isEmail(s)

* `s` [`<String>`][] The email string

Returns `true` if `s` is a valid email address. Otherwise, returns `false`.

### isEmailAllowName(s)

* `s` [`<String>`][] The email string

Returns `true` if `s` is a valid email address with an optional name.
Otherwise, returns `false`.

The following formats are supported:

* `evan.lucas@help.com`
* `Evan Lucas <evan.lucas@help.com>`
* `"Evan Lucas" <evan.lucas@help.com>`
* `"Help.com, LLC" <info@help.com>`
* `Help.com, LLC <info@help.com>`
* `Jane Doe (maiden name) <jane@doe.com>`

### isUUID(s)

* `s` [`<String>`][] The uuid to test.

Returns `true` if `s` is a valid v4 UUID. Otherwise, returns `false`.

### isUrl(s)

* `s` [`<String>`][] The url to test.

Returns `true` if `s` is a valid URL. Otherwise, returns `false`.


## Author

Evan Lucas

[`<String>`]: https://mdn.io/string
[`<Date>`]: https://mdn.io/date
[`help-gen`]: https://git.help.com/common-backend/help-gen
