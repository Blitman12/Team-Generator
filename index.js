const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const writeFile = require('./utils/writeFile');
const {internQuestions, managerQuestions, engineerQuestions} = require('./utils/questions')

let shouldContinue = true;
const employees = [];

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
    const managerAnswers = await inquirer.prompt(managerQuestions)
    const manager = new Manager(managerAnswers)
    employees.push(manager)

    do {
        const addMember = await addAnotherMember()
        if (addMember.confirmAdd && addMember.jobType === 'Engineer') {
            let data = await inquirer.prompt(engineerQuestions)
            const engineer = new Engineer(data)
            employees.push(engineer)
        }
        if (addMember.confirmAdd && addMember.jobType === 'Intern') {
            let data = await inquirer.prompt(internQuestions)
            const intern = new Intern(data)
            employees.push(intern)
        }
    } while (shouldContinue);

    return employees
}


promptQuestions()
    .then(data => {
        return generatePage(data)
    })
    .then(pageHTML => {
        writeFile(pageHTML)
    })

