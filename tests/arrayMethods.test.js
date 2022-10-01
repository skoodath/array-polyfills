const ArrayAtPolyFill = require("../methods/ArrayAt");
const ArrayReducePolyfill = require("../methods/ArrayReduce");
const ArrayConcatPolyfill = require("../methods/ArrayConcat");

describe("Testing array method polyfills", () => {
  test("Array at polyfill", () => {
    let arr = [1, 2, 3, 4];
    let findVal = ArrayAtPolyFill(arr, 2);
    expect(findVal).toBe(3);
  });

  test("Array reduce polyfill", () => {
    let arr = [1, 2, 3, 4];
    let callback = (acc, curr) => acc + curr;
    let findVal = ArrayReducePolyfill(arr, callback, 0);
    expect(findVal).toBe(10);
  });
  test("Array concat polyfill", () => {
    let arr = [1, 2, 3, 4];
    let string = "john doe";
    let obj = { name: "john doe" };
    let findVal = ArrayConcatPolyfill(arr, string, obj);
    expect(findVal).toEqual([1, 2, 3, 4, "john doe", { name: "john doe" }]);
  });
});
