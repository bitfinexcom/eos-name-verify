'use strict'

module.exports = isValidAccountName

function isValidAccountName (name) {
  if (typeof name !== 'string') return false
  if (name.length !== 12) return false
  if (!/[a-z]/.test(name[0])) return false

  return !/[^abcdefghijklmnopqrstuvwxyz12345\.]/.test(name)
}
