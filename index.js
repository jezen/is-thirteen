var is = require('./is');

/**
 * @param f {function} The function to check if it's thirteen
 * @returns {object}
 */
function isFunction(f){
  if(typeof(f) != "function")
    return undefined;
    
  return is(f.name);
}

module.exports = is;
module.exports.isFunction = isFunction;
