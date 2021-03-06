const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (data){
        super(data)

        this.github = data.github
    }

    getRole() {
        return 'Engineer'
    }

    getGithub() {
        return this.github
    }
}

module.exports = Engineer;