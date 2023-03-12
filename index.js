//importing inquirer
const inquirer = require("./node_modules/inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const body = require("./src/body.js");
const EngineerCard = require("./src/engineerCard.js");
const InternCard = require("./src/internCard.js");
const ManagerCard = require("./src/managerCard.js");
const cards = [];
//importing filesystem
const fs = require('fs');
const employees = [];
//inquirerfunction
inquirer
    //calling the prompt method
    .prompt([
        {
            type: "input",
            message: "What is the team managers name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the team managers employee ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the team managers Email adress?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the team managers office number?",
            name: "officeNumber",
        },

    ])
    //getting the answers to the prompts and splitting them into variables to be used in the HTML file to be created
    .then((answers) => {
        const employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employees.push(employee);
        mainMenu();
    });
function mainMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "would you like to enter another employee? or quit?",
                choices: ["add engineer", "add intern", "quit"],
                name: "options"
            },
        ]).then(answers => {
            if (answers.options === "add engineer") {
                addEngineer()
            } else if (answers.options === "add intern") {
                addIntern()
            } else {
                buildTeam()
            }
        })
};
function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineers name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the engineers employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the engineers Email adress?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the engineers github account?",
                name: "github",
            }
        ]).then(answers => {
            const employee = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employees.push(employee);
            mainMenu();
        })
}
function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the interns name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the interns employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the interns Email adress?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the interns school?",
                name: "school",
            }
        ]).then(answers => {
            const employee = new Intern(answers.name, answers.id, answers.email, answers.school)
            employees.push(employee);
            mainMenu();
        })
}
function buildTeam() {
    console.log(employees)
    let cards = [];
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        // check if employee is a Manager
        if (employees[i].getRole() === "Manager") {
            console.log(employee)
            // create a new ManagerCard and pass the employee's information as arguments
            const managerCard = new ManagerCard(employee.name, employee.id, employee.email, employee.officeNumber,);
            cards.push(managerCard);
        } else if (employees[i].getRole() ===  "Engineer") {
            // create a new EngineerCard and pass the employee's information as arguments
            const engineerCard = new EngineerCard(employee.name, employee.id, employee.email, employee.github);
            cards.push(engineerCard);
        } else if (employees[i].getRole() ===  "Intern") {
            // create a new InternCard and pass the employee's information as arguments
            const internCard = new InternCard(employee.name, employee.id, employee.email, employee.school);
            cards.push(internCard);
        }
    }
    fs.writeFile('./dist/index.html', body(cards), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}
