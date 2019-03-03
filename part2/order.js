const someOrder = {
    items: [
        { name: "prod1", price: 8, quantity: 8 },
        { name: "prod2 test", price: 500, quantity: 2 },
        { name: "prod2 test", price: 500, shipping: true }
    ]
}

const orderTotal = order => {
    return new Promise((resolve, reject) => {

        const totalElements = order.items
            .filter(x => !x.shipping)
            .reduce((a, e) => a + (e.price * e.quantity), 0)
        const shippingItem = order.items.find(x => !!x.shipping)
        const shipping = totalElements > 1000 ? 0 : shippingItem.price
        resolve(totalElements + shipping)
    })
}
result = orderTotal(someOrder);

module.exports = orderTotal