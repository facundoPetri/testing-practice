import caesar from "../code/caesarCipher";

test("test 1", () => {
  expect(caesar("al ataque", 4)).toBe("ep exeuyi");
});

test("test 2", () => {
  expect(caesar("al ataque 2", 4)).toBe("ep exeuyi 2");
});

test("test 3", () => {
  expect(caesar("Al ataque 2", 4)).toBe("Ep exeuyi 2");
});