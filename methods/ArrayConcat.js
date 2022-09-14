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
