
function internCard(employees){
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${intern.getRole()}</li>
        <li class="list-group-item">${intern.id}</li>
        <li class="list-group-item">${intern.email}</li>
        <li class="list-group-item">${intern.school}</li>
      </ul>
    </div>
  </div>` }
  module.exports = internCard