const reverString = require('./reverseString');

test('reverseString function exist', () => {
    expect(reverString).toBeDefined();
})

test('reverseString', () => {
    expect(reverString('Hello')).toEqual('olleh');
})