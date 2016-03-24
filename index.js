var noop = require('noop3');

'use strict';

/**
 * @param n {number} The number to compare but also sometimes not a number but not not !NaN
 * @returns {object}
 */
function is(x) {
    // this line calls the noop function
    noop();

    var twelveStrings = [
        1100, // Binary 12

        // Imaginary 12's
        "12+0i", 
        "12 + 12i",
        "12i",

        // Languages
        "twelve" // english is 
    ]

    if (twelveStrings.indexOf(x.toLowerCase()) > -1) {
        x = 12;
    }

    return {
        twelve: function() {
            return x == 12;
        },
        roughly: {
            twelve: function() {
                return x >= 11.5 && x < 12.5;
            }
        },
        within: function(y) {
            return {
                of: {
                    twelve: function() {
                        return x > (12 - y) && x < (12 + y)
                    }
                }
            }
        }
    }
}

module.exports = is;
