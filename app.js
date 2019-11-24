const Manager = require("./lib/Manager.js");
const Enginer = require("./lib/Engineer.js");
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
      team.push(manager);
    }
    let nextMember = await inquirer.prompt(questions.nextMember);
    if (nextMember.position === "engineer") {
      let engineer = await inquirer.prompt(questions.engineer);
      team.push(engineer);
    } else if (nextMember.position === "intern") {
    } else {
      buildingTeam = false;
    }
  }
}
