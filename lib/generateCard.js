function generateCard(member) {
  const role = member.getRole();
  let icon;
  let specRolePropName;
  let specRoleProp;

  switch (role) {
    case "Manager":
      icon = "fa-mug-hot";
      specRolePropName = "Office Number";
      specRoleProp = member.getOfficeNumber();
      break;
    case "Engineer":
      icon = "fa-glasses";
      specRolePropName = "GitHub";
      specRoleProp = member.getGithub();
      break;
    default:
      icon = "fa-user-graduate";
      specRolePropName = "School";
      specRoleProp = member.getSchool();
      break;
  }

  return `
<div class="col-md-4">
  <div class="card my-4 rounded shadow">
    <div class="card-header">
      <h4>${member.getName()}</h4>
      <h5>
        <i class="fas ${icon}"></i> ${role}
      </h5>
    </div>
    <div class="card-body px-2">
      <ul class="list-group list-group-flush border">
        <li class="list-group-item px-2">ID: ${member.getId()}</li>
        <li class="list-group-item px-2">Email: ${member.getEmail()}</li>
        <li class="list-group-item px-2">${specRolePropName}: ${specRoleProp}</li>
      </ul>
    </div>
  </div>
</div>
`;
}

module.exports = generateCard;
