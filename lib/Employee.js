const data = {
    name: 'Batman',
    employeeID: '808',
    emailAddress: 'batcave@gmail.com',
    officeNum: 'B57'
}

class Employee {
    constructor(data) {
        this.name = data.name;
        this.id = data.employeeID;
        this.email = data.emailAddress;
    }
    getName() {
        return this.name
    }
    getID() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }
}


module.exports = Employee;