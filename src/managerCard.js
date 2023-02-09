
function managerCard(employees){
    return`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${Manager.name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item man">${Manager.getRole()}</li>
        <li class="list-group-item">${Manager.id}</li>
        <li class="list-group-item">${Manager.email}</li>
        <li class="list-group-item">${Manager.officeNumber}</li>
      </ul>
    </div>
  </div>
    `
}
module.exports = managerCard