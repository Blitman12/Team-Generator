const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

let shouldContinue = true;

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

const teamMemberQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Team Members name?',
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
        message: 'What is the team members email address?',
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
        name: 'github',
        message: 'What is the members github username?',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please enter the github username');
                return false;
            }
        }
    }
]

const addAnotherMember = async () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add a team member?',
            default: false
        },
        {
            type: 'list',
            name: 'jobType',
            choices: ['Engineer', 'Intern'],
            when: ({ confirmAdd }) => {
                if (confirmAdd) {
                    return true
                } else {
                    return false
                }
            }
        }
    ]).then(data => {
        if ( !data.confirmAdd ) {
            shouldContinue = false;
        }

        return data;
    })
}


const promptQuestions = async () => {
    const engineerMembers = []
    const internMembers = []
    const managerAnswers = await inquirer.prompt(managerQuestions)

    do {
        const addMember = await addAnotherMember()
        if (addMember.confirmAdd && addMember.jobType === 'Engineer') {
            engineerMembers.push(await inquirer.prompt(teamMemberQuestions))
        }
        if (addMember.confirmAdd && addMember.jobType === 'Intern') {
            internMembers.push(await inquirer.prompt(teamMemberQuestions))
        }
    } while (shouldContinue);

    return { managerAnswers, engineerMembers, internMembers }
}


promptQuestions()
    .then(data => {
        console.log(data)
    })

