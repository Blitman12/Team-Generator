const Manager = require('../lib/Manager')

const data = {
    name: 'brad',
    employeeID: 'EID45',
    emailAddress: 'brad@gmail.com',
    officeNum: '150'
}

test('Create new manager', () => {
    const manager = new Manager(data);

    expect(manager.name).toBe(data.name)
    expect(manager.id).toBe(data.employeeID)
    expect(manager.email).toBe(data.emailAddress)
    expect(manager.officeNumber).toBe(data.officeNum)
})

test('gets manager role', () => {
    const manager = new Manager(data);
    expect(manager.getRole()).toEqual("Manager")
})