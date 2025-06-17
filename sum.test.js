const sum = require('./sum');

test('Suma dos números', () => {
    expect(sum(3, 2)).toBe(5);
});