//imports the employee super class
const Employee = require(`./employee`);
//establishes the intern class and declares its properties and functions
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern";
    }
}
module.exports = Intern;