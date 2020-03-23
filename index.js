'use strict'

module.exports = isValidAccountName

function isValidAccountName (name) {
  // https://github.com/EOSIO/eos/issues/955
  const regex = new RegExp('(^[a-z1-5.]{0,11}[a-z1-5]$)|(^[a-z1-5.]{12}[a-j1-5]$)')

  if (typeof name !== 'string') return false
  if (!regex.test(name)) return false

  return true
}
