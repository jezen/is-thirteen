var noop = require('noop3'), consts = require('./consts'), { THIRTEEN, THIRTEEN_FUZZ, thirteenStrings } = consts;
var is = x => ({
    thirteen: () => thirteenStrings.includes((''+x).toLowerCase()) || /^[Il1]{13,13}$/.test(x) || (typeof x === 'string' && (x.length === 13 && x[0] === x[12]) || (x.length === 26 && /^\ud800[\udc00-\udfff]$/.test(x))),
    roughly: { thirteen: () => thirteenStrings.some(s => (''+x).toLowerCase().includes(s)) || x >= THIRTEEN-THIRTEEN_FUZZ && x < THIRTEEN+THIRTEEN_FUZZ },
    returning: { thirteen: () => is(x()).thirteen() },
    not: { thirteen: () => !is(x).thirteen() },
    divisible: { by: { thirteen: () => x % THIRTEEN === 0 } },
    square: { of: { thirteen: () => x === THIRTEEN*THIRTEEN } },
    greater: { than: { thirteen: () => x > THIRTEEN } },
    less: { than: { thirteen: () => x < THIRTEEN } },
    within: y => ({ of: { thirteen: () => x > THIRTEEN-y && x < THIRTEEN+y } }),
    yearOfBirth: () => !isNaN(x) && (new Date().getFullYear() - parseInt(x)) === THIRTEEN
}); module.exports = is;