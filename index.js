//importing inquirer
const inquirer = require("./node_modules/inquirer");
//importing filesystem
const fs = require('fs');
//inquirerfunction
inquirer
//calling the prompt method
.prompt([
    {
        type: "input",
        message: "What is the team managers name?",
        name: "Managername",
    },
    {
        type: "input",
        message: "What is the team managers employee ID?",
        name: "Managerid",
    },
    {
        type: "input",
        message: "What is the team managers Email adress?",
        name: "Manageremail",
    },
    {
        type: "input",
        message: "What is the team managers office number?",
        name: "Managernumber",
    },
    {
        type: "list",
        message: "would you like to enter another employee? or quit?",
        choices:["add engineer", "add intern", "quit"],
        name: "options"
    },
    {
        type: "input",
        message: "What is the team managers name",
        name: "Managername",
    },])
    //getting the answers to the prompts and splitting them into variables to be used in the HTML file to be created
    .then ((answers) =>
    {

        fs.writeFile('./dist/index.html',
        //the website itself, formatted and styled as a HTML file
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Employee sheet</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./Assets/style.css"/>
    </head>
    <body>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Our Team</span>
  </div>
</nav>`,
    //error catch and console log in case of success
          (err)=>
        err ? console.error(err) : console.log('Enjoy your ReadMe!')
        )
    
    });