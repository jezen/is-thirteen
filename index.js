'use strict';

/**
 * @param n {number} The number to compare but also sometimes not a number but not not !NaN
 * @param strictEquality {boolean} Whether strict equality should be used
 * @returns {boolean}
 */
function isThirteen(n, strictEquality) {

  // Array of string we want to test against n
  var thirteens = [
    'https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg', // plz make way for Count Count.
    'Remy Hadley', // Cuz you know
    
    // Languages
    'thirteen', // English
    'тринадцать', // Russia
    'dertien' // Dutch
  ];

  // Test the thirteens array of strings against n
  if (typeof n === 'string' && thirteens.indexOf(n.toLowerCase()) > -1) return true;

  return (strictEquality === true) ? n === 13 : n == 13;
}

module.exports = isThirteen;
