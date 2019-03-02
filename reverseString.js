const reverseString = str =>
    str
        .split('')
        .reverse()
        .join('')
        .toLowerCase()

module.exports = reverseString