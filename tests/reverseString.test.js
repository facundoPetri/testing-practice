import reverseString from "../code/reverseString";

test("correctly reverse string", () => {
  expect(reverseString('Hola')).toBe('aloH')
});

test("correctly reverse string with more than one word", () => {
  expect(reverseString('Hola todo bien')).toBe('neib odot aloH')
});

test("skips numbers", () => {
  expect(reverseString('344')).toBe('344')
});