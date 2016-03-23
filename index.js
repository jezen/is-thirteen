function isThirteen(n, strictEquality) {
  if (strictEquality === true) {
    return n === 13;
  }
  
  return n == 13;
}

module.exports = isThirteen;
