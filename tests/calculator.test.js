import calculator from '../code/calculator'

test('adding test', () => {
  expect(calculator.add(2, '2')).toBe(4);
});

test('subtract test', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('divide test', () => {
  expect(calculator.divide(3, 2)).toBe(1.5);
});

test('divide by 0 test', () => {
  expect(calculator.divide(3, 0)).toBe(Infinity);
});

test('multiply test', () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});