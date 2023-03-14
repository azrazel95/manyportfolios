const EngineerCard = require("./engineerCard.js");
const InternCard = require("./internCard.js");
const ManagerCard = require("./managerCard.js");
function body(cards) {
    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        // check if employee is a Manager
        if (employees[i].getRole() === "Manager") {
            console.log(employee)
            // create a new ManagerCard and pass the employee's information as arguments
            let managerCard = ManagerCard(employee.name, employee.id, employee.email, employee.officeNumber,);
            cards.push(managerCard);
        } else if (employees[i].getRole() ===  "Engineer") {
            // create a new EngineerCard and pass the employee's information as arguments
            let engineerCard = EngineerCard(employee.name, employee.id, employee.email, employee.github);
            cards.push(engineerCard);
        } else if (employees[i].getRole() ===  "Intern") {
            // create a new InternCard and pass the employee's information as arguments
            let internCard = InternCard(employee.name, employee.id, employee.email, employee.school);
            cards.push(internCard);
        } 
    } team = cards.join("");
  
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Employee sheet</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./Assets/style.css"/>
    </head>
    <body>
    <nav class="navbar bg-danger bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand  mb-0 h1">Our Team</span>
  </div>
</nav>
${team}
</body>
</html>`

}; module.exports = body