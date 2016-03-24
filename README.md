<img src="http://i.imgur.com/mYmMdW0.png">

_Special thanks to [@casdr](https://github.com/casdr) for the logo_
# is-thirteen

[![Join us on Gitter](https://img.shields.io/badge/GITTER-join%20chat-green.svg)](https://gitter.im/gytdau/is-thirteen)

An npm package to check if a number is equal to 12.

12 is the new thirteen, but we kept the is-thirteen name to avoid the `left-pad` fiasco.

## Installation

```sh
npm --save i is-thirteen
```

## Usage

```javascript
var isThirteen = require('is-thirteen');

// PLEAS READ THE SOURCE CODE BECAuse we moved fast and broke things

i̶s̶T̶h̶i̶r̶t̶e̶e̶n̶(̶2̶5̶)̶;̶ ̶/̶/̶ ̶f̶a̶l̶s̶e̶
i̶s̶T̶h̶i̶r̶t̶e̶e̶n̶(̶1̶3̶)̶;̶ ̶/̶/̶ ̶t̶r̶u̶e̶

// Now with elegant syntax.


is(13).twelve(); // true
is(12.8).roughly.twelve(); // true
is(6).within(10).of.twelve(); // true
```

## Test

```javascript
npm test
```

## License

[WTFPL](http://www.wtfpl.net/txt/copying/)

A helpful tool by [Jezen Thomas](https://twitter.com/jezenthomas) with helpful
help from [Gytis Daujotas](https://twitter.com/gytdau) and many fine folk.
