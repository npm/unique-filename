const { test } = require('node:test')
const assert = require('node:assert')
const uniqueFilename = require('..')

test('random tmp file', () => {
  const randomTmpfile = uniqueFilename('tmp')
  assert.match(randomTmpfile, /^tmp.[a-f0-9]{8}$/)
})

test('random tmp files are not the same', () => {
  const randomTmpfile = uniqueFilename('tmp')
  const randomAgain = uniqueFilename('tmp')
  assert.notEqual(randomAgain, randomTmpfile)
})

test('random prefixed tmp file', () => {
  const randomPrefixedTmpfile = uniqueFilename('tmp', 'my-test')
  assert.match(randomPrefixedTmpfile, /^tmp.my-test-[a-f0-9]{8}$/)
})

test('random prefixed tmp files are not the same', () => {
  const randomPrefixedTmpfile = uniqueFilename('tmp', 'my-test')
  const randomPrefixedAgain = uniqueFilename('tmp', 'my-test')
  assert.notEqual(randomPrefixedAgain, randomPrefixedTmpfile)
})

test('unique filename', () => {
  const uniqueTmpfile = uniqueFilename('tmp', 'testing', '/my/thing/to/uniq/on')
  assert.match(uniqueTmpfile, /^tmp.testing-baa80893$/)
})

test('same unique string component produces same filename', () => {
  const uniqueTmpfile = uniqueFilename('tmp', 'testing', '/my/thing/to/uniq/on')
  const uniqueAgain = uniqueFilename('tmp', 'testing', '/my/thing/to/uniq/on')
  assert.strictEqual(uniqueTmpfile, uniqueAgain)
})
