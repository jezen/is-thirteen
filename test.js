const tap = require('tap');
const isThirteen = require('./');


tap.equal(isThirteen(13), true);

tap.equal(isThirteen('13', true), false);
tap.equal(isThirteen('13', false), true);

tap.equal(isThirteen('thirteen'), true);
tap.equal(isThirteen('Thirteen'), true);
tap.equal(isThirteen('Remy Hadley'), true);

tap.equal(isThirteen('https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg'), true);
tap.equal(isThirteen('http://www.metal-archives.com/images/1/5/3/7/153772.jpg'), false);

tap.equal(isThirteen(1101), true);
tap.equal(isThirteen('1101'), true);
