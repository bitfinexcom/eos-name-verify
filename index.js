'use strict'

module.exports = isValidAccountName

function isValidAccountName(name) {
  return typeof name === 'string'
    && /(^[a-z1-5.]{0,11}[a-z1-5]$)|(^[a-z1-5.]{12}[a-j1-5]$)/.test(name);
}
