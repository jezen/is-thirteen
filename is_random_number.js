/**
  The idea here is to joke with the random numbers.
  You give some natural number and it will return if
  the random method acctually gives you the number 13.

  If it does, it'll return true. if not, false.
*/


function insert_tittle_here (n) {
  var array = [];
  for (var i = 0; i < n; i++) {
    if (13 == Math.floor(Math.random() * 10)) {
      return true
    }
  }
  return false
}
