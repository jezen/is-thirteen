'use strict';

const tap = require('tap');
const is = require('./');

tap.equal(is(13).thirteen(), true);
tap.equal(is('13').thirteen(), true);
tap.equal(is(1101).thirteen(), true);
tap.equal(is('1101').thirteen(), true);
tap.equal(is('XIII').thirteen(), true);
tap.equal(is('xiii').thirteen(), true);
tap.equal(is('0xD').thirteen(), true);
tap.equal(is('0xd').thirteen(), true);

tap.equal(is('https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg').thirteen(), true);
tap.equal(is('http://www.metal-archives.com/images/1/5/3/7/153772.jpg').thirteen(), false);
tap.equal(is('https://www.youtube.com/watch?v=pte3Jg-2Ax4').thirteen(), true);
tap.equal(is('thirteen').thirteen(), true);
tap.equal(is('Thirteen').thirteen(), true);
tap.equal(is('Remy Hadley').thirteen(), true);
tap.equal(is('Olivia Wilde').thirteen(), true);
tap.equal(is("baker's dozen").thirteen(), true);
tap.equal(is("Dr. Remy Beauregard Hadley").thirteen(), true);
tap.equal(is("http://www.imdb.com/title/tt0328538").thirteen(), true);

// Imaginary 13's tests
tap.equal(is("13+0i").thirteen(), true);
tap.equal(is("13i").thirteen(), true);
tap.equal(is("13 + 13i").thirteen(), true);
tap.equal(is("12i").thirteen(), false);

// Password variations tests
tap.equal(is("th1rt33n").thirteen(), true);
tap.equal(is("th1rte3n").thirteen(), true);
tap.equal(is("th1rteen").thirteen(), true);
tap.equal(is("thirt3en").thirteen(), true);
tap.equal(is("thirt33n").thirteen(), true);
tap.equal(is("thirte3n").thirteen(), true);

// Languages tests
tap.equal(is("dertien").thirteen(), true); // Afrikaans / Dutch
tap.equal(is("dertiendertien").thirteen(), true); // Double Dutch
tap.equal(is("tretze").thirteen(), true); // Catalan
tap.equal(is("十三").thirteen(), true); // Chinese (Traditional)
tap.equal(is("trinaest").thirteen(), true); // Croatian
tap.equal(is("tretten").thirteen(), true); // Danish / Norwegian
tap.equal(is("kolmteist").thirteen(), true); // Estonian
tap.equal(is("thirteen").thirteen(), true); // English
tap.equal(is("labintatlo").thirteen(), true); // Filipino
tap.equal(is("kolmetoista").thirteen(), true); // Finnish
tap.equal(is("treize").thirteen(), true); // French
tap.equal(is("dreizehn").thirteen(), true); // German
tap.equal(is('שלוש עשרה').thirteen(), true); // Hebrew
tap.equal(is("तेरह").thirteen(), true); // Hindi
tap.equal(is("tizenhárom").thirteen(), true); // Hungarian
tap.equal(is("déag").thirteen(), true); // Irish
tap.equal(is("tredici").thirteen(), true); // Italian
tap.equal(is("열셋").thirteen(), true); // Korean
tap.equal(is("sêzdeh").thirteen(), true); // Kurdish
tap.equal(is("tredecim").thirteen(), true); // Latin
tap.equal(is("trīspadsmit").thirteen(), true); // Latvian
tap.equal(is("trylika").thirteen(), true); // Lithuanian
tap.equal(is("dräizéng").thirteen(), true); // Luxembourgish
tap.equal(is("тринаесет").thirteen(), true); // Macedonian
tap.equal(is("tiga belas").thirteen(), true); // Malay
tap.equal(is("арван").thirteen(), true); // Mongolian
tap.equal(is("irteenthay").thirteen(), true); // Pig Latin
tap.equal(is("trzynaście").thirteen(), true); // Polish
tap.equal(is("treze").thirteen(), true); // Portoguese
tap.equal(is("ਤੀਹ").thirteen(), true); // Punjabi
tap.equal(is("treisprezece").thirteen(), true); // Romanian
tap.equal(is("тринадцать").thirteen(), true); // Russia
tap.equal(is("trinásť").thirteen(), true); // Slovak
tap.equal(is("trinajst").thirteen(), true); // Slovenian
tap.equal(is("trece").thirteen(), true); // Spanish
tap.equal(is("tretton").thirteen(), true); // Swedish
tap.equal(is("பதின்மூன்று").thirteen(), true); // Tamil
tap.equal(is("สิบสาม").thirteen(), true); // Thai
tap.equal(is("тринадцять").thirteen(), true); // Ukrainian
tap.equal(is("تیرہ").thirteen(), true); // Urdu
tap.equal(is("tri ar ddeg").thirteen(), true); // Welsh
tap.equal(is("דרייַצן").thirteen(), true); // Yiddish
tap.equal(is("דרייצן").thirteen(), true); // Yiddish (without diacritics),
tap.equal(is("kumi na tatu").thirteen(), true); // Swahili
