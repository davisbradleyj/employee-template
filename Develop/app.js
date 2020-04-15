const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const emp = []
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
// prompt a function to ask manager (established already) about their details
// Manager questions
function manager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your employee id number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "office"
        }
    ])
        // add manager to an employee array
        .then(function (response) {
            console.log(response)
            emp.push(new Manager(response.name, response.id, response.email, response.office))
            buildTeam();
        });
}
// prompt a dropdown list to enter in a engineer or intern or exit
// ------- Code --------
function buildTeam() {
    inquirer.prompt([
        {
            type: "list",
            message: "Who would you like to add to the team?",
            name: "team",
            choices: ["Engineer", "Intern", "Team is complete!"]
        }
    ])
        // ask about team members
        .then(function (response) {
            if (response.team === "Engineer") {
                console.log("create engineer")
                // prompt the engineer question block
                engineer();
            } else if (response.team === "Intern") {
                console.log("create intern")
                // prompt the intern question block
                intern();
            } else {
                // exit function, call render function and write team to html.
                console.log("exiting, and writing team")
                fs.writeFile(outputPath, render(emp), function (err) {
                    if (err) {
                        return
                    } else
                    console.log("team successfully written")
                })
            }
        })
        .catch(function (err) {
            console.log(err);
        })
}
// Engineer questions for Manager to fill out 
function engineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is this engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is this engineer's id number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is this engineer's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is this engineer's github username?",
            name: "github"
        }
    ])
        // add engineer to an employee array
        .then(function (response) {
            emp.push(new Engineer(response.name, response.id, response.email, response.github))
            buildTeam();
        });
}
// intern questions for Manager to fill out 
function intern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is this intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is this intern's id number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is this intern's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "Where does this intern got to school?",
            name: "school"
        }
    ])
        // add intern to an employee array
        .then(function (response) {
            emp.push(new Intern(response.name, response.id, response.email, response.school))
            buildTeam();
        });
}
manager();

