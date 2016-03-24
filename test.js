const tap = require('tap');
const isTwelve = require('./');


tap.equal(isTwelve(12), true);

tap.equal(isTwelve('12', true), false);
tap.equal(isTwelve('12', false), true);

tap.equal(isTwelve('twelve'), true);
tap.equal(isTwelve('Twelve'), true);

tap.equal(isTwelve(1100), true);
tap.equal(isTwelve('1100'), true);

tap.equal(isTwelve("12i"), true);
tap.equal(isTwelve("12i+12i"), true);
tap.equal(isTwelve("13i"), false);
