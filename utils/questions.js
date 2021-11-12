const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Team Manager name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is the employee ID Number?',
        validate: EIDInput => {
            if (EIDInput) {
                return true;
            } else {
                console.log('Please enter your employee ID#');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is the Team Manager`s email address?',
        validate: emailnput => {
            if (emailnput) {
                return true;
            } else {
                console.log('Please enter your email');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is your office number?',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter your office number');
                return false;
            }
        }
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer`s name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is the engineer`s employee ID Number?',
        validate: EIDInput => {
            if (EIDInput) {
                return true;
            } else {
                console.log('Please enter an employee ID#');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is the engineer`s email address?',
        validate: emailnput => {
            if (emailnput) {
                return true;
            } else {
                console.log('Please enter an email');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer`s github username?',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please enter the engineer`s github username');
                return false;
            }
        }
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern`s name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the intern`s name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is the intern`s ID Number?',
        validate: EIDInput => {
            if (EIDInput) {
                return true;
            } else {
                console.log('Please enter the intern`s employee ID#');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is the intern`s email address?',
        validate: emailnput => {
            if (emailnput) {
                return true;
            } else {
                console.log('Please enter the intern`s email');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern`s school?',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter the intern`s school');
                return false;
            }
        }
    }
]


module.exports = {
    internQuestions,
    engineerQuestions,
    managerQuestions
}