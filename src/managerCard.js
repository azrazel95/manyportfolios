
function managerCard(employees){
    return`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item man">${manager.getRole()}</li>
        <li class="list-group-item">${manager.id}</li>
        <li class="list-group-item">${manager.email}</li>
        <li class="list-group-item">${manager.officeNumber}</li>
      </ul>
    </div>
  </div>
    `
}
module.exports = managerCard