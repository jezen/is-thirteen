const tap = require('tap');
const isThirteen = require('./');


tap.equal(isThirteen(13).thirteen(), true);

tap.equal(isThirteen('13', true).thirteen(), false);
tap.equal(isThirteen('13', false).thirteen(), true);

tap.equal(isThirteen('thirteen').thirteen(), true);
tap.equal(isThirteen('Thirteen').thirteen(), true);
tap.equal(isThirteen('Remy Hadley').thirteen(), true);

tap.equal(isThirteen('https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg').thirteen(), true);
tap.equal(isThirteen('http://www.metal-archives.com/images/1/5/3/7/153772.jpg').thirteen(), false);

tap.equal(isThirteen(1101).thirteen(), true);
tap.equal(isThirteen('1101').thirteen(), true);
