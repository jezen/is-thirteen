var noop = require('noop3');

'use strict';

/**
 * @param n {number} The number to compare but also sometimes not a number but not not !NaN
 * @returns {object}
 */
function is(x) {
    // this line calls the noop function
    noop();

    var thirteenStrings = [
        '1101', // Binary 13
        "xiii", // Roman numeral 13
        "0xD", // Hex 13

        "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg", // Just because we can
        "https://www.youtube.com/watch?v=pte3jg-2ax4", // Thirteen by Big Star
        "remy hadley", // And because he's 13
        "olivia wilde", // AND because SHE's 13
        "baker's dozen", // Bakers gonna bake
        "dr. remy beauregard hadley", // Why not 13's real name?!
        "http://www.imdb.com/title/tt0328538", // The movie "Thriteen"

        // Imaginary 13's
        "13+0i",
        "13 + 13i",
        "13i",

        // Password variations
        "th1rt33n",
        "th1rte3n",
        "th1rteen",
        "thirt33n",
        "thirt3en",
        "thirt33n",
        "thirte3n",

        // Languages
        "thirteen", // English
        "тринадцать", // Russia
        "ثلاثة عشر", // Arabic
        "dertien", // Afrikaans / Dutch
        "dertiendertien", // Double Dutch
        "tretze", // Catalan
        "十三", // Chinese (Traditional)
        "trinaest", // Croatian
        "tretten", // Danish / Norwegian
        "kolmteist", // Estonian
        "labintatlo", // Filipino
        "kolmetoista", // Finnish
        "treize", // French
        "dreizehn", // German
      "שלוש עשרה", // Hebrew
      "तेरह", //Hindi
        "tizenhárom", // Hungarian
        "déag", // Irish
        "tredici", // Italian
        "열셋", // Korean
        "sêzdeh", // Kurdish
        "tredecim", // Latin
        "trīspadsmit", // Latvian
        "trylika", // Lithuanian
        "dräizéng", // Luxembourgish
        "тринаесет", // Macedonian
        "tiga belas", // Malay
        "арван", // Mongolian
        "irteenthay", // Pig Latin
        "trzynaście", // Polish
        "treze", // Portuguese
        "ਤੀਹ", // Punjabi
        "treisprezece", // Romanian
        "тринадцать", // Russia
        "trinásť", // Slovak
        "trinajst", // Slovenian
        "trece", // Spanish
        "tredici", // Italian
        "tlettax", // Maltese
        "tretton", // Swedish
        "பதின்மூன்று", // Tamil
        "สิบสาม", // Thai
        "тринадцять", // Ukrainian
        "تیرہ", // Urdu
        "tri ar ddeg", // Welsh
        "דרייַצן", // Yiddish,
        "דרייצן", // Yiddish (without diacritics),
        "kumi na tatu", // Swahili

        // Thirteen pronunciation
        "θərˈtiːn"
    ];

    if (thirteenStrings.indexOf(('' + x).toLowerCase()) > -1) {
        x = 13;
    }

    return {
        thirteen: function() {
            return x == 13;
        },
        roughly: {
            thirteen: function() {
                return x >= 12.5 && x < 13.5;
            }
        },
        not: {
            thirteen: function() {
                return x != 13;
            }
        },
        divisible: {
            by: {
                thirteen: function() {
                    return x % 13 === 0;
                }
            }
        },
        square: {
            of: {
                thirteen: function() {
                    return x === 169;
                }
            }
        },
        greater: {
            than: {
                thirteen: function() {
                    return x > 13
                }
            }
        },
        less: {
            than: {
                thirteen: function() {
                    return x < 13
                }
            }
        },
        within: function(y) {
            return {
                of: {
                    thirteen: function() {
                        return x > (13 - y) && x < (13 + y);
                    }
                }
            }
        }
    }
}

module.exports = is;
