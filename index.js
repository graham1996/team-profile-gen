const generatePage = require('./src/generatePage');
const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');

let team = [];

// inital menu function
function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'main',
            message: "What would you like to do?",
            choices: [
                { name: "Add Manager", value: "Manager" },
                { name: "Add Engineer", value: "Engineer" },
                { name: "Add Intern", value: "Intern" },
                { name: "Exit", value: "Exit" }
            ]
        }
    ])
    // switches for choices
    .then((answers) => {
        switch (answers.main) {
            case "Manager": {
                createManager();
                break;
            }
            case "Engineer": {
                createEngineer();
                break;
            }
            case "Intern": {
                createIntern();
                break;
            }
            case "Exit": {
                process.exit();
            }
        }
    })
}


function createManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team manager's ID",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team manager's email",
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "Please enter the team manager's office number",
        }
    ])
        .then((answers) => {
            let managerInput = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(managerInput);
            generateHTML();
            mainMenu();
        })
};

function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter engineer's name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter engineer's ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter engineer's email"
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter engineer's Github username",
        },
    ])

   .then((answers) => {
    let engineerInput = new Engineer(answers.name, answers.id, answers.email, answers.github);
    team.push(engineerInput);
    generateHTML();
    mainMenu();
   })
};

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter intern's name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter intern's ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter intern's email"
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school"
        }
    ])
    .then((answers) => {
        let internInput = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(internInput);
        generateHTML();
        mainMenu();
    })
}

function generateHTML() {
    employeeProfile = generatePage(team);
    fs.writeFile('./dist/index.html', employeeProfile, (err) => {
        if (err) throw err;
        console.log("Profile successfully created")
    })
}

mainMenu();


