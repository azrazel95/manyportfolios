//imports the employee super class
const Employee = require(`./employee`);
//establishes the engineer class and declares its properties and functions
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;