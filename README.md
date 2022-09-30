## Array Polyfills

A list of array methods and its polyfills with some common examples.

```JavaScript
let myArray = [1, 2, 3, 4, 5, 6, 7, 9];
```

### Array.prototype.map

```JavaScript

export const ArrayMapPolyfill = (arr, callback) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
};

const multiplyFive = (val) => val * 5; // Example callback

let mapBuiltIn = myArray.map(multiplyFive); // 5, 10, 15, 20, 25, 30, 35]
let mapPolyfill = ArrayMapPolyfill(myArray, multiplyFive); // 5, 10, 15, 20, 25, 30, 35]
```

### Array.prototype.filter

```JavaScript
export const ArrayFilterPolyfill = (arr, callback) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let callbackResult = callback(arr[i], i, arr);
    if (callbackResult) result.push(arr[i]);
  }
  return result;
};

const greaterThanTwo = (val) => val > 2; // Sample callback

let filterBuiltIn = myArray.filter(greaterThanTwo); // [3, 4, 5, 6, 7]
let filterPolyfill = ArrayFilterPolyfill(myArray, greaterThanTwo); // [3, 4, 5, 6, 7]
```

### Array.prototype.reduce

```JavaScript
const frequency = (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc); // Sample callback 1
const sum = (acc, curr) => acc + curr; // Sample callback 2

let reduceBuiltIn = myArray.reduce(sum, 0); // 37
let reducePolyfill = ArrayReducePolyfill(myArray, frequency, {}); // {1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 9: 1}
```

### Array.prototype.at

```JavaScript
export const ArrayAtPolyFill = (arr, index) => {
let { length } = arr;
if (index < 0) index += length;
if (index < 0 || index >= length) return undefined;
return arr[index];
};

const atBuiltIn = myArray.at(-3); // 6
const atPolyfill = ArrayAtPolyFill(myArray, -7); // 2
```

### Array.protoype.concat

```JavaScript
export const ArrayConcatPolyfill = (...args) => {
let result = [];
for (let a of args) {
if (Array.isArray(a)) {
result.push(...a);
} else {
result.push(a);
}
}
return result;
};

const concatBuiltIn = myArray.concat([11, 12, 13], "John Doe"); // [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, "John Doe"]
const concatPolyfill = ArrayConcatPolyfill(myArray, [11, 12, 13], "John Doe"); // [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, "John Doe"]
```

### Array.prototype.every

```JavaScript

export const ArrayEveryPolyfill = (arr, callback) => {
  let result;
  for (let i = 0; i < arr.length; i++) {
    result = callback(arr[i], i, arr);
    if (!result) return false;
  }
  return true;
};

const greaterThanTwoEvery = (val) => val >= 0; // Sample callback

const everyBuiltIn = myArray.every(greaterThanTwoEvery); // true
const everyPolyfill = ArrayEveryPolyfill(myArray, greaterThanTwoEvery); // true
```

## Array.prototype.some

```JavaScript

export const ArraySomePolyfill = (arr, callback) => {
  let result;
  for (let i = 0; i < arr.length; i++) {
    result = callback(arr[i], i, arr);
    if (result) return true;
  }
  return false;
};

const greaterThanTwoSome = (val) => val > 5; // Sample callback

const someBuiltIn = myArray.some(greaterThanTwoSome); // true
const somePolyfill = ArraySomePolyfill(myArray, greaterThanTwoSome); // true
```
