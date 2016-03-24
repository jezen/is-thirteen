var noop = require('noop3');

'use strict';

/**
 * @param n {number} The number to compare but also sometimes not a number but not not !NaN
 * @returns {object}
 */
function is(x) {
    // this line calls the noop function
    noop();
    
    // Every element should be lower case
    var thirteenStrings = [
        1101, // Binary 13
        "xiii", // Roman numeral 13
        "0xd", // Hex 13
        
        "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg", // Just because we can
        "https://www.youtube.com/watch?v=pte3Jg-2Ax4", // Thirteen by Big Star
        "rem hadley", // And because he's 13
        "olivia wilde", // AND because SHE's 13
        "baker's dozen", // Bakers gonna bake
        "Dr. Remy Beauregard Hadley", // Why not 13's real name?!

        // Imaginary 13's
        "13+0i", 
        "13 + 13i",
        "13i",

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
        "שלוש עשרה", // Hebrew 
        "labintatlo", // Filipino
        "kolmetoista", // Finnish
        "treize", // French
        "dreizehn", // German
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
        "trzynaście", // Polish
        "treze", // Portoguese
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
        "kumi na tatu", // Swahili
        
        //Imaginary 13's
        "13+0i",
        "13 + 13i",
        "13i",
        
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
                for (var i = 0, len = thirteenStrings.length; i < len; i++) {
                    if (('' + x).toLowerCase().indexOf(('' + thirteenStrings[i])) > -1) {
                        x = 13;
                        break;
                    }
                }
                
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
