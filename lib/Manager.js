const Employee = require('./Employee');

const data = {
    name: 'brad',
    employeeID: 'brad',
    emailAddress: 'brad',
    officeNum: 'brad'
}

class Manager extends Employee {
    constructor(data) {
        super(data)
        this.officeNumber = data.officeNum
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager

