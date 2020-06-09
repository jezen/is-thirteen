<img src="is-thirteen-logo.png">

_Special thanks to [@casdr](https://github.com/casdr) for the logo_
# is-thirteen

[![Build Status](https://travis-ci.org/jezen/is-thirteen.svg?branch=master)](https://travis-ci.org/jezen/is-thirteen) 
[![Join us on Gitter](https://img.shields.io/badge/GITTER-join%20chat-green.svg)](https://gitter.im/gytdau/is-thirteen)

An npm package to check if a number is equal to 13.

## Installation

```sh
npm --save i is-thirteen
```

or

```sh
yarn add is-thirteen
```

## Usage

```javascript
const isThirteen = require('is-thirteen');

// PLEAS READ THE SOURCE CODE BECAuse we moved fast and broke things

i̶s̶T̶h̶i̶r̶t̶e̶e̶n̶(̶2̶5̶)̶;̶ ̶/̶/̶ ̶f̶a̶l̶s̶e̶
i̶s̶T̶h̶i̶r̶t̶e̶e̶n̶(̶1̶3̶)̶;̶ ̶/̶/̶ ̶t̶r̶u̶e̶
```

```javascript
const is = require('is-thirteen');
// Now with elegant syntax.

is(13).thirteen(); // true
is(12.8).roughly.thirteen(); // true
is(6).within(10).of.thirteen(); // true
is(2007).yearOfBirth(); // true
is(new Date("2020-03-13")).friday13th(); // true

// check your math skillz
is(4).plus(5).thirteen();      // false
is(12).plus(1).thirteen();    // true
is(4).minus(12).thirteen();    // false
is(14).minus(1).thirteen();    // true
is(1).times(8).thirteen();    // false
is(26).divideby(2).thirteen();  // true
```

## Test

```shell
npm test
```

## License

[WTFPL](http://www.wtfpl.net/txt/copying/)

A helpful tool by [Jezen Thomas](https://jezenthomas.com) with helpful
help from [Gytis Daujotas](https://twitter.com/gytdau) and many fine folk.
