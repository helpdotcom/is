'use strict'

const url = require('url')
const tld = require('tldjs')
const net = require('net')
const ipAddress = require('ip-address')
const emailRE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
const EMAIL_NAME_RE = new RegExp(
  '^[a-z \\d!#\\$%&\'\\*\\+\\-\\/=\\?\\^_"`{\\|\\,\\(\\)'
  + '}~\\.\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]*'
  + '<(.+)>$', 'i'
)
const uuidRE = new RegExp('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]' +
  '{3}-[89ABab][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$')
const dateRE = new RegExp('^[\\d]{4}-[\\d]{2}-[\\d]{2}T[\\d]{2}:[\\d]{2}:' +
  '[\\d]{2}(\.[\\d]{1,3})?(Z|[\\+\\-][\\d]{2}:[\\d]{2})$')

const protocols = new Set([
  'http:'
, 'https:'
])

exports.isDate = function isDate(d) {
  if (!d) return false
  if (typeof d === 'object' && d.toISOString) {
    return dateRE.test(d.toISOString())
  }
  return dateRE.test(d)
}

exports.isEmail = function isEmail(s) {
  if (typeof s !== 'string') return false
  if (s.length >= 255) return false
  return tld.tldExists(s) && emailRE.test(s)
}

exports.isEmailAllowName = function isEmailAllowName(s) {
  if (typeof s !== 'string') return false
  const match = s.match(EMAIL_NAME_RE)
  if (match) {
    return exports.isEmail(match[1])
  }

  return exports.isEmail(s)
}

// TODO(evanlucas) benchmark the difference between the current implementation
// and using a a custom implementation.
exports.isUUID = function isUUID(s) {
  if (typeof s !== 'string') return false
  if (s.length !== 36) return false
  return uuidRE.test(s)
}

exports.isUrl = function isUrl(s) {
  if (typeof s !== 'string') return false
  const u = url.parse(s)
  return protocols.has(u.protocol) && !!u.host && !!u.path
}

exports.isIp = function isIp(s) {
  if (typeof s !== 'string') return false
  if (net.isIP(s) !== 0) return true
  const IpAddressType = s.indexOf(':') > -1
    ? ipAddress.Address6 : ipAddress.Address4
  const address = new IpAddressType(s)
  return address.isValid()
}
