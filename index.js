function isThirteen(n, strictEquality) {
  return (strictEquality === true) ? n === 13 || n == 13;
}

module.exports = isThirteen;
