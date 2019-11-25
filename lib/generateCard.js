function generateCard(member) {
  const role = member.getRole();
  let specRolePropName;
  let specRoleProp;

  switch (role) {
    case "Manager":
      specRolePropName = "Office Number";
      specRoleProp = member.getOfficeNumber();
      break;
    case "Engineer":
      specRolePropName = "GitHub";
      specRoleProp = member.getGithub();
      break;
    default:
      specRolePropName = "School";
      specRoleProp = member.getSchool();
      break;
  }

  return `
<div class="col-md-4">
  <div class="card my-4 rounded shadow">
    <div class="card-header">
      <h4>${member.getName()}</h4>
      <h5>${role}</h5>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush border">
        <li class="list-group-item">ID: ${member.getId()}</li>
        <li class="list-group-item">Email: ${member.getEmail()}</li>
        <li class="list-group-item">${specRolePropName}: ${specRoleProp}</li>
      </ul>
    </div>
  </div>
</div>
`;
}

module.exports = generateCard;
