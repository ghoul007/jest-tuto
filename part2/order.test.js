const orderTotal = require('./order')

test('order should be 1064', async() => {
    const someOrder = {
        items: [
            { name: "prod1", price: 8, quantity: 8 },
            { name: "prod2 test", price: 500, quantity: 2 },
            { name: "prod2 test", price: 500, shipping: true }
        ]
    }
    const order = await orderTotal(someOrder);
    expect(order).toBe(1064)
})