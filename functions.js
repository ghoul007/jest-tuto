const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { name: "ahmed" }
        user['age'] = 30;
        return user
    }
}

module.exports = functions