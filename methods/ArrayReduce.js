const ArrayReducePolyfill = (arr, callback, initialValue) => {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    if (accumulator === undefined) {
      accumulator = arr[i];
    } else {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }
  return accumulator;
};

module.exports = ArrayReducePolyfill;
