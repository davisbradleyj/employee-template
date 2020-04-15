
# Employee Template

## Description

The user will be prompted to build an engineering team, consisting of a manager, and any number of engineers and interns.  Once all members of the team, and their details, have been entered byt the user, they can exit the menu upon which an html file will be rendered.

## Table of Contents

  * [Technology](#Technology)

  * [Summary](#Summary)
  
  * [License](#License)
  
  * [Contributing](#Contributing)
  
  * [Installation](#Installation]
  
  * [Tests](#Tests)
  
  * [Questions](#Questions)

## Technologies Used
- HTML - used to create elements on the DOM
- JavaScript - used to create the logic controlling the application
- jQuery - library supplement to JavaScript controlling application logic
- Node.js - runtime environment which executes the JS code
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Summary

While given a good headstart with the development of this application, there was stil quite a bit of work to do in developing the js files controlling the individual classes to ensure all tests would pass.  Once those files were developed, numerous functions would need to be established within the app.js file.

A series of functions would need to be written to to pass responses to an html file, one for each class of employee: manager, engineer, and intern. Next, logic would need to be developed which would allow the user answering the questions to choose the type of employee they are adding to their team: an engineer or an intern.  A third option is present to allow the user to complete the application upon successfully listing all their employees.

The code snippet I have highlighted below is this logic, showing the code in place to prompt the question block for a prospective user/manager to choose the next employee to add, the functions present depending on their choice of employee, and the logic allowing the user choices to be written to an html file.  It took a bit of effort to get the logic right to permit all the promises to be met prior to proceeding with writing the html.

One part of this project I would like to review in the future would be revising the styling: manager in their own row, engineers in their own row, and interns in their own row - all centered on the page.

<img src="https://github.com/davisbradleyj/employee-template/blob/master/Assets/employee_template.gif">
<img src="https://github.com/davisbradleyj/employee-template/blob/master/Assets/rendered_html_demo.gif">
<img src="https://github.com/davisbradleyj/employee-template/blob/master/Assets/team_build.png>

Code Snippet:
```
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
                    console.log("team successfully written")
                })
            }
        })
        .catch(function (err) {
            console.log(err);
        })
}
```

## License

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

## Contributing

Jerome Chenette, Kerwin Hy, Mahi Gunasekaran, Corbin Brockbank, Nadine Bundschuh

## Installation

To install necessary dependencies, please run the following command:

npm install

## Tests

To run tests, please execute the following command(s):

npm run test

## Questions

<img src="https://avatars2.githubusercontent.com/u/61176147?v=4" alt="avatar" style="border-radius: 16px" width="30">

If you have any questions about the repository, open an issue or contact [Brad Davis](https://api.github.com/users/davisbradleyj) directly at davis.bradleyj@gmail.com
