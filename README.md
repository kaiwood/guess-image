# guess-image

## Install

```bash
npm install guess-image
```

## Usage

```javascript
const guessImage = require("guess-image");

(async function() {
  const image = await guessImage("https://example.com/123");
  // => 'https://example.com/path/to/pic.png'
})();
```

## LICENSE

MIT
