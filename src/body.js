//declaring the cards array
let cards = []
//the function that creates the body of the html file
function body(employees) {
  //the functions that take in the employee from the for loop and distribute it along the cards
function ManagerCard(employee) {
  
  return `<div class="card m-5 align-items-center col bg-danger" style="width: 18rem; height: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item man">Manager</li>
        <li class="list-group-item">${employee.id}</li>
        <li class="list-group-item">${employee.email}</li>
        <li class="list-group-item">${employee.officeNumber}</li>
      </ul>
    </div>
  </div>
    `
}


function EngineerCard(employee) {
  return `<div class="card m-5 align-items-center col bg-danger" style="width: 18rem; height: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Engineer</li>
        <li class="list-group-item">${employee.id}</li>
        <li class="list-group-item">${employee.email}</li>
        <li class="list-group-item">${employee.github}</li>
      </ul>
    </div>
  </div>`
}



function InternCard(employee) {
  return `
  <div class="card m-5 align-items-center col bg-danger" style="width: 18rem; height: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Intern</li>
        <li class="list-group-item">${employee.id}</li>
        <li class="list-group-item">${employee.email}</li>
        <li class="list-group-item">${employee.school}</li>
      </ul>
    </div>
  </div>` }

  //for loop to iterate iver the employee array
    for (let i = 0; i < employees.length; i++) {
      //declaring the current index of employees as employee
        let employee = employees[i];
        // check if employee is a Manager
        if (employees[i].getRole() === "Manager") {
            // creates a new ManagerCard and passes the employee
            let managerCard = ManagerCard(employee);
            //pushes the card into the cards array
            cards.push(managerCard);
        } else if (employees[i].getRole() ===  "Engineer") {
            // creates a new EngineerCard and passes the employee
            let engineerCard = EngineerCard(employee);
            //pushes the card into the cards array
            cards.push(engineerCard);
        } else if (employees[i].getRole() ===  "Intern") {
            // creates a new InternCard and passes the employee
            let internCard = InternCard(employee);
            //pushes the card into the cards array
            cards.push(internCard);
        } 
        //joins the cards array into a readable string
    } team = cards.join("");
  //returns the index page "shell", so to speak, wrapping around the cards passed as team
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
<div class="container text-center">
    <div class="row">
    
${team}
</div>
</div>
</body>
</html>`

}; module.exports = body