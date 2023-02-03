
function engineerCard(employees){
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.getRole()}</li>
        <li class="list-group-item">${engineer.id}</li>
        <li class="list-group-item">${engineer.email}</li>
        <li class="list-group-item">${engineer.github}</li>
      </ul>
    </div>
  </div>`
}
module.exports = engineerCard