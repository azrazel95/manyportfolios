
function managerCard(employee) {
  return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item man">$Manager</li>
        <li class="list-group-item">${employee.id}</li>
        <li class="list-group-item">${employee.email}</li>
        <li class="list-group-item">${employee.officeNumber}</li>
      </ul>
    </div>
  </div>
    `
}
module.exports = managerCard