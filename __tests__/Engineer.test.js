const Engineer = require('../lib/Engineer');

const data = {
    name: 'tyler',
    employeeID: '234',
    emailAddress: 'l',
    github: 'blitman12'
}

test('Create an engineer', () => {
    const engineer = new Engineer(data)

    expect(engineer.name).toBe(data.name)
    expect(engineer.id).toBe(data.employeeID)
    expect(engineer.email).toBe(data.emailAddress)
    expect(engineer.github).toBe(data.github)
})

test("get the github username", () => {
    const engineer = new Engineer(data);

    expect(engineer.getGithub()).toBe(data.github)
})

test("get the engineer role", () => {
    const engineer = new Engineer(data);
    expect(engineer.getRole()).toEqual("Engineer")
})