var noop = require('noop3');

'use strict';

/**
 * @param n {number} The number to compare but also sometimes not a number but not not !NaN
 * @returns {object}
 */
function is(x) {
    // this section calls the noop function 13 times
    noop();
    noop();
    noop();
    noop();
    noop();
    noop();
    noop();
    noop();
    noop();
    noop();
    noop();
    noop();
    noop();      

    // Every element should be lower case
    var thirteenStrings = [
        "1101", // Binary 13
        "xiii", // Roman numeral 13
        "0xd", // Hex 13

        "https://en.wikipedia.org/wiki/This_Is_Thirteen", // Because it is thirteen
        "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg", // Just because we can
        "https://www.youtube.com/watch?v=pte3Jg-2Ax4", // Thirteen by Big Star
        "https://www.youtube.com/watch?v=33Kv5D2zwyc", // The best Johny Cash's song
        "remy hadley", // And because she's "Thirteen"
        "olivia wilde", // AND because SHE's "Thirteen"
        "baker's dozen", // Bakers gonna bake
        "dr. remy beauregard hadley", // Why not 13's real name?!
        "patty tsai", // 蔡依珊 is a public figure in Taiwan. Her Chinese name sounds like "13".
        "https://s3.amazonaws.com/rapgenius/calle13.jpg", // Calle 13, famous Puerto Rican band
        "jason fly", // XIII of The XX

        "dilma", //Dilma, president of Brazil. Her number is 13: https://www.google.com/search?q=dilma+13
        "PT", // PT is Brazilian political party represented by the number 13


        "https://s3.amazonaws.com/rapgenius/calle13.jpg", // Calle 13, famous latin american band

        "sharon carter", // Agent 13

        "weedle", //#13 Pokémon
        
        // Imaginary 13's
        "13+0i",
        "13 + 13i",
        "13i",

        // B just looks like 13 written closer
        "b",

        //Adding "l" 3, "i"3 and |3 because they basically look like thirteen
        "i3",
        "l3",
        "|3",
        
        //Looks like 13 (flipped horizontally) - E equal to 3 
        "ei",
        "e1",
        "el",
        "e|",

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
        "ثلاثة عشر", // Arabic

        "يج", //Arabic (gematria)

        "سیزده", // Persian
        "۱۳", // Persian number

        "dertien", // Afrikaans / Dutch
        "dertiendertien", // Double Dutch
        "тринадесет", // Bulgarian
        "тринайсе", // Also Bulgarian
        "tretze", // Catalan
        "napulo ug tulo", // Cebuano
        "十三", // Chinese (Simplified) / Japanese
        "拾叄", // Chinese (Traditional) (Upper case)
        "サーティーン", // Japanese
        "１３", // Japanese full-width
        "trinaest", // Croatian / Serbian (latin)
        "tretten", // Danish / Norwegian
        "kolmteist", // Estonian
        "labintatlo", // Filipino
        "kolmetoista", // Finnish
        "treize", // French
        "dreizehn", // German
        "δεκατρία", // Greek
        "drizäh", // Swiss German
        "wa’maH wej", // Klingon
        "‘umikūmākolu", // Hawaiian
        "שלוש עשרה", // Hebrew 
        "שלושעשרה", // Hebrew (without space)
        "ֹשְלֹש- עֶשְֹרֵה", // Hebrew (with punctuation)
        "שלושה עשר", // Hebrew (male form)
        "שלושהעשר", // Hebrew (male form, without space)
        "ֹשְלֹשָה- עָשָֹר", // Hebrew (male form, with punctuation)
        "יג", // Hebrew (gematria)
        "י״ג", // Hebrew (gematria - apostrophes)
        "quainel", // Quenya
        "mînuiug", // Sindarin
        "tizenhárom", // Hungarian
        "trí déag", // Irish
        "tredici", // Italian
        "ಹದಿಮೂರು", //Kannada (for thirteen)
        "೧೩",//Kannada (for 13)
        "열셋", // Korean
        "sêzdeh", // Kurdish
        "tredecim", // Latin
        "trīspadsmit", // Latvian
        "trylika", // Lithuanian
        "dräizéng", // Luxembourgish
        "тринаесет", // Macedonian
        "tiga belas", // Malay
        "तेरा", // Marathi (१३)
        "арван", // Mongolian
        ".---- ...--", // Morse code
        "irteenthay", // Pig Latin
        "trzynaście", // Polish
        "treze", // Portuguese
        "ਤੇਰਾਂ", // Punjabi - thirteen
        "੧੩", // Punjabi Numeral - 13
        "treisprezece", // Romanian
        "тринадцать", // Russian
        "тринаест", // Serbian (cyrillic)
        "trinásť", // Slovak
        "trinajst", // Slovenian
        "trece", // Spanish
        "trese", // Tagalog
        "tredici", // Italian
        "on üç", // Turkish
        "dektri", //Speranto
        "tlettax", // Maltese
        "tretton", // Swedish
        "பதின்மூன்று", // Tamil
        "สิบสาม", // Thai
        "๑๓", // Thai Numeral
        "SipSam", // Thai Transcription
        "Sip Sam", // Thai Transcription with space
        "тринадцять", // Ukrainian
        "تیرہ", // Urdu
        "mười ba", // Vietnamese
        "tri ar ddeg", // Welsh
        "דרייַצן", // Yiddish,
        "דרייצן", // Yiddish (without diacritics),
        "kumi na tatu", // Swahili
        "तेह्र", //Nepali
        "१३", //Devanagari
        "तेरह", //Hindi
        "β", //Think this is beta, which looks like a long 1 mashed together with a 3
        // Thirteen pronunciation
        "θərˈtiːn"
    ];

    if (thirteenStrings.indexOf(('' + x).toLowerCase()) > -1) {
        x = 13;
    }
    // check agin without lower case
    else if (thirteenStrings.indexOf(('' + x)) > -1) {
        x = 13;
    } 
    else if( (typeof x) === "string" && /^[Il1]{13,13}$/.test(x) ) {
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
                        return true;
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
        },
        yearOfBirth: function() {
            var currYear = new Date().getFullYear()
            if(isNaN(x)) {
                return false
            }
            return currYear - parseInt(x) == 13 
        },
        plus: function(y) {
            return {
                thirteen: function() {
                    return x + y === 13;
                }
            }
        },
        minus: function(y) {
            return {
                thirteen: function() {
                    return x - y === 13;
                }
            }
        },
        times: function(y) {
            return {
                thirteen: function() {
                    return x * y === 13;
                }
            }
        },
        dividedby: function(y) {
          return {
    	          thirteen: function(){
                        return x/y === 13;
                }
            }
        },
        canSpell: {
          thirteen: function(){
            return x.toLowerCase().includes("t","h","i","r","t","e","e","n");
          }
        },
        anagramOf:{
          thirteen:function(){
            return x.toLowerCase().split('').sort().join('').trim() == "thirteen".split('').sort().join('').trim();
          }
        }
    }
}


module.exports = is;
