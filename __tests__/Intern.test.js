const Intern = require('../lib/Intern')

const data = {
    name: 'superman',
    employeeID: '4555',
    emailAddress: 'kryptonite-sucks@gmail.com',
    school: 'Sky High Middle School'
}

test("create intern object", () => {
    const intern = new Intern(data)

    expect(intern.name).toBe(data.name)
    expect(intern.id).toBe(data.employeeID)
    expect(intern.email).toBe(data.emailAddress)
    expect(intern.school).toBe(data.school)
})

test("get the interns school", () => {
    const intern = new Intern(data);

    expect(intern.getSchool()).toBe(data.school)
})

test("get the intern role", () => {
    const intern = new Intern(data);

    expect(intern.getRole()).toEqual("Intern")
})