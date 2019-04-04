/* eslint-env mocha */

'use strict'

const assert = require('assert')
const isValidAccountName = require('..')

describe('verifies account names', () => {
  it('must be a string', () => {
    assert.strictEqual(isValidAccountName({}), false)
    assert.strictEqual(isValidAccountName([]), false)
  })

  it('must be 12 chars of length', () => {
    assert.strictEqual(isValidAccountName('testfaucet11'), true)
    assert.strictEqual(isValidAccountName('testfaucet1'), false)
    assert.strictEqual(isValidAccountName('testfaucet111'), false)
  })

  it('must start with a letter', () => {
    assert.strictEqual(isValidAccountName('testfaucet11'), true)
    assert.strictEqual(isValidAccountName('1testfaucet1'), false)
    assert.strictEqual(isValidAccountName('.testfaucet1'), false)
  })

  it('only abcdefghijklmnopqrstuvwxyz12345. are allowed', () => {
    assert.strictEqual(isValidAccountName('testfaucet11'), true)
    assert.strictEqual(isValidAccountName('testfa.ucet1'), true)
    assert.strictEqual(isValidAccountName('testfa.ucet5'), true)
    assert.strictEqual(isValidAccountName('t55tf..ucet5'), true)

    assert.strictEqual(isValidAccountName('test@aucet11'), false, 'test@aucet11')
    assert.strictEqual(isValidAccountName('testFaucet11'), false, 'testFaucet11')
    assert.strictEqual(isValidAccountName('test_aucet11'), false, 'test_aucet11')
    assert.strictEqual(isValidAccountName('testfaucet16'), false, 'testfaucet16')
  })
})
