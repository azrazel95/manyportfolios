//importing inquirer
const inquirer = require("./node_modules/inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const body = require("./src/body.js");

let cards = [];
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
        let employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
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
                body(cards);
                makesite(team)
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
            let employee = new Engineer(answers.name, answers.id, answers.email, answers.github)
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
            let employee = new Intern(answers.name, answers.id, answers.email, answers.school)
            employees.push(employee);
            mainMenu();
        })
}
 function makesite(team){
    fs.writeFile('./dist/index.html', team, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}
