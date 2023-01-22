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
        message: "What is the title of your project",
        name: "title",
    },])
    //getting the answers to the prompts and splitting them into variables to be used in the HTML file to be created
    .then ((answers) =>
    {

        fs.writeFile('./output/README.md',
        //the website itself, formatted and styled as a HTML file
    ``,
    //error catch and console log in case of success
          (err)=>
        err ? console.error(err) : console.log('Enjoy your ReadMe!')
        )
    
    });