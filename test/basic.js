/* eslint-env mocha */

'use strict'

const assert = require('assert')
const isValidAccountName = require('..')

describe('verifies account names', () => {
  it('must be a string', () => {
    assert.strictEqual(isValidAccountName({}), false)
    assert.strictEqual(isValidAccountName([]), false)
  })

  it('must be <= 13 chars of length and >= 1 chars', () => {
    assert.strictEqual(isValidAccountName('testfaucet11'), true)
    assert.strictEqual(isValidAccountName('test.io'), true)

    assert.strictEqual(isValidAccountName('testfaucet11111'), false)
    assert.strictEqual(isValidAccountName('t'), true)
  })

  it('first 12 character can be a-z or 1-5 or .', () => {
    assert.strictEqual(isValidAccountName('testfaucet11'), true)
    assert.strictEqual(isValidAccountName('1testfaucet1'), true)
    assert.strictEqual(isValidAccountName('.testfaucet1'), true)
  })

  it('13th character can only be a-j or 1-5', () => {
    assert.strictEqual(isValidAccountName('testfaucet11k'), false)
    assert.strictEqual(isValidAccountName('testfaucet116'), false)

    assert.strictEqual(isValidAccountName('testfaucet11j'), true)
    assert.strictEqual(isValidAccountName('testfaucet115'), true)
  })

  it('last character cant be .', () => {
    assert.strictEqual(isValidAccountName('.'), false)
    assert.strictEqual(isValidAccountName('aa.'), false)
  })

  it('only abcdefghijklmnopqrstuvwxyz12345. are allowed', () => {
    assert.strictEqual(isValidAccountName('testfaucet11'), true)
    assert.strictEqual(isValidAccountName('testfa.ucet1'), true)
    assert.strictEqual(isValidAccountName('testfa.ucet5'), true)
    assert.strictEqual(isValidAccountName('t55tf..ucet5'), true)

    assert.strictEqual(isValidAccountName('tbcox456'), false)
    assert.strictEqual(isValidAccountName('tbCOX'), false)
    assert.strictEqual(isValidAccountName('booleanjulien'), false)

    assert.strictEqual(isValidAccountName('test@aucet11'), false, 'test@aucet11')
    assert.strictEqual(isValidAccountName('testFaucet11'), false, 'testFaucet11')
    assert.strictEqual(isValidAccountName('test_aucet11'), false, 'test_aucet11')
    assert.strictEqual(isValidAccountName('testfaucet16'), false, 'testfaucet16')
  })
})
