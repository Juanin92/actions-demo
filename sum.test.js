const sum = require('./sum');

test('Suma dos números', () => {
    expect(sum(1, 2)).toBe(3);
});