const Employee = require('../lib/Employee');

const data = {
        name: 'brad',
        employeeID: '565',
        emailAddress: 'brad@gmail.com',
        officeNum: '565'
}


test('created a new Employee', () => {
    const employee = new Employee(data)

    expect(employee.name).toBe(data.name)
    expect(employee.id).toBe(data.employeeID)
    expect(employee.email).toBe(data.emailAddress)
})

test('gets employee name', () => {
    const employee = new Employee(data)

    expect(employee.getName()).toBe(data.name)
})

test('gets employee id', () => {
    const employee = new Employee(data)

    expect(employee.getID()).toBe(data.employeeID)
})

test('gets employee email', () => {
    const employee = new Employee(data)

    expect(employee.getEmail()).toBe(data.emailAddress)
})

test('gets employee role', () => {
    const employee = new Employee(data)

    expect(employee.getRole()).toEqual("Employee")
})

