const chunkArray = require('./chunk')


test('chunk function exist', () => {
    expect(chunkArray).toBeDefined();
})


test('chunk an array of two values', () => {
    const numbers = [1, 2, 3, 4, 5, 6]
    expect(chunkArray(numbers, 2)).toEqual([[1, 2], [3, 4], [5, 6]])
})
