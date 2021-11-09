const Manager = require('../lib/Manager')

const data = {
    name: 'brad',
    employeeID: 'EID45',
    emailAddress: 'brad@gmail.com',
    officeNum: '150'
}

test('Create new manager', () => {
    const manager = new Manager(data);

    expect(manager.name).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(String))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNumber).toEqual(expect.any(String))
})

test('gets manager role', () => {
    const manager = new Manager(data);

   expect(manager.getRole()).toEqual("Manager")
})