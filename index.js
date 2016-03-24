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
        1101, // Binary 13
        "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg", // Just because we can
        "rem hadley", // And because he's 13

        // Languages
        "thirteen", // English
        "тринадцать", // Russia
        "trzynaście", // Polish
        "trece", // Spanish
        "tredici", // Italian
        "13+0i", //Imaginary 13's
        "13 + 13i",
        "13i"
    ]

    if (thirteenStrings.indexOf(x.toLowerCase()) > -1) {
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
        within: function(y) {
            return {
                of: {
                    thirteen: function() {
                        return x > (13 - y) && x < (13 + y)
                    }
                }
            }
        }
    }
}

module.exports = is;
