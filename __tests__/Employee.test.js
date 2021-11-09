const Employee = require('../lib/Employee');

const data = {
        name: 'brad',
        employeeID: 'brad',
        emailAddress: 'brad',
        officeNum: 'brad'
}


test('created a new Employee', () => {
    const employee = new Employee(data)

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String))
})

test('gets employee name', () => {
    const employee = new Employee(data)

    expect(employee.getName()).toEqual(expect.any(String))
})

test('gets employee id', () => {
    const employee = new Employee(data)

    expect(employee.getID()).toEqual(expect.any(String))
})

test('gets employee email', () => {
    const employee = new Employee(data)

    expect(employee.getEmail()).toEqual(expect.any(String))
})

test('gets employee role', () => {
    const employee = new Employee(data)

    expect(employee.getRole()).toEqual("Employee")
})

