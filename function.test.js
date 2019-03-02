const functions = require('./functions');

test('Adds  3 + 3 to equal 6', () => {
    expect(functions.add(3, 3)).toBe(6)
})

test('Adds  3 + 3 to not equal 6', () => {
    expect(functions.add(3, 3)).not.toBe(5)
})

test('should be null', () => {
    expect(functions.isNull()).toBeNull()
})

test('should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy()
})

test('user should be brad traversy object', () => {
    expect(functions.createUser()).toEqual({ name: "ahmed", age: 30 })
})

