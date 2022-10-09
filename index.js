const generatePage = require('./src/generatePage');
const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');

let team = [];

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) throw err;
        console.log("Profile successfully created")
    })
}


const createManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's name."
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team manager's email.",
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "Please enter the team manager's office number.",
        }
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            let Manager = new Manager(name, id, email, officeNumber);

            team.push(Manager);
            console.log(Manager);
        })
};

const createEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter employee's name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter employee's ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter employee's email"
        },
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineers's github username"
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school"
        }
    ])

    .then(newEmployeeData => {
        let { name, id, email, role, github, school } = newEmployeeData;
        let employee;

        if (role === 'Intern') {
            employee = new Intern (name, id, email, school);

        } else if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
        }

        team.push(employee);
    })
};

createManager()
.then(createEmployee)
.then(team => {
return generatePage(team);
})
.then(html => {
    return writeFile(html);
})

