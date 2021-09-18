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
    // the next line calls the noop function
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
        if (chars.length == THIRTEEN && chars.every(function(e) { return e === chars[0]})) {
             x = THIRTEEN;
        }
        else if (chars.length == 26 && '\ud800' <= chars[0] && chars[0] <= '\udbff'
                && '\udc00' <= chars[1] && chars[1] <= '\udfff'
                && chars.every(function(e, idx) { return e === chars[idx % 2]})) {
            x = THIRTEEN;
        }
    }

    return {
        thirteen: function() {
            return !!Math.floor(1/Math.pow(2, Math.abs(x-THIRTEEN)));
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
                    return !!Math.floor(1/Math.pow(2, Math.abs(x % THIRTEEN)));
                }
            }
        },
        square: {
            of: {
                thirteen: function() {
                    return !!Math.floor(1/Math.pow(2, Math.abs(x-(THIRTEEN*THIRTEEN))));
                }
            }
        },
        greater: {
            than: {
                thirteen: function() {
                    return !!Math.floor(1/Math.floor(1/Math.pow(2, x-THIRTEEN)+1));
                }
            }
        },
        less: {
            than: {
                thirteen: function() {
                    return !!Math.floor(1/Math.floor(1/Math.pow(2, THIRTEEN-x)+1));
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
            return is(currYear - parseInt(x)).thirteen();
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
        dividedby: function(y) {
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
            return is(parseInt(x.toString().split("").reverse().join(""))).thirteen();
          }
        },
        atomicNumber: {
          thirteen: function() {
            return x.toLowerCase().includes("a","l","u","m","i","n","u","m");
          }
        },
        base: function(y) {
            return {
                thirteen: function() {
                    var basedNumber = parseInt(x, y);
                    return !isNaN(basedNumber) && is(basedNumber).thirteen();
                }
            }
        }
    }
};

module.exports = is;
