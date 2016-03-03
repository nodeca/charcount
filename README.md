charcount
=========

[![Build Status](https://travis-ci.org/nodeca/charcount.svg?branch=master)](https://travis-ci.org/nodeca/charcount)
[![NPM version](https://img.shields.io/npm/v/charcount.svg)](https://www.npmjs.org/package/charcount)

> Count visual length of javascript string.

Some symbols in JavaScript can occupy 2 characters (surrogate pair).
This package count string length as you see it in browser:

```js
var charcount = require('charcount');

console.log(charcount('😀')); // => 1
console.log('😀'.length);     // => 2
```


Related projects
----------------

If you works with strings for terminal output, you may wish to ignore
ASCII escape sequences. See those projects then:

- [string-length](https://github.com/sindresorhus/string-length)
- [string-width](https://github.com/sindresorhus/string-width)


License
-------

[MIT](https://github.com/nodeca/charcount/blob/master/LICENSE)
