var t = require('tap')
var uniqueFilename = require('..')

t.plan(6)

var randomTmpfile = uniqueFilename('tmp')
t.match(randomTmpfile, /^tmp.[a-f0-9]{8}$/, 'random tmp file')

var randomAgain = uniqueFilename('tmp')
t.not(randomAgain, randomTmpfile, 'random tmp files are not the same')

var randomPrefixedTmpfile = uniqueFilename('tmp', 'my-test')
t.match(randomPrefixedTmpfile, /^tmp.my-test-[a-f0-9]{8}$/, 'random prefixed tmp file')

var randomPrefixedAgain = uniqueFilename('tmp', 'my-test')
t.not(randomPrefixedAgain, randomPrefixedTmpfile, 'random prefixed tmp files are not the same')

var uniqueTmpfile = uniqueFilename('tmp', 'testing', '/my/thing/to/uniq/on')
t.match(uniqueTmpfile, /^tmp.testing-7ddd44c0$/, 'unique filename')

var uniqueAgain = uniqueFilename('tmp', 'testing', '/my/thing/to/uniq/on')
t.equal(uniqueTmpfile, uniqueAgain, 'same unique string component produces same filename')
