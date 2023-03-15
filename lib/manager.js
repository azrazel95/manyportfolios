//imports the employee super class
const Employee = require(`./employee`);
//establishes the manager class and declares its properties and functions
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNum() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    }
}
module.exports = Manager;