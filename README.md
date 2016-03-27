<img src="is-thirteen-logo.png">

_Special thanks to [@casdr](https://github.com/casdr) for the logo_
# is-thirteen

[![Join us on Gitter](https://img.shields.io/badge/GITTER-join%20chat-green.svg)](https://gitter.im/gytdau/is-thirteen)

An npm package to check if a number is equal to 13.

## Installation

```sh
npm --save i is-thirteen
```

## Usage

```javascript
// PLEAS READ THE SOURCE CODE BECAuse we moved fast and broke things
v̶a̶r̶ ̶i̶s̶T̶h̶i̶r̶t̶e̶e̶n̶ ̶=̶ ̶r̶e̶q̶u̶i̶r̶e̶(̶'̶i̶s̶-̶t̶h̶i̶r̶t̶e̶e̶n̶'̶)̶;̶
i̶s̶T̶h̶i̶r̶t̶e̶e̶n̶(̶2̶5̶)̶;̶ ̶/̶/̶ ̶f̶a̶l̶s̶e̶
i̶s̶T̶h̶i̶r̶t̶e̶e̶n̶(̶1̶3̶)̶;̶ ̶/̶/̶ ̶t̶r̶u̶e̶

// Now with elegant syntax.
var is = require('is-thirteen');

is(13).thirteen(); // true
is(12.8).roughly.thirteen(); // true
is(6).within(10).of.thirteen(); // true
```

## Test

```javascript
npm test
```

## License

[WTFPL](http://www.wtfpl.net/txt/copying/)

A helpful tool by [Jezen Thomas](https://twitter.com/jezenthomas) with helpful
help from [Gytis Daujotas](https://twitter.com/gytdau) and many fine folk.
