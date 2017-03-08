'use strict'

const test = require('tap').test
const helpIs = require('./')

test('isDate', (t) => {
  const is = helpIs.isDate
  const d = (new Date()).toISOString()

  t.equal(is(null), false)
  t.equal(is(false), false)
  t.equal(is('fadsfasdf'), false)
  t.equal(is(d), true)
  t.equal(is(new Date()), true)
  t.equal(is({}), false)
  t.equal(is({
    toISOString() {
      return {}
    }
  }), false)
  t.equal(is(d.substring(0, d.length - 1)), false)
  const a1 = '2017-01-27T16:19:34.798+00:00'
  const a2 = '2017-01-27T16:19:34.798Z'
  const a3 = '2017-01-27T16:19:34.79+00:00'
  const a4 = '2017-01-27T16:19:34.7+00:00'
  const a5 = '2017-02-22T14:50:20+00:00'
  t.equal(is(a1), true)
  t.equal(is(a2), true)
  t.equal(is(a3), true)
  t.equal(is(a4), true)
  t.equal(is(a5), true)
  t.end()
})

test('isEmail', (t) => {
  const is = helpIs.isEmail
  t.equal(is('biscuits'), false)
  t.equal(is('evan@me.com'), true)
  t.equal(is('biscuits@thing.biscuits'), false)
  t.end()
})

test('isEmailAllowName', (t) => {
  const is = helpIs.isEmailAllowName
  t.equal(is(null), false)
  t.equal(is('evan@me.com'), true)
  t.equal(is('Evan <evan@me.com>'), true)
  t.equal(is('Evan Lucas <evan@me.com>'), true)
  t.equal(is('\'Evan Lucas\' <evan.lucas@me.com>'), true)
  t.equal(is('"Evan Lucas" <evan@me.com>'), true)
  t.equal(is('"Evan" <evan@me.com>'), true)
  t.equal(is('Evan <evan@me.com'), false)
  t.end()
})

test('isUUID', (t) => {
  const is = helpIs.isUUID
  t.equal(is('713ae7e3-cb32-45f9-adcb-7c4fa86b90c1'), true)
  t.equal(is('625e63f3-58f5-40b7-83a1-a72ad31acffb'), true)
  t.equal(is('57b73598-8764-4ad0-a76a-679bb6640eb1'), true)
  t.equal(is('9c858901-8a57-4791-81fe-4c455b099bc9'), true)
  t.equal(is('9c858901-8a57-7791-81fe-4c455b099bc9'), false)
  t.equal(is('9c858901-8a57-7791-81fe-4c455b099bc'), false)
  t.equal(is(1234), false)
  t.end()
})
