const Intern = require('../lib/Intern')

const data = {
    name: 'superman',
    employeeID: '4555',
    emailAddress: 'kryptonite-sucks@gmail.com',
    school: 'Sky High Middle School'
}

test("create intern object", () => {
    const intern = new Intern(data)

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(String))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))
})

test("get the interns school", () => {
    const intern = new Intern(data);

    expect(intern.getSchool()).toEqual(expect.any(String))
})

test("get the intern role", () => {
    const intern = new Intern(data);

    expect(intern.getRole()).toEqual("Intern")
})