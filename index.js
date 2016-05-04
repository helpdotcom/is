'use strict'

const tld = require('tldjs')
const emailRE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
const uuidRE = new RegExp('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]' +
  '{3}-[89ABab][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$')

exports.isDate = function isDate(d) {
  // TODO(evanlucas) We may want to make this only accept an ISO string.
  // If we go that route (which I think we should) we could probably just
  // move this to a regex.
  let date = new Date(d)
  let a = date.getTime()
  return a === a
}

exports.isEmail = function isEmail(s) {
  return tld.tldExists(s) && emailRE.test(s) && s.length < 255
}

// TODO(evanlucas) benchmark the difference between the current implementation
// and using a a custom implementation.
exports.isUUID = function isUUID(s) {
  if (typeof s !== 'string') return false
  if (s.length !== 36) return false
  return uuidRE.test(s)
}
