'use strict';

const tap = require('tap');
const is = require('./');

var thirteenTests = {
    numbers: {
        13: true,
        1101: true,
        'XIII': true,
        'xiii': true,
        '0xD': true,
        '0xd': true
    },

    media: {
        'https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg': true,
        'http://www.metal-archives.com/images/1/5/3/7/153772.jpg': false,
        'https://www.youtube.com/watch?v=pte3Jg-2Ax4': true
    },

    nouns: {
        'Remy Hadley': true,
        'Olivia Wilde': true,
        'baker\'s dozen': true,
        'Dr. Remy Beauregard Hadley': true
    },

    // Imaginary 13's tests
    imaginary: {
        '13+0i': true,
        '13i': true,
        '13 + 13i': true,
        '12i': false
    },

    // Password variations tests
    password: {
        'th1rt33n': true,
        'th1rte3n': true,
        'th1rteen': true,
        'thirt3en': true,
        'thirt33n': true,
        'thirte3n': true
    },

    // Languages tests
    language: {
        'dertien': true, // Afrikaans / Dutch
        'dertiendertien': true, // Double Dutch
        'tretze': true, // Catalan
        '十三': true, // Chinese (Traditional)
        'trinaest': true, // Croatian
        'tretten': true, // Danish / Norwegian
        'kolmteist': true, // Estonian
        'thirteen': true, // English
        'Thirteen': true, // English
        'labintatlo': true, // Filipino
        'kolmetoista': true, // Finnish
        'treize': true, // French
        'dreizehn': true, // German
        'שלוש עשרה': true, // Hebrew
        'तेरह': true, // Hindi
        'tizenhárom': true, // Hungarian
        'déag': true, // Irish
        'tredici': true, // Italian
        '열셋': true, // Korean
        'sêzdeh': true, // Kurdish
        'tredecim': true, // Latin
        'trīspadsmit': true, // Latvian
        'trylika': true, // Lithuanian
        'dräizéng': true, // Luxembourgish
        'тринаесет': true, // Macedonian
        'tiga belas': true, // Malay
        'арван': true, // Mongolian
        'irteenthay': true, // Pig Latin
        'trzynaście': true, // Polish
        'treze': true, // Portoguese
        'ਤੀਹ': true, // Punjabi
        'treisprezece': true, // Romanian
        'тринадцать': true, // Russia
        'trinásť': true, // Slovak
        'trinajst': true, // Slovenian
        'trece': true, // Spanish
        'tretton': true, // Swedish
        'பதின்மூன்று': true, // Tamil
        'สิบสาม': true, // Thai
        'тринадцять': true, // Ukrainian
        'تیرہ': true, // Urdu
        'tri ar ddeg': true, // Welsh
        'דרייַצן': true, // Yiddish
        'דרייצן': true, // Yiddish (without diacritics),
        'kumi na tatu': true // Swahili
    }
};

// cycles through the types of tests
for(var testType in thirteenTests) {
    if (!thirteenTests.hasOwnProperty(testType)) continue;

    var subTests = thirteenTests[testType];

    // cycles through the tests in this test type
    for(var test in subTests) {
        if(!subTests.hasOwnProperty(test)) continue;

        tap.equal(is(test).thirteen(), subTests[test]);
    }
}