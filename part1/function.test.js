const functions = require('./functions');

// beforeEach(() =>  initDb())
// afterEach(() => closeDb())

beforeAll(() => initDb())
afterAll(() => closeDb())


const initDb = () => console.log('db initialized')
const closeDb = () => console.log('db closed')

const nameCheck = () => console.log('Name checked')

describe('checking name', () => {
    beforeEach(() => nameCheck())
    test('test check',()=>{
        expect(true).toBeTruthy()
    })
});

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

test('should be under 2000', () => {
    const l1 = 500;
    const l2 = 500;
    expect(l1 + l2).toBeLessThan(2000)
})


test('there is no I in team', () => {
    expect('team').not.toMatch(/I/i)
})

test('admin should be in usernames', () => {
    usernames = ['ahmed', 'med', 'khaled'];
    expect(usernames).toContain('ahmed')
})


test('user fetch name should be Leanne Graham', () => {
    // expect.assertions(1);
    functions.fetchUser().then(
        data => {
            expect(data.name).toEqual('Leanne Graham')
        }
    )
})

test('user fetch name should be Leanne Graham', async () => {
    // expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})