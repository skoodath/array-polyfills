import { ArrayMapPolyfill } from "./methods/ArrayMap.js";
import { ArrayFilterPolyfill } from "./methods/ArrayFilter.js";
import { ArrayReducePolyfill } from "./methods/ArrayReduce.js";
import { ArrayAtPolyFill } from "./methods/ArrayAt.js";
import { ArrayConcatPolyfill } from "./methods/ArrayConcat.js";
import { ArrayEveryPolyfill } from "./methods/ArrayEvery.js";
import { ArraySomePolyfill } from "./methods/ArraySome.js";

let myArray = [1, 2, 3, 4, 5, 6, 7, 9];

/* Array Map */

const multiplyFive = (val) => val * 5;

let mapBuiltIn = myArray.map(multiplyFive); // 5, 10, 15, 20, 25, 30, 35]
let mapPolyfill = ArrayMapPolyfill(myArray, multiplyFive); // 5, 10, 15, 20, 25, 30, 35]

/* Array Filter */

const greaterThanTwo = (val) => val > 2;

let filterBuiltIn = myArray.filter(greaterThanTwo); // [3, 4, 5, 6, 7]
let filterPolyfill = ArrayFilterPolyfill(myArray, greaterThanTwo); // [3, 4, 5, 6, 7]

/* Array Reduce */

const frequency = (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc);
const sum = (acc, curr) => acc + curr;

let reduceBuiltIn = myArray.reduce(sum, 0); // 37
let reducePolyfill = ArrayReducePolyfill(myArray, frequency, {}); // {1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 9: 1}

/* Array At */

const atBuiltIn = myArray.at(-3); // 6
const atPolyfill = ArrayAtPolyFill(myArray, -7); // 2

/* Array Concat */

const concatBuiltIn = myArray.concat([11, 12, 13]); // [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13]
const concatPolyfill = ArrayConcatPolyfill(myArray, [11, 12, 13]); // [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13]

/* Array Every */

const greaterThanTwoEvery = (val) => val >= 0;

const everyBuiltIn = myArray.every(greaterThanTwoEvery); // true
const everyPolyfill = ArrayEveryPolyfill(myArray, greaterThanTwoEvery); // true

/* Array Some */

const greaterThanTwoSome = (val) => val > 5;

const someBuiltIn = myArray.some(greaterThanTwoSome); // true
const somePolyfill = ArraySomePolyfill(myArray, greaterThanTwoSome); // true
