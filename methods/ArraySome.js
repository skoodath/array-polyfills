export const ArraySomePolyfill = (arr, callback) => {
  let result;
  for (let i = 0; i < arr.length; i++) {
    result = callback(arr[i], i, arr);
    if (result) return true;
  }
  return false;
};
