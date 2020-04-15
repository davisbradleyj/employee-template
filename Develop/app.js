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


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// my pseudo - prompt a function to ask manager (established already) about their details
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
    // initialize function to build team

}

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
                // exit function and write team to html.
                console.log("exiting, and writing team")
                fs.writeFile(outputPath, render(emp), function (err) {
                    if (err) {
                        return
                    } else
                        console.log("Success!!")

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
    // send user back to buildTeam function to keep populating Engineering team

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
    // send user back to buildTeam function to keep populating Engineering team

}

manager();



// prompt a dropdown list to enter in a engineer or intern or exit
// ------- Code --------
// async function which waits for manager to complete profile setup
// callbacks/promises
// 

// dropdown prompt query function
// ------- Code --------
// try inquirer.prompt for engineer/intern/quit question block

// leads to engineer or intern function 
// ------- Code Already written above--------
// run the appropriate function

// fill out questions for engineer or intern, push back into dropdown for additional entries
// ------- Dropdown code needs to be written, but essentially.... ----------
// function (does stuff)
// more stuff
// more stuff
// back to dropdown prompt query function

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// -------- Coding for render ----------
// could be called as part of the quit response

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// ----- code to write file/path ------
// use the const "output" from starter code


// 


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type. - complete

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ``` - all tests pass
