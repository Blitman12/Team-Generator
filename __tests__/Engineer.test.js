const Engineer = require('../lib/Engineer');

const data =  {
    name: 'tyler',
    employeeID: '234',
    emailAddress: 'l',
    github: 'blitman12'
  }

test('Create an engineer', () => {
    const engineer = new Engineer(data)

    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(String))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String))
})

test("get the github username", () => {
    const engineer = new Engineer(data);

    expect(engineer.getGithub()).toEqual(expect.any(String))
})

test("get the engineer role", () => {
    const engineer = new Engineer(data);

    expect(engineer.getRole()).toEqual("Engineer")
})