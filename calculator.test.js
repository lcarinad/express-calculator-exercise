const helpers = require("./helpers");

describe("mean function", function () {
  test("mean should return the mean value of an arr of nums", function () {
    let result = helpers.mean([2, 4, 6, 8]);
    expect(result).toEqual(5);
  });
  test("return mean with neg numbers", function () {
    let result = helpers.mean([-2, -4, 6, 8]);
    expect(result).toEqual(2);
  });
});

describe("mode function", function () {
  test("mode should return most freq occured value in arr", function () {
    let result = helpers.mode([2, 4, 2, 6, 2, 8]);
    expect(result).toEqual([2]);
  });
  test("mode should return all vals if multiple ", function () {
    let result = helpers.mode([2, 4, 2, 3, 2, 5, 4, 4]);
    expect(result).toEqual([2, 4]);
  });
});

describe("median function", function () {
  test("median should return median in an arr of sorted numbers", function () {
    let result = helpers.median([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result).toEqual(5);
  });
  test("median should return median in arr of non-sorted nums ", function () {
    let result = helpers.median([9, 1, 8, 2, 7, 3, 6, 5, 4]);
    expect(result).toEqual(5);
  });
});
