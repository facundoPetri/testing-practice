import capitalize from '../code/capitalize'

test('correctly capitalizes first letter (one word)', () => {
  expect(capitalize('hola')).toBe('Hola');
});

test('correctly capitalizes first letter (with spaces)', () => {
  expect(capitalize('              hola  ')).toBe('Hola');
});

test('correctly capitalizes first letter (more than one word)', () => {
  expect(capitalize('hola todo bien?')).toBe('Hola todo bien?');
});

test('correctly capitalizes first letter (already capitalized)', () => {
  expect(capitalize('HolA')).toBe('HolA');
});

test('no string provided', () => {
  expect(capitalize(null)).toBe(null);
});