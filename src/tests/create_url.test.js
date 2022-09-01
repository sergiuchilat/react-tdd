import createURL from "../utils/filter-manager"

test('Create URL with NO Filters', () => {
  expect(createURL({})).toBe('');
});

test('Create URL with 1 Filter', () => {
  expect(createURL({name: "John"})).toBe('?name=John');
});

test('Create URL with Many Filters', () => {
  expect(createURL({name: "John", price: 123})).toBe('?name=John&price=123');
});

test('Create URL with Invalid Filter value = Object', () => {
  expect(createURL({name: {some: "object"}})).toBe('');
});

test('Create URL with Invalid Filter value = null', () => {
  expect(createURL({name: null})).toBe('');
});

test('Create URL with Invalid Filter value = undefined', () => {
  expect(createURL({name: undefined})).toBe('');
});