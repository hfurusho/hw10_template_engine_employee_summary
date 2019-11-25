const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const questions = require("./lib/questions.js");
const inquirer = require("inquirer");

init();

async function init() {
  try {
    const team = await buildTeam();
  } catch (err) {
    console.log(err);
  }
}

async function buildTeam() {
  let buildingTeam = (
    await inquirer.prompt([
      {
        type: "confirm",
        message: "Do you want to build a team page?",
        name: "buildingTeam"
      }
    ])
  ).buildingTeam;

  let team = [];
  let manager;

  while (buildingTeam) {
    if (!manager) {
      manager = await inquirer.prompt(questions.manager);
      team.push(
        new Manager(
          manager.name,
          manager.idNumber,
          manager.email,
          manager.uniqueProp
        )
      );
    }

    let nextMember = await inquirer.prompt(questions.nextMember);

    if (nextMember.position === "engineer") {
      let engineer = await inquirer.prompt(questions.engineer);
      team.push(
        new Engineer(
          engineer.name,
          engineer.idNumber,
          engineer.email,
          engineer.uniqueProp
        )
      );
    } else if (nextMember.position === "intern") {
      let intern = await inquirer.prompt(questions.intern);
      team.push(
        new Intern(
          intern.name,
          intern.idNumber,
          intern.email,
          intern.uniqueProp
        )
      );
    } else {
      buildingTeam = false;
      console.log(team);
    }
  }
}
