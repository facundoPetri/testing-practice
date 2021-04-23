import arrayAnalysis from "../code/arrayAnalysis";

test("test 1", () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("test 2", () => {
  expect(arrayAnalysis([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
});


test("test 3", () => {
  expect(arrayAnalysis([5, 1, 2, 3, 7, 1])).toEqual({
    average: 19 / 6,
    min: 1,
    max: 7,
    length: 6,
  });
});
