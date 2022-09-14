export const ArrayFilterPolyfill = (arr, callback) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let callbackResult = callback(arr[i], i, arr);
    if (callbackResult) result.push(arr[i]);
  }
  return result;
};
