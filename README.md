unique-filename
===============

Generate a unique filename for use in temporary directories or caches.

```
var uniqueFilename = require('unique-filename')

// returns something like: /tmp/912ec803b2ce49e4a541068d495ab570
var randomTmpfile = uniqueFilename(os.tmpdir())

// returns something like: /tmp/my-test-912ec803b2ce49e4a541068d495ab570
var randomPrefixedTmpfile = uniqueFilename(os.tmpdir(), 'my-test')

var uniqueTmpfile = uniqueFilename('/tmp', 'testing', '/my/thing/to/uniq/on')
```

### uniqueFilename(dir, fileprefix, uniqstr) → String

