import createURL from "utils/filter-manager"

describe("Create URL", () => {
  test('NO Filters', () => {
    expect(createURL({})).toBe('');
  });
  describe('Valid filters', () => {
    test('1 Filter', () => {
      expect(createURL({name: "John"})).toBe('?name=John');
    });

    test('Many Filters', () => {
      expect(createURL({name: "John", price: 123})).toBe('?name=John&price=123');
    });
  });

  describe('Invalid filters', () => {
    test('value = Object', () => {
      expect(createURL({name: {some: "object"}})).toBe('');
    });

    test('value = Array', () => {
      expect(createURL({name: [1, 2, 3]})).toBe('');
    });

    test('value = null', () => {
      expect(createURL({name: null})).toBe('');
    });

    test('value = undefined', () => {
      expect(createURL({name: undefined})).toBe('');
    });
  });
})
