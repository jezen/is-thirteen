var noop = require('noop3');
var consts = require('./consts');

const THIRTEEN = consts.THIRTEEN;
const THIRTEEN_FUZZ = consts.THIRTEEN_FUZZ;
const thirteenStrings = consts.thirteenStrings;

'use strict';

/**
 * @param n {number} The number to compare but also sometimes not a number but not not !NaN
 * @returns {object}
 */
var is = function is(x) {
    // this line calls the noop function
    noop();

    // Every element should be lower case

    if (thirteenStrings.indexOf(('' + x).toLowerCase()) > -1) {
        x = THIRTEEN;
    }
    // check agin without lower case
    else if (thirteenStrings.indexOf(('' + x)) > -1) {
        x = THIRTEEN;
    }
    else if( (typeof x) === "string" && /^[Il1]{13,13}$/.test(x) ) {
        x = THIRTEEN;
    }
    else if (typeof x === 'string') {
        var chars = (x).split('');
        if (chars.length == 13 && chars.every(function(e) { return e === chars[0]})) {
             x = 13;
        }
    }

    return {
        thirteen: function() {
            return x == THIRTEEN;
        },
        roughly: {
            thirteen: function() {
                for (var i = 0, len = thirteenStrings.length; i < len; i++) {
                    if (('' + x).toLowerCase().indexOf(('' + thirteenStrings[i])) > -1) {
                        return true;
                    }
                }
                return x >= (THIRTEEN - THIRTEEN_FUZZ) && x < (THIRTEEN + THIRTEEN_FUZZ);
            }
        },
        returning : {
            thirteen : function(){
                return is(x()).thirteen();
            }
        },
        not: {
            thirteen: function() {
                return !is(x).thirteen();
            }
        },
        divisible: {
            by: {
                thirteen: function() {
                    return x % THIRTEEN === 0;
                }
            }
        },
        square: {
            of: {
                thirteen: function() {
                    return x === THIRTEEN * THIRTEEN;
                }
            }
        },
        greater: {
            than: {
                thirteen: function() {
                    return x > THIRTEEN
                }
            }
        },
        less: {
            than: {
                thirteen: function() {
                    return x < THIRTEEN
                }
            }
        },
        within: function(y) {
            return {
                of: {
                    thirteen: function() {
                        return x > (THIRTEEN - y) && x < (THIRTEEN + y);
                    }
                }
            }
        },
        yearOfBirth: function() {
            var currYear = new Date().getFullYear()
            if(isNaN(x)) {
                return false
            }
            return currYear - parseInt(x) == THIRTEEN
        },
        plus: function(y) {
            return is(x + y);
        },
        minus: function(y) {
            return is(x - y);
        },
        times: function(y) {
            return is(x * y);
        },
        dividedBy: function(y) {
          return is(x / y);
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
        },
        backwards: {
          thirteen: function() {
            return parseInt(x.toString().split("").reverse().join("")) == THIRTEEN;
          }
        },
        base: function(y) {
            return {
                thirteen: function() {
                    var basedNumber = parseInt(x, y);
                    return !isNaN(basedNumber) && basedNumber == THIRTEEN;
                }
            }
        }
    }
};

module.exports = is;
