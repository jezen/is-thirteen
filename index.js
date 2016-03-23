'use strict';

/**
 * @param n {number} The number to compare
 * @param strictEquality {boolean} Whether strict equality should be used
 * @returns {boolean}
 */
function isThirteen(n, strictEquality) {
  return (strictEquality === true) ? n === 13 : n == 13;
}

module.exports = isThirteen;
