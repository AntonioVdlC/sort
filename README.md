# sort

[![version](https://img.shields.io/npm/v/@antoniovdlc/sort.svg)](http://npm.im/@antoniovdlc/sort)
[![issues](https://img.shields.io/github/issues-raw/antoniovdlc/sort.svg)](https://github.com/AntonioVdlC/sort/issues)
[![downloads](https://img.shields.io/npm/dt/@antoniovdlc/sort.svg)](http://npm.im/@antoniovdlc/sort)
[![license](https://img.shields.io/npm/l/@antoniovdlc/sort.svg)](http://opensource.org/licenses/MIT)

Custom compare functions for sorting arrays.

## Installation

This package is distributed via npm:

```
npm install @antoniovdlc/sort
```

## Motivation

Sorting arrays is a common operation in JavaScript, so this library provides some common custom compare functions to have a more declarative way of sorting arrays.

## Usage

You can use this library either as an ES module or a CommonJS package:
```js
import { alphabetically, chronologically, numerically } from "@antoniovdlc/sort";
```
*- or -*
```js
const { alphabetically, chronologically, numerically } = require("@antoniovdlc/sort");
```

## Examples

All compare functions can be used out of the box for sorting as follows:

```js
import { numerically } from "@antoniovdlc/sort";

const arr = [1, 2, 2, 23, 30, 4];
arr.sort(numerically); // [1, 2, 2, 4, 23, 30]
```
By default, sorting is doing in an ascending fashion. All compare functions also provide utility fields for descending sorting as well as an explicit ascending sort.

```js
import { numerically } from "@antoniovdlc/sort";

const arr = [1, 2, 2, 23, 30, 4];
arr.sort(numerically.asc); // [1, 2, 2, 4, 23, 30]
```

```js
import { numerically } from "@antoniovdlc/sort";

const arr = [1, 2, 2, 23, 30, 4];
arr.sort(numerically.desc); // [30, 23, 4, 2, 2, 1]
```

Finally, all compare functions provide a `.by("key")` function which allows to sort arrays of objects by nested fields:

```js
const arr = [
  { name: "Bob", age: 23 },
  { name: "Alice", age: 32 },
  { name: "Tom", age: 60 },
  { name: "Candice", age: 45 },
];
arr.sort(numerically.by("age"));
/*
[
  { name: "Bob", age: 23 },
  { name: "Alice", age: 32 },
  { name: "Candice", age: 45 },
  { name: "Tom", age: 60 },
]
*/
```

The same `.asc` and `.desc` functions can be used for sorting arrays of objects:

```js
const arr = [
  { name: "Bob", age: 23 },
  { name: "Alice", age: 32 },
  { name: "Tom", age: 60 },
  { name: "Candice", age: 45 },
];
arr.sort(numerically.by("age").desc);
/*
[
  { name: "Tom", age: 60 },
  { name: "Candice", age: 45 },
  { name: "Alice", age: 32 },
  { name: "Bob", age: 23 },
]
*/
```

## Compare functions

Here is a list of provided compare functions:

### alphabetically
Sorts an array in alphabetical (string) order. Case sensitive.

### alphabeticallyBase
Sorts an array in alphabetical (string) order. Case insensitive.

### chronologically
Sorts an array in chronological (date) order.

### numerically
Sorts an array in numerical (number) order.

## License
MIT