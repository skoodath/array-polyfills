const ArrayAtPolyFill = (arr, index) => {
  let { length } = arr;
  if (index < 0) index += length;
  if (index < 0 || index >= length) return undefined;
  return arr[index];
};

module.exports = ArrayAtPolyFill;
