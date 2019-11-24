const manager = [
  {
    type: "input",
    message: "Who is the lead manager of the team?",
    name: "managerName",
    validate: function(value) {
      if (value.trim().length > 0) {
        return true;
      }
      return "Please enter a valid name.";
    }
  },
  {
    type: "number",
    message: "What is their ID number?",
    name: "idNumber",
    validate: function(value) {
      if (Number.isNaN(Number(value))) {
        return "Please enter a valid ID number.";
      } else {
        return true;
      }
    }
  },
  {
    type: "number",
    message: "What is their office number?",
    name: "officeNumber",
    validate: function(value) {
      if (Number.isNaN(Number(value))) {
        return "Please enter a valid office number.";
      } else {
        return true;
      }
    }
  }
];

const nextMember = [
  {
    type: "list",
    message: "What is the next team member's position?",
    choices: [
      "Engineer",
      "Intern",
      "No more team members. Build the team page."
    ],
    name: "position",
    filter: function(value) {
      return value.toLowerCase();
    }
  }
];

module.exports = { manager, nextMember };
