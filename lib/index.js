var path = require('path')
var crypto = require('node:crypto')

module.exports = function (filepath, prefix, uniq) {
  var slug = uniq
    ? crypto.createHash('sha512').update(uniq).digest('hex').slice(0, 8)
    : crypto.randomBytes(4).toString('hex')
  return path.join(filepath, (prefix ? prefix + '-' : '') + slug)
}
