# ProfMod

ProfMod is a lightweight JavaScript class for detecting and masking profane words in text.

It uses the `profaneBucket` word dictionary exported by `dictionary.js` and provides methods to test text, list detected words, and replace profanity with `***`.

## Features

- Detect profane words in a sentence
- Return a list of the detected profane words
- Replace profane words with `***`
- Ignore case when checking text
- Work as an ES module

## Requirements

- A JavaScript runtime that supports ES modules
- Node.js 12 or newer

## Installation

Clone the repository and keep `app.js`, `dictionary.js`, and `examples/` together:

```sh
git clone <repository-url>
cd ProfMod
```

Run a JavaScript file that uses ES module imports. For Node.js, add `"type": "module"` to a `package.json`, or use a JavaScript environment that already supports ES modules.

## Usage

Import the default `ProfMod` class from `app.js`:

```js
import ProfMod from "./app.js";

const text = "This damn project is full of bullshit.";
const moderator = new ProfMod(text);
```

### Test for profanity

Use `test()` to check whether the text contains a profane word.

```js
moderator.test();
// true
```

Behavior:

- Returns `true` when at least one word from the dictionary is found
- Returns `false` when no profane words are found
- Logs an error and returns `undefined` when no text or a non-string value is provided

```js
new ProfMod("").test();
// Logs: No text detected

new ProfMod(123).test();
// Logs: Non-string detected. Requires a string
```

### Get detected words

Use `show()` to return the profane words found in the text as an array.

```js
const moderator = new ProfMod("What the fuck is this bullshit?");

console.log(moderator.show());
// ["fuck", "bullshit"]
```

### Sanitize text

Use `sanitize()` to replace detected profane words with `***`.

```js
const moderator = new ProfMod("What the fuck is this bullshit?");

console.log(moderator.sanitize());
// "What the *** is this ***?"
```

## API

### `new ProfMod(text)`

Creates a moderator instance.

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `""` | The text to test and sanitize |

### `test()`

Scans the text and reports whether profanity was detected.

**Returns:** `boolean | undefined`

### `show()`

Returns all detected profane words.

**Returns:** `string[]`

### `sanitize()`

Returns the original text with detected profane words replaced by `***`.

**Returns:** `string`

## Running the Example

The example in [examples/test.js](examples/test.js) demonstrates all methods:

```sh
node examples/test.js
```

## Behavior Notes

- Matching is case-insensitive.
- Text is scanned by splitting it on spaces.
- Punctuation such as `. , ? : ; ! @` is removed during detection.
- The original spacing and capitalization are preserved as much as possible when sanitizing.
- The dictionary can be extended or customized in [dictionary.js](dictionary.js).